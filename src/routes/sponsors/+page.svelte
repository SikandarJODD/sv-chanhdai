<script lang="ts">
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import CurrentSponsor from "$lib/components/sponsors/current-sponsor.svelte";
	import Github from "$lib/svg/github.svelte";
	import X from "$lib/svg/x.svelte";
	import Button from "$ui/button/button.svelte";

	type Sponsor = {
		name: string;
		handle: string;
		avatar: string;
		github: string;
		role?: string;
		x?: string;
	};

	const sponsorUrl = "https://github.com/sponsors/SikandarJODD";

	const currentSponsors: Sponsor[] = [
		{
			name: "Guillermo Rauch",
			handle: "rauchg",
			avatar: "https://avatars.githubusercontent.com/u/13041?v=4",
			github: "https://github.com/rauchg",
			role: "CEO of Vercel",
			x: "https://x.com/rauchg"
		}
	];

	const pastSponsors: Sponsor[] = [
		{
			name: "Aidan Bleser",
			handle: "ieedan",
			avatar: "https://avatars.githubusercontent.com/u/117548273?v=4",
			github: "https://github.com/ieedan",
			role: "Frontend Engineer",
			x: "https://x.com/ieeeedan"
		},
		{
			name: "Nono Martínez Alonso",
			handle: "nonoesp",
			avatar: "https://avatars.githubusercontent.com/u/1243210?v=4",
			github: "https://github.com/nonoesp",
			role: "Host of Getting Simple",
			x: "https://x.com/nonoesp"
		},
		{
			name: "ZerGo0",
			handle: "ZerGo0",
			avatar: "https://avatars.githubusercontent.com/u/18653821?v=4",
			github: "https://github.com/ZerGo0",
			role: "Software Engineer"
		},
		{
			name: "Francisco Sainz",
			handle: "pacosw1",
			avatar: "https://avatars.githubusercontent.com/u/12486003?v=4",
			github: "https://github.com/pacosw1"
		},
		{
			name: "Joe Krump",
			handle: "joekrump",
			avatar: "https://avatars.githubusercontent.com/u/3317231?v=4",
			github: "https://github.com/joekrump",
			role: "Senior Software Developer"
		},
		{
			name: "Yashash Pugalia",
			handle: "yashash-pugalia",
			avatar: "https://avatars.githubusercontent.com/u/89068816?v=4",
			github: "https://github.com/yashash-pugalia",
			x: "https://x.com/yashash_pugalia"
		},
		{
			name: "Ever",
			handle: "ruizdiazever",
			avatar: "https://avatars.githubusercontent.com/u/29817086?v=4",
			github: "https://github.com/ruizdiazever",
			role: "Developer",
			x: "https://x.com/everruizdiazo"
		},
		{
			name: "Hunter Johnston",
			handle: "huntabyte",
			avatar: "https://avatars.githubusercontent.com/u/64506580?v=4",
			github: "https://github.com/huntabyte",
			x: "https://x.com/huntabyte"
		},
		{
			name: "hahaha-helpme",
			handle: "hahaha-helpme",
			avatar: "https://avatars.githubusercontent.com/u/43705134?v=4",
			github: "https://github.com/hahaha-helpme"
		}
	];
</script>

<Seo
	title="Sponsors"
	description="Meet the sponsors supporting Bhide Svelte's open-source Svelte components, and learn how to fund continued development through GitHub Sponsors."
	keywords={[
		"support open source Svelte",
		"GitHub Sponsors",
		"Svelte sponsorship",
		"Bhide Svelte sponsors",
		"Svelte components",
		"Svelte open source",
		"fund open source development",
		"Svelte UI library",
		"Chanhdai components",
		"Sikandar Bhide"
	]}
/>

<main class="font-figtree min-h-[calc(100vh-4rem)] px-4 py-10 sm:py-14">
	<div class="mx-auto w-full max-w-3xl">
		<header
			class="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"
		>
			<div class="max-w-2xl">
				<h1 class="text-3xl font-gp-circle sm:text-4xl">Sponsors</h1>
				<p class="mt-3 text-muted-foreground font-cursive">
					If you like my work, consider supporting me on GitHub.
				</p>
			</div>

			<Button
				href={sponsorUrl}
				target="_blank"
				rel="noreferrer"
				class="rounded-full px-4"
			>
				Support my work
			</Button>
		</header>

		<section class="py-9" aria-labelledby="current-sponsors">
			<div class="mb-5">
				<h2 id="current-sponsors" class="text-xl font-semibold">
					Current sponsor
				</h2>
			</div>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each currentSponsors as sponsor (sponsor.handle)}
					<CurrentSponsor {...sponsor} />
				{/each}
			</div>
		</section>

		<section
			class="py-4 border-t border-dashed border-ink/40 dark:border-muted"
			aria-labelledby="past-sponsors"
		>
			<div class="mb-5">
				<h2 id="past-sponsors" class="text-xl font-semibold">
					Past sponsors
				</h2>
			</div>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
				{#each pastSponsors as sponsor (sponsor.handle)}
					<article class="min-w-0 p-2">
						<div
							class="relative aspect-square w-full p-1.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-dashed after:border-ink/40 after:content-['']"
						>
							<img
								src={sponsor.avatar}
								alt={sponsor.name}
								class="size-full rounded-lg border-2 border-border object-cover"
								loading="lazy"
							/>
						</div>

						<div class="mt-3 pl-1">
							<h3
								class="truncate text-sm font-semibold text-foreground"
							>
								{sponsor.name}
							</h3>
							<p
								class="mt-0.5 truncate text-xs text-muted-foreground"
							>
								{sponsor.role ?? `@${sponsor.handle}`}
							</p>

							<div class="mt-2 flex items-center gap-1">
								{#if sponsor.x}
									<Button
										href={sponsor.x}
										target="_blank"
										rel="noreferrer"
										variant="ghost"
										size="icon-xs"
										aria-label={`${sponsor.name} on X`}
									>
										<X class="size-3" />
									</Button>
								{/if}

								<Button
									href={sponsor.github}
									target="_blank"
									rel="noreferrer"
									variant="ghost"
									size="icon-xs"
									aria-label={`${sponsor.name} on GitHub`}
								>
									<Github class="size-3.5" />
								</Button>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>
	</div>
</main>
