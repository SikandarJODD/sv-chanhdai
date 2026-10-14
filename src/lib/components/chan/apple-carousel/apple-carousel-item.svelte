<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		useAppleCarousel,
		useAppleCarouselItem
	} from "./apple-carousel-context.svelte";
	import type { AppleCarouselItemProps } from "./apple-carousel-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: AppleCarouselItemProps = $props();

	const carousel = useAppleCarousel();
	const item = useAppleCarouselItem();

	function attachRef(node: HTMLLIElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<li
	{@attach attachRef}
	id={item.isClone ? undefined : `${carousel.id}-item-${item.index}`}
	role={item.isClone ? undefined : "tabpanel"}
	aria-labelledby={item.isClone
		? undefined
		: `${carousel.id}-tab-${item.index}`}
	inert={item.isClone || !item.isCurrent}
	tabindex={item.isCurrent && !item.isClone ? 0 : -1}
	data-slot="apple-carousel-item"
	data-index={item.index}
	data-clone={item.isClone ? "" : undefined}
	data-current={item.isCurrent ? "" : undefined}
	class={cn(
		"relative h-152 w-(--apple-carousel-item-width) snap-center overflow-hidden rounded-4xl bg-muted data-clone:snap-always",
		"@max-5xl:h-140 @max-3xl:h-152 @max-3xl:snap-start",
		"focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
		className
	)}
	{...restProps}
>
	{@render children()}
</li>
