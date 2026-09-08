<script lang="ts">
	import { DotGridSpotlight } from "$lib/components/chan/dot-grid-spotlight";

	const DemoComponent: any = DotGridSpotlight;
</script>

<section class="flex w-full flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
	<div class="space-y-1">
		<h2 class="text-lg font-semibold">Dot Grid Spotlight demo</h2>
		<p class="text-sm text-muted-foreground">
			Swap this placeholder with a real usage example for Dot Grid Spotlight.
		</p>
	</div>
	<div class="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 p-6">
		<DemoComponent />
	</div>
</section>
