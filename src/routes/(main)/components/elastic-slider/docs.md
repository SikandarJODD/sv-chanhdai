# Elastic Slider

Slider with elastic rubber-band drag and magnetic snap feedback.

Packages: motion-sv, runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/elastic-slider.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/elastic-slider.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/elastic-slider.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/elastic-slider.json
```

## Usage

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";
</script>

<ElasticSlider label="Volume" min={0} max={100} step={1} defaultValue={50} />
```

## Props

### ElasticSlider

Controlled or uncontrolled elastic value slider.

| Prop            | Type                        | Default     | Required | Description                                                          |
| --------------- | --------------------------- | ----------- | -------- | -------------------------------------------------------------------- |
| `label`         | `string`                    | —           | Yes      | Label displayed inside the slider track.                             |
| `value`         | `number`                    | `undefined` | No       | Controlled slider value.                                             |
| `defaultValue`  | `number`                    | `min`       | No       | Initial value when the slider is uncontrolled.                       |
| `onValueChange` | `(value: number) => void`   | `undefined` | No       | Called after drag, click, or keyboard interaction changes the value. |
| `min`           | `number`                    | `0`         | No       | Minimum allowed value.                                               |
| `max`           | `number`                    | `1`         | No       | Maximum allowed value.                                               |
| `step`          | `number`                    | `0.01`      | No       | Increment used when snapping values.                                 |
| `formatValue`   | `(value: number) => string` | `undefined` | No       | Formats the value displayed in the track.                            |
| `ref`           | `HTMLDivElement \| null`    | `null`      | No       | Bindable reference to the outer slider element.                      |
| `class`         | `string`                    | `undefined` | No       | Additional classes applied to the slider.                            |

## Features

- Track stretches with rubber-band tension when dragged past bounds
- Snaps magnetically to exact steps or continuous deciles
- Inline label and value text dynamically fade to avoid handle overlap
- Supports keyboard navigation and respects prefers-reduced-motion

## Examples

### Default value

Set the initial value while letting the slider manage its own state.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
  <ElasticSlider
    label="Volume"
    min={0}
    max={100}
    step={1}
    defaultValue={65}
    formatValue={(value) => `${value}%`}
  />
</div>
```

### Controlled value

Keep the value in parent state with value and onValueChange.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";

  let volume = $state(35);
</script>

<div class="w-72 space-y-3">
  <ElasticSlider
    label="Volume"
    min={0}
    max={100}
    step={1}
    value={volume}
    onValueChange={(value) => (volume = value)}
    formatValue={(value) => `${value}%`}
  />

  <div class="flex items-center justify-between text-sm">
    <span class="text-muted-foreground">Parent value: {volume}</span>
    <button
      type="button"
      class="font-medium underline-offset-4 hover:underline"
      onclick={() => (volume = 35)}
    >
      Reset
    </button>
  </div>
</div>
```

### Currency formatting

Format the displayed value with Intl.NumberFormat.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
</script>

<div class="w-80">
  <ElasticSlider
    label="Budget"
    min={0}
    max={5000}
    step={50}
    defaultValue={1250}
    formatValue={(value) => currency.format(value)}
  />
</div>
```

### Units and precision

Combine a fractional step with a custom unit and fixed precision.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
  <ElasticSlider
    label="Playback speed"
    min={0.5}
    max={2}
    step={0.25}
    defaultValue={1.25}
    formatValue={(value) => `${value.toFixed(2)}×`}
  />
</div>
```

### Discrete steps

Use a short integer range for exact, visible stops.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
  <ElasticSlider
    label="Rating"
    min={1}
    max={5}
    step={1}
    defaultValue={3}
    formatValue={(value) => `${value} / 5`}
  />
</div>
```

### Negative range

Configure a range that spans values below and above zero.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";
</script>

<div class="w-72">
  <ElasticSlider
    label="Temperature"
    min={-20}
    max={40}
    step={1}
    defaultValue={18}
    formatValue={(value) => `${value}°C`}
  />
</div>
```

### Live UI control

Connect multiple controlled sliders to a visual preview.

```svelte
<script lang="ts">
  import { ElasticSlider } from "$chan/elastic-slider";

  let opacity = $state(0.8);
  let blur = $state(0);
  let rotation = $state(0);
</script>

<div
  class="grid w-full max-w-lg gap-8 sm:grid-cols-[1fr_10rem] sm:items-center"
>
  <div class="space-y-3">
    <ElasticSlider
      label="Opacity"
      min={0.1}
      max={1}
      step={0.1}
      value={opacity}
      onValueChange={(value) => (opacity = value)}
      formatValue={(value) => `${Math.round(value * 100)}%`}
    />
    <ElasticSlider
      label="Blur"
      min={0}
      max={10}
      step={1}
      value={blur}
      onValueChange={(value) => (blur = value)}
      formatValue={(value) => `${value}px`}
    />
    <ElasticSlider
      label="Rotation"
      min={-60}
      max={60}
      step={1}
      value={rotation}
      onValueChange={(value) => (rotation = value)}
      formatValue={(value) => `${value}°`}
    />
  </div>

  <div
    class="grid min-h-32 place-items-center overflow-hidden rounded-xl border bg-muted/40"
  >
    <div
      class="grid size-20 place-items-center rounded-xl bg-foreground text-sm font-semibold text-background shadow-lg"
      style:opacity
      style:filter={`blur(${blur}px)`}
      style:transform={`rotate(${rotation}deg)`}
    >
      Hehe
    </div>
  </div>
</div>
```
