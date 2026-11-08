import { coffees } from "@/lib/coffees"

/**
 * The site's one marquee: the six coffee names, each on a strip of its own label color.
 * Decorative (the shelf below lists the same lines as links), so it is hidden from assistive tech.
 * Stops entirely under prefers-reduced-motion.
 */
export function CoffeeMarquee() {
  const run = (copy: number) =>
    coffees.map((c) => (
      <span
        key={`${copy}-${c.slug}`}
        className={`tone-${c.tone} flex shrink-0 items-center gap-5 border-r border-k-noir px-7 md:px-10`}
      >
        <span className="font-serif text-[1.9rem] font-medium italic leading-none md:text-[2.6rem]">{c.name}</span>
        <span className="label-row hidden !text-current sm:inline">Colombia</span>
      </span>
    ))
  return (
    <div aria-hidden="true" className="marquee relative border-y border-k-noir bg-k-noir">
      <div className="marquee-track flex h-[64px] w-max md:h-[84px]">
        {run(0)}
        {run(1)}
      </div>
    </div>
  )
}
