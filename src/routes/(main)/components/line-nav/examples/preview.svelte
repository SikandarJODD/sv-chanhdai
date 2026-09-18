<script lang="ts">
	import { LineNav } from "$chan/line-nav";

	const ITEMS = [
		{ title: "Apple Hello Effect", href: "" },
		{ title: "Code Block Command", href: "" },
		{ title: "Copy Button", href: "" },
		{ title: "Dot Grid Spotlight", href: "" },
		{ title: "Elastic Slider", href: "" },
		{ title: "Fluid Gradient Text", href: "" },
		{ title: "Shimmering Text", href: "" },
		{ title: "Slide to Unlock", href: "" },
		{ title: "Theme Switcher", href: "" },
		{ title: "TOC Minimap", href: "" }
	];

	let activeHref = $state("#elastic-slider");
</script>

<LineNav
	class="w-60"
	items={ITEMS}
	{activeHref}
	scrollActiveIntoView={false}
	onItemClick={(item) => (activeHref = item.href)}
/>
