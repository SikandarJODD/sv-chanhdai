<script lang="ts">
	import { cn } from "$lib/utils";
	import ExperienceItem from "./experience-item.svelte";
	import type { WorkExperienceProps } from "./work-experience-types";

	let {
		ref = $bindable(null),
		class: className,
		experiences,
		...restProps
	}: WorkExperienceProps = $props();
</script>

<div
	bind:this={ref}
	class={cn("bg-background px-4 text-foreground", className)}
	{...restProps}
>
	{#each experiences as experience (experience.id)}
		<ExperienceItem {experience} />
	{/each}
</div>
