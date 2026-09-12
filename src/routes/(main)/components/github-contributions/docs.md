# Github Contributions

Visualize year-long GitHub contribution activity with daily counts, tooltips, and a profile link.

Packages: date-fns

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-contributions.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-contributions.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-contributions.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/github-contributions.json
```

## Usage

```svelte
<script lang="ts">
  import { GitHubContributions } from "$chan/github-contributions";
</script>

<GitHubContributions username="SikandarJODD" />
```

## Props

### GitHubContributions

Ready-to-use contribution graph loaded from a GitHub username.

| Prop       | Type     | Default     | Required | Description                                               |
| ---------- | -------- | ----------- | -------- | --------------------------------------------------------- |
| `username` | `string` | —           | Yes      | GitHub username whose recent contributions are displayed. |
| `class`    | `string` | `undefined` | No       | Additional classes applied to the contribution graph.     |

### ContributionGraph

Context provider and layout root for a custom contribution graph.

| Prop          | Type                     | Default              | Required | Description                                                  |
| ------------- | ------------------------ | -------------------- | -------- | ------------------------------------------------------------ |
| `data`        | `Activity[]`             | —                    | Yes      | Daily activity records rendered by the graph.                |
| `blockMargin` | `number`                 | `4`                  | No       | Gap between contribution blocks in pixels.                   |
| `blockRadius` | `number`                 | `2`                  | No       | Corner radius of each contribution block.                    |
| `blockSize`   | `number`                 | `12`                 | No       | Width and height of each contribution block.                 |
| `fontSize`    | `number`                 | `14`                 | No       | Base graph label size in pixels.                             |
| `labels`      | `Labels`                 | `undefined`          | No       | Overrides for month, legend, and total-count labels.         |
| `maxLevel`    | `number`                 | `4`                  | No       | Highest contribution intensity level.                        |
| `totalCount`  | `number`                 | `sum of data counts` | No       | Optional total that replaces the value calculated from data. |
| `weekStart`   | `Day`                    | `0`                  | No       | Day of the week used to start each graph column.             |
| `children`    | `Snippet`                | —                    | Yes      | Graph composition rendered within the shared context.        |
| `ref`         | `HTMLDivElement \| null` | `null`               | No       | Bindable reference to the graph root.                        |

### ContributionGraphCalendar

Scrollable SVG calendar that exposes each activity to a render snippet.

| Prop              | Type                                                                     | Default                | Required | Description                                   |
| ----------------- | ------------------------------------------------------------------------ | ---------------------- | -------- | --------------------------------------------- |
| `children`        | `Snippet<[{ activity: Activity; dayIndex: number; weekIndex: number }]>` | —                      | Yes      | Renderer called for every activity block.     |
| `hideMonthLabels` | `boolean`                                                                | `false`                | No       | Hides the month labels above the calendar.    |
| `title`           | `string`                                                                 | `'Contribution Graph'` | No       | Accessible title rendered inside the SVG.     |
| `ref`             | `HTMLDivElement \| null`                                                 | `null`                 | No       | Bindable reference to the calendar container. |

### ContributionGraphBlock

A positioned contribution rectangle using the graph context.

| Prop        | Type                     | Default | Required | Description                               |
| ----------- | ------------------------ | ------- | -------- | ----------------------------------------- |
| `activity`  | `Activity`               | —       | Yes      | Activity record represented by the block. |
| `dayIndex`  | `number`                 | —       | Yes      | Row position within the week.             |
| `weekIndex` | `number`                 | —       | Yes      | Column position within the year.          |
| `ref`       | `SVGRectElement \| null` | `null`  | No       | Bindable reference to the SVG rectangle.  |

### ContributionGraphFooter

Footer layout for totals and the contribution legend.

| Prop       | Type                     | Default | Required | Description                               |
| ---------- | ------------------------ | ------- | -------- | ----------------------------------------- |
| `children` | `Snippet`                | —       | Yes      | Footer content.                           |
| `ref`      | `HTMLDivElement \| null` | `null`  | No       | Bindable reference to the footer element. |

### ContributionGraphLegend

Contribution intensity legend with optional custom level rendering.

| Prop       | Type                           | Default     | Required | Description                               |
| ---------- | ------------------------------ | ----------- | -------- | ----------------------------------------- |
| `children` | `Snippet<[{ level: number }]>` | `undefined` | No       | Optional renderer for each legend level.  |
| `ref`      | `HTMLDivElement \| null`       | `null`      | No       | Bindable reference to the legend element. |

### ContributionGraphTotalCount

Total contribution label with an optional custom renderer.

| Prop       | Type                                              | Default     | Required | Description                                            |
| ---------- | ------------------------------------------------- | ----------- | -------- | ------------------------------------------------------ |
| `children` | `Snippet<[{ totalCount: number; year: number }]>` | `undefined` | No       | Optional renderer receiving the total count and year.  |
| `ref`      | `HTMLDivElement \| null`                          | `null`      | No       | Bindable reference to the default total-count element. |

## Features

- Shows a full year of daily activity with a color legend and total count
- Shows the contribution count and date in a tooltip for each day
- Links the contribution total to the requested user's GitHub profile
- Works with any API compatible with the GitHub Contributions API

## Examples

### Custom theme

Apply a warm orange palette to every contribution level.

```svelte
<script lang="ts">
  import { GitHubContributions } from "$chan/github-contributions";
</script>

<GitHubContributions
  username="SikandarJODD"
  class="[&_rect[data-level='0']]:fill-orange-500/10 [&_rect[data-level='1']]:fill-orange-500/30 [&_rect[data-level='2']]:fill-orange-500/50 [&_rect[data-level='3']]:fill-orange-500/75 [&_rect[data-level='4']]:fill-orange-500"
/>
```

### Localized labels

Translate month, total count, and legend labels.

```svelte
<script lang="ts">
  import { addDays, format } from "date-fns";
  import {
    ContributionGraph,
    ContributionGraphBlock,
    ContributionGraphCalendar,
    ContributionGraphFooter,
    ContributionGraphLegend,
    ContributionGraphTotalCount,
    type Activity,
    type Labels
  } from "$chan/github-contributions";

  const labels: Labels = {
    months: [
      "Th1",
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "Th8",
      "Th9",
      "Th10",
      "Th11",
      "Th12"
    ],
    totalCount: "{{count}} hoạt động trong năm {{year}}",
    legend: { less: "Ít hơn", more: "Nhiều hơn" }
  };

  const startDate = new Date(2025, 0, 5);
  const data: Activity[] = Array.from({ length: 28 * 7 }, (_, index) => {
    const count = (index * 7 + index * index) % 16;
    return {
      date: format(addDays(startDate, index), "yyyy-MM-dd"),
      count,
      level: count === 0 ? 0 : Math.min(4, Math.ceil(count / 4))
    };
  });
</script>

<ContributionGraph {data} {labels} blockSize={11} blockMargin={3}>
  <ContributionGraphCalendar title="Biểu đồ đóng góp">
    {#snippet children({ activity, dayIndex, weekIndex })}
      <ContributionGraphBlock {activity} {dayIndex} {weekIndex} />
    {/snippet}
  </ContributionGraphCalendar>

  <ContributionGraphFooter>
    <ContributionGraphTotalCount />
    <ContributionGraphLegend />
  </ContributionGraphFooter>
</ContributionGraph>
```
