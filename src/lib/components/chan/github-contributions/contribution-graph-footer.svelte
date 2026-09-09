<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type ContributionGraphFooterProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		children: Snippet;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: ContributionGraphFooterProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="contribution-graph-footer"
	class={cn("flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4", className)}
	{...restProps}
>
	{@render children()}
</div>
