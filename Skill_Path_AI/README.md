```txt
npm install
npm run dev
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## Vercel deploy

This repo is also wired for Vercel. Import the Git repository into Vercel, or deploy from the CLI:

```txt
npx vercel
```

For production deploys:

```txt
npx vercel --prod
```

Before deploying, add `GROQ_API_KEY` in your Vercel project environment variables.
