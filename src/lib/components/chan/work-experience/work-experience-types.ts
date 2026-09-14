import type { LucideIcon } from "@lucide/svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { WithElementRef } from "$lib/utils";

export type ExperiencePositionItemType = {
	/** Unique identifier for the position. */
	id: string;
	/** The job title or position name. */
	title: string;
	/** Employment period. Use "MM.YYYY" or "YYYY" and omit `end` for current roles. */
	employmentPeriod: {
		/** Start date, for example "10.2022" or "2020". */
		start: string;
		/** End date; leave undefined for "Present". */
		end?: string;
	};
	/** The type of employment, for example "Full-time" or "Contract". */
	employmentType?: string;
	/** A Markdown description of the position or responsibilities. */
	description?: string;
	/** An icon representing the position. */
	icon?: LucideIcon;
	/** Skills associated with the position. */
	skills?: string[];
	/** Whether the position details are expanded initially. */
	isExpanded?: boolean;
};

export type ExperienceItemType = {
	/** Unique identifier for the experience item. */
	id: string;
	/** Name of the company where the experience was gained. */
	companyName: string;
	/** URL or path to the company's logo image. */
	companyLogo?: string;
	/** URL to the company's website. */
	companyWebsite?: string;
	/** Positions held at the company. */
	positions: ExperiencePositionItemType[];
	/** Whether this is the current employer. */
	isCurrentEmployer?: boolean;
};

export type WorkExperienceProps = WithElementRef<
	Omit<HTMLAttributes<HTMLDivElement>, "children">
> & {
	experiences: ExperienceItemType[];
};

export type ExperienceItemProps = {
	experience: ExperienceItemType;
};

export type ExperiencePositionItemProps = {
	position: ExperiencePositionItemType;
};

export type ProseProps = WithElementRef<
	Omit<HTMLAttributes<HTMLDivElement>, "children">
> & {
	children: Snippet;
};

export type SkillProps = WithElementRef<
	Omit<HTMLAttributes<HTMLSpanElement>, "children">
> & {
	children: Snippet;
};
