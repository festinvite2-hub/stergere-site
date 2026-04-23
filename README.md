# Wedify shutdown project

Minimal Next.js app for Vercel that returns **410 Gone** for all public pages via root `middleware.ts`.

## Deploy to Vercel

1. Create a new Vercel project from this repository/folder.
2. Keep the framework preset as **Next.js**.
3. Add both domains to this project: `wedify.ro` and `www.wedify.ro`.
4. Deploy.
5. Verify with:
   - `curl -I https://wedify.ro/`
   - `curl -I https://www.wedify.ro/`

Both should return `410 Gone` and include `X-Robots-Tag: noindex, nofollow`.
