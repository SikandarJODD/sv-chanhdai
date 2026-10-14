<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		useAppleCarousel,
		useAppleCarouselTab
	} from "./apple-carousel-context.svelte";
	import type { AppleCarouselTabProps } from "./apple-carousel-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		onclick,
		onfocus,
		onkeydown,
		...restProps
	}: AppleCarouselTabProps = $props();

	const carousel = useAppleCarousel();
	const tab = useAppleCarouselTab();
	const isCurrent = $derived(tab.index === carousel.index);

	function attachRef(node: HTMLButtonElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}

	function handleKeydown(
		event: KeyboardEvent & { currentTarget: HTMLButtonElement }
	): void {
		onkeydown?.(event);
		if (event.defaultPrevented) return;

		let next: number;
		switch (event.key) {
			case "ArrowLeft":
				next = (tab.index - 1 + tab.count) % tab.count;
				break;
			case "ArrowRight":
				next = (tab.index + 1) % tab.count;
				break;
			case "Home":
				next = 0;
				break;
			case "End":
				next = tab.count - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		carousel.goTo(next);
		event.currentTarget
			.closest('[role="tablist"]')
			?.querySelectorAll<HTMLElement>('[role="tab"]')
			[next]?.focus();
	}

	function handleClick(
		event: MouseEvent & { currentTarget: HTMLButtonElement }
	): void {
		onclick?.(event);
		if (!event.defaultPrevented) carousel.goTo(tab.index);
	}

	function handleFocus(
		event: FocusEvent & { currentTarget: HTMLButtonElement }
	): void {
		onfocus?.(event);
		if (
			carousel.isPlaying &&
			event.currentTarget.matches(":focus-visible")
		) {
			carousel.pause();
		}
	}
</script>

<button
	{@attach attachRef}
	type="button"
	role="tab"
	id={`${carousel.id}-tab-${tab.index}`}
	aria-controls={`${carousel.id}-item-${tab.index}`}
	aria-selected={isCurrent}
	tabindex={isCurrent ? 0 : -1}
	data-slot="apple-carousel-tab"
	data-current={isCurrent ? "" : undefined}
	class={cn(
		"relative mx-2 size-2 overflow-hidden rounded-full bg-muted-foreground not-data-current:hover:bg-foreground",
		"transition-[width,background-color] duration-[400ms,150ms] ease-[cubic-bezier(0.645,0.045,0.355,1),ease]",
		"motion-reduce:transition-colors motion-reduce:duration-150 motion-reduce:ease-[ease]",
		"data-current:w-12 group-data-[size=sm]/apple-carousel-controls:data-current:w-6 @max-3xl:data-current:w-8",
		"focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
		className
	)}
	{...restProps}
	onclick={handleClick}
	onfocus={handleFocus}
	onkeydown={handleKeydown}
>
	<span
		{@attach (node) => carousel.registerProgressFill(tab.index, node)}
		aria-hidden="true"
		data-slot="apple-carousel-tab-progress"
		class="absolute inset-0 origin-left scale-x-0 rounded-[inherit] bg-foreground"
	></span>
	<span class="sr-only">{@render children()}</span>
</button>
