<script lang="ts" module>
	export type GlowCardProps = {
		name: string;
		handle: string;
		avatar: string;
		class?: string;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	let { name, handle, avatar, class: className }: GlowCardProps = $props();
</script>

<div
	data-slot="glow-card"
	class={cn(
		"@container-size relative h-52 w-full overflow-hidden rounded-(--card-radius) ring-1 ring-border transition-[translate,scale] select-none active:scale-[0.98]",
		className
	)}
>
	<div
		class="flex size-full overflow-hidden rounded-(--card-radius) [clip-path:inset(0_round_var(--card-radius))]"
	>
		<div
			class={cn(
				"pointer-events-none absolute inset-0 flex items-center justify-center",
				"translate-x-[calc(var(--pointer-x,-10)*50cqi)] translate-y-[calc(var(--pointer-y,-10)*50cqh)] translate-z-0 scale-(--card-icon-scale)",
				"blur-(--card-icon-blur) brightness-(--card-icon-brightness) saturate-(--card-icon-saturate)",
				"opacity-(--card-icon-opacity) will-change-[transform,filter]"
			)}
		>
			<img class="size-20" src={avatar} alt={name} />
		</div>

		<div class="z-1 flex flex-1 flex-col items-center justify-center gap-4">
			<img class="size-20 rounded-full" src={avatar} alt={name} />

			<div class="flex flex-col items-center gap-1">
				<h2
					class="text-foreground text-base leading-none font-semibold"
				>
					{name}
				</h2>
				<p class="text-foreground/50 text-sm leading-none">{handle}</p>
			</div>
		</div>
	</div>

	<div
		class={cn(
			"pointer-events-none absolute inset-0 translate-z-0 rounded-(--card-radius)",
			"border-(length:--card-border-width) border-solid border-transparent",
			"backdrop-blur-(--card-border-blur) backdrop-brightness-(--card-border-brightness) backdrop-contrast-(--card-border-contrast) backdrop-saturate-(--card-border-saturate)",
			"[clip-path:inset(0_round_var(--card-radius))]"
		)}
		style="mask-image: linear-gradient(#fff 0 100%), linear-gradient(#fff 0 100%); mask-origin: border-box, padding-box; mask-clip: border-box, padding-box; mask-composite: exclude; -webkit-mask-composite: xor;"
	></div>
</div>
