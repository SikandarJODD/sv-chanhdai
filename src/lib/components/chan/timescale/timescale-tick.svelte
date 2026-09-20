<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
	bind:this={ref}
	data-slot="timescale-tick"
	aria-hidden="true"
	class={cn(
		"absolute z-10 bg-border",
		"group-data-[orientation=horizontal]/timescale:top-(--timescale-rail) group-data-[orientation=horizontal]/timescale:left-0 group-data-[orientation=horizontal]/timescale:h-3 group-data-[orientation=horizontal]/timescale:w-px group-data-[orientation=horizontal]/timescale:-translate-y-1/2",
		"group-data-[orientation=vertical]/timescale:top-2.5 group-data-[orientation=vertical]/timescale:left-(--timescale-rail) group-data-[orientation=vertical]/timescale:h-px group-data-[orientation=vertical]/timescale:w-3 group-data-[orientation=vertical]/timescale:-translate-x-1/2",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>
