<script lang="ts">
	import { mode } from "mode-watcher";
	import { motion, useReducedMotion } from "motion-sv";
	import SpinningCircularText from "$chan/spinning-circular-text/spinning-circular-text.svelte";

	const TEXT = "Built with care by ncdai • ";
	const DURATION = 4;
	const shouldReduceMotion = useReducedMotion();
</script>

<SpinningCircularText
	text={TEXT}
	charSpacing={1.2}
	class="size-[round(up,var(--sc-container-size),var(--spacing))] [--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]"
	spinClass="duration-[12s] motion-reduce:animate-none"
>
	{#snippet renderChar({ char, index })}
		{#if shouldReduceMotion.current}
			<span class="text-(--shimmering-color)">{char}</span>
		{:else}
			{#key mode.current}
				<motion.span
					animate={{
						color: [
							"var(--color)",
							"var(--shimmering-color)",
							"var(--color)"
						]
					}}
					transition={{
						duration: DURATION,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: TEXT.length * 0.03,
						delay: (index * DURATION) / TEXT.length,
						ease: "easeInOut"
					}}
				>
					{char}
				</motion.span>
			{/key}
		{/if}
	{/snippet}
</SpinningCircularText>
