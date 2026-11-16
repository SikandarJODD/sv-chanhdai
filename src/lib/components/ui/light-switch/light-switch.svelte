<script lang="ts" module>
	export type LightSwitchProps = {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};
</script>

<script lang="ts">
	import SunIcon from "@lucide/svelte/icons/sun";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
	import Kbd from "../kbd/kbd.svelte";
	import {
		Button,
		buttonVariants,
		type ButtonSize,
		type ButtonVariant
	} from "#lib/components/ui/button/index.js";

	let { variant = "ghost", size = "default" }: LightSwitchProps = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger
			class={buttonVariants({ variant, size })}
			onclick={toggleMode}
		>
			<MoonIcon class="hidden dark:block" />
			<SunIcon class="block dark:hidden" />
			<span class="sr-only">Toggle theme</span>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Toggle theme</p>
			<Kbd>D</Kbd>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
