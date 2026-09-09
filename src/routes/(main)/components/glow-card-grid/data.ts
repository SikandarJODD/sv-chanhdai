import GlowCardGridSvelteRaw from "$lib/components/chan/glow-card-grid/glow-card-grid.svelte?raw";
import GlowCardSvelteRaw from "$lib/components/chan/glow-card-grid/glow-card.svelte?raw";
import IndexTsRaw from "$lib/components/chan/glow-card-grid/index.ts?raw";

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
	id: "glow-card-grid",
	title: "Glow Card Grid",
	description: "Display cards with glowing border and background effects.",
	category: "chan"
};

const seo: SEO = {
	title: "Glow Card Grid",
	description: "Display cards with glowing border and background effects.",
	keywords: ["Svelte", "Glow Card Grid", "Component"]
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
			name: "glow-card-grid.svelte",
			code: GlowCardGridSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "glow-card.svelte", code: GlowCardSvelteRaw, lang: "svelte" },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- glow-card-grid/\n                |-- glow-card-grid.svelte\n                |-- glow-card.svelte\n                `-- index.ts"
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
