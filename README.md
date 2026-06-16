# VetEZ Claim marketing website

Rebuilt marketing site for [vetezclaim.com](https://vetezclaim.com), deployable on Vercel.

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- Zeffy embed donate button

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WEB_APP_URL` | Link to the logged-in web app (e.g. `https://app.vetezclaim.com`) |
| `NEXT_PUBLIC_APP_STORE_URL` | Apple App Store listing |
| `NEXT_PUBLIC_ZEFFY_DONATION_FORM_URL` | Hosted Zeffy donate page |
| `NEXT_PUBLIC_ZEFFY_EMBED_FORM_URL` | Zeffy modal embed URL |
| `FORMSPREE_FORM_ID` | Optional — enables contact form delivery in production |

Without `FORMSPREE_FORM_ID`, the contact form returns success in dev and logs submissions to the server console.

## Deploy to Vercel

1. Import this repo in Vercel
2. Framework preset: **Next.js**
3. Add env vars from `.env.example`
4. Deploy
5. Add custom domain `vetezclaim.com` when DNS is ready

## Content notes

This rebuild replaces legacy subscription copy (`$9.95/month`) with the current nonprofit model:

- Free features after account + profile completion
- Optional Zeffy donations
- Links to web app legal pages for Terms / Privacy / Accessibility
