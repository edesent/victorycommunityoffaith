# Victory Community of Faith — victorycommunityoffaith

The website for **Victory Community of Faith**, 1016 E Pawnee St, Wichita, KS 67211 — Pastor **Dr. Jermaine E. Pennington**. "People Empowered to Win." A Liberationist church, striving to set the captives free.

Live at **https://www.victorychurchwichita.com** (auto-deploys from `main`).

Built and hosted by Pastor Eli — [elijahdesent.com](https://www.elijahdesent.com).

---

## How this site is organized (read me first, AI editors)

- **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.** No `tailwind.config.ts` — theme tokens live in `src/app/globals.css` under `@theme inline`.
- **Two config files hold almost all the words:**
  - `src/config/site.data.ts` — church facts: name, tagline, pastor, phone, email, address, Facebook/YouTube links, YouTube channel ID. Change contact info here first. (`src/config/site.ts` holds derived helpers; leave it alone.)
  - `src/config/content.ts` — everything the bigger pages render: calendar of events, leadership, ministries, volunteer roles, L.E.A.D. courses, store products, venue/counseling services, giving copy, Givebutter IDs.
- **Every homepage section is a component in `src/components/`**, composed in `src/app/page.tsx`. To remove a section, delete its line in `page.tsx`.
- For ANY change to an existing file, replace the smallest exact string you can. Don't rewrite whole files or add new abstractions.
- **Next.js note:** version 16 has breaking changes vs. older training data — read `node_modules/next/dist/docs/` before writing new framework code (see `AGENTS.md`).

### Pages

| Path | What's there |
| --- | --- |
| `/` | Home — hero, live, pastor welcome, service times, calendar, ministries, giving, map |
| `/about` | Our Story — mission, 2026 theme, six core values, Meet the Leadership |
| `/pastor` | Dr. Pennington's bio |
| `/messages` | Watch Live (YouTube live embed) + searchable sermon archive (auto-updates from YouTube) |
| `/ministries` | Ministries + volunteer sign-up form (`#volunteer`) |
| `/lead-institute` | L.E.A.D. Institute — focus areas, course catalog (`#courses`), enrollment form (`#enroll`) |
| `/store` | Victory Store — Dr. Pennington's books + church merchandise, Stripe checkout |
| `/store/thank-you` | Post-checkout confirmation (noindex) |
| `/weddings-and-care` | Facility rental (`#rentals`), officiant, and counseling booking (`#care`) |
| `/give` | Givebutter giving form, stewardship vision, Greater Glory Campaign, four ways to give |
| `/contact` | Contact form, office hours, map, Plan Your Visit (`#visit`) |
| `/statement-of-faith`, `/plan-of-salvation` | Beliefs |

Adding or removing a page? Update `src/app/sitemap.ts` and the `navItems` list in `src/components/Navbar.tsx`.

### Things that live in more than one place

- **Service times** appear in `src/components/ServiceTimes.tsx`, `src/components/Footer.tsx`, `src/app/contact/page.tsx`, and the JSON-LD block in `src/app/page.tsx`. Keep them in sync — currently **Sunday Worship Celebration 11 AM · Word On Wednesday (WOW) 6 PM**.
- **Calendar of events** is `EVENTS` + `MONTH_LABEL` in `src/config/content.ts`. The church publishes a new flyer monthly; replace the whole list when it does. (Currently August 2026.)

### Brand & photos

- **Palette** (from the church's crown-cross "V" crest): royal purple `#661562`, antique gold `#c9a352`, warm cream backgrounds. Token names keep the boilerplate vocabulary: `brown-*` tokens carry the purples, `burgundy` the brighter plum accent.
- **Photos** are in `public/photos/` — the church's real photos. No stock, no AI-generated images, please keep it that way. Logo is `public/logo.png`; the Greater Glory crest is `public/footer-logo.png`.

---

## Giving, store, and forms

### Giving — Givebutter

`/give` embeds the church's real Givebutter campaign, **Greater Glory** (`givebutter.com/greater-glory-omwhvc`), via Givebutter's campaign iframe. It handles one-time and recurring gifts, cards, bank transfer, Apple/Google Pay, PayPal, and Venmo.

The iframe is used because Givebutter's newer `<givebutter-widget>` element requires a widget ID generated in the Givebutter dashboard. If Dr. Pennington creates one under **Sharing → Widgets**, we can switch to it and get automatic height; the account ID (`s8fzTEhRHutQmX7A`) and campaign code (`OMWHVC`) are already recorded in `src/config/content.ts`.

Cash App (`$VictoryinWichitanow`), in person, and by mail are also listed on `/give`.

### Store — Stripe

`/store` sells Dr. Pennington's four books and church merchandise. Prices live in `PRODUCTS` in `src/config/content.ts` and are **always re-read on the server** at checkout, so the browser can't change what anything costs.

Checkout turns on the moment `STRIPE_SECRET_KEY` is set in Vercel. Until then, the cart shows a "call the church to order" message instead of a broken button. The page is `force-dynamic` so adding the key takes effect without a rebuild.

### Live chat — Slack

A chat bubble sits on every page (installed in `src/app/layout.tsx`). Messages land in the church's Slack channel **#victory-cof** (`C0BMBV8NZAS`) as a thread; whoever replies in Slack shows up live in the visitor's chat window. The bubble wears Dr. Pennington's photo so visitors know they're writing to a person.

Settings live in `CHAT` in `src/config/content.ts`. The `wbc_` key is a **public widget key** — it's meant to ship in the page HTML, so it isn't a secret. The tag is a plain `<script defer>` rather than `next/script` on purpose: the widget reads its options off `document.currentScript`, so it must reach the browser exactly as written.

Any button anywhere on the site can open the chat with **`window.WBCChat.open()`** — that's how the "Start a Conversation" button on the home page works. Don't build a second chat UI; call that.

### Forms can go to Slack instead of email

Two delivery paths exist, and **a form can use either one**:

| Path | Where it lands | Setup needed |
| --- | --- | --- |
| **Slack** (`/api/visit`) | Straight into #victory-cof, seconds later | **None — already working** |
| **Email** (Resend) | The church inbox | Needs `RESEND_API_KEY` + a verified domain |

**Plan Your Visit** (`/contact#visit`) already uses the Slack path, which is why it works today while the email forms don't.

**To move any other form to Slack**, point its `<RequestForm endpoint="…">` at a route modelled on [src/app/api/visit/route.ts](src/app/api/visit/route.ts). That route just POSTs to the chat backend:

```
POST https://slackwebsitechat.vercel.app/api/chat/contact-form
{ apiKey, subject, name, contact, message }
```

`subject` becomes the bold headline in Slack, and `message` accepts Slack markdown, so label/value lines render nicely. Rate limit is 5 submissions per IP per 10 minutes. Good candidates to switch: contact, prayer, and counseling — anything the pastor wants on his phone immediately. Leave orders and enrollment on email, where a written record matters more than speed.

### Forms — Resend (email path)

Contact, prayer, volunteer, L.E.A.D. enrollment, facility rental, and counseling forms post to API routes that email the church. They need `RESEND_API_KEY` in Vercel; without it, forms show "The form isn't configured yet."

Destination and sender are set in `src/lib/email.ts`. **The sender is currently `onboarding@resend.dev`, which only delivers to the address the Resend account was created with.** To reach `jpenny316@gmail.com`, verify `victorychurchwichita.com` at https://resend.com/domains and switch `SENDER` to the commented line in that file.

| Route | Used by |
| --- | --- |
| `/api/contact` | `/contact` |
| `/api/prayer` | Prayer request on the home page |
| `/api/request` | Volunteer, enrollment, rental, and counseling forms (whitelisted `kind` values) |
| `/api/checkout` | Store cart → Stripe Checkout |

### Environment variables

| Name | Needed for | Set? |
| --- | --- | --- |
| `RESEND_API_KEY` | All website forms | Not yet |
| `STRIPE_SECRET_KEY` | Victory Store checkout | Not yet |

---

## Still to confirm with the pastor

`REVIEW_ITEMS` at the top of `src/config/content.ts` lists everything on the site that was drafted rather than confirmed — office hours, book and merch prices, course details, ministry descriptions, rental rates, and counseling fees. Real facts (service times, the 2026 theme, core values, the Greater Glory Campaign, book titles, the L.E.A.D. acronym) are marked as confirmed in that file. No person's name is invented anywhere: leadership slots without a confirmed name are simply not rendered.

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
