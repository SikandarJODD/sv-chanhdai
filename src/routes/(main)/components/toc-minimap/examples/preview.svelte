<script lang="ts">
	import type { TOCItemType } from "$chan/toc-minimap";
	import { TOCMinimap } from "$chan/toc-minimap";

	const ITEMS: TOCItemType[] = [
		{ title: "Installation", url: "#installation", depth: 2 },
		{ title: "Usage", url: "#usage", depth: 2 },
		{ title: "API reference", url: "#api-reference", depth: 2 },
		{ title: "TOCMinimap", url: "#tocminimap", depth: 3 },
		{ title: "TOCItemType", url: "#tocitemtype", depth: 3 },
		{ title: "References", url: "#references", depth: 2 }
	];
</script>

<TOCMinimap items={ITEMS} />
