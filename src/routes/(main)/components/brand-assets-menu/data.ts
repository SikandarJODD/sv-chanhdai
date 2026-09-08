import BrandAssetsMenuSvelteRaw from "$lib/components/chan/brand-assets-menu/brand-assets-menu.svelte?raw";
import IndexTsRaw from "$lib/components/chan/brand-assets-menu/index.ts?raw";

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
	id: "brand-assets-menu",
	title: "Brand Assets Menu",
	description: "TODO: Add a concise description for Brand Assets Menu.",
	category: "chan",
};

const seo: SEO = {
	title: "Brand Assets Menu",
	description: "TODO: Add an SEO description for Brand Assets Menu.",
	keywords: ["Svelte", "Brand Assets Menu", "Component"],
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
		{ name: "brand-assets-menu.svelte", code: BrandAssetsMenuSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- brand-assets-menu/\n                |-- brand-assets-menu.svelte\n                `-- index.ts",
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
