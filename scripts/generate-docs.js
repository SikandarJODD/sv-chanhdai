import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const ROOT_DIR = process.cwd();
const COMPONENTS_DIR = path.join(
	ROOT_DIR,
	"src",
	"routes",
	"(main)",
	"components"
);
const REGISTRY_URL = "https://sv-animations.vercel.app/r";

function unwrapExpression(node) {
	if (
		ts.isAsExpression(node) ||
		ts.isSatisfiesExpression(node) ||
		ts.isParenthesizedExpression(node)
	) {
		return unwrapExpression(node.expression);
	}

	return node;
}

function propertyName(node) {
	if (
		ts.isIdentifier(node) ||
		ts.isStringLiteral(node) ||
		ts.isNumericLiteral(node)
	) {
		return node.text;
	}

	throw new Error(`Unsupported property name: ${node.getText()}`);
}

async function parseDataFile(dataFile) {
	const sourceText = await fs.readFile(dataFile, "utf8");
	const sourceFile = ts.createSourceFile(
		dataFile,
		sourceText,
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TS
	);
	const declarations = new Map();
	const imports = new Map();

	for (const statement of sourceFile.statements) {
		if (ts.isImportDeclaration(statement)) {
			const localName = statement.importClause?.name?.text;
			const importPath = statement.moduleSpecifier.text;

			if (localName) {
				imports.set(localName, importPath);
			}
		}

		if (!ts.isVariableStatement(statement)) {
			continue;
		}

		for (const declaration of statement.declarationList.declarations) {
			if (ts.isIdentifier(declaration.name) && declaration.initializer) {
				declarations.set(
					declaration.name.text,
					declaration.initializer
				);
			}
		}
	}

	async function evaluate(input) {
		const node = unwrapExpression(input);

		if (
			ts.isStringLiteral(node) ||
			ts.isNoSubstitutionTemplateLiteral(node)
		) {
			return node.text;
		}

		if (ts.isNumericLiteral(node)) {
			return Number(node.text);
		}

		if (node.kind === ts.SyntaxKind.TrueKeyword) {
			return true;
		}

		if (node.kind === ts.SyntaxKind.FalseKeyword) {
			return false;
		}

		if (node.kind === ts.SyntaxKind.NullKeyword) {
			return null;
		}

		if (ts.isIdentifier(node)) {
			if (node.text === "undefined") {
				return undefined;
			}

			if (declarations.has(node.text)) {
				return evaluate(declarations.get(node.text));
			}

			const importPath = imports.get(node.text);

			if (importPath?.endsWith("?raw")) {
				const sourcePath = importPath.slice(0, -"?raw".length);
				const resolvedPath = sourcePath.startsWith("$lib/")
					? path.join(
							ROOT_DIR,
							"src",
							"lib",
							sourcePath.slice("$lib/".length)
						)
					: sourcePath.startsWith(".")
						? path.resolve(path.dirname(dataFile), sourcePath)
						: undefined;

				if (!resolvedPath) {
					throw new Error(
						`Cannot resolve raw import "${importPath}" in ${dataFile}.`
					);
				}

				return fs.readFile(resolvedPath, "utf8");
			}

			if (importPath) {
				return undefined;
			}

			throw new Error(
				`Cannot resolve "${node.text}" while reading ${dataFile}.`
			);
		}

		if (ts.isTemplateExpression(node)) {
			let value = node.head.text;

			for (const span of node.templateSpans) {
				value += String(await evaluate(span.expression));
				value += span.literal.text;
			}

			return value;
		}

		if (ts.isArrayLiteralExpression(node)) {
			const values = [];

			for (const element of node.elements) {
				if (ts.isSpreadElement(element)) {
					values.push(...(await evaluate(element.expression)));
				} else {
					values.push(await evaluate(element));
				}
			}

			return values;
		}

		if (ts.isObjectLiteralExpression(node)) {
			const value = {};

			for (const property of node.properties) {
				if (ts.isSpreadAssignment(property)) {
					Object.assign(value, await evaluate(property.expression));
					continue;
				}

				if (ts.isPropertyAssignment(property)) {
					value[propertyName(property.name)] = await evaluate(
						property.initializer
					);
					continue;
				}

				if (ts.isShorthandPropertyAssignment(property)) {
					value[property.name.text] = await evaluate(property.name);
					continue;
				}

				throw new Error(
					`Unsupported object field: ${property.getText()}`
				);
			}

			return value;
		}

		throw new Error(`Unsupported value: ${node.getText()}`);
	}

	const dataDeclaration = declarations.get("data");

	if (!dataDeclaration) {
		throw new Error(`Missing exported data object in ${dataFile}.`);
	}

	return evaluate(dataDeclaration);
}

function codeFence(code, language = "") {
	const longestRun = Math.max(
		0,
		...Array.from(code.matchAll(/`+/g), (match) => match[0].length)
	);
	const fence = "`".repeat(Math.max(3, longestRun + 1));

	return `${fence}${language}\n${code.trim()}\n${fence}`;
}

function renderCodeBlocks(blocks) {
	return blocks
		.map((block, index) => {
			const heading =
				blocks.length > 1 ? `### ${block.name || index + 1}\n\n` : "";
			return `${heading}${codeFence(block.code, block.lang)}`;
		})
		.join("\n\n");
}

function renderInstallation(slug) {
	const componentUrl = `${REGISTRY_URL}/${slug}.json`;
	const commands = [
		["npm", `npx shadcn-svelte@latest add ${componentUrl}`],
		["pnpm", `pnpm dlx shadcn-svelte@latest add ${componentUrl}`],
		["yarn", `yarn dlx shadcn-svelte@latest add ${componentUrl}`],
		["bun", `bunx shadcn-svelte@latest add ${componentUrl}`]
	];

	return commands
		.map(
			([name, command]) => `### ${name}\n\n${codeFence(command, "bash")}`
		)
		.join("\n\n");
}

function renderExamples(examples) {
	if (!examples?.length) {
		return "";
	}

	const sections = examples.map((example) => {
		const parts = [`### ${example.name}`];

		if (example.description) {
			parts.push(example.description);
		}

		if (example.code?.code) {
			parts.push(codeFence(example.code.code, example.code.lang));
		}

		return parts.join("\n\n");
	});

	return `\n\n## Examples\n\n${sections.join("\n\n")}`;
}

function tableCell(value) {
	return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

function inlineCode(value) {
	const content = tableCell(value);
	const longestRun = Math.max(
		0,
		...Array.from(content.matchAll(/`+/g), (match) => match[0].length)
	);
	const fence = "`".repeat(longestRun + 1);

	return `${fence}${content}${fence}`;
}

function renderProps(propsTables, fallbackName) {
	const tables = (propsTables || []).filter((table) => table.props?.length);

	if (!tables.length) {
		return "";
	}

	const sections = tables.map((table) => {
		const rows = table.props.map((prop) => {
			const defaultValue =
				prop.default === undefined ? "—" : inlineCode(prop.default);
			const description = prop.description
				? tableCell(prop.description)
				: "—";

			return `| ${inlineCode(prop.name)} | ${inlineCode(prop.type)} | ${defaultValue} | ${prop.required ? "Yes" : "No"} | ${description} |`;
		});
		const parts = [`### ${table.name || fallbackName}`];

		if (table.desc) {
			parts.push(table.desc);
		}

		parts.push(
			[
				"| Prop | Type | Default | Required | Description |",
				"| --- | --- | --- | --- | --- |",
				...rows
			].join("\n")
		);

		return parts.join("\n\n");
	});

	return `\n\n## Props\n\n${sections.join("\n\n")}`;
}

function renderDocs(data) {
	if (!data.id || !data.title || !data.description) {
		throw new Error("data must include id, title, and description.");
	}

	const packages = data.install_block?.packages || [];
	const usage = data.usage?.length
		? data.usage
		: data.preview_code?.code
			? [data.preview_code]
			: [];
	const features = data.features || [];
	const usageSection = usage.length
		? renderCodeBlocks(usage)
		: "No usage example is available.";
	const featureSection = features.length
		? features.map((feature) => `- ${feature}`).join("\n")
		: "No features are listed.";

	return `# ${data.title}

${data.description}

Packages: ${packages.length ? packages.join(", ") : "None"}

## Installation

${renderInstallation(data.id)}

## Usage

${usageSection}${renderProps(data.props, data.title)}

## Features

${featureSection}${renderExamples(data.examples)}
`;
}

async function listComponents() {
	const entries = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true });

	return entries
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort((left, right) => left.localeCompare(right));
}

async function generateComponentDocs(componentName) {
	if (componentName !== path.basename(componentName)) {
		throw new Error(`Invalid component name "${componentName}".`);
	}

	const componentDirectory = path.join(COMPONENTS_DIR, componentName);
	const dataFile = path.join(componentDirectory, "data.ts");
	const docsFile = path.join(componentDirectory, "docs.md");

	try {
		await fs.access(dataFile);
	} catch {
		throw new Error(
			`Component "${componentName}" does not have a data.ts file.`
		);
	}

	const data = await parseDataFile(dataFile);
	await fs.writeFile(docsFile, renderDocs(data), "utf8");
	console.log(`Generated ${path.relative(ROOT_DIR, docsFile)}`);
}

async function main() {
	const requestedComponents = process.argv.slice(2);

	if (
		requestedComponents.includes("--help") ||
		requestedComponents.includes("-h")
	) {
		console.log(`Usage:
  pnpm generate:docs
  pnpm generate:docs <component> [component...]

With no component names, docs are generated for every component.`);
		return;
	}

	const components = requestedComponents.length
		? requestedComponents
		: await listComponents();

	for (const component of components) {
		await generateComponentDocs(component);
	}
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
	main().catch((error) => {
		console.error(error.message);
		process.exitCode = 1;
	});
}

export { parseDataFile, renderDocs };
