<script lang="ts">
	import { StatusButton } from "$chan/status-button";

	let attempts = $state(0);
	let errorMessage = $state("Failed to save · Retry");

	async function save() {
		await new Promise<void>((resolve) => setTimeout(resolve, 1000));
		attempts += 1;

		if (attempts === 1) {
			throw new Error("Retry");
		}
	}

	function handleError(error: unknown) {
		errorMessage =
			error instanceof Error ? error.message : "Could not save · Retry";
	}
</script>

<!-- Use when a rejected action should offer clear failure feedback and retry. -->
<StatusButton failedDuration={3500} onError={handleError} onclick={save}>
	{#snippet loadingLabel()}
		Saving
	{/snippet}
	{#snippet failedLabel()}
		{errorMessage}
	{/snippet}
	{#snippet successLabel()}
		Draft saved
	{/snippet}
	Save draft
</StatusButton>
