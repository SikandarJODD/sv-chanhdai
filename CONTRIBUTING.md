# Contributing

Thanks for helping improve the project.

## Setup

```bash
pnpm install
pnpm dev
```

## Add a component or block

1. Create a kebab-case folder in `src/lib/components/chan/`. Add the
   component files and export them from `index.ts`.
2. Add the component to `registry.json`, including its files and dependencies.
3. Generate its docs route:

   ```bash
   pnpm create:route my-component --source chan/my-component
   ```

4. Edit the generated `data.ts` and files in `examples/`. Add a clear preview,
   usage example, description, features, and props.
5. Generate `docs.md` from `data.ts`:

   ```bash
   pnpm generate:docs my-component
   ```

6. Build the installable registry files:

   ```bash
   pnpm build:blocks
   ```

## Check your work

```bash
pnpm format
pnpm check
pnpm lint
```

Open a pull request with a short summary and a screenshot or recording of the
component.
