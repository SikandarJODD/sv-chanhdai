# Work Experience

Display work experiences with role details, company logos, and durations.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/work-experience.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/work-experience.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/work-experience.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/work-experience.json
```

## Usage

```svelte
<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "#lib/components/chan/work-experience/index.js";

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

<WorkExperience {experiences} />
```

## Props

### WorkExperience

Container that renders a list of work experiences.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `experiences` | `ExperienceItemType[]` | — | Yes | Companies and positions displayed in the work experience list. |
| `class` | `string` | `undefined` | No | Additional classes applied to the container. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the container element. |

### ExperienceItem

Company entry containing one or more positions.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `experience` | `ExperienceItemType` | — | Yes | Company name, logo, website, positions, and current-employer state. |

### ExperiencePositionItem

Individual role with its dates, details, and skills.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `position` | `ExperiencePositionItemType` | — | Yes | Role title, employment period, type, description, icon, skills, and initial expanded state. |

## Features

No features are listed.

## Examples

### Single role

```svelte
<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "#lib/components/chan/work-experience/index.js";

	const experiences: ExperienceItemType[] = [
		{
			id: "linear",
			companyName: "Linear",
			companyLogo: "https://cdn.simpleicons.org/linear/5E6AD2",
			companyWebsite: "https://linear.app",
			positions: [
				{
					id: "product-designer",
					title: "Product Designer",
					employmentPeriod: { start: "2023" },
					employmentType: "Full-time"
				}
			],
			isCurrentEmployer: true
		}
	];
</script>

<WorkExperience class="w-full max-w-xl" {experiences} />
```

### Career progression

```svelte
<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "#lib/components/chan/work-experience/index.js";

	const experiences: ExperienceItemType[] = [
		{
			id: "vercel",
			companyName: "Vercel",
			companyLogo: "https://vercel.com/favicon.ico",
			companyWebsite: "https://vercel.com",
			positions: [
				{
					id: "senior-engineer",
					title: "Senior Frontend Engineer",
					employmentPeriod: { start: "2024" },
					employmentType: "Full-time",
					description:
						"Leading the design system and frontend platform.",
					skills: ["Svelte", "TypeScript"],
					isExpanded: true
				},
				{
					id: "frontend-engineer",
					title: "Frontend Engineer",
					employmentPeriod: { start: "2022", end: "2024" },
					employmentType: "Full-time"
				}
			],
			isCurrentEmployer: true
		}
	];
</script>

<WorkExperience class="w-full max-w-xl" {experiences} />
```

### Detailed history

Show multiple companies, roles, responsibilities, and skills.

```svelte
<script lang="ts">
	import CodeXmlIcon from "@lucide/svelte/icons/code-xml";
	import PaletteIcon from "@lucide/svelte/icons/palette";
	import {
		WorkExperience,
		type ExperienceItemType
	} from "#lib/components/chan/work-experience/index.js";

	const experiences: ExperienceItemType[] = [
		{
			id: "linear",
			companyName: "Linear",
			companyLogo: "https://cdn.simpleicons.org/linear",
			companyWebsite: "https://linear.app",
			positions: [
				{
					id: "design-engineer",
					title: "Design Engineer",
					employmentPeriod: { start: "01.2024" },
					employmentType: "Full-time",
					icon: PaletteIcon,
					description: `- Built reusable components for product teams.
- Improved keyboard navigation and screen reader support.
- Partnered with designers to document interaction patterns.`,
					skills: ["Svelte", "TypeScript", "Accessibility"],
					isExpanded: true
				},
				{
					id: "frontend-engineer",
					title: "Frontend Engineer",
					employmentPeriod: { start: "06.2022", end: "12.2023" },
					employmentType: "Full-time",
					icon: CodeXmlIcon,
					skills: ["JavaScript", "CSS", "Design Systems"]
				}
			],
			isCurrentEmployer: true
		},
		{
			id: "github",
			companyName: "GitHub",
			companyLogo: "https://cdn.simpleicons.org/github",
			companyWebsite: "https://github.com",
			positions: [
				{
					id: "software-engineer",
					title: "Software Engineer",
					employmentPeriod: { start: "2020", end: "2022" },
					employmentType: "Full-time",
					description:
						"Developed frontend features and maintained shared UI infrastructure.",
					skills: ["React", "GraphQL", "Testing"]
				}
			]
		}
	];
</script>

<WorkExperience class="w-full max-w-xl" {experiences} />
```
