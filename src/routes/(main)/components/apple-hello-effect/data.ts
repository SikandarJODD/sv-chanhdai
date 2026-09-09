import AppleHelloEffectEnglishSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-english.svelte?raw";
import AppleHelloEffectHindiSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-hindi.svelte?raw";
import AppleHelloEffectSpanishSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-spanish.svelte?raw";
import AppleHelloEffectVietnameseSvelteRaw from "$lib/components/chan/apple-hello-effect/apple-hello-effect-vietnamese.svelte?raw";
import IndexTsRaw from "$lib/components/chan/apple-hello-effect/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "apple-hello-effect",
	title: "Apple Hello Effect",
	description:
		"Animated handwritten 'hello' text in multiple languages with a polished Apple-inspired motion effect.",
	category: "chan"
};

const seo: SEO = {
	title: "Apple Hello Effect",
	description:
		"Create a multilingual Apple-inspired hello animation in Svelte with customizable timing and motion props.",
	keywords: [
		"Svelte",
		"Apple Hello Effect",
		"Animated Text",
		"Greeting Animation",
		"Motion SVG"
	]
};

const install_block: InstallComponentDocs = {
	packages: ["motion-sv"],
	install_code: [
		{
			name: "apple-hello-effect-english.svelte",
			code: AppleHelloEffectEnglishSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "apple-hello-effect-hindi.svelte",
			code: AppleHelloEffectHindiSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-hello-effect-spanish.svelte",
			code: AppleHelloEffectSpanishSvelteRaw,
			lang: "svelte"
		},
		{
			name: "apple-hello-effect-vietnamese.svelte",
			code: AppleHelloEffectVietnameseSvelteRaw,
			lang: "svelte"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
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
	seo,
	props: [
		{
			name: "AppleHelloEffect",
			desc: "Multilingual animated greeting text with Apple-style handwriting motion.",
			props: [
				{
					name: "class",
					type: "string",
					default: "''",
					description:
						"Additional classes applied to the underlying SVG element."
				},
				{
					name: "durationScale",
					type: "number",
					default: "1",
					description:
						"Scales the overall handwriting animation speed for the current language variation."
				},
				{
					name: "onAnimationComplete",
					type: "() => void",
					default: "undefined",
					description: "Called when the full animation completes."
				}
			]
		}
	]
};
