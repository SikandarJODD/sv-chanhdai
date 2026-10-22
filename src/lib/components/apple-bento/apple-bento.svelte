<script lang="ts">
	import ComponentCountTile from "./component-count-tile.svelte";
	import ElasticSlidersTile from "./elastic-sliders-tile.svelte";
	import GithubTile from "./github-tile.svelte";
	import HeroTile from "./hero-tile.svelte";
	import LineNavTile from "./line-nav-tile.svelte";
	import MiddleTruncationTile from "./middle-truncation-tile.svelte";
	import RoughCrosslinesTile from "./rough-crosslines-tile.svelte";
	import SlideToUnlockTile from "./slide-to-unlock-tile.svelte";
	import StatusButtonTile from "./status-button-tile.svelte";
	import WheelPickerTile from "./wheel-picker-tile.svelte";
</script>

<main
	class="min-h-screen bg-background px-3 py-8 sm:px-5 sm:py-12 lg:px-8 lg:py-12"
>
	<section
		aria-label="Svelte Chan component collection"
		class="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:grid-rows-[13.5rem_21rem_13.5rem]"
	>
		<GithubTile class="md:col-span-2 lg:col-span-5" />
		<MiddleTruncationTile class="lg:col-span-4" />
		<StatusButtonTile class="lg:col-span-3" />

		<LineNavTile class="lg:col-span-3" />
		<HeroTile class="md:col-span-2 lg:col-span-6" />
		<WheelPickerTile class="lg:col-span-3" />

		<ComponentCountTile
			class="bg-blue-50/20 hover:border-ink/40 lg:col-span-3"
		/>
		<ElasticSlidersTile class="lg:col-span-5" />
		<!-- <RoughCrosslinesTile class="lg:col-span-2" /> -->
		<SlideToUnlockTile class="lg:col-span-4" />
	</section>
</main>
