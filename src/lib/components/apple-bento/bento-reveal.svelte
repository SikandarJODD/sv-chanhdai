<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type BentoRevealProps = {
		children: Snippet;
		class?: string;
		x?: number;
		y?: number;
		delay?: number;
		center?: boolean;
	};
</script>

<script lang="ts">
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";

	let {
		children,
		class: className,
		x = 0,
		y = 0,
		delay = 0,
		center = false
	}: BentoRevealProps = $props();

	const shouldReduceMotion = useReducedMotion();
	const transition = $derived<Transition>(
		shouldReduceMotion.current
			? { duration: 0 }
			: {
					type: "spring",
					visualDuration: center ? 0.32 : 0.4,
					bounce: center ? 0 : 0.06,
					delay,
					opacity: {
						type: "tween",
						duration: 0.18,
						ease: "easeOut",
						delay
					}
				}
	);
</script>

<motion.div
	class={["min-w-0", className]}
	initial={shouldReduceMotion.current
		? false
		: {
				opacity: 0,
				x,
				y,
				scale: center ? 0.97 : 0.985
			}}
	animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
	{transition}
>
	{@render children()}
</motion.div>
