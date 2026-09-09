import IndexTsRaw from "$lib/components/chan/testimonial-2/index.ts?raw";
import Testimonial2SvelteRaw from "$lib/components/chan/testimonial-2/testimonial-2.svelte?raw";

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
	id: "testimonial-2",
	title: "Testimonial 2",
	description:
		"Display a testimonial quote with author attribution and source link.",
	category: "chan"
};

const seo: SEO = {
	title: "Testimonial 2",
	description:
		"Display a testimonial quote with author attribution and source link.",
	keywords: ["Svelte", "Testimonial 2", "Component"]
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
			name: "testimonial-2.svelte",
			code: Testimonial2SvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- testimonial-2/\n                |-- index.ts\n                `-- testimonial-2.svelte"
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
