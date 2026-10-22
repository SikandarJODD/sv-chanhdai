<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";
	import { watch } from "runed";
	import { fade, slide } from "svelte/transition";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
	let unlocked = $state(false);
	let slideToUnlock = $state<{ reset: () => void }>();

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
					in:slide={{ duration: 220 }}
					out:fade={{ duration: 120 }}
					class="text-sm font-medium"
				>
					Unlocked!
				</p>
			{/if}
		</div>
	</div>
</BentoTile>
