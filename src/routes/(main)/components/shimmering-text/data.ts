import IndexTsRaw from "$lib/components/chan/shimmering-text/index.ts?raw";
import ShimmeringTextSvelteRaw from "$lib/components/chan/shimmering-text/shimmering-text.svelte?raw";

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
	id: "shimmering-text",
	title: "Shimmering Text",
	description: "TODO: Add a concise description for Shimmering Text.",
	category: "chan",
};

const seo: SEO = {
	title: "Shimmering Text",
	description: "TODO: Add an SEO description for Shimmering Text.",
	keywords: ["Svelte", "Shimmering Text", "Component"],
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
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "shimmering-text.svelte", code: ShimmeringTextSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- shimmering-text/\n                |-- index.ts\n                `-- shimmering-text.svelte",
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
