"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"

// English is the default and primary language. Spanish lines are the client's own words where
// they exist in the source; Spanish written for this site is flagged in DESIGN.md for her review.
export type Lang = "en" | "es"
export type Bi = { en: string; es: string }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: Bi) => string }

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (s) => s.en })

const KEY = "kreore-lang"

export function LangProvider({ children }: { children: ReactNode }) {
  // The server always renders English; a stored choice is applied after mount (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(KEY)
    } catch {
      stored = null
    }
    if (stored === "es" || stored === "en") setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(KEY, l)
    } catch {
      /* storage unavailable: keep the choice for this visit only */
    }
  }, [])

  const t = useCallback((s: Bi) => s[lang], [lang])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

type TProps = { t: Bi } | { en: ReactNode; es: ReactNode }

/** Renders copy in the current language. Usable from server components (JSX props are allowed). */
export function T(props: TProps) {
  const { lang } = useLang()
  const pair = "t" in props ? props.t : props
  return <>{pair[lang]}</>
}

/** Shows children only in one language (for glosses such as the motto's English meaning). */
export function Only({ lang: only, children }: { lang: Lang; children: ReactNode }) {
  const { lang } = useLang()
  return lang === only ? <>{children}</> : null
}
