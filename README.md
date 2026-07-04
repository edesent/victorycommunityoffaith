# Victory Community of Faith — victorycommunityoffaith

The website for **Victory Community of Faith**, 1016 E Pawnee St, Wichita, KS 67211 — Pastor **Dr. Jermaine E. Pennington**. "People Empowered to Win." A Liberationist church, striving to set the captives free.

Live at **https://victorycommunityoffaith.vercel.app** (auto-deploys from `main`).

Built and hosted by Pastor Eli — [elijahdesent.com](https://www.elijahdesent.com).

---

## How this site is organized (read me first, AI editors)

- **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.** No `tailwind.config.ts` — theme tokens live in `src/app/globals.css` under `@theme inline`.
- **Church facts live in one file: `src/config/site.data.ts`** — name, tagline, pastor, phone, email, address, Facebook/YouTube links, YouTube channel ID. Change contact info or service-time-adjacent metadata there first. `src/config/site.ts` holds derived helpers; leave it alone.
- **Every homepage section is a component in `src/components/`**, composed in `src/app/page.tsx`. To remove a section, delete its line in `page.tsx`.
- **Pages:** `/` home · `/pastor` · `/statement-of-faith` · `/messages` (auto-updates from the church's YouTube channel) · `/give` · `/lead-institute` · `/plan-of-salvation`.
- **Service times appear in three places:** `src/components/ServiceTimes.tsx`, `src/components/Footer.tsx`, and the JSON-LD block in `src/app/page.tsx`. Keep them in sync (currently: Worship Celebration Sun 11:00 AM · Word On Wednesday WOW 6:00 PM).
- **Photos** are in `public/photos/` — these are the church's real photos (no stock, no AI images, please keep it that way). The logo is `public/logo.png`.
- **Brand palette** (from the church's crown-cross "V" crest): royal purple `#661562`, antique gold `#c9a352`, warm cream backgrounds. The Tailwind token names keep the boilerplate vocabulary: `brown-*` tokens carry the purples, `burgundy` the brighter plum accent.
- **Giving** goes through Cash App **$VictoryinWichitanow** (see `/give` and `src/components/Give.tsx`).
- For ANY change to an existing file, replace the smallest exact string you can. Don't rewrite whole files or add new abstractions.
- **Next.js note:** version 16 has breaking changes vs. older training data — read `node_modules/next/dist/docs/` before writing new framework code (see `AGENTS.md`).

## Edit this site in plain English (no code)

This site can be edited through the **Custom Website Editor** — a hosted [MCP](https://modelcontextprotocol.io) tool built by Pastor Eli. Describe the change ("update our Wednesday time", "swap the hero photo") and it makes the exact edit and ships it live in about 30 seconds.

**Add it to ChatGPT or Claude:**

- **Endpoint:** `https://www.elijahdesent.com/api/mcp`
- **Transport:** Streamable HTTP
- **Auth:** OAuth (you just sign in once)
- **MCP Registry name:** `com.elijahdesent/custom-website-editor`

In ChatGPT (Settings → Connectors → Add) or Claude (Settings → Connectors → Add custom connector), paste the endpoint and sign in. Then just ask for the change you want.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```
