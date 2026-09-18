<script lang="ts">
	import CodeXmlIcon from "@lucide/svelte/icons/code-xml";
	import PaletteIcon from "@lucide/svelte/icons/palette";
	import {
		WorkExperience,
		type ExperienceItemType
	} from "$chan/work-experience";

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
