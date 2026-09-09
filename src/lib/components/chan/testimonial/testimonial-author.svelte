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

<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption
	bind:this={ref}
	data-slot="testimonial-author"
	class={cn(
		"grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-3.5 px-4 pt-1 pb-3",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</figcaption>
