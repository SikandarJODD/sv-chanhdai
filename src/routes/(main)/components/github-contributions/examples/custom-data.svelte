<script lang="ts">
	import { addDays, format } from "date-fns";
	import {
		ContributionGraph,
		ContributionGraphBlock,
		ContributionGraphCalendar,
		type Activity
	} from "$chan/github-contributions";

	const weekCount = 31;
	const startDate = new Date(2025, 0, 5);
	const wavePalette = [
		"rgb(16 185 129 / 0.06)",
		"rgb(16 185 129 / 0.16)",
		"rgb(16 185 129 / 0.32)",
		"rgb(16 185 129 / 0.58)",
		"#10b981"
	] as const;

	const data: Activity[] = Array.from(
		{ length: weekCount * 7 },
		(_, index) => {
			const dayIndex = index % 7;
			const weekIndex = Math.floor(index / 7);
			const waveCenter = 3 + Math.sin(weekIndex * 0.65) * 1.75;
			const distance = Math.abs(dayIndex - waveCenter);
			const level = Math.max(0, 4 - Math.floor(distance * 1.6));

			return {
				date: format(addDays(startDate, index), "yyyy-MM-dd"),
				count: level * 3,
				level
			};
		}
	);
</script>

<ContributionGraph {data} blockSize={12} blockMargin={3} blockRadius={3}>
	<ContributionGraphCalendar
		hideMonthLabels
		title="Fading emerald wave contribution graph"
	>
		{#snippet children({ activity, dayIndex, weekIndex })}
			<ContributionGraphBlock
				{activity}
				{dayIndex}
				{weekIndex}
				style={`fill: ${wavePalette[activity.level]}`}
			/>
		{/snippet}
	</ContributionGraphCalendar>
</ContributionGraph>
