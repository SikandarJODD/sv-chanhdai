<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";

	let opacity = $state(0.8);
	let blur = $state(0);
	let rotation = $state(0);
</script>

<div
	class="grid w-full max-w-lg gap-8 sm:grid-cols-[1fr_10rem] sm:items-center"
>
	<div class="space-y-3">
		<ElasticSlider
			label="Opacity"
			min={0.1}
			max={1}
			step={0.1}
			value={opacity}
			onValueChange={(value) => (opacity = value)}
			formatValue={(value) => `${Math.round(value * 100)}%`}
		/>
		<ElasticSlider
			label="Blur"
			min={0}
			max={10}
			step={1}
			value={blur}
			onValueChange={(value) => (blur = value)}
			formatValue={(value) => `${value}px`}
		/>
		<ElasticSlider
			label="Rotation"
			min={-60}
			max={60}
			step={1}
			value={rotation}
			onValueChange={(value) => (rotation = value)}
			formatValue={(value) => `${value}°`}
		/>
	</div>

	<div
		class="grid min-h-32 place-items-center overflow-hidden rounded-xl border bg-muted/40"
	>
		<div
			class="grid size-20 place-items-center rounded-xl bg-foreground text-sm font-semibold text-background shadow-lg"
			style:opacity
			style:filter={`blur(${blur}px)`}
			style:transform={`rotate(${rotation}deg)`}
		>
			Hehe
		</div>
	</div>
</div>
