<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";
	import { SuccessIcon } from "$chan/status-button";
	import { gsap } from "gsap";
	import { watch } from "runed";
	import type { Attachment } from "svelte/attachments";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
	let unlocked = $state(false);
	let slideToUnlock = $state<{ reset: () => void }>();

	const animateSuccess: Attachment<HTMLElement> = (node) => {
		const media = gsap.matchMedia();

		media.add("(prefers-reduced-motion: no-preference)", () => {
			gsap.fromTo(
				node,
				{ opacity: 0, y: 8 },
				{
					opacity: 1,
					y: 0,
					duration: 0.24,
					ease: "power2.out",
					clearProps: "transform,opacity"
				}
			);
		});

		return () => media.revert();
	};

	watch(
		() => unlocked,
		(value) => {
			if (!value) return;

			const timeout = window.setTimeout(() => {
				slideToUnlock?.reset();
				unlocked = false;
			}, 2000);

			return () => window.clearTimeout(timeout);
		}
	);
</script>

<BentoTile class={className}>
	<div class="flex w-full flex-col items-center gap-3">
		<SlideToUnlock
			bind:this={slideToUnlock}
			onUnlock={() => (unlocked = true)}
			class="w-full max-w-sm rounded-full"
		>
			<SlideToUnlockTrack>
				<SlideToUnlockText class="text-base">
					{#snippet children({ isDragging })}
						<span>{isDragging ? "Release…" : "Slide to unlock"}</span>
					{/snippet}
				</SlideToUnlockText>
				<SlideToUnlockHandle class="rounded-full" />
			</SlideToUnlockTrack>
		</SlideToUnlock>

		<div class="flex h-5 items-center" aria-live="polite">
			{#if unlocked}
				<p
					{@attach animateSuccess}
					class="flex items-center gap-1.5 text-sm font-medium text-emerald-600"
				>
					<SuccessIcon />
					Unlocked
				</p>
			{/if}
		</div>
	</div>
</BentoTile>
