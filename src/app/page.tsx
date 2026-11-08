import Link from "next/link"
import Image from "next/image"
import { Label } from "@/lib/components/label"
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

// Shelf placement: asymmetric rows, every label sized to its content (no row spans, no voids).
const shelfLayout: Record<string, string> = {
  "pink-bourbon": "sm:col-span-6 lg:col-span-7 min-h-[15rem] lg:min-h-[17.5rem]",
  pureza: "sm:col-span-6 lg:col-span-5 min-h-[15rem] lg:min-h-[17.5rem]",
  gesha: "sm:col-span-6 lg:col-span-4 min-h-[15rem] lg:min-h-[17rem]",
  "noir-82": "sm:col-span-6 lg:col-span-3 min-h-[15rem] lg:min-h-[17rem]",
  pacamara: "sm:col-span-12 lg:col-span-5 min-h-[15rem] lg:min-h-[17rem]",
  sachets: "sm:col-span-12",
}

// On the pureza shelf the white Pureza bag reads as milk, so it still looks like its own label.
const cardTone = (c: Coffee) => (c.tone === "pureza" ? "milk" : c.tone)

function ShelfLabel({ coffee, i }: { coffee: Coffee; i: number }) {
  const big = coffee.slug === "pink-bourbon" || coffee.slug === "pureza"
  const text = (
    <>
      <span
        className={`block font-serif font-medium leading-[0.9] ${
          big ? "text-[clamp(3rem,4.6vw,4.75rem)]" : "text-[clamp(2.6rem,3.6vw,3.75rem)]"
        } ${coffee.slug === "gesha" || coffee.slug === "pacamara" ? "italic" : ""}`}
      >
        {coffee.name}
      </span>
      <span className="mt-3 block max-w-[34ch] text-[1.0625rem] leading-snug">
        <T en={coffee.en} es={coffee.es} />
      </span>
      <span className="label-row mt-5 flex items-center justify-between gap-4">
        <span>
          <T en="Origin" es="Origen" /> · Colombia
        </span>
        <span
          aria-hidden="true"
          className="font-sans text-xl font-normal tracking-normal transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </>
  )
  const head = (
    <span className="flex items-baseline justify-between gap-3">
      <span className="wordmark text-[0.95rem] leading-none">{site.wordmark}</span>
      <span className="label-row">
        <T t={kindLabel[coffee.kind]} />
      </span>
    </span>
  )

  if (coffee.photo) {
    return (
      <Reveal i={i} as="li" className={`${shelfLayout[coffee.slug]} flex`}>
        <Link
          href={`/coffees#${coffee.slug}`}
          className="tone-milk group grid w-full transition-transform duration-300 ease-label hover:-translate-y-1 sm:grid-cols-12"
        >
          <span className="relative block aspect-[16/10] overflow-hidden sm:col-span-5 sm:aspect-auto sm:min-h-[15rem]">
            <Image
              src={photos.sachetsShelf.src}
              alt={photos.sachetsShelf.alt}
              fill
              sizes="(min-width: 640px) 42vw, 100vw"
              placeholder="blur"
              className="photo-grade object-cover transition-transform duration-700 ease-label group-hover:scale-[1.03]"
              style={{ objectPosition: "20% 84%" }}
            />
          </span>
          <span className="flex flex-col p-6 sm:col-span-7 md:p-8">
            {head}
            <span className="mt-auto block pt-8">{text}</span>
          </span>
        </Link>
      </Reveal>
    )
  }

  return (
    <Reveal i={i} as="li" className={`${shelfLayout[coffee.slug]} flex`}>
      <Link
        href={`/coffees#${coffee.slug}`}
        className={`tone-${cardTone(coffee)} group flex w-full flex-col p-6 transition-transform duration-300 ease-label hover:-translate-y-1 md:p-7`}
      >
        {head}
        <span className="mt-auto block pt-8">{text}</span>
      </Link>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: a light label. Motto in noir, farm photo bleeding off the right edge and over the marquee. */}
      <Label
        tone="milk"
        first
        pad="none"
        className="z-10"
        fields={[<T key="o" t={copy.nav.origin} />, <T key="d" t={copy.nav.destination} />]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-7 lg:pb-24">
            <h1>
              <span lang="es" className="block font-serif text-motto font-medium italic">
                {site.motto}
              </span>
              <Only lang="en">
                <span className="mt-4 block font-serif text-d4 italic text-k-rose">I create because I prayed.</span>
              </Only>
              <span className="mt-6 block max-w-[30ch] font-sans text-[1.25rem] font-medium leading-snug md:mt-8 md:text-[1.5rem]">
                <T
                  en="Colombian specialty coffee, poured in New York."
                  es="Café colombiano de especialidad, servido en Nueva York."
                />
              </span>
            </h1>
            <p className="t-muted mt-3 max-w-[46ch]">
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
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Action href={site.whatsapp} variant="solid" arrow>
                <T en="Book coffee for your event" es="Reserva café para tu evento" />
              </Action>
              <Action href="/coffees" variant="text">
                <T en="See the coffees" es="Ver los cafés" />
              </Action>
            </div>
          </div>

          <div className="relative -mx-5 sm:mx-0 lg:col-span-5 lg:self-start">
            <div className="bleed-right relative lg:-mb-24">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
                  <Image
                    src={photos.farmTour.src}
                    alt={photos.farmTour.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
              </Reveal>
              {/* A white bag label laid on the photo: the brand's own device, not a sticker. */}
              <Reveal
                i={3}
                className="tone-milk absolute bottom-5 left-5 w-[14.5rem] p-4 lg:-left-14 lg:bottom-32 lg:w-[16.5rem] lg:p-5"
              >
                <p className="wordmark text-[1.45rem] leading-none">{site.wordmark}</p>
                <dl className="mt-3 text-[0.98rem] leading-snug">
                  <div className="rule flex justify-between gap-3 border-t py-1.5">
                    <dt className="label-row">
                      <T en="Origin" es="Origen" />
                    </dt>
                    <dd>Colombia</dd>
                  </div>
                  <div className="rule flex justify-between gap-3 border-t py-1.5">
                    <dt className="label-row">
                      <T en="Poured in" es="Servido en" />
                    </dt>
                    <dd>
                      <T en="New York" es="Nueva York" />
                    </dd>
                  </div>
                  <div className="rule flex justify-between gap-3 border-t pt-1.5">
                    <dt className="label-row">
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

      {/* 2. The one marquee: the six lines, each led by a swatch of its label color. */}
      <CoffeeMarquee />

      {/* 3. The founder, early: her words and her field. */}
      <Label tone="milk" aria-labelledby="founder-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal variant="mask" className="order-2 lg:order-1 lg:col-span-5">
            <Frame
              photo={photos.coffeeField}
              ratio="aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
              objectPosition="55% 60%"
              className="mx-auto max-w-[30rem] lg:max-w-none"
            />
          </Reveal>
          <Reveal i={1} className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <h2 id="founder-title" className="font-serif text-d1 font-medium">
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
            <p className="mt-8 max-w-[34ch] font-serif text-[1.6rem] leading-snug md:text-[1.9rem]">
              <T
                en="Viviana Durán founded Kreore to bring Colombian specialty coffee to New York tables, offices and gatherings."
                es="Viviana Durán fundó Kreore para llevar café colombiano de especialidad a las mesas, oficinas y encuentros de Nueva York."
              />
            </p>
            <p className="t-muted mt-5 max-w-[46ch]">
              <T
                en="Certified barista and creative entrepreneur. Curating exceptional coffee, wellness and lifestyle experiences."
                es="Barista certificada y emprendedora creativa. Creando experiencias excepcionales de café, bienestar y estilo de vida."
              />
            </p>
            <Action href="/story" variant="text" arrow className="mt-6">
              <T en="Read her story" es="Lee su historia" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* 4. The varietal shelf: each coffee as a small bag label. */}
      <Label tone="pureza" aria-labelledby="shelf-title">
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
        <ul className="grid gap-3 sm:grid-cols-12" aria-labelledby="shelf-title">
          {coffees.map((coffee, i) => (
            <ShelfLabel key={coffee.slug} coffee={coffee} i={i} />
          ))}
        </ul>
      </Label>

      {/* 5. Services: an editorial list beside a sticky photo, on the light canvas. */}
      <Label tone="milk" aria-labelledby="services-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="services-title" className="font-serif text-d1 font-medium">
              <T
                en={
                  <>
                    Coffee wherever <span className="italic">you need it.</span>
                  </>
                }
                es={
                  <>
                    Café donde <span className="italic">lo necesites.</span>
                  </>
                }
              />
            </h2>
            <ul className="mt-10 md:mt-12">
              {services.map((s, i) => (
                <Reveal as="li" i={i} key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="rule group grid gap-2 border-t py-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:py-7"
                  >
                    <span className="font-serif text-[clamp(2.2rem,3.8vw,3.4rem)] font-medium leading-none transition-[transform,color] duration-300 ease-label group-hover:translate-x-2 group-hover:text-k-rose">
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
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Frame
                  photo={photos.toastStreet}
                  ratio="aspect-[4/5]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  objectPosition="50% 30%"
                  className="mx-auto max-w-[30rem] lg:max-w-none"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* 6. Kreore Woman: the community on the signature pink. */}
      <Label tone="bourbon" aria-labelledby="community-title" innerClassName="lg:!pb-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="label-row mb-5">Kreore Woman</p>
            <h2 id="community-title" className="font-serif text-d1 font-medium italic">
              <T en="Stories and connections." es="Historias y conexiones." />
            </h2>
            <p className="mt-6 max-w-[38ch] text-[1.2rem] leading-snug">
              <T
                en="Brunches, coffee and conversation among women in New York."
                es="Brunches, café y conversación entre mujeres en Nueva York."
              />
            </p>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8 lg:mt-14">
            <blockquote className="border-l-4 border-k-noir pl-6">
              <p className="font-serif text-[2rem] font-medium leading-[1.05] md:text-[2.6rem]">
                <T
                  en="“We’re looking for women with different stories who love coffee.”"
                  es="“Buscamos mujeres con diferentes historias que amen el café.”"
                />
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
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

      {/* 7. Find us. CONFIRM with owner before launch: MoCADA as a current, ongoing location.
          The photo is a tight 4:5 crop (mocada-crop.jpg) of her and the case, shown at medium size and
          pulled up into the pink label above. */}
      <Label tone="pureza" aria-labelledby="find-title" innerClassName="!pt-0">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="relative z-10 -mt-16 ml-auto w-[68%] max-w-[22rem] sm:w-[50%] lg:order-2 lg:col-span-4 lg:col-start-9 lg:-mt-28 lg:w-full lg:max-w-none">
            <Frame photo={photos.mocadaEntrance} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 28vw, 68vw" />
          </Reveal>
          <Reveal i={1} className="lg:order-1 lg:col-span-7 lg:pb-12">
            <h2 id="find-title" className="font-serif font-medium">
              <span className="block text-d4">
                <T en="Find Kreore at" es="Encuéntranos en" />
              </span>
              <span className="mt-1 block text-[clamp(4rem,9vw,8.5rem)] italic leading-[0.85] tracking-[-0.02em]">
                {site.mocada.name}.
              </span>
            </h2>
            <p className="mt-6 max-w-[38ch] text-[1.15rem]">
              <T
                en="Brooklyn. For current pop-up locations, check our Instagram."
                es="Brooklyn. Para saber dónde estaremos, mira nuestro Instagram."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
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

      {/* 8. Closing CTA: pacamara, once per page. */}
      <Label tone="pacamara" aria-labelledby="cta-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 id="cta-title" className="max-w-[20ch] font-serif text-d1 font-medium">
              <T en="Planning an event, an office or a hotel service?" es="¿Un evento, una oficina, un hotel?" />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-3 lg:col-span-4">
            <Action href={site.whatsapp} variant="solid" arrow>
              <T t={copy.common.whatsapp} />
            </Action>
            <Action href={mailto} variant="text">
              {site.email}
            </Action>
            <Action href={site.hostForm} variant="text" arrow>
              <T t={copy.common.hostForm} />
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
