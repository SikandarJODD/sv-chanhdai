import IndexTsRaw from "$lib/components/chan/testimonial-spotlight/index.ts?raw";
import TestimonialSpotlightSvelteRaw from "$lib/components/chan/testimonial-spotlight/testimonial-spotlight.svelte?raw";

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
	id: "testimonial-spotlight",
	title: "Testimonial Spotlight",
	description: "TODO: Add a concise description for Testimonial Spotlight.",
	category: "chan",
};

const seo: SEO = {
	title: "Testimonial Spotlight",
	description: "TODO: Add an SEO description for Testimonial Spotlight.",
	keywords: ["Svelte", "Testimonial Spotlight", "Component"],
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
		{ name: "testimonial-spotlight.svelte", code: TestimonialSpotlightSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- testimonial-spotlight/\n                |-- index.ts\n                `-- testimonial-spotlight.svelte",
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
