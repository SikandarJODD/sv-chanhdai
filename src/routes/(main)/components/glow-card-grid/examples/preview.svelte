<script lang="ts">
	import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

	const CARDS = [
		{
			name: "shadcn",
			handle: "@shadcn",
			avatar: "https://unavatar.io/x/shadcn"
		},
		{
			name: "Guillermo Rauch",
			handle: "@rauchg",
			avatar: "https://unavatar.io/x/rauchg"
		},
		{
			name: "Bhide Svelte",
			handle: "@Sikandar_Bhide",
			avatar: "https://unavatar.io/x/Sikandar_Bhide"
		},
		{
			name: "Shu",
			handle: "@shuding",
			avatar: "https://unavatar.io/x/shuding"
		},
		{
			name: "Emil Kowalski",
			handle: "@emilkowalski",
			avatar: "https://unavatar.io/x/emilkowalski"
		},
		{
			name: "Chánh Đại",
			handle: "@iamncdai",
			avatar: "https://unavatar.io/x/iamncdai"
		}
	];
</script>

<div class="w-full p-4">
	<GlowCardGrid>
		{#each CARDS as card (card.name)}
			<GlowCard
				name={card.name}
				handle={card.handle}
				avatar={card.avatar}
			/>
		{/each}
	</GlowCardGrid>
</div>
