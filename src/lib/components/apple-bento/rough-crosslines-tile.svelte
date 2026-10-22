<script lang="ts">
	import * as Rough from "@sveltecraft/rough";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
</script>

<BentoTile class={className}>
	<Rough.SVG
		width={180}
		height={140}
		class="h-auto w-full max-w-44 text-foreground/60"
		aria-label="Hand-drawn crossed lines"
		stroke="currentColor"
		strokeWidth={1.2}
		roughness={1.5}
		bowing={1.2}
	>
		<Rough.Rectangle
			x={15}
			y={15}
			width={150}
			height={110}
			seed={11}
			strokeLineDash={[7, 7]}
			disableMultiStroke={true}
		/>
		<Rough.Line
			x1={28}
			y1={30}
			x2={153}
			y2={111}
			seed={17}
			strokeLineDash={[6, 6]}
			disableMultiStroke={true}
		/>
		<Rough.Line
			x1={151}
			y1={28}
			x2={26}
			y2={113}
			seed={23}
			strokeLineDash={[6, 6]}
			disableMultiStroke={true}
		/>
	</Rough.SVG>
</BentoTile>
