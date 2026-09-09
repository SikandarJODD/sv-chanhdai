import IndexTsRaw from "$lib/components/chan/testimonial-2/index.ts?raw";
import Testimonial2SvelteRaw from "$lib/components/chan/testimonial-2/testimonial-2.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "testimonial-2",
	title: "Testimonial 2",
	description:
		"Display a testimonial quote with author attribution and source link.",
	category: "chan"
};

const seo: SEO = {
	title: "Testimonial 2",
	description:
		"Display a testimonial quote with author attribution and source link.",
	keywords: ["Svelte", "Testimonial 2", "Component"]
};

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
			name: "testimonial-2.svelte",
			code: Testimonial2SvelteRaw,
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
	seo,
	props: [
		{
			name: "Testimonial2",
			desc: "Quote and author attribution with an external profile link.",
			props: [
				{
					name: "authorName",
					type: "string",
					required: true,
					description: "Full display name of the testimonial author."
				},
				{
					name: "authorTagline",
					type: "string",
					required: true,
					description: "Short title or description shown beside the author."
				},
				{
					name: "url",
					type: "string",
					required: true,
					description: "Link to the author's profile, website, or social page."
				},
				{
					name: "quote",
					type: "string",
					required: true,
					description: "Testimonial quote content."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the figure."
				}
			]
		}
	]
};
