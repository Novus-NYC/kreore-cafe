import type { Metadata } from "next"
import { Label, LabelRow } from "@/lib/components/label"
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

const lead = "max-w-[36ch] font-serif text-[1.55rem] leading-snug md:text-[1.8rem]"

export default function ServicesPage() {
  return (
    <>
      {/* Header: pureza, type-led, with an index of the four services. */}
      <Label
        tone="pureza"
        first
        fields={[<T key="s" en="Service · Coffee" es="Servicio · Café" />, <T key="d" t={copy.nav.destination} />]}
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-motto font-medium">
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
          </div>
          <nav aria-labelledby="services-index" className="self-end lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10">
            <p id="services-index" className="t-muted mb-4">
              <T
                en="Office coffee supply, catering, event hosting and pop-up experiences, poured with Colombian specialty coffee."
                es="Café para oficinas, catering, eventos y experiencias pop-up, con café colombiano de especialidad."
              />
            </p>
            <ul className="border-t-2 border-k-noir">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="rule group flex min-h-[52px] items-center justify-between border-b font-serif text-[1.6rem] transition-colors hover:bg-k-noir hover:px-3 hover:text-k-pureza"
                  >
                    <T en={s.en} es={s.es} />
                    <span aria-hidden="true" className="font-sans text-base">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Label>

      {/* Office: noir, big photo bleeding off the left edge, text right. */}
      <Label
        tone="noir"
        id={office.slug}
        fields={[
          <T key="s" en="Service · Offices" es="Servicio · Oficinas" />,
          <T key="f" en="Format · Sachets and coffee" es="Formato · Sobres y café" />,
        ]}
      >
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="bleed-left lg:col-span-6">
            <Frame
              photo={photos.sachetsShelf}
              ratio="aspect-[4/5]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              objectPosition="50% 70%"
              note="Kreore drip"
              className="lg:[&_figcaption]:pl-10"
            />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-serif text-d1 font-medium">
              <T en={office.en} es={office.es} />
            </h2>
            <p className={`mt-8 ${lead}`}>
              <T en={office.lineEn} es={office.lineEs} />
            </p>
            <p className="t-muted mt-4 max-w-[52ch]">
              <T
                en="Kreore drip sachets are single-serve, so a cup of Colombian specialty coffee is ready at any desk."
                es="Los sobres Kreore son individuales: una taza de café colombiano de especialidad lista en cualquier escritorio."
              />
            </p>
            <Action href={site.whatsapp} variant="solid-light" arrow className="mt-8">
              <T en="Ask about office coffee" es="Pregunta por el café para oficinas" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Catering: bourbon, type-led, a huge word with the text offset right. */}
      <Label
        tone="bourbon"
        id={catering.slug}
        fields={[
          <T key="s" en="Service · Catering" es="Servicio · Catering" />,
          <T key="m" en="Meetings · Celebrations" es="Reuniones · Celebraciones" />,
        ]}
      >
        <Reveal>
          <h2 className="font-serif text-[clamp(5rem,17vw,16rem)] font-medium italic leading-[0.8] tracking-[-0.03em]">
            Catering
          </h2>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12">
          <Reveal i={1} className="lg:col-span-5 lg:col-start-7">
            <p className={lead}>
              <T en={catering.lineEn} es={catering.lineEs} />
            </p>
            <p className="t-muted mt-4 max-w-[52ch]">
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

      {/* Events: gesha, split with a ruled field sheet. */}
      <Label
        tone="gesha"
        id={events.slug}
        fields={[
          <T key="s" en="Service · Events" es="Servicio · Eventos" />,
          <T key="h" en="Host · Kreore" es="Anfitriona · Kreore" />,
        ]}
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif text-d1 font-medium">
              <T en={events.en} es={events.es} />
            </h2>
            <p className={`mt-8 ${lead}`}>
              <T en={events.lineEn} es={events.lineEs} />
            </p>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8 lg:mt-24">
            <div className="tone-pureza relative p-6 md:p-8">
              <span aria-hidden="true" className="rule pointer-events-none absolute inset-2 border" />
              <LabelRow
                left={<T en="To begin" es="Para empezar" />}
                right={<T en="Form" es="Formulario" />}
                className="relative"
              />
              <p className="relative mt-6 font-serif text-[1.8rem] leading-snug">
                <T
                  en="Share the date, the place and who you want to bring together."
                  es="Cuéntanos la fecha, el lugar y a quién quieres reunir."
                />
              </p>
              <dl className="relative mt-6">
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
              <Action href={site.hostForm} variant="solid" arrow className="relative mt-8">
                <T t={copy.common.hostForm} />
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* Pop-ups: pureza, text left, tall photo right rising into the band above. */}
      <Label tone="pureza" id={popups.slug} fields={[<T key="s" en="Service · Pop-ups" es="Servicio · Pop-ups" />, null]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="flex flex-col justify-center lg:col-span-6">
            <h2 className="font-serif text-d1 font-medium italic">
              <T en={popups.en} es={popups.es} />
            </h2>
            <p className={`mt-8 ${lead}`}>
              <T en={popups.lineEn} es={popups.lineEs} />
            </p>
            <p className="t-muted mt-4 max-w-[52ch]">
              <T
                en="Current pop-up locations are announced on Instagram."
                es="Anunciamos dónde estaremos en Instagram."
              />
            </p>
            <div className="mt-8">
              <Action href={site.instagram} variant="solid" arrow>
                <T en="See where we pop up next" es="Mira dónde estaremos" />
              </Action>
            </div>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8 lg:-mt-48">
            <Frame
              photo={photos.toastStreet}
              ratio="aspect-[3/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
              objectPosition="50% 40%"
              note={<T en="A toast" es="Brindis" />}
            />
          </Reveal>
        </div>
      </Label>

      {/* Closing CTA: pacamara. */}
      <Label
        tone="pacamara"
        fields={[<T key="b" en="Bookings" es="Reservas" />, <T key="w" en="WhatsApp · Form" es="WhatsApp · Formulario" />]}
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Tell us what you have in mind." es="Cuéntanos tu idea." />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
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
