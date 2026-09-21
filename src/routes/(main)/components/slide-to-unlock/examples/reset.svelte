<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let slideToUnlock = $state<{ reset: () => void }>();
	let unlocked = $state(false);

	function reset() {
		slideToUnlock?.reset();
		unlocked = false;
	}
</script>

<div class="flex flex-col items-center gap-3">
	<SlideToUnlock
		bind:this={slideToUnlock}
		onUnlock={() => (unlocked = true)}
		class="w-67 rounded-full"
	>
		<SlideToUnlockTrack>
			<SlideToUnlockText>
				{#snippet children()}
					Slide to unlock
				{/snippet}
			</SlideToUnlockText>
			<SlideToUnlockHandle class="rounded-full" />
		</SlideToUnlockTrack>
	</SlideToUnlock>

	<button
		type="button"
		class="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
		disabled={!unlocked}
		onclick={reset}
	>
		Reset
	</button>
</div>
