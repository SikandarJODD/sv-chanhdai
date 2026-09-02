import {
	differenceInCalendarDays,
	eachDayOfInterval,
	formatISO,
	getDay,
	getMonth,
	nextDay,
	parseISO,
	subWeeks
} from "date-fns";
import type { Day as WeekDay } from "date-fns";
import type {
	Activity,
	Labels,
	MonthLabel,
	Week
} from "./contribution-graph-context.svelte";

export const DEFAULT_MONTH_LABELS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

export const DEFAULT_LABELS: Labels = {
	months: DEFAULT_MONTH_LABELS,
	weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	totalCount: "{{count}} activities in {{year}}",
	legend: {
		less: "Less",
		more: "More"
	}
};

export const CONTRIBUTION_GRAPH_THEME = [
	'data-[level="0"]:fill-muted-foreground/5',
	'data-[level="1"]:fill-muted-foreground/20',
	'data-[level="2"]:fill-muted-foreground/40',
	'data-[level="3"]:fill-muted-foreground/60',
	'data-[level="4"]:fill-muted-foreground/80'
].join(" ");

export function fillHoles(activities: Activity[]): Activity[] {
	if (activities.length === 0) return [];

	const sortedActivities = [...activities].sort((a, b) =>
		a.date.localeCompare(b.date)
	);
	const calendar = new Map(
		activities.map((activity) => [activity.date, activity])
	);
	const firstActivity = sortedActivities[0];
	const lastActivity = sortedActivities.at(-1);

	if (!firstActivity || !lastActivity) return [];

	return eachDayOfInterval({
		start: parseISO(firstActivity.date),
		end: parseISO(lastActivity.date)
	}).map((day) => {
		const date = formatISO(day, { representation: "date" });
		return calendar.get(date) ?? { date, count: 0, level: 0 };
	});
}

export function groupByWeeks(
	activities: Activity[],
	weekStart: WeekDay = 0
): Week[] {
	if (activities.length === 0) return [];

	const normalizedActivities = fillHoles(activities);
	const firstActivity = normalizedActivities[0];
	if (!firstActivity) return [];

	const firstDate = parseISO(firstActivity.date);
	const firstCalendarDate =
		getDay(firstDate) === weekStart
			? firstDate
			: subWeeks(nextDay(firstDate, weekStart), 1);
	const padding = differenceInCalendarDays(firstDate, firstCalendarDate);
	const paddedActivities: Week = [
		...Array<Activity | undefined>(padding).fill(undefined),
		...normalizedActivities
	];
	const numberOfWeeks = Math.ceil(paddedActivities.length / 7);

	return Array.from({ length: numberOfWeeks }, (_, weekIndex) =>
		paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7)
	);
}

export function getMonthLabels(
	weeks: Week[],
	monthNames: string[] = DEFAULT_MONTH_LABELS
): MonthLabel[] {
	return weeks
		.reduce<MonthLabel[]>((monthLabels, week, weekIndex) => {
			const firstActivity = week.find(
				(activity) => activity !== undefined
			);

			if (!firstActivity) {
				throw new Error(
					`Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`
				);
			}

			const month = monthNames[getMonth(parseISO(firstActivity.date))];
			if (!month) {
				const monthName = new Date(firstActivity.date).toLocaleString(
					"en-US",
					{
						month: "short"
					}
				);
				throw new Error(
					`Unexpected error: undefined month label for ${monthName}.`
				);
			}

			const previousLabel = monthLabels.at(-1);
			return weekIndex === 0 || previousLabel?.label !== month
				? monthLabels.concat({ weekIndex, label: month })
				: monthLabels;
		}, [])
		.filter(({ weekIndex }, index, monthLabels) => {
			const minWeeks = 3;
			if (index === 0) {
				return Boolean(
					monthLabels[1] &&
					monthLabels[1].weekIndex - weekIndex >= minWeeks
				);
			}
			if (index === monthLabels.length - 1) {
				return weeks.slice(weekIndex).length >= minWeeks;
			}
			return true;
		});
}
