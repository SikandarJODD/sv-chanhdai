<script lang="ts">
	import CodeXmlIcon from "@lucide/svelte/icons/code-xml";
	import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
	import {
		WorkExperience,
		type ExperienceItemType
	} from "$chan/work-experience";

	const WORK_EXPERIENCE: ExperienceItemType[] = [
		{
			id: "quaric",
			companyName: "Quaric",
			companyLogo:
				"https://assets.chanhdai.com/images/companies/quaric.svg",
			companyWebsite: "https://quaric.com",
			positions: [
				{
					id: "2",
					title: "Design Engineer",
					employmentPeriod: {
						start: "03.2024"
					},
					employmentType: "Part-time",
					icon: CodeXmlIcon,
					description: `- Integrated VNPAY-QR for secure transactions.
- Registered the e-commerce site with [online.gov.vn](https://online.gov.vn) for compliance.
- Developed online ordering to streamline purchases.
- Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
- Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 15,000+ active users via Chrome Web Store.`,
					skills: [
						"Next.js",
						"Strapi",
						"Auth0",
						"VNPAY-QR",
						"Docker",
						"NGINX",
						"Google Cloud",
						"Docusaurus",
						"Extension",
						"Research",
						"Project Management"
					],
					isExpanded: true
				},
				{
					id: "1",
					title: "Founder",
					employmentPeriod: {
						start: "03.2024"
					},
					employmentType: "Part-time",
					icon: LightbulbIcon,
					skills: [
						"Business Ownership",
						"Business Law",
						"Business Tax"
					]
				}
			],
			isCurrentEmployer: true
		}
	];
</script>

<WorkExperience class="w-full" experiences={WORK_EXPERIENCE} />
