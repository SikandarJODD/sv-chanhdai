<script lang="ts">
	import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

	const PROFILES = [
		{
			name: "Chánh Đại",
			handle: "@iamncdai",
			avatar: "https://unavatar.io/x/iamncdai"
		},
		{
			name: "Emil Kowalski",
			handle: "@emilkowalski",
			avatar: "https://unavatar.io/x/emilkowalski"
		}
	];
</script>

<div class="w-full p-4">
	<GlowCardGrid
		iconBlur={32}
		iconSaturate={2}
		iconOpacity={0.15}
		borderWidth={1}
		borderBlur={14}
		borderSaturate={2}
		borderBrightness={1.5}
		borderContrast={1.5}
		class="md:grid-cols-2"
	>
		{#each PROFILES as profile (profile.name)}
			<GlowCard {...profile} />
		{/each}
	</GlowCardGrid>
</div>
