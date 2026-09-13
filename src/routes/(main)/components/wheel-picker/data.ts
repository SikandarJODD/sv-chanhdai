import IndexTsRaw from "$lib/components/chan/wheel-picker/index.ts?raw";
import WheelPickerWrapperSvelteRaw from "$lib/components/chan/wheel-picker/wheel-picker-wrapper.svelte?raw";
import WheelPickerSvelteRaw from "$lib/components/chan/wheel-picker/wheel-picker.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleCode from "./examples/demo-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "wheel-picker",
	title: "Wheel Picker",
	description:
		"iOS-like wheel picker for Svelte with smooth inertia scrolling and infinite loop support.",
	category: "chan"
};

const seo: SEO = {
	title: "Wheel Picker",
	description:
		"iOS-like wheel picker for Svelte with smooth inertia scrolling and infinite loop support.",
	keywords: ["Svelte", "Wheel Picker", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		WheelPicker,
		WheelPickerWrapper,
		type WheelPickerOption
	} from "$chan/wheel-picker";

	const options: WheelPickerOption[] = [
		{ label: "React", value: "react" },
		{ label: "Vue", value: "vue" },
		{ label: "Svelte", value: "svelte" }
	];

	let value = $state("svelte");
</script>

<WheelPickerWrapper>
	<WheelPicker {options} bind:value aria-label="Framework" />
</WheelPickerWrapper>`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Time picker",
		description:
			"Combine three wheel pickers to select an hour, minute, and meridiem.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["runed"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "wheel-picker-wrapper.svelte",
			code: WheelPickerWrapperSvelteRaw,
			lang: "svelte"
		},
		{
			name: "wheel-picker.svelte",
			code: WheelPickerSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Natural touch scrolling with smooth inertia, mouse drag and scroll for desktop",
		"Infinite loop scrolling",
		"Unstyled core for complete style customization",
		"Full keyboard navigation and type-ahead search"
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
			name: "WheelPicker",
			desc: "Keyboard, pointer, touch, and wheel-controlled option picker.",
			props: [
				{
					name: "options",
					type: "WheelPickerOption<T>[]",
					required: true,
					description:
						"Values, labels, and disabled states available for selection."
				},
				{
					name: "value",
					type: "T",
					default: "undefined",
					description: "Bindable selected value."
				},
				{
					name: "defaultValue",
					type: "T",
					default: "undefined",
					description: "Initial selection when value is undefined."
				},
				{
					name: "onValueChange",
					type: "(value: T) => void",
					default: "undefined",
					description:
						"Called whenever interaction selects a different value."
				},
				{
					name: "infinite",
					type: "boolean",
					default: "false",
					description: "Repeats options to allow continuous looping."
				},
				{
					name: "visibleCount",
					type: "number",
					default: "20",
					description:
						"Number of wheel positions; must be a positive multiple of four."
				},
				{
					name: "dragSensitivity",
					type: "number",
					default: "3",
					description:
						"Multiplier applied to pointer and touch dragging."
				},
				{
					name: "scrollSensitivity",
					type: "number",
					default: "5",
					description: "Multiplier applied to wheel scrolling."
				},
				{
					name: "optionItemHeight",
					type: "number",
					default: "30",
					description: "Height of each option row in pixels."
				},
				{
					name: "classes",
					type: "WheelPickerClasses",
					default: "undefined",
					description:
						"Class overrides for optionItem, highlightWrapper, and highlightItem."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the picker element."
				}
			]
		},
		{
			name: "WheelPickerWrapper",
			desc: "Styled group container for one or more wheel pickers.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"WheelPicker components rendered inside the group."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the wrapper."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the wrapper element."
				}
			]
		}
	]
};
