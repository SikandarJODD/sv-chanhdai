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
	import RotateCw from "@lucide/svelte/icons/rotate-cw";
	import { cn } from "#lib/utils.js";
	import * as Frame from "#lib/components/ui/frame/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import ArrowUpRightCircle from "./arrow-up-right-circle.svelte";

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

	<Frame.Footer class="p-0.5 pt-1">
		<a
			class="group flex w-full items-center justify-between rounded-full py-1.5 pr-1 pl-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
			{href}
			aria-label={`Visit ${name}`}
		>
			<h3 class="font-mono text-xs font-medium md:text-sm">{name}</h3>
			<ArrowUpRightCircle
				class="size-5.5 opacity-80 transition-opacity duration-200 ease-out group-hover:opacity-100"
			/>
		</a>
	</Frame.Footer>
</Frame.Root>
