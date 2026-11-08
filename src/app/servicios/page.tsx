import type { Metadata } from "next"
import { Label, LabelRow } from "@/lib/components/label"
import { Bilingual, BilingualText } from "@/lib/components/bilingual"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { services } from "@/lib/services"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Office coffee supply, catering, event hosting and pop-up experiences with Colombian specialty coffee in New York. Book Kreore on WhatsApp.",
  alternates: { canonical: "/servicios" },
}

const [oficinas, catering, eventos, popups] = services

export default function ServiciosPage() {
  return (
    <>
      {/* Header: pureza, type-led, with a small index of the four services. */}
      <Label tone="pureza" first fields={["Servicio · Café", "Destino · Nueva York"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Bilingual level={1} size="motto" es="Café donde lo necesites." en="Coffee wherever you need it." enClassName="max-w-none" />
          </div>
          <nav aria-label="Servicios" className="self-end lg:col-span-3 lg:col-start-10">
            <p className="t-muted mb-4" lang="en">
              Office coffee supply, catering, event hosting and pop-up experiences, poured with Colombian specialty coffee.
            </p>
            <ul className="rule border-t">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="rule group flex min-h-[48px] items-center justify-between border-b font-serif text-[1.6rem]">
                    {s.es}
                    <span aria-hidden="true" className="font-sans text-base transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Label>

      {/* Oficinas: noir, big photo left, text right. */}
      <Label tone="noir" id={oficinas.slug} fields={["Servicio · Oficinas", "Formato · Sobres y café"]}>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Frame
              photo={photos.sachetsShelf}
              ratio="aspect-[4/5]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              objectPosition="50% 70%"
              note="Kreore drip"
            />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
            <Bilingual size="d1" es={oficinas.es} en={oficinas.en} />
            <BilingualText className="mt-8" es={oficinas.lineEs} en={oficinas.lineEn} />
            <p lang="en" className="t-muted mt-4 max-w-[52ch]">
              Kreore drip sachets are single-serve, so a cup of Colombian specialty coffee is ready at any desk.
            </p>
            <Action href={site.whatsapp} variant="solid-light" arrow className="mt-8">
              Ask about office coffee
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Catering: bourbon, type-led, huge word with text offset right. */}
      <Label tone="bourbon" id={catering.slug} fields={["Servicio · Catering", "Reuniones · Celebraciones"]}>
        <Reveal>
          <h2 className="font-serif text-[clamp(5rem,17vw,16rem)] font-medium italic leading-[0.8] tracking-[-0.03em]">
            {catering.es}
            <span lang="en" className="sr-only">
              {" "}
              ({catering.en})
            </span>
          </h2>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12">
          <Reveal i={1} className="lg:col-span-5 lg:col-start-7">
            <BilingualText es={catering.lineEs} en={catering.lineEn} />
            <p lang="en" className="t-muted mt-4 max-w-[52ch]">
              Tell us the date, the place and what you are celebrating, and we will shape the coffee service around it.
            </p>
            <Action href={site.whatsapp} variant="solid" arrow className="mt-8">
              Plan catering on WhatsApp
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* Eventos: gesha, split with a field sheet. */}
      <Label tone="gesha" id={eventos.slug} fields={["Servicio · Eventos", "Anfitriona · Kreore"]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Bilingual size="d1" es={eventos.es} en={eventos.en} />
            <BilingualText className="mt-8" es={eventos.lineEs} en={eventos.lineEn} />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8 lg:mt-24">
            <div className="border border-k-noir p-6 md:p-8">
              <LabelRow left="Para empezar" right="Formulario" />
              <p className="mt-6 font-serif text-[1.6rem] leading-snug">Cuéntanos la fecha, el lugar y a quién quieres reunir.</p>
              <p lang="en" className="mt-2">
                Share the date, the place and who you want to bring together.
              </p>
              <Action href={site.hostForm} variant="solid" arrow className="mt-8">
                Host your event with Kreore
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>

      {/* Pop-ups: pureza, text left, tall street photo right rising into the band above. */}
      <Label tone="pureza" id={popups.slug} fields={["Servicio · Pop-ups · Nueva York", null]}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="flex flex-col justify-center lg:col-span-6">
            <Bilingual size="d1" italic es={popups.es} en={popups.en} />
            <BilingualText className="mt-8" es={popups.lineEs} en={popups.lineEn} />
            <p lang="en" className="t-muted mt-4 max-w-[52ch]">
              Current pop-up locations are announced on Instagram.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                See where we pop up next
              </Action>
            </div>
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8 lg:-mt-48">
            <Frame
              photo={photos.toastStreet}
              ratio="aspect-[3/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
              objectPosition="50% 40%"
              note="Brindis"
            />
          </Reveal>
        </div>
      </Label>

      {/* Closing CTA: pacamara. */}
      <Label tone="pacamara" fields={["Reservas", "WhatsApp · Formulario"]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Bilingual size="d1" es="Cuéntanos tu idea." en="Tell us what you have in mind." />
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Action href={site.hostForm} variant="solid" arrow>
              Host your event with Kreore
            </Action>
            <Action href={site.whatsapp} variant="outline">
              Message us on WhatsApp
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
