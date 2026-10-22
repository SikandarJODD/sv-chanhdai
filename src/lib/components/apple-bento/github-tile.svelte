<script lang="ts">
	import { GitHubContributions } from "$chan/github-contributions";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
</script>

<BentoTile class={className}>
	<div class="w-full min-w-0 overflow-hidden">
		<GitHubContributions username="ncdai" />
	</div>
</BentoTile>
