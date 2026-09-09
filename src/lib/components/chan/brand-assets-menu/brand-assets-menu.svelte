<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type BrandAssetsMenuProps = {
		logomark: Snippet;
		logomarkSVG: string;
		logotypeSVG: string;
		brandGuidelinesURL: string;
		brandAssetsURL: string;
		children: Snippet<[{ props: Record<string, unknown> }]>;
	};
</script>

<script lang="ts">
	import * as ContextMenu from "$lib/components/ui/context-menu";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import SquareDashedIcon from "@lucide/svelte/icons/square-dashed";
	import TypeIcon from "@lucide/svelte/icons/type";
	import { toast } from "svelte-sonner";

	let {
		logomark,
		logomarkSVG,
		logotypeSVG,
		brandGuidelinesURL,
		brandAssetsURL,
		children
	}: BrandAssetsMenuProps = $props();

	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			return false;
		}
	}

	function copyLogomark() {
		void copyText(logomarkSVG);
		toast.success("Logomark as SVG copied");
	}

	function copyLogotype() {
		void copyText(logotypeSVG);
		toast.success("Logotype as SVG copied");
	}
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		{#snippet child({ props })}
			{@render children({ props })}
		{/snippet}
	</ContextMenu.Trigger>

	<ContextMenu.Content class="w-fit">
		<ContextMenu.Item onSelect={copyLogomark}>
			{@render logomark()}
			Copy Logomark as SVG
		</ContextMenu.Item>

		<ContextMenu.Item onSelect={copyLogotype}>
			<TypeIcon />
			Copy Logotype as SVG
		</ContextMenu.Item>

		<ContextMenu.Separator />

		<ContextMenu.Item>
			{#snippet child({ props })}
				<a
					{...props}
					href={brandGuidelinesURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<SquareDashedIcon />
					Brand Guidelines
				</a>
			{/snippet}
		</ContextMenu.Item>

		<ContextMenu.Item>
			{#snippet child({ props })}
				<a
					{...props}
					href={brandAssetsURL}
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					<DownloadIcon />
					Download Brand Assets
				</a>
			{/snippet}
		</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
