<script lang="ts">
	import ExperiencePositionItem from "./experience-position-item.svelte";
	import type { ExperienceItemProps } from "./work-experience-types";

	let { experience }: ExperienceItemProps = $props();
</script>

<div class="space-y-4 py-4">
	<div class="not-prose flex items-center gap-3">
		<div class="flex size-6 shrink-0 items-center justify-center">
			{#if experience.companyLogo}
				<img
					src={experience.companyLogo}
					alt={experience.companyName}
					class="size-6 rounded-full"
					aria-hidden="true"
				/>
			{:else}
				<span
					class="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"
				></span>
			{/if}
		</div>

		<h3 class="text-lg leading-snug font-semibold">
			{#if experience.companyWebsite}
				<a
					class="link"
					href={experience.companyWebsite}
					target="_blank"
					rel="noopener noreferrer"
				>
					{experience.companyName}
				</a>
			{:else}
				{experience.companyName}
			{/if}
		</h3>

		{#if experience.isCurrentEmployer}
			<span
				class="relative flex items-center justify-center"
				aria-label="Current Employer"
			>
				<span
					class="absolute inline-flex size-3 animate-ping rounded-full bg-sky-500 opacity-50"
				></span>
				<span
					class="relative inline-flex size-2 rounded-full bg-sky-500"
				></span>
			</span>
		{/if}
	</div>

	<div
		class="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border"
	>
		{#each experience.positions as position (position.id)}
			<ExperiencePositionItem {position} />
		{/each}
	</div>
</div>
