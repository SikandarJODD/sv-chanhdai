<script lang="ts">
	import { StatusButton } from "$chan/status-button";

	function save() {
		return new Promise<void>((resolve) => setTimeout(resolve, 1000));
	}
</script>

<!-- Use when a button should manage its own loading and success states. -->
<StatusButton onclick={save}>Save changes</StatusButton>
