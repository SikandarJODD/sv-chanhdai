<script lang="ts">
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let launched = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
	<SlideToUnlock
		handleWidth={48}
		onUnlock={() => (launched = true)}
		class="w-72 rounded-full bg-violet-500/10"
	>
		<SlideToUnlockTrack>
			<SlideToUnlockText class="text-base text-violet-700 dark:text-violet-300">
				{#snippet children({ isDragging })}
					{isDragging ? "Release to launch" : "Slide to launch"}
				{/snippet}
			</SlideToUnlockText>
			<SlideToUnlockHandle class="rounded-full bg-violet-600 text-white">
				{#snippet children()}
					<RocketIcon class="size-5" />
				{/snippet}
			</SlideToUnlockHandle>
		</SlideToUnlockTrack>
	</SlideToUnlock>

	<p class="text-muted-foreground text-sm" aria-live="polite">
		{launched ? "Launch confirmed." : "Custom handle with a 48px drag width"}
	</p>
</div>
