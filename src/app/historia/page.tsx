import type { Metadata } from "next"
import { Label } from "@/lib/components/label"
import { Bilingual, BilingualText } from "@/lib/components/bilingual"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Kreore was born between Colombia and New York City. Founded by Viviana Durán, certified barista and creative entrepreneur. Creo porque oré.",
  alternates: { canonical: "/historia" },
}

// Facts only, from the founder's own event listing and bios. No years, no hometown.
const sheet: [string, string, string][] = [
  ["Fundadora", "Viviana Durán", "Founder of Kreore"],
  ["Oficio", "Barista certificada", "Certified barista"],
  ["Camino", "Emprendedora creativa", "Creative entrepreneur"],
  ["Experiencia", "Eventos, viajes y hospitalidad", "Event planning, travel management and hospitality"],
  ["Idioma", "Lingüista del español", "Spanish linguist"],
  ["Empresa", "De propiedad de una mujer", "Woman-owned business"],
]

export default function HistoriaPage() {
  return (
    <>
      {/* Header: noir, the motto at full scale with the creo / oré breakdown. */}
      <Label tone="noir" first pad="none" fields={["Fundadora · Viviana Durán", "Entre Colombia y Nueva York"]}>
        <div className="pb-40 md:pb-48">
          <Bilingual level={1} size="motto" italic es={site.motto} en="I create because I prayed." />
          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12">
            <Reveal className="rule border-t pt-5 md:col-span-4">
              <p className="label-row">Kre(o)</p>
              <p className="mt-2 font-serif text-d3 italic">creo</p>
              <p lang="en" className="t-muted mt-1">
                I create
              </p>
            </Reveal>
            <Reveal i={1} className="rule border-t pt-5 md:col-span-4">
              <p className="label-row">+ Oré</p>
              <p className="mt-2 font-serif text-d3 italic">oré</p>
              <p lang="en" className="t-muted mt-1">
                I prayed
              </p>
            </Reveal>
            <Reveal i={2} className="rule border-t pt-5 md:col-span-4">
              <p className="label-row">= Kreore</p>
              <p className="wordmark mt-3 text-[clamp(1.9rem,3vw,2.8rem)] leading-none">{site.wordmark}</p>
              <p lang="en" className="t-muted mt-2">
                The name holds the motto.
              </p>
            </Reveal>
          </div>
        </div>
      </Label>

      {/* Story: pureza, tall field photo rising into the header. */}
      <Label tone="pureza" fields={[null, "Origen · Historia"]}>
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
            <Bilingual size="d1" es="Nacido entre Colombia y Nueva York." en={site.tagline} enClassName="max-w-[44ch]" />
            <BilingualText
              className="mt-10"
              es="Viviana Durán fundó Kreore para llevar café colombiano de especialidad a las mesas, oficinas y encuentros de Nueva York."
              en="Viviana Durán founded Kreore to bring Colombian specialty coffee to New York tables, offices and gatherings."
            />
            <BilingualText
              className="mt-8"
              es="Kreore es una marca de una mujer, hecha de café, bienestar y estilo de vida."
              en="Kreore is a woman-owned brand built around coffee, wellness and lifestyle."
            />
            <Action href={site.founderInstagram} variant="text" arrow className="mt-8 font-bold">
              Follow Viviana on Instagram
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Founder spec sheet: bourbon, set like the fields on a coffee bag. */}
      <Label tone="bourbon" fields={["Ficha", "Founder sheet"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Bilingual size="d2" italic es="La fundadora." en="The founder, field by field." />
          </Reveal>
          <dl className="border-y-2 border-k-noir lg:col-span-7 lg:col-start-6">
            {sheet.map(([k, es, en], i) => (
              <Reveal key={k} i={i} className="rule grid gap-1 border-b py-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="label-row pt-2">{k}</dt>
                <dd>
                  <span className="block font-serif text-[1.8rem] leading-tight md:text-[2.1rem]">{es}</span>
                  <span lang="en" className="t-muted block">
                    {en}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Label>

      {/* Origin: noir, wide crop of the drying canopy. */}
      <Label tone="noir" fields={["Origen · Colombia", "Finca"]}>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Frame
              photo={photos.sombreros}
              ratio="aspect-[4/3] md:aspect-[16/10]"
              sizes="(min-width: 1024px) 62vw, 100vw"
              objectPosition="50% 72%"
              note="Origen"
            />
          </Reveal>
          <Reveal i={1} className="lg:col-span-4 lg:pb-12">
            <Bilingual size="d3" italic es="Cada taza empieza en una finca." en="Every cup starts on a farm." />
            <p lang="en" className="t-muted mt-4">
              Coffee beans resting under a bamboo drying canopy in Colombia.
            </p>
          </Reveal>
        </div>
      </Label>

      {/* CTA: pacamara. */}
      <Label tone="pacamara" fields={["Kreore", "Nueva York"]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Bilingual size="d1" es="Brindemos juntos." en="Let’s share a cup. Book Kreore for your event, office or hotel." />
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Action href={site.whatsapp} variant="solid" arrow>
              Message us on WhatsApp
            </Action>
            <Action href="/servicios" variant="text">
              Ver servicios
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
