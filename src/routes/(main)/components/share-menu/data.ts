import IndexTsRaw from "$lib/components/chan/share-menu/index.ts?raw";
import LinkedinIconSvelteRaw from "$lib/components/chan/share-menu/linkedin-icon.svelte?raw";
import ShareMenuSvelteRaw from "$lib/components/chan/share-menu/share-menu.svelte?raw";
import XIconSvelteRaw from "$lib/components/chan/share-menu/x-icon.svelte?raw";

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
	id: "share-menu",
	title: "Share Menu",
	description: "TODO: Add a concise description for Share Menu.",
	category: "chan",
};

const seo: SEO = {
	title: "Share Menu",
	description: "TODO: Add an SEO description for Share Menu.",
	keywords: ["Svelte", "Share Menu", "Component"],
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
		{ name: "linkedin-icon.svelte", code: LinkedinIconSvelteRaw, lang: "svelte", },
		{ name: "share-menu.svelte", code: ShareMenuSvelteRaw, lang: "svelte", },
		{ name: "x-icon.svelte", code: XIconSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- share-menu/\n                |-- index.ts\n                |-- linkedin-icon.svelte\n                |-- share-menu.svelte\n                `-- x-icon.svelte",
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
