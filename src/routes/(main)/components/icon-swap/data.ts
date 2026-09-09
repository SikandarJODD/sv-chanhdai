import IconSwapItemSvelteRaw from "$lib/components/chan/icon-swap/icon-swap-item.svelte?raw";
import IconSwapSvelteRaw from "$lib/components/chan/icon-swap/icon-swap.svelte?raw";
import IndexTsRaw from "$lib/components/chan/icon-swap/index.ts?raw";

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
			name: "icon-swap-item.svelte",
			code: IconSwapItemSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "icon-swap.svelte", code: IconSwapSvelteRaw, lang: "svelte" },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- icon-swap/\n                |-- icon-swap-item.svelte\n                |-- icon-swap.svelte\n                `-- index.ts"
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
