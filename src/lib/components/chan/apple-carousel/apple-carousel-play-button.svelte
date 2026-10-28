<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion } from "motion-sv";
	import type { Transition } from "motion-sv";
	import { useAppleCarousel } from "./apple-carousel-context.svelte";
	import type { AppleCarouselPlayButtonProps } from "./apple-carousel-types";

	const ICON_STROKE_WIDTH = 2.5;
	const PAUSE_ICON = {
		left: "M5.5 5.5L8.5 5.5L8.5 18.5L5.5 18.5Z",
		right: "M15.5 5.5L18.5 5.5L18.5 18.5L15.5 18.5Z"
	} as const;
	const PLAY_ICON = {
		left: "M7.5 5.87L13 9.08L13 14.92L7.5 18.13Z",
		right: "M13 9.08L18.01 12L18.01 12L13 14.92Z"
	} as const;
	const ICON_TRANSITION: Transition = {
		type: "spring",
		visualDuration: 0.3,
		bounce: 0
	};
	const INSTANT_TRANSITION: Transition = { duration: 0 };

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: AppleCarouselPlayButtonProps = $props();

	const carousel = useAppleCarousel();
	const icon = $derived(carousel.isPlaying ? PAUSE_ICON : PLAY_ICON);
	const transition = $derived(
		carousel.prefersReducedMotion ? INSTANT_TRANSITION : ICON_TRANSITION
	);

	function attachRef(node: HTMLButtonElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}

	function handleClick(
		event: MouseEvent & { currentTarget: HTMLButtonElement }
	): void {
		onclick?.(event);
		if (event.defaultPrevented) return;
		if (carousel.isPlaying) carousel.pause();
		else carousel.play();
	}
</script>

<button
	{@attach attachRef}
	type="button"
	aria-label={carousel.isPlaying ? "Pause gallery" : "Play gallery"}
	data-slot="apple-carousel-play-button"
	class={cn(
		"flex size-14 items-center justify-center rounded-full bg-muted text-foreground group-data-[size=sm]/apple-carousel-controls:size-11",
		"transition-[background-color,scale] duration-150 ease-out hover:bg-muted/80 active:scale-97 motion-reduce:active:scale-100",
		"focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
		className
	)}
	{...restProps}
	onclick={handleClick}
>
	<svg
		aria-hidden="true"
		focusable="false"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		stroke-width={ICON_STROKE_WIDTH}
		stroke-linejoin="round"
		class="pointer-events-none size-6 group-data-[size=sm]/apple-carousel-controls:size-5"
	>
		<motion.path initial={false} animate={{ d: icon.right }} {transition} />
		<motion.path initial={false} animate={{ d: icon.left }} {transition} />
	</svg>
</button>
