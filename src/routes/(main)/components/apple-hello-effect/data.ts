import AppleHelloEffectEnglishSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-english.svelte?raw";
import AppleHelloEffectHindiSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-hindi.svelte?raw";
import AppleHelloEffectSpanishSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-spanish.svelte?raw";
import AppleHelloEffectVietnameseSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-vietnamese.svelte?raw";
import IndexTsRaw from "$lib/components/chan/apple-hello-effect/index.ts?raw";

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
	id: "apple-hello-effect",
	title: "Apple Hello Effect",
	description: "TODO: Add a concise description for Apple Hello Effect.",
	category: "chan",
};

const seo: SEO = {
	title: "Apple Hello Effect",
	description: "TODO: Add an SEO description for Apple Hello Effect.",
	keywords: ["Svelte", "Apple Hello Effect", "Component"],
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
		{ name: "apple-hello-effect-english.svelte", code: AppleHelloEffectEnglishSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "apple-hello-effect-hindi.svelte", code: AppleHelloEffectHindiSvelteRaw, lang: "svelte", },
		{ name: "apple-hello-effect-spanish.svelte", code: AppleHelloEffectSpanishSvelteRaw, lang: "svelte", },
		{ name: "apple-hello-effect-vietnamese.svelte", code: AppleHelloEffectVietnameseSvelteRaw, lang: "svelte", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- apple-hello-effect/\n                |-- apple-hello-effect-english.svelte\n                |-- apple-hello-effect-hindi.svelte\n                |-- apple-hello-effect-spanish.svelte\n                |-- apple-hello-effect-vietnamese.svelte\n                `-- index.ts",
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
