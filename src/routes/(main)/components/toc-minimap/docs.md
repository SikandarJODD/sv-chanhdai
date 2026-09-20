# Toc Minimap

Navigate page headings with a compact, hoverable minimap.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/toc-minimap.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/toc-minimap.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/toc-minimap.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/toc-minimap.json
```

## Usage

```svelte
<script lang="ts">
  import type { TOCItemType } from "$chan/toc-minimap";
  import { TOCMinimap } from "$chan/toc-minimap";

  const items: TOCItemType[] = [
    { title: "Overview", url: "#overview", depth: 2 },
    { title: "API reference", url: "#api-reference", depth: 2 }
  ];
</script>

<TOCMinimap {items} />
```

## Features

No features are listed.

## Examples

### Static items

Provide the minimap items directly for known headings.

```svelte
<script lang="ts">
  import type { TOCItemType } from "$chan/toc-minimap";
  import { TOCMinimap } from "$chan/toc-minimap";

  const items: TOCItemType[] = [
    { title: "Features", url: "#static-features", depth: 2 },
    {
      title: "Keyboard support",
      url: "#static-keyboard-support",
      depth: 3
    },
    { title: "Configuration", url: "#static-configuration", depth: 2 }
  ];
</script>

<div class="mx-auto flex w-full max-w-lg items-start gap-6">
  <article class="min-w-0 flex-1 space-y-6 text-sm text-muted-foreground">
    <section class="space-y-2">
      <h2 id="static-features" class="text-base font-medium text-foreground">
        Features
      </h2>
      <p>A compact overview of the product's main capabilities.</p>
    </section>

    <section class="space-y-2 pl-4">
      <h3
        id="static-keyboard-support"
        class="text-base font-medium text-foreground"
      >
        Keyboard support
      </h3>
      <p>Navigate every interactive element without a pointer.</p>
    </section>

    <section class="space-y-2">
      <h2
        id="static-configuration"
        class="text-base font-medium text-foreground"
      >
        Configuration
      </h2>
      <p>Adjust the component to match your page structure.</p>
    </section>
  </article>

  <TOCMinimap {items} class="sticky top-4" />
</div>
```

### Generated from headings

Generate minimap items from the headings rendered inside an article.

```svelte
<script lang="ts">
  import type { Heading } from "$lib/hooks/use-toc.svelte";
  import { UseToc } from "$lib/hooks/use-toc.svelte";
  import type { TOCItemType } from "$chan/toc-minimap";
  import { TOCMinimap } from "$chan/toc-minimap";

  let toc = new UseToc();

  function toMinimapItems(headings: Heading[]): TOCItemType[] {
    return headings.flatMap((heading) => [
      ...(heading.id
        ? [
            {
              title: heading.label,
              url: `#${heading.id}`,
              depth: heading.level
            }
          ]
        : []),
      ...toMinimapItems(heading.children)
    ]);
  }

  let items = $derived(toMinimapItems(toc.current));
</script>

<div class="mx-auto flex w-full max-w-lg items-start gap-6">
  <article
    bind:this={toc.ref}
    class="min-w-0 flex-1 space-y-6 text-sm text-muted-foreground"
  >
    <section class="space-y-2">
      <h2 id="project-overview" class="text-base font-medium text-foreground">
        Project overview
      </h2>
      <p>A concise plan for shipping the next product update.</p>
    </section>

    <section class="space-y-2">
      <h2 id="requirements" class="text-base font-medium text-foreground">
        Requirements
      </h2>
      <p>Define the scope, owners, and success criteria before development.</p>
    </section>

    <section class="space-y-2 pl-4">
      <h3 id="milestones" class="text-base font-medium text-foreground">
        Milestones
      </h3>
      <p>Review the prototype, run QA, and prepare the release.</p>
    </section>
  </article>

  <TOCMinimap {items} class="sticky top-4" />
</div>
```
