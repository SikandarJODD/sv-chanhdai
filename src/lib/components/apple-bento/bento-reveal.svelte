<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type BentoRevealProps = {
		children: Snippet;
		class?: string;
		x?: number;
		y?: number;
		delay?: number;
		visible?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";

	let {
		children,
		class: className,
		x = 0,
		y = 0,
		delay = 0,
		visible = true
	}: BentoRevealProps = $props();

	const shouldReduceMotion = useReducedMotion();
	const hiddenState = $derived({ opacity: 0, x, y, scale: 0.985 });
	const transition = $derived<Transition>(
		shouldReduceMotion.current
			? { duration: 0 }
			: visible
				? {
						type: "spring",
						visualDuration: 0.4,
						bounce: 0.06,
						delay,
						opacity: {
							type: "tween",
							duration: 0.18,
							ease: "easeOut",
							delay
						}
					}
				: {
						type: "tween",
						duration: 0.18,
						ease: "easeIn"
					}
	);
</script>

<motion.div
	class={cn("min-w-0", !visible && "pointer-events-none", className)}
	aria-hidden={!visible}
	inert={!visible}
	initial={shouldReduceMotion.current ? false : hiddenState}
	animate={visible ? { opacity: 1, x: 0, y: 0, scale: 1 } : hiddenState}
	{transition}
>
	{@render children()}
</motion.div>
