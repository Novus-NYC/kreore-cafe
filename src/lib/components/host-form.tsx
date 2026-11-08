"use client"

import { useRef, useState, type FormEvent, type ReactNode } from "react"
import { useLang, type Bi } from "@/lib/i18n"
import { mailto, site } from "@/lib/site"

/*
 * The event enquiry form, on the site itself. It posts to Kreore's existing Google Form
 * ("KREORE Coffee Private Events"), so every answer still lands in the owner's responses sheet.
 * The Google Form has the five event questions below but no contact fields, so name, email,
 * phone and date are added here and written at the top of the "vision" answer.
 *
 * Option values are the Google Form's exact strings. Indoor / Outdoor go in through the form's
 * "Other" choice because its own options for that question are "Yes / No / Not Sure".
 * Google returns no CORS headers, so the post is `no-cors`: a network failure shows the error
 * state with email and WhatsApp as the fallback.
 */

const FORM_ID = "1FAIpQLSdCKJnwvmv2hjYUzQWcHtfWV40f4sz2slgeIMDFs7bWPZ8ZGA"
const ENDPOINT = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`
const ENTRY = {
  services: "entry.1008427622",
  place: "entry.2034711100",
  budget: "entry.873698190",
  vision: "entry.780873493",
  heard: "entry.591418848",
}

type Opt = { value: string; label: Bi }

const services: Opt[] = [
  { value: "Coffee Cart", label: { en: "Coffee cart", es: "Carrito de café" } },
  { value: "Espresso Bar", label: { en: "Espresso bar", es: "Barra de espresso" } },
  { value: "Kreore Drip Coffee", label: { en: "Kreore drip coffee", es: "Café de filtro Kreore" } },
  { value: "Kreore Cold Brew", label: { en: "Kreore cold brew", es: "Cold brew Kreore" } },
  { value: "Signature Drinks", label: { en: "Signature drinks", es: "Bebidas de autor" } },
  { value: "Colombian Coffee Tasting", label: { en: "Colombian coffee tasting", es: "Cata de café colombiano" } },
  { value: "KREORE Bottled Coffee Beverages", label: { en: "Bottled coffee drinks", es: "Bebidas de café embotelladas" } },
  { value: "Coffee Bags as Guest Favors", label: { en: "Coffee bags as guest favors", es: "Bolsas de café como recuerdo" } },
  { value: "Custom Branding", label: { en: "Custom branding", es: "Marca personalizada" } },
  { value: "Matcha Bar", label: { en: "Matcha bar", es: "Barra de matcha" } },
  { value: "Wellness Juices", label: { en: "Wellness juices", es: "Jugos de bienestar" } },
]

const places: Opt[] = [
  { value: "Indoor", label: { en: "Indoor", es: "Interior" } },
  { value: "Outdoor", label: { en: "Outdoor", es: "Exterior" } },
  { value: "Not Sure", label: { en: "Not sure yet", es: "Aún no sé" } },
]

const budgets: Opt[] = [
  { value: "Under $500", label: { en: "Under $500", es: "Menos de $500" } },
  { value: "$500 - 1,000", label: { en: "$500 to $1,000", es: "$500 a $1,000" } },
  { value: "$1,000- $2,000", label: { en: "$1,000 to $2,000", es: "$1,000 a $2,000" } },
  { value: "$2,000-$5,000", label: { en: "$2,000 to $5,000", es: "$2,000 a $5,000" } },
  { value: "$5,000+", label: { en: "$5,000 or more", es: "$5,000 o más" } },
]

const heard: Opt[] = [
  { value: "Instagram", label: { en: "Instagram", es: "Instagram" } },
  { value: "Google", label: { en: "Google", es: "Google" } },
  { value: "Facebook", label: { en: "Facebook", es: "Facebook" } },
  { value: "Friend", label: { en: "A friend", es: "Un amigo" } },
  { value: "Previous Client", label: { en: "I've worked with Kreore before", es: "Ya trabajé con Kreore" } },
]

type Values = {
  name: string
  email: string
  phone: string
  date: string
  services: string[]
  place: string
  budget: string
  vision: string
  heard: string
}
type Field = keyof Values

const empty: Values = { name: "", email: "", phone: "", date: "", services: [], place: "", budget: "", vision: "", heard: "" }

const msg = {
  name: { en: "Add your name so we know who to reply to.", es: "Escribe tu nombre para saber a quién responder." },
  email: { en: "Add an email we can reply to, like name@example.com.", es: "Escribe un correo para responderte, como nombre@ejemplo.com." },
  services: { en: "Pick at least one service.", es: "Elige al menos un servicio." },
  place: { en: "Pick one. Not sure yet is fine.", es: "Elige una. Aún no sé también vale." },
  budget: { en: "Pick the range closest to your budget.", es: "Elige el rango más cercano a tu presupuesto." },
  vision: { en: "Tell us a little about the event.", es: "Cuéntanos un poco sobre el evento." },
  heard: { en: "Pick one.", es: "Elige una." },
} satisfies Partial<Record<Field, Bi>>

function validate(v: Values): Partial<Record<Field, Bi>> {
  const e: Partial<Record<Field, Bi>> = {}
  if (!v.name.trim()) e.name = msg.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = msg.email
  if (!v.services.length) e.services = msg.services
  if (!v.place) e.place = msg.place
  if (!v.budget) e.budget = msg.budget
  if (!v.vision.trim()) e.vision = msg.vision
  if (!v.heard) e.heard = msg.heard
  return e
}

const order: Field[] = ["name", "email", "services", "place", "budget", "vision", "heard"]

export function HostForm() {
  const { t, lang } = useLang()
  const [v, setV] = useState<Values>(empty)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const errors = validate(v)
  const show = (f: Field) => (touched[f] ? errors[f] : undefined)
  const set = <K extends Field>(f: K, val: Values[K]) => setV((p) => ({ ...p, [f]: val }))
  const touch = (f: Field) => setTouched((p) => ({ ...p, [f]: true }))
  const toggleService = (s: string) => {
    set("services", v.services.includes(s) ? v.services.filter((x) => x !== s) : [...v.services, s])
    touch("services")
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched(Object.fromEntries(order.map((f) => [f, true])))
    const first = order.find((f) => errors[f])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus()
      return
    }
    setStatus("sending")
    const body = new URLSearchParams()
    v.services.forEach((s) => body.append(ENTRY.services, s))
    if (v.place === "Not Sure") body.append(ENTRY.place, "Not Sure")
    else {
      body.append(ENTRY.place, "__other_option__")
      body.append(`${ENTRY.place}.other_option_response`, v.place)
    }
    body.append(ENTRY.budget, v.budget)
    const head = [
      `Name: ${v.name.trim()}`,
      `Email: ${v.email.trim()}`,
      v.phone.trim() && `Phone: ${v.phone.trim()}`,
      v.date && `Event date: ${v.date}`,
      `Sent from the website (${lang === "es" ? "Spanish" : "English"})`,
    ].filter(Boolean)
    body.append(ENTRY.vision, `${head.join("\n")}\n\n${v.vision.trim()}`)
    body.append(ENTRY.heard, v.heard)
    body.append("pageHistory", "0,1,2")
    try {
      await fetch(ENDPOINT, { method: "POST", mode: "no-cors", body })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-4">
        <p className="label-row">{t({ en: "Sent", es: "Enviado" })}</p>
        <p className="mt-4 max-w-[22ch] font-serif text-d3 font-medium italic">
          {t({ en: `Thank you, ${v.name.trim().split(" ")[0]}.`, es: `Gracias, ${v.name.trim().split(" ")[0]}.` })}
        </p>
        <p className="mt-4 max-w-[44ch] text-[1.1rem]">
          {t({
            en: `We will reply to ${v.email.trim()}. For anything urgent, write to us on WhatsApp.`,
            es: `Te responderemos a ${v.email.trim()}. Si es urgente, escríbenos por WhatsApp.`,
          })}
        </p>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="link-underline mt-4 inline-flex min-h-[48px] items-center font-bold">
          {t({ en: "Open WhatsApp", es: "Abrir WhatsApp" })}
        </a>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-8">
      <p className="t-muted text-[0.95rem]">
        {t({ en: "Fields marked * are required.", es: "Los campos con * son obligatorios." })}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id="hf-name" field="name" label={t({ en: "Name *", es: "Nombre *" })} autoComplete="name" value={v.name} onChange={(x) => set("name", x)} onBlur={() => touch("name")} error={show("name") && t(show("name")!)} />
        <TextField id="hf-email" field="email" type="email" label={t({ en: "Email *", es: "Correo *" })} autoComplete="email" value={v.email} onChange={(x) => set("email", x)} onBlur={() => touch("email")} error={show("email") && t(show("email")!)} />
        <TextField id="hf-phone" field="phone" type="tel" label={t({ en: "Phone (optional)", es: "Teléfono (opcional)" })} autoComplete="tel" value={v.phone} onChange={(x) => set("phone", x)} />
        <TextField id="hf-date" field="date" type="date" label={t({ en: "Event date (optional)", es: "Fecha del evento (opcional)" })} value={v.date} onChange={(x) => set("date", x)} />
      </div>

      <Group field="services" legend={t({ en: "Which services are you interested in? *", es: "¿Qué servicios te interesan? *" })} hint={t({ en: "Pick as many as you like.", es: "Elige todos los que quieras." })} error={show("services") && t(show("services")!)}>
        {services.map((o, i) => (
          <Chip key={o.value} type="checkbox" name="services" first={i === 0} field="services" checked={v.services.includes(o.value)} onChange={() => toggleService(o.value)}>
            {t(o.label)}
          </Chip>
        ))}
      </Group>

      <div className="grid gap-8 lg:grid-cols-2">
        <Group field="place" legend={t({ en: "Indoor or outdoor? *", es: "¿Interior o exterior? *" })} error={show("place") && t(show("place")!)}>
          {places.map((o, i) => (
            <Chip key={o.value} type="radio" name="place" first={i === 0} field="place" checked={v.place === o.value} onChange={() => (set("place", o.value), touch("place"))}>
              {t(o.label)}
            </Chip>
          ))}
        </Group>
        <Group field="heard" legend={t({ en: "How did you hear about Kreore? *", es: "¿Cómo conociste Kreore? *" })} error={show("heard") && t(show("heard")!)}>
          {heard.map((o, i) => (
            <Chip key={o.value} type="radio" name="heard" first={i === 0} field="heard" checked={v.heard === o.value} onChange={() => (set("heard", o.value), touch("heard"))}>
              {t(o.label)}
            </Chip>
          ))}
        </Group>
      </div>

      <Group field="budget" legend={t({ en: "Estimated budget *", es: "Presupuesto estimado *" })} error={show("budget") && t(show("budget")!)}>
        {budgets.map((o, i) => (
          <Chip key={o.value} type="radio" name="budget" first={i === 0} field="budget" checked={v.budget === o.value} onChange={() => (set("budget", o.value), touch("budget"))}>
            {t(o.label)}
          </Chip>
        ))}
      </Group>

      <div>
        <label htmlFor="hf-vision" className="block font-bold">
          {t({ en: "Tell us about your vision for the event *", es: "Cuéntanos cómo imaginas tu evento *" })}
        </label>
        <p id="hf-vision-hint" className="t-muted mt-1 text-[0.95rem]">
          {t({ en: "Where it is, how many guests, and the feel you want.", es: "Dónde es, cuántos invitados y el ambiente que quieres." })}
        </p>
        <textarea
          id="hf-vision"
          data-field="vision"
          rows={5}
          value={v.vision}
          onChange={(e) => set("vision", e.target.value)}
          onBlur={() => touch("vision")}
          aria-invalid={!!show("vision")}
          aria-describedby={`hf-vision-hint${show("vision") ? " hf-vision-err" : ""}`}
          className="mt-3 block w-full rounded-[2px] border border-k-noir/40 bg-k-milk px-4 py-3 text-[1.0625rem] text-k-noir focus-visible:border-k-noir"
        />
        {show("vision") ? <Err id="hf-vision-err">{t(show("vision")!)}</Err> : null}
      </div>

      <div className="flex flex-col gap-4 border-t border-k-noir/25 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[2px] bg-k-noir px-7 text-[1rem] font-bold tracking-[0.01em] text-k-pureza transition-colors duration-200 hover:bg-k-bean disabled:opacity-70"
        >
          {status === "sending" ? t({ en: "Sending…", es: "Enviando…" }) : t({ en: "Send the enquiry", es: "Enviar la solicitud" })}
          <span aria-hidden="true" className="font-normal">
            →
          </span>
        </button>
        <a href={site.hostForm} target="_blank" rel="noreferrer" className="link-underline inline-flex min-h-[48px] items-center font-bold">
          {t({ en: "Or use our Google Form", es: "O usa nuestro formulario de Google" })}
        </a>
      </div>
      {status === "error" ? (
        <p role="alert" className="font-bold">
          {t({
            en: "That didn't go through. Please try again, or write to us at ",
            es: "No se pudo enviar. Inténtalo de nuevo o escríbenos a ",
          })}
          <a href={mailto} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}

function Err({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 font-bold text-k-noir">
      <span aria-hidden="true">! </span>
      {children}
    </p>
  )
}

function TextField({
  id,
  field,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  autoComplete,
}: {
  id: string
  field: Field
  label: string
  value: string
  onChange: (v: string) => void
  onBlur?: () => void
  error?: string | false
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-bold">
        {label}
      </label>
      <input
        id={id}
        data-field={field}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className="mt-2 block min-h-[48px] w-full rounded-[2px] border border-k-noir/40 bg-k-milk px-4 text-[1.0625rem] text-k-noir focus-visible:border-k-noir"
      />
      {error ? <Err id={`${id}-err`}>{error}</Err> : null}
    </div>
  )
}

function Group({ field, legend, hint, error, children }: { field: Field; legend: string; hint?: string; error?: string | false; children: ReactNode }) {
  return (
    <fieldset aria-describedby={error ? `hf-${field}-err` : undefined}>
      <legend className="font-bold">{legend}</legend>
      {hint ? <p className="t-muted mt-1 text-[0.95rem]">{hint}</p> : null}
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
      {error ? <Err id={`hf-${field}-err`}>{error}</Err> : null}
    </fieldset>
  )
}

/** A real checkbox or radio, drawn as a sharp tag that fills with noir when chosen. */
function Chip({
  type,
  name,
  field,
  first,
  checked,
  onChange,
  children,
}: {
  type: "checkbox" | "radio"
  name: string
  field: Field
  first: boolean
  checked: boolean
  onChange: () => void
  children: ReactNode
}) {
  return (
    <label className="relative inline-flex">
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        {...(first ? { "data-field": field } : {})}
        className="peer absolute inset-0 cursor-pointer opacity-0"
      />
      <span className="inline-flex min-h-[44px] items-center gap-2 rounded-[2px] border border-k-noir/45 bg-k-milk/60 px-4 text-[1rem] transition-colors duration-200 peer-checked:border-k-noir peer-checked:bg-k-noir peer-checked:text-k-pureza peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-k-noir">
        <span aria-hidden="true" className="text-[0.8em]">
          {checked ? "✓" : "+"}
        </span>
        {children}
      </span>
    </label>
  )
}
