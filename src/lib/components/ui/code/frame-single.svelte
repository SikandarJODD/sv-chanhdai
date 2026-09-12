<script lang="ts">
	import { TypeScript } from "$lib/components/icons";
	import { Svelte, Terminal, CSS, Markdown } from "$lib/components/icons";
	import * as Code from "$lib/components/ui/code";
	import * as Frame from "$lib/components/ui/frame";
	import type { CodeBlock } from "$lib/types/code";
	import CopyButton from "../copy-button/copy-button.svelte";
	import Button from "../button/button.svelte";
	import ScrollFadeEffect from "../scroll-area/scroll-fade-effect.svelte";
	import { untrack } from "svelte";

	type Props = {
		code: CodeBlock;
		faded?: boolean;
	};
	let { code, faded = false }: Props = $props();
	let isCollapsed = $state(untrack(() => code.isExpand ?? false));
	let toggleCollapsed = () => {
		isCollapsed = !isCollapsed;
	};
</script>

<Frame.Root class="w-full rounded-xl p-0.5">
	<Frame.Header
		class="flex-row items-center justify-between gap-2 py-0 pr-1 pl-4"
	>
		<div class="flex min-w-0 items-center gap-1.5">
			{#if code.lang === "svelte"}
				<Svelte />
			{:else if code.lang === "typescript"}
				<TypeScript />
			{:else if code.lang === "css"}
				<CSS />
			{:else if code.lang === "markdown"}
				<Markdown />
			{:else if code.lang === "bash"}
				<Terminal />
			{:else}
				<Svelte />
			{/if}
			<Frame.Title
				class="truncate font-mono text-xs font-medium text-primary"
			>
				{code.name}
			</Frame.Title>
		</div>
		<div class="flex items-center gap-1">
			{#if code.isExpand}
				<Button variant="ghost" size="sm" onclick={toggleCollapsed}>
					{#if isCollapsed}
						Expand
					{:else}
						Collapse
					{/if}
				</Button>
			{/if}
			<CopyButton size="icon-sm" text={code.code} />
		</div>
	</Frame.Header>
	<Frame.Panel class="overflow-hidden p-0">
		{#if isCollapsed}
			<Code.Overflow
				bind:collapsed={isCollapsed}
				class="max-h-[500px]  overflow-auto data-[collapsed=true]:overflow-y-hidden"
			>
				<Code.Root
					lang={code.lang || "svelte"}
					class="w-full rounded-none border-none  min-h-50"
					code={code.code}
					highlight={code.highlight}
					hideLines={code.hideLines ?? false}
				>
					<!-- <Code.CopyButton /> -->
				</Code.Root>
			</Code.Overflow>
		{:else}
			{#if faded}
				<ScrollFadeEffect class="max-h-[600px]">
					<Code.Root
						lang={code.lang || "svelte"}
						class="h-auto w-full overflow-visible rounded-none border-none bg-background"
						code={code.code}
						highlight={code.highlight}
						hideLines={code.hideLines ?? false}
					></Code.Root>
				</ScrollFadeEffect>
			{:else}
				<div class="no-scrollbar max-h-[600px] overflow-auto">
					<Code.Root
						lang={code.lang || "svelte"}
						class="h-auto w-full overflow-visible rounded-none border-none bg-background [&_pre]:no-scrollbar"
						code={code.code}
						highlight={code.highlight}
						hideLines={code.hideLines ?? false}
					></Code.Root>
				</div>
			{/if}
		{/if}
	</Frame.Panel>
</Frame.Root>
