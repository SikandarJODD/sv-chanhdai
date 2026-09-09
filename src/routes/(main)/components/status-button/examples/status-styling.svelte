<script lang="ts">
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import { StatusButton } from "$chan/status-button";

	function pay() {
		return new Promise<void>((resolve) => setTimeout(resolve, 1200));
	}
</script>

<!-- Use data-status variants when each state needs distinct visual emphasis. -->
<StatusButton
	onclick={pay}
	class="data-[status=loading]:bg-amber-500 data-[status=success]:bg-emerald-600 data-[status=success]:text-white"
>
	{#snippet loadingLabel()}
		Authorizing
	{/snippet}
	{#snippet successLabel()}
		Payment captured
	{/snippet}
	<CreditCardIcon data-icon="inline-start" />
	Pay $49
</StatusButton>
