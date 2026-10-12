# Aurora Next Starter

A production-ready Next.js starter with a modern TypeScript toolchain, accessible UI foundations, automated quality checks, and a practical testing setup.

## Features

- Next.js 16 with the App Router and React 19
- TypeScript with strict mode and absolute imports
- Tailwind CSS 4 and dark-mode support
- Base UI components with class-variance-authority
- Biome linting and formatting
- Vitest and React Testing Library
- Storybook component development
- T3 Env validation
- Husky and lint-staged Git hooks
- GitHub Actions checks for formatting, tests, builds, and Storybook

## Requirements

- Node.js 24.13 or newer
- pnpm 10.30.3

## Getting started

```bash
git clone https://github.com/MarieHasson/aurora-next-starter.git
cd aurora-next-starter
corepack enable
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm check` | Run Biome checks |
| `pnpm fix` | Apply safe Biome fixes |
| `pnpm test` | Run the test suite |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm storybook` | Start Storybook |
| `pnpm storybook:build` | Build the static Storybook site |

## Project structure

```text
src/
├── app/          # App Router pages and layouts
├── components/   # Reusable components and providers
├── hooks/        # Shared React hooks
├── lib/          # Utilities, environment validation, and declarations
└── styles/       # Global styles and design tokens
__tests__/       # Tests mirroring the source structure
```

## Environment variables

Copy `.env.example` to `.env.local` and add values as the application grows. Environment validation lives in `src/lib/env/env.mjs`.

## Contributing

1. Create a branch from `main`.
2. Make the change and add or update tests.
3. Run `pnpm check`, `pnpm test`, and `pnpm build`.
4. Open a pull request with a concise summary of the change.

## License

Licensed under the [MIT License](LICENSE).
