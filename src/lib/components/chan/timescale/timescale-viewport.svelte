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
	data-slot="timescale-viewport"
	class={cn(
		"no-scrollbar w-full",
		"group-data-[orientation=horizontal]/timescale:scroll-fade-effect-x group-data-[orientation=horizontal]/timescale:flex group-data-[orientation=horizontal]/timescale:flex-1 group-data-[orientation=horizontal]/timescale:overflow-x-auto group-data-[orientation=horizontal]/timescale:overscroll-x-contain group-data-[orientation=horizontal]/timescale:pl-20",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
