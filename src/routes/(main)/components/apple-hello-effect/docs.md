# Apple Hello Effect

Animated handwritten 'hello' text in multiple languages with a polished Apple-inspired motion effect.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-hello-effect.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-hello-effect.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-hello-effect.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-hello-effect.json
```

## Usage

```svelte
<script lang="ts">
  import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectEnglish />
```

## Props

### AppleHelloEffect

Multilingual animated greeting text with Apple-style handwriting motion.

| Prop                  | Type         | Default     | Required | Description                                                                        |
| --------------------- | ------------ | ----------- | -------- | ---------------------------------------------------------------------------------- |
| `class`               | `string`     | `''`        | No       | Additional classes applied to the underlying SVG element.                          |
| `durationScale`       | `number`     | `1`         | No       | Scales the overall handwriting animation speed for the current language variation. |
| `onAnimationComplete` | `() => void` | `undefined` | No       | Called when the full animation completes.                                          |

## Features

- SVG writing/path animation inspired by Apple's "Hello" welcome screen
- Ships with English, Hindi, Spanish, and Vietnamese language variants
- onAnimationComplete callback to trigger logic after the animation finishes
- durationScale prop to control animation speed

## Examples

### Custom colors

```svelte
<script lang="ts">
  import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectEnglish
  class="border border-dashed bg-ink/5 p-1 text-ink dark:text-emerald-400"
/>
```

### English

```svelte
<script lang="ts">
  import { AppleHelloEffectEnglish } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectEnglish />
```

### Hindi

```svelte
<script lang="ts">
  import { AppleHelloEffectHindi } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectHindi />
```

### Spanish

```svelte
<script lang="ts">
  import { AppleHelloEffectSpanish } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectSpanish />
```

### Vietnamese

```svelte
<script lang="ts">
  import { AppleHelloEffectVietnamese } from "$chan/apple-hello-effect";
</script>

<AppleHelloEffectVietnamese />
```
