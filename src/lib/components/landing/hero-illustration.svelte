<script lang="ts">
	import * as Rough from "@sveltecraft/rough";
</script>

<aside
	aria-label="Project highlights"
	class="relative hidden h-80 w-full animate-in delay-400 duration-700 ease-out fill-mode-backwards fade-in slide-in-from-bottom-8 lg:block"
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

		<!-- <Rough.Ellipse
			x={345}
			y={53}
			width={32}
			height={16}
			stroke="var(--color-ink)"
			strokeWidth={1.2}
			strokeLineDash={[5, 5]}
		/> -->
		<!-- <Rough.Line
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
		/> -->
		<!-- <Rough.Circle
			x={250}
			y={267}
			diameter={20}
			stroke="var(--color-emerald-500)"
			fill="var(--color-emerald-500)"
			fillStyle="zigzag"
		/> -->
	</Rough.SVG>

	<ul
		class="contents font-cursive text-[0.825rem] leading-none font-medium whitespace-nowrap"
	>
		<li
			class="absolute top-8 left-5 h-12 w-[180px] -rotate-3 text-ink dark:text-info"
		>
			<Rough.SVG
				width={180}
				height={48}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="currentColor"
				strokeWidth={1}
				roughness={2.5}
				bowing={-1.1}
				seed={7}
			>
				<Rough.Path
					d="M 14 4 H 166 Q 176 4 176 14 V 34 Q 176 44 166 44 H 14 Q 4 44 4 34 V 14 Q 4 4 14 4 Z"
					fill="color-mix(in oklab, currentColor 10%, transparent)"
					fillStyle="solid"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>20+ Components</span
			>
		</li>

		<li
			class="absolute top-30 right-4 h-12 w-[200px] rotate-2 text-orange-500"
		>
			<Rough.SVG
				width={200}
				height={48}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="var(--color-orange-500)"
				strokeWidth={1}
				roughness={2.0}
				bowing={1.3}
				seed={13}
			>
				<Rough.Path
					d="M 14 4 H 186 Q 196 4 196 14 V 34 Q 196 44 186 44 H 14 Q 4 44 4 34 V 14 Q 4 4 14 4 Z"
					fill="color-mix(in oklab, var(--color-orange-500) 10%, transparent)"
					fillStyle="solid"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>Free &amp; Open Source</span
			>
		</li>

		<li
			class="absolute top-52 left-7 h-12 w-[220px] -rotate-2 text-emerald-600 dark:text-emerald-400"
		>
			<Rough.SVG
				width={220}
				height={48}
				class="pointer-events-none absolute inset-0 size-full"
				aria-hidden="true"
				stroke="currentColor"
				strokeWidth={1}
				roughness={2.6}
				bowing={-1.2}
				seed={12}
			>
				<Rough.Path
					d="M 14 4 H 206 Q 216 4 216 14 V 34 Q 216 44 206 44 H 14 Q 4 44 4 34 V 14 Q 4 4 14 4 Z"
					fill="color-mix(in oklab, var(--color-emerald-500) 10%, transparent)"
					fillStyle="solid"
					hachureGap={7}
				/>
			</Rough.SVG>
			<span class="absolute inset-0 grid place-items-center"
				>Install via shadcn-svelte CLI</span
			>
		</li>
	</ul>
</aside>
