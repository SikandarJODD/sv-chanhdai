import IndexTsRaw from "#lib/components/chan/swipe-actions/index.ts?raw";
import PrimitivesIndexTsRaw from "#lib/components/chan/swipe-actions/primitives/index.ts?raw";
import PrimitivesSwipeActionContentSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-action-content.svelte?raw";
import PrimitivesSwipeActionSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-action.svelte?raw";
import PrimitivesSwipeActionsContextSvelteTsRaw from "#lib/components/chan/swipe-actions/primitives/swipe-actions-context.svelte.ts?raw";
import PrimitivesSwipeActionsStateSvelteTsRaw from "#lib/components/chan/swipe-actions/primitives/swipe-actions-state.svelte.ts?raw";
import PrimitivesSwipeActionsTypesTsRaw from "#lib/components/chan/swipe-actions/primitives/swipe-actions-types.ts?raw";
import PrimitivesSwipeActionsUtilsTsRaw from "#lib/components/chan/swipe-actions/primitives/swipe-actions-utils.ts?raw";
import PrimitivesSwipeActionsSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-actions.svelte?raw";
import PrimitivesSwipeContentSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-content.svelte?raw";
import PrimitivesSwipeItemSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-item.svelte?raw";
import PrimitivesSwipeRootSvelteRaw from "#lib/components/chan/swipe-actions/primitives/swipe-root.svelte?raw";
import SwipeActionSvelteRaw from "#lib/components/chan/swipe-actions/swipe-action.svelte?raw";
import SwipeContentSvelteRaw from "#lib/components/chan/swipe-actions/swipe-content.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "#lib/types/structure.js";
import type { CodeBlock } from "#lib/types/code.js";
import type { Example } from "#lib/types/example.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import ExamplePreview from "./examples/example.svelte";
import ExampleCode from "./examples/example.svelte?raw";

export const meta: ComponentMeta = {
	id: "swipe-actions",
	title: "Swipe Actions",
	description:
		"Swipe a row in a list to reveal actions on the left or right.",
	category: "chan"
};

const seo: SEO = {
	title: "Swipe Actions",
	description:
		"Swipe a row in a list to reveal actions on the left or right.",
	keywords: [
		"Svelte",
		"Swipe Actions",
		"Swipeable List",
		"Touch Gesture",
		"Component"
	]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		SwipeAction,
		SwipeActions,
		SwipeContent,
		SwipeItem,
		SwipeRoot
	} from "#lib/components/chan/swipe-actions/index.js";
</script>

<SwipeRoot>
	<SwipeItem>
		<SwipeActions side="right">
			<SwipeAction onclick={() => console.log("Delete")}>Delete</SwipeAction>
		</SwipeActions>

		<SwipeContent>
			<div class="p-4">Swipe me to the left</div>
		</SwipeContent>
	</SwipeItem>
</SwipeRoot>`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Minimal",
		description:
			"Reveal a destructive action by swiping a list row to the left.",
		preview: ExamplePreview,
		code: {
			name: "example.svelte",
			code: ExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["@lucide/svelte", "motion-sv", "runed"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "primitives/index.ts",
			code: PrimitivesIndexTsRaw,
			lang: "typescript"
		},
		{
			name: "primitives/swipe-action-content.svelte",
			code: PrimitivesSwipeActionContentSvelteRaw,
			lang: "svelte"
		},
		{
			name: "primitives/swipe-action.svelte",
			code: PrimitivesSwipeActionSvelteRaw,
			lang: "svelte"
		},
		{
			name: "primitives/swipe-actions-context.svelte.ts",
			code: PrimitivesSwipeActionsContextSvelteTsRaw,
			lang: "typescript"
		},
		{
			name: "primitives/swipe-actions-state.svelte.ts",
			code: PrimitivesSwipeActionsStateSvelteTsRaw,
			lang: "typescript"
		},
		{
			name: "primitives/swipe-actions-types.ts",
			code: PrimitivesSwipeActionsTypesTsRaw,
			lang: "typescript"
		},
		{
			name: "primitives/swipe-actions-utils.ts",
			code: PrimitivesSwipeActionsUtilsTsRaw,
			lang: "typescript"
		},
		{
			name: "primitives/swipe-actions.svelte",
			code: PrimitivesSwipeActionsSvelteRaw,
			lang: "svelte"
		},
		{
			name: "primitives/swipe-content.svelte",
			code: PrimitivesSwipeContentSvelteRaw,
			lang: "svelte"
		},
		{
			name: "primitives/swipe-item.svelte",
			code: PrimitivesSwipeItemSvelteRaw,
			lang: "svelte"
		},
		{
			name: "primitives/swipe-root.svelte",
			code: PrimitivesSwipeRootSvelteRaw,
			lang: "svelte"
		},
		{
			name: "swipe-action.svelte",
			code: SwipeActionSvelteRaw,
			lang: "svelte"
		},
		{
			name: "swipe-content.svelte",
			code: SwipeContentSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Reveals independent action strips on the left or right side of a row",
		"Supports velocity-aware snapping and configurable full-swipe actions",
		"Keeps only one row open and closes on outside press, Escape, or optional scrolling",
		"Includes keyboard controls and respects reduced-motion preferences"
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
	examples,
	seo,
	props: [
		{
			name: "SwipeRoot",
			desc: "Coordinates a group so only one swipe item remains open.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Swipe items rendered inside the root."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the root element."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description:
						"Additional classes applied to the root element."
				}
			]
		},
		{
			name: "SwipeItem",
			desc: "A swipeable row that owns gesture state and snap behavior.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Action strips and foreground content rendered inside the item."
				},
				{
					name: "threshold",
					type: "number",
					default: "0.5",
					description:
						"Fraction of an action strip the drag must pass to snap open."
				},
				{
					name: "velocityFactor",
					type: "number",
					default: "0.2",
					description:
						"Seconds of pointer velocity projected onto the release position."
				},
				{
					name: "fullSwipeThreshold",
					type: "number",
					default: "0.5",
					description:
						"Fraction of the row width required to arm a full-swipe action."
				},
				{
					name: "disabled",
					type: "boolean",
					default: "false",
					description: "Disables pointer and keyboard swiping."
				},
				{
					name: "closeOnScroll",
					type: "boolean",
					default: "false",
					description: "Closes an open item when the page scrolls."
				},
				{
					name: "onOpenChange",
					type: "(state: SwipeState) => void",
					default: "undefined",
					description:
						"Called when the item settles closed, left, or right."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the item element."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Additional classes applied to the item."
				}
			]
		},
		{
			name: "SwipeActions",
			desc: "Action strip revealed on one side of a swipe item.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Actions rendered in DOM order inside the strip."
				},
				{
					name: "side",
					type: '"left" | "right"',
					required: true,
					description:
						"Side of the row from which actions are revealed."
				},
				{
					name: "fullSwipe",
					type: "boolean",
					default: "false",
					description:
						"Lets a drag across the row invoke the outermost action."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the action strip."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description:
						"Additional classes applied to the action strip."
				}
			]
		},
		{
			name: "SwipeAction",
			desc: "Styled action button displayed inside an action strip.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Icon and label rendered inside the action."
				},
				{
					name: "closeOnClick",
					type: "boolean",
					default: "true",
					description:
						"Closes the item after the click handler runs without being prevented."
				},
				{
					name: "onclick",
					type: "(event: MouseEvent) => void",
					default: "undefined",
					description:
						"Runs when the action is clicked or invoked by a full swipe."
				},
				{
					name: "ref",
					type: "HTMLButtonElement | null",
					default: "null",
					description: "Bindable reference to the action button."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description:
						"Additional classes applied to the action button."
				}
			]
		},
		{
			name: "SwipeContent",
			desc: "Draggable foreground content that reveals the action strips.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Visible row content moved by the swipe gesture."
				},
				{
					name: "style",
					type: "MotionStyleProps",
					default: "undefined",
					description:
						"Additional Motion styles merged with the horizontal motion value."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the draggable content."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Additional classes applied to the content."
				}
			]
		}
	]
};
