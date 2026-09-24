<script lang="ts">
	import * as NavigationMenu from "$lib/components/ui/navigation-menu/index";
	import { ArrowUpRightIcon, PackageIcon } from "@lucide/svelte";
	import LinkItem from "./link-item.svelte";
	import { navs } from "./nav-links";
	import Github from "$icons/github.svelte";
	import { Button } from "$ui/button";

	type ProjectItem = {
		title: string;
		description: string;
		url: string;
		github: string;
		slug: string;
		accent?: "amber";
	};

	const projectItems: ProjectItem[] = [
		{
			title: "Svelte Animations",
			description:
				"Svelte Port of Magic UI, Spell UI, Fancy Components, and more.",
			url: "https://sv-animations.vercel.app/",
			github: "https://github.com/SikandarJODD/animations",
			slug: "svelte-animations"
		},
		{
			title: "Svelte Marketing Blocks",
			description:
				"150+ Reusable marketing sections and landing-page blocks.",
			url: "https://sv-blocks.vercel.app/",
			github: "https://github.com/SikandarJODD/cnblocks",
			slug: "svelte-marketing-blocks"
		},
		{
			title: "Svelte Premium Marketing Blocks",
			description:
				"60+ Polished marketing blocks for high-quality Svelte sites.",
			url: "https://sv-efferd.pages.dev/",
			github: "https://github.com/SikandarJODD/sv-efferd",
			slug: "svelte-quality-marketing-blocks"
		},
		{
			title: "Svelte AI Elements",
			description:
				"Composable Svelte elements for AI product interfaces.",
			url: "https://svelte-ai-elements.vercel.app/",
			github: "https://github.com/SikandarJODD/ai-elements",
			slug: "svelte-ai-elements"
		},
		{
			title: "Svelte Particles",
			description:
				"Interactive particle effects and examples for Svelte.",
			url: "https://sv-particles.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-particles",
			slug: "svelte-particles"
		},
		{
			title: "Svelte Data Table Components",
			description:
				"20+ Data table components, patterns, and practical examples.",
			url: "https://sv-table.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-table",
			slug: "svelte-data-table"
		},
		{
			title: "Svelte Globe Examples",
			description: "Interactive globe examples and visual experiments.",
			url: "https://sv-globe.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-globe",
			slug: "svelte-globe"
		},
		{
			title: "Svelte Dot Matrix Loaders",
			description: "50+ Dot-matrix loaders | free & open-source.",
			url: "https://sv-matrix.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-matrix",
			slug: "svelte-dot-matrix-loaders"
		},
		{
			title: "Svelte Agentation",
			description:
				"Visual feedback and annotation tools for AI coding agents.",
			url: "https://sv-agentation.com/",
			github: "https://github.com/SikandarJODD/sv-agentation",
			slug: "svelte-agentation",
			accent: "amber"
		}
	];

	function withUtm(url: string, content: string) {
		const params = new URLSearchParams({
			utm_source: "sv-animations",
			utm_medium: "referral",
			utm_campaign: "other-projects",
			utm_content: content
		});

		return `${url}?${params.toString()}`;
	}
</script>

<NavigationMenu.Root class="hidden md:flex">
	<NavigationMenu.List class="gap-1">
		{#each navs as nav}
			{#if nav.sub}
				<NavigationMenu.Item>
					<NavigationMenu.Trigger
						class="h-fit py-1.5! hover:bg-accent/60!"
						>{nav.name}</NavigationMenu.Trigger
					>
					<NavigationMenu.Content class="p-0">
						<div
							class="grid w-lg grid-cols-2 gap-2 rounded-full bg-popover p-1 shadow"
						>
							{#each nav.sub as item, i}
								<NavigationMenu.Link class="rounded-lg!">
									<LinkItem {...item} />
								</NavigationMenu.Link>
							{/each}
						</div>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
			{:else}
				<NavigationMenu.Item>
					<NavigationMenu.Link
						class="rounded-full px-3 py-1.5 hover:bg-accent!"
					>
						{#snippet child({ props })}
							<a href={nav.href} {...props}>{nav.name}</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			{/if}
		{/each}
		<NavigationMenu.Item id="other-projects">
			<NavigationMenu.Trigger
				class="h-fit rounded-full py-1.5! pr-2.5 pl-3 font-normal hover:bg-accent/80!"
				>Other Projects</NavigationMenu.Trigger
			>
			<NavigationMenu.Content class="p-0">
				<div class="w-[42rem]">
					<ul class="grid grid-cols-2 gap-1 p-2">
						{#each projectItems as project (project.url)}
							<li
								class="group/project-card relative flex min-w-0 items-start gap-2 rounded-md p-2.5 transition-colors focus-within:bg-accent hover:bg-accent"
							>
								<a
									href={withUtm(
										project.url,
										`navbar-${project.slug}`
									)}
									target="_blank"
									rel="noopener noreferrer"
									class="min-w-0 flex-1 rounded-sm outline-none"
								>
									<div
										class="flex items-center gap-1.5 text-sm leading-none font-medium"
									>
										<span class="truncate"
											>{project.title}</span
										>
										{#if project.accent === "amber"}
											<PackageIcon
												aria-label="Library"
												class="size-3 shrink-0 text-amber-500"
											/>
										{/if}
									</div>
									<p
										class="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground"
									>
										{project.description}
									</p>
								</a>
								<a
									href={withUtm(
										project.github,
										`navbar-${project.slug}-github`
									)}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} on GitHub`}
									class="-mt-0.5 shrink-0 rounded-sm p-1 text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									<Github class="size-3" />
								</a>
								<span
									aria-hidden="true"
									class="pointer-events-none absolute right-2 bottom-2 translate-y-1 rounded-md bg-muted p-1 text-muted-foreground opacity-0 shadow-xs transition-all duration-200 group-hover/project-card:translate-y-0 group-hover/project-card:opacity-100"
								>
									<ArrowUpRightIcon class="size-3" />
								</span>
							</li>
						{/each}
					</ul>
					<div
						class="flex items-center justify-center gap-1.5 border-t px-3 py-2.5 text-xs text-muted-foreground"
					>
						<span>Built by</span>
						<a
							href={withUtm("https://bhide.dev", "navbar-owner")}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 rounded-sm font-medium text-foreground transition-colors outline-none hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
						>
							<img
								src="https://github.com/SikandarJODD.png"
								alt=""
								width="16"
								height="16"
								class="size-4 rounded-full"
							/>
							Bhide Svelte
						</a>
					</div>
				</div>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
