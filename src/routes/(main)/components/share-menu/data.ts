import IndexTsRaw from "$lib/components/chan/share-menu/index.ts?raw";
import LinkedinIconSvelteRaw from "$lib/components/chan/share-menu/linkedin-icon.svelte?raw";
import ShareMenuSvelteRaw from "$lib/components/chan/share-menu/share-menu.svelte?raw";
import XIconSvelteRaw from "$lib/components/chan/share-menu/x-icon.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "share-menu",
	title: "Share Menu",
	description:
		"Share menu to copy a link or post to X, LinkedIn, and the native share sheet.",
	category: "chan"
};

const seo: SEO = {
	title: "Share Menu",
	description:
		"Share menu to copy a link or post to X, LinkedIn, and the native share sheet.",
	keywords: ["Svelte", "Share Menu", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["@lucide/svelte", "svelte-sonner"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "linkedin-icon.svelte",
			code: LinkedinIconSvelteRaw,
			lang: "svelte"
		},
		{ name: "share-menu.svelte", code: ShareMenuSvelteRaw, lang: "svelte" },
		{ name: "x-icon.svelte", code: XIconSvelteRaw, lang: "svelte" }
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
			name: "ShareMenu",
			desc: "Menu for copying or sharing a URL through supported services.",
			props: [
				{
					name: "title",
					type: "string",
					required: true,
					description: "Title passed to the native share sheet."
				},
				{
					name: "url",
					type: "string",
					required: true,
					description: "URL to share; relative values are resolved against the current origin."
				}
			]
		}
	]
};
