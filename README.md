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

### Option A — Personal GitHub (recommended if org Vercel access is blocked)

You do **not** need to rewrite the code. Push this same repo to your personal GitHub, then import it in Vercel under your account.

1. Create an empty repo on GitHub (e.g. `vetezclaim-website`) — **no** README, `.gitignore`, or license (this repo already has them).
2. Point `origin` at your repo and push:

```bash
cd VetEzClaimWebsite

# Keep a reference to the org remote (optional)
git remote rename origin vetezclaim-org

# Replace YOUR_GITHUB_USERNAME with your personal account
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/vetezclaim-website.git

git push -u origin main
```

3. [Vercel](https://vercel.com/new) → **Import** your personal `vetezclaim-website` repo.
4. Framework preset: **Next.js** (auto-detected).
5. Add env vars from `.env.example` in the Vercel project settings.
6. Deploy — you get a `*.vercel.app` URL immediately.
7. When ready, add custom domain **`vetezclaim.com`** in Vercel → Domains (DNS must be updated at the registrar; repo host does not need to be the VetEzClaim org).

The org GitHub repo can stay as-is or be archived later; production hosting is tied to **Vercel + DNS**, not which GitHub org owns the code.

### Option B — VetEzClaim org GitHub

Requires a GitHub org owner to approve the Vercel GitHub App for `VetEzClaim/VetEzClaimWebsite`.

1. Import this repo in Vercel under the client team
2. Framework preset: **Next.js**
3. Add env vars from `.env.example`
4. Deploy
5. Add custom domain `vetezclaim.com` when DNS is ready

## Content notes

This rebuild replaces legacy subscription copy (`$9.95/month`) with the current nonprofit model:

- Free features after account + profile completion
- Optional Zeffy donations
- Links to web app legal pages for Terms / Privacy / Accessibility
