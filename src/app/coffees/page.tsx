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

/** One coffee, one band in its own label color: wordmark, name, fields, description, action. */
function CoffeeBand({ coffee, index }: { coffee: Coffee; index: number }) {
  const flip = index % 2 === 1
  const dark = coffee.tone === "noir"
  const name = (
    <>
      <p className="wordmark text-[1.05rem] leading-none">{site.wordmark}</p>
      <h2
        id={`${coffee.slug}-title`}
        className="mt-4 font-serif text-[clamp(3.6rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.02em]"
      >
        <span className={index % 3 === 2 ? "italic" : ""}>{coffee.name}</span>
      </h2>
    </>
  )
  return (
    <Label
      tone={coffee.tone}
      id={coffee.slug}
      pad="tight"
      innerClassName={index === 0 ? "lg:!pt-28" : ""}
      aria-labelledby={`${coffee.slug}-title`}
    >
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className={`lg:col-span-7 ${flip ? "lg:col-start-6 lg:row-start-1" : ""}`}>
          {coffee.photo ? (
            <Frame
              photo={photos.sachetsShelf}
              ratio="aspect-[16/10]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectPosition="25% 84%"
              note={<T en="Office and travel" es="Oficina y viaje" />}
            />
          ) : (
            name
          )}
        </Reveal>

        <Reveal i={1} className={`lg:col-span-5 ${flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          {coffee.photo ? <div className="mb-8">{name}</div> : null}
          <dl className="grid grid-cols-3 gap-x-5">
            <div>
              <dt className="label-row">
                <T en="Type" es="Tipo" />
              </dt>
              <dd className="mt-1">
                <T t={kindLabel[coffee.kind]} />
              </dd>
            </div>
            <div>
              <dt className="label-row">
                <T en="Origin" es="Origen" />
              </dt>
              <dd className="mt-1">Colombia</dd>
            </div>
            <div>
              <dt className="label-row">
                <T en="Order" es="Pedido" />
              </dt>
              <dd className="mt-1">WhatsApp</dd>
            </div>
          </dl>
          <p className="mt-6 font-serif text-[1.65rem] italic leading-snug md:text-[1.9rem]">
            <T en={coffee.en} es={coffee.es} />
          </p>
          <Action href={site.whatsappCatalog} variant={dark ? "solid-light" : "solid"} arrow className="mt-7">
            <T en={`Ask about ${coffee.name}`} es={`Pregunta por ${coffee.name}`} />
          </Action>
        </Reveal>
      </div>
    </Label>
  )
}

export default function CoffeesPage() {
  return (
    <>
      {/* Hero: light, with the beans photo bleeding off the right edge and into the first band. */}
      <Label
        tone="milk"
        first
        pad="none"
        className="z-10"
        fields={[<T key="o" t={copy.nav.origin} />, <T key="s" en="Six lines" es="Seis líneas" />]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col lg:col-span-7 lg:pb-24 lg:pt-6">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="The coffees." es="Los cafés." />
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.25rem] font-medium leading-snug md:text-[1.45rem]">
              <T
                en="Three celebrated varieties, two Kreore lines and a drip sachet."
                es="Tres variedades célebres, dos líneas Kreore y un sobre para filtrar."
              />
            </p>
            <p className="t-muted mt-3 max-w-[48ch]">
              <T
                en="Each line wears its own color, like the label on a bag. Prices, sizes and current lots live in our WhatsApp catalog."
                es="Cada línea lleva su propio color, como la etiqueta de una bolsa. Precios, tamaños y lotes del momento están en nuestro catálogo de WhatsApp."
              />
            </p>
            <div className="mt-8">
              <Action href={site.whatsappCatalog} variant="solid" arrow>
                <T en="Open the WhatsApp catalog" es="Abre el catálogo de WhatsApp" />
              </Action>
            </div>
          </div>
          <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
            <div className="bleed-right lg:-mb-20">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[5/4] overflow-hidden sm:aspect-[16/10] lg:aspect-square">
                  <Image
                    src={photos.beans.src}
                    alt={photos.beans.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "50% 62%" }}
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

      <Label tone="bourbon" pad="tight" aria-labelledby="catalog-title">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="catalog-title" className="font-serif text-d2 font-medium">
              <T
                en="Prices, sizes and current lots are in our WhatsApp catalog."
                es="Precios, tamaños y lotes del momento, en nuestro catálogo."
              />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-3 lg:col-span-4 lg:col-start-9">
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
