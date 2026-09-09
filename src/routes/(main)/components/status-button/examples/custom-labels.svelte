<script lang="ts">
	import { StatusButton } from "$chan/status-button";

	function publish() {
		return new Promise<void>((resolve) => setTimeout(resolve, 1200));
	}
</script>

<!-- Use when loading and success need visible, action-specific copy. -->
<StatusButton successDuration={2500} onclick={publish}>
	{#snippet loadingLabel()}
		Publishing
	{/snippet}
	{#snippet successLabel()}
		Published
	{/snippet}
	Publish article
</StatusButton>
