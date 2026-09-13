<script lang="ts">
	import { resolve } from "$app/paths";
	import FaviconLink from "$lib/components/docs/base/main/favicon-link.svelte";
	import HeroIllustration from "$lib/components/landing/hero-illustration.svelte";
	import { Button } from "$lib/components/ui/button";
	import { components } from "$lib/registry/components";
	import { Github } from "$lib/svg";
	import { Annotation } from "$ui/annotation";
	import { mode } from "mode-watcher";
	import { MediaQuery } from "svelte/reactivity";

	let faviconUrl = $derived.by(() => {
		if (mode.current === "dark") {
			return "https://assets.chanhdai.com/images/favicon-dark.svg";
		} else {
			return "https://assets.chanhdai.com/images/favicon.ico";
		}
	});
	let large = new MediaQuery("min-width: 800px");
</script>

<section class="mx-auto w-full max-w-6xl overflow-hidden py-20 sm:py-24">
	{#if mode.current === "dark"}
		<div
			aria-hidden="true"
			class="absolute inset-0 size-full overflow-hidden -z-60"
		>
			<div
				class="absolute inset-0 isolate -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)] md:bg-[radial-gradient(20%_80%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]"
			></div>
		</div>
	{/if}

	<div
		class="relative z-10 grid items-center lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-4"
	>
		<div class="flex max-w-3xl flex-col px-6 md:px-4">
			<!-- <a
			class="group flex w-fit animate-in items-center gap-3 rounded-full border bg-card p-1 shadow-xs transition-all delay-50 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			href="/"
		>
			<div class="rounded-full border bg-card px-2 py-0.5 shadow-sm">
				<p class="font-mono text-xs">New</p>
			</div>

			<span class="text-xs">20 New Components</span>
			<span class="block h-5 border-l"></span>

			<div class="pr-1">
				<ArrowRight
					class="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5"
				/>
			</div>
		</a> -->

			<h1
				class="animate-in -ml-1 md:-ml-px font-gp-circle text-4xl leading-tight font-medium text-balance text-foreground delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl"
			>
				Svelte Chanhdai Components
			</h1>

			<div
				class="mt-5 max-w-3xl animate-in text-sm lg:text-base leading-8 font-medium font-mono text-muted-foreground delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			>
				A Svelte port of 20+ components from
				{#if large.current}
					<Annotation
						note="Original Creator"
						direction="n"
						rotate="-2deg"
						customColor={mode.current === "dark"
							? "#24DD84"
							: "lab(36 55.64 -107.68)"}
						noMark
					>
						<FaviconLink
							href="https://chanhdai.com"
							target="_blank"
							rel="noreferrer"
							class="mx-0"
							faviconSrc={faviconUrl}
						>
							Chánh Đại
						</FaviconLink>
					</Annotation>’s Portfolio
				{:else}
					<FaviconLink
						href="https://chanhdai.com"
						target="_blank"
						rel="noreferrer"
						class="mx-0"
						faviconSrc={faviconUrl}
					>
						Chánh Đại
					</FaviconLink>
					’s Portfolio
				{/if}
				<br />
				by
				<FaviconLink
					href="https://bhide.dev"
					target="_blank"
					rel="noreferrer"
					class=" text-orange-500 dark:text-orange-500 hover:text-orange-500/80"
					imageClass="rounded-full size-4.5"
				>
					Bhide Svelte
				</FaviconLink>
			</div>

			<div
				class="mt-10 -ml-1.5 lg:ml-0 flex w-fit animate-in items-center justify-center gap-3 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			>
				<Button
					href={resolve("/(main)/components/elastic-slider")}
					variant="ink"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						><g fill="currentColor"
							><circle
								cx="14.5"
								cy="8.5"
								r="2.5"
								fill="currentColor"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							></circle><rect
								x="5"
								y="12"
								width="5"
								height="5"
								rx="1"
								ry="1"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								fill="currentColor"
							></rect><path
								d="m5.1889,3.7146l-2.1169,3.5282c-.2.3333.0401.7572.4287.7572h4.2338c.3886,0,.6287-.424.4287-.7572l-2.1169-3.5282c-.1942-.3237-.6633-.3237-.8575,0Z"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								fill="currentColor"
							></path></g
						></svg
					>
					View Components</Button
				>
				<Button
					href="https://github.com/SikandarJODD/sv-chanhdai"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full px-4 shadow-none"
					variant="outline"
				>
					<Github />
					GitHub</Button
				>
			</div>
		</div>

		<HeroIllustration />
	</div>
</section>
