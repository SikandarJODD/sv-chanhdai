<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type MasonryCardProps = HTMLAttributes<HTMLDivElement> & {
		name: string;
		href: string;
		children: Snippet;
	};
</script>

<script lang="ts">
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import RotateCw from "@lucide/svelte/icons/rotate-cw";
	import { cn } from "$lib/utils";
	import * as Frame from "$lib/components/ui/frame";
	import { Button } from "$ui/button";

	let {
		name,
		href,
		children,
		class: className,
		...restProps
	}: MasonryCardProps = $props();

	let retryKey = $state(0);

	function handleRetry() {
		retryKey += 1;
	}

	import { MediaQuery } from "svelte/reactivity";

	const large = new MediaQuery("min-width: 800px");
</script>

<Frame.Root
	class={cn("h-full min-h-64 overflow-hidden rounded-2xl p-1", className)}
	{...restProps}
>
	<Frame.Panel
		class="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4 shadow-none before:shadow-none sm:p-5 dark:before:shadow-none"
	>
		<Button
			variant="secondary"
			size="icon-sm"
			onclick={handleRetry}
			class="group absolute top-1.5 right-1.5 z-30"
			aria-label={`Retry ${name}`}
			title={`Retry ${name}`}
		>
			<RotateCw
				class="opacity-50 transition-transform duration-200 ease-out group-hover:rotate-45"
				aria-hidden="true"
			/>
		</Button>

		{#key retryKey}
			{@render children()}
		{/key}
	</Frame.Panel>

	<Frame.Footer class="flex items-center justify-between py-1.5 pr-1 pl-2">
		<h3 class="font-mono text-xs font-medium text-muted-foreground">
			{name}
		</h3>

		<!-- <a
			class="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
			{href}
			aria-label={`Visit ${name}`}
		>
			<ExternalLink class="size-3.5" aria-hidden="true" />
		</a> -->
		<Button
			{href}
			variant="outline"
			size={large.current ? "sm" : "icon-sm"}
			class={cn(
				"font-normal shadow-none",
				large.current ? "rounded-full px-3 py-1 text-xs" : ""
			)}
		>
			{#if large.current}
				View
			{/if}
			{#if !large.current}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					viewBox="0 0 24 24"
					fill="none"
					class="mb-0.5 ml-0.5 -rotate-45"
					><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.98744 2.95325C2.67201 2.29971 3.75513 2.01313 4.80282 2.48035L21.3125 9.84285C23.229 10.6975 23.229 13.3032 21.3125 14.1579L4.80282 21.5204C3.75513 21.9876 2.67201 21.701 1.98744 21.0475C1.2971 20.3884 0.978305 19.3122 1.52928 18.2802L4.68131 12.3765L5.34291 12.7298L4.68131 12.3765C4.8086 12.1381 4.8086 11.8626 4.68131 11.6242L1.52928 5.72049C0.978304 4.68853 1.2971 3.6123 1.98744 2.95325ZM3.02323 4.03821C2.74905 4.29996 2.66253 4.65823 2.85249 5.01402L2.19088 5.36725L2.85249 5.01402L6.00452 10.9177C6.36753 11.5976 6.36753 12.4031 6.00452 13.083L2.85249 18.9867C2.66253 19.3425 2.74905 19.7008 3.02323 19.9625C3.30317 20.2298 3.74374 20.3503 4.19189 20.1504L20.7016 12.7879C21.4326 12.4619 21.4327 11.5388 20.7016 11.2128L4.19189 3.8503C3.74374 3.65045 3.30317 3.77096 3.02323 4.03821Z"
						fill="currentColor"
					></path></svg
				>
			{/if}
		</Button>
	</Frame.Footer>
</Frame.Root>
