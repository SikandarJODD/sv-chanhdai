<script lang="ts">
	import { LineNav, type LineNavItem } from "$chan/line-nav";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const items: LineNavItem[] = [
		{ title: "Contribution", href: "#contribution" },
		{ title: "Slider", href: "#slider" },
		{ title: "Picker", href: "#picker" },
		{ title: "Unlock", href: "#unlock" }
	];

	let activeHref = $state("#slider");

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
