import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import { coffees, kindLabel, type Coffee } from "@/lib/coffees"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Coffees",
  description:
    "Pink Bourbon, Gesha, Pacamara, Pureza, Noir 82 and Kreore drip sachets. Colombian specialty coffee in New York, ordered through our WhatsApp catalog.",
  alternates: { canonical: "/coffees" },
}

function CoffeeBand({ coffee, index }: { coffee: Coffee; index: number }) {
  const flip = index % 2 === 1
  return (
    <Label
      tone={coffee.tone}
      id={coffee.slug}
      fields={[<T key="k" t={kindLabel[coffee.kind]} />, <T key="o" t={copy.nav.origin} />]}
      pad="tight"
      innerClassName={index === 0 ? "lg:!pt-36" : ""}
      className={coffee.tone === "pureza" && !coffee.photo ? "border-y border-k-noir" : ""}
      aria-labelledby={`${coffee.slug}-title`}
    >
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className={`lg:col-span-7 ${flip ? "lg:col-start-6 lg:row-start-1 lg:text-right" : ""}`}>
          <h2
            id={`${coffee.slug}-title`}
            className="font-serif text-[clamp(4rem,12vw,11rem)] font-medium leading-[0.82] tracking-[-0.02em]"
          >
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
              note={<T en="Office and travel" es="Oficina y viaje" />}
            />
          ) : null}
          <dl className="grid grid-cols-2 gap-x-6">
            <div className="py-3">
              <dt className="label-row">
                <T t={kindLabel[coffee.kind]} />
              </dt>
              <dd className="mt-1">{coffee.name}</dd>
            </div>
            <div className="py-3">
              <dt className="label-row">
                <T en="Origin" es="Origen" />
              </dt>
              <dd className="mt-1">Colombia</dd>
            </div>
          </dl>
          <p className="mt-5 font-serif text-[1.6rem] italic leading-snug">
            <T en={coffee.en} es={coffee.es} />
          </p>
          <Action href={site.whatsappCatalog} variant="text" arrow className="mt-4 font-bold">
            <T en="Ask on WhatsApp" es="Pregunta por WhatsApp" />
          </Action>
        </Reveal>
      </div>
    </Label>
  )
}

export default function CoffeesPage() {
  return (
    <>
      <Label
        tone="noir"
        first
        pad="none"
        className="z-10"
        fields={[<T key="o" t={copy.nav.origin} />, <T key="s" en="Six lines" es="Seis líneas" />]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-end pb-6 lg:col-span-7 lg:pb-28">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="The coffees." es="Los cafés." />
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.2rem] font-medium leading-snug md:text-[1.4rem]">
              <T
                en="Three celebrated varieties, two Kreore lines and a drip sachet."
                es="Tres variedades célebres, dos líneas Kreore y un sobre para filtrar."
              />
            </p>
            <p className="t-muted mt-4 max-w-[48ch]">
              <T
                en="Each line wears its own color, like the label on a bag. Prices, sizes and current lots live in our WhatsApp catalog."
                es="Cada línea lleva su propio color, como la etiqueta de una bolsa. Precios, tamaños y lotes del momento están en nuestro catálogo de WhatsApp."
              />
            </p>
            <div className="mt-8">
              <Action href={site.whatsappCatalog} variant="solid-light" arrow>
                <T en="Open the WhatsApp catalog" es="Abre el catálogo de WhatsApp" />
              </Action>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bleed-right">
              <Reveal variant="mask" className="lg:translate-y-24">
                <div className="photo-zoom relative aspect-[4/5] overflow-hidden lg:aspect-[6/7]">
                  <Image
                    src={photos.beans.src}
                    alt={photos.beans.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "50% 60%" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {coffees.map((coffee, i) => (
        <CoffeeBand key={coffee.slug} coffee={coffee} index={i} />
      ))}

      <Label
        tone="bourbon"
        fields={[<T key="c" en="Catalog" es="Catálogo" />, "WhatsApp"]}
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d2 font-medium">
              <T
                en="Prices, sizes and current lots are in our WhatsApp catalog."
                es="Precios, tamaños y lotes del momento, en nuestro catálogo."
              />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Action href={site.whatsappCatalog} variant="solid" arrow>
              <T en="See the catalog" es="Ver el catálogo" />
            </Action>
            <Action href={site.whatsapp} variant="text">
              <T en="Or write to us on WhatsApp" es="O escríbenos por WhatsApp" />
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
