# Kreore Café

Website for **Kreore Café**, a Colombian specialty coffee brand in New York founded by Viviana Durán. Kreore is not a storefront: it pours coffee at pop-ups, supplies offices, caters, hosts events and runs the Kreore Woman community. Motto: *Creo porque oré.*

The site is built as a set of coffee bag labels: each section is a full-bleed label in one varietal color (Pink Bourbon, Gesha, Pureza, Noir 82, Pacamara), with an inset rule frame and a label header row. English is the default language with an EN / ES toggle in the navbar (choice saved in localStorage). Display type is Cormorant Garamond, text is Hanken Grotesk. Full spec: `DESIGN.md`. Sources: `research/BRIEF.md`.

## Pages

| Route | Content |
|---|---|
| `/` | Hero motto, founder moment, varietal shelf, services, Kreore Woman, MoCADA band, booking CTA |
| `/coffees` | The six coffee lines as colored label bands, WhatsApp catalog |
| `/services` | Office coffee supply, catering, event hosting, pop-ups |
| `/community` | Kreore Woman gatherings, past event, recruiting |
| `/story` | Founder story, creo / oré, founder sheet |
| `/contact` | WhatsApp, email, Instagram, host form, work with us |

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3 with brand tokens under `k.*` (`tailwind.config.ts`) and tone classes in `src/app/globals.css`
- Fonts via `next/font/google`; photos via `next/image`
- No backend, no form: every action is a WhatsApp, email, Instagram or Google Form link

## Structure

- `src/app/*` routes, `layout.tsx` (fonts, navbar, footer, metadata), `icon.svg`, `apple-icon.png`
- `src/lib/i18n.tsx` language provider and `T`; `src/lib/copy.ts` shared EN / ES strings
- `src/lib/site.ts` all contact links and business details
- Old Spanish paths (`/cafes`, `/servicios`, `/comunidad`, `/historia`, `/contacto`) redirect permanently in `next.config.ts`
- `src/lib/coffees.ts`, `src/lib/services.ts`, `src/lib/images.ts` content data
- `src/lib/components/` `Label`, `LangToggle`, `CoffeeMarquee`, `Frame`, `Reveal`, `Action`, `Navbar`, `Footer`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # TypeScript check
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain so Open Graph URLs are absolute.

## Facts to confirm with the owner before launch

- [ ] **MoCADA**: is it a current, ongoing location? Days and hours? (shown on `/`, `/contact`, and the pop-ups photo on `/services`)
- [ ] Which phone to publish: 718-600-1155 (used) or 646-623-9961
- [ ] Coffee details: tasting notes, origin farms, bag sizes and prices. **Pureza** and **Noir 82** currently say "Ask Viviana about this line."
- [ ] Sachets are described as drip sachets (based on packaging in her photo)
- [ ] Photo approvals, and whether the woman in `coffee-field.jpg` may be named
- [ ] Spanish copy review: Spanish for lines that only existed in English was written for this site
- [ ] Location of the toast photo (`toast-street.jpg`): it is captioned only as a pop-up, not as Brooklyn
- [ ] Vector logo files (the wordmark is currently live text in Hanken Grotesk 800)
- [ ] Production domain (replaces the Merlin site?)
- [ ] Upcoming gatherings, if she wants them listed
- [ ] Spanish copy review by a native speaker
