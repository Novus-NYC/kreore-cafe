import { coffees } from "@/lib/coffees"

// The chip each name carries: its label color, as a small round swatch.
const chip: Record<string, string> = {
  bourbon: "bg-k-bourbon",
  pureza: "bg-k-milk ring-1 ring-inset ring-k-noir/25",
  gesha: "bg-k-gesha",
  noir: "bg-k-noir",
  pacamara: "bg-k-pacamara",
}

/**
 * The site's one marquee: the six coffee names in noir italic on the pureza canvas, each led by
 * a small swatch of its label color. Decorative (the shelf below lists the same lines as links),
 * so it is hidden from assistive tech. Stops entirely under prefers-reduced-motion.
 */
export function CoffeeMarquee() {
  const run = (copy: number) =>
    coffees.map((c) => (
      <span key={`${copy}-${c.slug}`} className="flex shrink-0 items-center gap-4 px-7 md:gap-5 md:px-10">
        <span className={`block h-3.5 w-3.5 rounded-full md:h-4 md:w-4 ${chip[c.tone]}`} />
        <span className="font-serif text-[1.9rem] font-medium italic leading-none md:text-[2.5rem]">{c.name}</span>
      </span>
    ))
  return (
    <div aria-hidden="true" className="marquee relative bg-k-pureza text-k-noir">
      <div className="marquee-track flex h-[64px] w-max md:h-[84px]">
        {run(0)}
        {run(1)}
      </div>
    </div>
  )
}
