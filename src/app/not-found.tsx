import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <Label tone="milk" first pad="tight">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="label-row">
            <T en="This bag has no label" es="Esta bolsa no tiene etiqueta" />
          </p>
          <h1 className="mt-5 max-w-[14ch] font-serif text-d1 font-medium italic">
            <T en="This page does not exist." es="Esta página no existe." />
          </h1>
          <p className="t-muted mt-5 max-w-[40ch]">
            <T
              en="The link may be old. The coffees, the services and the way to reach us are one tap away."
              es="Puede que el enlace sea antiguo. Los cafés, los servicios y la forma de escribirnos están a un toque."
            />
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Action href="/" variant="solid" arrow>
              <T en="Back to home" es="Volver al inicio" />
            </Action>
            <Action href="/coffees" variant="text">
              <T en="See the coffees" es="Ver los cafés" />
            </Action>
            <Action href={site.whatsapp} variant="text">
              <T en="Message us" es="Escríbenos" />
            </Action>
          </div>
        </div>
        <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
          <div className="bleed-right">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/5]">
              <Image
                src={photos.beans.src}
                alt={photos.beans.alt}
                fill
                preload
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="photo-grade object-cover"
                style={{ objectPosition: "50% 62%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Label>
  )
}
