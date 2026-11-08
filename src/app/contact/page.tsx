import type { Metadata } from "next"
import Image from "next/image"
import { Label, LabelRow } from "@/lib/components/label"
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
    hover: "hover:bg-k-pureza focus-visible:bg-k-pureza",
  },
  {
    field: { en: "Instagram", es: "Instagram" },
    note: { en: "Pop-ups and gatherings", es: "Pop-ups y encuentros" },
    value: site.instagramHandle,
    href: site.instagram,
    action: { en: "Open Instagram", es: "Abrir Instagram" },
    external: true,
    hover: "hover:bg-k-gesha focus-visible:bg-k-gesha",
  },
]

export default function ContactPage() {
  return (
    <>
      <Label
        tone="pureza"
        first
        pad="tight"
        fields={[<T key="c" en="Contact" es="Contacto" />, "English · Español"]}
      >
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="Write to us." es="Escríbenos." />
            </h1>
          </div>
          <p className="max-w-[36ch] text-[1.15rem] leading-snug lg:col-span-4 lg:pb-4">
            <T t={copy.common.replyBoth} />{" "}
            <T
              en="Tell us about your event, office or gathering and we will take it from there."
              es="Cuéntanos sobre tu evento, tu oficina o tu encuentro y nos encargamos del resto."
            />
          </p>
        </div>
      </Label>

      {/* Channels on noir: each row is a tappable label that fills with a varietal color on hover. */}
      <Label tone="noir" pad="tight" fields={[<T key="c" en="Channels" es="Canales" />, <T key="t" en="Tap to open" es="Toca para abrir" />]}>
        <ul className="border-b border-k-gesha">
          {channels.map((c, i) => (
            <Reveal as="li" i={i} key={c.field.en}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`group relative -mx-5 grid gap-3 border-t border-k-gesha px-5 py-8 text-k-pureza transition-colors duration-300 ease-label hover:text-k-noir focus-visible:text-k-noir focus-visible:outline-none md:-mx-6 md:grid-cols-12 md:items-end md:gap-6 md:px-6 md:py-12 ${c.hover}`}
              >
                <span className="md:col-span-3">
                  <span className="block font-sans text-[0.85rem] font-bold uppercase tracking-[0.18em]">
                    <T t={c.field} />
                  </span>
                  <span className="mt-1 block text-[1rem]">
                    <T t={c.note} />
                  </span>
                </span>
                <span className="break-words font-serif text-[clamp(2rem,5.2vw,5.6rem)] font-medium leading-[0.95] md:col-span-7">
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
        <p className="mt-8 text-[1.15rem]">
          <T en="Prefer to call?" es="¿Prefieres llamar?" />{" "}
          <a href={site.phoneHref} className="link-underline inline-flex min-h-[44px] items-center font-bold text-k-pureza">
            {site.phoneDisplay}
          </a>
        </p>
      </Label>

      {/* Two more ways in: a big host card and a small team card that overlaps its edge. */}
      <Label tone="pureza" fields={[<T key="m" en="More ways" es="Más formas" />, <T key="f" en="Form · WhatsApp" es="Formulario · WhatsApp" />]}>
        <div className="grid lg:grid-cols-12">
          <Reveal className="tone-bourbon relative p-6 pb-10 md:p-12 md:pb-16 lg:col-span-8">
            <LabelRow left={<T en="Form" es="Formulario" />} right={<T en="Events" es="Eventos" />} className="relative" />
            <h2 className="relative mt-10 max-w-[14ch] font-serif text-d1 font-medium">
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
            className="tone-noir relative z-10 -mt-6 ml-6 p-6 md:p-10 lg:col-span-4 lg:-ml-24 lg:mt-48 lg:self-start"
          >
            <LabelRow left={<T en="Team" es="Equipo" />} right="WhatsApp" />
            <h2 className="mt-8 font-serif text-d3 font-medium italic">
              <T en="Work with us." es="Trabaja con Kreore." />
            </h2>
            <Action href={site.workWithUs} variant="solid-light" arrow className="mt-8">
              <T en="Write about working together" es="Escríbenos para trabajar juntos" />
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* MoCADA. CONFIRM with owner before launch: current, ongoing location, days and hours.
          The 5:4 crop at 50% 92% excludes the Spanish caption baked into the photo. */}
      <Label tone="gesha" fields={[<T key="f" en="Find us" es="Encuéntranos" />, "Brooklyn"]}>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <div className="photo-zoom relative aspect-[4/3] overflow-hidden">
              <Image
                src={photos.mocadaEntrance.src}
                alt={photos.mocadaEntrance.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="photo-grade object-cover"
                style={{ objectPosition: "50% 90%" }}
              />
            </div>
          </Reveal>
          <Reveal i={1} className="lg:col-span-6 lg:row-start-1">
            <h2 className="font-serif font-medium">
              <span className="block text-d4">
                <T en="Find Kreore at" es="Encuéntranos en" />
              </span>
              <span className="block text-d1 italic">{site.mocada.name}.</span>
            </h2>
            <p className="mt-4 max-w-[40ch]">
              <T
                en="For current pop-up locations, check our Instagram."
                es="Para saber dónde estaremos, mira nuestro Instagram."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
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
