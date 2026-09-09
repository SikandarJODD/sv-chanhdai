<script lang="ts">
	import { DotGridSpotlight } from "$chan/dot-grid-spotlight";
	import { mode } from "mode-watcher";

	const DOT_COLOR = {
		light: {
			default: "rgba(0, 0, 0, 0.08)",
			active: "rgba(0, 0, 0, 0.16)"
		},
		dark: {
			default: "rgba(255, 255, 255, 0.06)",
			active: "rgba(255, 255, 255, 0.12)"
		}
	} as const;

	const theme = $derived(mode.current === "dark" ? "dark" : "light");
</script>

<div
	class="relative aspect-square w-xs max-w-full overflow-hidden rounded-xl border bg-black/1 dark:bg-white/5"
>
	<DotGridSpotlight
		dotColor={DOT_COLOR[theme].default}
		activeDotColor={DOT_COLOR[theme].active}
	/>
</div>
