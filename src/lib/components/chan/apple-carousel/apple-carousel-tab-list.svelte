<script lang="ts" generics="T">
	import { cn } from "$lib/utils";
	import AppleCarouselProvider from "./apple-carousel-provider.svelte";
	import type { AppleCarouselTabListProps } from "./apple-carousel-types";

	let {
		ref = $bindable(null),
		items,
		children,
		class: className,
		...restProps
	}: AppleCarouselTabListProps<T> = $props();

	function attachRef(node: HTMLDivElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}
</script>

<div
	{@attach attachRef}
	role="tablist"
	data-slot="apple-carousel-tab-list"
	class={cn(
		"flex h-14 items-center rounded-full bg-muted px-4 group-data-[size=sm]/apple-carousel-controls:h-11 group-data-[size=sm]/apple-carousel-controls:px-3",
		className
	)}
	{...restProps}
>
	{#each items as item, index (index)}
		<AppleCarouselProvider
			{children}
			value={item}
			tab={{ index, count: items.length }}
		/>
	{/each}
</div>
