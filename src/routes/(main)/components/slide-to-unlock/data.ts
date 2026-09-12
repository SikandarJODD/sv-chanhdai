import IndexTsRaw from "$lib/components/chan/slide-to-unlock/index.ts?raw";
import SlideToUnlockContextTsRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-context.ts?raw";
import SlideToUnlockHandleSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-handle.svelte?raw";
import SlideToUnlockTextSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-text.svelte?raw";
import SlideToUnlockTrackSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-track.svelte?raw";
import SlideToUnlockSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import AsyncActionExample from "./examples/async-action.svelte";
import AsyncActionExampleCode from "./examples/async-action.svelte?raw";
import BasicExample from "./examples/basic.svelte";
import BasicExampleCode from "./examples/basic.svelte?raw";
import ConfirmActionExample from "./examples/confirm-action.svelte";
import ConfirmActionExampleCode from "./examples/confirm-action.svelte?raw";
import CustomHandleExample from "./examples/custom-handle.svelte";
import CustomHandleExampleCode from "./examples/custom-handle.svelte?raw";
import CustomPromptExample from "./examples/custom-prompt.svelte";
import CustomPromptExampleCode from "./examples/custom-prompt.svelte?raw";
import DestructiveConfirmationExample from "./examples/destructive-confirmation.svelte";
import DestructiveConfirmationExampleCode from "./examples/destructive-confirmation.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import ResetExample from "./examples/reset.svelte";
import ResetExampleCode from "./examples/reset.svelte?raw";

export const meta: ComponentMeta = {
	id: "slide-to-unlock",
	title: "Slide To Unlock",
	description:
		"Interactive slider inspired by the classic iPhone “slide to unlock” gesture.",
	category: "chan"
};

const seo: SEO = {
	title: "Slide To Unlock",
	description:
		"Interactive slider inspired by the classic iPhone “slide to unlock” gesture.",
	keywords: ["Svelte", "Slide To Unlock", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	function handleUnlock() {
		console.log("Unlocked");
	}
</script>

<SlideToUnlock onUnlock={handleUnlock} class="w-64 rounded-full">
	<SlideToUnlockTrack>
		<SlideToUnlockText>
			{#snippet children({ isDragging })}
				{isDragging ? "Release…" : "Slide to unlock"}
			{/snippet}
		</SlideToUnlockText>
		<SlideToUnlockHandle class="rounded-full" />
	</SlideToUnlockTrack>
</SlideToUnlock>`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Basic",
		description:
			"Run a callback when the handle reaches the end of the track.",
		preview: BasicExample,
		code: {
			name: "basic.svelte",
			code: BasicExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Reset",
		description:
			"Return the handle to its starting position with the reset method.",
		preview: ResetExample,
		code: {
			name: "reset.svelte",
			code: ResetExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Custom prompt",
		description:
			"Change the instruction while the handle is being dragged.",
		preview: CustomPromptExample,
		code: {
			name: "custom-prompt.svelte",
			code: CustomPromptExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Custom handle",
		description: "Provide custom handle content, colors, and drag width.",
		preview: CustomHandleExample,
		code: {
			name: "custom-handle.svelte",
			code: CustomHandleExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Confirm action",
		description:
			"Replace a one-time confirmation gesture with completion feedback.",
		preview: ConfirmActionExample,
		code: {
			name: "confirm-action.svelte",
			code: ConfirmActionExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Async action",
		description:
			"Show processing and success states after the gesture completes.",
		preview: AsyncActionExample,
		code: {
			name: "async-action.svelte",
			code: AsyncActionExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Destructive confirmation",
		description: "Add deliberate friction before a destructive action.",
		preview: DestructiveConfirmationExample,
		code: {
			name: "destructive-confirmation.svelte",
			code: DestructiveConfirmationExampleCode,
			lang: "svelte"
		}
	}
];

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
			name: "slide-to-unlock-context.ts",
			code: SlideToUnlockContextTsRaw,
			lang: "typescript"
		},
		{
			name: "slide-to-unlock-handle.svelte",
			code: SlideToUnlockHandleSvelteRaw,
			lang: "svelte"
		},
		{
			name: "slide-to-unlock-text.svelte",
			code: SlideToUnlockTextSvelteRaw,
			lang: "svelte"
		},
		{
			name: "slide-to-unlock-track.svelte",
			code: SlideToUnlockTrackSvelteRaw,
			lang: "svelte"
		},
		{
			name: "slide-to-unlock.svelte",
			code: SlideToUnlockSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Smooth drag interaction with spring physics via Motion Svelte",
		"Composable compound components (track, handle, text)",
		"Customizable handle and colors",
		"Built-in shimmering text effect"
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
			name: "SlideToUnlock",
			desc: "Root provider for the slide-to-unlock interaction.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Track, text, and handle composition rendered inside the root."
				},
				{
					name: "handleWidth",
					type: "number",
					default: "56",
					description: "Width of the draggable handle in pixels."
				},
				{
					name: "onUnlock",
					type: "() => void",
					default: "undefined",
					description:
						"Called when the handle reaches the end of the track."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the root element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the root element."
				}
			]
		},
		{
			name: "SlideToUnlockTrack",
			desc: "Track that supplies the drag constraint boundary.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Text and handle content rendered inside the track."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the track element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the track."
				}
			]
		},
		{
			name: "SlideToUnlockText",
			desc: "Instruction text that fades with drag progress.",
			props: [
				{
					name: "children",
					type: "Snippet<[{ isDragging: boolean }]>",
					required: true,
					description:
						"Text renderer receiving the current dragging state."
				},
				{
					name: "style",
					type: "MotionStyleProps",
					default: "undefined",
					description:
						"Additional Motion style values merged with the progress styles."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the text element."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description:
						"Additional classes applied to the text element."
				}
			]
		},
		{
			name: "SlideToUnlockHandle",
			desc: "Draggable handle with a built-in arrow fallback.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "default arrow",
					description:
						"Optional custom content rendered inside the handle."
				},
				{
					name: "style",
					type: "MotionStyleProps",
					default: "undefined",
					description:
						"Additional Motion style values merged with the drag styles."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the handle element."
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Additional classes applied to the handle."
				}
			]
		}
	]
};
