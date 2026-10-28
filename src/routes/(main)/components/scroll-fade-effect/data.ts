import IndexTsRaw from "#lib/components/chan/scroll-fade-effect/index.ts?raw";
import ScrollFadeEffectSvelteRaw from "#lib/components/chan/scroll-fade-effect/scroll-fade-effect.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "scroll-fade-effect",
	title: "Scroll Fade Effect",
	description:
		"A CSS scroll mask that fades content at vertical or horizontal edges.",
	category: "chan"
};

const seo: SEO = {
	title: "Scroll Fade Effect",
	description:
		"A CSS scroll mask that fades content at vertical or horizontal edges.",
	keywords: ["Svelte", "Scroll Fade Effect", "Component"]
};

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
			name: "scroll-fade-effect.svelte",
			code: ScrollFadeEffectSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Content fades in and out smoothly as you scroll",
		"Supports both vertical and horizontal scrolling",
		"Deprecated in favor of the shadcn/ui scroll-fade utility"
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
			name: "ScrollFadeEffect",
			desc: "Scrollable container with directional edge fades.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Content rendered inside the scrollable container."
				},
				{
					name: "orientation",
					type: "'vertical' | 'horizontal' | 'both'",
					default: "'vertical'",
					description:
						"Direction in which scrolling and edge fades are enabled."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the scroll container."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the scroll container."
				}
			]
		}
	]
};
