<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		SwipeAction as Action,
		SwipeActionContent as ActionContent
	} from "./primitives";
	import type { SwipeActionProps } from "./primitives";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: SwipeActionProps = $props();
</script>

<Action
	bind:ref
	class={cn(
		"bg-secondary text-xs font-medium whitespace-nowrap text-secondary-foreground select-none",
		"focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground",
		"data-armed:brightness-90 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		className
	)}
	{...restProps}
>
	<ActionContent
		class="min-w-20 flex-col items-center justify-center gap-1.5 px-4"
	>
		{@render children()}
	</ActionContent>
</Action>
