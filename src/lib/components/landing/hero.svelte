<script lang="ts">
	import { resolve } from "$app/paths";
	import FaviconLink from "$lib/components/docs/base/main/favicon-link.svelte";
	import { Button } from "$lib/components/ui/button";
	import { components } from "$lib/registry/components";
	import { Annotation } from "$ui/annotation";
	import { mode } from "mode-watcher";
	let faviconUrl = $derived.by(() => {
		if (mode.current === "dark") {
			return "https://assets.chanhdai.com/images/favicon-dark.svg";
		} else {
			return "https://assets.chanhdai.com/images/favicon.ico";
		}
	});
</script>

<section class="mx-auto w-full max-w-6xl overflow-hidden py-20 sm:py-24">
	{#if mode.current === "dark"}
		<div
			aria-hidden="true"
			class="absolute inset-0 size-full overflow-hidden"
		>
			<div
				class="absolute inset-0 isolate -z-10 bg-[radial-gradient(20%_80%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]"
			></div>
		</div>
	{/if}

	<div class="relative z-10 flex max-w-3xl flex-col px-4">
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
			class="animate-in text-4xl leading-tight font-medium text-balance text-foreground delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl"
		>
			Svelte Chan Components
		</h1>

		<p
			class="mt-5 max-w-3xl animate-in text-sm lg:text-base leading-8 font-medium font-mono text-muted-foreground delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			A Svelte port of {components.length} components from
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
		</p>

		<div
			class="mt-10 flex w-fit animate-in items-center justify-center gap-3 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			<Button
				href={resolve("/(main)/components/elastic-slider")}
				variant="ink">View Components</Button
			>
		</div>
	</div>
</section>
