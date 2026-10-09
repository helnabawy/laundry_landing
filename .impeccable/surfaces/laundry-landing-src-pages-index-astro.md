---
version: 1
slug: "laundry-landing-src-pages-index-astro"
primary_target: "laundry_landing/src/pages/index.astro"
related_targets: []
---

# Surface brief: Laundry landing page

Scope: public marketing landing page, EN (`/`) and AR (`/ar/`, RTL). Mode: **Persuade**.
Audience: UAE residents deciding whether to hand their laundry to the service. Job: understand the offer in seconds, trust that price and progress are honest, then act.
Actions (all three): download the app (primary; store URLs are placeholders in `src/config.ts`), join the launch list (form posts to a configurable endpoint), message on WhatsApp (placeholder number).
Proof: the app's real screens and real copy, rebuilt in HTML. No testimonials, ratings, stats, partner logos or store badges with ratings. Demo data in the phone is labelled as sample.
Identity: inherits the app's Care Label world unchanged (see laundry_app/lib/core/design). No new palette, faces or shapes.

## Direction contract

THESIS: The app is the demo. Instead of claiming convenience, the page hands the visitor the actual app: a phone pinned while the story scrolls past drives the real Home, shop, slot, custody strip and return screens. Refuses the stock app-landing of floating mockup screenshots beside feature cards.

OWN-WORLD: Care Label. Tape ground #FBFBF9 / ink #16181C, one marking-ink violet tint #5B2D8E for actions, hi-vis tag #CFE317 only as the driver/field accent, thread red only for failure. Stitch hairlines instead of borders, tape bands stitched on both long edges, woven VIP label, care-glyph pictograms in one 1.9 stroke, Archivo expanded serials and narrow tracked stamped caps, system sans for prose, Noto Kufi Arabic for Arabic display.

STORY: The visitor learns laundry is collected from the door and returned clean; sees two honest ways to order (price now in the shop, priced after count for quick orders); watches an order move through five stages without asking anyone; picks a service level and payment; then downloads, joins the list, or messages.

FIRST VIEWPORT: Stitched nav (mark + LAUNDRY serial, EN/AR switch, Get the app). Start side: linen photograph field with a tape band carrying the headline in Archivo expanded at display scale, tagline as fibre line, App Store + Google Play buttons (violet) and a WhatsApp ruled action. End side, overlapping the photo edge: a phone rendering the live Home screen (large title, ordering-from row, blank custody strip, Quick order, Shop our products).

FORM: Grounded structure #5 of 7 ("The App Is the Demo"), chosen by the user from a dealt hand. Seed key b3fde6f7. Signature interaction: scroll-pinned phone whose screen and custody strip advance stage by stage as narrative steps pass (IntersectionObserver), glyphs filling in place; reduced motion swaps instantly.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
