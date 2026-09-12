# Status Button

A button that transitions through idle, loading, success, and failure states with optional controlled behavior.

Packages: @lucide/svelte, motion-sv, runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/status-button.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/status-button.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/status-button.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/status-button.json
```

## Usage

```svelte
<script lang="ts">
  import { StatusButton } from "$chan/status-button";

  async function saveChanges() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
</script>

<StatusButton onclick={saveChanges}>Save changes</StatusButton>
```

## Props

### StatusButton

Async button with loading, success, and failure transitions.

| Prop              | Type                                           | Default     | Required | Description                                                                                |
| ----------------- | ---------------------------------------------- | ----------- | -------- | ------------------------------------------------------------------------------------------ |
| `children`        | `Snippet`                                      | `''`        | No       | The default label content shown while the button is idle.                                  |
| `onclick`         | `(event: MouseEvent) => void \| Promise<void>` | `undefined` | No       | Async action that runs on click and automatically flips the button into the loading state. |
| `status`          | `ButtonStatus`                                 | `undefined` | No       | Controlled state override for external status management.                                  |
| `onStatusChange`  | `(status: ButtonStatus) => void`               | `undefined` | No       | Called whenever the button changes between idle, loading, success, and failed states.      |
| `onError`         | `(error: unknown) => void`                     | `undefined` | No       | Called when the action rejects during an async click.                                      |
| `loadingLabel`    | `Snippet`                                      | `undefined` | No       | Custom content shown while the button is in the loading state.                             |
| `successLabel`    | `Snippet`                                      | `undefined` | No       | Custom content shown while the button is in the success state.                             |
| `successDuration` | `number`                                       | `1500`      | No       | How long the success state remains visible before returning to idle.                       |
| `failedLabel`     | `Snippet`                                      | `undefined` | No       | Custom content shown while the button is in the failed state.                              |
| `failedDuration`  | `number`                                       | `2500`      | No       | How long the failed state remains visible before returning to idle.                        |
| `class`           | `string`                                       | `''`        | No       | Additional classes applied to the underlying button.                                       |
| `variant`         | `ButtonVariant`                                | `undefined` | No       | Style variant passed through to the underlying button.                                     |

## Features

- Works from an async click handler, or follows a status you control from form state
- Keeps focus while busy, so keyboard focus is not lost when the action finishes
- Announces loading and success to screen readers
- Swaps states without motion when reduced motion is preferred

## Examples

### Basic async

```svelte
<script lang="ts">
  import { StatusButton } from "$chan/status-button";

  function save() {
    return new Promise<void>((resolve) => setTimeout(resolve, 1000));
  }
</script>

<!-- Use when a button should manage its own loading and success states. -->
<StatusButton onclick={save}>Save changes</StatusButton>
```

### Controlled status

```svelte
<script lang="ts">
  import { StatusButton, type ButtonStatus } from "$chan/status-button";

  let status = $state<ButtonStatus>("idle");

  function sync() {
    return new Promise<void>((resolve) => setTimeout(resolve, 1000));
  }
</script>

<!-- Use controlled status when parent state must observe every transition. -->
<StatusButton
  {status}
  onStatusChange={(nextStatus) => (status = nextStatus)}
  onclick={sync}
>
  {#snippet loadingLabel()}
    Syncing
  {/snippet}
  {#snippet successLabel()}
    Synced
  {/snippet}
  Sync account
</StatusButton>
```

### Custom labels

```svelte
<script lang="ts">
  import { StatusButton } from "$chan/status-button";

  function publish() {
    return new Promise<void>((resolve) => setTimeout(resolve, 1200));
  }
</script>

<!-- Use when loading and success need visible, action-specific copy. -->
<StatusButton successDuration={2500} onclick={publish}>
  {#snippet loadingLabel()}
    Publishing
  {/snippet}
  {#snippet successLabel()}
    Published
  {/snippet}
  Publish article
</StatusButton>
```

### Failed retry

```svelte
<script lang="ts">
  import { StatusButton } from "$chan/status-button";

  let attempts = $state(0);
  let errorMessage = $state("Failed to save · Retry");

  async function save() {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    attempts += 1;

    if (attempts === 1) {
      throw new Error("Retry");
    }
  }

  function handleError(error: unknown) {
    errorMessage =
      error instanceof Error ? error.message : "Could not save · Retry";
  }
</script>

<!-- Use when a rejected action should offer clear failure feedback and retry. -->
<StatusButton failedDuration={3500} onError={handleError} onclick={save}>
  {#snippet loadingLabel()}
    Saving
  {/snippet}
  {#snippet failedLabel()}
    {errorMessage}
  {/snippet}
  {#snippet successLabel()}
    Draft saved
  {/snippet}
  Save draft
</StatusButton>
```

### Status styling

```svelte
<script lang="ts">
  import CreditCardIcon from "@lucide/svelte/icons/credit-card";
  import { StatusButton } from "$chan/status-button";

  function pay() {
    return new Promise<void>((resolve) => setTimeout(resolve, 1200));
  }
</script>

<!-- Use data-status variants when each state needs distinct visual emphasis. -->
<StatusButton
  onclick={pay}
  class="data-[status=loading]:bg-amber-500 data-[status=success]:bg-emerald-600 data-[status=success]:text-white"
>
  {#snippet loadingLabel()}
    Authorizing
  {/snippet}
  {#snippet successLabel()}
    Payment captured
  {/snippet}
  <CreditCardIcon data-icon="inline-start" />
  Pay $49
</StatusButton>
```

### Upload progress

```svelte
<script lang="ts">
  import CloudUploadIcon from "@lucide/svelte/icons/cloud-upload";
  import { StatusButton } from "$chan/status-button";

  let progress = $state(0);

  async function upload() {
    progress = 0;

    for (const nextProgress of [20, 40, 60, 80, 100]) {
      await new Promise<void>((resolve) => setTimeout(resolve, 250));
      progress = nextProgress;
    }
  }
</script>

<!-- Use a reactive loading label for progress or multi-step operations. -->
<StatusButton onclick={upload}>
  {#snippet loadingLabel()}
    Uploading {progress}%
  {/snippet}
  {#snippet successLabel()}
    Uploaded
  {/snippet}
  <CloudUploadIcon data-icon="inline-start" />
  Upload file
</StatusButton>
```
