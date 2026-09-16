<script lang="ts">
	import type { TOCItemType } from "$chan/toc-minimap";
	import { TOCMinimap } from "$chan/toc-minimap";

	const items: TOCItemType[] = [
		{ title: "Installation", url: "#installation", depth: 2 },
		{ title: "Usage", url: "#usage", depth: 2 },
		{ title: "Examples", url: "#examples", depth: 2 },
		{ title: "Static items", url: "#static-items", depth: 3 },
		{
			title: "Generated from headings",
			url: "#generated-from-headings",
			depth: 3
		}
	];
</script>

<TOCMinimap {items} />
