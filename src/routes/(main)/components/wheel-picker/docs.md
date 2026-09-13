# Wheel Picker

iOS-like wheel picker for Svelte with smooth inertia scrolling and infinite loop support.

Packages: runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/wheel-picker.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/wheel-picker.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/wheel-picker.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/wheel-picker.json
```

## Usage

```svelte
<script lang="ts">
  import {
    WheelPicker,
    WheelPickerWrapper,
    type WheelPickerOption
  } from "$chan/wheel-picker";

  const options: WheelPickerOption[] = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" }
  ];

  let value = $state("svelte");
</script>

<WheelPickerWrapper>
  <WheelPicker {options} bind:value aria-label="Framework" />
</WheelPickerWrapper>
```

## Props

### WheelPicker

Keyboard, pointer, touch, and wheel-controlled option picker.

| Prop                | Type                     | Default     | Required | Description                                                          |
| ------------------- | ------------------------ | ----------- | -------- | -------------------------------------------------------------------- |
| `options`           | `WheelPickerOption<T>[]` | —           | Yes      | Values, labels, and disabled states available for selection.         |
| `value`             | `T`                      | `undefined` | No       | Bindable selected value.                                             |
| `defaultValue`      | `T`                      | `undefined` | No       | Initial selection when value is undefined.                           |
| `onValueChange`     | `(value: T) => void`     | `undefined` | No       | Called whenever interaction selects a different value.               |
| `infinite`          | `boolean`                | `false`     | No       | Repeats options to allow continuous looping.                         |
| `visibleCount`      | `number`                 | `20`        | No       | Number of wheel positions; must be a positive multiple of four.      |
| `dragSensitivity`   | `number`                 | `3`         | No       | Multiplier applied to pointer and touch dragging.                    |
| `scrollSensitivity` | `number`                 | `5`         | No       | Multiplier applied to wheel scrolling.                               |
| `optionItemHeight`  | `number`                 | `30`        | No       | Height of each option row in pixels.                                 |
| `classes`           | `WheelPickerClasses`     | `undefined` | No       | Class overrides for optionItem, highlightWrapper, and highlightItem. |
| `ref`               | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the picker element.                            |

### WheelPickerWrapper

Styled group container for one or more wheel pickers.

| Prop       | Type                     | Default     | Required | Description                                       |
| ---------- | ------------------------ | ----------- | -------- | ------------------------------------------------- |
| `children` | `Snippet`                | —           | Yes      | WheelPicker components rendered inside the group. |
| `class`    | `string`                 | `undefined` | No       | Additional classes applied to the wrapper.        |
| `ref`      | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the wrapper element.        |

## Features

- Natural touch scrolling with smooth inertia, mouse drag and scroll for desktop
- Infinite loop scrolling
- Unstyled core for complete style customization
- Full keyboard navigation and type-ahead search

## Examples

### Time picker

Combine three wheel pickers to select an hour, minute, and meridiem.

```svelte
<script lang="ts">
  import {
    WheelPicker,
    WheelPickerWrapper,
    type WheelPickerOption
  } from "$chan/wheel-picker";

  const createArray = (length: number, add = 0): WheelPickerOption<number>[] =>
    Array.from({ length }, (_, i) => {
      const value = i + add;

      return {
        label: value.toString().padStart(2, "0"),
        value
      };
    });

  const hourOptions = createArray(12, 1);
  const minuteOptions = createArray(60);
  const meridiemOptions: WheelPickerOption[] = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" }
  ];
</script>

<div class="w-56">
  <WheelPickerWrapper>
    <WheelPicker
      options={hourOptions}
      defaultValue={9}
      infinite
      aria-label="Hour"
    />
    <WheelPicker
      options={minuteOptions}
      defaultValue={41}
      infinite
      aria-label="Minute"
    />
    <WheelPicker
      options={meridiemOptions}
      defaultValue="AM"
      aria-label="AM or PM"
    />
  </WheelPickerWrapper>
</div>
```
