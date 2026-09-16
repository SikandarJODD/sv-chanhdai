<script lang="ts" module>
	export type TOCItemType = {
		title: string;
		url: string;
		depth: number;
	};

	export type TOCMinimapProps = {
		items: TOCItemType[];
		class?: string;
	};
</script>

<script lang="ts">
	import * as HoverCard from "$lib/components/ui/hover-card";
	import { cn } from "$lib/utils.js";
	import type { Attachment } from "svelte/attachments";

	let { items, class: className }: TOCMinimapProps = $props();

	let activeHeading = $state<string | null>(null);
	let open = $state(false);

	function getItemId(url: string) {
		return url.replace("#", "");
	}

	function observeHeadings(itemIds: string[]): Attachment<HTMLElement> {
		return () => {
			activeHeading = null;

			const observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							activeHeading = entry.target.id;
						}
					}
				},
				{ rootMargin: "0% 0% -80% 0%", threshold: 0.98 }
			);

			for (const id of itemIds) {
				const element = document.getElementById(id);
				if (element) observer.observe(element);
			}

			return () => observer.disconnect();
		};
	}

	function handleItemClick(event: MouseEvent) {
		event.preventDefault();

		const url =
			(event.currentTarget as HTMLAnchorElement).getAttribute("href") ??
			"";

		history.pushState(null, "", url);
		document.getElementById(getItemId(url))?.scrollIntoView({
			behavior: "smooth"
		});
	}
</script>

{#if items.length}
	<div
		{@attach observeHeadings(items.map((item) => getItemId(item.url)))}
		class={cn("ml-auto w-18", className)}
	>
		<HoverCard.Root bind:open openDelay={0} closeDelay={0}>
			<HoverCard.Trigger>
				{#snippet child({ props })}
					<div
						{...props}
						class={cn(
							"flex max-h-[50dvh] flex-col gap-3 overflow-hidden py-3 pl-6 opacity-100 transition-opacity duration-200",
							open && "opacity-0"
						)}
					>
						{#each items as item (item.url)}
							<div
								data-depth={item.depth}
								data-active={item.url === `#${activeHeading}`
									? ""
									: undefined}
								class={cn(
									"h-0.5 w-6 shrink-0 rounded-xs bg-ring/50 transition-[background-color] duration-200",
									"data-[depth=3]:ml-2 data-[depth=3]:w-4",
									"data-[depth=4]:ml-4 data-[depth=4]:w-2",
									"data-active:bg-foreground"
								)}
							></div>
						{/each}
					</div>
				{/snippet}
			</HoverCard.Trigger>

			<HoverCard.Content
				class="w-56 overflow-hidden p-0 duration-200 data-[side=left]:slide-in-from-right-3 data-[side=left]:slide-out-to-right-3 data-open:zoom-in-100 data-closed:zoom-out-100"
				align="start"
				alignOffset={0}
				side="left"
				sideOffset={-60}
			>
				<div
					class="flex max-h-[50dvh] overflow-y-auto overscroll-contain"
				>
					<ul class="flex size-full flex-col px-6 py-4 text-sm">
						{#each items as item (item.url)}
							<li class="flex py-1">
								<a
									href={item.url}
									data-depth={item.depth}
									data-active={item.url ===
									`#${activeHeading}`
										? ""
										: undefined}
									class={cn(
										"line-clamp-2 w-full transition-[color] duration-200",
										"text-muted-foreground hover:text-foreground data-active:text-foreground",
										"data-[depth=3]:pl-4 data-[depth=4]:pl-8"
									)}
									onclick={handleItemClick}
								>
									{item.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>
	</div>
{/if}
