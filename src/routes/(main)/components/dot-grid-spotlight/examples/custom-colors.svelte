<script lang="ts">
	import { DotGridSpotlight } from "#lib/components/chan/dot-grid-spotlight/index.js";
	import { mode } from "mode-watcher";

	const DOT_COLORS = {
		light: {
			default: "lab(36 55.64 -107.68 / 0.14)",
			active: "lab(36 55.64 -107.68)"
		},
		dark: {
			default: "rgb(52 211 153 / 0.2)",
			active: "rgb(52 211 153)"
		}
	} as const;

	const theme = $derived(mode.current === "dark" ? "dark" : "light");
</script>

<div
	class="relative aspect-square w-xs max-w-full overflow-hidden rounded-xl border bg-ink/5 dark:bg-emerald-400/10"
>
	<DotGridSpotlight
		dotColor={DOT_COLORS[theme].default}
		activeDotColor={DOT_COLORS[theme].active}
	/>
</div>
