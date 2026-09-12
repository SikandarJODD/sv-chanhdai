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
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import CustomColorsExample from "./examples/custom-colors.svelte";
import CustomColorsExampleCode from "./examples/custom-colors.svelte?raw";
import EnglishExample from "./examples/english.svelte";
import EnglishExampleCode from "./examples/english.svelte?raw";
import HindiExample from "./examples/hindi.svelte";
import HindiExampleCode from "./examples/hindi.svelte?raw";
import SpanishExample from "./examples/spanish.svelte";
import SpanishExampleCode from "./examples/spanish.svelte?raw";
import VietnameseExample from "./examples/vietnamese.svelte";
import VietnameseExampleCode from "./examples/vietnamese.svelte?raw";
import type { CodeBlock } from "$lib/types/code";

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

const examples: Example[] = [
	{
		name: "Custom colors",
		preview: CustomColorsExample,
		code: {
			name: "custom-colors.svelte",
			code: CustomColorsExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "English",
		preview: EnglishExample,
		code: {
			name: "english.svelte",
			code: EnglishExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Hindi",
		preview: HindiExample,
		code: { name: "hindi.svelte", code: HindiExampleCode, lang: "svelte" }
	},
	{
		name: "Spanish",
		preview: SpanishExample,
		code: {
			name: "spanish.svelte",
			code: SpanishExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Vietnamese",
		preview: VietnameseExample,
		code: {
			name: "vietnamese.svelte",
			code: VietnameseExampleCode,
			lang: "svelte"
		}
	}
];

const usage: CodeBlock[] = [
	{
		name: "preview.svelte",
		code: `<script lang="ts">
	import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectEnglish />`,
		lang: "svelte",
		isExpand: false
	}
];

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
	features: [
		'SVG writing/path animation inspired by Apple\'s "Hello" welcome screen',
		"Ships with English, Hindi, Spanish, and Vietnamese language variants",
		"onAnimationComplete callback to trigger logic after the animation finishes",
		"durationScale prop to control animation speed"
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
