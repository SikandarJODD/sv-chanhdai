<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { createScroll } from "#lib/hooks/use-scroll.svelte.js";
	import Logo from "#lib/svg/logo.svelte";
	import { cn } from "#lib/utils.js";
	import DesktopNav from "./desktop-nav.svelte";
	import MobileNav from "./mobile-nav.svelte";
	import {
		GitHubButton,
		getStars
	} from "#lib/components/ui/github-button/index.js";
	import { onMount } from "svelte";
	import { X } from "#lib/svg/index.js";
	import { LightSwitch } from "#lib/components/ui/light-switch/index.js";
	import { github_repo } from "#lib/config/repo.js";
	import { page } from "$app/state";
	import SearchNavigation from "#lib/components/docs/layout/navigation/search-navigation.svelte";
	import ImportAliasToggle from "#lib/components/docs/base/import-alias/ImportAliasToggle.svelte";
	import { importAliasStyle } from "#lib/components/docs/base/import-alias/import-alias.svelte.js";

	let scroll = createScroll(50);
	let isComponentorDocsPage = $derived.by(() => {
		let path = page.url.pathname;
		return path.startsWith("/components") || path.startsWith("/docs");
	});
	let stars = $state(0);
	const repo = { owner: github_repo.owner, repo: github_repo.name };
	onMount(async () => {
		stars = await getStars({ ...repo, fallback: 0 });
	});
</script>

<header
	class={cn(
		"sticky top-0 z-50 w-full border-b border-transparent pt-[env(safe-area-inset-top,0px)]",
		scroll.scrolled &&
			"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
		isComponentorDocsPage &&
			"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50"
	)}
>
	<nav
		class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between pr-[max(1rem,env(safe-area-inset-right,0px))] pl-[max(1rem,env(safe-area-inset-left,0px))]"
	>
		<div class="flex items-center gap-5">
			<a
				class="rounded-lg hover:bg-muted dark:hover:bg-muted/50"
				href="/"
			>
				<Logo class="h-4.5" />
			</a>
			<DesktopNav />
		</div>
		<div class="flex items-center gap-1">
			{#if isComponentorDocsPage}
				<ImportAliasToggle bind:value={importAliasStyle.current} />
			{/if}
			<SearchNavigation />
			<div class="hidden items-center gap-1 md:flex">
				<Button
					variant="ghost"
					size="icon"
					target="_blank"
					href="https://x.com/Sikandar_Bhide"
					rel="noopener noreferrer"
				>
					<X />
				</Button>
				<GitHubButton {repo} {stars} />
				<LightSwitch />
			</div>
			<MobileNav />
		</div>
	</nav>
</header>
