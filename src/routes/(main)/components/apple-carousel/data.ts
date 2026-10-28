import AppleCarouselContentSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-content.svelte?raw";
import AppleCarouselContextSvelteTsRaw from "#lib/components/chan/apple-carousel/apple-carousel-context.svelte.ts?raw";
import AppleCarouselControlsSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-controls.svelte?raw";
import AppleCarouselItemSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-item.svelte?raw";
import AppleCarouselPlayButtonSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-play-button.svelte?raw";
import AppleCarouselProviderSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-provider.svelte?raw";
import AppleCarouselStateSvelteTsRaw from "#lib/components/chan/apple-carousel/apple-carousel-state.svelte.ts?raw";
import AppleCarouselTabListSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-tab-list.svelte?raw";
import AppleCarouselTabSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel-tab.svelte?raw";
import AppleCarouselTypesTsRaw from "#lib/components/chan/apple-carousel/apple-carousel-types.ts?raw";
import AppleCarouselUtilsTsRaw from "#lib/components/chan/apple-carousel/apple-carousel-utils.ts?raw";
import AppleCarouselSvelteRaw from "#lib/components/chan/apple-carousel/apple-carousel.svelte?raw";
import IndexTsRaw from "#lib/components/chan/apple-carousel/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "#lib/types/structure.js";
import type { Example } from "#lib/types/example.js";
import type { SEO } from "#lib/types/seo.js";
import CaptionsExample from "./examples/captions.svelte";
import CaptionsExampleCode from "./examples/captions.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "apple-carousel",
	title: "Apple Carousel",
	description:
		"An infinite Svelte carousel with autoplay, progress dots, captions, and tab controls.",
	category: "chan"
};

const seo: SEO = {
	title: "Apple Carousel",
	description:
		"An infinite Svelte carousel with autoplay, progress dots, captions, and tab controls.",
	keywords: [
		"Svelte",
		"Apple Carousel",
		"Infinite Carousel",
		"Autoplay Carousel",
		"Component"
	]
};

const examples: Example[] = [
	{
		name: "Captions",
		description:
			"Overlay responsive captions and actions on each carousel image.",
		preview: CaptionsExample,
		previewClass: "px-0 py-10!",
		code: {
			name: "captions.svelte",
			code: CaptionsExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	install_code: [
		{
			name: "apple-carousel-content.svelte",
			code: AppleCarouselContentSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "apple-carousel-context.svelte.ts",
			code: AppleCarouselContextSvelteTsRaw,
			lang: "typescript"
		},
		{
			name: "apple-carousel-controls.svelte",
			code: AppleCarouselControlsSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-item.svelte",
			code: AppleCarouselItemSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-play-button.svelte",
			code: AppleCarouselPlayButtonSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-provider.svelte",
			code: AppleCarouselProviderSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-state.svelte.ts",
			code: AppleCarouselStateSvelteTsRaw,
			lang: "typescript"
		},
		{
			name: "apple-carousel-tab-list.svelte",
			code: AppleCarouselTabListSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-tab.svelte",
			code: AppleCarouselTabSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-carousel-types.ts",
			code: AppleCarouselTypesTsRaw,
			lang: "typescript"
		},
		{
			name: "apple-carousel-utils.ts",
			code: AppleCarouselUtilsTsRaw,
			lang: "typescript"
		},
		{
			name: "apple-carousel.svelte",
			code: AppleCarouselSvelteRaw,
			lang: "svelte"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Loops endlessly, with neighboring cards peeking in.",
		"Autoplays with a progress dot, and pauses on interaction or when off screen.",
		"Swipe, scroll, click a dot, or use arrow keys, even mid-slide.",
		"Respects reduced motion: no autoplay until Play is pressed, and cards jump instead of sliding."
	],
	preview_config: {
		show_retry: false,
		component: Preview,
		class: "px-0",
		code: {
			name: "preview.svelte",
			code: PreviewCode,
			lang: "svelte",
			hideLines: true
		}
	},
	install_block,
	examples,
	seo,
	props: [
		{
			name: "AppleCarouselRoot",
			desc: "Root provider that owns selection, playback, and carousel timing.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Carousel content and controls."
				},
				{
					name: "duration",
					type: "number",
					default: "5000",
					description:
						"Time each item remains active during autoplay, in milliseconds."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the root element."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the root element."
				}
			]
		},
		{
			name: "AppleCarouselContent",
			desc: "Scrollable viewport that renders real items and seamless loop clones.",
			props: [
				{
					name: "items",
					type: "readonly T[]",
					required: true,
					description: "Ordered data rendered as carousel items."
				},
				{
					name: "children",
					type: "Snippet<[item: T]>",
					required: true,
					description:
						"Render snippet that returns one AppleCarouselItem for each item."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the scroll viewport."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the scroll viewport."
				}
			]
		},
		{
			name: "AppleCarouselItem",
			desc: "Accessible carousel panel with clone and current-item state.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Content rendered inside the carousel panel."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the panel."
				},
				{
					name: "ref",
					type: "HTMLLIElement | null",
					default: "null",
					description: "Bindable reference to the panel element."
				}
			]
		},
		{
			name: "AppleCarouselControls",
			desc: "Layout wrapper for the tab list and playback control.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Tab list and play button."
				},
				{
					name: "size",
					type: "'default' | 'sm'",
					default: "'default'",
					description: "Size of the tab list and play button."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the controls wrapper."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the controls wrapper."
				}
			]
		},
		{
			name: "AppleCarouselTabList",
			desc: "Accessible tab list linked to the carousel items.",
			props: [
				{
					name: "items",
					type: "readonly T[]",
					required: true,
					description: "Ordered data rendered as carousel tabs."
				},
				{
					name: "children",
					type: "Snippet<[item: T]>",
					required: true,
					description:
						"Render snippet that returns one AppleCarouselTab for each item."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the tab list."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the tab list."
				}
			]
		},
		{
			name: "AppleCarouselTab",
			desc: "Progress dot and keyboard-accessible item selector.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Accessible label announced for the tab."
				},
				{
					name: "onclick",
					type: "(event: MouseEvent) => void",
					default: "undefined",
					description: "Called before the tab selects its item."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the tab."
				},
				{
					name: "ref",
					type: "HTMLButtonElement | null",
					default: "null",
					description: "Bindable reference to the tab button."
				}
			]
		},
		{
			name: "AppleCarouselPlayButton",
			desc: "Play/pause control with a reduced-motion-aware morphing icon.",
			props: [
				{
					name: "onclick",
					type: "(event: MouseEvent) => void",
					default: "undefined",
					description: "Called before the carousel toggles playback."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the play button."
				},
				{
					name: "ref",
					type: "HTMLButtonElement | null",
					default: "null",
					description: "Bindable reference to the play button."
				}
			]
		}
	]
};
