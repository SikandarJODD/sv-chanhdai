<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { SwipeContent as Content } from "./primitives";
	import type { SwipeContentProps } from "./primitives";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: SwipeContentProps = $props();
</script>

<Content
	bind:ref
	class={cn("bg-background data-dragging:cursor-grabbing", className)}
	{...restProps}
>
	{@render children()}
</Content>
