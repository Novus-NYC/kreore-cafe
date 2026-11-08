import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Frame } from "@/lib/components/frame"
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

const half = "wordmark block text-[clamp(3.5rem,17vw,14.5rem)] leading-[0.82] tracking-[0.02em]"

function Entry({ word, from, en, es }: { word: string; from: string; en: string; es: string }) {
  return (
    <div className="mt-6 md:mt-8">
      <p className="flex flex-wrap items-baseline gap-x-3">
        <span lang="es" className="font-serif text-[clamp(2.2rem,4.4vw,4rem)] font-medium italic leading-none">
          {word}
        </span>
        <span className="label-row">
          <T en="verb" es="verbo" /> · <span lang="es">{from}</span>
        </span>
      </p>
      <p className="mt-3 font-serif text-d3 font-medium">
        <span aria-hidden="true" className="text-k-gesha">
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
      {/* Hero: the name's etymology, set like a dictionary entry on a dark label. */}
      <Label
        tone="noir"
        first
        pad="none"
        className="z-10"
        fields={[<T key="f" en="Founder · Viviana Durán" es="Fundadora · Viviana Durán" />, <T key="b" en="Between Colombia and New York" es="Entre Colombia y Nueva York" />]}
      >
        <div className="pb-36 md:pb-48">
          <p className="label-row">
            <T en="Where the name comes from" es="De dónde viene el nombre" />
          </p>
          <h1 className="mt-6 grid grid-cols-[1fr_auto_1fr] items-end gap-x-3 md:mt-8 md:gap-x-6">
            <span className={half}>Kre</span>
            <span aria-hidden="true" className="pb-[0.12em] font-serif text-[clamp(2.5rem,8vw,8rem)] italic leading-none text-k-gesha">
              +
            </span>
            <span className={`${half} text-k-bourbon`}>Oré</span>
            <span className="sr-only">: Kreore</span>
          </h1>

          <div className="grid grid-cols-2 gap-x-6 md:gap-x-16">
            <Reveal>
              <Entry word="creo" from="crear" en="I create" es="yo creo" />
            </Reveal>
            <Reveal i={1}>
              <Entry word="oré" from="orar" en="I prayed" es="yo oré" />
            </Reveal>
          </div>

          <Reveal i={2} className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12 md:items-end">
            <p className="label-row md:col-span-3">
              <T en="Together, the motto" es="Juntas, el lema" />
            </p>
            <div className="md:col-span-9">
              <p lang="es" className="font-serif text-d1 font-medium italic">
                {site.motto}
              </p>
              <Only lang="en">
                <p className="mt-3 font-serif text-d4 italic text-k-gesha">I create because I prayed.</p>
              </Only>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* Story: pureza, tall field photo rising into the header. */}
      <Label tone="pureza" fields={[null, <T key="o" en="Origin · Story" es="Origen · Historia" />]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:-mt-56">
            <Reveal variant="mask">
              <Frame
                photo={photos.coffeeField}
                ratio="aspect-[4/5]"
                sizes="(min-width: 1024px) 38vw, 100vw"
                objectPosition="60% 60%"
                note="Colombia"
              />
            </Reveal>
          </div>
          <Reveal i={1} className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Born between Colombia and New York City." es="Nacido entre Colombia y Nueva York." />
            </h2>
            <p className="mt-10 max-w-[38ch] font-serif text-[1.55rem] leading-snug md:text-[1.75rem]">
              <T
                en="Viviana Durán founded Kreore to bring Colombian specialty coffee to New York tables, offices and gatherings."
                es="Viviana Durán fundó Kreore para llevar café colombiano de especialidad a las mesas, oficinas y encuentros de Nueva York."
              />
            </p>
            <p className="mt-6 max-w-[52ch] text-[1.1rem]">
              <T
                en="Kreore is a woman-owned brand built around coffee, wellness and lifestyle."
                es="Kreore es una marca de una mujer, hecha de café, bienestar y estilo de vida."
              />
            </p>
            <Action href={site.founderInstagram} variant="text" arrow className="mt-8 font-bold">
              <T en="Follow Viviana on Instagram" es="Sigue a Viviana en Instagram" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Founder sheet: bourbon, set like the fields on a coffee bag. */}
      <Label tone="bourbon" fields={[<T key="s" en="Sheet" es="Ficha" />, <T key="f" en="The founder" es="La fundadora" />]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-serif text-d2 font-medium italic">
              <T en="The founder, field by field." es="La fundadora, campo por campo." />
            </h2>
          </Reveal>
          <dl className="lg:col-span-7 lg:col-start-6">
            {sheet.map((row, i) => (
              <Reveal
                key={row.k.en}
                i={i}
                className="rule grid gap-1 border-b py-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="label-row pt-2">
                  <T t={row.k} />
                </dt>
                <dd className="font-serif text-[1.8rem] leading-tight md:text-[2.2rem]">
                  <T en={row.en} es={row.es} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Label>

      {/* Origin: noir, the drying canopy as one big full-bleed crop with a label laid over its edge. */}
      <section className="tone-noir relative">
        <Reveal variant="mask">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]">
            <Image
              src={photos.sombreros.src}
              alt={photos.sombreros.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              className="photo-grade object-cover"
              style={{ objectPosition: "50% 88%" }}
            />
          </div>
        </Reveal>
        <div className="wrap relative">
          <Reveal className="tone-noir relative -mt-24 mb-16 max-w-[34rem] p-6 md:-mt-40 md:mb-24 md:p-10">
            <p className="label-row">
              <T t={copy.nav.origin} /> · <T en="Farm" es="Finca" />
            </p>
            <h2 className="mt-5 font-serif text-d2 font-medium italic">
              <T en="Every cup starts on a farm." es="Cada taza empieza en una finca." />
            </h2>
            <p className="t-muted mt-4">
              <T
                en="Coffee beans resting under a bamboo drying canopy in Colombia."
                es="Granos de café secándose bajo un techo de guadua en Colombia."
              />
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA: pacamara. */}
      <Label tone="pacamara" fields={["Kreore", <T key="n" en="New York" es="Nueva York" />]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Let’s share a cup." es="Brindemos juntos." />
            </h2>
            <p className="mt-5 max-w-[40ch] text-[1.15rem]">
              <T
                en="Book Kreore for your event, office or hotel."
                es="Reserva a Kreore para tu evento, tu oficina o tu hotel."
              />
            </p>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
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
