<script lang="ts">
	import BentoReveal from "./bento-reveal.svelte";
	import ComponentCountTile from "./component-count-tile.svelte";
	import ElasticSlidersTile from "./elastic-sliders-tile.svelte";
	import GithubTile from "./github-tile.svelte";
	import HeroStage from "./hero-stage.svelte";
	import HeroTile from "./hero-tile.svelte";
	import LineNavTile from "./line-nav-tile.svelte";
	import MiddleTruncationTile from "./middle-truncation-tile.svelte";
	import RoughCrosslinesTile from "./rough-crosslines-tile.svelte";
	import SlideToUnlockTile from "./slide-to-unlock-tile.svelte";
	import StatusButtonTile from "./status-button-tile.svelte";
	import WheelPickerTile from "./wheel-picker-tile.svelte";

	let showHero = $state(false);
	let showBoard = $state(false);

	function handleKeydown(event: KeyboardEvent) {
		if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) {
			return;
		}

		const target = event.target;
		if (
			target instanceof HTMLElement &&
			target.matches("input, textarea, select, [contenteditable='true']")
		) {
			return;
		}

		const key = event.key.toLowerCase();

		if (key === "b") {
			showHero = true;
			return;
		}

		if (key === "v" && showHero) {
			showBoard = !showBoard;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main
	class="min-h-screen bg-background px-3 py-8 sm:px-5 sm:py-12 lg:px-8 lg:py-12"
>
	<section
		aria-label="Svelte Chan component collection"
		class="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:grid-rows-[13.5rem_21rem_13.5rem]"
	>
		<BentoReveal
			class="md:col-span-2 lg:col-span-5"
			x={-28}
			y={-20}
			delay={0.16}
			visible={showBoard}
		>
			<GithubTile class="h-full" />
		</BentoReveal>
		<BentoReveal
			class="lg:col-span-4"
			y={-26}
			delay={0.205}
			visible={showBoard}
		>
			<MiddleTruncationTile class="h-full" />
		</BentoReveal>
		<BentoReveal
			class="lg:col-span-3"
			x={28}
			y={-20}
			delay={0.25}
			visible={showBoard}
		>
			<StatusButtonTile class="h-full" />
		</BentoReveal>

		<BentoReveal
			class="lg:col-span-3"
			x={-28}
			delay={0.295}
			visible={showBoard}
		>
			<LineNavTile class="h-full" />
		</BentoReveal>
		<HeroStage
			class="md:col-span-2 lg:col-span-6"
			settled={showBoard}
			visible={showHero}
		>
			{#if showHero}
				<HeroTile class="h-full" />
			{/if}
		</HeroStage>
		<BentoReveal
			class="lg:col-span-3"
			x={28}
			delay={0.34}
			visible={showBoard}
		>
			<WheelPickerTile class="h-full" />
		</BentoReveal>

		<BentoReveal
			class="lg:col-span-3"
			x={-24}
			y={20}
			delay={0.385}
			visible={showBoard}
		>
			<ComponentCountTile
				class="h-full bg-blue-50/20 hover:border-ink/40"
			/>
		</BentoReveal>
		<BentoReveal
			class="lg:col-span-5"
			y={24}
			delay={0.43}
			visible={showBoard}
		>
			<ElasticSlidersTile class="h-full" />
		</BentoReveal>
		<!-- <RoughCrosslinesTile class="lg:col-span-2" /> -->
		<BentoReveal
			class="lg:col-span-4"
			x={28}
			y={20}
			delay={0.475}
			visible={showBoard}
		>
			<SlideToUnlockTile class="h-full" />
		</BentoReveal>
	</section>
</main>
