<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type ContributionGraphLegendProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		children?: Snippet<[{ level: number }]>;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { useContributionGraph } from "./contribution-graph-context.svelte";
	import { CONTRIBUTION_GRAPH_THEME } from "./contribution-graph-utils";

	let {
		ref = $bindable(null),
		children,
		class: className,
		style,
		...restProps
	}: ContributionGraphLegendProps = $props();

	const context = useContributionGraph();
	const levels = $derived(
		Array.from({ length: context.maxLevel + 1 }, (_, level) => level)
	);
	const mergedStyle = $derived(
		`gap: ${context.blockMargin}px${style ? `; ${style}` : ""}`
	);
</script>

<div
	bind:this={ref}
	data-slot="contribution-graph-legend"
	class={cn("ml-auto flex items-center", className)}
	style={mergedStyle}
	{...restProps}
>
	<span class="mr-1 text-muted-foreground">
		{context.labels.legend?.less || "Less"}
	</span>

	{#each levels as level (level)}
		{#if children}
			{@render children({ level })}
		{:else}
			<svg height={context.blockSize} width={context.blockSize}>
				<title>{level} contributions</title>
				<rect
					class={CONTRIBUTION_GRAPH_THEME}
					data-level={level}
					height={context.blockSize}
					rx={context.blockRadius}
					ry={context.blockRadius}
					width={context.blockSize}
				/>
			</svg>
		{/if}
	{/each}

	<span class="ml-1 text-muted-foreground">
		{context.labels.legend?.more || "More"}
	</span>
</div>
