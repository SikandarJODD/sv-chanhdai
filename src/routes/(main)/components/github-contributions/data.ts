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
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import CompactGraphExample from "./examples/compact-graph.svelte";
import CompactGraphExampleCode from "./examples/compact-graph.svelte?raw";
import CustomDataExample from "./examples/custom-data.svelte";
import CustomDataExampleCode from "./examples/custom-data.svelte?raw";
import CustomThemeExample from "./examples/custom-theme.svelte";
import CustomThemeExampleCode from "./examples/custom-theme.svelte?raw";
import LocalizedLabelsExample from "./examples/localized-labels.svelte";
import LocalizedLabelsExampleCode from "./examples/localized-labels.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

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

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { GitHubContributions } from "$chan/github-contributions";
</script>

<GitHubContributions username="SikandarJODD" />`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Custom theme",
		description: "Apply a warm orange palette to every contribution level.",
		preview: CustomThemeExample,
		code: {
			name: "custom-theme.svelte",
			code: CustomThemeExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Localized labels",
		description: "Translate month, total count, and legend labels.",
		preview: LocalizedLabelsExample,
		code: {
			name: "localized-labels.svelte",
			code: LocalizedLabelsExampleCode,
			lang: "svelte"
		}
	}
	// {
	// 	name: "Compact graph",
	// 	description:
	// 		"Hide month labels and use smaller blocks for tight layouts.",
	// 	preview: CompactGraphExample,
	// 	previewClass: "min-h-120",
	// 	code: {
	// 		name: "compact-graph.svelte",
	// 		code: CompactGraphExampleCode,
	// 		lang: "svelte"
	// 	}
	// },
	// {
	// 	name: "Custom data",
	// 	description:
	// 		"Shape deterministic activity levels into a fading emerald wave.",
	// 	preview: CustomDataExample,
	// 	code: {
	// 		name: "custom-data.svelte",
	// 		code: CustomDataExampleCode,
	// 		lang: "svelte"
	// 	}
	// }
];

const install_block: InstallComponentDocs = {
	packages: ["date-fns"],
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
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Shows a full year of daily activity with a color legend and total count",
		"Shows the contribution count and date in a tooltip for each day",
		"Links the contribution total to the requested user's GitHub profile",
		"Works with any API compatible with the GitHub Contributions API"
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
			name: "GitHubContributions",
			desc: "Ready-to-use contribution graph loaded from a GitHub username.",
			props: [
				{
					name: "username",
					type: "string",
					required: true,
					description:
						"GitHub username whose recent contributions are displayed."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the contribution graph."
				}
			]
		},
		{
			name: "ContributionGraph",
			desc: "Context provider and layout root for a custom contribution graph.",
			props: [
				{
					name: "data",
					type: "Activity[]",
					required: true,
					description: "Daily activity records rendered by the graph."
				},
				{
					name: "blockMargin",
					type: "number",
					default: "4",
					description: "Gap between contribution blocks in pixels."
				},
				{
					name: "blockRadius",
					type: "number",
					default: "2",
					description: "Corner radius of each contribution block."
				},
				{
					name: "blockSize",
					type: "number",
					default: "12",
					description: "Width and height of each contribution block."
				},
				{
					name: "fontSize",
					type: "number",
					default: "14",
					description: "Base graph label size in pixels."
				},
				{
					name: "labels",
					type: "Labels",
					default: "undefined",
					description:
						"Overrides for month, legend, and total-count labels."
				},
				{
					name: "maxLevel",
					type: "number",
					default: "4",
					description: "Highest contribution intensity level."
				},
				{
					name: "totalCount",
					type: "number",
					default: "sum of data counts",
					description:
						"Optional total that replaces the value calculated from data."
				},
				{
					name: "weekStart",
					type: "Day",
					default: "0",
					description:
						"Day of the week used to start each graph column."
				},
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Graph composition rendered within the shared context."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the graph root."
				}
			]
		},
		{
			name: "ContributionGraphCalendar",
			desc: "Scrollable SVG calendar that exposes each activity to a render snippet.",
			props: [
				{
					name: "children",
					type: "Snippet<[{ activity: Activity; dayIndex: number; weekIndex: number }]>",
					required: true,
					description: "Renderer called for every activity block."
				},
				{
					name: "hideMonthLabels",
					type: "boolean",
					default: "false",
					description: "Hides the month labels above the calendar."
				},
				{
					name: "title",
					type: "string",
					default: "'Contribution Graph'",
					description: "Accessible title rendered inside the SVG."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the calendar container."
				}
			]
		},
		{
			name: "ContributionGraphBlock",
			desc: "A positioned contribution rectangle using the graph context.",
			props: [
				{
					name: "activity",
					type: "Activity",
					required: true,
					description: "Activity record represented by the block."
				},
				{
					name: "dayIndex",
					type: "number",
					required: true,
					description: "Row position within the week."
				},
				{
					name: "weekIndex",
					type: "number",
					required: true,
					description: "Column position within the year."
				},
				{
					name: "ref",
					type: "SVGRectElement | null",
					default: "null",
					description: "Bindable reference to the SVG rectangle."
				}
			]
		},
		{
			name: "ContributionGraphFooter",
			desc: "Footer layout for totals and the contribution legend.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Footer content."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the footer element."
				}
			]
		},
		{
			name: "ContributionGraphLegend",
			desc: "Contribution intensity legend with optional custom level rendering.",
			props: [
				{
					name: "children",
					type: "Snippet<[{ level: number }]>",
					default: "undefined",
					description: "Optional renderer for each legend level."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the legend element."
				}
			]
		},
		{
			name: "ContributionGraphTotalCount",
			desc: "Total contribution label with an optional custom renderer.",
			props: [
				{
					name: "children",
					type: "Snippet<[{ totalCount: number; year: number }]>",
					default: "undefined",
					description:
						"Optional renderer receiving the total count and year."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description:
						"Bindable reference to the default total-count element."
				}
			]
		}
	]
};
