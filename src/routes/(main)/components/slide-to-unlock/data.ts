import IndexTsRaw from "$lib/components/chan/slide-to-unlock/index.ts?raw";
import SlideToUnlockContextTsRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-context.ts?raw";
import SlideToUnlockHandleSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-handle.svelte?raw";
import SlideToUnlockTextSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-text.svelte?raw";
import SlideToUnlockTrackSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock-track.svelte?raw";
import SlideToUnlockSvelteRaw from "$lib/components/chan/slide-to-unlock/slide-to-unlock.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "slide-to-unlock",
	title: "Slide To Unlock",
	description: "TODO: Add a concise description for Slide To Unlock.",
	category: "chan",
};

const seo: SEO = {
	title: "Slide To Unlock",
	description: "TODO: Add an SEO description for Slide To Unlock.",
	keywords: ["Svelte", "Slide To Unlock", "Component"],
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "slide-to-unlock-context.ts", code: SlideToUnlockContextTsRaw, lang: "typescript", },
		{ name: "slide-to-unlock-handle.svelte", code: SlideToUnlockHandleSvelteRaw, lang: "svelte", },
		{ name: "slide-to-unlock-text.svelte", code: SlideToUnlockTextSvelteRaw, lang: "svelte", },
		{ name: "slide-to-unlock-track.svelte", code: SlideToUnlockTrackSvelteRaw, lang: "svelte", },
		{ name: "slide-to-unlock.svelte", code: SlideToUnlockSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- slide-to-unlock/\n                |-- index.ts\n                |-- slide-to-unlock-context.ts\n                |-- slide-to-unlock-handle.svelte\n                |-- slide-to-unlock-text.svelte\n                |-- slide-to-unlock-track.svelte\n                `-- slide-to-unlock.svelte",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	install_block,
	examples,
	seo,
	props: [],
};
