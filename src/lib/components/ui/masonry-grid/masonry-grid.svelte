<script lang="ts">
	import { resolve } from "$app/paths";
	import GitHubContributions from "$chan/github-contributions/github-contributions.svelte";
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
	import MasonryCard from "./masonry-card.svelte";

	let unlocked = $state(false);

	function save() {
		return new Promise<void>((resolvePromise) => {
			window.setTimeout(resolvePromise, 1000);
		});
	}
</script>

<section class="mx-auto w-full max-w-6xl px-4 pb-20 sm:pb-24 z-[300]">
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
			<StatusButton onclick={save}>Save changes</StatusButton>
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
				<SlideToUnlock
					onUnlock={() => (unlocked = true)}
					class="w-67 max-w-full rounded-full"
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

				<p
					class="h-5 text-sm font-medium transition-opacity"
					class:opacity-0={!unlocked}
					aria-live="polite"
				>
					{unlocked ? "Unlocked!" : ""}
				</p>
			</div>
		</MasonryCard>
	</div>
</section>
