<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type TimescaleIntroScrollProps = {
		children: Snippet;
	};
</script>

<script lang="ts">
	const INTRO_SCROLL_START_HOLD = 200;

	let { children }: TimescaleIntroScrollProps = $props();
	let ref = $state<HTMLDivElement | null>(null);

	$effect(() => {
		const viewport = ref?.querySelector<HTMLElement>(
			'[data-slot="timescale-viewport"]'
		);
		if (!viewport) return;

		const distance = viewport.scrollWidth - viewport.clientWidth;
		if (distance <= 0) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			viewport.scrollLeft = distance;
			return;
		}

		const timer = window.setTimeout(() => {
			viewport.scrollTo({ left: distance, behavior: "smooth" });
		}, INTRO_SCROLL_START_HOLD);

		return () => window.clearTimeout(timer);
	});
</script>

<div bind:this={ref} class="contents">
	{@render children()}
</div>
