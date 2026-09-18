import ExperienceItemSvelteRaw from "$lib/components/chan/work-experience/experience-item.svelte?raw";
import ExperiencePositionItemSvelteRaw from "$lib/components/chan/work-experience/experience-position-item.svelte?raw";
import IndexTsRaw from "$lib/components/chan/work-experience/index.ts?raw";
import ProseSvelteRaw from "$lib/components/chan/work-experience/prose.svelte?raw";
import SkillSvelteRaw from "$lib/components/chan/work-experience/skill.svelte?raw";
import WorkExperienceTypesTsRaw from "$lib/components/chan/work-experience/work-experience-types.ts?raw";
import WorkExperienceUtilsTsRaw from "$lib/components/chan/work-experience/work-experience-utils.ts?raw";
import WorkExperienceSvelteRaw from "$lib/components/chan/work-experience/work-experience.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import CareerProgressionExample from "./examples/career-progression.svelte";
import CareerProgressionExampleCode from "./examples/career-progression.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleCode from "./examples/demo-example.svelte?raw";
import DetailedHistoryExample from "./examples/detailed-history.svelte";
import DetailedHistoryExampleCode from "./examples/detailed-history.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "work-experience",
	title: "Work Experience",
	description:
		"Display work experiences with role details, company logos, and durations.",
	category: "chan"
};

const seo: SEO = {
	title: "Work Experience",
	description:
		"Display work experiences with role details, company logos, and durations.",
	keywords: [
		"Svelte",
		"Svelte 5",
		"Work Experience",
		"Career Timeline",
		"Resume",
		"Portfolio",
		"Component"
	]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "$chan/work-experience";

	const experiences: ExperienceItemType[] = [
		{
			id: "acme",
			companyName: "Acme",
			companyLogo: "/acme-logo.svg",
			positions: [
				{
					id: "engineer",
					title: "Software Engineer",
					employmentPeriod: { start: "2023" },
					employmentType: "Full-time"
				}
			],
			isCurrentEmployer: true
		}
	];
</script>

<WorkExperience {experiences} />`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Single role",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Career progression",
		preview: CareerProgressionExample,
		code: {
			name: "career-progression.svelte",
			code: CareerProgressionExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Detailed history",
		description:
			"Show multiple companies, roles, responsibilities, and skills.",
		preview: DetailedHistoryExample,
		code: {
			name: "detailed-history.svelte",
			code: DetailedHistoryExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "experience-item.svelte",
			code: ExperienceItemSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "experience-position-item.svelte",
			code: ExperiencePositionItemSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" },
		{ name: "prose.svelte", code: ProseSvelteRaw, lang: "svelte" },

		{ name: "skill.svelte", code: SkillSvelteRaw, lang: "svelte" },
		{
			name: "work-experience-types.ts",
			code: WorkExperienceTypesTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "work-experience-utils.ts",
			code: WorkExperienceUtilsTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "work-experience.svelte",
			code: WorkExperienceSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure: "",
	tailwind: {
		code: `@import "tailwindcss";
@plugin "@tailwindcss/typography";

:root {
  --line: color-mix(in oklab, var(--border) 64%, var(--background));
}

.dark {
  --line: color-mix(in oklab, var(--border) 100%, var(--background));
}

@theme inline {
  --color-line: var(--line);
}

@utility link {
  @apply decoration-1 underline-offset-3 hover:underline;
}

@utility link-underline {
  @apply underline decoration-current/30 decoration-1 underline-offset-3 transition-colors hover:decoration-current;
}

@utility prose-ncdai {
  @apply prose-headings:tracking-tight prose-headings:text-balance prose-h2:font-semibold;
  @apply prose-a:font-normal prose-a:wrap-break-word prose-a:text-foreground prose-a:link-underline;
  @apply prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none;
  @apply prose-strong:font-medium;
}
`,
		name: "tailwind.css",
		lang: "css"
	}
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	usage,
	examples,
	seo,
	props: [
		{
			name: "WorkExperience",
			desc: "Container that renders a list of work experiences.",
			props: [
				{
					name: "experiences",
					type: "ExperienceItemType[]",
					required: true,
					description:
						"Companies and positions displayed in the work experience list."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the container."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the container element."
				}
			]
		},
		{
			name: "ExperienceItem",
			desc: "Company entry containing one or more positions.",
			props: [
				{
					name: "experience",
					type: "ExperienceItemType",
					required: true,
					description:
						"Company name, logo, website, positions, and current-employer state."
				}
			]
		},
		{
			name: "ExperiencePositionItem",
			desc: "Individual role with its dates, details, and skills.",
			props: [
				{
					name: "position",
					type: "ExperiencePositionItemType",
					required: true,
					description:
						"Role title, employment period, type, description, icon, skills, and initial expanded state."
				}
			]
		}
	]
};
