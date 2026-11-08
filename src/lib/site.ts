export const site = {
  name: "Kreore Café",
  wordmark: "KREORE",
  motto: "Creo porque oré.",
  tagline:
    "Born between Colombia and New York City. Curating exceptional coffee, wellness and lifestyle experiences.",
  founder: "Viviana Durán",
  email: "kreorecafe@gmail.com",
  phoneDisplay: "+1 718-600-1155",
  phoneHref: "tel:+17186001155",
  whatsapp: "https://wa.me/17186001155",
  whatsappCatalog: "https://wa.me/c/17186001155",
  workWithUs: "https://wa.me/message/FO7BYIXPRHETJ1",
  // The on-site event form (contact page). The Google Form stays as its secondary link.
  hostPage: "/contact#host",
  hostForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSdCKJnwvmv2hjYUzQWcHtfWV40f4sz2slgeIMDFs7bWPZ8ZGA/viewform",
  instagram: "https://www.instagram.com/kreorecafe/",
  instagramHandle: "@kreorecafe",
  threads: "https://www.threads.com/@kreorecafe",
  founderInstagram: "https://www.instagram.com/vivianaduran__/",
  // CONFIRM with owner before launch: is MoCADA a current, ongoing location?
  mocada: { name: "MoCADA", url: "https://mocada.org/" },
  // CONFIRM production domain with owner. Used for absolute Open Graph URLs.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kreore-cafe.vercel.app",
} as const

export const mailto = `mailto:${site.email}`

export type NavItem = { href: string; label: { en: string; es: string } }

export const nav: NavItem[] = [
  { href: "/coffees", label: { en: "Coffees", es: "Cafés" } },
  { href: "/services", label: { en: "Services", es: "Servicios" } },
  { href: "/community", label: { en: "Community", es: "Comunidad" } },
  { href: "/story", label: { en: "Story", es: "Historia" } },
  { href: "/contact", label: { en: "Contact", es: "Contacto" } },
]
