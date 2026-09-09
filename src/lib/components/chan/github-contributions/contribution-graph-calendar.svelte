<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Activity } from "./contribution-graph-context.svelte";

	export type ContributionGraphCalendarProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		hideMonthLabels?: boolean;
		children: Snippet<
			[{ activity: Activity; dayIndex: number; weekIndex: number }]
		>;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { useContributionGraph } from "./contribution-graph-context.svelte";
	import { getMonthLabels } from "./contribution-graph-utils";

	let {
		ref = $bindable(null),
		title = "Contribution Graph",
		hideMonthLabels = false,
		children,
		class: className,
		...restProps
	}: ContributionGraphCalendarProps = $props();

	const context = useContributionGraph();
	const monthLabels = $derived(
		getMonthLabels(context.weeks, context.labels.months)
	);
</script>

<div
	bind:this={ref}
	data-slot="contribution-graph-calendar"
	class={cn(
		"no-scrollbar scroll-fade-x max-w-full overflow-x-auto overflow-y-hidden",
		className
	)}
	{...restProps}
>
	<svg
		class="block overflow-visible"
		height={context.height}
		viewBox={`0 0 ${context.width} ${context.height}`}
		width={context.width}
	>
		<title>{title}</title>
		{#if !hideMonthLabels}
			<g
				data-slot="month-labels"
				class="fill-current selection:fill-selection-foreground"
			>
				{#each monthLabels as { label, weekIndex } (weekIndex)}
					<text
						dominant-baseline="hanging"
						x={(context.blockSize + context.blockMargin) *
							weekIndex}
					>
						{label}
					</text>
				{/each}
			</g>
		{/if}

		{#each context.weeks as week, weekIndex}
			{#each week as activity, dayIndex}
				{#if activity}
					{@render children({ activity, dayIndex, weekIndex })}
				{/if}
			{/each}
		{/each}
	</svg>
</div>
