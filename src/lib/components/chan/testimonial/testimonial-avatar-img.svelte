<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLImgAttributes, HTMLImageElement> = $props();
</script>

<img
	bind:this={ref}
	data-slot="testimonial-avatar-img"
	class={cn("size-8 rounded-full select-none", className)}
	{...restProps}
/>
