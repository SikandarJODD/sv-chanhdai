import IndexTsRaw from "$lib/components/chan/timescale/index.ts?raw";
import TimescaleAgeSvelteRaw from "$lib/components/chan/timescale/timescale-age.svelte?raw";
import TimescaleContentSvelteRaw from "$lib/components/chan/timescale/timescale-content.svelte?raw";
import TimescaleHeaderSvelteRaw from "$lib/components/chan/timescale/timescale-header.svelte?raw";
import TimescaleIntroScrollSvelteRaw from "$lib/components/chan/timescale/timescale-intro-scroll.svelte?raw";
import TimescaleItemSvelteRaw from "$lib/components/chan/timescale/timescale-item.svelte?raw";
import TimescaleRailSvelteRaw from "$lib/components/chan/timescale/timescale-rail.svelte?raw";
import TimescaleTickSvelteRaw from "$lib/components/chan/timescale/timescale-tick.svelte?raw";
import TimescaleTrackSvelteRaw from "$lib/components/chan/timescale/timescale-track.svelte?raw";
import TimescaleViewportSvelteRaw from "$lib/components/chan/timescale/timescale-viewport.svelte?raw";
import TimescaleYearSvelteRaw from "$lib/components/chan/timescale/timescale-year.svelte?raw";
import TimescaleSvelteRaw from "$lib/components/chan/timescale/timescale.svelte?raw";

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
	id: "timescale",
	title: "Timescale",
	description:
		"Ruler-style timeline for plotting milestones along a horizontal or vertical axis.",
	category: "chan"
};

const seo: SEO = {
	title: "Timescale",
	description:
		"Ruler-style timeline for plotting milestones along a horizontal or vertical axis.",
	keywords: ["Svelte", "Timescale", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		Timescale,
		TimescaleContent,
		TimescaleItem,
		TimescaleRail,
		TimescaleTick,
		TimescaleTrack,
		TimescaleYear
	} from "$chan/timescale";
</script>

<Timescale orientation="vertical">
	<TimescaleTrack>
		<TimescaleRail />

		<TimescaleItem>
			<TimescaleTick />
			<TimescaleYear>2024</TimescaleYear>
			<TimescaleContent>Started the project.</TimescaleContent>
		</TimescaleItem>

		<TimescaleItem>
			<TimescaleTick />
			<TimescaleYear>2025</TimescaleYear>
			<TimescaleContent>Released version 1.0.</TimescaleContent>
		</TimescaleItem>
	</TimescaleTrack>
</Timescale>`,
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
			name: "timescale-age.svelte",
			code: TimescaleAgeSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-content.svelte",
			code: TimescaleContentSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-header.svelte",
			code: TimescaleHeaderSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-intro-scroll.svelte",
			code: TimescaleIntroScrollSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-item.svelte",
			code: TimescaleItemSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-rail.svelte",
			code: TimescaleRailSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-tick.svelte",
			code: TimescaleTickSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-track.svelte",
			code: TimescaleTrackSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-viewport.svelte",
			code: TimescaleViewportSvelteRaw,
			lang: "svelte"
		},
		{
			name: "timescale-year.svelte",
			code: TimescaleYearSvelteRaw,
			lang: "svelte"
		},
		{ name: "timescale.svelte", code: TimescaleSvelteRaw, lang: "svelte" }
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
			name: "Timescale",
			desc: "Root layout that sets the timeline orientation for its primitives.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Timescale primitives rendered inside the root."
				},
				{
					name: "orientation",
					type: "'horizontal' | 'vertical'",
					default: "'horizontal'",
					description: "Direction used to lay out the timeline."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the root element."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the root element."
				}
			]
		},
		{
			name: "TimescaleIntroScroll",
			desc: "Wrapper that performs the initial horizontal scroll animation.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Timescale content containing a viewport."
				}
			]
		},
		{
			name: "Timescale layout primitives",
			desc: "Shared API for Age, Content, Header, Item, Rail, Tick, Track, Viewport, and Year.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description:
						"Content rendered inside the selected timescale primitive."
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
		}
	]
};
