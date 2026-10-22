<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
	let bounce = $state(68);
	let stretch = $state(42);
</script>

<BentoTile class={className}>
	<div class="flex w-full max-w-xs flex-col gap-4">
		<ElasticSlider
			label="Bounce"
			min={0}
			max={100}
			step={1}
			value={bounce}
			onValueChange={(nextValue) => (bounce = nextValue)}
			formatValue={(currentValue) => `${currentValue}%`}
		/>
		<ElasticSlider
			label="Stretch"
			min={0}
			max={100}
			step={1}
			value={stretch}
			onValueChange={(nextValue) => (stretch = nextValue)}
			formatValue={(currentValue) => `${currentValue}%`}
		/>
	</div>
</BentoTile>
