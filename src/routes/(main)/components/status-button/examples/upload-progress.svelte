<script lang="ts">
	import CloudUploadIcon from "@lucide/svelte/icons/cloud-upload";
	import { StatusButton } from "$chan/status-button";

	let progress = $state(0);

	async function upload() {
		progress = 0;

		for (const nextProgress of [20, 40, 60, 80, 100]) {
			await new Promise<void>((resolve) => setTimeout(resolve, 250));
			progress = nextProgress;
		}
	}
</script>

<!-- Use a reactive loading label for progress or multi-step operations. -->
<StatusButton onclick={upload}>
	{#snippet loadingLabel()}
		Uploading {progress}%
	{/snippet}
	{#snippet successLabel()}
		Uploaded
	{/snippet}
	<CloudUploadIcon data-icon="inline-start" />
	Upload file
</StatusButton>
