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
		iconBlur={18}
		iconSaturate={7}
		iconBrightness={1.6}
		iconScale={5}
		iconOpacity={0.5}
		borderWidth={4}
		borderBlur={8}
		borderSaturate={6}
		borderBrightness={3}
		borderContrast={3}
		class="md:grid-cols-2"
	>
		{#each PROFILES as profile (profile.name)}
			<GlowCard {...profile} />
		{/each}
	</GlowCardGrid>
</div>
