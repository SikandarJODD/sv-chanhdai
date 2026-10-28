<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { AppleCarouselControlsProps } from "./apple-carousel-types";

	let {
		ref = $bindable(null),
		children,
		size = "default",
		class: className,
		...restProps
	}: AppleCarouselControlsProps = $props();

	function attachRef(node: HTMLDivElement): VoidFunction {
		ref = node;
		return () => {
			if (ref === node) ref = null;
		};
	}
</script>

<div
	{@attach attachRef}
	data-slot="apple-carousel-controls"
	data-size={size}
	class={cn(
		"group/apple-carousel-controls flex items-center justify-center gap-3 pt-6 data-[size=sm]:gap-2 data-[size=sm]:pt-4",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
