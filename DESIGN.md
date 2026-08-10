# DESIGN.md — StockyLift landing (redesign, 2026-07-06)

Authority file. Every visual/motion decision defers to this. If code and this file disagree, this file wins.

## Design read
Rescue-tool landing for Shopify merchants under a real deadline (Stocky dies Aug 31, 2026).
Language: precise ledger + cobalt. The page behaves like a competent instrument doing an urgent
job: mono numerals, tabular data motifs, one saturated accent, zero decoration. Trust-first
commerce constraint overrides artsiness.
Dials: VARIANCE 6 / MOTION 5 / DENSITY 4.

## Direction (grill, 2026-07-06)
Josh: "its own third thing", hero = deadline type + live popup demo, motion = Claude picks,
FULL repick of palette + type. Quality bar: freeflow + fantik. This page copies neither:
not freeflow's warm paper serif calm, not fantik's dark industrial. It is a cool, lit,
data-forward "evacuation notice done beautifully".

## Type (self-hosted, /site/fonts — zero third-party requests)
- Display + body: **Satoshi** (Fontshare) 400/500/700/900. Display tracking -0.025em, leading <=1.05.
- Numerals/data: ui-monospace stack (`ui-monospace, "SF Mono", "Cascadia Mono", monospace`),
  tabular-nums. EVERY number on the page is mono: countdown, dates, prices, field counts, CSV rows.
- NO Inter, NO serif anywhere, NO General Sans (used on both prior sites; repick means repick).

## Color (locked — auto light/dark, ONE accent)
Light: --bg #fafbfc (cool paper) · --surface #ffffff · --hairline #e4e7eb · --ink #16181d ·
--muted #4b5158 (AA 7.4:1) · --accent #2742e8 cobalt (primary CTA fill w/ white text ~6.3:1,
links, ONE emphasis per section) · --accent-ink #1e34c4 (hover).
Dark: --bg #101114 · --surface #17181c · --hairline #2a2c32 · --ink #e9eaee · --muted #a6abb5 ·
--accent #7d8cff for text/links (AA on dark), CTA stays cobalt #2742e8 fill + white text.
No emerald anywhere (extension UI gets re-skinned to cobalt later, logged as follow-up task).
Banned: beige/cream/brass, purple glow, gradients, glassmorphism (commerce trust = solid
surfaces + hairlines). Deadline urgency is expressed by type scale + the mono countdown, NEVER
a second color (no red).

## Motion rules (5/10 — quick, precise, nothing bounces, nothing loops except the product)
- Ease ease-out cubic-bezier(0.23,1,0.32,1); UI <300ms; reveal staggers 60ms; rise 14px + fade,
  once per section (IntersectionObserver, no scroll libs — static no-dep site, native scroll;
  no smooth-scroll hijack so the Lenis rule is moot).
- ONE orchestrated hero load: countdown digits settle, headline lines, sub, CTA, then the demo
  popup "connects".
- Live countdown to 2026-08-31 23:59 UTC ticks 1/s (real state, not a count-up; frozen under
  reduced-motion at the true value, still accurate on load).
- Signature move: the hero popup demo (the REAL extension popup markup/CSS from /demo, embedded
  as a working component) runs a scripted export: pages tick up, supplier rows stream into a
  CSV file card, ends on "suppliers.csv ✓". 12s, pauses when off-screen and under reduced-motion.
- NO count-ups on static numbers, no parallax, no sticky scrub, no magnetic hover, no marquee.
- prefers-reduced-motion: everything instant/static; demo shows the finished-export frame.

## Hero (asymmetric split, min-h 100dvh capped, content fits viewport)
Left: mono countdown strip `047 days 09 : 22 : 41` small, then H1 (2 lines max, ~5 words/line)
"Stocky shuts down Aug 31." / sub <=20 words: "There is no supplier export button. StockyLift
adds one. Your full list, out to CSV, in two minutes." / CTA row: cobalt "Get StockyLift" +
ghost "See how it works". Right: the live popup demo card (real component, hairline border,
tinted shadow). Mobile: stack, demo below CTAs, countdown stays.

## Sections (7, >=5 layout families, max 2 eyebrows total)
1. Nav (64px, hairline bottom): wordmark "StockyLift" + one CTA "Get StockyLift" (same label
   everywhere, one intent).
2. Hero (asymmetric split, above).
3. The situation (full-width statement band): plain-language 3 lines on the shutdown citing
   Shopify's own "recreate suppliers manually" doc line; mono date facts. No cards.
4. How it works (3 numbered steps, horizontal, verb labels "Paste key / Preview / Export",
   step numerals mono cobalt).
5. What you export (bento 1 big + 4: Generic CSV big cell w/ real header-row visual; JSON
   backup; Prediko; Inventory Planner; Genie. Beta presets labeled honestly).
6. Runs in your browser (2-col: statement + 4 check rows: no servers, no account, key never
   leaves your machine, works until the API dies). Cobalt check glyphs = the section's one emphasis.
7. Pricing (single card, mono "$39", one line "One store, forever, 14-day refund") + FAQ
   (accordion, keeps existing FAQPage JSON-LD + copy, keeps slugs/anchors for SEO) + footer.

## Copy rules
Verb-first plain English, no em-dashes anywhere, no "Seamless/Unleash", no fake numbers: field
count (18), price ($39), and dates are real. One register: calm expert under deadline.

## Ship-readiness
Static, no bundler, no deps (repo convention). Keep files index.html / thanks.html /
privacy.html, same slugs + anchor ids. Title/meta/OG/favicon (cobalt square, mono "S").
thanks + privacy re-skinned to the same tokens. pa11y AA, focus-visible everywhere,
gzip < 300KB incl. fonts.

## Bans (standing + this page)
One accent (cobalt) · no em-dashes · no Inter/serif/General Sans · no WebGL · no glass ·
no scroll cues · no eyebrows beyond 2 · no decorative dots (the demo's status dot is real
state) · no fake urgency counters beyond the real countdown.
