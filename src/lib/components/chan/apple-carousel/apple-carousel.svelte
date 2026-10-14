<script lang="ts">
	import { cn } from "$lib/utils";
	import { setAppleCarouselContext } from "./apple-carousel-context.svelte";
	import { createAppleCarouselState } from "./apple-carousel-state.svelte";
	import type { AppleCarouselRootProps } from "./apple-carousel-types";

	let {
		ref = $bindable(null),
		children,
		duration = 5000,
		class: className,
		...restProps
	}: AppleCarouselRootProps = $props();

	const id = $props.id();
	const state = createAppleCarouselState({
		id,
		duration: () => duration
	});
	setAppleCarouselContext(state);

	function attachRef(node: HTMLDivElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}
</script>

<div
	{@attach attachRef}
	data-slot="apple-carousel"
	data-playing={state.isPlaying ? "" : undefined}
	class={cn("@container relative w-full", className)}
	{...restProps}
>
	{@render children()}
</div>
