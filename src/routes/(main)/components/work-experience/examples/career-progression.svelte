<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "$chan/work-experience";

	const experiences: ExperienceItemType[] = [
		{
			id: "vercel",
			companyName: "Vercel",
			companyLogo: "/vercel-logo.svg",
			companyWebsite: "https://vercel.com",
			positions: [
				{
					id: "senior-engineer",
					title: "Senior Frontend Engineer",
					employmentPeriod: { start: "2024" },
					employmentType: "Full-time",
					description: "Leading the design system and frontend platform.",
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
