<script lang="ts" module>
	import { motion as motionNamespace } from "motion-sv";
	import type { ComponentProps } from "svelte";

	export type ChevronsUpDownIconHandle = {
		startAnimation: () => void;
		stopAnimation: () => void;
	};

	export type ChevronsUpDownIconProps = ComponentProps<
		typeof motionNamespace.svg
	> & {
		/** Duration of the path morph in seconds. @default 0.3 */
		duration?: number;
		ref?: SVGSVGElement | null;
	};
</script>

<script lang="ts">
	import { motion, useAnimationControls } from "motion-sv";
	import type { Variants } from "motion-sv";

	let {
		ref = $bindable(null),
		duration = 0.3,
		...restProps
	}: ChevronsUpDownIconProps = $props();

	const controls = useAnimationControls();

	const lowerChevronVariants: Variants = {
		normal: { d: "M7 15L12 20L17 15" },
		animate: { d: "M7 20L12 15L17 20" }
	};

	const upperChevronVariants: Variants = {
		normal: { d: "M7 9L12 4L17 9" },
		animate: { d: "M7 4L12 9L17 4" }
	};

	export function startAnimation(): void {
		void controls.start("animate");
	}

	export function stopAnimation(): void {
		void controls.start("normal");
	}
</script>

<!-- 	xmlns="http://www.w3.org/2000/svg", aria-hidden="true" -->
<motion.svg
	bind:ref
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	{...restProps}
>
	<motion.path
		d="M7 15L12 20L17 15"
		variants={lowerChevronVariants}
		initial="normal"
		animate={controls}
		transition={{ duration }}
	/>
	<motion.path
		d="M7 9L12 4L17 9"
		variants={upperChevronVariants}
		initial="normal"
		animate={controls}
		transition={{ duration }}
	/>
</motion.svg>
