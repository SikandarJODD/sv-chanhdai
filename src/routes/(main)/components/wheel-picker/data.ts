import IndexTsRaw from "$lib/components/chan/wheel-picker/index.ts?raw";
import WheelPickerWrapperSvelteRaw from "$lib/components/chan/wheel-picker/wheel-picker-wrapper.svelte?raw";
import WheelPickerSvelteRaw from "$lib/components/chan/wheel-picker/wheel-picker.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "wheel-picker",
	title: "Wheel Picker",
	description:
		"iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
	category: "chan"
};

const seo: SEO = {
	title: "Wheel Picker",
	description:
		"iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
	keywords: ["Svelte", "Wheel Picker", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
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
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- wheel-picker/\n                |-- index.ts\n                |-- wheel-picker-wrapper.svelte\n                `-- wheel-picker.svelte"
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
	examples,
	seo,
	props: []
};
