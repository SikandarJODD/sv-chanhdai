<script lang="ts">
	import FaviconLink from "$lib/components/docs/base/main/favicon-link.svelte";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const shouldReduceMotion = useReducedMotion();

	function springTransition(delay: number): Transition {
		if (shouldReduceMotion.current) return { duration: 0 };

		return {
			type: "spring",
			visualDuration: 0.28,
			bounce: 0,
			delay,
			opacity: {
				type: "tween",
				duration: 0.18,
				ease: "easeOut",
				delay
			}
		};
	}
</script>

<BentoTile
	class={[
		"relative min-h-80 border-primary/20 bg-muted/30 p-6 sm:p-8",
		className
	]}
>
	<div class="flex h-full w-full items-center justify-center text-center">
		<div class="flex max-w-2xl flex-col items-center">
			<motion.h1
				class="font-baloo-bhai-2 text-4xl leading-none font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.5rem]"
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, y: 8, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={springTransition(0.02)}
			>
				Svelte Chan Components
			</motion.h1>

			<motion.p
				class="mt-4 font-jetbrains text-base leading-6 font-medium text-ink/80 sm:text-lg"
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, y: 6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={springTransition(0.075)}
			>
				Interactive &amp; Open Source (MIT)
			</motion.p>
		</div>

		<div
			class="absolute inset-x-2 bottom-2 flex items-center justify-between gap-4 font-mono text-xs"
		>
			<motion.span
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, x: -8 }}
				animate={{ opacity: 1, x: 0 }}
				transition={springTransition(0.13)}
			>
				<FaviconLink
					href="https://chanhdai.com"
					faviconSrc="https://assets.chanhdai.com/images/favicon.ico"
					target="_blank"
					rel="noreferrer"
					class="mx-0 rounded-full bg-muted px-2.5 py-1.5 text-foreground"
					imageClass="rounded-full"
				>
					Chánh Đại
				</FaviconLink>
			</motion.span>

			<motion.span
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, x: 8 }}
				animate={{ opacity: 1, x: 0 }}
				transition={springTransition(0.13)}
			>
				<FaviconLink
					href="https://bhide.dev"
					target="_blank"
					rel="noreferrer"
					class="mx-0 rounded-full bg-muted px-2.5 py-1.5 text-foreground"
					imageClass="rounded-full"
				>
					Bhide Svelte
				</FaviconLink>
			</motion.span>
		</div>
	</div>
</BentoTile>
