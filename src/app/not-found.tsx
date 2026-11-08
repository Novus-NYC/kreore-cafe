import type { Metadata } from "next"
import { Label } from "@/lib/components/label"
import { Bilingual } from "@/lib/components/bilingual"
import { Action } from "@/lib/components/action"

export const metadata: Metadata = {
  title: "Página no encontrada",
}

export default function NotFound() {
  return (
    <Label tone="noir" first fields={["Error · 404", "Sin etiqueta"]}>
      <Bilingual level={1} size="d1" italic es="Esta página no existe." en="This page does not exist." />
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Action href="/" variant="solid-light" arrow>
          Volver al inicio
        </Action>
        <Action href="/cafes" variant="text">
          Ver los cafés
        </Action>
      </div>
    </Label>
  )
}
