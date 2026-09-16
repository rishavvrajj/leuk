# leuk

Type a GitHub username on the landing page → instantly get a beautiful, shareable dev-portfolio page at `/[username]`.

Live data is fetched from the GitHub REST API. **No database.** Everything is fetched at request time and cached with Next.js `fetch` for 1 hour.

## ✨ Features

- Live GitHub data via the REST API v3 (no storage, no DB)
- Dark, modern, glassy dev-portfolio aesthetic
- Hero with avatar, bio, and badges (company · location · followers · website · X)
- Stat cards: Total Stars, Public Repos, Followers, Top Repo Stars
- Language breakdown using real GitHub language colours
- Top 12 repositories (sorted by stars, forks excluded) with topics and archived badges
- `/[username]` route + custom loading, 404, and error states
- One-click **Refresh** that busts the cache and re-pulls fresh data without a full page reload
- SEO metadata + Open Graph image per user
- Fully responsive

## 🛠 Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- GitHub REST API v3 (`api.github.com`)

## 📁 Structure

```
lib/github.ts          # All GitHub fetching + portfolio transformation
lib/colors.ts          # GitHub language → colour map
app/page.tsx           # Landing page + SearchBox
app/[username]/page.tsx# Portfolio page (server component)
app/[username]/loading.tsx
app/[username]/not-found.tsx
app/error.tsx
app/api/refresh/[username]/route.ts  # POST: cache-bust + refetch
components/…          # SearchBox, StatCard, LanguageBars, RepoCard, RefreshButton
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), type a username (e.g. `torvalds`), and hit **Generate**.

### Optional: GitHub token

Without a token you get the unauthenticated rate limit of **60 requests/hour**. Setting `GITHUB_TOKEN` raises that to **5,000/hour**.

1. Go to https://github.com/settings/tokens → **Tokens (classic)** → **Generate new token**.
2. You only need the `public_repo` (read) scope — or leave scopes unchecked for pure public reads.
3. Create a `.env.local` file and paste it in:

```bash
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

4. Restart the dev server. That's it — the app reads `GITHUB_TOKEN` from the environment and works without it too.

> ⚠️ Never commit a real token. `.gitignore` already ignores `.env*`.

## ⚙️ How caching works

- All GitHub fetches use `next: { revalidate: 3600 }` — data goes stale after **1 hour**, then revalidates in the background.
- The **Refresh** button POSTs to `/api/refresh/[username]`, which revalidates the page + its fetch tags and re-pulls with `cache: "no-store"`, then calls `router.refresh()` to update the UI — no full page reload.

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository in [vercel.com](https://vercel.com) — it auto-detects Next.js.
3. (Optional) Add a `GITHUB_TOKEN` environment variable in Settings → Environment Variables.
4. Deploy. Done.

> 💡 Set the `metadataBase` field (see `app/layout.tsx`) to your production domain for correct Open Graph URLs.

## 🙏 Data

All data comes from [GitHub's REST API](https://docs.github.com/en/rest) and is cached for up to 1 hour. It is used for display only — no user data is stored.