# Slide to Unlock

Interactive slider inspired by the classic iPhone “slide to unlock” gesture.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/slide-to-unlock.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/slide-to-unlock.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/slide-to-unlock.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/slide-to-unlock.json
```

## Usage

```svelte
<script lang="ts">
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  function handleUnlock() {
    console.log("Unlocked");
  }
</script>

<SlideToUnlock onUnlock={handleUnlock} class="w-64 rounded-full">
  <SlideToUnlockTrack>
    <SlideToUnlockText>
      {#snippet children({ isDragging })}
        {isDragging ? "Release…" : "Slide to unlock"}
      {/snippet}
    </SlideToUnlockText>
    <SlideToUnlockHandle class="rounded-full" />
  </SlideToUnlockTrack>
</SlideToUnlock>
```

## Props

### SlideToUnlock

Root provider for the slide-to-unlock interaction.

| Prop          | Type                     | Default     | Required | Description                                                   |
| ------------- | ------------------------ | ----------- | -------- | ------------------------------------------------------------- |
| `children`    | `Snippet`                | —           | Yes      | Track, text, and handle composition rendered inside the root. |
| `handleWidth` | `number`                 | `56`        | No       | Width of the draggable handle in pixels.                      |
| `onUnlock`    | `() => void`             | `undefined` | No       | Called when the handle reaches the end of the track.          |
| `ref`         | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the root element.                       |
| `class`       | `string`                 | `undefined` | No       | Additional classes applied to the root element.               |

### SlideToUnlockTrack

Track that supplies the drag constraint boundary.

| Prop       | Type                     | Default     | Required | Description                                        |
| ---------- | ------------------------ | ----------- | -------- | -------------------------------------------------- |
| `children` | `Snippet`                | —           | Yes      | Text and handle content rendered inside the track. |
| `ref`      | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the track element.           |
| `class`    | `string`                 | `undefined` | No       | Additional classes applied to the track.           |

### SlideToUnlockText

Instruction text that fades with drag progress.

| Prop       | Type                                 | Default     | Required | Description                                                     |
| ---------- | ------------------------------------ | ----------- | -------- | --------------------------------------------------------------- |
| `children` | `Snippet<[{ isDragging: boolean }]>` | —           | Yes      | Text renderer receiving the current dragging state.             |
| `style`    | `MotionStyleProps`                   | `undefined` | No       | Additional Motion style values merged with the progress styles. |
| `ref`      | `HTMLDivElement \| null`             | `null`      | No       | Bindable reference to the text element.                         |
| `class`    | `ClassValue`                         | `undefined` | No       | Additional classes applied to the text element.                 |

### SlideToUnlockHandle

Draggable handle with a built-in arrow fallback.

| Prop       | Type                     | Default         | Required | Description                                                 |
| ---------- | ------------------------ | --------------- | -------- | ----------------------------------------------------------- |
| `children` | `Snippet`                | `default arrow` | No       | Optional custom content rendered inside the handle.         |
| `style`    | `MotionStyleProps`       | `undefined`     | No       | Additional Motion style values merged with the drag styles. |
| `ref`      | `HTMLDivElement \| null` | `null`          | No       | Bindable reference to the handle element.                   |
| `class`    | `ClassValue`             | `undefined`     | No       | Additional classes applied to the handle.                   |

## Features

- Smooth drag interaction with spring physics via Motion Svelte
- Composable compound components (track, handle, text)
- Customizable handle and colors
- Built-in shimmering text effect

## Examples

### Basic

Run a callback when the handle reaches the end of the track.

```svelte
<script lang="ts">
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let unlocked = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
  <SlideToUnlock onUnlock={() => (unlocked = true)} class="w-67 rounded-full">
    <SlideToUnlockTrack>
      <SlideToUnlockText>
        {#snippet children()}
          Slide to unlock
        {/snippet}
      </SlideToUnlockText>
      <SlideToUnlockHandle class="rounded-full" />
    </SlideToUnlockTrack>
  </SlideToUnlock>

  <p class="text-muted-foreground text-sm" aria-live="polite">
    {unlocked ? "Unlocked" : "Waiting for the gesture"}
  </p>
</div>
```

### Reset

Return the handle to its starting position with the reset method.

```svelte
<script lang="ts">
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let slideToUnlock = $state<{ reset: () => void }>();
  let unlocked = $state(false);

  function reset() {
    slideToUnlock?.reset();
    unlocked = false;
  }
</script>

<div class="flex flex-col items-center gap-3">
  <SlideToUnlock
    bind:this={slideToUnlock}
    onUnlock={() => (unlocked = true)}
    class="w-67 rounded-full"
  >
    <SlideToUnlockTrack>
      <SlideToUnlockText>
        {#snippet children()}
          Slide to unlock
        {/snippet}
      </SlideToUnlockText>
      <SlideToUnlockHandle class="rounded-full" />
    </SlideToUnlockTrack>
  </SlideToUnlock>

  <button
    type="button"
    class="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 disabled:pointer-events-none disabled:opacity-50"
    disabled={!unlocked}
    onclick={reset}
  >
    Reset
  </button>
</div>
```

### Custom prompt

Change the instruction while the handle is being dragged.

```svelte
<script lang="ts">
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let checkedIn = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
  <SlideToUnlock
    onUnlock={() => (checkedIn = true)}
    class="w-72 rounded-full bg-blue-500/10"
  >
    <SlideToUnlockTrack>
      <SlideToUnlockText class="text-base text-blue-700 dark:text-blue-300">
        {#snippet children({ isDragging })}
          {isDragging ? "Release to check in" : "Slide to check in"}
        {/snippet}
      </SlideToUnlockText>
      <SlideToUnlockHandle class="rounded-full bg-blue-600 text-white" />
    </SlideToUnlockTrack>
  </SlideToUnlock>

  {#if checkedIn}
    <p class="text-sm font-medium text-blue-600" aria-live="polite">
      You’re checked in.
    </p>
  {/if}
</div>
```

### Custom handle

Provide custom handle content, colors, and drag width.

```svelte
<script lang="ts">
  import RocketIcon from "@lucide/svelte/icons/rocket";
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let launched = $state(false);
</script>

<div class="flex flex-col items-center gap-3">
  <SlideToUnlock
    handleWidth={48}
    onUnlock={() => (launched = true)}
    class="w-72 rounded-full bg-violet-500/10"
  >
    <SlideToUnlockTrack>
      <SlideToUnlockText class="text-base text-violet-700 dark:text-violet-300">
        {#snippet children({ isDragging })}
          {isDragging ? "Release to launch" : "Slide to launch"}
        {/snippet}
      </SlideToUnlockText>
      <SlideToUnlockHandle class="rounded-full bg-violet-600 text-white">
        {#snippet children()}
          <RocketIcon class="size-5" />
        {/snippet}
      </SlideToUnlockHandle>
    </SlideToUnlockTrack>
  </SlideToUnlock>

  <p class="text-muted-foreground text-sm" aria-live="polite">
    {launched ? "Launch confirmed." : "Custom handle with a 48px drag width"}
  </p>
</div>
```

### Confirm action

Replace a one-time confirmation gesture with completion feedback.

```svelte
<script lang="ts">
  import { navigating } from "$app/state";
  import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
  import SendIcon from "@lucide/svelte/icons/send";
  import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
  import type { Transition, Variants } from "motion-sv";
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let published = $state(false);

  const shouldReduceMotion = useReducedMotion();
  // Skip exits during navigation because motion-sv's global outro can delay route removal.
  const exitVariant = $derived(navigating.type === null ? "exit" : undefined);
  const swapTransition: Transition = {
    type: "spring",
    duration: 0.45,
    bounce: 0.2
  };
  const swapVariants: Variants = {
    initial: { opacity: 0, scale: 0.92, y: 8, filter: "blur(6px)" },
    animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.96, y: -8, filter: "blur(4px)" }
  };
  const reducedMotionVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
</script>

<div class="grid min-h-24 place-items-center">
  <AnimatePresence mode="wait" initial={false}>
    {#if published}
      <motion.div
        class="flex items-center gap-2 text-sm font-medium text-emerald-600"
        role="status"
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <CircleCheckIcon class="size-5" />
        Post published
      </motion.div>
    {:else}
      <motion.div
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <SlideToUnlock
          onUnlock={() => (published = true)}
          class="w-72 rounded-full bg-emerald-500/10"
        >
          <SlideToUnlockTrack>
            <SlideToUnlockText
              class="text-base text-emerald-700 dark:text-emerald-300"
            >
              {#snippet children({ isDragging })}
                {isDragging ? "Release to publish" : "Slide to publish"}
              {/snippet}
            </SlideToUnlockText>
            <SlideToUnlockHandle class="rounded-full bg-emerald-600 text-white">
              {#snippet children()}
                <SendIcon class="size-5" />
              {/snippet}
            </SlideToUnlockHandle>
          </SlideToUnlockTrack>
        </SlideToUnlock>
      </motion.div>
    {/if}
  </AnimatePresence>
</div>
```

### Async action

Show processing and success states after the gesture completes.

```svelte
<script lang="ts">
  import { navigating } from "$app/state";
  import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
  import LoaderCircleIcon from "@lucide/svelte/icons/loader-circle";
  import ShoppingBagIcon from "@lucide/svelte/icons/shopping-bag";
  import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
  import type { Transition, Variants } from "motion-sv";
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let status = $state<"idle" | "processing" | "complete">("idle");
  const shouldReduceMotion = useReducedMotion();
  // Skip exits during navigation because motion-sv's global outro can delay route removal.
  const exitVariant = $derived(navigating.type === null ? "exit" : undefined);
  const swapTransition: Transition = {
    type: "spring",
    duration: 0.4,
    bounce: 0.15
  };
  const swapVariants: Variants = {
    initial: { opacity: 0, scale: 0.94, y: 8, filter: "blur(5px)" },
    animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.96, y: -8, filter: "blur(4px)" }
  };
  const successVariants: Variants = {
    ...swapVariants,
    animate: {
      ...swapVariants.animate,
      scale: [0.94, 1.05, 1]
    }
  };
  const reducedMotionVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  async function confirmOrder() {
    status = "processing";
    await new Promise<void>((resolve) => setTimeout(resolve, 1200));
    status = "complete";
  }
</script>

<div class="grid min-h-24 place-items-center">
  <AnimatePresence mode="wait" initial={false}>
    {#if status === "processing"}
      <motion.div
        class="text-muted-foreground flex items-center gap-2 text-sm"
        role="status"
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <LoaderCircleIcon class="size-5 animate-spin" />
        Processing order…
      </motion.div>
    {:else if status === "complete"}
      <motion.div
        class="flex items-center gap-2 text-sm font-medium text-emerald-600"
        role="status"
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : successVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <CircleCheckIcon class="size-5" />
        Order confirmed
      </motion.div>
    {:else}
      <motion.div
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <SlideToUnlock onUnlock={confirmOrder} class="w-72 rounded-full">
          <SlideToUnlockTrack>
            <SlideToUnlockText class="text-base">
              {#snippet children({ isDragging })}
                {isDragging ? "Release to confirm" : "Slide to confirm order"}
              {/snippet}
            </SlideToUnlockText>
            <SlideToUnlockHandle
              class="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            >
              {#snippet children()}
                <ShoppingBagIcon class="size-5" />
              {/snippet}
            </SlideToUnlockHandle>
          </SlideToUnlockTrack>
        </SlideToUnlock>
      </motion.div>
    {/if}
  </AnimatePresence>
</div>
```

### Destructive confirmation

Add deliberate friction before a destructive action.

```svelte
<script lang="ts">
  import { navigating } from "$app/state";
  import Trash2Icon from "@lucide/svelte/icons/trash-2";
  import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
  import type { Transition, Variants } from "motion-sv";
  import {
    SlideToUnlock,
    SlideToUnlockHandle,
    SlideToUnlockText,
    SlideToUnlockTrack
  } from "$chan/slide-to-unlock";

  let deleted = $state(false);

  const shouldReduceMotion = useReducedMotion();
  // Skip exits during navigation because motion-sv's global outro can delay route removal.
  const exitVariant = $derived(navigating.type === null ? "exit" : undefined);
  const swapTransition: Transition = {
    type: "spring",
    duration: 0.45,
    bounce: 0.2
  };
  const swapVariants: Variants = {
    initial: { opacity: 0, scale: 0.92, y: 8, filter: "blur(6px)" },
    animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.96, y: -8, filter: "blur(4px)" }
  };
  const reducedMotionVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
</script>

<div class="grid min-h-28 place-items-center">
  <AnimatePresence mode="wait" initial={false}>
    {#if deleted}
      <motion.div
        class="flex flex-col items-center gap-3"
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <p class="text-sm font-medium" role="status">Project deleted.</p>
        <button
          type="button"
          class="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
          onclick={() => (deleted = false)}
        >
          Restore example
        </button>
      </motion.div>
    {:else}
      <motion.div
        variants={shouldReduceMotion.current
          ? reducedMotionVariants
          : swapVariants}
        initial="initial"
        animate="animate"
        exit={exitVariant}
        transition={swapTransition}
      >
        <SlideToUnlock
          handleWidth={40}
          onUnlock={() => (deleted = true)}
          class="w-72 rounded-full bg-red-500/10"
        >
          <SlideToUnlockTrack>
            <SlideToUnlockText class="text-base text-red-700 dark:text-red-300">
              {#snippet children({ isDragging })}
                {isDragging ? "Release to delete" : "Slide to delete project"}
              {/snippet}
            </SlideToUnlockText>
            <SlideToUnlockHandle
              class="size-10 rounded-full bg-red-600 text-white"
            >
              {#snippet children()}
                <Trash2Icon class="size-5" />
              {/snippet}
            </SlideToUnlockHandle>
          </SlideToUnlockTrack>
        </SlideToUnlock>
      </motion.div>
    {/if}
  </AnimatePresence>
</div>
```
