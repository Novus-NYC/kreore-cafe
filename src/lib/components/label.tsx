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

// Deliberate, not cavernous: 64px / 96px by default, 56px / 72px when tight.
const bottomPad: Record<Pad, string> = {
  default: "pb-16 md:pb-24",
  tight: "pb-14 md:pb-[4.5rem]",
  none: "pb-0",
}

const topPad: Record<Pad, string> = {
  default: "pt-16 md:pt-24",
  tight: "pt-14 md:pt-[4.5rem]",
  none: "pt-16 md:pt-24",
}

/**
 * Full-bleed section built like a specialty coffee label: one color and an optional
 * header row of real fields (origin, kind). Light tones (milk, pureza) carry most pages.
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
      <div
        className={`wrap relative ${first ? "pt-24 md:pt-28" : topPad[pad]} ${bottomPad[pad]} ${innerClassName}`}
      >
        {fields ? <LabelRow left={fields[0]} right={fields[1]} className="mb-8 md:mb-10" /> : null}
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
    <div className={`label-row flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 ${className}`}>
      <span className="whitespace-nowrap">{left}</span>
      {right ? <span className="whitespace-nowrap text-right">{right}</span> : null}
    </div>
  )
}
