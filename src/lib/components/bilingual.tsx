import type { ReactNode } from "react"

type Size = "motto" | "d1" | "d2" | "d3" | "d4"

const esSize: Record<Size, string> = {
  motto: "text-motto",
  d1: "text-d1",
  d2: "text-d2",
  d3: "text-d3",
  d4: "text-d4",
}

const enSize: Record<Size, string> = {
  motto: "mt-6 text-lg md:mt-8 md:text-[1.375rem]",
  d1: "mt-5 text-lg md:mt-6 md:text-xl",
  d2: "mt-4 text-base md:mt-5 md:text-lg",
  d3: "mt-3 text-base md:text-[1.0625rem]",
  d4: "mt-2 text-[0.95rem]",
}

type BilingualProps = {
  /** Spanish primary line, set in the serif. */
  es: ReactNode
  /** English translation line, set in the sans. */
  en: ReactNode
  level?: 1 | 2 | 3 | 4
  size?: Size
  italic?: boolean
  className?: string
  enClassName?: string
  id?: string
}

/** Every heading is bilingual like an export label: Spanish voice, English translation line. */
export function Bilingual({
  es,
  en,
  level = 2,
  size = "d2",
  italic = false,
  className = "",
  enClassName = "",
  id,
}: BilingualProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4"
  return (
    <Tag id={id} className={className}>
      <span className={`block font-serif font-medium ${italic ? "italic" : ""} ${esSize[size]}`}>{es}</span>
      <span lang="en" className={`t-muted block font-sans font-normal leading-snug ${enSize[size]} ${enClassName}`}>
        {en}
      </span>
    </Tag>
  )
}

/** Bilingual body copy pair: Spanish paragraph and its English line. */
export function BilingualText({
  es,
  en,
  className = "",
  esClassName = "font-serif text-[1.45rem] leading-snug md:text-[1.65rem]",
}: {
  es: ReactNode
  en: ReactNode
  className?: string
  esClassName?: string
}) {
  return (
    <div className={className}>
      <p className={esClassName}>{es}</p>
      <p lang="en" className="t-muted mt-2 max-w-[60ch]">
        {en}
      </p>
    </div>
  )
}
