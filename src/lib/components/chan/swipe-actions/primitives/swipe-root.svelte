<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { setSwipeRootContext } from "./swipe-actions-context.svelte";
	import { SwipeRootState } from "./swipe-actions-state.svelte";
	import type { SwipeRootProps } from "./swipe-actions-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: SwipeRootProps = $props();

	setSwipeRootContext(new SwipeRootState());

	function attachRoot(element: HTMLDivElement) {
		ref = element;
		return () => {
			if (ref === element) ref = null;
		};
	}
</script>

<div
	{@attach attachRoot}
	data-slot="swipe-root"
	class={cn(className)}
	{...restProps}
>
	{@render children()}
</div>
