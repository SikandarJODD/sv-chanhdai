<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		useSwipeActionId,
		useSwipeActions
	} from "./swipe-actions-context.svelte";
	import type { SwipeActionContentProps } from "./swipe-actions-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: SwipeActionContentProps = $props();

	const id = useSwipeActionId();
	const actions = useSwipeActions();

	function attachContent(element: HTMLSpanElement) {
		ref = element;
		const observer = new ResizeObserver(() => {
			actions.measure(id, element.offsetWidth);
		});
		observer.observe(element);

		return () => {
			observer.disconnect();
			actions.forget(id);
			if (ref === element) ref = null;
		};
	}
</script>

<span
	{@attach attachContent}
	data-slot="swipe-action-content"
	class={cn("pointer-events-auto flex", className)}
	{...restProps}
>
	{@render children()}
</span>
