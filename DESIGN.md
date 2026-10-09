---
name: Laundry Landing (Care Label, web)
description: The web expression of the laundry app's Care Label system, a page that hands the visitor the real app.
colors:
  tape: "#fbfbf9"
  tape-recessed: "#f2f2ee"
  tape-sunken: "#e9e9e3"
  ink: "#16181c"
  ink-secondary: "#5e6068"
  ink-tertiary: "#6e7077"
  on-ink: "#fbfbf9"
  rule: "#d8d6d0"
  rule-strong: "#b9b7af"
  marking-violet: "#5b2d8e"
  marking-violet-pressed: "#472170"
  marking-violet-wash: "#f0e9f8"
  on-tint: "#fbfbf9"
  thread-red: "#e0311f"
  hi-vis-tag: "#cfe317"
  on-tag: "#16181c"
  ink-field: "#16181c"
  on-field: "#fbfbf9"
  on-field-secondary: "#b7b9be"
typography:
  display:
    fontFamily: "Archivo Variable, Noto Kufi Arabic Variable, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.2rem + 3.7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Noto Kufi Arabic Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo Variable, Noto Kufi Arabic Variable, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.2vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 104"
  serial:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 118"
  body:
    fontFamily: "system-ui, -apple-system, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Kufi Arabic Variable, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  body-arabic:
    fontFamily: "Noto Kufi Arabic Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.85
  stamp:
    fontFamily: "Archivo Variable, Noto Kufi Arabic Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.11em"
    fontVariation: "'wdth' 84"
  fibre:
    fontFamily: "Archivo Variable, Noto Kufi Arabic Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.095em"
    fontVariation: "'wdth' 84"
rounded:
  slot: "4px"
  control: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  column-gap: "1.5rem"
  tape-inset: "7px"
  section: "clamp(4.5rem, 9vw, 9rem)"
  max-width: "88rem"
components:
  button-store:
    backgroundColor: "{colors.marking-violet}"
    textColor: "{colors.on-tint}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1.25rem 0.55rem 1rem"
    height: "3.5rem"
  button-store-hover:
    backgroundColor: "{colors.marking-violet-pressed}"
    textColor: "{colors.on-tint}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
    height: "3.25rem"
  button-rule:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
    height: "3.25rem"
  button-rule-hover:
    backgroundColor: "{colors.tape-recessed}"
    textColor: "{colors.ink}"
  woven-label:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.slot}"
    padding: "0.35rem 0.75rem"
  ticket:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    rounded: "{rounded.slot}"
    padding: "1.5rem 1.5rem 1.25rem"
  input-on-field:
    backgroundColor: "transparent"
    textColor: "{colors.on-field}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
---

# Design System: Laundry Landing (Care Label, web)

## Overview

**Creative North Star: "The Care Label"**

This page is the web expression of the laundry app's Care Label system (laundry_app/lib/core/design). The page adds no palette, faces or shapes of its own. Every surface reads as the woven and printed tape sewn into a garment: an off-white tape ground, near-black ink, one violet marking ink for actions, dashed stitching where two pieces of tape meet, and a small set of care pictograms drawn with a single stroke. The app's palette values are carried over hex for hex; the web adds only the CSS mechanics (fluid type, logical properties, a `prefers-color-scheme` dark set).

Density is calm and editorial at page scale, while the phone renders the app's own density at true proportions. Depth is almost absent. Paper-thin lift appears only where a physical object sits on the tape: the headline band over the photograph, the receipt ticket, a sewn label on a photo, the phone itself. Labels are set in narrow, tracked caps ("stamps") and expanded serials, as if printed on the tape; running prose stays in the reader's own system face.

The system is bilingual by construction. Arabic (RTL) swaps the prose face to Noto Kufi Arabic, drops all tracking to zero, opens up line-height, and mirrors through logical properties rather than overrides.

**Key Characteristics:**
- Tape ground, ink text, one violet for every action; red only for failure; hi-vis only for the driver.
- Dashed stitch lines at seams and tape edges; solid hairlines between rows of data.
- Archivo at three widths: expanded for display and serials, narrow tracked caps for stamps.
- Care-glyph pictograms on a 24pt grid with one 1.9 stroke; state shown by modifier, never by a new symbol.
- Full light and dark sets; Arabic is never tracked.

## Colors

A near-monochrome tape-and-ink palette with a single marking ink and two reserved signal colors.

### Primary
- **Marking Violet** (marking-violet): the one action color. Store buttons, the active stage word, links inside the phone, the switch, the set quantity counter, step glyphs, and the global focus ring. Pressed and hover states darken to Marking Violet Pressed; Marking Violet Wash is its quiet tint. In dark mode it lightens to #b18ae8 so it holds contrast on the dark tape.

### Tertiary
- **Hi-Vis Tag** (hi-vis-tag, with on-tag ink): the driver's routing tag from the field app. On this page it appears in exactly one place, the driver swatch beside the driver's name on the tracking screen. It is identical in light and dark.
- **Thread Red** (thread-red): failure only. On this page it marks an invalid waitlist field. Dark mode lifts it to #ff6b57.

### Neutral
- **Label Tape** (tape): page ground and the headline band.
- **Recessed Tape** (tape-recessed): the stitched label panels (two ways, service levels), the phone's tab bar and help row, rule-button hover.
- **Sunken Tape** (tape-sunken): image placeholders and the reserved-slot field.
- **Ink** (ink), **Ink Secondary** (ink-secondary), **Ink Tertiary** (ink-tertiary): text in three steps; tertiary carries fibre lines and inactive glyphs.
- **Rule** (rule) and **Rule Strong** (rule-strong): solid hairlines and dashed stitching respectively.
- **Ink Field** (ink-field) with On Field and On Field Secondary: the inverted closing section, the woven label's ground at page scale. In dark mode the field inverts to the light tape (#f2f2ee) so the closing section always contrasts with the page.

### Named Rules
**The One Marking Ink Rule.** Every action the visitor can take on the tape carries Marking Violet or is a ruled outline in ink; no second accent color exists.

**The Reserved Hi-Vis Rule.** Hi-Vis Tag belongs to the driver and field role. It marks the driver and nothing else: no buttons, highlights, focus rings or decoration.

**The Red Means Failed Rule.** Thread Red appears only when something has gone wrong, never for emphasis, prices or sale states.

## Typography

**Display Font:** Archivo Variable (with Noto Kufi Arabic Variable, system-ui)
**Body Font:** the platform system UI face (Noto Kufi Arabic Variable for Arabic)
**Label Font:** Archivo Variable at narrow width (84%)

**Character:** One grotesque used at three widths does all the brand work. Expanded and heavy for headlines and serial numbers, narrow and tracked for stamped labels. The system face keeps prose quiet and native.

### Hierarchy
- **Display** (800, expanded 112%, fluid to 5rem, 0.98): the hero headline and the closing title (which scales further, to 7rem). Arabic: 700, line-height 1.3, smaller clamp, no tracking.
- **Headline** (800, 108%, fluid to 3.6rem, 1.02, capped at 18ch): section titles. Arabic: 700, line-height 1.35.
- **Title** (700, 104%, fluid to 2.25rem, 1.1): narrative step headings; service-level names at 1.75rem.
- **Serial** (800, expanded 118%, tabular figures): prices, order numbers and the step counters of the quick-order wizard. Always set left-to-right, even in Arabic.
- **Body** (400, 1.0625rem, 1.5): prose; leads step up to 1.125rem in Ink Secondary, held to 40–46ch. Long answers cap at 62ch.
- **Stamp** (600, narrow 84%, 0.8125rem, 0.11em, uppercase): promises under a heading, totals labels, nav links, button text.
- **Fibre** (600, narrow 84%, 0.75rem, 0.095em, Ink Tertiary): the faint woven line, used for the tagline and "sample data" notes.

### Named Rules
**The Untracked Arabic Rule.** Arabic is a connected script: tracking is zero on every role, uppercase is never applied, and Arabic stamps and fibres step up to 0.875rem at weight 500.

**The Arabic Floor Rule.** Arabic secondary text never drops below body size (1.0625rem) and runs at line-height 1.85.

**The Serial Reads LTR Rule.** Amounts and order numbers keep left-to-right direction inside RTL layouts.

## Layout

A 12-column grid (1.5rem column gap) inside an 88rem maximum width, with a fluid gutter. Sections open with generous fluid top padding (the section spacing token) and are separated by a single solid rule rather than background changes; the closing ink field is the only full-bleed color block.

The hero overlaps three layers on the grid: the photograph spans columns 1–9 and bleeds into the gutter, the headline tape band rises 5rem over the photo's lower edge, and the phone occupies columns 9–12, tilted 2 degrees (mirrored in RTL). The demo pins the phone in columns 8–11 while narrative steps scroll in columns 1–6; inactive steps fade to 38% opacity.

Breakpoints: below 64rem the grid collapses to one column, nav links hide, the pinned phone is replaced by a phone after each step, and the hero stacks photo, tape band, phone. Below 48rem the two-way labels stack (the seam turns horizontal) and the wizard becomes two columns. All direction-sensitive spacing uses logical properties so RTL mirrors without overrides.

### Named Rules
**The Phone At True Scale Rule.** The phone renders the app at its own 390pt geometry, scaled by container units, never as a screenshot. Its width is bounded by viewport height so the whole device fits on screen when pinned.

## Elevation & Depth

Flat by default. Depth exists only where a physical object sits on the tape, and it is always a soft two-part shadow in ink at low opacity (a 1–2px contact shadow plus a long, negatively spread ambient shadow). There are no hard offset shadows and no shadows on buttons, panels or rows. Panels separate by tone (recessed tape) and stitching, not by lift.

### Shadow Vocabulary
- **Band lift** (`0 1px 2px rgb(22 24 28 / 0.06), 0 18px 40px -22px rgb(22 24 28 / 0.35)`): the headline tape band over the hero photograph.
- **Ticket lift** (`0 1px 2px rgb(22 24 28 / 0.06), 0 10px 26px -16px rgb(22 24 28 / 0.3)`): the receipt ticket on its label panel.
- **Sewn label** (`0 1px 2px rgb(22 24 28 / 0.1), 0 8px 20px -12px rgb(22 24 28 / 0.35)`): a label sewn onto a photograph.
- **Device** (`0 2px 4px rgb(22 24 28 / 0.12), 0 28px 60px -18px rgb(22 24 28 / 0.42)` plus a light inner bezel edge): the phone only.

### Named Rules
**The Objects Only Rule.** Only things that would physically rest on the tape (a band, a ticket, a sewn label, a device) cast a shadow.

## Shapes

Small, cloth-like corners. Controls (buttons, inputs, the phone's cart bar and help row) use the control radius; anything that reads as a label or slip (woven labels, the ticket, sewn labels, the reserved slot) uses the tighter slot radius. Pills are reserved for chips, quantity counters and the switch inside the phone. Photographs are square-cornered.

Stitching is the signature line. A tape band carries a 1px dashed line in Rule Strong inset 7px from both long edges; two label panels are sewn together along a dashed seam; woven labels carry a 0.9px dashed stitch inset 2.5px in half-strength current color. Solid 1px hairlines in Rule separate rows of data (stage list, level features, FAQ, phone rows); a solid ink rule marks a subtotal or the head of a list.

### Named Rules
**The Stitch Versus Rule Rule.** Dashed lines join pieces of tape (seams, band edges, label borders); solid hairlines divide rows of information. Never swap them.

**The Single Stroke Rule.** Every pictogram is drawn on the 24pt grid at a 1.9 stroke with round caps and joins. State changes by modifier (filled for the active stage, a bar beneath for completed, dots for service level), never by a new symbol.

## Components

### Buttons
Stamped, firm and plain.
- **Shape:** control radius, minimum height 3.25rem (2.75rem for the small variant).
- **Store (primary):** Marking Violet with a two-line label (small line, then an expanded 700 name); hover darkens to Marking Violet Pressed. On the ink field the store button inverts to On Field ground with Ink Field text.
- **Ink:** ink ground, stamp typography; hover mixes 16% tape into the ink.
- **Rule (secondary):** transparent with a 1.5px inset ring in Rule Strong; hover tightens the ring to ink and fills Recessed Tape. A light variant on the ink field uses a 35% On Field ring.
- **Press:** every button scales to 0.985 over 140ms on the ease-out curve.

### Woven Label
An ink tag with a dashed inner stitch, stamp typography, slot radius; bold inner text at 800. Used for the receipt header and the VIP service-level name. Inside the phone it is the VIP tag.

### Sewn Label
A light cloth label overlapping a photograph's lower edge, with a dashed inner stitch at 28% ink. It stays light (tape, ink, ink-secondary values) in dark mode, as a real sewn-in label would.

### Tape Band and Label Panels
- **Tape band:** tape ground, dashed stitch inset on both long edges; carries the hero headline.
- **Label panel:** Recessed Tape with dashed top and bottom edges and a 7px outline of the same tone so the stitches sit inside the cloth; columns are sewn along a dashed seam (two ways) or divided by solid rules (service levels).

### Ticket
Receipt slip on tape: slot radius, ticket lift, a woven label as header, dotted Rule Strong lines between line items, a solid ink rule above the subtotal, tabular figures, and the total set as a serial.

### Inputs / Fields
- **Style (on the ink field):** transparent, 1.5px border at 35% On Field, control radius, 3.25rem tall.
- **Focus:** a 2px outline with 2px offset; the border clears.
- **Error:** border turns Thread Red.

### Navigation
Sticky tape bar with a dashed bottom stitch. Brand mark (a label tab hanging from its stitch) plus the expanded uppercase wordmark; links and the language switch in Ink Secondary stamps, turning ink and underlined on hover. The Arabic language link is set in Kufi without caps or tracking. Below 64rem only brand, language and the app button remain.

### Custody Strip (signature)
Five care glyphs (collect, custody, inspect, treat, deliver) on a recessed tape band inside the phone, mirrored as a stage list beside the narrative. Pending glyphs are outlined in Ink Tertiary, the active stage fills, completed stages gain a bar; all three states are rendered at once and an ancestor attribute selects which shows, cross-fading over 260ms.

### Phone
A bezel-framed device at 390:844 with the app's real screens (Home, shop, schedule, tracking, delivered) stacked and switched by a single attribute. Screens fade and rise 18pt over 360–520ms. Reduced motion collapses all transitions to effectively instant.

## Do's and Don'ts

### Do:
- **Do** take every color from the Care Label tokens; when the app's design_colors.dart changes, change the web values to match.
- **Do** give every action Marking Violet or an ink ruled outline at the control radius, with the 0.985 press.
- **Do** use dashed stitching for seams and tape edges and solid hairlines for data rows.
- **Do** set prices and order numbers as expanded serials with tabular figures, left-to-right in both languages.
- **Do** label demo data in the phone as sample, in a fibre line.
- **Do** zero all tracking and drop uppercase for Arabic, and keep Arabic secondary text at body size or larger.

### Don't:
- **Don't** use Hi-Vis Tag for anything other than the driver/field role.
- **Don't** use Thread Red outside failure states.
- **Don't** add a new palette, typeface or shape family to the web surface; the identity is the app's.
- **Don't** cast shadows from buttons, panels or rows, and never use hard offset shadows.
- **Don't** replace the rendered phone with screenshots or floating mockups.
- **Don't** draw a new pictogram to show a state change; use the filled, bar or dot modifiers.
