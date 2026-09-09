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

<figure
	bind:this={ref}
	data-slot="testimonial"
	class={cn("flex h-full flex-col", className)}
	{...restProps}
>
	{@render children?.()}
</figure>
