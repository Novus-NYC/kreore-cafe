import Link from "next/link"
import { mailto, nav, site } from "@/lib/site"
import { Only, T } from "@/lib/i18n"
import { copy } from "@/lib/copy"

const linkCls =
  "inline-flex min-h-[44px] items-center underline-offset-[6px] decoration-1 transition-colors hover:underline focus-visible:underline"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="tone-noir relative overflow-hidden">
      <div className="wrap relative pb-12 pt-12 md:pb-16 md:pt-16">
        <p className="label-row flex justify-between gap-6">
          <span className="whitespace-nowrap">
            <T en="Colombian specialty coffee" es="Café de especialidad colombiano" />
          </span>
          <span className="hidden whitespace-nowrap sm:inline">
            <T en="Made in New York" es="Hecho en Nueva York" />
          </span>
        </p>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="wordmark inline-block text-[clamp(3.4rem,10vw,8rem)] leading-[0.9] transition-colors hover:text-k-bourbon"
            >
              {site.wordmark}
              <span className="sr-only">
                {" "}
                <T t={copy.nav.home} />
              </span>
            </Link>
            <p lang="es" className="mt-5 font-serif text-[2rem] italic leading-tight md:text-[2.4rem]">
              {site.motto}
            </p>
            <Only lang="en">
              <p className="t-muted mt-1">I create because I prayed.</p>
            </Only>
          </div>

          <nav aria-labelledby="footer-pages" className="lg:col-span-2">
            <p id="footer-pages" className="label-row mb-3">
              <T en="Pages" es="Páginas" />
            </p>
            <ul>
              <li>
                <Link href="/" className={linkCls}>
                  <T t={copy.nav.home} />
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls}>
                    <T t={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="label-row mb-3">
              <T en="Contact" es="Contacto" />
            </p>
            <ul>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className={linkCls}>
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailto} className={`${linkCls} break-all`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className={linkCls}>
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.threads} target="_blank" rel="noreferrer" className={linkCls}>
                  Threads {site.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="t-muted mt-4">
              <T t={copy.common.replyBoth} />
            </p>
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-3 border-t pt-5 text-[1rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="t-muted">
            © {year} {site.name}. <T en="Woman-owned, New York." es="Empresa de una mujer, Nueva York." />
          </p>
          <a
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center font-bold underline underline-offset-4 hover:underline-offset-[6px]"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
