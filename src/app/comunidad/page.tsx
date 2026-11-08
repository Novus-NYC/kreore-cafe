import type { Metadata } from "next"
import { Label, LabelRow } from "@/lib/components/label"
import { Bilingual } from "@/lib/components/bilingual"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Kreore Woman: Historias y Conexiones brunches, coffee experiences and conversation among women in New York. Follow Kreore on Instagram for the next gathering.",
  alternates: { canonical: "/comunidad" },
}

// Only what is public: the brunch series name, brewing methods and the purpose of the gatherings.
const gathering = [
  {
    es: "Brunch Historias y Conexiones",
    en: "The Historias y Conexiones brunch series, the heart of Kreore Woman.",
  },
  {
    es: "Experiencias de café",
    en: "Coffee experiences with V60 and French press brewing.",
  },
  {
    es: "Conversación",
    en: "Time to tell your story and listen to others, cup in hand.",
  },
  {
    es: "Red de emprendedoras",
    en: "Networking among women entrepreneurs.",
  },
]

export default function ComunidadPage() {
  return (
    <>
      {/* Header: bourbon, the community statement. */}
      <Label tone="bourbon" first fields={["Kreore Woman", "Comunidad · Nueva York"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Bilingual level={1} size="motto" italic es="Historias y conexiones." en="Stories and connections." />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-[1.9rem] leading-tight md:text-[2.4rem]">
              Buscamos mujeres con diferentes historias que amen el café.
            </p>
            <p lang="en" className="t-muted mt-3 max-w-[48ch]">
              We’re looking for women with different stories who love coffee.
            </p>
            <Action href={site.instagram} variant="solid" arrow className="mt-8">
              Message us on Instagram
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* What a gathering looks like: pureza, sticky heading and a ruled list. */}
      <Label tone="pureza" fields={["Encuentro", "Qué esperar"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Bilingual size="d2" es="Cómo es un encuentro." en="What a gathering looks like." />
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {gathering.map((g, i) => (
              <Reveal as="li" i={i} key={g.es} className="rule border-t py-7 last:border-b">
                <p className="font-serif text-[2rem] leading-tight md:text-[2.5rem]">{g.es}</p>
                <p lang="en" className="t-muted mt-2">
                  {g.en}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Label>

      {/* Past event: noir, set like a ticket stub. Clearly marked as past. */}
      <Label tone="noir" fields={["Evento pasado", "Past event"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="label-row mb-6">Otoño 2026 · Woodside, Queens</p>
            <Bilingual size="d1" italic es="Petite Coffee Picnic" en="Doughboy Plaza, Woodside, autumn 2026. This gathering has already happened." />
          </Reveal>
          <Reveal i={1} className="lg:col-span-4 lg:col-start-9 lg:mt-16">
            <dl className="rule border-t">
              {[
                ["Café", "V60 y prensa francesa", "V60 and French press brewing"],
                ["Taller", "Pumpkin spice latte hecho por ti", "A DIY pumpkin spice latte"],
                ["Mesa", "Brunch al estilo francés", "A French-style brunch"],
                ["Visión", "Tablero de sueños", "A vision board"],
              ].map(([k, es, en]) => (
                <div key={k} className="rule grid grid-cols-[6rem_1fr] gap-4 border-b py-4">
                  <dt className="label-row pt-1">{k}</dt>
                  <dd>
                    <span className="block font-serif text-[1.35rem] leading-snug">{es}</span>
                    <span lang="en" className="t-muted block text-[0.95rem]">
                      {en}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Label>

      {/* Recruiting: bourbon, two asymmetric blocks from the Threads posts. */}
      <Label tone="bourbon" fields={["Buscamos", "We’re looking for"]}>
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="border border-k-noir p-6 md:p-10 lg:col-span-7">
            <LabelRow left="Historias" right="Mujeres" />
            <Bilingual
              level={3}
              size="d2"
              className="mt-8"
              es="Mujeres con una historia que contar, con café de por medio."
              en="Women with a story to share over coffee."
            />
          </Reveal>
          <Reveal i={1} className="tone-noir p-6 md:p-10 lg:col-span-5 lg:mt-32">
            <LabelRow left="Contenido" right="Café" />
            <Bilingual level={3} size="d3" className="mt-8" es="Creadoras de contenido de café." en="Coffee content creators." />
            <p lang="en" className="t-muted mt-4">
              If you film, photograph or write about coffee, we would love to hear from you.
            </p>
          </Reveal>
        </div>
      </Label>

      {/* CTA: pacamara. */}
      <Label tone="pacamara" fields={["Próximo encuentro", "Instagram"]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Bilingual size="d1" es="Escríbenos por Instagram." en="Send us a DM to hear about the next gathering." />
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Action href={site.instagram} variant="solid" arrow>
              Message {site.instagramHandle}
            </Action>
            <Action href={site.threads} variant="text">
              Follow on Threads
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
