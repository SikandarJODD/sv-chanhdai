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
	data-slot="testimonial-author-name"
	class={cn(
		"flex items-center gap-1.5 text-sm leading-4.5 font-semibold text-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
