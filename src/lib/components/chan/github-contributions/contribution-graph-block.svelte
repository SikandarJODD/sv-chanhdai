<script lang="ts" module>
	import type { SVGAttributes } from "svelte/elements";
	import type { Activity } from "./contribution-graph-context.svelte";

	export type ContributionGraphBlockProps = Omit<
		SVGAttributes<SVGRectElement>,
		"x" | "y" | "width" | "height" | "rx" | "ry"
	> & {
		activity: Activity;
		dayIndex: number;
		weekIndex: number;
		ref?: SVGRectElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { useContributionGraph } from "./contribution-graph-context.svelte";
	import { CONTRIBUTION_GRAPH_THEME } from "./contribution-graph-utils";

	let {
		ref = $bindable(null),
		activity,
		dayIndex,
		weekIndex,
		class: className,
		...restProps
	}: ContributionGraphBlockProps = $props();

	const context = useContributionGraph();
	const level = $derived.by(() => {
		if (activity.level < 0 || activity.level > context.maxLevel) {
			throw new RangeError(
				`Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${context.maxLevel}.`
			);
		}
		return activity.level;
	});
</script>

<rect
	bind:this={ref}
	data-slot="contribution-graph-block"
	class={cn(CONTRIBUTION_GRAPH_THEME, className)}
	data-count={activity.count}
	data-date={activity.date}
	data-level={level}
	height={context.blockSize}
	rx={context.blockRadius}
	ry={context.blockRadius}
	width={context.blockSize}
	x={(context.blockSize + context.blockMargin) * weekIndex}
	y={context.labelHeight +
		(context.blockSize + context.blockMargin) * dayIndex}
	{...restProps}
/>
