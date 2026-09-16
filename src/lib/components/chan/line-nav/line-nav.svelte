<script lang="ts" module>
	export type LineNavItem = {
		title: string;
		href: string;
	};

	export type LineNavProps = {
		class?: string;
		items: LineNavItem[];
		/** Href of the active item. */
		activeHref?: string;
		/** Scroll the active item into view on mount. @default true */
		scrollActiveIntoView?: boolean;
		/** Called when an item is clicked. */
		onItemClick?: (item: LineNavItem, event: MouseEvent) => void;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import LineNavItemComponent from "./line-nav-item.svelte";

	let {
		class: className,
		items,
		activeHref,
		scrollActiveIntoView = true,
		onItemClick
	}: LineNavProps = $props();

	let itemRefs = $state<(HTMLAnchorElement | null)[]>([]);

	onMount(() => {
		if (!scrollActiveIntoView) return;

		const activeIndex = items.findIndex((item) => item.href === activeHref);
		itemRefs[activeIndex]?.scrollIntoView({ block: "center" });
	});
</script>

<nav
	class={cn("flex flex-col gap-2 py-5.25", className)}
	style="--line-nav-width: 24px;"
>
	{#each items as item, index (item.href)}
		<LineNavItemComponent
			bind:ref={itemRefs[index]}
			{...item}
			active={item.href === activeHref}
			isLast={index === items.length - 1}
			onclick={(event) => onItemClick?.(item, event)}
		/>
	{/each}
</nav>
