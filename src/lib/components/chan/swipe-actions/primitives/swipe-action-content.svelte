<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { untrack } from "svelte";
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
		const unregister = untrack(() => {
			ref = element;
			return actions.registerContent(id, element);
		});

		return () => {
			untrack(() => {
				unregister();
				if (ref === element) ref = null;
			});
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
