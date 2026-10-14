<script lang="ts">
	import { PressedKeys } from "runed";
	import { DashedLines } from "$lib/components/ui/dashed-lines";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import CustomTheme from "../(main)/components/github-contributions/examples/custom-theme.svelte";
	import DefaultTheme from "../(main)/components/github-contributions/examples/github-default-theme.svelte";
	import HalloweenTheme from "../(main)/components/github-contributions/examples/github-halloween-theme.svelte";
	import WinterTheme from "../(main)/components/github-contributions/examples/github-winter-theme.svelte";
	import LocalizedLabels from "../(main)/components/github-contributions/examples/localized-labels.svelte";
	import Preview from "../(main)/components/github-contributions/examples/preview.svelte";

	const examples = [
		{ label: "Preview" },
		{ label: "Default theme" },
		{ label: "Winter theme" },
		{ label: "Custom theme" },
		{ label: "Halloween theme" },
		{ label: "Localized labels" }
	] as const;

	let activeIndex = $state(0);
	const activeExample = $derived(examples[activeIndex] ?? examples[0]);
	const keys = new PressedKeys();

	function showPrevious() {
		activeIndex = (activeIndex - 1 + examples.length) % examples.length;
	}

	function showNext() {
		activeIndex = (activeIndex + 1) % examples.length;
	}

	keys.onKeys("ArrowLeft", showPrevious);
	keys.onKeys("ArrowRight", showNext);
</script>

<svelte:head>
	<title>GitHub Contributions Playground</title>
	<meta
		name="description"
		content="A recording-ready showcase of the GitHub contributions component."
	/>
</svelte:head>

<main class="min-h-[calc(100svh-3.5rem)] overflow-hidden bg-background">
	<div
		class="flex min-h-[calc(100svh-3.5rem)] items-center justify-center px-6 py-8 sm:px-10 sm:py-12"
	>
		<section
			class="relative w-full max-w-6xl border-x border-border"
			aria-label="GitHub contributions theme showcase"
		>
			<DecorIcon position="top-left" />
			<DecorIcon position="top-right" />
			<DecorIcon position="bottom-left" />
			<DecorIcon position="bottom-right" />

			<div class="h-10 overflow-hidden border-y border-border sm:h-12">
				<DashedLines class="opacity-70" width={24} height={48} x={12} />
			</div>

			<div
				class="relative flex min-h-[22rem] items-center justify-center border-b border-border sm:min-h-[26rem]"
			>
				<p
					class="absolute top-4 left-5 text-xs font-medium text-ink sm:top-5 sm:left-6"
				>
					GitHub Contributions
				</p>

				<div
					class="flex w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-8"
					role="region"
					aria-live="polite"
					aria-label={`${activeExample.label} GitHub contributions example`}
				>
					<div
						class="w-full max-w-full overflow-hidden [&_[data-slot='contribution-graph']]:mx-auto"
					>
						{#if activeIndex === 0}
							<Preview />
						{:else if activeIndex === 1}
							<DefaultTheme />
						{:else if activeIndex === 2}
							<WinterTheme />
						{:else if activeIndex === 3}
							<CustomTheme />
						{:else if activeIndex === 4}
							<HalloweenTheme />
						{:else}
							<LocalizedLabels />
						{/if}
					</div>
				</div>

				<p
					class="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap text-muted-foreground sm:bottom-5"
				>
					Port by Bhide Svelte
				</p>
			</div>

			<div class="h-10 overflow-hidden border-b border-border sm:h-12">
				<DashedLines class="opacity-70" width={24} height={48} x={12} />
			</div>
		</section>
	</div>
</main>
