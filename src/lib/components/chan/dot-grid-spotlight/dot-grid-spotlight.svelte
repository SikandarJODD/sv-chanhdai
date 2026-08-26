<script lang="ts" module>
	import type { HTMLCanvasAttributes } from "svelte/elements";

	export type DotGridSpotlightProps = Omit<
		HTMLCanvasAttributes,
		"class" | "height" | "onmouseleave" | "onmousemove" | "width"
	> & {
		/** The base color of the inactive dots. */
		dotColor?: string;
		/** The color of dots illuminated by the cursor. */
		activeDotColor?: string;
		/** The distance between dots in pixels. @default 10 */
		spacing?: number;
		/** The radius of inactive dots. @default 1 */
		baseRadius?: number;
		/** The radius of a dot at the cursor center. @default 2 */
		activeRadius?: number;
		/** The spotlight radius in pixels. @default 128 */
		interactionRadius?: number;
		/** The alpha at the cursor center. @default 1 */
		activeMaxAlpha?: number;
		/** The alpha at the spotlight edge. @default 0.5 */
		activeMinAlpha?: number;
		/** Bindable reference to the canvas element. */
		ref?: HTMLCanvasElement | null;
		class?: string;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import { watch } from "runed";

	let {
		ref = $bindable(null),
		dotColor = "rgba(255, 255, 255, 0.05)",
		activeDotColor = "rgba(255, 255, 255, 0.1)",
		spacing = 10,
		baseRadius = 1,
		activeRadius = 2,
		interactionRadius = 128,
		activeMaxAlpha = 1,
		activeMinAlpha = 0.5,
		class: className,
		...restProps
	}: DotGridSpotlightProps = $props();

	let context: CanvasRenderingContext2D | null = null;
	let width = 0;
	let height = 0;
	let renderFrameId: number | null = null;
	let readyFrameId: number | null = null;
	let ready = $state(false);

	const mouse = { x: -1000, y: -1000, isActive: false };

	function draw() {
		if (!context || width === 0 || height === 0) return;

		context.clearRect(0, 0, width, height);

		const gridSpacing = Math.max(1, spacing);
		// Center the pattern so partial cells are balanced on opposite edges.
		const offsetX = (width % gridSpacing) / 2;
		const offsetY = (height % gridSpacing) / 2;

		for (let x = offsetX; x <= width; x += gridSpacing) {
			for (let y = offsetY; y <= height; y += gridSpacing) {
				const distance = Math.hypot(x - mouse.x, y - mouse.y);
				let currentRadius = baseRadius;
				let currentColor = dotColor;
				let currentAlpha = 1;

				if (
					mouse.isActive &&
					interactionRadius > 0 &&
					distance < interactionRadius
				) {
					const factor = 1 - distance / interactionRadius;
					currentRadius =
						baseRadius + (activeRadius - baseRadius) * factor;
					currentColor = activeDotColor;
					currentAlpha =
						activeMinAlpha +
						(activeMaxAlpha - activeMinAlpha) * factor;
				}

				context.globalAlpha = currentAlpha;
				context.beginPath();
				context.arc(x, y, Math.max(0, currentRadius), 0, Math.PI * 2);
				context.fillStyle = currentColor;
				context.fill();
			}
		}

		context.globalAlpha = 1;
	}

	function scheduleDraw() {
		if (!context || renderFrameId !== null) return;

		// Coalesce rapid mouse updates into one draw per animation frame.
		renderFrameId = requestAnimationFrame(() => {
			draw();
			renderFrameId = null;
		});
	}

	function resizeCanvas() {
		if (!ref?.parentElement || !context) return;

		const dpr = window.devicePixelRatio || 1;
		width = ref.parentElement.clientWidth;
		height = ref.parentElement.clientHeight;

		if (width === 0 || height === 0) return;

		ref.width = Math.round(width * dpr);
		ref.height = Math.round(height * dpr);
		ref.style.width = `${width}px`;
		ref.style.height = `${height}px`;
		context.setTransform(dpr, 0, 0, dpr, 0, 0);
		draw();

		if (!ready && readyFrameId === null) {
			readyFrameId = requestAnimationFrame(() => {
				ready = true;
				readyFrameId = null;
			});
		}
	}

	function handleMouseMove(event: MouseEvent) {
		if (!ref) return;

		const rect = ref.getBoundingClientRect();
		mouse.x = event.clientX - rect.left;
		mouse.y = event.clientY - rect.top;
		mouse.isActive = true;
		scheduleDraw();
	}

	function handleMouseLeave() {
		mouse.isActive = false;
		scheduleDraw();
	}

	watch(
		[
			() => spacing,
			() => baseRadius,
			() => activeRadius,
			() => interactionRadius,
			() => dotColor,
			() => activeDotColor,
			() => activeMaxAlpha,
			() => activeMinAlpha
		],
		scheduleDraw,
		{ lazy: true }
	);

	onMount(() => {
		if (!ref) return;

		context = ref.getContext("2d");
		if (!context) return;

		const resizeObserver = new ResizeObserver(resizeCanvas);
		if (ref.parentElement) resizeObserver.observe(ref.parentElement);
		resizeCanvas();

		return () => {
			resizeObserver.disconnect();
			if (renderFrameId !== null) cancelAnimationFrame(renderFrameId);
			if (readyFrameId !== null) cancelAnimationFrame(readyFrameId);
		};
	});
</script>

<canvas
	bind:this={ref}
	data-slot="dot-grid-spotlight"
	data-ready={ready}
	class={cn(
		"pointer-events-auto absolute inset-0 block opacity-0 transition-opacity! duration-500 data-[ready=true]:opacity-100",
		className
	)}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	{...restProps}
></canvas>
