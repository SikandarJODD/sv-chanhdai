<script lang="ts" generics="T">
	import { cn } from "$lib/utils";
	import { onMount, tick } from "svelte";
	import { watch } from "runed";
	import { useAppleCarousel } from "./apple-carousel-context.svelte";
	import AppleCarouselProvider from "./apple-carousel-provider.svelte";
	import type { AppleCarouselContentProps } from "./apple-carousel-types";
	import { CLONE_COUNT } from "./apple-carousel-utils";

	let {
		ref = $bindable(null),
		items,
		children,
		class: className,
		...restProps
	}: AppleCarouselContentProps<T> = $props();

	const carousel = useAppleCarousel();
	let hydrated = $state(false);
	const count = $derived(items.length);
	const cloneCount = $derived(
		hydrated && count > 1 ? Math.min(CLONE_COUNT, count) : 0
	);
	const leadingItems = $derived(items.slice(count - cloneCount));
	const trailingItems = $derived(items.slice(0, cloneCount));

	onMount(() => {
		hydrated = true;
	});

	watch(
		() => cloneCount,
		(nextCloneCount) => {
			if (nextCloneCount > 0) {
				void tick().then(carousel.alignToCurrent);
			}
		}
	);

	function attachViewport(node: HTMLDivElement): VoidFunction {
		ref = node;
		const cleanup = carousel.attachViewport(node);

		return () => {
			cleanup();
			if (ref === node) ref = null;
		};
	}
</script>

<div
	{@attach attachViewport}
	data-slot="apple-carousel-content"
	class={cn(
		"relative no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden data-animating:snap-none",
		"[--apple-carousel-gap:--spacing(5)] [--apple-carousel-item-width:min(max(87.5cqw,var(--container-3xs)),var(--container-6xl))] [--apple-carousel-padding:max(6.25cqw,(100cqw-var(--container-6xl))/2)]",
		"@max-3xl:scroll-ps-(--apple-carousel-padding) @max-3xl:[--apple-carousel-item-width:calc(max(87.5cqw,var(--container-3xs))-var(--apple-carousel-gap))]",
		className
	)}
	{...restProps}
>
	<ul
		role="list"
		data-slot="apple-carousel-list"
		class="mx-auto grid w-fit grid-flow-col gap-(--apple-carousel-gap) px-(--apple-carousel-padding)"
	>
		{#each leadingItems as item, offset (offset)}
			<AppleCarouselProvider
				{children}
				value={item}
				item={{ index: count - cloneCount + offset, isClone: true }}
			/>
		{/each}

		{#each items as item, index (index)}
			<AppleCarouselProvider
				{children}
				value={item}
				item={{ index, isClone: false }}
			/>
		{/each}

		{#each trailingItems as item, index (index)}
			<AppleCarouselProvider
				{children}
				value={item}
				item={{ index, isClone: true }}
			/>
		{/each}
	</ul>
</div>
