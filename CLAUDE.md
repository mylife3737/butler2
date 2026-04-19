# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dynamic HTML campaign website for **Cynthia Butler**, running for Florida House District 75 (November 3, 2026). No build step — pure HTML/CSS/JS.

## Tech Stack

| Dependency | Version | Source |
|---|---|---|
| Bootstrap CSS | 5.3.3 | jsDelivr CDN |
| Bootstrap JS Bundle (incl. Popper) | 5.3.3 | jsDelivr CDN |
| Bootstrap Icons | 1.11.3 | jsDelivr CDN |

Forms use Netlify form handling (`data-netlify="true"`).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, issues preview, quote band, CTA |
| `about.html` | Candidate bio and civic experience |
| `issues.html` | Full platform/issues page with ethics band |
| `get-involved.html` | Volunteer sign-up form + donation section |
| `contact.html` | Contact form + campaign info card |
| `Butler campaign video v1.html` | Fullscreen slide-deck presentation (dark theme) |

## Design System

All pages share the same CSS custom properties defined in each file's `<style>` block:

```css
--cb-blue:     #1a3a6b;   /* Democratic Blue — primary */
--cb-blue-mid: #2255a4;   /* Mid blue — gradients */
--cb-red:      #c8102e;   /* Accent / CTAs */
--cb-black:    #111111;
--cb-white:    #ffffff;
```

The video file (`Butler campaign video v1.html`) uses a separate dark-theme palette with `--blue` (`#1A4A8A`) and `--accent` (`#2255a4` Democratic Blue) replacing the original gold.

**Key CSS classes used across all pages:**
- `.navbar` — sticky, dark blue, red bottom border
- `.page-header` — blue gradient header with red bottom border
- `.stripe` — blue/red split divider bar
- `.btn-primary-cb` — red CTA button
- `.btn-blue-cb` — blue button
- `.section-label` / `.section-heading` — uppercase label + bold heading pair
- `.footer-name` — white bold campaign name in footer

## Content Status

Most content blocks are `<!-- PLACEHOLDER -->` comments waiting for questionnaire responses from Cynthia. Sections to fill in come from:
- **Section 1** — contact info, headquarters address, social links
- **Section 2** — bio, story, personal background
- **Section 3** — platform issues and positions
- **Section 4** — campaign finance policies
- **Section 5** — civic experience

When filling placeholders, always replace `[bracket text]` with real content. Do not remove the surrounding HTML structure.

## Roadmap — Open Placeholders

Tracked per-file. Check off items as content arrives from Cynthia's questionnaire.

### `index.html`
- [ ] **Hero tagline** (`hero-sub`) — replace bracket text with Cynthia's real one-liner
- [ ] **Hero photo** — replace `.hero-photo-placeholder` div with `<img>` once photo is supplied
- [ ] **Issues intro** (`section-sub` under "What Matters") — district-specific one-sentence framing
- [ ] **Issue card: Housing & Affordability** — fill `<p>` with Cynthia's position
- [ ] **Issue card: Healthcare Access** — fill `<p>` with Cynthia's position
- [ ] **Issue card: Infrastructure & Flooding** — fill `<p>` with Cynthia's position
- [ ] **Quote band** — replace bracket text with Cynthia's most compelling quote
- [ ] **Footer address** — replace `[Campaign HQ Address]` with real street address
- [ ] **Social links** — replace all `href="#"` with real Facebook, Instagram, X, TikTok URLs

### Other pages (placeholders not yet audited)
- [ ] Audit `about.html` for open placeholders
- [ ] Audit `issues.html` for open placeholders
- [ ] Audit `get-involved.html` — replace `#` donate link with real ActBlue URL
- [ ] Audit `contact.html` for open placeholders

## Deployment

Site is designed for Netlify deployment. Volunteer and contact forms use `data-netlify="true"` with honeypot spam protection (`netlify-honeypot="bot-field"`). Deploy the directory as-is.

## Campaign Context

- Candidate: Cynthia Butler, Democrat
- District 75 covers southern Sarasota County + Charlotte County (Port Charlotte area)
- Opponent: Danny Nix (R), incumbent
- Election Day: November 3, 2026
- Budget: under $25,000

## Open Placeholders

Replace these before launch — all marked `<!-- PLACEHOLDER -->` in the HTML:
- Donation link (`href="#"`) in `get-involved.html` — replace with ActBlue or campaign platform URL
- Social media URLs (`href="#"`) in footer of every page and `contact.html`
- Campaign phone number and email in `contact.html` and `Butler campaign video v1.html`
- Campaign HQ address in footer of every page
- All `[bracket text]` content blocks (bio, issues, quotes) — filled from questionnaire responses
