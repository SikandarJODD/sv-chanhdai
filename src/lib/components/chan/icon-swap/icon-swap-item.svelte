<script lang="ts" module>
	import { motion as motionNamespace } from "motion-sv";
	import type { ComponentProps, Snippet } from "svelte";

	type MotionElement =
		typeof motionNamespace.div | typeof motionNamespace.span;

	export type IconSwapItemProps = Omit<
		ComponentProps<typeof motionNamespace.div>,
		"children"
	> & {
		children: Snippet;
		as?: MotionElement;
	};
</script>

<script lang="ts">
	import { motion } from "motion-sv";

	let {
		children,
		as = motion.div,
		...restProps
	}: IconSwapItemProps = $props();

	const Component = $derived(as as typeof motion.div);
</script>

<!-- {...restProps} -->
<Component
	initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
	animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
	exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
	transition={{ type: "spring", duration: 0.3, bounce: 0 }}
>
	{@render children()}
</Component>
