import GithubStarsSvelteRaw from "$lib/components/chan/github-stars/github-stars.svelte?raw";
import IndexTsRaw from "$lib/components/chan/github-stars/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleCode from "./examples/demo-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "github-stars",
	title: "GitHub Stars",
	description:
		"Display GitHub repo star count with formatted numbers and full-count tooltip.",
	category: "chan"
};

const seo: SEO = {
	title: "GitHub Stars",
	description:
		"Display GitHub repo star count with formatted numbers and full-count tooltip.",
	keywords: ["Svelte", "GitHub Stars", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { GithubStars } from "$chan/github-stars";
</script>

<GithubStars repo="SikandarJODD/sv-table" stargazersCount={82} />`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Fetch repository stars",
		description: "Fetch the latest star count from the GitHub REST API.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleCode,
			lang: "svelte"
		}
	}
];

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
	features: [
		"Displays the star count of a specified GitHub repository",
		"Optical alignment for better visual balance with the GitHub icon",
		"Formats large numbers for better readability (e.g., 1.2k for 1200)",
		"Includes a tooltip that shows the full star count on hover"
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
					description:
						"Locale or locales used to format the star count."
				}
			]
		}
	]
};
