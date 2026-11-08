import Link from "next/link"
import Image from "next/image"
import { Label, LabelRow } from "@/lib/components/label"
import { Bilingual } from "@/lib/components/bilingual"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { coffees, type Coffee } from "@/lib/coffees"
import { services } from "@/lib/services"
import { photos } from "@/lib/images"
import { mailto, site } from "@/lib/site"

// Masonry placement on the shelf: varied spans so no two labels share a size.
const shelfLayout: Record<string, string> = {
  "pink-bourbon": "sm:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[22rem] lg:min-h-0",
  gesha: "sm:col-span-6 lg:col-span-7 min-h-[15rem]",
  pureza: "sm:col-span-3 lg:col-span-3 min-h-[15rem]",
  "noir-82": "sm:col-span-3 lg:col-span-4 lg:row-span-2 min-h-[22rem] lg:min-h-0",
  pacamara: "sm:col-span-6 lg:col-span-5 min-h-[15rem]",
  sachets: "sm:col-span-6 lg:col-span-3 min-h-[18rem]",
}

function ShelfLabel({ coffee, i }: { coffee: Coffee; i: number }) {
  const tall = coffee.slug === "pink-bourbon" || coffee.slug === "noir-82"
  return (
    <Reveal i={i} as="li" className={`${shelfLayout[coffee.slug]} flex`}>
      <Link
        href={`/cafes#${coffee.slug}`}
        className={`tone-${coffee.tone} group relative flex w-full flex-col overflow-hidden p-5 md:p-6 ${
          coffee.tone === "pureza" ? "border border-k-noir" : ""
        }`}
      >
        <span aria-hidden="true" className="rule pointer-events-none absolute inset-2 border" />
        <span className="label-row relative flex justify-between gap-3">
          <span>{coffee.kind}</span>
          <span>Colombia</span>
        </span>
        {coffee.photo ? (
          <span className="rule relative mt-4 block min-h-[10rem] flex-1 overflow-hidden border">
            <Image
              src={photos.sachetsShelf.src}
              alt={photos.sachetsShelf.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              className="photo-grade object-cover transition-transform duration-700 ease-label group-hover:scale-[1.03]"
              style={{ objectPosition: "20% 82%" }}
            />
          </span>
        ) : null}
        <span className={`relative block pr-8 ${coffee.photo ? "pt-5" : "mt-auto pt-10"}`}>
          <span
            className={`block font-serif font-medium leading-[0.9] ${
              tall ? "text-[clamp(3rem,5vw,5.25rem)]" : "text-[clamp(2.4rem,3.6vw,3.75rem)]"
            } ${coffee.slug === "gesha" || coffee.slug === "pacamara" ? "italic" : ""}`}
          >
            {coffee.name}
          </span>
          <span className="mt-3 block max-w-[34ch] font-serif text-[1.15rem] italic leading-snug">{coffee.es}</span>
          <span lang="en" className="t-muted mt-1 block max-w-[40ch] text-[0.95rem] leading-snug">
            {coffee.en}
          </span>
        </span>
        <span aria-hidden="true" className="absolute bottom-5 right-5 text-xl transition-transform duration-300 group-hover:translate-x-1 md:bottom-6 md:right-6">
          →
        </span>
      </Link>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: noir label, motto, farm photo breaking out of the bottom edge. */}
      <Label
        tone="noir"
        first
        pad="none"
        className="z-10"
        fields={["Origen · Colombia", "Destino · Nueva York"]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col pb-4 lg:col-span-7 lg:pb-24">
            <p className="label-row mb-6 md:mb-8">
              Kre(o) + oré = <span className="whitespace-nowrap">creo porque oré</span>
            </p>
            <Bilingual
              level={1}
              size="motto"
              italic
              es={site.motto}
              en="Colombian specialty coffee, poured in New York."
             
              enClassName="!text-k-pureza"
            />
            <p className="t-muted mt-4 max-w-[46ch] text-[0.98rem]" lang="en">
              Kreore comes from <em lang="es">creo</em> (I create) and <em lang="es">oré</em> (I prayed).
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10">
              <Action href={site.whatsapp} variant="solid-light" arrow>
                Book coffee for your event
              </Action>
              <Action href="/cafes" variant="text">
                See the coffees
              </Action>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:self-end">
            <Reveal variant="mask" className="lg:translate-y-16">
              <Frame
                photo={photos.farmTour}
                ratio="aspect-[4/5] lg:aspect-[3/4]"
                sizes="(min-width: 1360px) 520px, (min-width: 1024px) 38vw, 100vw"
                objectPosition="50% 45%"
                preload
                note="Origen"
              />
            </Reveal>
          </div>
        </div>
      </Label>

      {/* 2 + 3. Linktree line and the varietal shelf, on the pureza canvas. */}
      <Label tone="pureza" innerClassName="lg:!pt-40">
        <div className="grid lg:grid-cols-12">
          <Reveal className="lg:col-span-8 lg:col-start-2">
            <p className="label-row mb-6">En sus palabras</p>
            <Bilingual
              size="d1"
              es={
                <>
                  Nacido entre Colombia <span className="italic">y Nueva York.</span>
                </>
              }
              en={site.tagline}
              enClassName="max-w-[44ch]"
            />
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
            <Bilingual size="d3" es="La estantería." en="Six lines, each with its own label color." />
            <Action href="/cafes" variant="text" arrow>
              Ver todos los cafés
            </Action>
          </div>
          <ul className="grid auto-rows-auto gap-3 sm:grid-cols-6 lg:grid-cols-12 lg:auto-rows-[minmax(15rem,auto)]" aria-label="Cafés Kreore">
            {coffees.map((coffee, i) => (
              <ShelfLabel key={coffee.slug} coffee={coffee} i={i} />
            ))}
          </ul>
        </div>
      </Label>

      {/* 4. Services: editorial list with a sticky street photo. */}
      <Label tone="noir" fields={["Servicio · Café", "Nueva York"]}>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Bilingual size="d1" es="Café donde lo necesites." en="Coffee wherever you need it." enClassName="max-w-none" />
            <ul className="mt-14 md:mt-20">
              {services.map((s, i) => (
                <Reveal as="li" i={i} key={s.slug}>
                  <Link
                    href={`/servicios#${s.slug}`}
                    className="rule group grid gap-2 border-t py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] md:items-baseline md:gap-8 md:py-9"
                  >
                    <span className="font-serif text-[clamp(2.4rem,4.4vw,4rem)] font-medium leading-none transition-transform duration-300 ease-label group-hover:translate-x-2">
                      {s.es}
                    </span>
                    <span lang="en" className="block">
                      <span className="block font-bold">{s.en}</span>
                      <span className="t-muted block">{s.lineEn}</span>
                    </span>
                    <span aria-hidden="true" className="hidden text-2xl md:block">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <div className="rule border-t" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Frame
                  photo={photos.toastStreet}
                  ratio="aspect-[4/5]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  objectPosition="50% 30%"
                  note="Brooklyn"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* 5. Kreore Woman: the community, in her words. */}
      <Label tone="bourbon" fields={["Kreore Woman", "Comunidad · Nueva York"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Bilingual size="d1" italic es="Historias y conexiones." en="Stories and connections. Brunches, coffee and conversation among women." />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:mt-48">
            <blockquote className="rule border-l-2 border-k-noir pl-6">
              <p className="font-serif text-[1.9rem] leading-tight md:text-[2.2rem]">
                “Buscamos mujeres con diferentes historias que amen el café.”
              </p>
              <p lang="en" className="t-muted mt-3">
                “We’re looking for women with different stories who love coffee.”
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                Follow for the next gathering
              </Action>
              <Action href="/comunidad" variant="text">
                Conoce la comunidad
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* 6. Find us: short gesha band. */}
      {/* CONFIRM with owner before launch: MoCADA as a current, ongoing location. */}
      <Label tone="gesha" pad="tight" innerClassName="!pt-8 md:!pt-10">
        <LabelRow left="Encuéntranos" right="Brooklyn" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <h2 className="font-serif text-d3 font-medium">
            Encuéntranos en <span className="italic">{site.mocada.name}.</span>
            <span lang="en" className="mt-1 block font-sans text-base font-normal">
              Find Kreore at {site.mocada.name}.
            </span>
          </h2>
          <Action href={site.instagram} variant="text" arrow className="font-bold">
            Current pop-up locations on Instagram
          </Action>
        </div>
      </Label>

      {/* 7. CTA label: pacamara, once per page. */}
      <Label tone="pacamara" fields={["Reservas", "Eventos · Oficinas · Hoteles"]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Bilingual
              size="d1"
              es="¿Un evento, una oficina, un hotel?"
              en="Planning an event, an office or a hotel service?"
             
              enClassName="max-w-none"
            />
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:justify-end">
            <Action href={site.whatsapp} variant="solid" arrow className="w-full justify-between sm:w-auto">
              Message us on WhatsApp
            </Action>
            <Action href={mailto} variant="outline" className="w-full sm:w-auto">
              Email {site.email}
            </Action>
            <Action href={site.hostForm} variant="text" arrow>
              Host your event with Kreore
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
