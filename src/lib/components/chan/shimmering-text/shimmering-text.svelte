<script lang="ts" module>
	import { motion as motionNamespace } from "motion-sv";
	import type { ComponentProps } from "svelte";

	export type ShimmeringTextProps = Omit<
		ComponentProps<typeof motionNamespace.span>,
		"children"
	> & {
		/** The text to render with the shimmering effect. */
		text: string;
		/** Duration in seconds for one shimmer cycle. @default 1 */
		duration?: number;
		/** Whether the shimmer animation is paused. @default false */
		isStopped?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion } from "motion-sv";
	import type { Variants } from "motion-sv";

	let {
		text,
		duration = 1,
		isStopped = false,
		class: className,
		...restProps
	}: ShimmeringTextProps = $props();

	const characters = $derived(text.split(""));
	const characterVariants = $derived.by(() =>
		characters.map((_, index): Variants => ({
			running: {
				color: [
					"var(--color)",
					"var(--shimmering-color)",
					"var(--color)"
				],
				transition: {
					duration,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: text.length * 0.05,
					delay: (index * duration) / text.length,
					ease: "easeInOut"
				}
			},
			stopped: {
				color: "var(--color)",
				transition: {
					duration: duration * 0.5,
					ease: "easeOut"
				}
			}
		}))
	);
</script>

<motion.span
	class={cn(
		"inline-block select-none",
		"[--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]",
		className
	)}
>
	{#each characters as character, index (index)}
		<motion.span
			class="inline-block whitespace-pre"
			initial="stopped"
			animate={isStopped ? "stopped" : "running"}
			variants={characterVariants[index]}
			aria-hidden="true"
		>
			{character}
		</motion.span>
	{/each}
	<span class="sr-only">{text}</span>
</motion.span>
