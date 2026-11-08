import type { Metadata } from "next"
import { Label } from "@/lib/components/label"
import { Bilingual } from "@/lib/components/bilingual"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { coffees, type Coffee } from "@/lib/coffees"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Cafés",
  description:
    "Pink Bourbon, Gesha, Pacamara, Pureza, Noir 82 and Kreore drip sachets. Colombian specialty coffee in New York, ordered through our WhatsApp catalog.",
  alternates: { canonical: "/cafes" },
}

function CoffeeBand({ coffee, index }: { coffee: Coffee; index: number }) {
  const flip = index % 2 === 1
  return (
    <Label
      tone={coffee.tone}
      id={coffee.slug}
      fields={[coffee.kind, "Origen · Colombia"]}
      pad="tight"
      innerClassName={index === 0 ? "lg:!pt-32" : ""}
      className={coffee.tone === "pureza" && !coffee.photo ? "border-y border-k-noir" : ""}
      aria-labelledby={`${coffee.slug}-title`}
    >
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className={`lg:col-span-7 ${flip ? "lg:col-start-6 lg:row-start-1 lg:text-right" : ""}`}>
          <h2 id={`${coffee.slug}-title`} className="font-serif text-[clamp(4rem,12vw,11rem)] font-medium leading-[0.82] tracking-[-0.02em]">
            <span className={index % 3 === 1 ? "italic" : ""}>{coffee.name}</span>
          </h2>
        </Reveal>

        <Reveal i={1} className={`lg:col-span-5 ${flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          {coffee.photo ? (
            <Frame
              photo={photos.sachetsShelf}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 34vw, 100vw"
              objectPosition="25% 82%"
              className="mb-8"
              note="Oficina y viaje"
            />
          ) : null}
          <dl className="rule grid grid-cols-2 border-t">
            <div className="rule border-b border-r py-3 pr-3">
              <dt className="label-row">{coffee.kind === "FORMATO" ? "Formato" : coffee.kind === "VARIEDAD" ? "Variedad" : "Línea"}</dt>
              <dd className="mt-1">
                {coffee.name} <span lang="en" className="t-muted">({coffee.kindEn})</span>
              </dd>
            </div>
            <div className="rule border-b py-3 pl-4">
              <dt className="label-row">Origen</dt>
              <dd className="mt-1">Colombia</dd>
            </div>
          </dl>
          <p className="mt-5 font-serif text-[1.5rem] italic leading-snug">{coffee.es}</p>
          <p lang="en" className="t-muted mt-2">
            {coffee.en}
          </p>
          <Action href={site.whatsappCatalog} variant="text" arrow className="mt-6 font-bold">
            Ask on WhatsApp
          </Action>
        </Reveal>
      </div>
    </Label>
  )
}

export default function CafesPage() {
  return (
    <>
      <Label tone="noir" first pad="none" className="z-10" fields={["Origen · Colombia", "Seis líneas"]}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-end pb-6 lg:col-span-7 lg:pb-28">
            <Bilingual level={1} size="motto" italic es="Los cafés." en="The coffees: three celebrated varieties, two Kreore lines and a drip sachet." enClassName="max-w-[40ch]" />
            <p className="t-muted mt-6 max-w-[48ch]" lang="en">
              Each line wears its own color, like the label on a bag. Prices, sizes and current lots live in our WhatsApp catalog.
            </p>
            <div className="mt-8">
              <Action href={site.whatsappCatalog} variant="solid-light" arrow>
                Open the WhatsApp catalog
              </Action>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="mask" className="lg:translate-y-16">
              <Frame
                photo={photos.beans}
                ratio="aspect-[4/5]"
                sizes="(min-width: 1024px) 30vw, 100vw"
                preload
                note="Tueste"
              />
            </Reveal>
          </div>
        </div>
      </Label>

              {coffees.map((coffee, i) => (
          <CoffeeBand key={coffee.slug} coffee={coffee} index={i} />
        ))}

      <Label tone="bourbon" fields={["Catálogo", "WhatsApp"]}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Bilingual
              size="d2"
              es="Precios, tamaños y lotes del momento, en nuestro catálogo."
              en="Prices, sizes and current lots are in our WhatsApp catalog."
            />
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Action href={site.whatsappCatalog} variant="solid" arrow>
              See the catalog
            </Action>
            <Action href={site.whatsapp} variant="text">
              Or write to us on WhatsApp
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
