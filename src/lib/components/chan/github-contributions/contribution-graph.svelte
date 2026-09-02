<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Day as WeekDay } from "date-fns";
	import type { Activity, Labels } from "./contribution-graph-context.svelte";

	export type ContributionGraphProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		data: Activity[];
		blockMargin?: number;
		blockRadius?: number;
		blockSize?: number;
		fontSize?: number;
		labels?: Labels;
		maxLevel?: number;
		totalCount?: number;
		weekStart?: WeekDay;
		children: Snippet;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { getYear, parseISO } from "date-fns";
	import { cn } from "$lib/utils";
	import { setContributionGraphContext } from "./contribution-graph-context.svelte";
	import { DEFAULT_LABELS, groupByWeeks } from "./contribution-graph-utils";

	let {
		ref = $bindable(null),
		data,
		blockMargin = 4,
		blockRadius = 2,
		blockSize = 12,
		fontSize = 14,
		labels: labelsProp,
		maxLevel: maxLevelProp = 4,
		totalCount: totalCountProp,
		weekStart = 0,
		children,
		class: className,
		style,
		...restProps
	}: ContributionGraphProps = $props();

	const labelMargin = 8;
	const maxLevel = $derived(Math.max(1, maxLevelProp));
	const weeks = $derived(groupByWeeks(data, weekStart));
	const labels = $derived({ ...DEFAULT_LABELS, ...labelsProp });
	const labelHeight = $derived(fontSize + labelMargin);
	const year = $derived(
		data.length > 0 && data[0]
			? getYear(parseISO(data[0].date))
			: new Date().getFullYear()
	);
	const totalCount = $derived(
		typeof totalCountProp === "number"
			? totalCountProp
			: data.reduce((sum, activity) => sum + activity.count, 0)
	);
	const width = $derived(
		weeks.length * (blockSize + blockMargin) - blockMargin
	);
	const height = $derived(
		labelHeight + (blockSize + blockMargin) * 7 - blockMargin
	);
	const mergedStyle = $derived(
		`font-size: ${fontSize}px${style ? `; ${style}` : ""}`
	);

	function attachRef(element: HTMLDivElement) {
		ref = element;
		return () => {
			if (ref === element) ref = null;
		};
	}

	setContributionGraphContext({
		get data() {
			return data;
		},
		get weeks() {
			return weeks;
		},
		get blockMargin() {
			return blockMargin;
		},
		get blockRadius() {
			return blockRadius;
		},
		get blockSize() {
			return blockSize;
		},
		get fontSize() {
			return fontSize;
		},
		get labels() {
			return labels;
		},
		get labelHeight() {
			return labelHeight;
		},
		get maxLevel() {
			return maxLevel;
		},
		get totalCount() {
			return totalCount;
		},
		get weekStart() {
			return weekStart;
		},
		get year() {
			return year;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		}
	});
</script>

{#if data.length > 0}
	<div
		{@attach attachRef}
		data-slot="contribution-graph"
		class={cn("flex w-max max-w-full flex-col gap-2", className)}
		style={mergedStyle}
		{...restProps}
	>
		{@render children()}
	</div>
{/if}
