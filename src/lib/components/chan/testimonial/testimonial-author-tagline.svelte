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
	data-slot="testimonial-author-tagline"
	class={cn(
		"text-xs leading-4 text-balance text-muted-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
