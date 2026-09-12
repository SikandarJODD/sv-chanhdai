import IndexTsRaw from "$lib/components/chan/spinning-circular-text/index.ts?raw";
import SpinningCircularTextSvelteRaw from "$lib/components/chan/spinning-circular-text/spinning-circular-text.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

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

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { SpinningCircularText } from "$chan/spinning-circular-text";
</script>

<SpinningCircularText text="Port By Bhide Svelte • " />`,
		lang: "svelte",
		isExpand: false
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
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Adjustable character spacing and font size",
		"Container size scales automatically to fit the text ring",
		"Announces the full text to screen readers via hidden content"
	],
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	usage,
	seo,
	props: [
		{
			name: "SpinningCircularText",
			desc: "Circular character layout with a continuously spinning ring.",
			props: [
				{
					name: "text",
					type: "string",
					required: true,
					description: "Text arranged around the circle."
				},
				{
					name: "charSpacing",
					type: "number",
					default: "1",
					description: "Spacing multiplier between characters."
				},
				{
					name: "fontSize",
					type: "string",
					default: "'1rem'",
					description: "CSS font size used for each character."
				},
				{
					name: "spinClass",
					type: "ClassValue",
					default: "undefined",
					description: "Classes applied to the spinning character ring."
				},
				{
					name: "renderChar",
					type: "Snippet<[{ char: string; index: number }]>",
					default: "undefined",
					description: "Custom renderer for each positioned character."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Additional classes applied to the outer container."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the outer container."
				}
			]
		}
	]
};
