<script lang="ts">
	import { MonitorIcon, MoonIcon, SunIcon } from "@lucide/svelte";
	import { IconSwap, IconSwapItem } from "$chan/icon-swap";
	import { Button } from "$ui/button";
	const ICONS = {
		sun: SunIcon,
		moon: MoonIcon,
		monitor: MonitorIcon
	} as const;
	type IconKey = keyof typeof ICONS;
	let icon = $state<IconKey>("sun");
	const Icon = $derived(ICONS[icon]);

	const iconKeys = Object.keys(ICONS) as IconKey[];
</script>

<div class="flex flex-col items-center gap-4">
	<Button
		class="relative will-change-transform"
		variant="outline"
		size="icon-sm"
		aria-label={icon}
	>
		<IconSwap>
			{#key icon}
				<IconSwapItem>
					<Icon />
				</IconSwapItem>
			{/key}
		</IconSwap>
	</Button>

	<div class="flex gap-0.5 rounded-lg p-0.5">
		{#each iconKeys as key (key)}
			<Button
				class="rounded-md border-none capitalize"
				size="sm"
				variant={icon === key ? "secondary" : "ghost"}
				onclick={() => (icon = key)}
			>
				{key}
			</Button>
		{/each}
	</div>
</div>
