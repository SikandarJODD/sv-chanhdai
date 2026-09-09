<script lang="ts">
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let deleted = $state(false);
</script>

<div class="flex min-h-28 flex-col items-center justify-center gap-3">
	{#if deleted}
		<p class="text-sm font-medium" aria-live="polite">Project deleted.</p>
		<button
			type="button"
			class="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
			onclick={() => (deleted = false)}
		>
			Restore example
		</button>
	{:else}
		<SlideToUnlock
			onUnlock={() => (deleted = true)}
			class="w-72 rounded-full bg-red-500/10"
		>
			<SlideToUnlockTrack>
				<SlideToUnlockText class="text-base text-red-700 dark:text-red-300">
					{#snippet children({ isDragging })}
						{isDragging ? "Release to delete" : "Slide to delete project"}
					{/snippet}
				</SlideToUnlockText>
				<SlideToUnlockHandle class="rounded-full bg-red-600 text-white">
					{#snippet children()}
						<Trash2Icon class="size-5" />
					{/snippet}
				</SlideToUnlockHandle>
			</SlideToUnlockTrack>
		</SlideToUnlock>
	{/if}
</div>
