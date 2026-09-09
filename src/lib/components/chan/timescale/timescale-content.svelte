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
	data-slot="timescale-content"
	class={cn(
		"w-full py-4 text-left",
		"group-data-[orientation=horizontal]/timescale:mt-4",
		"group-data-[orientation=vertical]/timescale:col-start-2 group-data-[orientation=vertical]/timescale:row-start-2",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
