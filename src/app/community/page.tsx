import type { Metadata } from "next"
import Image from "next/image"
import { Label } from "@/lib/components/label"
import { WaxSeal } from "@/lib/components/wax-seal"
import { Reveal } from "@/lib/components/reveal"
import { Action } from "@/lib/components/action"
import { T } from "@/lib/i18n"
import { photos } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Community",
  description:
    "Kreore Woman: Historias y Conexiones brunches, coffee experiences and conversation among women in New York. Follow Kreore on Instagram for the next gathering.",
  alternates: { canonical: "/community" },
}

// Only what is public: the brunch series name, brewing methods and the purpose of the gatherings.
// The Petite Coffee Picnic details come from the public event listing. It is a past event.
const picnic = [
  { k: { en: "Coffee", es: "Café" }, en: "V60 and French press brewing", es: "V60 y prensa francesa" },
  { k: { en: "Workshop", es: "Taller" }, en: "A DIY pumpkin spice latte", es: "Pumpkin spice latte hecho por ti" },
  { k: { en: "Table", es: "Mesa" }, en: "A French-style brunch", es: "Brunch al estilo francés" },
  { k: { en: "Vision", es: "Visión" }, en: "A vision board", es: "Tablero de sueños" },
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero: bourbon. Statement and call to action in full noir ink; the toast photo bleeds off the
          right edge and drops into the next label. */}
      <Label tone="bourbon" first pad="none" className="z-10" fields={["Kreore Woman", <T key="c" en="Community · New York" es="Comunidad · Nueva York" />]}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:pb-24">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="Stories and connections." es="Historias y conexiones." />
            </h1>
            {/* Above the fold, so no reveal: the quote is visible on first paint. */}
            <blockquote className="mt-8 max-w-[36rem] border-l-4 border-k-noir pl-6 md:mt-10">
              <p className="font-serif text-[1.9rem] font-semibold leading-[1.08] text-k-noir md:text-[2.5rem]">
                <T
                  en="“We’re looking for women with different stories who love coffee.”"
                  es="“Buscamos mujeres con diferentes historias que amen el café.”"
                />
              </p>
            </blockquote>
            <p className="mt-6 max-w-[44ch] text-[1.15rem] text-k-noir">
              <T
                en="Brunches, coffee and conversation among women in New York."
                es="Brunches, café y conversación entre mujeres en Nueva York."
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.instagram} variant="solid" arrow>
                <T en="Message us on Instagram" es="Escríbenos por Instagram" />
              </Action>
              <Action href="#gathering" variant="text">
                <T en="What a gathering looks like" es="Cómo es un encuentro" />
              </Action>
            </div>
          </div>
          <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
            <div className="bleed-right lg:translate-y-20">
              <Reveal variant="mask">
                <figure>
                  <div className="photo-zoom relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                    <Image
                      src={photos.toastStreet.src}
                      alt={photos.toastStreet.alt}
                      fill
                      preload
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="photo-grade object-cover"
                      style={{ objectPosition: "50% 18%" }}
                    />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </Label>

      {/* What a gathering looks like: milk canvas, the brunch set as one of Kreore's blush invitations,
          sealed with a static deep-rose wax seal. */}
      <Label tone="milk" id="gathering" innerClassName="lg:!pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9 lg:pt-36">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-serif text-d2 font-medium">
                <T en="What a gathering looks like." es="Cómo es un encuentro." />
              </h2>
              <p className="t-muted mt-4 max-w-[34ch]">
                <T
                  en="Coffee brewed at the table, time to talk, and women entrepreneurs meeting each other. Dates and places are announced on Instagram."
                  es="Café preparado en la mesa, tiempo para conversar y emprendedoras que se conocen. Las fechas y los lugares se anuncian en Instagram."
                />
              </p>
            </div>
          </div>

          <Reveal className="order-2 pt-10 lg:order-1 lg:col-span-7">
            <article
              className="tone-bourbon relative mx-auto max-w-[40rem] px-6 pb-10 pt-16 text-center md:px-14 md:pb-14 md:pt-20"
              aria-labelledby="menu-title"
            >
              <WaxSeal className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 md:h-24 md:w-24" />
              <p className="label-row">Kreore Woman · Café Brunch</p>
              <h3
                id="menu-title"
                className="mt-5 font-serif text-[clamp(2.8rem,6vw,5rem)] font-medium italic leading-[0.95]"
              >
                Historias <span className="text-[0.7em]">y</span> Conexiones
              </h3>
              <p className="mx-auto mt-4 max-w-[34ch]">
                <T en="The brunch series at the heart of Kreore Woman." es="La serie de brunches en el corazón de Kreore Woman." />
              </p>

              <dl className="mt-10 space-y-7">
                <div>
                  <dt className="label-row">
                    <T en="Coffee" es="Café" />
                  </dt>
                  <dd className="mt-2 font-serif text-[clamp(2rem,3.6vw,2.9rem)] font-medium leading-none">
                    V60 <span className="italic">&amp;</span> <T en="French press" es="prensa francesa" />
                  </dd>
                </div>
                <div>
                  <dt className="label-row">
                    <T en="Conversation" es="Conversación" />
                  </dt>
                  <dd className="mx-auto mt-2 max-w-[30ch] font-serif text-[1.55rem] italic leading-snug md:text-[1.8rem]">
                    <T
                      en="Time to tell your story and listen to others, cup in hand."
                      es="Tiempo para contar tu historia y escuchar la de otras, con la taza en la mano."
                    />
                  </dd>
                </div>
                <div>
                  <dt className="label-row">
                    <T en="Network" es="Red" />
                  </dt>
                  <dd className="wordmark mt-2 text-[1.2rem] leading-tight md:text-[1.4rem]">
                    <T en="Women entrepreneurs" es="Emprendedoras" />
                  </dd>
                </div>
                <div>
                  <dt className="label-row">
                    <T en="Next date" es="Próxima fecha" />
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex min-h-[44px] items-center font-bold"
                    >
                      <T en="Announced on Instagram" es="Se anuncia en Instagram" /> {site.instagramHandle}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>
      </Label>

      {/* Past event: the page's one noir band. A paper ticket with a perforated stub lies on it.
          Clearly marked as past. */}
      <Label tone="noir" fields={[<T key="p" en="Past event" es="Evento pasado" />, "Woodside, Queens"]}>
        <Reveal>
          <div className="tone-pureza grid lg:grid-cols-12">
            <div className="relative p-6 md:p-10 lg:col-span-8 lg:p-14">
              <p className="inline-flex bg-k-bourbon px-3 py-1.5 font-sans text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-k-noir">
                <T en="Already happened" es="Ya sucedió" />
              </p>
              <h2 className="mt-8 font-serif text-[clamp(3.4rem,8vw,8rem)] font-medium italic leading-[0.86] tracking-[-0.02em]">
                Petite Coffee Picnic
              </h2>
              <p className="mt-6 text-[1.2rem] md:text-[1.35rem]">
                <T en="Doughboy Plaza, Woodside, autumn 2026." es="Doughboy Plaza, Woodside, otoño de 2026." />
              </p>
              <p className="t-muted mt-2">
                <T
                  en="This gathering has already happened. Follow Kreore to hear about the next one."
                  es="Este encuentro ya sucedió. Sigue a Kreore para enterarte del próximo."
                />
              </p>
            </div>
            <div className="relative border-t-2 border-dashed border-k-noir/25 p-6 md:p-10 lg:col-span-4 lg:border-l-2 lg:border-t-0">
              <p className="label-row">
                <T en="On the table" es="En la mesa" />
              </p>
              <dl className="mt-4">
                {picnic.map((row) => (
                  <div key={row.k.en} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3">
                    <dt className="label-row pt-1">
                      <T t={row.k} />
                    </dt>
                    <dd className="font-serif text-[1.35rem] leading-snug">
                      <T en={row.en} es={row.es} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Label>

      {/* Recruiting: pureza, two asymmetric blocks from the Threads posts. */}
      <Label tone="pureza" fields={[<T key="l" en="We’re looking for" es="Buscamos" />, null]}>
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="tone-bourbon relative p-6 md:p-12 lg:col-span-7">
            <p className="label-row">
              <T en="Stories" es="Historias" />
            </p>
            <h2 className="mt-6 font-serif text-d2 font-medium italic">
              <T
                en="Women with a story to share over coffee."
                es="Mujeres con una historia que contar, con café de por medio."
              />
            </h2>
          </Reveal>
          <Reveal i={1} className="tone-milk relative z-10 -mt-6 ml-6 p-6 md:p-10 lg:col-span-5 lg:-ml-16 lg:mt-32 lg:self-start">
            <p className="label-row">
              <T en="Content creators" es="Creadoras de contenido" />
            </p>
            <h2 className="mt-5 font-serif text-d3 font-medium">
              <T en="Coffee content creators." es="Creadoras de contenido de café." />
            </h2>
            <p className="t-muted mt-4">
              <T
                en="If you film, photograph or write about coffee, we would love to hear from you."
                es="Si grabas, fotografías o escribes sobre café, nos encantaría saber de ti."
              />
            </p>
          </Reveal>
        </div>
      </Label>

      {/* CTA: pacamara. */}
      <Label tone="pacamara">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Send us a DM for the next gathering." es="Escríbenos por Instagram." />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-3 lg:col-span-4 lg:col-start-9">
            <Action href={site.instagram} variant="solid" arrow>
              <T en="Message" es="Escribe a" /> {site.instagramHandle}
            </Action>
            <Action href={site.threads} variant="text">
              <T en="Follow on Threads" es="Síguenos en Threads" />
            </Action>
          </Reveal>
        </div>
      </Label>
    </>
  )
}
