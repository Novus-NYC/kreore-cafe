import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import { services } from "@/lib/services"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Office coffee supply, catering, event hosting and pop-up experiences with Colombian specialty coffee in New York. Book Kreore on WhatsApp.",
  alternates: { canonical: "/services" },
}

const [office, catering, events, popups] = services

const lead = "max-w-[36ch] font-serif text-[1.6rem] leading-snug md:text-[1.85rem]"

export default function ServicesPage() {
  return (
    <>
      {/* Hero: light, a toast with Kreore mugs bleeding off the right edge, the four services as an index. */}
      <Label
        tone="milk"
        first
        pad="none"
        className="z-10"
        fields={[<T key="s" en="Services · Coffee" es="Servicios · Café" />, <T key="d" t={copy.nav.destination} />]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:row-start-1">
            <h1 className="font-serif text-[clamp(3.4rem,6.8vw,7.25rem)] font-medium leading-[0.9] tracking-[-0.02em]">
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
            </h1>
            <p className="mt-6 max-w-[44ch] text-[1.2rem] leading-snug md:text-[1.35rem]">
              <T
                en="Office coffee supply, catering, event hosting and pop-up experiences, poured with Colombian specialty coffee."
                es="Café para oficinas, catering, eventos y experiencias pop-up, con café colombiano de especialidad."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Action href={site.whatsapp} variant="solid" arrow>
                <T en="Book coffee service" es="Reserva el servicio de café" />
              </Action>
              <Action href={site.hostForm} variant="text">
                <T t={copy.common.hostForm} />
              </Action>
            </div>
          </div>
          <div className="relative -mx-5 sm:mx-0 lg:col-span-5 lg:row-span-2 lg:row-start-1">
            <div className="bleed-right lg:-mb-20">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                  <Image
                    src={photos.sachetsShelf.src}
                    alt={photos.sachetsShelf.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="photo-grade object-cover"
                    style={{ objectPosition: "30% 70%" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <nav aria-labelledby="services-index" className="pb-14 lg:col-span-7 lg:row-start-2 lg:pb-20">
            <p id="services-index" className="sr-only">
              <T en="The four services" es="Los cuatro servicios" />
            </p>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="rule group flex min-h-[52px] items-center justify-between border-b font-serif text-[1.55rem] transition-colors hover:text-k-rose"
                  >
                    <T en={s.en} es={s.es} />
                    <span aria-hidden="true" className="font-sans text-base transition-transform group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Label>

      {/* Office: pureza, sachets photo bleeding off the left edge, text right. */}
      <Label tone="pureza" id={office.slug} aria-labelledby="office-title" innerClassName="lg:!pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="bleed-left lg:col-span-6">
            <Frame
              photo={photos.kreoreSachet}
              ratio="aspect-[4/3] lg:aspect-[5/4]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              objectPosition="50% 50%"
              note="Kreore drip"
              className="lg:[&_figcaption]:pl-10"
            />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
            <p className="label-row">
              <T en="Format · Sachets and coffee" es="Formato · Sobres y café" />
            </p>
            <h2 id="office-title" className="mt-4 font-serif text-d2 font-medium">
              <T en={office.en} es={office.es} />
            </h2>
            <p className={`mt-6 ${lead}`}>
              <T en={office.lineEn} es={office.lineEs} />
            </p>
            <p className="t-muted mt-4 max-w-[52ch]">
              <T
                en="Kreore drip sachets are single-serve, so a cup of Colombian specialty coffee is ready at any desk."
                es="Los sobres Kreore son individuales: una taza de café colombiano de especialidad lista en cualquier escritorio."
              />
            </p>
            <Action href={site.whatsapp} variant="solid" arrow className="mt-8">
              <T en="Ask about office coffee" es="Pregunta por el café para oficinas" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Catering: bourbon, type-led, a huge word with the text offset right. */}
      <Label tone="bourbon" id={catering.slug} aria-labelledby="catering-title">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2
              id="catering-title"
              className="font-serif text-[clamp(4.5rem,14vw,13rem)] font-medium italic leading-[0.8] tracking-[-0.03em]"
            >
              Catering
            </h2>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5">
            <p className={lead}>
              <T en={catering.lineEn} es={catering.lineEs} />
            </p>
            <p className="mt-4 max-w-[52ch]">
              <T
                en="Tell us the date, the place and what you are celebrating, and we will shape the coffee service around it."
                es="Cuéntanos la fecha, el lugar y qué celebras, y armamos el servicio de café a tu medida."
              />
            </p>
            <Action href={site.whatsapp} variant="solid" arrow className="mt-8">
              <T en="Plan catering on WhatsApp" es="Planea tu catering por WhatsApp" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Events: milk, split with a paper field sheet. */}
      <Label tone="milk" id={events.slug} aria-labelledby="events-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <h2 id="events-title" className="font-serif text-d1 font-medium">
              <T en={events.en} es={events.es} />
            </h2>
            <p className={`mt-6 ${lead}`}>
              <T en={events.lineEn} es={events.lineEs} />
            </p>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
            <div className="tone-pureza p-6 md:p-9">
              <p className="wordmark text-[1.05rem] leading-none">{site.wordmark}</p>
              <p className="mt-5 font-serif text-[1.75rem] leading-snug">
                <T
                  en="Share the date, the place and who you want to bring together."
                  es="Cuéntanos la fecha, el lugar y a quién quieres reunir."
                />
              </p>
              <dl className="mt-5">
                {[
                  { en: "Date", es: "Fecha" },
                  { en: "Place", es: "Lugar" },
                  { en: "Guests", es: "Invitados" },
                ].map((f) => (
                  <div key={f.en} className="rule flex items-end gap-4 border-b pb-1 pt-4">
                    <dt className="label-row">
                      <T t={f} />
                    </dt>
                    <dd aria-hidden="true" className="flex-1" />
                  </div>
                ))}
              </dl>
              <Action href={site.hostForm} variant="solid" arrow className="mt-8">
                <T t={copy.common.hostForm} />
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* Pop-ups: the page's one noir band. Medium MoCADA crop, text left. */}
      <Label tone="noir" id={popups.slug} aria-labelledby="popups-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <h2 id="popups-title" className="font-serif text-d1 font-medium italic">
              <T en={popups.en} es={popups.es} />
            </h2>
            <p className={`mt-6 ${lead}`}>
              <T en={popups.lineEn} es={popups.lineEs} />
            </p>
            <p className="t-muted mt-4 max-w-[52ch]">
              <T
                en="Current pop-up locations are announced on Instagram."
                es="Anunciamos dónde estaremos en Instagram."
              />
            </p>
            <Action href={site.instagram} variant="solid-light" arrow className="mt-8">
              <T en="See where we pop up next" es="Mira dónde estaremos" />
            </Action>
          </Reveal>
          <Reveal i={1} className="ml-auto w-[72%] max-w-[22rem] lg:col-span-4 lg:col-start-9 lg:w-full lg:max-w-none">
            <Frame photo={photos.mocadaEntrance} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 28vw, 72vw" />
          </Reveal>
        </div>
      </Label>

      {/* Closing CTA: pacamara. */}
      <Label tone="pacamara" aria-labelledby="services-cta">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="services-cta" className="font-serif text-d1 font-medium">
              <T en="Tell us what you have in mind." es="Cuéntanos tu idea." />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-3 lg:col-span-4 lg:col-start-9">
            <Action href={site.hostForm} variant="solid" arrow>
              <T t={copy.common.hostForm} />
            </Action>
            <Action href={site.whatsapp} variant="outline">
              <T t={copy.common.whatsapp} />
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
