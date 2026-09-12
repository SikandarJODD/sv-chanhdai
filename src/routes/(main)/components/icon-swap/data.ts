import IconSwapItemSvelteRaw from "$lib/components/chan/icon-swap/icon-swap-item.svelte?raw";
import IconSwapSvelteRaw from "$lib/components/chan/icon-swap/icon-swap.svelte?raw";
import IndexTsRaw from "$lib/components/chan/icon-swap/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "icon-swap",
	title: "Icon Swap",
	description: "Animate icon swaps with scale, blur, and fade transitions.",
	category: "chan"
};

const seo: SEO = {
	title: "Icon Swap",
	description: "Animate icon swaps with scale, blur, and fade transitions.",
	keywords: ["Svelte", "Icon Swap", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["motion-sv"],
	install_code: [
		{
			name: "icon-swap-item.svelte",
			code: IconSwapItemSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "icon-swap.svelte", code: IconSwapSvelteRaw, lang: "svelte" },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Animate icon swaps with scale, blur, and fade transitions",
		"Compound component structure with IconSwap and IconSwapItem",
		"Swap triggers automatically when the item's key changes"
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
			name: "IconSwap",
			desc: "AnimatePresence wrapper for swapping icon content.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Keyed IconSwapItem content to animate between."
				},
				{
					name: "mode",
					type: "AnimatePresenceProps['mode']",
					default: "'popLayout'",
					description: "Controls how entering and exiting items are sequenced."
				},
				{
					name: "initial",
					type: "boolean",
					default: "false",
					description: "Whether content should animate on its initial render."
				}
			]
		},
		{
			name: "IconSwapItem",
			desc: "Motion element that defines the icon enter and exit transition.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Icon content rendered inside the motion element."
				},
				{
					name: "as",
					type: "typeof motion.div | typeof motion.span",
					default: "motion.div",
					description: "Motion element used as the item wrapper."
				}
			]
		}
	]
};
