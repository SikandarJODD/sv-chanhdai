<script lang="ts">
	import { LineNav, type LineNavItem } from "$chan/line-nav";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const items: LineNavItem[] = [
		{ title: "Apple Carousel", href: "" },
		{ title: "Elastic Slider", href: "" },
		{ title: "Slide to Unlock", href: "" },
		{ title: "Wheel Picker", href: "" },
		{ title: "Status Button", href: "" },
		{ title: "GitHub Contributions", href: "" },
		{ title: "Middle Truncation", href: "" }
	];

	let activeHref = $state("");

	function selectItem(item: LineNavItem, event: MouseEvent) {
		event.preventDefault();
		activeHref = item.href;
	}
</script>

<BentoTile class={className}>
	<LineNav
		class="w-48 max-w-full"
		{items}
		{activeHref}
		scrollActiveIntoView={false}
		onItemClick={selectItem}
	/>
</BentoTile>
