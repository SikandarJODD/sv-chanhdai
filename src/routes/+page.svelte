<script lang="ts">
	import { page } from "$app/state";
	import { GithubStars } from "$chan/github-stars";
	import { IconSwap, IconSwapItem } from "$chan/icon-swap";
	import { ShareMenu } from "$chan/share-menu";
	import { ShimmeringText } from "$chan/shimmering-text";
	import AppleHelloEffectExample from "$lib/examples/apple-hello-effect-example.svelte";
	import SpinningCircularTextShimmeringExample from "$lib/examples/shimmering-example.svelte";
	import TestimonialExample from "$lib/examples/testimonial-example.svelte";
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

<!-- <Hero /> -->
<!-- <Feature /> -->
<!-- <Footer /> -->
<!-- <div class="p-10 flex flex-col gap-5 relative"> -->
<div class="flex min-h-svh items-center justify-center overflow-hidden p-10">
	<AppleHelloEffectExample />
</div>
<!-- 
	<div class="flex justify-center py-10">
		<TestimonialExample />
	</div>

	<div class="flex justify-center py-10">
		<SpinningCircularTextShimmeringExample />
	</div>

	<div class="flex flex-col items-center gap-4">
		<Button
			class="relative will-change-transform"
			variant="outline"
			size="icon-sm"
			aria-label={icon}
		>
			<IconSwap>
				{#key icon}
					<IconSwapItem>
						<Icon />
					</IconSwapItem>
				{/key}
			</IconSwap>
		</Button>

		<div class="flex gap-0.5 rounded-lg p-0.5">
			{#each iconKeys as key (key)}
				<Button
					class="rounded-md border-none capitalize"
					size="sm"
					variant={icon === key ? "secondary" : "ghost"}
					onclick={() => (icon = key)}
				>
					{key}
				</Button>
			{/each}
		</div>
	</div>

	<div>
		<GithubStars repo="ncdai/chanhdai.com" stargazersCount={2050} />
	</div>
	<div>
		<ShareMenu title="Chanh Dai" url="/" />
	</div>
	<div>
		<ShimmeringText text="slide to unlock" />
	</div>
</div> -->

<!-- <div
	class="fixed left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2"
	style:bottom="max(4rem, env(safe-area-inset-bottom))"
>
	{#if unlocked}
		<p class="text-sm font-medium">Unlocked!</p>
	{/if}

	<SlideToUnlock onUnlock={() => (unlocked = true)} class="w-67 rounded-full">
		<SlideToUnlockTrack>
			<SlideToUnlockText>
				{#snippet children({ isDragging })}
					<span>{isDragging ? "Release..." : "Slide to unlock"}</span>
				{/snippet}
			</SlideToUnlockText>
			<SlideToUnlockHandle class="rounded-full" />
		</SlideToUnlockTrack>
	</SlideToUnlock>
</div> -->
