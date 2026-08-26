<script lang="ts" module>
	export type ShareMenuProps = {
		/** Title passed to the native share sheet. */
		title: string;
		/** URL to share. Relative URLs are resolved against the current origin. */
		url: string;
	};
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import LinkIcon from "@lucide/svelte/icons/link";
	import ShareIcon from "@lucide/svelte/icons/share";
	import { toast } from "svelte-sonner";
	import LinkedInIcon from "./linkedin-icon.svelte";
	import XIcon from "./x-icon.svelte";

	let { title, url }: ShareMenuProps = $props();

	let origin = $state("");
	let canShare = $state(false);

	let absoluteUrl = $derived(
		url.startsWith("http") || !origin
			? url
			: new URL(url, origin).toString()
	);
	let urlEncoded = $derived(encodeURIComponent(absoluteUrl));

	onMount(() => {
		origin = window.location.origin;
		canShare = "share" in navigator;
	});

	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			return false;
		}
	}

	async function handleCopyLink() {
		await copyText(absoluteUrl);
		toast.success("Link copied");
	}

	function handleNativeShare(event: Event) {
		event.preventDefault();
		void navigator.share({ title, url: absoluteUrl }).catch(() => {});
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				size="icon-sm"
				aria-label="Share"
			>
				<ShareIcon />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content
		class="w-fit"
		align="start"
		alignOffset={-6}
		collisionPadding={16}
		onCloseAutoFocus={(event) => event.preventDefault()}
	>
		<DropdownMenu.Item onSelect={handleCopyLink}>
			<LinkIcon />
			Copy link
		</DropdownMenu.Item>

		<DropdownMenu.Item>
			{#snippet child({ props })}
				<a
					{...props}
					href={`https://x.com/intent/tweet?url=${urlEncoded}`}
					target="_blank"
					rel="noopener"
				>
					<XIcon />
					Share on X
				</a>
			{/snippet}
		</DropdownMenu.Item>

		<DropdownMenu.Item>
			{#snippet child({ props })}
				<a
					{...props}
					href={`https://www.linkedin.com/sharing/share-offsite?url=${urlEncoded}`}
					target="_blank"
					rel="noopener"
				>
					<LinkedInIcon />
					Share on LinkedIn
				</a>
			{/snippet}
		</DropdownMenu.Item>

		{#if canShare}
			<DropdownMenu.Item onSelect={handleNativeShare}>
				<EllipsisIcon />
				Other app
			</DropdownMenu.Item>
		{/if}
	</DropdownMenu.Content>
</DropdownMenu.Root>
