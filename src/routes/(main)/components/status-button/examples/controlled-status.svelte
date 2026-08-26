<script lang="ts">
	import { StatusButton, type ButtonStatus } from "$chan/status-button";

	let status = $state<ButtonStatus>("idle");

	function sync() {
		return new Promise<void>((resolve) => setTimeout(resolve, 1000));
	}
</script>

<!-- Use controlled status when parent state must observe every transition. -->
<StatusButton
	{status}
	onStatusChange={(nextStatus) => (status = nextStatus)}
	onclick={sync}
>
	{#snippet loadingLabel()}
		Syncing
	{/snippet}
	{#snippet successLabel()}
		Synced
	{/snippet}
	Sync account
</StatusButton>
