<script lang="ts">
	import {
		WorkExperience,
		type ExperienceItemType
	} from "$chan/work-experience";

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
