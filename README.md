# Beau & Sara · Wedding Invitation Site

A minimal, elegant React wedding invitation that reveals event details only after a guest RSVPs. Built with Vite + React + React Router. RSVP submissions are captured via **Netlify Forms** (no backend or email server required).

## How the RSVP flow works

1. Guest lands on `/` → sees only names, date, and a "Respond" button.
2. Clicks Respond → goes to `/rsvp` form.
3. Submits form:
   - **Yes** → redirected to `/details` (place, time, dress code, registry).
   - **No** → redirected to `/with-love` (registry only).
4. Submission is sent to Netlify, which forwards it to your email and stores it in the Netlify dashboard.

## Do I need an email server?

No. Netlify Forms is built into your hosting. After deploying:

1. Open your site in the Netlify dashboard → **Forms**.
2. You'll see the `rsvp` form listed automatically (Netlify detects it from the hidden form in `index.html`).
3. Click **Settings & usage** → **Form notifications** → add an **Email notification** → enter your personal email.
4. Free tier allows 100 submissions/month — more than enough for a wedding.

## Local development

```bash
npm install
npm run dev
```

Note: Form submissions only work on the deployed Netlify site, not in local dev. To test locally, install the Netlify CLI and run `netlify dev`.

## Deploy to Netlify

**Option A — Drag and drop:**
1. `npm run build`
2. Drag the `dist/` folder onto https://app.netlify.com/drop

**Option B — Git-connected (recommended):**
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git** → select the repo.
3. Build settings are read from `netlify.toml` automatically.
4. Deploy.

## What to customise before going live

In `src/pages/Details.jsx`:
- Venue name, address, ceremony time
- Google Maps link
- Registry URL
- Dress code description
- Travel notes

In `src/pages/Farewell.jsx`:
- Registry URL

In `src/pages/Invitation.jsx`:
- RSVP deadline date

In `index.html`:
- `<title>` and meta description

## Stack notes

- **Vite** for build (fast, simple, deploys to static hosts).
- **React Router** for client-side routing.
- **Netlify Forms** handles RSVP capture — the hidden static form in `index.html` is required so Netlify's build bot detects the form schema.
- **Cormorant Garamond** + **Inter Tight** loaded from Google Fonts.
- No external CSS framework — single hand-written stylesheet (`styles.css`).
