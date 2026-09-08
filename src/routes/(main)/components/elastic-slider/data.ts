import ElasticSliderStateSvelteTsRaw from "$lib/components/chan/elastic-slider/elastic-slider-state.svelte.ts?raw";
import ElasticSliderSvelteRaw from "$lib/components/chan/elastic-slider/elastic-slider.svelte?raw";
import ElasticSliderUtilsTsRaw from "$lib/components/chan/elastic-slider/elastic-slider.utils.ts?raw";
import IndexTsRaw from "$lib/components/chan/elastic-slider/index.ts?raw";

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
	id: "elastic-slider",
	title: "Elastic Slider",
	description: "TODO: Add a concise description for Elastic Slider.",
	category: "chan",
};

const seo: SEO = {
	title: "Elastic Slider",
	description: "TODO: Add an SEO description for Elastic Slider.",
	keywords: ["Svelte", "Elastic Slider", "Component"],
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
		{ name: "elastic-slider-state.svelte.ts", code: ElasticSliderStateSvelteTsRaw, lang: "typescript", isExpand: true, },
		{ name: "elastic-slider.svelte", code: ElasticSliderSvelteRaw, lang: "svelte", },
		{ name: "elastic-slider.utils.ts", code: ElasticSliderUtilsTsRaw, lang: "typescript", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- elastic-slider/\n                |-- elastic-slider-state.svelte.ts\n                |-- elastic-slider.svelte\n                |-- elastic-slider.utils.ts\n                `-- index.ts",
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
