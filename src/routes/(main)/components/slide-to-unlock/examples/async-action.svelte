<script lang="ts">
	import { navigating } from "$app/state";
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import LoaderCircleIcon from "@lucide/svelte/icons/loader-circle";
	import ShoppingBagIcon from "@lucide/svelte/icons/shopping-bag";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
	import type { Transition, Variants } from "motion-sv";
	import {
		SlideToUnlock,
		SlideToUnlockHandle,
		SlideToUnlockText,
		SlideToUnlockTrack
	} from "$chan/slide-to-unlock";

	let status = $state<"idle" | "processing" | "complete">("idle");
	const shouldReduceMotion = useReducedMotion();
	// Skip exits during navigation because motion-sv's global outro can delay route removal.
	const exitVariant = $derived(navigating.type === null ? "exit" : undefined);
	const swapTransition: Transition = {
		type: "spring",
		duration: 0.4,
		bounce: 0.15
	};
	const swapVariants: Variants = {
		initial: { opacity: 0, scale: 0.94, y: 8, filter: "blur(5px)" },
		animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
		exit: { opacity: 0, scale: 0.96, y: -8, filter: "blur(4px)" }
	};
	const successVariants: Variants = {
		...swapVariants,
		animate: {
			...swapVariants.animate,
			scale: [0.94, 1.05, 1]
		}
	};
	const reducedMotionVariants: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	};

	async function confirmOrder() {
		status = "processing";
		await new Promise<void>((resolve) => setTimeout(resolve, 1200));
		status = "complete";
	}
</script>

<div class="grid min-h-24 place-items-center">
	<AnimatePresence mode="wait" initial={false}>
		{#if status === "processing"}
			<motion.div
				class="text-muted-foreground flex items-center gap-2 text-sm"
				role="status"
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: swapVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				transition={swapTransition}
			>
				<LoaderCircleIcon class="size-5 animate-spin" />
				Processing order…
			</motion.div>
		{:else if status === "complete"}
			<motion.div
				class="flex items-center gap-2 text-sm font-medium text-emerald-600"
				role="status"
				variants={shouldReduceMotion.current
					? reducedMotionVariants
					: successVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				transition={swapTransition}
			>
				<CircleCheckIcon class="size-5" />
				Order confirmed
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
					onUnlock={confirmOrder}
					class="w-72 rounded-full"
				>
					<SlideToUnlockTrack>
						<SlideToUnlockText class="text-base">
							{#snippet children({ isDragging })}
								{isDragging
									? "Release to confirm"
									: "Slide to confirm order"}
							{/snippet}
						</SlideToUnlockText>
						<SlideToUnlockHandle
							class="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
						>
							{#snippet children()}
								<ShoppingBagIcon class="size-5" />
							{/snippet}
						</SlideToUnlockHandle>
					</SlideToUnlockTrack>
				</SlideToUnlock>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
