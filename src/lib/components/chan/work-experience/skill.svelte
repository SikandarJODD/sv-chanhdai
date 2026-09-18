<script lang="ts">
	import { cn } from "$lib/utils";
	import type { SkillProps } from "./work-experience-types";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SkillProps = $props();
</script>

<span
	bind:this={ref}
	class={cn(
		"inline-flex items-center rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
		className
	)}
	{...restProps}
>
	{@render children()}
</span>
