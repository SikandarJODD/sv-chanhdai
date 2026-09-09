<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type GlowCardGridProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		/** @default 16 */
		cardRadius?: number;
		/** @default 25 */
		iconBlur?: number;
		/** @default 5 */
		iconSaturate?: number;
		/** @default 1.3 */
		iconBrightness?: number;
		/** @default 4 */
		iconScale?: number;
		/** @default 0.3 */
		iconOpacity?: number;
		/** @default 3 */
		borderWidth?: number;
		/** @default 10 */
		borderBlur?: number;
		/** @default 4.2 */
		borderSaturate?: number;
		/** @default 2.5 */
		borderBrightness?: number;
		/** @default 2.5 */
		borderContrast?: number;
		children: Snippet;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";

	let {
		ref = $bindable(null),
		cardRadius = 16,
		iconBlur = 25,
		iconSaturate = 5,
		iconBrightness = 1.3,
		iconScale = 4,
		iconOpacity = 0.3,
		borderWidth = 3,
		borderBlur = 10,
		borderSaturate = 4.2,
		borderBrightness = 2.5,
		borderContrast = 2.5,
		children,
		class: className,
		style,
		...restProps
	}: GlowCardGridProps = $props();

	const gridStyle = $derived(
		[
			`--card-radius:${cardRadius}px`,
			`--card-icon-blur:${iconBlur}px`,
			`--card-icon-saturate:${iconSaturate}`,
			`--card-icon-brightness:${iconBrightness}`,
			`--card-icon-scale:${iconScale}`,
			`--card-icon-opacity:${iconOpacity}`,
			`--card-border-width:${borderWidth}px`,
			`--card-border-blur:${borderBlur}px`,
			`--card-border-saturate:${borderSaturate}`,
			`--card-border-brightness:${borderBrightness}`,
			`--card-border-contrast:${borderContrast}`,
			style
		]
			.filter(Boolean)
			.join(";")
	);

	onMount(() => {
		function handlePointerMove(event: PointerEvent) {
			if (!ref) return;

			const cards = ref.querySelectorAll<HTMLElement>(
				"[data-slot='glow-card']"
			);

			for (const card of cards) {
				const rect = card.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const x = (event.clientX - centerX) / (rect.width / 2);
				const y = (event.clientY - centerY) / (rect.height / 2);

				card.style.setProperty("--pointer-x", x.toFixed(3));
				card.style.setProperty("--pointer-y", y.toFixed(3));
			}
		}

		document.addEventListener("pointermove", handlePointerMove);

		return () =>
			document.removeEventListener("pointermove", handlePointerMove);
	});
</script>

<div
	bind:this={ref}
	data-slot="glow-card-grid"
	class={cn("grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3", className)}
	style={gridStyle}
	{...restProps}
>
	{@render children()}
</div>
