<script lang="ts">
	import { addDays, format } from "date-fns";
	import {
		ContributionGraph,
		ContributionGraphBlock,
		ContributionGraphCalendar,
		type Activity
	} from "$chan/github-contributions";

	const startDate = new Date(2025, 0, 5);
	const data: Activity[] = Array.from({ length: 18 * 7 }, (_, index) => {
		const count = (index * 3 + index * index) % 13;
		return {
			date: format(addDays(startDate, index), "yyyy-MM-dd"),
			count,
			level: count === 0 ? 0 : Math.min(4, Math.ceil(count / 3))
		};
	});
</script>

<ContributionGraph {data} blockSize={8} blockMargin={2} blockRadius={1}>
	<ContributionGraphCalendar
		hideMonthLabels
		title="Compact contribution graph"
	>
		{#snippet children({ activity, dayIndex, weekIndex })}
			<ContributionGraphBlock {activity} {dayIndex} {weekIndex} />
		{/snippet}
	</ContributionGraphCalendar>
</ContributionGraph>
