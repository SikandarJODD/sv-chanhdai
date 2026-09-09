<script lang="ts">
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import SendIcon from "@lucide/svelte/icons/send";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let published = $state(false);
</script>

<div class="flex min-h-24 items-center justify-center">
	{#if published}
		<div class="flex items-center gap-2 text-sm font-medium text-emerald-600" aria-live="polite">
			<CircleCheckIcon class="size-5" />
			Post published
		</div>
	{:else}
		<SlideToUnlock
			onUnlock={() => (published = true)}
			class="w-72 rounded-full bg-emerald-500/10"
		>
			<SlideToUnlockTrack>
				<SlideToUnlockText class="text-base text-emerald-700 dark:text-emerald-300">
					{#snippet children({ isDragging })}
						{isDragging ? "Release to publish" : "Slide to publish"}
					{/snippet}
				</SlideToUnlockText>
				<SlideToUnlockHandle class="rounded-full bg-emerald-600 text-white">
					{#snippet children()}
						<SendIcon class="size-5" />
					{/snippet}
				</SlideToUnlockHandle>
			</SlideToUnlockTrack>
		</SlideToUnlock>
	{/if}
</div>
