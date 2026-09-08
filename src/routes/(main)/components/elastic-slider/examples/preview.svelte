<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";

	let opacity = $state(0.5);
</script>

<div class="flex w-50 flex-col gap-4">
	<ElasticSlider
		label="Opacity"
		min={0}
		max={1}
		value={opacity}
		onValueChange={(value) => (opacity = value)}
	/>

	<ElasticSlider
		label="Blur"
		min={0}
		max={100}
		step={1}
		defaultValue={20}
		formatValue={(value) => `${value}px`}
	/>

	<ElasticSlider
		label="Saturation"
		min={0}
		max={10}
		step={0.1}
		defaultValue={8}
	/>
</div>
