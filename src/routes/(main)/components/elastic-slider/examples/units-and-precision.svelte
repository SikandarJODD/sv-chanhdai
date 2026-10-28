<script lang="ts">
	import { ElasticSlider } from "#lib/components/chan/elastic-slider/index.js";
</script>

<div class="w-72">
	<ElasticSlider
		label="Playback speed"
		min={0.5}
		max={2}
		step={0.25}
		defaultValue={1.25}
		formatValue={(value) => `${value.toFixed(2)}×`}
	/>
</div>
