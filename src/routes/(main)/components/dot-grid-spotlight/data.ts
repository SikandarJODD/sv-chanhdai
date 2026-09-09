import DotGridSpotlightSvelteRaw from "$lib/components/chan/dot-grid-spotlight/dot-grid-spotlight.svelte?raw";
import IndexTsRaw from "$lib/components/chan/dot-grid-spotlight/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "dot-grid-spotlight",
	title: "Dot Grid Spotlight",
	description:
		"Interactive dot grid with a cursor-tracking spotlight effect.",
	category: "chan"
};

const seo: SEO = {
	title: "Dot Grid Spotlight",
	description:
		"Interactive dot grid with a cursor-tracking spotlight effect.",
	keywords: ["Svelte", "Dot Grid Spotlight", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["runed"],
	install_code: [
		{
			name: "dot-grid-spotlight.svelte",
			code: DotGridSpotlightSvelteRaw,
			lang: "svelte",
			isExpand: true
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
			name: "DotGridSpotlight",
			desc: "Canvas dot grid with a pointer-driven spotlight.",
			props: [
				{
					name: "dotColor",
					type: "string",
					default: "'rgba(255, 255, 255, 0.05)'",
					description: "Color used for inactive dots."
				},
				{
					name: "activeDotColor",
					type: "string",
					default: "'rgba(255, 255, 255, 0.1)'",
					description: "Color used for dots illuminated by the pointer."
				},
				{
					name: "spacing",
					type: "number",
					default: "10",
					description: "Distance between dots in pixels."
				},
				{
					name: "baseRadius",
					type: "number",
					default: "1",
					description: "Radius of inactive dots in pixels."
				},
				{
					name: "activeRadius",
					type: "number",
					default: "2",
					description: "Radius of a dot at the center of the spotlight."
				},
				{
					name: "interactionRadius",
					type: "number",
					default: "128",
					description: "Radius of the pointer spotlight in pixels."
				},
				{
					name: "activeMaxAlpha",
					type: "number",
					default: "1",
					description: "Opacity applied at the center of the spotlight."
				},
				{
					name: "activeMinAlpha",
					type: "number",
					default: "0.5",
					description: "Opacity applied at the edge of the spotlight."
				},
				{
					name: "ref",
					type: "HTMLCanvasElement | null",
					default: "null",
					description: "Bindable reference to the canvas element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the canvas."
				}
			]
		}
	]
};
