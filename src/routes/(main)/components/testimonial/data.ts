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
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "testimonial",
	title: "Testimonial",
	description:
		"Display user feedback with author info, avatar, and verified badge.",
	category: "chan"
};

const seo: SEO = {
	title: "Testimonial",
	description:
		"Display user feedback with author info, avatar, and verified badge.",
	keywords: ["Svelte", "Testimonial", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		Testimonial,
		TestimonialAuthor,
		TestimonialAuthorName,
		TestimonialAuthorTagline,
		TestimonialAvatar,
		TestimonialAvatarImg,
		TestimonialAvatarRing,
		TestimonialQuote
	} from "$chan/testimonial";
</script>

<Testimonial>
	<TestimonialQuote>
		<p>This component library is a joy to use.</p>
	</TestimonialQuote>
	<TestimonialAuthor>
		<TestimonialAvatar>
			<TestimonialAvatarImg src="/avatar.jpg" alt="Jane Doe" />
			<TestimonialAvatarRing />
		</TestimonialAvatar>
		<TestimonialAuthorName>Jane Doe</TestimonialAuthorName>
		<TestimonialAuthorTagline>Product Designer</TestimonialAuthorTagline>
	</TestimonialAuthor>
</Testimonial>`,
		lang: "svelte",
		isExpand: false
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
			name: "testimonial-author-name.svelte",
			code: TestimonialAuthorNameSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-author-tagline.svelte",
			code: TestimonialAuthorTaglineSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-author.svelte",
			code: TestimonialAuthorSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-avatar-img.svelte",
			code: TestimonialAvatarImgSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-avatar-ring.svelte",
			code: TestimonialAvatarRingSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-avatar.svelte",
			code: TestimonialAvatarSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-quote.svelte",
			code: TestimonialQuoteSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial-verified-badge.svelte",
			code: TestimonialVerifiedBadgeSvelteRaw,
			lang: "svelte"
		},
		{
			name: "testimonial.svelte",
			code: TestimonialSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Composable testimonial layout with quote, author info, and avatar",
		"Built-in verified badge for the author name",
		"Composable via Testimonial, TestimonialAuthor, TestimonialAvatar, and related subcomponents"
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
	seo,
	props: [
		{
			name: "Testimonial layout components",
			desc: "Shared API for Testimonial, Author, AuthorName, AuthorTagline, Avatar, AvatarRing, Quote, and VerifiedBadge.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description:
						"Content rendered inside the selected testimonial primitive."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the primitive element."
				},
				{
					name: "ref",
					type: "HTMLElement | null",
					default: "null",
					description:
						"Bindable reference to the primitive's underlying element."
				}
			]
		},
		{
			name: "TestimonialAvatarImg",
			desc: "Image primitive used inside TestimonialAvatar.",
			props: [
				{
					name: "src",
					type: "string",
					default: "undefined",
					description: "Avatar image URL."
				},
				{
					name: "alt",
					type: "string",
					default: "undefined",
					description: "Accessible alternative text for the avatar."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the image."
				},
				{
					name: "ref",
					type: "HTMLImageElement | null",
					default: "null",
					description: "Bindable reference to the image element."
				}
			]
		}
	]
};
