<script lang="ts">
	import "./layout.css";
	import favicon from "#lib/assets/favicon.svg";
	import { activeElement, PressedKeys } from "runed";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Header } from "#lib/components/landing/header/index.js";
	import { Toaster } from "#lib/components/ui/sonner/index.js";

	let { children } = $props();
	let keys = new PressedKeys();

	keys.onKeys(["d"], () => {
		if (
			activeElement.current?.localName === "input" ||
			activeElement.current?.localName === "textarea"
		)
			return;

		toggleMode();
	});
</script>

<Toaster position="top-center" />

<ModeWatcher defaultMode="dark" />
<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta
		name="theme-color"
		media="(prefers-color-scheme: light)"
		content="#ffffff"
	/>
	<meta
		name="theme-color"
		media="(prefers-color-scheme: dark)"
		content="#0a0a0a"
	/>
	<meta name="color-scheme" content="light dark" />
</svelte:head>
<Header />
{@render children()}
