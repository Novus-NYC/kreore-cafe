import type { Metadata } from "next"
import { Label } from "@/lib/components/label"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <Label
      tone="noir"
      first
      fields={["Error · 404", <T key="n" en="No label" es="Sin etiqueta" />]}
      innerClassName="min-h-[70vh] flex flex-col justify-center"
    >
      <p className="label-row">
        <T en="This bag has no label" es="Esta bolsa no tiene etiqueta" />
      </p>
      <h1 className="mt-6 max-w-[14ch] font-serif text-d1 font-medium italic">
        <T en="This page does not exist." es="Esta página no existe." />
      </h1>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Action href="/" variant="solid-light" arrow>
          <T en="Back to home" es="Volver al inicio" />
        </Action>
        <Action href="/coffees" variant="text">
          <T en="See the coffees" es="Ver los cafés" />
        </Action>
      </div>
    </Label>
  )
}
