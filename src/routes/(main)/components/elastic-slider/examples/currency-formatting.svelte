<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";

	const currency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	});
</script>

<div class="w-80">
	<ElasticSlider
		label="Budget"
		min={0}
		max={5000}
		step={50}
		defaultValue={1250}
		formatValue={(value) => currency.format(value)}
	/>
</div>
