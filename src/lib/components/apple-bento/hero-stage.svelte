<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type HeroStageProps = {
		children: Snippet;
		class?: string;
		settled?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";
	import { MediaQuery } from "svelte/reactivity";

	let {
		children,
		class: className,
		settled = false
	}: HeroStageProps = $props();

	const shouldReduceMotion = useReducedMotion();
	const medium = new MediaQuery("min-width: 768px");
	const introScale = $derived(medium.current ? 1.28 : 1.08);
	const transition = $derived<Transition>(
		shouldReduceMotion.current
			? { duration: 0 }
			: {
					type: "spring",
					visualDuration: 0.45,
					bounce: 0.04
				}
	);
</script>

<motion.div
	class={cn("relative z-10 min-w-0 transform-gpu", className)}
	initial={false}
	animate={{ scale: settled ? 1 : introScale }}
	{transition}
>
	{@render children()}
</motion.div>
