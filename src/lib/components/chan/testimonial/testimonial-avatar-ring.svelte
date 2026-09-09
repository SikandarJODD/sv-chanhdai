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
	data-slot="testimonial-avatar-ring"
	class={cn(
		"pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-black/10 dark:inset-ring-white/15",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
