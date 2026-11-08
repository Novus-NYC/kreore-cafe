"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { lightTopRoutes, nav, site } from "@/lib/site"
import { useLang } from "@/lib/i18n"
import { copy } from "@/lib/copy"
import LangToggle from "./lang-toggle"

export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    toggleRef.current?.focus()
  }, [])

  // Mobile sheet: focus first link, Escape closes, Tab stays inside, body scroll locked.
  useEffect(() => {
    if (!open) return
    const sheet = sheetRef.current
    const focusables = () =>
      Array.from(sheet?.querySelectorAll<HTMLElement>("a[href], button") ?? [])
    focusables().find((el) => el.tagName === "A")?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [open, close])

  const lightTop = lightTopRoutes.includes(pathname)
  const solid = scrolled
  const ink = solid || lightTop ? "text-k-noir" : "text-k-pureza"
  const surface = solid ? "bg-k-pureza border-k-line" : "bg-transparent border-transparent"
  const cta =
    solid || lightTop
      ? "bg-k-noir text-k-pureza hover:bg-k-bean"
      : "bg-k-pureza text-k-noir hover:bg-k-bourbon"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-[250ms] ease-label ${surface} ${ink}`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-k-pureza focus:px-4 focus:py-2 focus:text-k-noir"
      >
        {t(copy.nav.skip)}
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="wordmark flex min-h-[44px] items-center text-[1.35rem] leading-none" aria-label={t(copy.nav.homeLabel)}>
          {site.wordmark}
        </Link>

        <nav aria-label={t(copy.nav.main)} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-[44px] items-center text-[0.98rem] font-medium underline-offset-[6px] hover:underline ${
                      active ? "underline decoration-1" : ""
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden lg:flex" />
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`hidden min-h-[44px] min-w-[8.75rem] items-center justify-center rounded-[2px] px-5 text-[0.95rem] font-bold transition-colors duration-200 sm:inline-flex ${cta}`}
          >
            {t(copy.nav.cta)}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex min-h-[44px] items-center gap-2 px-1 text-[0.95rem] font-bold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            {t(copy.nav.menu)}
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label={t(copy.nav.menu)}
          className="tone-noir fixed inset-0 z-[60] flex flex-col overflow-y-auto lg:hidden"
        >
          <div aria-hidden="true" className="rule pointer-events-none absolute inset-4 border" />
          <div className="wrap relative flex h-16 items-center justify-between">
            <span className="wordmark text-[1.35rem] leading-none">{site.wordmark}</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex min-h-[44px] items-center gap-2 px-1 text-[0.95rem] font-bold"
            >
              {t(copy.nav.close)} <span aria-hidden="true" className="text-xl leading-none">×</span>
            </button>
          </div>
          <div className="wrap relative flex flex-1 flex-col pb-10 pt-6">
            <div className="label-row rule flex items-center justify-between border-b pb-1">
              <span>{t(copy.nav.origin)}</span>
              <LangToggle className="-mr-3 text-k-pureza" />
            </div>
            <nav aria-label={t(copy.nav.menu)} className="mt-6">
              <ul>
                <li>
                  <Link href="/" onClick={() => setOpen(false)} className="rule block border-b py-3 font-serif text-[2.6rem] italic leading-tight">
                    {t(copy.nav.home)}
                  </Link>
                </li>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="rule block border-b py-3 font-serif text-[2.6rem] leading-tight"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex min-h-[52px] items-center justify-center rounded-[2px] bg-k-pureza px-6 font-bold text-k-noir"
            >
              {t(copy.nav.ctaLong)}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
