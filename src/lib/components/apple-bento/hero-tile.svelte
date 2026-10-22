<script lang="ts">
	import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();
</script>

<BentoTile class={["min-h-80", className]}>
	<AppleHelloEffectEnglish class="h-auto w-full max-w-lg" />
</BentoTile>
