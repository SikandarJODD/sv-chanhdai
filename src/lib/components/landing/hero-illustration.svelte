<script lang="ts">
	import * as Rough from "@sveltecraft/rough";
</script>

<aside
	aria-label="Project highlights"
	class="relative hidden h-80 w-full animate-in delay-400 duration-700 ease-out fill-mode-backwards slide-in-from-bottom-8 fade-in lg:block"
>
	<Rough.SVG
		width={400}
		height={320}
		class="pointer-events-none absolute inset-0 size-full overflow-visible"
		aria-hidden="true"
		fill="none"
		stroke="var(--color-muted-foreground)"
		strokeWidth={1.4}
		roughness={1.8}
		bowing={1.4}
		seed={24}
	>
		<Rough.Curve
			points={[
				[226, 73],
				[268, 88],
				[286, 116]
			]}
			strokeLineDash={[7, 7]}
			disableMultiStroke={true}
		/>

		<Rough.Curve
			points={[
				[169, 174],
				[128, 188],
				[113, 210]
			]}
			strokeLineDash={[7, 7]}
			disableMultiStroke={true}
		/>

		<Rough.Ellipse
			x={345}
			y={53}
			width={32}
			height={16}
			stroke="var(--color-ink)"
			strokeWidth={1.2}
			strokeLineDash={[5, 5]}
		/>
		<Rough.Line
			x1={45}
			y1={180}
			x2={72}
			y2={180}
			stroke="var(--color-orange-500)"
		/>
		<Rough.Line
			x1={58}
			y1={167}
			x2={58}
			y2={194}
			stroke="var(--color-orange-500)"
		/>
		<Rough.Circle
			x={352}
			y={267}
			diameter={9}
			stroke="var(--color-emerald-500)"
			fill="var(--color-emerald-500)"
			fillStyle="hachure"
		/>
	</Rough.SVG>

	<ul
		class="contents font-cursive text-[0.925rem] leading-none font-semibold whitespace-nowrap"
	>
		<li
			class="absolute top-8 left-5 h-14 w-[204px] -rotate-3 text-ink dark:text-info"
		>
			<Rough.SVG
				width={204}
				height={56}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="currentColor"
				strokeWidth={1.8}
				roughness={1.5}
				bowing={1.2}
				seed={7}
			>
				<Rough.Path
					d="M 15 5 H 189 Q 199 5 199 15 V 41 Q 199 51 189 51 H 15 Q 5 51 5 41 V 15 Q 5 5 15 5 Z"
					fill="color-mix(in oklab, currentColor 10%, transparent)"
					fillStyle="hachure"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>20+ Components</span
			>
		</li>

		<li
			class="absolute top-30 right-4 h-14 w-[226px] rotate-2 text-orange-500"
		>
			<Rough.SVG
				width={226}
				height={56}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="var(--color-orange-500)"
				strokeWidth={1.8}
				roughness={1.55}
				bowing={1.3}
				seed={13}
			>
				<Rough.Path
					d="M 15 5 H 211 Q 221 5 221 15 V 41 Q 221 51 211 51 H 15 Q 5 51 5 41 V 15 Q 5 5 15 5 Z"
					fill="color-mix(in oklab, var(--color-orange-500) 10%, transparent)"
					fillStyle="hachure"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>Free &amp; Open Source</span
			>
		</li>

		<li
			class="absolute top-52 left-7 h-14 w-[254px] -rotate-2 text-emerald-600 dark:text-emerald-400"
		>
			<Rough.SVG
				width={254}
				height={56}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="currentColor"
				strokeWidth={1.8}
				roughness={1.6}
				bowing={1.2}
				seed={19}
			>
				<Rough.Path
					d="M 15 5 H 239 Q 249 5 249 15 V 41 Q 249 51 239 51 H 15 Q 5 51 5 41 V 15 Q 5 5 15 5 Z"
					fill="color-mix(in oklab, var(--color-emerald-500) 10%, transparent)"
					fillStyle="hachure"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>Install via Shadcn CLI</span
			>
		</li>
	</ul>
</aside>
