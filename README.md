# Laundry landing page

The public landing page for the laundry pickup-and-delivery app. Astro, static
output, English at `/` and Arabic (RTL) at `/ar/`.

It wears the app's **Care Label** identity unchanged (tokens ported from
`laundry_app/lib/core/design`): tape and ink, one marking-ink violet for
actions, stitch hairlines, the care-glyph pictograms, and Archivo for labels
and serials. The phone in the page is the real app's screens rebuilt in HTML
and labelled as sample data.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm preview
```

## Configure

Copy `.env.example` to `.env` and set per deploy:

| Variable | Used for |
| --- | --- |
| `PUBLIC_SITE_URL` | Canonical and hreflang URLs |
| `PUBLIC_APP_STORE_URL` / `PUBLIC_PLAY_STORE_URL` | Store buttons |
| `PUBLIC_WHATSAPP_NUMBER` | WhatsApp links (digits with country code) |
| `PUBLIC_WAITLIST_ENDPOINT` | Launch-list form; receives `POST {"contact","lang"}` as JSON, any 2xx counts as joined |

Unset links fall back to the page's "Get the app" section. Until the
waitlist endpoint is set, the form validates input and then shows its
failure message pointing to WhatsApp.

## Before launch

- Replace the placeholder photography in `public/images/` (see
  `public/images/CREDITS.md`) with real brand photography.
- Copy lives in `src/i18n/en.ts` and `src/i18n/ar.ts`; app-facing labels
  mirror `laundry_app/lib/l10n/*.arb`, so update both together.
