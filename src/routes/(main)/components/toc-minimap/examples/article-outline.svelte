<script lang="ts">
	import type { Heading } from "#lib/hooks/use-toc.svelte.js";
	import { UseToc } from "#lib/hooks/use-toc.svelte.js";
	import type { TOCItemType } from "#lib/components/chan/toc-minimap/index.js";
	import { TOCMinimap } from "#lib/components/chan/toc-minimap/index.js";

	let toc = new UseToc();

	function tocContainer(element: HTMLElement) {
		toc.ref = element;

		return () => {
			toc.ref = undefined;
		};
	}

	function toMinimapItems(headings: Heading[]): TOCItemType[] {
		return headings.flatMap((heading) => [
			...(heading.id
				? [
						{
							title: heading.label,
							url: `#${heading.id}`,
							depth: heading.level
						}
					]
				: []),
			...toMinimapItems(heading.children)
		]);
	}

	let items = $derived(toMinimapItems(toc.current));
</script>

<div class="mx-auto flex w-full max-w-lg items-start gap-6">
	<article
		{@attach tocContainer}
		class="min-w-0 flex-1 space-y-6 text-sm text-muted-foreground"
	>
		<section class="space-y-2">
			<h2
				id="project-overview"
				class="text-base font-medium text-foreground"
			>
				Project overview
			</h2>
			<p>A concise plan for shipping the next product update.</p>
		</section>

		<section class="space-y-2">
			<h2 id="requirements" class="text-base font-medium text-foreground">
				Requirements
			</h2>
			<p>
				Define the scope, owners, and success criteria before
				development.
			</p>
		</section>

		<section class="space-y-2 pl-4">
			<h3 id="milestones" class="text-base font-medium text-foreground">
				Milestones
			</h3>
			<p>Review the prototype, run QA, and prepare the release.</p>
		</section>
	</article>

	<TOCMinimap {items} class="sticky top-4" />
</div>
