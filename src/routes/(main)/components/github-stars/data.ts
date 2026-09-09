import GithubStarsSvelteRaw from "$lib/components/chan/github-stars/github-stars.svelte?raw";
import IndexTsRaw from "$lib/components/chan/github-stars/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "github-stars",
	title: "Github Stars",
	description:
		"Display GitHub repo star count with formatted numbers and full-count tooltip.",
	category: "chan"
};

const seo: SEO = {
	title: "Github Stars",
	description:
		"Display GitHub repo star count with formatted numbers and full-count tooltip.",
	keywords: ["Svelte", "Github Stars", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "github-stars.svelte",
			code: GithubStarsSvelteRaw,
			lang: "svelte",
			isExpand: true
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
			name: "GithubStars",
			desc: "GitHub repository link with compact and full star counts.",
			props: [
				{
					name: "repo",
					type: "string",
					required: true,
					description: "GitHub repository in owner/repo format."
				},
				{
					name: "stargazersCount",
					type: "number",
					required: true,
					description: "Number of stars to display."
				},
				{
					name: "locales",
					type: "Intl.LocalesArgument",
					default: "'en-US'",
					description: "Locale or locales used to format the star count."
				}
			]
		}
	]
};
