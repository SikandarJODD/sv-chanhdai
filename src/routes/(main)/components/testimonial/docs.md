# Testimonial

Display user feedback with author info, avatar, and verified badge.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial.json
```

## Usage

```svelte
<script lang="ts">
  import {
    Testimonial,
    TestimonialAuthor,
    TestimonialAuthorName,
    TestimonialAuthorTagline,
    TestimonialAvatar,
    TestimonialAvatarImg,
    TestimonialAvatarRing,
    TestimonialQuote
  } from "$chan/testimonial";
</script>

<Testimonial>
  <TestimonialQuote>
    <p>This component library is a joy to use.</p>
  </TestimonialQuote>
  <TestimonialAuthor>
    <TestimonialAvatar>
      <TestimonialAvatarImg src="/avatar.jpg" alt="Jane Doe" />
      <TestimonialAvatarRing />
    </TestimonialAvatar>
    <TestimonialAuthorName>Jane Doe</TestimonialAuthorName>
    <TestimonialAuthorTagline>Product Designer</TestimonialAuthorTagline>
  </TestimonialAuthor>
</Testimonial>
```

## Props

### Testimonial layout components

Shared API for Testimonial, Author, AuthorName, AuthorTagline, Avatar, AvatarRing, Quote, and VerifiedBadge.

| Prop       | Type                  | Default     | Required | Description                                                 |
| ---------- | --------------------- | ----------- | -------- | ----------------------------------------------------------- |
| `children` | `Snippet`             | `undefined` | No       | Content rendered inside the selected testimonial primitive. |
| `class`    | `string`              | `undefined` | No       | Additional classes applied to the primitive element.        |
| `ref`      | `HTMLElement \| null` | `null`      | No       | Bindable reference to the primitive's underlying element.   |

### TestimonialAvatarImg

Image primitive used inside TestimonialAvatar.

| Prop    | Type                       | Default     | Required | Description                                 |
| ------- | -------------------------- | ----------- | -------- | ------------------------------------------- |
| `src`   | `string`                   | `undefined` | No       | Avatar image URL.                           |
| `alt`   | `string`                   | `undefined` | No       | Accessible alternative text for the avatar. |
| `class` | `string`                   | `undefined` | No       | Additional classes applied to the image.    |
| `ref`   | `HTMLImageElement \| null` | `null`      | No       | Bindable reference to the image element.    |

## Features

- Composable testimonial layout with quote, author info, and avatar
- Built-in verified badge for the author name
- Composable via Testimonial, TestimonialAuthor, TestimonialAvatar, and related subcomponents
