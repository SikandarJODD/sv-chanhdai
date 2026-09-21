# Copy Button

Copy text to the clipboard with animated status feedback.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/copy-button.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/copy-button.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/copy-button.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/copy-button.json
```

## Usage

```svelte
<script lang="ts">
  import { CopyButton } from "$chan/copy-button";
</script>

<CopyButton text="Hello, world!">Copy</CopyButton>
```

## Props

### CopyButton

Button that copies text and displays animated status feedback.

| Prop            | Type                          | Default     | Required | Description                                                       |
| --------------- | ----------------------------- | ----------- | -------- | ----------------------------------------------------------------- |
| `text`          | `string \| (() => string)`    | —           | Yes      | Text to copy, or a function that returns it.                      |
| `children`      | `Snippet`                     | `undefined` | No       | Optional label rendered beside the status icon.                   |
| `idleIcon`      | `Snippet`                     | `undefined` | No       | Custom icon shown before the copy action. Defaults to CopyIcon.   |
| `doneIcon`      | `Snippet`                     | `undefined` | No       | Custom icon shown after a successful copy. Defaults to CheckIcon. |
| `errorIcon`     | `Snippet`                     | `undefined` | No       | Custom icon shown when copying fails. Defaults to CircleXIcon.    |
| `onCopySuccess` | `(text: string) => void`      | `undefined` | No       | Called with the copied text after a successful copy.              |
| `onCopyError`   | `(error: Error) => void`      | `undefined` | No       | Called when the copy operation fails.                             |
| `onclick`       | `(event: MouseEvent) => void` | `undefined` | No       | Called after the copy action starts.                              |
| `variant`       | `ButtonVariant`               | `'default'` | No       | Visual style inherited from the Button component.                 |
| `size`          | `ButtonSize`                  | `'icon'`    | No       | Button size.                                                      |
| `class`         | `string`                      | `undefined` | No       | Additional classes applied to the button.                         |
| `aria-label`    | `string`                      | `'Copy'`    | No       | Accessible label for the button.                                  |

## Features

No features are listed.
