import IndexTsRaw from "$lib/components/chan/testimonial/index.ts?raw";
import TestimonialAuthorNameSvelteRaw from "$lib/components/chan/testimonial/testimonial-author-name.svelte?raw";
import TestimonialAuthorTaglineSvelteRaw from "$lib/components/chan/testimonial/testimonial-author-tagline.svelte?raw";
import TestimonialAuthorSvelteRaw from "$lib/components/chan/testimonial/testimonial-author.svelte?raw";
import TestimonialAvatarImgSvelteRaw from "$lib/components/chan/testimonial/testimonial-avatar-img.svelte?raw";
import TestimonialAvatarRingSvelteRaw from "$lib/components/chan/testimonial/testimonial-avatar-ring.svelte?raw";
import TestimonialAvatarSvelteRaw from "$lib/components/chan/testimonial/testimonial-avatar.svelte?raw";
import TestimonialQuoteSvelteRaw from "$lib/components/chan/testimonial/testimonial-quote.svelte?raw";
import TestimonialVerifiedBadgeSvelteRaw from "$lib/components/chan/testimonial/testimonial-verified-badge.svelte?raw";
import TestimonialSvelteRaw from "$lib/components/chan/testimonial/testimonial.svelte?raw";

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
	id: "testimonial",
	title: "Testimonial",
	description: "TODO: Add a concise description for Testimonial.",
	category: "chan",
};

const seo: SEO = {
	title: "Testimonial",
	description: "TODO: Add an SEO description for Testimonial.",
	keywords: ["Svelte", "Testimonial", "Component"],
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
		{ name: "testimonial-author-name.svelte", code: TestimonialAuthorNameSvelteRaw, lang: "svelte", },
		{ name: "testimonial-author-tagline.svelte", code: TestimonialAuthorTaglineSvelteRaw, lang: "svelte", },
		{ name: "testimonial-author.svelte", code: TestimonialAuthorSvelteRaw, lang: "svelte", },
		{ name: "testimonial-avatar-img.svelte", code: TestimonialAvatarImgSvelteRaw, lang: "svelte", },
		{ name: "testimonial-avatar-ring.svelte", code: TestimonialAvatarRingSvelteRaw, lang: "svelte", },
		{ name: "testimonial-avatar.svelte", code: TestimonialAvatarSvelteRaw, lang: "svelte", },
		{ name: "testimonial-quote.svelte", code: TestimonialQuoteSvelteRaw, lang: "svelte", },
		{ name: "testimonial-verified-badge.svelte", code: TestimonialVerifiedBadgeSvelteRaw, lang: "svelte", },
		{ name: "testimonial.svelte", code: TestimonialSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- testimonial/\n                |-- index.ts\n                |-- testimonial-author-name.svelte\n                |-- testimonial-author-tagline.svelte\n                |-- testimonial-author.svelte\n                |-- testimonial-avatar-img.svelte\n                |-- testimonial-avatar-ring.svelte\n                |-- testimonial-avatar.svelte\n                |-- testimonial-quote.svelte\n                |-- testimonial-verified-badge.svelte\n                `-- testimonial.svelte",
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
