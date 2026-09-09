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
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

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
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- timescale/\n                |-- index.ts\n                |-- timescale-age.svelte\n                |-- timescale-content.svelte\n                |-- timescale-header.svelte\n                |-- timescale-intro-scroll.svelte\n                |-- timescale-item.svelte\n                |-- timescale-rail.svelte\n                |-- timescale-tick.svelte\n                |-- timescale-track.svelte\n                |-- timescale-viewport.svelte\n                |-- timescale-year.svelte\n                `-- timescale.svelte"
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
