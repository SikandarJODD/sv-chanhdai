import ContributionGraphBlockSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph-block.svelte?raw";
import ContributionGraphCalendarSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph-calendar.svelte?raw";
import ContributionGraphContextSvelteTsRaw from "$lib/components/chan/github-contributions/contribution-graph-context.svelte.ts?raw";
import ContributionGraphFooterSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph-footer.svelte?raw";
import ContributionGraphLegendSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph-legend.svelte?raw";
import ContributionGraphTotalCountSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph-total-count.svelte?raw";
import ContributionGraphUtilsTsRaw from "$lib/components/chan/github-contributions/contribution-graph-utils.ts?raw";
import ContributionGraphSvelteRaw from "$lib/components/chan/github-contributions/contribution-graph.svelte?raw";
import GithubContributionsFallbackSvelteRaw from "$lib/components/chan/github-contributions/github-contributions-fallback.svelte?raw";
import GithubContributionsSvelteRaw from "$lib/components/chan/github-contributions/github-contributions.svelte?raw";
import IndexTsRaw from "$lib/components/chan/github-contributions/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "github-contributions",
	title: "Github Contributions",
	description:
		"Visualize year-long GitHub contribution activity with daily counts, tooltips, and a profile link.",
	category: "chan"
};

const seo: SEO = {
	title: "Github Contributions",
	description:
		"Visualize year-long GitHub contribution activity with daily counts, tooltips, and a profile link.",
	keywords: ["Svelte", "Github Contributions", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "contribution-graph-block.svelte",
			code: ContributionGraphBlockSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "contribution-graph-calendar.svelte",
			code: ContributionGraphCalendarSvelteRaw,
			lang: "svelte"
		},
		{
			name: "contribution-graph-context.svelte.ts",
			code: ContributionGraphContextSvelteTsRaw,
			lang: "typescript"
		},
		{
			name: "contribution-graph-footer.svelte",
			code: ContributionGraphFooterSvelteRaw,
			lang: "svelte"
		},
		{
			name: "contribution-graph-legend.svelte",
			code: ContributionGraphLegendSvelteRaw,
			lang: "svelte"
		},
		{
			name: "contribution-graph-total-count.svelte",
			code: ContributionGraphTotalCountSvelteRaw,
			lang: "svelte"
		},
		{
			name: "contribution-graph-utils.ts",
			code: ContributionGraphUtilsTsRaw,
			lang: "typescript"
		},
		{
			name: "contribution-graph.svelte",
			code: ContributionGraphSvelteRaw,
			lang: "svelte"
		},
		{
			name: "github-contributions-fallback.svelte",
			code: GithubContributionsFallbackSvelteRaw,
			lang: "svelte"
		},
		{
			name: "github-contributions.svelte",
			code: GithubContributionsSvelteRaw,
			lang: "svelte"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- github-contributions/\n                |-- contribution-graph-block.svelte\n                |-- contribution-graph-calendar.svelte\n                |-- contribution-graph-context.svelte.ts\n                |-- contribution-graph-footer.svelte\n                |-- contribution-graph-legend.svelte\n                |-- contribution-graph-total-count.svelte\n                |-- contribution-graph-utils.ts\n                |-- contribution-graph.svelte\n                |-- github-contributions-fallback.svelte\n                |-- github-contributions.svelte\n                `-- index.ts"
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
	examples,
	seo,
	props: []
};
