<script lang="ts">
	import { StatusButton } from "$chan/status-button";
	import Annotation from "$ui/annotation/annotation.svelte";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	function save() {
		return new Promise<void>((resolve) => window.setTimeout(resolve, 900));
	}
</script>

<BentoTile class={className}>
	<Annotation
		note="Click!"
		noMark
		direction="s"
		customColor="var(--foreground)"
		targetGap="0.6rem"
		labelGap="0.5rem"
	>
		<StatusButton onclick={save} class="rounded-full px-4">
			Save changes
		</StatusButton>
	</Annotation>
</BentoTile>
