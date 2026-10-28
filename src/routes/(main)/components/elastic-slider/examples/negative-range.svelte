<script lang="ts">
	import { ElasticSlider } from "#lib/components/chan/elastic-slider/index.js";
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
