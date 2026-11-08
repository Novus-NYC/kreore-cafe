import type { Metadata } from "next"
import { Label, LabelRow } from "@/lib/components/label"
import { Bilingual } from "@/lib/components/bilingual"
import { Frame } from "@/lib/components/frame"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { photos } from "@/lib/images"
import { mailto, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Write to Kreore Café on WhatsApp (+1 718-600-1155), by email at kreorecafe@gmail.com or on Instagram @kreorecafe. We reply in Spanish or English.",
  alternates: { canonical: "/contacto" },
}

type Row = { field: string; fieldEn: string; value: string; href: string; action: string; external: boolean }

const rows: Row[] = [
  {
    field: "WhatsApp",
    fieldEn: "Fastest for events and orders",
    value: site.phoneDisplay,
    href: site.whatsapp,
    action: "Open WhatsApp",
    external: true,
  },
  {
    field: "Correo",
    fieldEn: "Email",
    value: site.email,
    href: mailto,
    action: "Send an email",
    external: false,
  },
  {
    field: "Instagram",
    fieldEn: "Pop-ups and gatherings",
    value: site.instagramHandle,
    href: site.instagram,
    action: "Open Instagram",
    external: true,
  },
]

export default function ContactoPage() {
  return (
    <>
      <Label tone="pureza" first pad="tight" fields={["Contacto", "Español · English"]}>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Bilingual level={1} size="motto" italic es="Escríbenos." en="Write to us. We reply in Spanish or English." enClassName="max-w-none" />
          </div>
          <p className="t-muted lg:col-span-4 lg:pb-3">
            Respondemos en español o en inglés.{" "}
            <span lang="en">Tell us about your event, office or gathering and we will take it from there.</span>
          </p>
        </div>
      </Label>

      {/* Three large action rows on noir. */}
      <Label tone="noir" fields={["Canales", "Channels"]}>
        <ul>
          {rows.map((r, i) => (
            <Reveal as="li" i={i} key={r.field}>
              <a
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="rule group grid gap-3 border-t py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="md:col-span-3">
                  <span className="label-row block">{r.field}</span>
                  <span lang="en" className="t-muted mt-1 block text-[0.95rem]">
                    {r.fieldEn}
                  </span>
                </span>
                <span className="break-words font-serif text-[clamp(1.9rem,4.6vw,4.5rem)] font-medium leading-none transition-transform duration-300 ease-label group-hover:translate-x-2 md:col-span-7">
                  {r.value}
                </span>
                <span className="inline-flex items-center gap-2 font-bold md:col-span-2 md:justify-end">
                  {r.action} <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
        <div className="rule border-t" />
        <p className="t-muted mt-6">
          ¿Prefieres llamar?{" "}
          <a href={site.phoneHref} className="link-underline text-k-pureza">
            {site.phoneDisplay}
          </a>
        </p>
      </Label>

      {/* Two secondary paths: host form and work with us. */}
      <Label tone="bourbon" fields={["Más formas", "More ways"]}>
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="border border-k-noir p-6 md:p-10 lg:col-span-7">
            <LabelRow left="Formulario" right="Eventos" />
            <Bilingual level={2} size="d2" className="mt-8" es="Organiza tu evento con Kreore." en="Host your event with Kreore." />
            <Action href={site.hostForm} variant="solid" arrow className="mt-8">
              Open the host form
            </Action>
          </Reveal>
          <Reveal i={1} className="tone-noir p-6 md:p-10 lg:col-span-5 lg:mt-24">
            <LabelRow left="Equipo" right="WhatsApp" />
            <Bilingual level={2} size="d3" className="mt-8" es="Trabaja con Kreore." en="Work with us." />
            <Action href={site.workWithUs} variant="solid-light" arrow className="mt-8">
              Write about working together
            </Action>
          </Reveal>
        </div>
      </Label>

      {/* MoCADA. CONFIRM with owner before launch: current, ongoing location, days and hours. */}
      <Label tone="gesha" fields={["Encuéntranos", "Brooklyn"]}>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Frame
              photo={photos.mocadaEntrance}
              ratio="aspect-[5/4]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              objectPosition="50% 88%"
              note="Visita"
            />
          </Reveal>
          <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
            <Bilingual size="d2" es={<>Encuéntranos en <span className="italic">{site.mocada.name}.</span></>} en={`Find Kreore at ${site.mocada.name}.`} />
            <p lang="en" className="mt-4">
              For current pop-up locations, check our Instagram.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                See current locations
              </Action>
              <Action href={site.mocada.url} variant="text">
                About {site.mocada.name}
              </Action>
            </div>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
