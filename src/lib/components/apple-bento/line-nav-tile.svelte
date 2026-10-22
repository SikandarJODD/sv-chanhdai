<script lang="ts">
	import { LineNav, type LineNavItem } from "$chan/line-nav";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const items: LineNavItem[] = [
		{ title: "Apple Carousel", href: "#apple-carousel" },
		{ title: "Elastic Slider", href: "#elastic-slider" },
		{ title: "Slide to Unlock", href: "#slide-to-unlock" },
		{ title: "Wheel Picker", href: "#wheel-picker" },
		{ title: "Status Button", href: "#status-button" },
		{ title: "GitHub Contributions", href: "#github-contributions" },
		{ title: "Middle Truncation", href: "#middle-truncation" }
	];

	let activeHref = $state("#elastic-slider");

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
