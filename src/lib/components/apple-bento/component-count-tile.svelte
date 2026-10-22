<script lang="ts">
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
</script>

<BentoTile class={className}>
	<p class="font-mono text-7xl leading-none font-medium tracking-[-0.08em] text-ink sm:text-8xl">
		20+
	</p>
</BentoTile>
