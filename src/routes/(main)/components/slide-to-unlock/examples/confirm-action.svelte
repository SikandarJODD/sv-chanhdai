<script lang="ts">
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import SendIcon from "@lucide/svelte/icons/send";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
	import type { Transition, Variants } from "motion-sv";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let published = $state(false);

	const shouldReduceMotion = useReducedMotion();
	const swapTransition: Transition = {
		type: "spring",
		duration: 0.45,
		bounce: 0.2
	};
	const swapVariants: Variants = {
		initial: { opacity: 0, scale: 0.92, y: 8, filter: "blur(6px)" },
		animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
		exit: { opacity: 0, scale: 0.96, y: -8, filter: "blur(4px)" }
	};
	const reducedMotionVariants: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	};
</script>

<div class="grid min-h-24 place-items-center">
	<AnimatePresence mode="wait" initial={false}>
		{#if published}
			<motion.div
				class="flex items-center gap-2 text-sm font-medium text-emerald-600"
				role="status"
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: swapVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={swapTransition}
			>
				<CircleCheckIcon class="size-5" />
				Post published
			</motion.div>
		{:else}
			<motion.div
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: swapVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={swapTransition}
			>
				<SlideToUnlock
					onUnlock={() => (published = true)}
					class="w-72 rounded-full bg-emerald-500/10"
				>
					<SlideToUnlockTrack>
						<SlideToUnlockText class="text-base text-emerald-700 dark:text-emerald-300">
							{#snippet children({ isDragging })}
								{isDragging ? "Release to publish" : "Slide to publish"}
							{/snippet}
						</SlideToUnlockText>
						<SlideToUnlockHandle class="rounded-full bg-emerald-600 text-white">
							{#snippet children()}
								<SendIcon class="size-5" />
							{/snippet}
						</SlideToUnlockHandle>
					</SlideToUnlockTrack>
				</SlideToUnlock>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
