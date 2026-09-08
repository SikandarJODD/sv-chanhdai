import ChevronsUpDownIconSvelteRaw from "$lib/components/chan/chevrons-up-down-icon/chevrons-up-down-icon.svelte?raw";
import IndexTsRaw from "$lib/components/chan/chevrons-up-down-icon/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "chevrons-up-down-icon",
	title: "Chevrons Up Down Icon",
	description: "TODO: Add a concise description for Chevrons Up Down Icon.",
	category: "chan"
};

const seo: SEO = {
	title: "Chevrons Up Down Icon",
	description: "TODO: Add an SEO description for Chevrons Up Down Icon.",
	keywords: ["Svelte", "Chevrons Up Down Icon", "Component"]
};

const examples: Example[] = [
	// {
	// 	name: "Demo",
	// 	preview: DemoExample,
	// 	code: {
	// 		name: "demo-example.svelte",
	// 		code: DemoExampleRaw,
	// 		lang: "svelte",
	// 	},
	// },
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "chevrons-up-down-icon.svelte",
			code: ChevronsUpDownIconSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- chevrons-up-down-icon/\n                |-- chevrons-up-down-icon.svelte\n                `-- index.ts"
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	examples,
	seo,
	props: []
};
