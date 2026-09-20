<script lang="ts">
	import { Markdown } from "@comark/svelte";
	import BriefcaseBusinessIcon from "@lucide/svelte/icons/briefcase-business";
	import InfinityIcon from "@lucide/svelte/icons/infinity";
	import { untrack } from "svelte";
	import { slide } from "svelte/transition";
	import {
		ChevronsUpDownIcon,
		type ChevronsUpDownIconHandle
	} from "$lib/components/chan/chevrons-up-down-icon";
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from "$lib/components/ui/collapsible";
	import { Separator } from "$lib/components/ui/separator";
	import { cn } from "$lib/utils";
	import Prose from "./prose.svelte";
	import Skill from "./skill.svelte";
	import type { ExperiencePositionItemProps } from "./work-experience-types";
	import { formatDuration } from "./work-experience-utils";

	let { position }: ExperiencePositionItemProps = $props();

	let open = $state(untrack(() => position.isExpanded ?? false));
	let chevronsUpDownIconRef = $state<ChevronsUpDownIconHandle | undefined>();

	const PositionIcon = $derived(position.icon ?? BriefcaseBusinessIcon);
	const start = $derived(position.employmentPeriod.start);
	const end = $derived(position.employmentPeriod.end);
	const isOngoing = $derived(!end);
	const duration = $derived(formatDuration(start, end));

	function handleOpenChange(isOpen: boolean): void {
		if (isOpen) {
			chevronsUpDownIconRef?.startAnimation();
		} else {
			chevronsUpDownIconRef?.stopAnimation();
		}
	}
</script>

<Collapsible
	bind:open
	onOpenChange={handleOpenChange}
	disabled={!position.description}
	class="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background"
>
	<CollapsibleTrigger
		class={cn(
			"group/experience-position not-prose block w-full text-left select-none",
			"relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/30",
			"data-disabled:before:content-none"
		)}
	>
		<div class="relative z-1 mb-1 flex items-start gap-3 text-base">
			<div
				class={cn(
					"flex size-6 shrink-0 items-center justify-center rounded-lg",
					"bg-muted text-muted-foreground",
					"border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background",
					"[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
				)}
			>
				<PositionIcon />
			</div>

			<h4 class="flex-1 font-medium text-balance text-foreground">
				{position.title}
			</h4>

			<div
				class="shrink-0 text-muted-foreground group-disabled/experience-position:hidden [&_svg]:h-lh [&_svg]:w-4"
			>
				<ChevronsUpDownIcon
					bind:this={chevronsUpDownIconRef}
					duration={0.15}
				/>
			</div>
		</div>

		<dl
			class="relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground"
		>
			{#if position.employmentType}
				<div>
					<dt class="sr-only">Employment Type</dt>
					<dd>{position.employmentType}</dd>
				</div>

				<Separator
					class="data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
					aria-hidden="true"
				/>
			{/if}

			<div>
				<dt class="sr-only">Employment Period</dt>
				<dd class="flex items-center gap-0.5 tabular-nums">
					<span>{start}</span>
					<span class="font-mono">—</span>
					{#if isOngoing}
						<InfinityIcon
							class="size-4.5 translate-y-[0.5px]"
							aria-label="Present"
						/>
					{:else}
						<span>{end}</span>
					{/if}
				</dd>
			</div>

			{#if duration}
				<Separator
					class="data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
					aria-hidden="true"
				/>
				<div>
					<dt class="sr-only">Duration</dt>
					<dd class="tabular-nums">{duration}</dd>
				</div>
			{/if}
		</dl>
	</CollapsibleTrigger>

	<CollapsibleContent class="overflow-hidden" forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<div {...props} transition:slide={{ duration: 200 }}>
					{#if position.description}
						<Prose class="pt-2 pl-9">
							<Markdown value={position.description} />
						</Prose>
					{/if}
				</div>
			{/if}
		{/snippet}
	</CollapsibleContent>

	{#if position.skills && position.skills.length > 0}
		<ul class="not-prose flex flex-wrap gap-1.5 pt-3 pl-9">
			{#each position.skills as skill}
				<li class="flex">
					<Skill>{skill}</Skill>
				</li>
			{/each}
		</ul>
	{/if}
</Collapsible>
