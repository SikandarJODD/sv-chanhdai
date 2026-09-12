<script lang="ts">
	import { resolve } from "$app/paths";
	import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
	import { BrandAssetsMenu } from "$chan/brand-assets-menu";
	import { ElasticSlider } from "$chan/elastic-slider";
	import GitHubContributions from "$chan/github-contributions/github-contributions.svelte";
	import { MiddleTruncation } from "$chan/middle-truncation";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";
	import { StatusButton } from "$chan/status-button";
	import {
		Testimonial,
		TestimonialAuthor,
		TestimonialAuthorName,
		TestimonialAuthorTagline,
		TestimonialAvatar,
		TestimonialAvatarImg,
		TestimonialAvatarRing,
		TestimonialQuote,
		TestimonialVerifiedBadge
	} from "$chan/testimonial";
	import { Testimonial2 } from "$chan/testimonial-2";
	import {
		WheelPicker,
		WheelPickerWrapper,
		type WheelPickerOption
	} from "$chan/wheel-picker";
	import Annotation from "$ui/annotation/annotation.svelte";
	import {
		ResizableHandle,
		ResizablePane,
		ResizablePaneGroup
	} from "$ui/resizable";
	import { watch } from "runed";
	import MasonryCard from "./masonry-card.svelte";
	import { fade, slide } from "svelte/transition";

	const LOGOMARK_SVG =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>';

	const LOGOTYPE_SVG =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 640 128"><path fill="currentColor" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/><text x="288" y="86" fill="currentColor" font-family="monospace" font-size="64">chanhdai</text></svg>';

	const exampleFiles = [
		{
			name: "building-accessible-command-menus-in-svelte.md",
			className: "text-foreground/70"
		},
		{
			name: "responsive-component-preview.svelte",
			className: "text-orange-500"
		},
		{ name: "masonry-grid-layout.ts", className: "text-info" }
	];

	const wheelOptions: WheelPickerOption[] = [
		{ label: "React", value: "react" },
		{ label: "Vue", value: "vue" },
		{ label: "Svelte", value: "svelte" }
	];

	let unlocked = $state(false);
	let sliderValue = $state(50);
	let wheelValue = $state("svelte");
	let slideToUnlock = $state<{ reset: () => void }>();

	function save() {
		return new Promise<void>((resolvePromise) => {
			window.setTimeout(resolvePromise, 1000);
		});
	}

	watch(
		() => unlocked,
		(value) => {
			if (value) {
				const timeout = window.setTimeout(() => {
					slideToUnlock?.reset();
					unlocked = false;
				}, 2000);

				return () => window.clearTimeout(timeout);
			}
		}
	);
</script>

{#snippet chanhDaiMark(className = "")}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={className}
		fill="none"
		viewBox="0 0 512 256"
		aria-hidden="true"
	>
		<path
			fill="currentColor"
			d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
		/>
	</svg>
{/snippet}

<section
	class="mx-auto w-full animate-in fade-in delay-500 duration-200 ease-out fill-mode-backwards slide-in-from-bottom-[6px] max-w-6xl px-4 pb-20 sm:pb-24 z-[300]"
>
	<h2
		class="font-gp-circle text-2xl leading-tight font-medium text-balance sm:text-3xl lg:text-4xl"
	>
		Pixel-perfect components, built for Svelte.
	</h2>

	<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
		<MasonryCard
			name="GitHub Contributions"
			href={resolve("/(main)/components/github-contributions")}
			class="md:col-span-7"
		>
			<div class="w-full min-w-0 overflow-hidden">
				<GitHubContributions username="SikandarJODD" />
			</div>
		</MasonryCard>

		<MasonryCard
			name="Status Button"
			href={resolve("/(main)/components/status-button")}
			class="md:col-span-5"
		>
			<Annotation
				note="Clickkk!"
				noMark
				direction="s"
				customColor="orange"
				targetGap="0.6rem"
				labelGap="0.5rem"
			>
				<StatusButton onclick={save} class="rounded-full px-4"
					>Save changes</StatusButton
				>
			</Annotation>
		</MasonryCard>

		<MasonryCard
			name="Testimonial"
			href={resolve("/(main)/components/testimonial")}
			class="md:col-span-5"
		>
			<div
				class="inset-ring-foreground/10 w-80 max-w-full rounded-xl inset-ring-1"
			>
				<Testimonial>
					<TestimonialQuote class="font-serif">
						<p>
							Awesome. Love the components, especially
							slide-to-unlock. Great job.
						</p>
					</TestimonialQuote>

					<TestimonialAuthor>
						<TestimonialAvatar>
							<TestimonialAvatarImg
								src="https://unavatar.io/x/rauchg"
								alt="Guillermo Rauch"
							/>
							<TestimonialAvatarRing />
						</TestimonialAvatar>

						<TestimonialAuthorName>
							Guillermo Rauch
							<TestimonialVerifiedBadge class="text-info">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill="currentColor"
										d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
									/>
								</svg>
							</TestimonialVerifiedBadge>
						</TestimonialAuthorName>
						<TestimonialAuthorTagline>
							CEO @Vercel
						</TestimonialAuthorTagline>
					</TestimonialAuthor>
				</Testimonial>
			</div>
		</MasonryCard>

		<MasonryCard
			name="Slide to Unlock"
			href={resolve("/(main)/components/slide-to-unlock")}
			class="md:col-span-7"
		>
			<div class="flex w-full flex-col items-center gap-3">
				{#if unlocked}
					<p
						class="h-5 text-sm font-medium transition-opacity"
						class:opacity-0={!unlocked}
						aria-live="polite"
						transition:slide={{ duration: 200 }}
					>
						{unlocked ? "Unlocked!" : ""}
					</p>
				{/if}
				<Annotation
					note="Resets in 2.0s"
					noMark
					direction="n"
					color="purple"
					targetGap="0.6rem"
					labelGap="0.5rem"
				>
					<SlideToUnlock
						bind:this={slideToUnlock}
						onUnlock={() => (unlocked = true)}
						class="w-56 md:w-64 max-w-full rounded-full"
					>
						<SlideToUnlockTrack>
							<SlideToUnlockText>
								{#snippet children({ isDragging })}
									<span>
										{isDragging
											? "Release..."
											: "Slide to unlock"}
									</span>
								{/snippet}
							</SlideToUnlockText>
							<SlideToUnlockHandle class="rounded-full" />
						</SlideToUnlockTrack>
					</SlideToUnlock>
				</Annotation>
			</div>
		</MasonryCard>

		<MasonryCard
			name="Apple Hello Effect"
			href={resolve("/(main)/components/apple-hello-effect")}
			class="md:col-span-7"
		>
			<AppleHelloEffectEnglish
				class="w-full max-w-sm text-orange-500 dark:text-emerald-500"
			/>
		</MasonryCard>

		<MasonryCard
			name="Elastic Slider"
			href={resolve("/(main)/components/elastic-slider")}
			class="md:col-span-5"
		>
			<ElasticSlider
				label="Value"
				min={0}
				max={100}
				step={1}
				value={sliderValue}
				onValueChange={(value) => (sliderValue = value)}
				class="w-52 max-w-full"
			/>
		</MasonryCard>

		<MasonryCard
			name="Testimonial 2"
			href={resolve("/(main)/components/testimonial-2")}
			class="md:col-span-7"
		>
			<Testimonial2
				authorName="Guillermo Rauch"
				authorTagline="CEO @Vercel"
				url="https://x.com/rauchg/status/1978913158514237669"
				quote="Awesome. Love the components, especially slide-to-unlock. Great job."
				class="max-w-lg"
			/>
		</MasonryCard>

		<MasonryCard
			name="Wheel Picker"
			href={resolve("/(main)/components/wheel-picker")}
			class="md:col-span-5"
		>
			<div class="w-64 max-w-full">
				<WheelPickerWrapper>
					<WheelPicker
						options={wheelOptions}
						bind:value={wheelValue}
						aria-label="Framework"
					/>
				</WheelPickerWrapper>
			</div>
		</MasonryCard>

		<MasonryCard
			name="Brand Assets Menu"
			href={resolve("/(main)/components/brand-assets-menu")}
			class="md:col-span-6"
		>
			<div class="flex flex-col items-center gap-4">
				<BrandAssetsMenu
					logomark={chanhDaiMark}
					logomarkSVG={LOGOMARK_SVG}
					logotypeSVG={LOGOTYPE_SVG}
					brandGuidelinesURL="https://chanhdai.com/blog/chanhdai-brand"
					brandAssetsURL="https://assets.chanhdai.com/chanhdai-brand.zip"
				>
					{#snippet children({ props })}
						<button
							type="button"
							class="rounded-xl p-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							aria-label="Open brand assets menu"
							{...props}
						>
							{@render chanhDaiMark("h-12 text-foreground")}
						</button>
					{/snippet}
				</BrandAssetsMenu>

				<p class="text-sm text-muted-foreground">
					<span class="hidden pointer-fine:inline"
						>Right-click the logo</span
					>
					<span class="hidden pointer-coarse:inline"
						>Press & hold the logo</span
					>
				</p>
			</div>
		</MasonryCard>

		<MasonryCard
			name="Middle Truncation"
			href={resolve("/(main)/components/middle-truncation")}
			class="md:col-span-6"
		>
			<ResizablePaneGroup direction="horizontal" class="w-full max-w-md">
				<ResizablePane
					minSize={35}
					defaultSize={100}
					class="flex items-center pr-0.5"
				>
					<div
						class="relative flex w-full min-w-0 flex-col gap-3 rounded-xl border bg-card p-5 after:pointer-events-none after:absolute after:inset-1 after:rounded-lg after:border after:border-border/50"
					>
						{#each exampleFiles as file (file.name)}
							<MiddleTruncation
								text={file.name}
								end={file.name.endsWith(".svelte") ? 7 : 3}
								class={`relative z-10 font-mono text-sm ${file.className}`}
							/>
						{/each}
					</div>
				</ResizablePane>

				<ResizableHandle
					class="relative w-2 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:left-0.5 after:h-12 after:w-1.5 after:translate-x-0 after:-translate-y-1/2 after:rounded-full after:bg-foreground/10 after:transition-all hover:after:bg-foreground/20 focus-visible:ring-0 focus-visible:ring-offset-0 data-active:after:scale-y-125 data-active:after:bg-foreground/30"
				/>

				<ResizablePane minSize={0} defaultSize={0} />
			</ResizablePaneGroup>
		</MasonryCard>
	</div>
</section>
