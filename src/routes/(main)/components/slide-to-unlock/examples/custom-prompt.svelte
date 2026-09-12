<script lang="ts">
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let checkedIn = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
	<SlideToUnlock
		onUnlock={() => (checkedIn = true)}
		class="w-72 rounded-full bg-blue-500/10"
	>
		<SlideToUnlockTrack>
			<SlideToUnlockText
				class="text-base text-blue-700 dark:text-blue-300"
			>
				{#snippet children({ isDragging })}
					{isDragging ? "Release to check in" : "Slide to check in"}
				{/snippet}
			</SlideToUnlockText>
			<SlideToUnlockHandle class="rounded-full bg-blue-600 text-white" />
		</SlideToUnlockTrack>
	</SlideToUnlock>

	{#if checkedIn}
		<p class="text-sm font-medium text-blue-600" aria-live="polite">
			You’re checked in.
		</p>
	{/if}
</div>
