<script lang="ts">
	import {
		TimescaleAge,
		TimescaleContent,
		TimescaleHeader,
		TimescaleIntroScroll,
		TimescaleItem,
		TimescaleRail,
		TimescaleRoot,
		TimescaleTick,
		TimescaleTrack,
		TimescaleViewport,
		TimescaleYear
	} from "$chan/timescale";

	type Link = {
		text: string;
		href: string;
	};

	type Inline = string | Link;

	type ContentBlock =
		| { type: "paragraph"; content: Inline[] }
		| { type: "list"; items: string[] };

	type Milestone = {
		year: number;
		content?: ContentBlock[];
	};

	const BIRTH_YEAR = 2000;

	const paragraph = (...content: Inline[]): ContentBlock => ({
		type: "paragraph",
		content
	});

	const list = (...items: string[]): ContentBlock => ({
		type: "list",
		items
	});

	const MILESTONES: Milestone[] = [
		{
			year: 2000,
			content: [paragraph("Born in Can Tho, Viet Nam.")]
		},
		{ year: 2001 },
		{ year: 2002 },
		{ year: 2003 },
		{ year: 2004 },
		{ year: 2005 },
		{
			year: 2006,
			content: [paragraph("Started at Thuan Hung Primary School.")]
		},
		{ year: 2007 },
		{ year: 2008 },
		{ year: 2009 },
		{ year: 2010 },
		{
			year: 2011,
			content: [paragraph("Started at Thuan Hung Secondary School.")]
		},
		{ year: 2012 },
		{ year: 2013 },
		{
			year: 2014,
			content: [
				paragraph(
					"Started learning to code and built my first website."
				),
				paragraph("Won awards:"),
				list(
					"1st Prize — Can Tho City Young Informatics Contest 2014",
					"Consolation Prize — National Young Informatics Contest 2014"
				),
				paragraph("Visited Ha Noi, the capital, for the first time.")
			]
		},
		{
			year: 2015,
			content: [
				paragraph("Won awards:"),
				list(
					"3rd Prize — Can Tho City Young Informatics Contest 2015",
					"Consolation Prize — National Young Informatics Contest 2015",
					"Outstanding Student — Most Outstanding Student of the District",
					"2nd Prize — Can Tho City Youth and Children’s Creativity Contest 2015",
					"3rd Prize — Can Tho City Science and Engineering Fair 2015"
				),
				paragraph(
					"Visited Thu Dau Mot, Binh Duong for the first time."
				),
				paragraph(
					"Admitted to the specialized Computer Science class at Ly Tu Trong High School for the Gifted."
				)
			]
		},
		{
			year: 2016,
			content: [
				paragraph("Won awards:"),
				list(
					"Consolation Prize — Can Tho City Young Informatics Contest 2016",
					"1st Prize — Can Tho City Youth and Children’s Creativity Contest 2016",
					"3rd Prize — National Young Informatics Contest 2016",
					"Consolation Prize — National Youth and Children’s Creativity Contest 2016"
				),
				paragraph(
					"Visited Quy Nhon, Binh Dinh for the first time, and returned to Ha Noi."
				)
			]
		},
		{
			year: 2017,
			content: [
				paragraph("Won awards:"),
				list(
					"2nd Prize — Can Tho City Outstanding Student Selection Exam 2016-2017",
					"Consolation Prize — Can Tho City Young Informatics Contest 2017",
					"3rd Prize — Can Tho City Young Informatics Contest 2017",
					"2nd Prize — Can Tho City Youth and Children’s Creativity Contest 2017",
					"Creative Award — Binh Duong Hackathon 2017"
				)
			]
		},
		{
			year: 2018,
			content: [
				paragraph("Won awards:"),
				list(
					"1st Prize — Can Tho City Science and Engineering Fair 2018",
					"3rd Prize — Can Tho City Outstanding Student Selection Exam 2017-2018",
					"3rd Prize — National Science and Engineering Fair 2018 (ViSEF)",
					"3rd Prize — Can Tho City Young Informatics Contest 2018",
					"2nd Prize — Can Tho City Youth and Children’s Creativity Contest 2018",
					"3rd Prize — National Young Informatics Contest 2018"
				),
				paragraph(
					"Earned direct admission to University of Science — VNUHCM, majoring in Information Systems."
				),
				paragraph(
					"Began freelancing and joined Tung Tung as a UI/UX Designer."
				),
				paragraph(
					"Visited Da Lat, Lam Dong and Ba Ria - Vung Tau for the first time."
				)
			]
		},
		{
			year: 2019,
			content: [
				paragraph("Became a Mobile Developer at Tung Tung."),
				paragraph("Won 2nd Prize — Business Startup Competition 2019.")
			]
		},
		{
			year: 2020,
			content: [paragraph("Became a Web Developer at Tung Tung.")]
		},
		{ year: 2021 },
		{
			year: 2022,
			content: [
				paragraph(
					"Joined Simplamo as a Senior Frontend Developer and UI Lead."
				),
				paragraph(
					"Launched ",
					{ text: "ZaDark", href: "https://zadark.com" },
					" — 80k+ downloads, 30k+ active users."
				),
				paragraph(
					"Won Bronze Medal — 10th Design, Manufacturing, and Application Award 2022."
				)
			]
		},
		{ year: 2023 },
		{
			year: 2024,
			content: [
				paragraph(
					"Founded ",
					{ text: "Quaric", href: "https://quaric.com" },
					"."
				)
			]
		},
		{
			year: 2025,
			content: [
				paragraph(
					"Open-sourced ",
					{
						text: "chanhdai.com",
						href: "https://github.com/ncdai/chanhdai.com"
					},
					" — 2k+ stars on GitHub."
				),
				paragraph(
					"Released ",
					{
						text: "React Wheel Picker",
						href: "https://react-wheel-picker.chanhdai.com"
					},
					" — 50k+ weekly downloads, selected for the ",
					{
						text: "Vercel OSS Program",
						href: "https://vercel.com/open-source-program"
					},
					"."
				),
				paragraph(
					"Followed by ",
					{ text: "shadcn", href: "https://x.com/shadcn" },
					" on X."
				)
			]
		},
		{
			year: 2026,
			content: [
				paragraph(
					"Joined ",
					{ text: "shadcncraft", href: "https://shadcncraft.com" },
					" as a Design Engineer."
				),
				paragraph(
					"Selected for the ",
					{
						text: "Claude for Open Source Program",
						href: "https://claude.com/contact-sales/claude-for-oss"
					},
					"."
				)
			]
		}
	];
</script>

<TimescaleIntroScroll>
	<TimescaleRoot class="mt-4">
		<TimescaleHeader>
			<TimescaleAge>Age</TimescaleAge>
			<TimescaleYear>Years</TimescaleYear>
		</TimescaleHeader>

		<TimescaleViewport>
			<TimescaleTrack>
				<TimescaleRail />

				{#each MILESTONES as milestone (milestone.year)}
					<TimescaleItem>
						<TimescaleTick />

						<TimescaleAge
							>{milestone.year - BIRTH_YEAR}</TimescaleAge
						>
						<TimescaleYear>{milestone.year}</TimescaleYear>

						{#if milestone.content}
							<TimescaleContent
								class="space-y-4 text-sm leading-6 text-pretty text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5"
							>
								{#each milestone.content as block}
									{#if block.type === "paragraph"}
										<p>
											{#each block.content as part}
												{#if typeof part === "string"}
													{part}
												{:else}
													<a href={part.href}
														>{part.text}</a
													>
												{/if}
											{/each}
										</p>
									{:else}
										<ul>
											{#each block.items as item}
												<li>{item}</li>
											{/each}
										</ul>
									{/if}
								{/each}
							</TimescaleContent>
						{/if}
					</TimescaleItem>
				{/each}
			</TimescaleTrack>
		</TimescaleViewport>
	</TimescaleRoot>
</TimescaleIntroScroll>
