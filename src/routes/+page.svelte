<script lang="ts">
	import { page } from "$app/state";
	import { GithubStars } from "$chan/github-stars";
	import { IconSwap, IconSwapItem } from "$chan/icon-swap";
	import { ShareMenu } from "$chan/share-menu";
	import { ShimmeringText } from "$chan/shimmering-text";
	import AppleHelloEffectExample from "$lib/examples/apple-hello-effect-example.svelte";
	import ChevronsUpDownIconExample from "$lib/examples/chevrons-up-down-icon-example.svelte";
	import DotGridSpotlightExample from "$lib/examples/dot-grid-spotlight-example.svelte";
	import ElasticSliderExample from "$lib/examples/elastic-slider-example.svelte";
	import GitHubContributionsExample from "$lib/examples/github-contributions-example.svelte";
	import GlowCardGridExample from "$lib/examples/glow-card-grid-example.svelte";
	import MultiWheelPickerExample from "$lib/examples/multi-wheel-picker-example.svelte";
	import SpinningCircularTextShimmeringExample from "$lib/examples/shimmering-example.svelte";
	import TestimonialExample from "$lib/examples/testimonial-example.svelte";
	import WheelPickerExample from "$lib/examples/wheel-picker-example.svelte";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";
	import { Hero } from "$lib/components/landing";
	import Feature from "$lib/components/landing/feature/feature.svelte";
	import Footer from "$lib/components/landing/footer.svelte";
	import { seo_config } from "$lib/config/seo";
	import { Annotation } from "$ui/annotation";
	import { Button } from "$ui/button";
	import { Toaster } from "$ui/sonner";
	import { MonitorIcon, MoonIcon, SunIcon } from "@lucide/svelte";
	import { MetaTags } from "svelte-meta-tags";

	const ICONS = {
		sun: SunIcon,
		moon: MoonIcon,
		monitor: MonitorIcon
	} as const;

	type IconKey = keyof typeof ICONS;

	const title = seo_config.title;
	const description = seo_config.description;
	const canonical = $derived(page.url.origin);
	const images = [
		{
			url: `${seo_config.url}/og.png`,
			alt: seo_config.site_name
		}
	];
	const iconKeys = Object.keys(ICONS) as IconKey[];

	let unlocked = $state(false);
	let icon = $state<IconKey>("sun");
	const Icon = $derived(ICONS[icon]);
</script>

<MetaTags
	{title}
	titleTemplate={seo_config.title_template}
	{description}
	{canonical}
	openGraph={{
		url: canonical,
		title,
		description,
		images,
		siteName: seo_config.site_name
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title,
		description,
		imageAlt: images[0]?.alt ?? seo_config.site_name
	}}
/>

<Toaster />

<main class="mx-auto min-h-svh w-full max-w-5xl px-6 py-24">
	<div class="mb-12 text-center">
		<h1 class="text-3xl font-semibold tracking-tight">
			Annotation examples
		</h1>
		<p class="text-muted-foreground mt-2">
			Five ways to call attention to what matters.
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-2">
		<section
			class="bg-card flex min-h-56 items-center justify-center rounded-xl border p-10"
		>
			<p class="text-xl font-medium">
				Ship the <Annotation color="amber">important update</Annotation> today.
			</p>
		</section>

		<section
			class="bg-card flex min-h-56 items-center justify-center rounded-xl border p-10"
		>
			<p class="text-xl font-medium">
				Updates happen
				<Annotation note="no refresh needed" direction="n" color="blue">
					in real time
				</Annotation>
			</p>
		</section>

		<section
			class="bg-card flex min-h-56 items-center justify-center rounded-xl border p-10"
		>
			<p class="text-xl font-medium">
				Ready for <Annotation
					note="ship it!"
					direction="s"
					color="green">production</Annotation
				>
			</p>
		</section>

		<section
			class="bg-card flex min-h-56 items-center justify-center rounded-xl border p-10"
		>
			<Annotation
				note="keeps its own fill"
				direction="w"
				color="purple"
				noMark
			>
				<span
					class="rounded-full bg-purple-500/15 px-3 py-1 text-lg font-medium text-purple-600 dark:text-purple-300"
				>
					Stable
				</span>
			</Annotation>
		</section>

		<section
			class="bg-card flex min-h-64 items-center justify-center rounded-xl border p-14 sm:col-span-2"
		>
			<p class="text-xl font-medium">
				Make the
				<Annotation
					note="fine-tuned by props"
					noMark
					direction="nw"
					targetGap="8px"
					labelGap="10px"
					labelMaxWidth="180px"
					arrowX="4px"
					textY="8px"
					rotate="-2deg"
					customColor="lab(36 55.64 -107.68)"
				>
					important thing
				</Annotation>
				stand out.
			</p>
		</section>
	</div>
</main>
