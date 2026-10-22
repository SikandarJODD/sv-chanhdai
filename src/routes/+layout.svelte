<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { activeElement, PressedKeys } from "runed";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Header } from "$lib/components/landing/header";
	import { browser, dev } from "$app/environment";
	import { Agentation } from "sv-agentation";
	import Footer from "$lib/components/landing/footer.svelte";
	import { Toaster } from "$ui/sonner";

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
<!-- {#if browser && dev}
	<Agentation deleteAllDelayMs={0} />
{/if} -->
<ModeWatcher defaultMode="dark" />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
