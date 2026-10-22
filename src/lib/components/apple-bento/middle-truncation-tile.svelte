<script lang="ts">
	import { MiddleTruncation } from "$chan/middle-truncation";
	import {
		ResizableHandle,
		ResizablePane,
		ResizablePaneGroup
	} from "$ui/resizable";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const files = [
		{
			name: "responsive-component-preview.svelte",
			className: "text-orange-500",
			end: 7
		},
		{
			name: "apple-bento-component-layout.ts",
			className: "text-info",
			end: 3
		}
	];
</script>

<BentoTile class={className}>
	<ResizablePaneGroup direction="horizontal" class="w-full max-w-md">
		<ResizablePane
			minSize={35}
			defaultSize={100}
			class="flex items-center pr-0.5"
		>
			<div class="flex w-full min-w-0 flex-col gap-3 rounded-xl border bg-card p-5">
				{#each files as file (file.name)}
					<MiddleTruncation
						text={file.name}
						end={file.end}
						class={`font-mono text-sm ${file.className}`}
					/>
				{/each}
			</div>
		</ResizablePane>

		<ResizableHandle
			class="relative w-2 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:left-0.5 after:h-12 after:w-1.5 after:-translate-y-1/2 after:rounded-full after:bg-foreground/10 after:transition-all hover:after:bg-foreground/20 focus-visible:ring-0 focus-visible:ring-offset-0 data-active:after:scale-y-125 data-active:after:bg-foreground/30"
		/>

		<ResizablePane minSize={0} defaultSize={0} />
	</ResizablePaneGroup>
</BentoTile>
