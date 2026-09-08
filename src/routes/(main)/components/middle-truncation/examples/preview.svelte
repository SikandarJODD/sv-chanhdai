<script lang="ts">
	import { MiddleTruncation } from "$chan/middle-truncation";
	import {
		ResizableHandle,
		ResizablePane,
		ResizablePaneGroup
	} from "$ui/resizable";
</script>

<ResizablePaneGroup direction="horizontal" class="w-full max-w-md">
	<ResizablePane minSize={30} defaultSize={100} class="pr-0.5">
		<div class="flex flex-col gap-6 rounded-xl border bg-card p-6 text-sm">
			<div class="flex w-full flex-col gap-1.5">
				<div
					class="truncate font-mono text-xs whitespace-nowrap text-muted-foreground"
				>
					{"<MiddleTruncation>"}
				</div>
				<MiddleTruncation
					class="font-mono text-foreground/70"
					text="/Users/ncdai/Code/chanhdai.com/src/components/ui/button.tsx"
				/>
			</div>

			<div class="flex w-full flex-col gap-1.5">
				<div
					class="truncate font-mono text-xs whitespace-nowrap text-muted-foreground"
				>
					{"<MiddleTruncation end={4}>"}
				</div>
				<MiddleTruncation
					class="font-mono text-foreground/70"
					text="FY26_Q1_Consolidated_Financial_Statements.pdf"
					end={4}
				/>
			</div>

			<div class="flex w-full flex-col gap-1.5">
				<div
					class="truncate font-mono text-xs whitespace-nowrap text-muted-foreground"
				>
					{"<MiddleTruncation minEnd={12}>"}
				</div>
				<MiddleTruncation
					class="font-mono text-foreground/70"
					text="/Users/ncdai/Code/chanhdai.com/node_modules/shadcn/package.json"
					minEnd={12}
				/>
			</div>

			<div class="flex w-full flex-col gap-1.5">
				<div
					class="truncate font-mono text-xs whitespace-nowrap text-muted-foreground"
				>
					{'<MiddleTruncation ellipsis=" ... ">'}
				</div>
				<MiddleTruncation
					class="font-mono text-foreground/70"
					text="https://www.apple.com/newsroom/pdfs/fy2026-q1/FY26_Q1_Consolidated_Financial_Statements.pdf"
					ellipsis=" ... "
				/>
			</div>
		</div>
	</ResizablePane>

	<ResizableHandle
		class="relative w-2 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:left-0.5 after:h-12 after:w-1.5 after:translate-x-0 after:-translate-y-1/2 after:rounded-full after:bg-foreground/10 after:transition-all hover:after:bg-foreground/20 focus-visible:ring-0 focus-visible:ring-offset-0 data-active:after:scale-y-125 data-active:after:bg-foreground/30"
	/>

	<ResizablePane minSize={0} defaultSize={0} />
</ResizablePaneGroup>
