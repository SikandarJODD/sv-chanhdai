<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
	bind:this={ref}
	data-slot="timescale-year"
	class={cn(
		"text-muted-foreground text-xs leading-5 font-medium tabular-nums",
		"in-data-[slot=timescale-header]:tracking-widest in-data-[slot=timescale-header]:uppercase",
		"group-data-[orientation=vertical]/timescale:col-start-2 group-data-[orientation=vertical]/timescale:row-start-1",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</p>
