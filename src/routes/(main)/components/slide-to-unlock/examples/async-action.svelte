<script lang="ts">
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import LoaderCircleIcon from "@lucide/svelte/icons/loader-circle";
	import ShoppingBagIcon from "@lucide/svelte/icons/shopping-bag";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let status = $state<"idle" | "processing" | "complete">("idle");

	async function confirmOrder() {
		status = "processing";
		await new Promise<void>((resolve) => setTimeout(resolve, 1200));
		status = "complete";
	}
</script>

<div class="flex min-h-24 items-center justify-center">
	{#if status === "processing"}
		<div class="text-muted-foreground flex items-center gap-2 text-sm" aria-live="polite">
			<LoaderCircleIcon class="size-5 animate-spin" />
			Processing order…
		</div>
	{:else if status === "complete"}
		<div class="flex items-center gap-2 text-sm font-medium text-emerald-600" aria-live="polite">
			<CircleCheckIcon class="size-5" />
			Order confirmed
		</div>
	{:else}
		<SlideToUnlock onUnlock={confirmOrder} class="w-72 rounded-full">
			<SlideToUnlockTrack>
				<SlideToUnlockText class="text-base">
					{#snippet children({ isDragging })}
						{isDragging ? "Release to confirm" : "Slide to confirm order"}
					{/snippet}
				</SlideToUnlockText>
				<SlideToUnlockHandle class="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
					{#snippet children()}
						<ShoppingBagIcon class="size-5" />
					{/snippet}
				</SlideToUnlockHandle>
			</SlideToUnlockTrack>
		</SlideToUnlock>
	{/if}
</div>
