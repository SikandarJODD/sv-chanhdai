<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";
	import { fade, slide } from "svelte/transition";
	let unlocked = $state(false);
</script>

<div class="flex flex-col items-center justify-start gap-2">
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
	{#if unlocked}
		<p in:slide class="text-sm font-medium">Unlocked 😍!</p>
	{/if}
</div>
