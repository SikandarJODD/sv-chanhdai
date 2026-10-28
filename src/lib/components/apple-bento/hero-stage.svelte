<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type HeroStageProps = {
		children: Snippet;
		class?: string;
		settled?: boolean;
		visible?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";
	import { MediaQuery } from "svelte/reactivity";

	let {
		children,
		class: className,
		settled = false,
		visible = true
	}: HeroStageProps = $props();

	const shouldReduceMotion = useReducedMotion();
	const medium = new MediaQuery("min-width: 768px");
	const introScale = $derived(medium.current ? 1.28 : 1.08);
	const transition = $derived<Transition>(
		shouldReduceMotion.current
			? { duration: 0 }
			: visible
				? {
						type: "spring",
						visualDuration: 0.45,
						bounce: 0.04,
						opacity: {
							type: "tween",
							duration: 0.2,
							ease: "easeOut"
						}
					}
				: {
						type: "tween",
						duration: 0.16,
						ease: "easeIn"
					}
	);
</script>

<motion.div
	class={cn(
		"relative z-10 min-w-0 transform-gpu",
		!visible && "pointer-events-none",
		className
	)}
	aria-hidden={!visible}
	inert={!visible}
	initial={shouldReduceMotion.current
		? false
		: { opacity: 0, y: 14, scale: introScale * 0.96 }}
	animate={visible
		? { opacity: 1, y: 0, scale: settled ? 1 : introScale }
		: { opacity: 0, y: 14, scale: introScale * 0.96 }}
	{transition}
>
	{@render children()}
</motion.div>
