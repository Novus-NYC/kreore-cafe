import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { Only, T } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Story",
  description:
    "Kreore was born between Colombia and New York City. Founded by Viviana Durán, certified barista and creative entrepreneur. Creo porque oré: I create because I prayed.",
  alternates: { canonical: "/story" },
}

// Facts only, from the founder's own event listing and bios. No years, no hometown.
const sheet: { k: { en: string; es: string }; en: string; es: string }[] = [
  { k: { en: "Founder", es: "Fundadora" }, en: "Viviana Durán", es: "Viviana Durán" },
  { k: { en: "Craft", es: "Oficio" }, en: "Certified barista", es: "Barista certificada" },
  { k: { en: "Path", es: "Camino" }, en: "Creative entrepreneur", es: "Emprendedora creativa" },
  {
    k: { en: "Experience", es: "Experiencia" },
    en: "Event planning, travel management and hospitality",
    es: "Eventos, viajes y hospitalidad",
  },
  { k: { en: "Language", es: "Idioma" }, en: "Spanish linguist", es: "Lingüista del español" },
  { k: { en: "Business", es: "Empresa" }, en: "Woman-owned", es: "De propiedad de una mujer" },
]

const half = "wordmark block text-[clamp(3.4rem,9.4vw,9rem)] leading-[0.82] tracking-[0.02em]"

function Entry({ word, from, en, es }: { word: string; from: string; en: string; es: string }) {
  return (
    <div className="mt-5 md:mt-6">
      <p className="flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
        <span lang="es" className="font-serif text-[clamp(2rem,3.4vw,3.2rem)] font-medium italic leading-none">
          {word}
        </span>
        <span className="label-row">
          <T en="verb" es="verbo" /> · <span lang="es">{from}</span>
        </span>
      </p>
      <p className="mt-2 font-serif text-[clamp(1.6rem,2.4vw,2.4rem)] font-medium leading-tight">
        <span aria-hidden="true" className="text-k-rose">
          ={" "}
        </span>
        <T en={en} es={es} />
      </p>
    </div>
  )
}

export default function StoryPage() {
  return (
    <>
      {/* Hero: the name's etymology set like a dictionary entry on the light label, beside the coffee field. */}
      <Label
        tone="milk"
        first
        pad="none"
        className="z-10"
        fields={[
          <T key="f" en="Founder · Viviana Durán" es="Fundadora · Viviana Durán" />,
          <T key="b" en="Between Colombia and New York" es="Entre Colombia y Nueva York" />,
        ]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:pb-24">
            <p className="label-row">
              <T en="Where the name comes from" es="De dónde viene el nombre" />
            </p>
            <h1 className="mt-5 grid grid-cols-[auto_auto_auto] items-end justify-start gap-x-3 md:gap-x-5">
              <span className={half}>Kre</span>
              <span aria-hidden="true" className="pb-[0.1em] font-serif text-[clamp(2.4rem,6vw,6rem)] italic leading-none text-k-bean">
                +
              </span>
              <span className={`${half} text-k-rose`}>Oré</span>
              <span className="sr-only">: Kreore</span>
            </h1>

            <div className="grid max-w-[44rem] grid-cols-2 gap-x-6 md:gap-x-12">
              <Reveal>
                <Entry word="creo" from="crear" en="I create" es="yo creo" />
              </Reveal>
              <Reveal i={1}>
                <Entry word="oré" from="orar" en="I prayed" es="yo oré" />
              </Reveal>
            </div>

            <div className="mt-8 md:mt-10">
              <p lang="es" className="font-serif text-d2 font-medium italic">
                {site.motto}
              </p>
              <Only lang="en">
                <p className="mt-2 font-serif text-d4 italic text-k-rose">I create because I prayed.</p>
              </Only>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Action href={site.founderInstagram} variant="solid" arrow>
                <T en="Follow Viviana on Instagram" es="Sigue a Viviana en Instagram" />
              </Action>
              <Action href="#founder" variant="text">
                <T en="Meet the founder" es="Conoce a la fundadora" />
              </Action>
            </div>
          </div>

          <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
            <div className="bleed-right lg:-mb-24">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                  <Image
                    src={photos.coffeeField.src}
                    alt={photos.coffeeField.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "55% 58%" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* The founder: bourbon. Her statement, then the facts set like the fields on a coffee bag. */}
      <Label tone="bourbon" id="founder" aria-labelledby="founder-title" innerClassName="lg:!pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="founder-title" className="font-serif text-d2 font-medium">
              <T en="Born between Colombia and New York City." es="Nacido entre Colombia y Nueva York." />
            </h2>
            <p className="mt-6 max-w-[36ch] font-serif text-[1.55rem] leading-snug md:text-[1.75rem]">
              <T
                en="Viviana Durán founded Kreore to bring Colombian specialty coffee to New York tables, offices and gatherings."
                es="Viviana Durán fundó Kreore para llevar café colombiano de especialidad a las mesas, oficinas y encuentros de Nueva York."
              />
            </p>
            <p className="mt-5 max-w-[46ch]">
              <T
                en="Kreore is a woman-owned brand built around coffee, wellness and lifestyle."
                es="Kreore es una marca de una mujer, hecha de café, bienestar y estilo de vida."
              />
            </p>
          </Reveal>
          <dl className="lg:col-span-6 lg:col-start-7">
            {sheet.map((row, i) => (
              <Reveal
                key={row.k.en}
                i={i}
                className="rule grid gap-1 border-b py-4 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
              >
                <dt className="label-row pt-2">
                  <T t={row.k} />
                </dt>
                <dd className="font-serif text-[1.75rem] leading-tight md:text-[2.1rem]">
                  <T en={row.en} es={row.es} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Label>

      {/* Origin: Colombia's coffee region (stock, a real place) as one big full-bleed landscape on
          the light canvas, a label over its edge. */}
      <section className="tone-milk relative">
        <Reveal variant="mask">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={photos.cocoraValley.src}
              alt={photos.cocoraValley.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              className="photo-grade object-cover"
              style={{ objectPosition: "50% 55%" }}
            />
          </div>
        </Reveal>
        <div className="wrap relative">
          <Reveal className="tone-milk relative -mt-16 mb-14 max-w-[34rem] p-6 md:-mt-32 md:mb-20 md:p-10">
            <p className="label-row">
              <T t={copy.nav.origin} />
            </p>
            <h2 className="mt-4 font-serif text-d2 font-medium italic">
              <T en="Every cup starts on a farm." es="Cada taza empieza en una finca." />
            </h2>
            <p className="t-muted mt-4">
              <T
                en="Kreore's coffee is Colombian. Above: Quindío, in the heart of Colombia's coffee region."
                es="El café de Kreore es colombiano. Arriba: Quindío, en el corazón del Eje Cafetero."
              />
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA: pacamara. */}
      <Label tone="pacamara" aria-labelledby="story-cta">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="story-cta" className="font-serif text-d1 font-medium">
              <T en="Let’s share a cup." es="Brindemos juntos." />
            </h2>
            <p className="mt-5 max-w-[40ch] text-[1.15rem]">
              <T
                en="Book Kreore for your event, office or hotel."
                es="Reserva a Kreore para tu evento, tu oficina o tu hotel."
              />
            </p>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-3 lg:col-span-4 lg:col-start-9">
            <Action href={site.whatsapp} variant="solid" arrow>
              <T t={copy.common.whatsapp} />
            </Action>
            <Action href="/services" variant="text">
              <T en="See the services" es="Ver servicios" />
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
