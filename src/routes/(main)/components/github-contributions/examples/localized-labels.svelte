<script lang="ts">
	import { addDays, format } from "date-fns";
	import {
		ContributionGraph,
		ContributionGraphBlock,
		ContributionGraphCalendar,
		ContributionGraphFooter,
		ContributionGraphLegend,
		ContributionGraphTotalCount,
		type Activity,
		type Labels
	} from "$chan/github-contributions";

	const labels: Labels = {
		months: [
			"Th1",
			"Th2",
			"Th3",
			"Th4",
			"Th5",
			"Th6",
			"Th7",
			"Th8",
			"Th9",
			"Th10",
			"Th11",
			"Th12"
		],
		totalCount: "{{count}} hoạt động trong năm {{year}}",
		legend: { less: "Ít hơn", more: "Nhiều hơn" }
	};

	const startDate = new Date(2025, 0, 5);
	const data: Activity[] = Array.from({ length: 28 * 7 }, (_, index) => {
		const count = (index * 7 + index * index) % 16;
		return {
			date: format(addDays(startDate, index), "yyyy-MM-dd"),
			count,
			level: count === 0 ? 0 : Math.min(4, Math.ceil(count / 4))
		};
	});
</script>

<ContributionGraph {data} {labels} blockSize={11} blockMargin={3}>
	<ContributionGraphCalendar title="Biểu đồ đóng góp">
		{#snippet children({ activity, dayIndex, weekIndex })}
			<ContributionGraphBlock {activity} {dayIndex} {weekIndex} />
		{/snippet}
	</ContributionGraphCalendar>

	<ContributionGraphFooter>
		<ContributionGraphTotalCount />
		<ContributionGraphLegend />
	</ContributionGraphFooter>
</ContributionGraph>
