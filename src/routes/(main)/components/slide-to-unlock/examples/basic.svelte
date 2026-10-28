<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "#lib/components/chan/slide-to-unlock/index.js";

	let unlocked = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
	<SlideToUnlock onUnlock={() => (unlocked = true)} class="w-67 rounded-full">
		<SlideToUnlockTrack>
			<SlideToUnlockText>
				Slide to unlock
			</SlideToUnlockText>
			<SlideToUnlockHandle class="rounded-full" />
		</SlideToUnlockTrack>
	</SlideToUnlock>

	<p class="text-sm text-muted-foreground" aria-live="polite">
		{unlocked ? "Unlocked" : "Waiting for the gesture"}
	</p>
</div>
