import ElasticSliderStateSvelteTsRaw from "$lib/components/chan/elastic-slider/elastic-slider-state.svelte.ts?raw";
import ElasticSliderSvelteRaw from "$lib/components/chan/elastic-slider/elastic-slider.svelte?raw";
import ElasticSliderUtilsTsRaw from "$lib/components/chan/elastic-slider/elastic-slider.utils.ts?raw";
import IndexTsRaw from "$lib/components/chan/elastic-slider/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "elastic-slider",
	title: "Elastic Slider",
	description:
		"Slider with elastic rubber-band drag and magnetic snap feedback.",
	category: "chan"
};

const seo: SEO = {
	title: "Elastic Slider",
	description:
		"Slider with elastic rubber-band drag and magnetic snap feedback.",
	keywords: ["Svelte", "Elastic Slider", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	install_code: [
		{
			name: "elastic-slider-state.svelte.ts",
			code: ElasticSliderStateSvelteTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "elastic-slider.svelte",
			code: ElasticSliderSvelteRaw,
			lang: "svelte"
		},
		{
			name: "elastic-slider.utils.ts",
			code: ElasticSliderUtilsTsRaw,
			lang: "typescript"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
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
	seo,
	props: [
		{
			name: "ElasticSlider",
			desc: "Controlled or uncontrolled elastic value slider.",
			props: [
				{
					name: "label",
					type: "string",
					required: true,
					description: "Label displayed inside the slider track."
				},
				{
					name: "value",
					type: "number",
					default: "undefined",
					description: "Controlled slider value."
				},
				{
					name: "defaultValue",
					type: "number",
					default: "min",
					description: "Initial value when the slider is uncontrolled."
				},
				{
					name: "onValueChange",
					type: "(value: number) => void",
					default: "undefined",
					description: "Called after drag, click, or keyboard interaction changes the value."
				},
				{
					name: "min",
					type: "number",
					default: "0",
					description: "Minimum allowed value."
				},
				{
					name: "max",
					type: "number",
					default: "1",
					description: "Maximum allowed value."
				},
				{
					name: "step",
					type: "number",
					default: "0.01",
					description: "Increment used when snapping values."
				},
				{
					name: "formatValue",
					type: "(value: number) => string",
					default: "undefined",
					description: "Formats the value displayed in the track."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the outer slider element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the slider."
				}
			]
		}
	]
};
