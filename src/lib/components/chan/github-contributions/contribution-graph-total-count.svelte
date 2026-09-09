<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type ContributionGraphTotalCountProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		children?: Snippet<[{ totalCount: number; year: number }]>;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { useContributionGraph } from "./contribution-graph-context.svelte";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: ContributionGraphTotalCountProps = $props();

	const context = useContributionGraph();
	const defaultLabel = $derived(
		context.labels.totalCount
			? context.labels.totalCount
					.replace("{{count}}", String(context.totalCount))
					.replace("{{year}}", String(context.year))
			: `${context.totalCount} activities in ${context.year}`
	);
</script>

{#if children}
	{@render children({ totalCount: context.totalCount, year: context.year })}
{:else}
	<div
		bind:this={ref}
		data-slot="contribution-graph-total-count"
		class={cn("text-muted-foreground", className)}
		{...restProps}
	>
		{defaultLabel}
	</div>
{/if}
