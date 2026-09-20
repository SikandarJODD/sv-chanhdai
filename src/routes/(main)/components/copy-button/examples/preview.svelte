<script lang="ts">
	import { CopyButton } from "$chan/copy-button";
</script>

<div class="flex items-center gap-2">
	<CopyButton
		class="relative"
		variant="secondary"
		size="icon"
		text="Text 1"
	/>

	<CopyButton
		class="relative gap-1.5 pr-2.5 pl-2"
		variant="outline"
		size="sm"
		text="Text 2"
	>
		Copy
	</CopyButton>
</div>
