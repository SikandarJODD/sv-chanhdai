<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<blockquote
	bind:this={ref}
	data-slot="testimonial-quote"
	class={cn(
		"text-foreground grow px-4 py-3 text-base text-pretty",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</blockquote>
