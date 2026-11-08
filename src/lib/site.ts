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

export type NavItem = { href: string; label: string }

export const nav: NavItem[] = [
  { href: "/cafes", label: "Cafés" },
  { href: "/servicios", label: "Servicios" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/historia", label: "Historia" },
  { href: "/contacto", label: "Contacto" },
]

/** Routes whose first label is light (pureza or bourbon), so the transparent navbar uses noir ink. */
export const lightTopRoutes = ["/servicios", "/comunidad", "/contacto"]
