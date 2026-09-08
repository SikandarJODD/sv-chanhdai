import DotGridSpotlightSvelteRaw from "$lib/components/chan/dot-grid-spotlight/dot-grid-spotlight.svelte?raw";
import IndexTsRaw from "$lib/components/chan/dot-grid-spotlight/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "dot-grid-spotlight",
	title: "Dot Grid Spotlight",
	description: "TODO: Add a concise description for Dot Grid Spotlight.",
	category: "chan",
};

const seo: SEO = {
	title: "Dot Grid Spotlight",
	description: "TODO: Add an SEO description for Dot Grid Spotlight.",
	keywords: ["Svelte", "Dot Grid Spotlight", "Component"],
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "dot-grid-spotlight.svelte", code: DotGridSpotlightSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- dot-grid-spotlight/\n                |-- dot-grid-spotlight.svelte\n                `-- index.ts",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	install_block,
	examples,
	seo,
	props: [],
};
