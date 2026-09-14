<script lang="ts">
	import { cn } from "$lib/utils";
	import type { ProseProps } from "./work-experience-types";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: ProseProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		"prose max-w-none prose-ncdai prose-zinc dark:prose-invert",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
