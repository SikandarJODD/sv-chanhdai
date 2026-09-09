<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";

	let volume = $state(35);
</script>

<div class="w-72 space-y-3">
	<ElasticSlider
		label="Volume"
		min={0}
		max={100}
		step={1}
		value={volume}
		onValueChange={(value) => (volume = value)}
		formatValue={(value) => `${value}%`}
	/>

	<div class="flex items-center justify-between text-sm">
		<span class="text-muted-foreground">Parent value: {volume}</span>
		<button
			type="button"
			class="font-medium underline-offset-4 hover:underline"
			onclick={() => (volume = 35)}
		>
			Reset
		</button>
	</div>
</div>
