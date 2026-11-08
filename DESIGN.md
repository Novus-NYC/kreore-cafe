# Kreore Café: design spec

> **Revision 3 (2026-11-07): "Sunlit label". Light canvas, founder up front, bigger type, every hero anchored by a photo.**
> A design review found the site reading as a dark cocktail bar: noir and khaki-gold full-bleed bands, five saturated colors in sequence, tiny caps labels and muted body copy, the founder missing from home, weak phone photos shown huge, and type-only heroes with empty space. Kreore's real Instagram is bright, white, blush and airy. What is true now (supersedes sections 4, 5 and the section lists of Revision 2 where they conflict):
>
> **Palette and roles.**
> | Token | Hex | Role now |
> |---|---|---|
> | `milk` (new) | `#FBF8F3` | Main canvas: every hero, alternates with pureza. `tone-milk`. Body background. Navbar surface once scrolled, mobile menu sheet. |
> | `pureza` | `#F5EFE6` | Second canvas, alternates with milk. Paper cards (event sheet, picnic ticket). |
> | `bourbon` | `#EBC1CB` | Signature color: community (home band, community hero, invitation card), story founder band, contact host card, coffees catalog band, Pink Bourbon label. |
> | `rose` (new) | `#9C3D57` | Deep rose: the bourbon family's ink. "ORÉ" on the story hero, the English motto gloss, the "=" in the dictionary entries, link hover on light, the wax seal. Passes AA on milk and pureza (about 5.6:1). |
> | `pacamara` | `#F1D35B` | Closing CTA band (once per page) and the Pacamara label only. Hover fill for the email row on contact. |
> | `gesha` | `#B8914A` | Background only on the Gesha label (home shelf card, coffees band). Elsewhere an accent on noir (footer label rows). Never text on cream (2.5:1, fails). |
> | `noir` | `#16120F` | Ink everywhere. Background only on: the footer, the Noir 82 label, and at most one band or element per page (services: pop-ups band; community: picnic band; contact: work-with-us card; home, coffees, story: none). |
> | `bean` | `#5A3B2A` | Muted text and small label rows on light (8.7:1 on pureza). |
>
> Never two saturated bands adjacent. To keep that true on the coffees page, `coffees.ts` is ordered Pink Bourbon, Pureza, Gesha, Noir 82, Pacamara, Sachets (the shelf, marquee and bands all follow it).
>
> **Navbar.** Every page opens on a light label, so the navbar ink is always noir (the `lightTopRoutes` list is gone). Transparent at the top, milk with a hairline after 24px of scroll. Mobile sheet is milk with a noir CTA.
>
> **Type.** Body stays 17px; muted copy is bean, never translucent. `.label-row` is 13px (0.8125rem), tracking 0.16em. Label rows that said nothing ("In her words", "Service · Coffee / New York", "Bookings / Events · Offices · Hotels", "Channels / Tap to open", "Catalog / WhatsApp" and similar) are deleted; rows that carry real information stay (Origin · Colombia / Destination · New York, Founder · Viviana Durán, Type / Origin / Order fields on each coffee).
>
> **Spacing.** `Label` padding is 64px mobile / 96px desktop by default, 56px / 72px when `tight`, top and bottom symmetric. Field rows sit 32px / 40px above content.
>
> **Photos.** One shared grade, `.photo-grade { filter: brightness(1.05) saturate(.92) contrast(1.02) sepia(.07) }`: warm and sunlit. Rectangular crops only. Two derived crops were added as files so the weak phone photos are shown tight, never raw: `mocada-crop.jpg` (880x1100, her and the case with the MoCADA lettering on the glass; no facade top, no baked-in caption) shown at medium size only, and `kreore-sachet.jpg` (1012x740, the Kreore drip sachet held up at the pop-up, from the bottom of `toast-street.jpg`). `Frame` captions are just the caption text (no "Photo ·" prefix).
>
> **Heroes (all light, all with a real photo, headline + short line + primary action above the fold at 1440x900 and 375x812).**
> - Home: milk. Motto huge in noir, gloss in rose, farm photo bleeding right and hanging over the marquee, white bag label on the photo.
> - Coffees: milk. "The coffees." with the beans photo (square) bleeding right and dropping into the Pink Bourbon band.
> - Services: milk. Headline, line, "Book coffee service" + host form; the toast photo bleeds right; the four-service index sits under the text on desktop and under the photo on mobile.
> - Community: bourbon (kept). Toast photo bleeding right.
> - Story: milk. KRE (noir) + ORÉ (rose) in the wordmark face, the two dictionary entries, the motto, "Follow Viviana on Instagram"; the coffee-field photo bleeds right and hangs into the bourbon band.
> - Contact: milk. "Write to us.", WhatsApp primary, email secondary; the Kreore sachet crop bleeds right.
> - 404: milk. "This page does not exist." with the beans photo.
>
> **Page sequences.**
> - Home: milk hero → pureza marquee (names in noir italic, each led by a swatch of its label color) → milk founder moment (coffee-field photo, "Born between Colombia and New York City.", Viviana Durán founded Kreore, certified barista, link to /story) → pureza shelf → milk services → bourbon Kreore Woman → pureza Find us (medium MoCADA crop pulled up into the pink) → pacamara CTA → noir footer.
> - Shelf cards read as real labels: small KREORE wordmark and kind at the top, the name large, a one-line description, Origin · Colombia and an arrow. Rows 7/5, 4/3/5, then Sachets as a full-width card with its photo. Pureza is a milk card on the pureza shelf. No row spans, so no empty voids.
> - Coffees: milk hero → one band per coffee in its own color (wordmark, name, Type / Origin / Order fields, description, "Ask about [name]" button; Sachets carries its photo) → bourbon catalog band → footer.
> - Services: milk hero → pureza office (sachets photo bleeding left) → bourbon catering → milk events (pureza field sheet) → noir pop-ups (medium MoCADA crop) → pacamara CTA.
> - Community: bourbon hero → milk "What a gathering looks like" with the invitation: a blush card, centered italic *Historias y Conexiones*, the menu fields spaced without rules, and a static deep-rose wax seal with a K (`src/lib/components/wax-seal.tsx`, SVG, no motion) → noir band with a paper ticket for the past Petite Coffee Picnic → pureza recruiting (bourbon block, overlapping milk card) → pacamara CTA.
> - Story: milk hero → bourbon founder band (statement + fact sheet) → milk canopy (full-bleed sombreros crop with a milk label over its edge) → pacamara CTA.
> - Contact: milk hero → pureza channels (huge noir serif rows, hairline separators, hover fills bourbon / pacamara / bourbon) → milk host card (bourbon) + work-with-us card (the page's one noir element) → pureza MoCADA with the medium crop.
>
> **Motion fix.** The mask reveal now clips the child (`.reveal-mask > *`), not the observed element. Clipping the observed element to nothing meant the IntersectionObserver never fired, so mask-revealed photos (hero photos included) stayed hidden and never lazy-loaded for real visitors; the audit's forced `is-in` had masked this. Reduced motion still shows everything immediately.
>
> **Needs client confirmation.** MoCADA as a current location (code comments kept). Whether the woman in `coffee-field.jpg` is Viviana: the copy beside it names her as founder, but the photo itself is not captioned or alt-texted with her name until she confirms. Spanish written for new lines in this pass (founder line on home, gathering description, 404 line, "Book coffee service", "Ask about [coffee]") needs her read.

> **Revision 2 (2026-11-07): English default, EN / ES toggle, English routes, design pass.**
> The client asked for English and Spanish "like the other website" (the My Lash Girl sister site). Sections below marked *(superseded)* were the first build. What is true now:
>
> **i18n.** `src/lib/i18n.tsx` (client): `LangProvider`, `useLang`, `T` and `Only`, same pattern as the sister site. English is the default; the server always renders English and a stored choice (`localStorage["kreore-lang"]`) is applied after mount, so there is no hydration mismatch. The provider sets `<html lang>` to `en` / `es`. `src/lib/components/lang-toggle.tsx` is a compact EN / ES switch (44px targets, `aria-pressed`, fixed-width so the navbar never shifts) in the desktop navbar and inside the mobile menu sheet. Shared strings live in `src/lib/copy.ts`; page copy uses `<T en="..." es="..." />` inline. One language is shown at a time: the old stacked `Bilingual` component is deleted. Spanish keeps the client's own words wherever they existed; Spanish for lines that only existed in English was written for this pass and **needs a native read by the client**. The motto *Creo porque oré.* stays Spanish in both modes (`lang="es"`), with "I create because I prayed." shown as its gloss only in English mode. Metadata (titles, descriptions) is English.
>
> **Routes.** `/coffees`, `/services`, `/community`, `/story`, `/contact`. `next.config.ts` redirects `/cafes`, `/servicios`, `/comunidad`, `/historia`, `/contacto` permanently (308). Service anchors: `#office`, `#catering`, `#events`, `#pop-ups`. Coffee anchors unchanged (`/coffees#gesha`).
>
> **Layout utilities.** `.bleed-right` / `.bleed-left` (globals.css) let a photo run past the container to the viewport edge at `lg`; `main` uses `overflow-x: clip` so these intentional breakouts never cause sideways scroll.
>
> **Motion.** One marquee site-wide (`CoffeeMarquee`, home only, under the hero): the six coffee names on strips of their label colors, 48s linear, pauses on hover, `aria-hidden`, stopped under `prefers-reduced-motion`. Reveals unchanged.
>
> **Section changes.**
> - Home: hero farm photo is larger (5:7, bleeds off the right edge, hangs ~224px past the hero over the marquee) with a pureza "bag label" (KREORE / Origin / Poured in / Photo) laid over its left edge. Her-words line is now a 8/3 split with the English/Spanish tagline as a ruled italic aside. "Find us" is a full section: the MoCADA photo bleeds off the left edge and is pulled up into the Kreore Woman label, beside a huge italic *MoCADA.* (crop 4:3 at 50% 90% excludes the baked-in caption; MoCADA still needs owner confirmation). Pacamara CTA: full-width question, actions on a ruled line.
> - Community: hero quote and CTA in full noir ink on bourbon (no reveal, visible on first paint), toast photo cropped on the mugs, bleeding right and dropping into the next label. "What a gathering looks like" is a pureza invitation / menu card (double rule frame, *Historias y Conexiones* title, ruled fields with varied type: V60 & French press, conversation, network, next date on Instagram) on a full gesha label. Petite Coffee Picnic is a ticket with a dashed perforated stub and an "Already happened" tag. Recruiting moved to pureza with an overlapping noir card.
> - Story: hero is the etymology: KRE + ORÉ in the heavy wordmark face (ORÉ in bourbon), dictionary entries below each half (creo, verb, crear = I create; oré, verb, orar = I prayed), then the motto. The drying-canopy photo is a full-bleed 21:9 crop with a noir label overlapping its bottom edge.
> - Contact: channels are huge serif rows on noir that fill with a varietal color on hover/focus (bourbon, pureza, gesha). Host card (bourbon, 8 cols) and work-with-us card (noir, 4 cols) overlap asymmetrically on pureza.
> - Coffees: beans photo bleeds right and drops into the first band. Services: index rows invert on hover, office photo bleeds left, events form card is a pureza label with ruled Date / Place / Guests blanks.
> - 404: "This bag has no label."

Read alongside `AGENTS.md` (build standard) and `research/BRIEF.md` (facts and sources). Everything below is decided; build it as written. If a fact is not in this file or the brief, do not invent it.

## 1. The business in three sentences

- Kreore is a Colombian specialty coffee brand in New York, founded and run by Viviana Durán. It is not a storefront café. It shows up as pop-ups, office coffee, catering, hotel service, and a women's community called Kreore Woman.
- Visitors are event planners, office managers and hotels looking for coffee service, plus Spanish-speaking women in Queens and Brooklyn who want to join the gatherings.
- They should message Kreore on WhatsApp to book coffee for an event or office, ask for the coffee catalog, or follow Kreore to join the next gathering.

## 2. The idea: "La etiqueta" (the coffee label)

Kreore already gives each coffee line its own color: Pink Bourbon (pink), Gesha (gold), Pureza (white), Noir 82 (black), Pacamara (yellow). The whole site is built like a set of specialty-coffee bag labels.

- Each major section is a full-bleed "label" in one varietal color, with a thin rule border inset 16px from the edges, and a small label header row in uppercase tracked sans: `ORIGEN · COLOMBIA` on the left, `DESTINO · NUEVA YORK` on the right (or section-appropriate fields).
- *(superseded by Revision 2: English default with an EN / ES toggle, one language at a time.)* Originally: Spanish primary voice with an English translation line under every heading.
- The brand motto is the hero: **Creo porque oré.** ("I create because I prayed.") The name KREORE is literally built from *creo* + *oré*; show that in the hero by setting `KRE·ORÉ` with the split visible in the label header row: `KRE(O) + ORÉ = CREO PORQUE ORÉ`. Keep it elegant, not a puzzle: one small line.

Logo-swap test: the varietal colors, the Spanish motto and the label grid cannot belong to any other business.

## 3. Type

- Display: **Cormorant Garamond** (Google, via `next/font/google`), weights 500 and 600, plus italic 500. Hero motto 9rem to 12rem on desktop (`clamp(4.25rem, 11vw, 12rem)`), line-height 0.86, letter-spacing -0.02em. Spanish lines often italic.
- Text and labels: **Hanken Grotesk** (`next/font/google`), 400, 500, 700. Body 1.0625rem / 1.6. Label rows: 0.72rem, uppercase, letter-spacing 0.18em, weight 700. Never use label style for essential sentences.
- Wordmark: the KREORE logo is a heavy grotesk in caps. Recreate it as live text in Hanken Grotesk 800, letter-spacing 0.06em (do not use the JPG). Use it in the navbar and footer.
- Two families only.

## 4. Color tokens (Tailwind `theme.extend.colors.k`)

| Token | Hex | Role |
|---|---|---|
| `noir` | `#16120F` | Noir 82. Primary ink, dark labels, footer |
| `pureza` | `#F5EFE6` | Pureza. Main paper canvas |
| `bourbon` | `#EBC1CB` | Pink Bourbon. Primary brand color, community section, story |
| `gesha` | `#B8914A` | Gesha. Supplemental, services label, rules and fine details on dark |
| `pacamara` | `#F1D35B` | Pacamara. Supplemental, used for ONE section per page at most (the CTA label) |
| `bean` | `#5A3B2A` | Roast brown. Muted text on light, image tone |
| `line` | `rgba(22,18,15,.18)` | Rules on light labels |

Contrast rules: text on `bourbon`, `pacamara`, `pureza` is always `noir`. Text on `noir` is `pureza`; `gesha` only for rules, label rows and large display text (it fails AA for body copy on noir at small sizes, so never body). Buttons: noir fill + pureza text, or pureza fill + noir text on dark. Sharp corners (radius 0 or 2px). No gradients, no glass, no shadows beyond a 1px rule.

Section background sequence on the homepage (must alternate, never two in a row): noir → pureza → bourbon → noir → gesha band → pureza → pacamara → noir footer.

## 5. Photography

Files in `public/images/` (all real Kreore photos from her own site, 1600px wide, portrait):

| File | Content | Use |
|---|---|---|
| `farm-tour.jpg` | Coffee farm tour in Colombia, people in sombreros vueltiaos, banana plants | Hero image (Origen) |
| `coffee-field.jpg` | Woman in white walking a coffee field on a hillside (likely Viviana, unconfirmed: never name her in alt text, say "on a coffee farm in Colombia") | Story page |
| `sombreros.jpg` | Group in sombreros under a greenhouse canopy | Story page / origin |
| `beans.jpg` | Close-up roasted beans | Cafés page header |
| `sachets-shelf.jpg` | Kreore drip sachets on a shelf with books | Cafés / office service |
| `toast-street.jpg` | Group toasting with colorful mugs on a Brooklyn street, KREORE paper in foreground | Services / pop-ups |
| `mocada-entrance.jpg` | Kreore team member with a rolling case outside MoCADA (has baked-in Spanish caption text in the upper-middle: crop with `object-position: 50% 85%` so the caption is excluded) | Visit/MoCADA mention |

Shared treatment (required): every photo gets the same warm grade with CSS `filter: saturate(.9) contrast(1.04) sepia(.08)` and sits in a frame with a 1px rule and a small caption row beneath in label style (e.g. `FOTO · FINCA EN COLOMBIA`). Crops: tall 4:5 for portrait slots, one big 16:10 crop in the hero is not possible (images are portrait), so the hero uses a tall image column. Use `next/image` with `fill`, `sizes`, and wrappers with fixed aspect-ratio to avoid layout shift. Hero image `priority`.

Do not use: juice cans, runners/yoga shots, the two headshots (identities unknown).

## 6. Pages and sections

Routes (App Router, replace the template's `src/app/pages/*`; delete the template folder):

`/` · `/coffees` · `/services` · `/community` · `/story` · `/contact` (Revision 2; the Spanish paths redirect)

Nav labels: Coffees, Services, Community, Story, Contact (ES: Cafés, Servicios, Comunidad, Historia, Contacto). Primary nav CTA: **Message us** / **Escríbenos** (WhatsApp).

### Home `/`
1. **Hero (noir label).** Two columns 7/5 on desktop. Left: label row `ORIGEN · COLOMBIA` / `DESTINO · NUEVA YORK`; motto `Creo porque oré.` in italic Cormorant (huge, pureza); English line "Colombian specialty coffee, poured in New York."; tiny line `KRE + ORÉ` explanation: "Kreore comes from *creo* (I create) and *oré* (I prayed)."; CTAs: primary "Book coffee for your event" (WhatsApp) + secondary text link "See the coffees" → /cafes. Right: `farm-tour.jpg` in a tall frame that breaks out of the label's bottom edge by 64px into the next section (overlap). Hero must fit with CTAs visible above the fold at 1440×900 and the motto visible at 375.
2. **Linktree line (pureza).** Large Spanish serif pull statement with English beneath, using the owner's own words: "Born between Colombia and New York City. Curating exceptional coffee, wellness and lifestyle experiences." (Spanish: "Nacido entre Colombia y Nueva York."). Left-aligned, 8/12 columns, offset.
3. **The varietal shelf (pureza continuing → each card its own color).** Six "labels" in an asymmetric masonry (not equal cards): Pink Bourbon (bourbon, tall), Gesha (gesha, wide), Pureza (pureza with noir rule), Noir 82 (noir, tall), Pacamara (pacamara), Sachets (pureza with photo `sachets-shelf.jpg`). Each label: name in serif, label row `VARIEDAD` or `LÍNEA`, one line. Generic, true variety facts allowed only for the three real coffee varieties (see data section); Pureza, Noir 82, Sachets get "Ask Viviana about this line." Whole shelf links to /cafes.
4. **Services (noir).** Big Spanish heading "Café donde lo necesites." / "Coffee wherever you need it." Four services as a numbered-free editorial list with hairline rules (not cards): Oficinas (Office coffee supply), Catering, Eventos (Event hosting), Pop-ups. Each row: Spanish name large, English name + one line, arrow link to /servicios. `toast-street.jpg` on the right, sticky within the section on desktop.
5. **Kreore Woman (bourbon).** "Historias y conexiones." Community statement in her words (from the Threads post, translated): "Buscamos mujeres con diferentes historias que amen el café." / "We're looking for women with different stories who love coffee." CTA "Follow for the next gathering" → Instagram. No dates.
6. **Find us (gesha band, short).** One line: "Find Kreore at MoCADA" with label row. Text links to Instagram for current pop-up locations. Mark in code comment that MoCADA must be confirmed by the owner before launch.
7. **CTA label (pacamara).** "¿Un evento, una oficina, un hotel?" / "Planning an event, an office or a hotel service?" Buttons: WhatsApp (primary), Email, "Host your event with Kreore" (Google Form).
8. **Footer (noir).**

### `/cafes`
Header: `beans.jpg` as a tall frame beside the heading "Los cafés." All six lines as full-width label rows, each a horizontal band in its color with: name (huge serif), label fields (VARIEDAD / LÍNEA, ORIGEN: Colombia), a short description (rules below), and "Ask on WhatsApp" link to the catalog. Then a note box: "Prices, sizes and current lots are in our WhatsApp catalog." + catalog button. Brewing gear section: NOT included (affiliate links, skip).

### `/servicios`
Four services, each its own composition (alternate image left/right, vary scale): Office coffee supply (sachets photo), Catering, Event hosting, Pop-up experiences (toast photo). Copy must stay factual: describe what the service is, never claim capacities, clients, or prices. Closing: Google Form "Host your event with Kreore" + WhatsApp.

### `/comunidad`
Kreore Woman. Text-led page on bourbon. Explain the gatherings using only what's public: brunches called *Historias y Conexiones*, coffee experiences (V60 and French press), conversation, networking among women entrepreneurs. Past event example, clearly marked past: "Petite Coffee Picnic, Doughboy Plaza, Woodside, autumn 2026". Recruiting blocks from Threads (women with stories, coffee content creators). CTA: DM on Instagram.

### `/historia`
Viviana's story. Facts only: founder of Kreore, certified barista, creative entrepreneur, background in event planning, travel management and hospitality, Spanish linguist; brand born between Colombia and NYC; woman-owned. Big motto treatment with the *creo / oré* explanation. Photos: `coffee-field.jpg`, `sombreros.jpg`. Do not invent biography (no years, no hometown).

### `/contacto`
No form backend. Three large action rows: WhatsApp (+1 718-600-1155), Email (kreorecafe@gmail.com), Instagram (@kreorecafe). Plus "Host your event" Google Form and "Work with us" WhatsApp link. Note: "We reply in Spanish or English."

## 7. Data (centralize in `src/lib/site.ts`)

```ts
export const site = {
  name: "Kreore Café",
  wordmark: "KREORE",
  motto: "Creo porque oré.",
  tagline: "Born between Colombia and New York City. Curating exceptional coffee, wellness and lifestyle experiences.",
  founder: "Viviana Durán",
  email: "kreorecafe@gmail.com",
  phoneDisplay: "+1 718-600-1155",
  phoneHref: "tel:+17186001155",
  whatsapp: "https://wa.me/17186001155",
  whatsappCatalog: "https://wa.me/c/17186001155",
  workWithUs: "https://wa.me/message/FO7BYIXPRHETJ1",
  hostForm: "https://docs.google.com/forms/d/e/1FAIpQLSdCKJnwvmv2hjYUzQWcHtfWV40f4sz2slgeIMDFs7bWPZ8ZGA/viewform",
  instagram: "https://www.instagram.com/kreorecafe/",
  threads: "https://www.threads.com/@kreorecafe",
  founderInstagram: "https://www.instagram.com/vivianaduran__/",
  mocada: { name: "MoCADA", url: "https://mocada.org/" }, // CONFIRM with owner before launch
}
```

Coffees (`src/lib/coffees.ts`). Descriptions must be true in general; they describe the variety, not a specific lot:
- **Pink Bourbon** (color bourbon). VARIEDAD. "A Colombian-grown variety prized in specialty coffee." 
- **Gesha** (gesha). VARIEDAD. "A celebrated variety known in specialty coffee for its floral, tea-like cups."
- **Pacamara** (pacamara). VARIEDAD. "A large-bean variety, a cross of Pacas and Maragogipe."
- **Pureza** (pureza). LÍNEA KREORE. "Ask Viviana about this line."
- **Noir 82** (noir). LÍNEA KREORE. "Ask Viviana about this line."
- **Sachets** (pureza + photo). FORMATO. "Single-serve Kreore drip sachets, made for offices and travel." (Sachets are visible in her photo with the logo; "drip" is visible on the packaging context. If unsure, use "Single-serve Kreore sachets.")
Every coffee shows Spanish + English.

## 8. Components

- `Label` section wrapper: props `tone` (noir | pureza | bourbon | gesha | pacamara), `fields: [left, right]`, children. Renders full-bleed bg, inset 1px rule frame (`outline` inset via an absolutely positioned div, `inset-4 md:inset-6`), the label header row.
- *(removed in Revision 2)* `Bilingual` heading. Use `T` from `src/lib/i18n.tsx`.
- `Frame` photo: next/image fill + aspect + caption row + shared grade.
- `Navbar` (client): fixed, transparent over the noir hero with pureza text; after 24px scroll becomes pureza bg with noir text and a 1px bottom rule (transition 250ms). Mobile: full-screen noir sheet menu with close button, focus trap-light (focus first link on open, Escape closes, body scroll locked), links in big serif. Height 64px; `scroll-padding-top: 80px`.
- `Footer`: noir, wordmark, motto, links, contacts, Instagram + Threads, `Made by Novus` link exactly (to https://novusnyc.org, target _blank rel noreferrer), year.
- `Reveal` (client): IntersectionObserver adding `is-in`; CSS: opacity 0 → 1, translateY(16px) → 0, 600ms `cubic-bezier(.2,.7,.2,1)`; stagger via `--i` var 60ms. Plus one signature moment: hero motto letters are NOT animated individually; instead the hero photo reveals with a clip-path mask from bottom (700ms). Respect `prefers-reduced-motion` (everything visible, no transitions). No parallax. Revision 2 allows exactly one marquee (home coffee names).

## 9. Copy rules

- No em dashes anywhere in visible copy. No leading zeroes.
- Spanish accents correct: Café, Cafés, Historia, Comunidad, Contáctanos, oré, Durán, Escríbenos, ¿...?
- Never invent: prices, hours, capacities, client names, testimonials, years, awards.
- Allowed sources for wording: Linktree tagline, Instagram bio, Merlin About paragraph, Threads posts, event listing. Paraphrase lightly.

## 10. Metadata

- Title template: `%s | Kreore Café`, default "Kreore Café | Colombian specialty coffee in New York".
- Description: "Colombian specialty coffee by Viviana Durán for New York events, offices, hotels and pop-ups. Creo porque oré."
- `lang="en"` on html by default; the language provider switches it to `es`. The motto carries `lang="es"`.
- Favicon: create `src/app/icon.svg`: noir square with a pureza serif italic "K". Also `apple-icon.png` (180px, generate from the svg with a small node script or provide a static PNG made with ffmpeg if needed).
- OG image: use `farm-tour.jpg` via `openGraph.images`.

## 11. Tech

- Pin versions: `next` 16.2.12, `react` 19.2.6, `react-dom` 19.2.6, `@types/react` ^19, typescript ^5.9. Keep Tailwind 3 (template config) and add tokens. Add `eslint`/lint only if trivial; `npm run build` must pass.
- `src/app/layout.tsx` owns fonts, navbar, footer, `<main>` (no max-width wrapper; sections handle their own containers). Container: `max-w-[1360px] px-5 md:px-10`.
- Replace README with a business README (what, stack, run, facts-to-confirm list).
- Keep `AGENTS.md` and `CLAUDE.md` identical (do not edit them).

## Revision 4: photos and reviewer feedback (Nov 7, 2026)

> - **Photos.** Every public Kreore source was checked (Merlin site, Instagram, Threads, Linktree, Wayback). Nothing larger or sharper than the current owner photos exists publicly: the Merlin originals are the same frames at 1080px. Two weak spots were replaced with **Unsplash License stock** (free for commercial use, no attribution required, credited in `src/lib/images.ts`): `beans.jpg` (Coffees hero, 404) and `cocora-valley.jpg` (Story origin band, Valle del Cocora, Quindío, per the photographer's caption). The old Story band stretched a 9:16 video frame (`sombreros.jpg`, now deleted) across a 21:9 strip. Its copy now reads "Kreore's coffee is Colombian. Above: Quindío, in the heart of Colombia's coffee region." Ask the owner for real farm and product photos at full resolution; they would replace both.
> - **Event form on the site.** `src/lib/components/host-form.tsx` on `/contact#host`. It posts (`no-cors`) to the owner's existing Google Form, so answers land in the same responses sheet. The Google Form has five required questions and no contact fields, so name, email, phone and date are added here and written at the top of the "vision" answer. Indoor / Outdoor go in through the form's "Other" choice (its own options are "Yes / No / Not Sure"; ask the owner to fix them). Every "Host your event" button now points to `site.hostPage`; the Google Form stays as the form's secondary link. Not tested with a live submission (that would write to the owner's sheet): send one test enquiry before launch and check it arrives. Spanish option labels need her read.
> - **Language switch.** One button for both labels (`EN | ES`): a press anywhere flips the language.
