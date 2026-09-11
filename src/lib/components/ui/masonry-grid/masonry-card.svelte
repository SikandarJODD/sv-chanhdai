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
</script>

<Frame.Root
	class={cn("h-full min-h-64 overflow-hidden rounded-2xl p-1", className)}
	{...restProps}
>
	<Frame.Panel
		class="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4 shadow-none before:shadow-none sm:p-5 dark:before:shadow-none"
	>
		{@render children()}
	</Frame.Panel>

	<Frame.Footer class="flex items-center justify-between pl-2 pr-1 py-1.5">
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
		<Button {href} variant="outline" size="icon-sm" class="shadow-none">
			<ExternalLink class="size-3.5" aria-hidden="true" />
		</Button>
	</Frame.Footer>
</Frame.Root>
