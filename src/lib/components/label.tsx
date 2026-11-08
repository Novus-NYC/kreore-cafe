import type { ReactNode } from "react"
import type { Tone } from "@/lib/coffees"

type Pad = "default" | "tight" | "none"

type LabelProps = {
  tone: Tone
  /** Label header row: [left, right], like the fields on a coffee bag. */
  fields?: [ReactNode, ReactNode]
  children: ReactNode
  id?: string
  /** First section on a page: leaves room for the fixed navbar. */
  first?: boolean
  pad?: Pad
  className?: string
  /** Extra classes for the inner container. */
  innerClassName?: string
  "aria-labelledby"?: string
}

const bottomPad: Record<Pad, string> = {
  default: "pb-20 md:pb-28",
  tight: "pb-12 md:pb-16",
  none: "pb-0",
}

/**
 * Full-bleed section built like a specialty coffee label:
 * a varietal color, a thin rule frame inset from the edges and a header row.
 */
export function Label({
  tone,
  fields,
  children,
  id,
  first = false,
  pad = "default",
  className = "",
  innerClassName = "",
  ...rest
}: LabelProps) {
  return (
    <section id={id} className={`tone-${tone} relative ${className}`} {...rest}>
      <div aria-hidden="true" className="rule pointer-events-none absolute inset-2 border sm:inset-4 md:inset-6" />
      <div
        className={`wrap relative ${first ? "pt-24 md:pt-28" : "pt-10 md:pt-14"} ${bottomPad[pad]} ${innerClassName}`}
      >
        {fields ? <LabelRow left={fields[0]} right={fields[1]} className="mb-10 md:mb-14" /> : null}
        {children}
      </div>
    </section>
  )
}

export function LabelRow({
  left,
  right,
  className = "",
}: {
  left: ReactNode
  right?: ReactNode
  className?: string
}) {
  return (
    <div className={`label-row rule flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b pb-3 ${className}`}>
      <span className="whitespace-nowrap">{left}</span>
      {right ? <span className="whitespace-nowrap text-right">{right}</span> : null}
    </div>
  )
}
