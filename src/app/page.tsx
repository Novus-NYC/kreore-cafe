import Link from "next/link"
import Image from "next/image"
import { Label, LabelRow } from "@/lib/components/label"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { CoffeeMarquee } from "@/lib/components/marquee"
import { Only, T } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import { coffees, kindLabel, type Coffee } from "@/lib/coffees"
import { services } from "@/lib/services"
import { photos } from "@/lib/images"
import { mailto, site } from "@/lib/site"

// Masonry placement on the shelf: varied spans so no two labels share a size.
const shelfLayout: Record<string, string> = {
  "pink-bourbon": "sm:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[13rem] sm:min-h-[22rem] lg:min-h-0",
  gesha: "sm:col-span-6 lg:col-span-7 min-h-[13rem] sm:min-h-[15rem]",
  pureza: "sm:col-span-3 lg:col-span-3 min-h-[13rem] sm:min-h-[15rem]",
  "noir-82": "sm:col-span-3 lg:col-span-4 lg:row-span-2 min-h-[13rem] sm:min-h-[22rem] lg:min-h-0",
  pacamara: "sm:col-span-6 lg:col-span-5 min-h-[13rem] sm:min-h-[15rem]",
  sachets: "sm:col-span-6 lg:col-span-3 min-h-[18rem]",
}

function ShelfLabel({ coffee, i }: { coffee: Coffee; i: number }) {
  const tall = coffee.slug === "pink-bourbon" || coffee.slug === "noir-82"
  return (
    <Reveal i={i} as="li" className={`${shelfLayout[coffee.slug]} flex`}>
      <Link
        href={`/coffees#${coffee.slug}`}
        className={`tone-${coffee.tone} group relative flex w-full flex-col overflow-hidden p-5 transition-transform duration-300 ease-label hover:-translate-y-1 md:p-6 ${
          coffee.tone === "pureza" ? "border border-k-noir" : ""
        }`}
      >
        <span className="label-row relative flex justify-between gap-3">
          <span>
            <T t={kindLabel[coffee.kind]} />
          </span>
          <span>Colombia</span>
        </span>
        {coffee.photo ? (
          <span className="relative mt-4 block min-h-[10rem] flex-1 overflow-hidden">
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
          <span className="mt-3 block max-w-[36ch] text-[1rem] leading-snug">
            <T en={coffee.en} es={coffee.es} />
          </span>
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 text-xl transition-transform duration-300 group-hover:translate-x-1 md:bottom-6 md:right-6"
        >
          →
        </span>
      </Link>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: noir label, motto, farm photo bleeding off the right edge and out of the bottom. */}
      <Label
        tone="noir"
        first
        pad="none"
        className="z-10"
        fields={[<T key="o" t={copy.nav.origin} />, <T key="d" t={copy.nav.destination} />]}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col pb-4 lg:col-span-7 lg:pb-28 lg:pt-4">
            <p className="label-row mb-6 md:mb-8">
              Kre(o) + oré = <span className="whitespace-nowrap">creo porque oré</span>
            </p>
            <h1>
              <span lang="es" className="block font-serif text-motto font-medium italic">
                {site.motto}
              </span>
              <Only lang="en">
                <span className="mt-5 block font-serif text-d4 italic text-k-gesha">I create because I prayed.</span>
              </Only>
              <span className="mt-6 block max-w-[30ch] font-sans text-[1.25rem] font-medium leading-snug md:mt-8 md:text-[1.5rem]">
                <T
                  en="Colombian specialty coffee, poured in New York."
                  es="Café colombiano de especialidad, servido en Nueva York."
                />
              </span>
            </h1>
            <p className="t-muted mt-4 max-w-[46ch] text-[0.98rem]">
              <T
                en={
                  <>
                    Kreore comes from <em lang="es">creo</em> (I create) and <em lang="es">oré</em> (I prayed).
                  </>
                }
                es={
                  <>
                    Kreore nace de <em>creo</em> y <em>oré</em>.
                  </>
                }
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10">
              <Action href={site.whatsapp} variant="solid-light" arrow>
                <T en="Book coffee for your event" es="Reserva café para tu evento" />
              </Action>
              <Action href="/coffees" variant="text">
                <T en="See the coffees" es="Ver los cafés" />
              </Action>
            </div>
          </div>

          <div className="relative -mx-5 sm:mx-0 lg:col-span-5 lg:self-start">
            <div className="bleed-right relative lg:-mb-56">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[4/5] overflow-hidden lg:aspect-[5/7]">
                  <Image
                    src={photos.farmTour.src}
                    alt={photos.farmTour.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "50% 42%" }}
                  />
                </div>
              </Reveal>
              {/* A bag label laid over the photo's edge: the brand's own device, not a sticker. */}
              <Reveal
                i={3}
                className="tone-pureza absolute bottom-5 left-5 w-[15rem] border border-k-noir p-4 sm:left-0 lg:-left-16 lg:bottom-24 lg:w-[17rem] lg:p-5"
              >
                <p className="wordmark relative text-[1.5rem] leading-none">{site.wordmark}</p>
                <dl className="relative mt-3 text-[0.9rem] leading-snug">
                  <div className="rule flex justify-between gap-3 border-t py-1.5">
                    <dt className="label-row !text-k-bean">
                      <T en="Origin" es="Origen" />
                    </dt>
                    <dd>Colombia</dd>
                  </div>
                  <div className="rule flex justify-between gap-3 border-t py-1.5">
                    <dt className="label-row !text-k-bean">
                      <T en="Poured in" es="Servido en" />
                    </dt>
                    <dd>
                      <T en="New York" es="Nueva York" />
                    </dd>
                  </div>
                  <div className="rule flex justify-between gap-3 border-y py-1.5">
                    <dt className="label-row !text-k-bean">
                      <T en="Photo" es="Foto" />
                    </dt>
                    <dd>
                      <T t={photos.farmTour.caption} />
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* 2. The one marquee: the six lines in their label colors. The hero photo hangs over it. */}
      <CoffeeMarquee />

      {/* 3. Her words, then the varietal shelf, on the pureza canvas. */}
      <Label tone="pureza" innerClassName="lg:!pt-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="label-row mb-6">
              <T en="In her words" es="En sus palabras" />
            </p>
            <h2 className="font-serif text-d1 font-medium">
              <T
                en={
                  <>
                    Born between Colombia <span className="italic">and New York City.</span>
                  </>
                }
                es={
                  <>
                    Nacido entre Colombia <span className="italic">y Nueva York.</span>
                  </>
                }
              />
            </h2>
          </Reveal>
          <Reveal i={1} className="lg:col-span-3 lg:col-start-10 lg:mb-3">
            <p className="font-serif text-[1.5rem] italic leading-snug md:text-[1.75rem]">
              <T
                en="Curating exceptional coffee, wellness and lifestyle experiences."
                es="Creando experiencias excepcionales de café, bienestar y estilo de vida."
              />
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
            <div>
              <h2 id="shelf-title" className="font-serif text-d2 font-medium italic">
                <T en="The shelf." es="La estantería." />
              </h2>
              <p className="t-muted mt-2">
                <T en="Six lines, each with its own label color." es="Seis líneas, cada una con el color de su etiqueta." />
              </p>
            </div>
            <Action href="/coffees" variant="text" arrow>
              <T en="See every coffee" es="Ver todos los cafés" />
            </Action>
          </div>
          <ul
            className="grid auto-rows-auto gap-3 sm:grid-cols-6 lg:grid-cols-12 lg:auto-rows-[minmax(15rem,auto)]"
            aria-labelledby="shelf-title"
          >
            {coffees.map((coffee, i) => (
              <ShelfLabel key={coffee.slug} coffee={coffee} i={i} />
            ))}
          </ul>
        </div>
      </Label>

      {/* 4. Services: editorial list with a sticky photo. */}
      <Label
        tone="noir"
        fields={[<T key="s" en="Service · Coffee" es="Servicio · Café" />, <T key="n" en="New York" es="Nueva York" />]}
      >
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Coffee wherever you need it." es="Café donde lo necesites." />
            </h2>
            <ul className="mt-14 md:mt-20">
              {services.map((s, i) => (
                <Reveal as="li" i={i} key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="rule group grid gap-2 border-t py-7 transition-colors md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:py-9"
                  >
                    <span className="font-serif text-[clamp(2.4rem,4.4vw,4rem)] font-medium leading-none transition-[transform,color] duration-300 ease-label group-hover:translate-x-2 group-hover:text-k-bourbon">
                      <T en={s.en} es={s.es} />
                    </span>
                    <span className="t-muted block">
                      <T en={s.lineEn} es={s.lineEs} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden text-2xl transition-transform duration-300 group-hover:translate-x-1 md:block"
                    >
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
                  note="Pop-up"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* 5. Kreore Woman: the community, type-led between two photo sections. */}
      <Label
        tone="bourbon"
        fields={["Kreore Woman", <T key="c" en="Community · New York" es="Comunidad · Nueva York" />]}
        innerClassName="lg:!pb-40"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium italic">
              <T en="Stories and connections." es="Historias y conexiones." />
            </h2>
            <p className="mt-6 max-w-[38ch] text-[1.15rem] leading-snug">
              <T
                en="Brunches, coffee and conversation among women."
                es="Brunches, café y conversación entre mujeres."
              />
            </p>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:mt-40">
            <blockquote className="border-l-4 border-k-noir pl-6">
              <p className="font-serif text-[2rem] font-medium leading-[1.05] md:text-[2.6rem]">
                <T
                  en="“We’re looking for women with different stories who love coffee.”"
                  es="“Buscamos mujeres con diferentes historias que amen el café.”"
                />
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                <T en="Follow for the next gathering" es="Síguenos para el próximo encuentro" />
              </Action>
              <Action href="/community" variant="text">
                <T en="Meet the community" es="Conoce la comunidad" />
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* 6. Find us: the MoCADA entrance, cropped big and pulled up into the community label.
          CONFIRM with owner before launch: MoCADA as a current, ongoing location.
          The crop (4:3 at 50% 90%) excludes the Spanish caption baked into the photo's upper third. */}
      <Label
        tone="gesha"
        innerClassName="!pt-0"
      >
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative -mx-5 -mt-16 sm:mx-0 bleed-left lg:col-span-7 lg:-mt-28">
            <div className="photo-zoom relative aspect-[4/3] overflow-hidden">
              <Image
                src={photos.mocadaEntrance.src}
                alt={photos.mocadaEntrance.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                placeholder="blur"
                className="photo-grade object-cover"
                style={{ objectPosition: "50% 90%" }}
              />
            </div>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:pb-4">
            <LabelRow left={<T en="Find us" es="Encuéntranos" />} right="Brooklyn" className="mb-8 lg:mb-10" />
            <h2 className="font-serif font-medium">
              <span className="block text-d4">
                <T en="Find Kreore at" es="Encuéntranos en" />
              </span>
              <span className="mt-1 block text-[clamp(4rem,9vw,8.5rem)] italic leading-[0.85] tracking-[-0.02em]">
                {site.mocada.name}.
              </span>
            </h2>
            <p className="mt-6 max-w-[38ch] text-[1.1rem]">
              <T
                en="For current pop-up locations, check our Instagram."
                es="Para saber dónde estaremos, mira nuestro Instagram."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                <T en="Current locations on Instagram" es="Ubicaciones en Instagram" />
              </Action>
              <Action href={site.mocada.url} variant="text">
                <T en={`About ${site.mocada.name}`} es={`Sobre ${site.mocada.name}`} />
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* 7. CTA label: pacamara, once per page. Full-width question, actions on a ruled line below. */}
      <Label
        tone="pacamara"
        fields={[
          <T key="r" en="Bookings" es="Reservas" />,
          <T key="e" en="Events · Offices · Hotels" es="Eventos · Oficinas · Hoteles" />,
        ]}
      >
        <Reveal>
          <h2 className="max-w-[20ch] font-serif text-d1 font-medium">
            <T en="Planning an event, an office or a hotel service?" es="¿Un evento, una oficina, un hotel?" />
          </h2>
        </Reveal>
        <Reveal
          i={1}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
        >
          <Action href={site.whatsapp} variant="solid" arrow>
            <T t={copy.common.whatsapp} />
          </Action>
          <Action href={mailto} variant="outline">
            <T en="Email" es="Correo" /> {site.email}
          </Action>
          <Action href={site.hostForm} variant="text" arrow>
            <T t={copy.common.hostForm} />
          </Action>
        </Reveal>
      </Label>
    </>
  )
}
