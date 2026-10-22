<script lang="ts">
	import * as Rough from "@sveltecraft/rough";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	type Stroke = { points: [number, number][]; seed: number };

	const strokes: Stroke[] = [
		{
			points: [
				[34, 38],
				[72, 35],
				[112, 39],
				[146, 36]
			],
			seed: 21
		},
		{
			points: [
				[31, 49],
				[64, 52],
				[92, 48]
			],
			seed: 22
		},
		{
			points: [
				[108, 49],
				[130, 52],
				[149, 50]
			],
			seed: 23
		},
		{
			points: [
				[33, 61],
				[70, 58],
				[108, 63],
				[147, 60]
			],
			seed: 24
		},
		{
			points: [
				[31, 73],
				[58, 76],
				[85, 72],
				[113, 75]
			],
			seed: 25
		},
		{
			points: [
				[126, 73],
				[139, 70],
				[149, 73]
			],
			seed: 26
		},
		{
			points: [
				[34, 85],
				[69, 82],
				[105, 87],
				[146, 84]
			],
			seed: 27
		},
		{
			points: [
				[31, 97],
				[51, 100],
				[77, 96]
			],
			seed: 28
		},
		{
			points: [
				[91, 98],
				[118, 95],
				[149, 99]
			],
			seed: 29
		},
		{
			points: [
				[35, 109],
				[73, 106],
				[111, 111],
				[145, 108]
			],
			seed: 30
		}
	];
</script>

<BentoTile class={className}>
	<Rough.SVG
		width={180}
		height={140}
		class="h-auto w-full max-w-44 text-foreground/60"
		aria-label="Hand-drawn lined square"
		stroke="currentColor"
		strokeWidth={1.15}
		roughness={1.45}
		bowing={1.5}
	>
		<Rough.Path
			d="M 36 18 H 144 Q 162 18 162 36 V 104 Q 162 122 144 122 H 36 Q 18 122 18 104 V 36 Q 18 18 36 18 Z"
			seed={12}
			disableMultiStroke={true}
		/>

		{#each strokes as stroke (stroke.seed)}
			<Rough.Curve
				points={stroke.points}
				seed={stroke.seed}
				roughness={1.8}
				bowing={1.8}
				disableMultiStroke={true}
			/>
		{/each}
	</Rough.SVG>
</BentoTile>
