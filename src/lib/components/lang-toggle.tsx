"use client"

import { useLang } from "@/lib/i18n"

/**
 * One EN | ES switch: the whole control is a single button, so a press anywhere on it flips
 * the language (no aiming for the other label). The current language is underlined.
 */
export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang()
  const next = lang === "en" ? "es" : "en"
  const label = lang === "en" ? "Language: English. Cambiar a español" : "Idioma: español. Switch to English"
  const part = (on: boolean) =>
    `transition-opacity duration-200 ${on ? "underline decoration-[1.5px] underline-offset-[7px]" : "opacity-60 group-hover:opacity-100"}`
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className={`group inline-flex min-h-[44px] min-w-[72px] items-center justify-center gap-2.5 px-2 text-[0.78rem] font-bold tracking-[0.16em] ${className}`}
    >
      <span lang="en" className={part(lang === "en")}>
        EN
      </span>
      <span aria-hidden="true" className="h-3.5 w-px bg-current opacity-40" />
      <span lang="es" className={part(lang === "es")}>
        ES
      </span>
    </button>
  )
}
