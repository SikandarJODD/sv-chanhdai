import IndexTsRaw from "$lib/components/chan/spinning-circular-text/index.ts?raw";
import SpinningCircularTextSvelteRaw from "$lib/components/chan/spinning-circular-text/spinning-circular-text.svelte?raw";

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
	id: "spinning-circular-text",
	title: "Spinning Circular Text",
	description:
		"Text arranged in a circle with a continuous spinning animation.",
	category: "chan"
};

const seo: SEO = {
	title: "Spinning Circular Text",
	description:
		"Text arranged in a circle with a continuous spinning animation.",
	keywords: ["Svelte", "Spinning Circular Text", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "spinning-circular-text.svelte",
			code: SpinningCircularTextSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- spinning-circular-text/\n                |-- index.ts\n                `-- spinning-circular-text.svelte"
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
