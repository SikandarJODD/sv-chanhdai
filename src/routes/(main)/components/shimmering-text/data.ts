import IndexTsRaw from "$lib/components/chan/shimmering-text/index.ts?raw";
import ShimmeringTextSvelteRaw from "$lib/components/chan/shimmering-text/shimmering-text.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "shimmering-text",
	title: "Shimmering Text",
	description:
		"Animated text with a configurable character-by-character shimmer effect.",
	category: "chan"
};

const seo: SEO = {
	title: "Shimmering Text",
	description:
		"Add a configurable character-by-character shimmer animation to text in Svelte.",
	keywords: ["Svelte", "Shimmering Text", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["motion-sv"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "shimmering-text.svelte",
			code: ShimmeringTextSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Smooth, light-sweeping shimmer animation for text",
		"Customizable animation duration and a stop control via isStopped",
		"Customizable base and peak highlight colors via CSS variables"
	],
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
			name: "ShimmeringText",
			desc: "Animated text with a staggered shimmer across its characters.",
			props: [
				{
					name: "text",
					type: "string",
					required: true,
					description: "Text rendered with the shimmering effect."
				},
				{
					name: "duration",
					type: "number",
					default: "1",
					description: "Duration of one shimmer cycle in seconds."
				},
				{
					name: "isStopped",
					type: "boolean",
					default: "false",
					description:
						"Pauses the shimmer and returns characters to their resting color."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the outer span."
				}
			]
		}
	]
};
