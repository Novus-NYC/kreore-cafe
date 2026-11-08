// Shared interface strings in English (default) and Spanish.
import type { Bi } from "./i18n"

const b = (en: string, es: string): Bi => ({ en, es })

export const copy = {
  nav: {
    home: b("Home", "Inicio"),
    homeLabel: b("Kreore Café, home", "Kreore Café, inicio"),
    main: b("Main", "Principal"),
    menu: b("Menu", "Menú"),
    close: b("Close", "Cerrar"),
    skip: b("Skip to content", "Saltar al contenido"),
    cta: b("Message us", "Escríbenos"),
    ctaLong: b("Message us on WhatsApp", "Escríbenos por WhatsApp"),
    origin: b("Origin · Colombia", "Origen · Colombia"),
    destination: b("Destination · New York", "Destino · Nueva York"),
  },
  motto: {
    gloss: b("I create because I prayed.", "Creo porque oré."),
  },
  common: {
    replyBoth: b("We reply in English or Spanish.", "Respondemos en español o en inglés."),
    whatsapp: b("Message us on WhatsApp", "Escríbenos por WhatsApp"),
    hostForm: b("Host your event with Kreore", "Organiza tu evento con Kreore"),
    photo: b("Photo", "Foto"),
  },
}
