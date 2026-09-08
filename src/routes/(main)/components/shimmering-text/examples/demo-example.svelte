<script lang="ts">
	import { ShimmeringText } from "$lib/components/chan/shimmering-text";

	const DemoComponent: any = ShimmeringText;
</script>

<section class="flex w-full flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
	<div class="space-y-1">
		<h2 class="text-lg font-semibold">Shimmering Text demo</h2>
		<p class="text-sm text-muted-foreground">
			Swap this placeholder with a real usage example for Shimmering Text.
		</p>
	</div>
	<div class="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 p-6">
		<DemoComponent />
	</div>
</section>
