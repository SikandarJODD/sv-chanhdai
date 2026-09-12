import IndexTsRaw from "$lib/components/chan/testimonial-spotlight/index.ts?raw";
import TestimonialSpotlightSvelteRaw from "$lib/components/chan/testimonial-spotlight/testimonial-spotlight.svelte?raw";

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
	id: "testimonial-spotlight",
	title: "Testimonial Spotlight",
	description: "Testimonial card with spotlight effect on hover.",
	category: "chan"
};

const seo: SEO = {
	title: "Testimonial Spotlight",
	description: "Testimonial card with spotlight effect on hover.",
	keywords: ["Svelte", "Testimonial Spotlight", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { TestimonialSpotlight } from "$chan/testimonial-spotlight";
</script>

<TestimonialSpotlight class="max-w-sm p-6">
	<blockquote class="text-lg font-medium">
		“This component library is a joy to use.”
	</blockquote>
	<p class="mt-4 text-sm text-muted-foreground">Jane Doe</p>
</TestimonialSpotlight>`,
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
			name: "testimonial-spotlight.svelte",
			code: TestimonialSpotlightSvelteRaw,
			lang: "svelte"
		}
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
	usage,
	seo,
	props: [
		{
			name: "TestimonialSpotlight",
			desc: "Content container with a pointer-following radial spotlight.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Content rendered inside the spotlight container."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the spotlight container."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the spotlight container."
				}
			]
		}
	]
};
