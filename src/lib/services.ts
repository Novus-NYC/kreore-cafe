// Four services as listed on the owner's Merlin site. Describe what each is.
// Never add capacities, clients or prices here.
export type Service = {
  slug: string
  es: string
  en: string
  lineEs: string
  lineEn: string
}

export const services: Service[] = [
  {
    slug: "office",
    es: "Oficinas",
    en: "Office coffee supply",
    lineEs: "Café colombiano de especialidad para el día a día de tu equipo.",
    lineEn: "Colombian specialty coffee supplied for your team's workday.",
  },
  {
    slug: "catering",
    es: "Catering",
    en: "Catering",
    lineEs: "Servicio de café para tus reuniones, celebraciones y encuentros.",
    lineEn: "Coffee service for your meetings, celebrations and gatherings.",
  },
  {
    slug: "events",
    es: "Eventos",
    en: "Event hosting",
    lineEs: "Kreore organiza tu evento con el café en el centro.",
    lineEn: "Kreore hosts your event, with coffee at its center.",
  },
  {
    slug: "pop-ups",
    es: "Pop-ups",
    en: "Pop-up experiences",
    lineEs: "Experiencias de café que aparecen por la ciudad.",
    lineEn: "Coffee experiences that pop up around the city.",
  },
]
