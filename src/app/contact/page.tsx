import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import { photos } from "@/lib/images"
import { mailto, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Kreore Café on WhatsApp (+1 718-600-1155), by email at kreorecafe@gmail.com or on Instagram @kreorecafe. We reply in English or Spanish.",
  alternates: { canonical: "/contact" },
}

type Channel = {
  field: { en: string; es: string }
  note: { en: string; es: string }
  value: string
  href: string
  action: { en: string; es: string }
  external: boolean
  /** Label color the row takes on hover and focus. */
  hover: string
}

const channels: Channel[] = [
  {
    field: { en: "WhatsApp", es: "WhatsApp" },
    note: { en: "Fastest for events and orders", es: "Lo más rápido para eventos y pedidos" },
    value: site.phoneDisplay,
    href: site.whatsapp,
    action: { en: "Open WhatsApp", es: "Abrir WhatsApp" },
    external: true,
    hover: "hover:bg-k-bourbon focus-visible:bg-k-bourbon",
  },
  {
    field: { en: "Email", es: "Correo" },
    note: { en: "For details and quotes", es: "Para detalles y cotizaciones" },
    value: site.email,
    href: mailto,
    action: { en: "Send an email", es: "Enviar un correo" },
    external: false,
    hover: "hover:bg-k-pacamara focus-visible:bg-k-pacamara",
  },
  {
    field: { en: "Instagram", es: "Instagram" },
    note: { en: "Pop-ups and gatherings", es: "Pop-ups y encuentros" },
    value: site.instagramHandle,
    href: site.instagram,
    action: { en: "Open Instagram", es: "Abrir Instagram" },
    external: true,
    hover: "hover:bg-k-bourbon focus-visible:bg-k-bourbon",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero: light. The headline and WhatsApp first; the Kreore sachet from a pop-up bleeds off the right. */}
      <Label
        tone="milk"
        first
        pad="none"
        className="z-10"
        fields={[<T key="c" en="Contact" es="Contacto" />, "English · Español"]}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:pb-20 lg:pt-6">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="Write to us." es="Escríbenos." />
            </h1>
            <p className="mt-6 max-w-[36ch] text-[1.25rem] leading-snug md:text-[1.4rem]">
              <T
                en="Tell us about your event, office or gathering and we will take it from there."
                es="Cuéntanos sobre tu evento, tu oficina o tu encuentro y nos encargamos del resto."
              />
            </p>
            <p className="t-muted mt-3">
              <T t={copy.common.replyBoth} />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Action href={site.whatsapp} variant="solid" arrow>
                <T t={copy.common.whatsapp} />
              </Action>
              <Action href={mailto} variant="text">
                {site.email}
              </Action>
            </div>
          </div>
          <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
            <div className="bleed-right lg:-mb-16 lg:mt-6">
              <Reveal variant="mask">
                <div className="photo-zoom relative aspect-[4/3] overflow-hidden lg:aspect-[1012/740]">
                  <Image
                    src={photos.kreoreSachet.src}
                    alt={photos.kreoreSachet.alt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="photo-grade object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* Channels on pureza: huge noir serif rows that fill with a varietal color on hover and focus. */}
      <Label tone="pureza" pad="tight" aria-labelledby="channels-title" innerClassName="lg:!pt-28">
        <h2 id="channels-title" className="label-row mb-6">
          <T en="Channels" es="Canales" />
        </h2>
        <ul className="rule border-b">
          {channels.map((c, i) => (
            <Reveal as="li" i={i} key={c.field.en}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`rule group relative -mx-5 grid gap-3 border-t px-5 py-7 transition-colors duration-300 ease-label focus-visible:outline-none md:-mx-6 md:grid-cols-12 md:items-end md:gap-6 md:px-6 md:py-10 ${c.hover}`}
              >
                <span className="md:col-span-3">
                  <span className="block font-sans text-[0.875rem] font-bold uppercase tracking-[0.16em]">
                    <T t={c.field} />
                  </span>
                  <span className="t-muted mt-1 block">
                    <T t={c.note} />
                  </span>
                </span>
                <span className="break-words font-serif text-[clamp(2.2rem,5.4vw,5.75rem)] font-medium leading-[0.95] md:col-span-7">
                  {c.value}
                </span>
                <span className="inline-flex min-h-[44px] items-center gap-2 font-bold md:col-span-2 md:justify-end">
                  <T t={c.action} />
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-[1.15rem]">
          <T en="Prefer to call?" es="¿Prefieres llamar?" />{" "}
          <a href={site.phoneHref} className="link-underline inline-flex min-h-[44px] items-center font-bold">
            {site.phoneDisplay}
          </a>
        </p>
      </Label>

      {/* Two more ways in: a big host card and a small team card that overlaps its edge. */}
      <Label tone="milk" aria-labelledby="host-title">
        <div className="grid lg:grid-cols-12">
          <Reveal className="tone-bourbon relative p-6 pb-10 md:p-12 md:pb-16 lg:col-span-8">
            <p className="label-row">
              <T en="Form · Events" es="Formulario · Eventos" />
            </p>
            <h2 id="host-title" className="relative mt-6 max-w-[14ch] font-serif text-d1 font-medium">
              <T
                en={
                  <>
                    Host your event <span className="italic">with Kreore.</span>
                  </>
                }
                es={
                  <>
                    Organiza tu evento <span className="italic">con Kreore.</span>
                  </>
                }
              />
            </h2>
            <p className="relative mt-6 max-w-[40ch] text-[1.1rem]">
              <T
                en="Share the date, the place and who you want to bring together."
                es="Cuéntanos la fecha, el lugar y a quién quieres reunir."
              />
            </p>
            <Action href={site.hostForm} variant="solid" arrow className="relative mt-8">
              <T en="Open the host form" es="Abrir el formulario" />
            </Action>
          </Reveal>
          <Reveal
            i={1}
            className="tone-noir relative z-10 -mt-6 ml-6 p-6 md:p-10 lg:col-span-4 lg:-ml-24 lg:mt-40 lg:self-start"
          >
            <p className="label-row">
              <T en="Team · WhatsApp" es="Equipo · WhatsApp" />
            </p>
            <h2 className="mt-5 font-serif text-d3 font-medium italic">
              <T en="Work with us." es="Trabaja con Kreore." />
            </h2>
            <Action href={site.workWithUs} variant="solid-light" arrow className="mt-8">
              <T en="Write about working together" es="Escríbenos para trabajar juntos" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* MoCADA. CONFIRM with owner before launch: current, ongoing location, days and hours.
          The photo is the tight crop (mocada-crop.jpg) of her and the case, at medium size. */}
      <Label tone="pureza" aria-labelledby="mocada-title">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="w-[72%] max-w-[22rem] lg:col-span-4 lg:w-full lg:max-w-none">
            <Frame photo={photos.mocadaEntrance} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 28vw, 72vw" />
          </Reveal>
          <Reveal i={1} className="lg:col-span-7 lg:col-start-6">
            <h2 id="mocada-title" className="font-serif font-medium">
              <span className="block text-d4">
                <T en="Find Kreore at" es="Encuéntranos en" />
              </span>
              <span className="mt-1 block text-[clamp(4rem,9vw,8.5rem)] italic leading-[0.85] tracking-[-0.02em]">
                {site.mocada.name}.
              </span>
            </h2>
            <p className="mt-6 max-w-[40ch] text-[1.15rem]">
              <T
                en="Brooklyn. For current pop-up locations, check our Instagram."
                es="Brooklyn. Para saber dónde estaremos, mira nuestro Instagram."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Action href={site.instagram} variant="solid" arrow>
                <T en="See current locations" es="Ver ubicaciones" />
              </Action>
              <Action href={site.mocada.url} variant="text">
                <T en={`About ${site.mocada.name}`} es={`Sobre ${site.mocada.name}`} />
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
