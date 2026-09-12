<script lang="ts">
	import { navigating } from "$app/state";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
	import type { Transition, Variants } from "motion-sv";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let deleted = $state(false);

	const shouldReduceMotion = useReducedMotion();
	// Skip exits during navigation because motion-sv's global outro can delay route removal.
	const exitVariant = $derived(navigating.type === null ? "exit" : undefined);
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

<div class="grid min-h-28 place-items-center">
	<AnimatePresence mode="wait" initial={false}>
		{#if deleted}
			<motion.div
				class="flex flex-col items-center gap-3"
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: swapVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				transition={swapTransition}
			>
				<p class="text-sm font-medium" role="status">
					Project deleted.
				</p>
				<button
					type="button"
					class="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
					onclick={() => (deleted = false)}
				>
					Restore example
				</button>
			</motion.div>
		{:else}
			<motion.div
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: swapVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				transition={swapTransition}
			>
				<SlideToUnlock
					handleWidth={40}
					onUnlock={() => (deleted = true)}
					class="w-72 rounded-full bg-red-500/10"
				>
					<SlideToUnlockTrack>
						<SlideToUnlockText
							class="text-base text-red-700 dark:text-red-300"
						>
							{#snippet children({ isDragging })}
								{isDragging
									? "Release to delete"
									: "Slide to delete project"}
							{/snippet}
						</SlideToUnlockText>
						<SlideToUnlockHandle
							class="size-10 rounded-full bg-red-600 text-white"
						>
							{#snippet children()}
								<Trash2Icon class="size-5" />
							{/snippet}
						</SlideToUnlockHandle>
					</SlideToUnlockTrack>
				</SlideToUnlock>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
