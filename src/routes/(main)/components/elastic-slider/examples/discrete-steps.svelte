<script lang="ts">
	import { ElasticSlider } from "#lib/components/chan/elastic-slider/index.js";
</script>

<div class="w-72">
	<ElasticSlider
		label="Rating"
		min={1}
		max={5}
		step={1}
		defaultValue={3}
		formatValue={(value) => `${value} / 5`}
	/>
</div>
