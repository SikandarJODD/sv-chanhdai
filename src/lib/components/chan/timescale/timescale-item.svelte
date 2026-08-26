<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="timescale-item"
	class={cn(
		"relative",
		"group-data-[orientation=horizontal]/timescale:w-20 group-data-[orientation=horizontal]/timescale:shrink-0 group-data-[orientation=horizontal]/timescale:not-last:pr-4 group-data-[orientation=horizontal]/timescale:has-data-[slot=timescale-content]:w-80",
		"group-data-[orientation=vertical]/timescale:grid group-data-[orientation=vertical]/timescale:w-full group-data-[orientation=vertical]/timescale:grid-cols-[var(--timescale-rail)_1fr] group-data-[orientation=vertical]/timescale:gap-x-4 group-data-[orientation=vertical]/timescale:not-last:pb-4",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
