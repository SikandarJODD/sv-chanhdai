<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
	<ElasticSlider
		label="Volume"
		min={0}
		max={100}
		step={1}
		defaultValue={65}
		formatValue={(value) => `${value}%`}
	/>
</div>
