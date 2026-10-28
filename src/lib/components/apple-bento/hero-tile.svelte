<script lang="ts">
	import FaviconLink from "#lib/components/docs/base/main/favicon-link.svelte";
	import { gsap } from "gsap";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Transition } from "motion-sv";
	import type { Attachment } from "svelte/attachments";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const shouldReduceMotion = useReducedMotion();
	const titleWords = ["Svelte", "Chan", "Components"];

	const titleAnimation: Attachment<HTMLHeadingElement> = (node) => {
		const media = gsap.matchMedia();

		media.add("(prefers-reduced-motion: no-preference)", () => {
			gsap.fromTo(
				node.querySelectorAll("[data-title-word]"),
				{ yPercent: 110 },
				{
					yPercent: 0,
					duration: 0.36,
					stagger: 0.05,
					ease: "power3.out",
					delay: 0.02,
					clearProps: "transform"
				}
			);
		});

		return () => media.revert();
	};

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
		"relative min-h-80 border-primary/20 p-6 transition-all duration-150 hover:border-primary/40! sm:p-8",
		className
	]}
>
	<!-- <div
		class="absolute top-0 right-5 h-px w-1/2 bg-linear-to-l from-transparent via-primary/30 via-10% to-transparent"
	></div> -->

	<div class="flex h-full w-full items-center justify-center text-center">
		<div class="flex max-w-2xl flex-col items-center">
			<h1
				{@attach titleAnimation}
				aria-label="Svelte Chan Components"
				class="text-4xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl lg:text-5xl"
			>
				{#each titleWords as word (word)}
					<span
						aria-hidden="true"
						class="mr-[0.22em] inline-flex overflow-hidden pb-[0.08em] align-bottom last:mr-0"
					>
						<span
							data-title-word
							class="inline-block bg-linear-to-b from-primary via-primary/90 to-primary/60 bg-clip-text text-transparent will-change-transform"
						>
							{word}
						</span>
					</span>
				{/each}
			</h1>

			<motion.p
				class="mt-4 font-jetbrains text-base leading-6 font-medium tracking-tighter text-muted-foreground sm:text-lg"
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, y: 6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={springTransition(0.175)}
			>
				Free &amp; Open Source (MIT)
			</motion.p>
		</div>

		<div
			class="absolute inset-x-2 bottom-2 flex items-center justify-between gap-0 font-mono text-xs"
		>
			<motion.span
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, y: 6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={springTransition(0.26)}
			>
				<FaviconLink
					href="https://chanhdai.com"
					faviconSrc="https://assets.chanhdai.com/images/favicon.ico"
					target="_blank"
					rel="noreferrer"
					class="mx-0 rounded-full bg-muted py-1.5 pr-2.5 pl-1.5 text-foreground"
					imageClass="rounded-full"
				>
					Chánh Đại
				</FaviconLink>
			</motion.span>

			<motion.span
				initial={shouldReduceMotion.current
					? false
					: { opacity: 0, y: 6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={springTransition(0.305)}
			>
				<FaviconLink
					href="https://bhide.dev"
					target="_blank"
					rel="noreferrer"
					class="mx-0 rounded-full bg-muted py-1.5 pr-2.5 pl-1.5 text-foreground"
					imageClass="rounded-full"
				>
					Bhide Svelte
				</FaviconLink>
			</motion.span>
		</div>
	</div>
</BentoTile>
