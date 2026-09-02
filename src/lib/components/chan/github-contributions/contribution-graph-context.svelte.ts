import { createContext } from "svelte";
import type { Day as WeekDay } from "date-fns";

export type Activity = {
	date: string;
	count: number;
	level: number;
};

export type Week = Array<Activity | undefined>;

export type Labels = {
	months?: string[];
	weekdays?: string[];
	totalCount?: string;
	legend?: {
		less?: string;
		more?: string;
	};
};

export type MonthLabel = {
	weekIndex: number;
	label: string;
};

export type ContributionGraphContextValue = {
	readonly data: Activity[];
	readonly weeks: Week[];
	readonly blockMargin: number;
	readonly blockRadius: number;
	readonly blockSize: number;
	readonly fontSize: number;
	readonly labels: Labels;
	readonly labelHeight: number;
	readonly maxLevel: number;
	readonly totalCount: number;
	readonly weekStart: WeekDay;
	readonly year: number;
	readonly width: number;
	readonly height: number;
};

const [getContributionGraphContext, setContributionGraphContext] =
	createContext<ContributionGraphContextValue>();

export function useContributionGraph() {
	try {
		return getContributionGraphContext();
	} catch {
		throw new Error(
			"ContributionGraph components must be used within a ContributionGraph"
		);
	}
}

export { setContributionGraphContext };
