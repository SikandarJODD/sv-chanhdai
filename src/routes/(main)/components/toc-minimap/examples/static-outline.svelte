<script lang="ts">
	import type { TOCItemType } from "$chan/toc-minimap";
	import { TOCMinimap } from "$chan/toc-minimap";

	const items: TOCItemType[] = [
		{ title: "Features", url: "#static-features", depth: 2 },
		{
			title: "Keyboard support",
			url: "#static-keyboard-support",
			depth: 3
		},
		{ title: "Configuration", url: "#static-configuration", depth: 2 }
	];
</script>

<div class="mx-auto flex w-full max-w-lg items-start gap-6">
	<article class="min-w-0 flex-1 space-y-6 text-sm text-muted-foreground">
		<section class="space-y-2">
			<h2 id="static-features" class="text-base font-medium text-foreground">
				Features
			</h2>
			<p>A compact overview of the product's main capabilities.</p>
		</section>

		<section class="space-y-2 pl-4">
			<h3
				id="static-keyboard-support"
				class="text-base font-medium text-foreground"
			>
				Keyboard support
			</h3>
			<p>Navigate every interactive element without a pointer.</p>
		</section>

		<section class="space-y-2">
			<h2
				id="static-configuration"
				class="text-base font-medium text-foreground"
			>
				Configuration
			</h2>
			<p>Adjust the component to match your page structure.</p>
		</section>
	</article>

	<TOCMinimap {items} class="sticky top-4" />
</div>
