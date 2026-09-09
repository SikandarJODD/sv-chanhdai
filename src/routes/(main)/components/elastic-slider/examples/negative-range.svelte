<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
	<ElasticSlider
		label="Temperature"
		min={-20}
		max={40}
		step={1}
		defaultValue={18}
		formatValue={(value) => `${value}°C`}
	/>
</div>
