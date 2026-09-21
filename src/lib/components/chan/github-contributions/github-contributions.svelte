<script lang="ts" module>
	export type GitHubContributionsProps = {
		username: string;
		class?: string;
	};
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import { format } from "date-fns";
	import { cn } from "$lib/utils";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import type { Activity } from "./contribution-graph-context.svelte";
	import ContributionGraph from "./contribution-graph.svelte";
	import ContributionGraphBlock from "./contribution-graph-block.svelte";
	import ContributionGraphCalendar from "./contribution-graph-calendar.svelte";
	import ContributionGraphFooter from "./contribution-graph-footer.svelte";
	import ContributionGraphLegend from "./contribution-graph-legend.svelte";
	import ContributionGraphTotalCount from "./contribution-graph-total-count.svelte";
	import GitHubContributionsFallback from "./github-contributions-fallback.svelte";

	type GitHubContributionsResponse = {
		contributions: Activity[];
	};

	let { username, class: className }: GitHubContributionsProps = $props();
	let contributions = $state<Activity[] | null>(null);
	let error = $state<string | null>(null);

	const githubProfileUrl = $derived(
		`https://github.com/${encodeURIComponent(username)}`
	);

	async function getContributions(signal: AbortSignal) {
		const encodedUsername = encodeURIComponent(username);
		const response = await fetch(
			`https://github-contributions-api.jogruber.de/v4/${encodedUsername}?y=last`,
			{ signal }
		);

		if (!response.ok) {
			throw new Error("Could not load GitHub contributions.");
		}

		const data = (await response.json()) as GitHubContributionsResponse;
		return data.contributions;
	}

	onMount(() => {
		const controller = new AbortController();

		void getContributions(controller.signal)
			.then((data) => {
				contributions = data;
			})
			.catch((caughtError: unknown) => {
				if (
					caughtError instanceof DOMException &&
					caughtError.name === "AbortError"
				) {
					return;
				}

				error =
					caughtError instanceof Error
						? caughtError.message
						: "Could not load GitHub contributions.";
			});

		return () => controller.abort();
	});
</script>

{#snippet graph(data: Activity[])}
	<ContributionGraph
		class={cn("mx-auto py-2", className)}
		{data}
		blockSize={11}
		blockMargin={3}
		blockRadius={2}
	>
		<Tooltip.Provider>
			<ContributionGraphCalendar
				class="no-scrollbar px-2"
				title="GitHub Contributions"
			>
				{#snippet children({ activity, dayIndex, weekIndex })}
					<Tooltip.Root delayDuration={400}>
						<Tooltip.Trigger>
							{#snippet child({ props })}
								<g {...props}>
									<ContributionGraphBlock
										{activity}
										{dayIndex}
										{weekIndex}
									/>
								</g>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content class="font-sans font-light">
							<p>
								{activity.count} contribution{activity.count > 1
									? "s"
									: ""} on
								{format(new Date(activity.date), "dd.MM.yyyy")}
							</p>
						</Tooltip.Content>
					</Tooltip.Root>
				{/snippet}
			</ContributionGraphCalendar>
		</Tooltip.Provider>

		<ContributionGraphFooter class="px-2">
			<ContributionGraphTotalCount>
				{#snippet children({ totalCount, year })}
					<div class="text-sm text-muted-foreground">
						{totalCount.toLocaleString("en")} contributions in {year}
						on
						<a
							class="text-foreground link-underline"
							href={githubProfileUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>.
					</div>
				{/snippet}
			</ContributionGraphTotalCount>

			<ContributionGraphLegend />
		</ContributionGraphFooter>
	</ContributionGraph>
{/snippet}

{#if error}
	<p class={cn("text-sm text-muted-foreground", className)}>{error}</p>
{:else if contributions}
	{@render graph(contributions)}
{:else}
	<GitHubContributionsFallback />
{/if}
