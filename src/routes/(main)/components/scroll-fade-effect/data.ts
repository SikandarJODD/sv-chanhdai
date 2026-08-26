import IndexTsRaw from "$lib/components/chan/scroll-fade-effect/index.ts?raw";
import ScrollFadeEffectSvelteRaw from "$lib/components/chan/scroll-fade-effect/scroll-fade-effect.svelte?raw";

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
	id: "scroll-fade-effect",
	title: "Scroll Fade Effect",
	description:
		"Fade content edges as you scroll, for both vertical and horizontal layouts.",
	category: "chan"
};

const seo: SEO = {
	title: "Scroll Fade Effect",
	description:
		"Fade content edges as you scroll, for both vertical and horizontal layouts.",
	keywords: ["Svelte", "Scroll Fade Effect", "Component"]
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
			name: "scroll-fade-effect.svelte",
			code: ScrollFadeEffectSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- scroll-fade-effect/\n                |-- index.ts\n                `-- scroll-fade-effect.svelte"
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
