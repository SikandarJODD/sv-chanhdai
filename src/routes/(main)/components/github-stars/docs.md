# Github Stars

Display GitHub repo star count with formatted numbers and full-count tooltip.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-stars.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-stars.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-stars.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-stars.json
```

## Usage

```svelte
<script lang="ts">
  import { GithubStars } from "$chan/github-stars";
</script>

<GithubStars repo="SikandarJODD/sv-table" stargazersCount={82} />
```

## Props

### GithubStars

GitHub repository link with compact and full star counts.

| Prop              | Type                   | Default   | Required | Description                                      |
| ----------------- | ---------------------- | --------- | -------- | ------------------------------------------------ |
| `repo`            | `string`               | —         | Yes      | GitHub repository in owner/repo format.          |
| `stargazersCount` | `number`               | —         | Yes      | Number of stars to display.                      |
| `locales`         | `Intl.LocalesArgument` | `'en-US'` | No       | Locale or locales used to format the star count. |

## Features

- Displays the star count of a specified GitHub repository
- Optical alignment for better visual balance with the GitHub icon
- Formats large numbers for better readability (e.g., 1.2k for 1200)
- Includes a tooltip that shows the full star count on hover

## Examples

### Fetch repository stars

Fetch the latest star count from the GitHub REST API.

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { GithubStars } from "$chan/github-stars";

  type GitHubRepository = {
    stargazers_count: number;
  };

  const repo = "SikandarJODD/sv-table";
  let stargazersCount = $state<number | null>(null);
  let error = $state<string | null>(null);

  onMount(() => {
    const controller = new AbortController();

    void fetch(`https://api.github.com/repos/${repo}`, {
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load GitHub stars.");
        }

        return response.json() as Promise<GitHubRepository>;
      })
      .then((repository) => {
        stargazersCount = repository.stargazers_count;
      })
      .catch((caughtError: unknown) => {
        if (
          caughtError instanceof DOMException &&
          caughtError.name === "AbortError"
        ) {
          return;
        }

        error =
          caughtError instanceof Error
            ? caughtError.message
            : "Could not load GitHub stars.";
      });

    return () => controller.abort();
  });
</script>

{#if stargazersCount !== null}
  <GithubStars {repo} {stargazersCount} />
{:else if error}
  <p class="text-sm text-muted-foreground">{error}</p>
{:else}
  <p class="text-sm text-muted-foreground">Loading stars...</p>
{/if}
```
