import Link from "next/link"
import { mailto, nav, site } from "@/lib/site"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="tone-noir relative">
      <div aria-hidden="true" className="rule pointer-events-none absolute inset-2 border sm:inset-4 md:inset-6" />
      <div className="wrap relative pb-12 pt-12 md:pb-16 md:pt-16">
        <p className="label-row rule flex justify-between gap-6 border-b pb-3">
          <span>Café de especialidad colombiano</span>
          <span>Hecho en Nueva York</span>
        </p>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="/" className="wordmark inline-block text-[clamp(3rem,9vw,7rem)] leading-none" aria-label="Kreore Café, inicio">
              {site.wordmark}
            </Link>
            <p className="mt-5 font-serif text-[2rem] italic leading-tight md:text-[2.4rem]">{site.motto}</p>
            <p lang="en" className="t-muted mt-1">
              I create because I prayed.
            </p>
          </div>

          <nav aria-label="Pie de página" className="lg:col-span-2">
            <p className="label-row mb-4">Páginas</p>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="inline-flex min-h-[40px] items-center hover:underline">
                  Inicio
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-[40px] items-center hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="label-row mb-4">Contacto</p>
            <ul className="space-y-1">
              <li>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-[40px] items-center hover:underline">
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailto} className="inline-flex min-h-[40px] items-center break-all hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-[40px] items-center hover:underline">
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.threads} target="_blank" rel="noreferrer" className="inline-flex min-h-[40px] items-center hover:underline">
                  Threads {site.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="t-muted mt-4 text-[0.95rem]">Respondemos en español o en inglés.</p>
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-3 border-t pt-5 text-[0.9rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="t-muted">
            © {year} {site.name}. Woman-owned, New York.
          </p>
          <a
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[40px] items-center font-bold underline underline-offset-4 hover:underline-offset-[6px]"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
