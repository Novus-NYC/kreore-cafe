import Link from "next/link"
import type { ReactNode } from "react"

type Variant = "solid" | "solid-light" | "outline" | "text"

const variants: Record<Variant, string> = {
  // noir fill + pureza text, for light labels
  solid: "bg-k-noir text-k-pureza hover:bg-k-bean",
  // pureza fill + noir text, for dark labels
  "solid-light": "bg-k-pureza text-k-noir hover:bg-k-bourbon",
  outline: "border border-current underline-offset-4 hover:underline",
  text: "link-underline !px-0",
}

type ActionProps = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  arrow?: boolean
  "aria-label"?: string
}

/** Sharp-cornered CTA. External links open in a new tab with rel="noreferrer". */
export function Action({ href, children, variant = "solid", className = "", arrow = false, ...rest }: ActionProps) {
  const external = /^https?:\/\//.test(href)
  const cls = `inline-flex min-h-[48px] items-center gap-3 rounded-[2px] px-6 text-[1rem] font-bold tracking-[0.01em] transition-colors duration-200 ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" className="font-normal">
          →
        </span>
      ) : null}
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...rest}>
        {content}
      </a>
    )
  }
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  )
}
