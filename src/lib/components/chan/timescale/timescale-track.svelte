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
	data-slot="timescale-track"
	class={cn(
		"relative flex",
		"group-data-[orientation=horizontal]/timescale:w-max group-data-[orientation=horizontal]/timescale:items-start",
		"group-data-[orientation=vertical]/timescale:w-full group-data-[orientation=vertical]/timescale:flex-col group-data-[orientation=vertical]/timescale:pt-4",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
