"use client"

import { useLang, type Lang } from "@/lib/i18n"
import { copy } from "@/lib/copy"

const OPTIONS: { id: Lang; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "es", label: "ES", name: "Español" },
]

/** Compact EN / ES switch. Fixed-width buttons so toggling never shifts the navbar. */
export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t(copy.nav.language)} className={`flex items-center ${className}`}>
      {OPTIONS.map((o, i) => (
        <span key={o.id} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="h-3.5 w-px bg-current opacity-40" />}
          <button
            type="button"
            lang={o.id}
            aria-pressed={lang === o.id}
            aria-label={o.name}
            onClick={() => setLang(o.id)}
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[0.78rem] font-bold tracking-[0.16em] transition-opacity duration-200 ${
              lang === o.id ? "underline decoration-[1.5px] underline-offset-[7px]" : "opacity-70 hover:opacity-100"
            }`}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  )
}
