<script lang="ts">
	import {
		AppleHelloEffectEnglish,
		AppleHelloEffectHindi,
		AppleHelloEffectSpanish,
		AppleHelloEffectVietnamese
	} from "$chan/apple-hello-effect";
	import { AnimatePresence } from "motion-sv";

	let index = $state(0);

	function handleAnimationEnd() {
		index = (index + 1) % 4;
	}
</script>

<AnimatePresence mode="wait">
	{#if index === 0}
		<AppleHelloEffectEnglish
			durationScale={0.9}
			onAnimationComplete={handleAnimationEnd}
		/>
	{:else if index === 1}
		<AppleHelloEffectHindi
			durationScale={0.8}
			onAnimationComplete={handleAnimationEnd}
		/>
	{:else if index === 2}
		<AppleHelloEffectSpanish
			durationScale={0.8}
			onAnimationComplete={handleAnimationEnd}
		/>
	{:else}
		<AppleHelloEffectVietnamese durationScale={0.8} />
	{/if}
</AnimatePresence>
