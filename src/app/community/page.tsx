import type { Metadata } from "next"
import Image from "next/image"
import { Label, LabelRow } from "@/lib/components/label"
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
          <div className="pb-4 lg:col-span-7 lg:pb-32">
            <h1 className="font-serif text-motto font-medium italic">
              <T en="Stories and connections." es="Historias y conexiones." />
            </h1>
            {/* Above the fold, so no reveal: the quote is visible on first paint. */}
            <blockquote className="mt-10 max-w-[36rem] border-l-4 border-k-noir pl-6 md:mt-14">
              <p className="font-serif text-[1.9rem] font-semibold leading-[1.08] text-k-noir md:text-[2.5rem]">
                <T
                  en="“We’re looking for women with different stories who love coffee.”"
                  es="“Buscamos mujeres con diferentes historias que amen el café.”"
                />
              </p>
            </blockquote>
            <p className="mt-6 max-w-[44ch] text-[1.1rem] text-k-noir">
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
            <div className="bleed-right lg:-mt-8 lg:translate-y-24">
              <Reveal variant="mask">
                <figure>
                  <div className="photo-zoom relative aspect-[4/5] overflow-hidden border-y border-k-noir lg:aspect-[3/4] lg:border-l">
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

      {/* What a gathering looks like: gesha, set as an invitation and menu card with ruled fields. */}
      <Label tone="gesha" id="gathering" innerClassName="lg:!pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9 lg:pt-40">
            <div className="lg:sticky lg:top-28">
              <LabelRow left={<T en="Gathering" es="Encuentro" />} right={<T en="What to expect" es="Qué esperar" />} />
              <h2 className="mt-6 font-serif text-d2 font-medium">
                <T en="What a gathering looks like." es="Cómo es un encuentro." />
              </h2>
              <p className="mt-4 max-w-[34ch]">
                <T
                  en="Dates and places are announced on Instagram."
                  es="Las fechas y los lugares se anuncian en Instagram."
                />
              </p>
            </div>
          </div>

          <Reveal className="order-2 lg:order-1 lg:col-span-7">
            <article className="tone-pureza relative px-5 py-8 md:px-12 md:py-12" aria-labelledby="menu-title">
              <span aria-hidden="true" className="rule pointer-events-none absolute inset-2 border md:inset-3" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-4 border border-k-noir md:inset-5" />
              <div className="relative">
                <p className="label-row flex justify-between gap-4">
                  <span>Kreore Woman · Café Brunch</span>
                  <span>
                    <T en="Menu" es="Menú" />
                  </span>
                </p>
                <h3 id="menu-title" className="mt-8 text-center font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-medium italic leading-[0.92]">
                  Historias <span className="not-italic">y</span> Conexiones
                </h3>
                <p className="mt-3 text-center">
                  <T en="The brunch series at the heart of Kreore Woman." es="La serie de brunches en el corazón de Kreore Woman." />
                </p>

                <dl className="mt-10 border-t-2 border-k-noir">
                  <div className="rule grid gap-2 border-b py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <dt className="label-row pt-2">
                      <T en="Coffee" es="Café" />
                    </dt>
                    <dd>
                      <span className="block font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-none">
                        V60 <span className="italic text-k-bean">&amp;</span>{" "}
                        <T en="French press" es="prensa francesa" />
                      </span>
                      <span className="t-muted mt-2 block">
                        <T en="Coffee experiences, brewed at the table." es="Experiencias de café, preparadas en la mesa." />
                      </span>
                    </dd>
                  </div>
                  <div className="rule grid gap-2 border-b py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <dt className="label-row pt-2">
                      <T en="Conversation" es="Conversación" />
                    </dt>
                    <dd className="font-serif text-[1.6rem] italic leading-snug md:text-[1.9rem]">
                      <T
                        en="Time to tell your story and listen to others, cup in hand."
                        es="Tiempo para contar tu historia y escuchar la de otras, con la taza en la mano."
                      />
                    </dd>
                  </div>
                  <div className="rule grid gap-2 border-b py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <dt className="label-row pt-2">
                      <T en="Network" es="Red" />
                    </dt>
                    <dd className="wordmark text-[1.25rem] leading-tight md:text-[1.5rem]">
                      <T en="Women entrepreneurs" es="Emprendedoras" />
                    </dd>
                  </div>
                  <div className="grid gap-2 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <dt className="label-row pt-2">
                      <T en="Next date" es="Próxima fecha" />
                    </dt>
                    <dd>
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
              </div>
            </article>
          </Reveal>
        </div>
      </Label>

      {/* Past event: noir, set as a ticket with a perforated stub. Clearly marked as past. */}
      <Label tone="noir" fields={[<T key="p" en="Past event" es="Evento pasado" />, "Woodside, Queens"]}>
        <Reveal>
          <div className="grid border border-k-gesha lg:grid-cols-12">
            <div className="relative p-6 md:p-10 lg:col-span-8 lg:p-14">
              <p className="inline-flex border border-current px-3 py-1.5 font-sans text-[0.8rem] font-bold uppercase tracking-[0.16em] text-k-bourbon">
                <T en="Already happened" es="Ya sucedió" />
              </p>
              <h2 className="mt-8 font-serif text-[clamp(3.4rem,8vw,8rem)] font-medium italic leading-[0.86] tracking-[-0.02em]">
                Petite Coffee Picnic
              </h2>
              <p className="mt-8 text-[1.15rem] md:text-[1.3rem]">
                <T en="Doughboy Plaza, Woodside, autumn 2026." es="Doughboy Plaza, Woodside, otoño de 2026." />
              </p>
              <p className="t-muted mt-2">
                <T
                  en="This gathering has already happened. Follow Kreore to hear about the next one."
                  es="Este encuentro ya sucedió. Sigue a Kreore para enterarte del próximo."
                />
              </p>
            </div>
            <div className="relative border-t border-dashed border-k-gesha p-6 md:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
              <p className="label-row">
                <T en="On the table" es="En la mesa" />
              </p>
              <dl className="mt-4">
                {picnic.map((row) => (
                  <div key={row.k.en} className="rule grid grid-cols-[6.5rem_1fr] gap-4 border-b py-4 last:border-b-0">
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
      <Label tone="pureza" fields={[<T key="l" en="We’re looking for" es="Buscamos" />, "Threads · Instagram"]}>
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="tone-bourbon relative p-6 md:p-12 lg:col-span-7">
            <LabelRow left={<T en="Stories" es="Historias" />} right={<T en="Women" es="Mujeres" />} />
            <h2 className="mt-10 font-serif text-d2 font-medium italic">
              <T
                en="Women with a story to share over coffee."
                es="Mujeres con una historia que contar, con café de por medio."
              />
            </h2>
          </Reveal>
          <Reveal i={1} className="tone-noir relative z-10 -mt-6 ml-6 p-6 md:p-10 lg:col-span-5 lg:-ml-16 lg:mt-40 lg:self-start">
            <LabelRow left={<T en="Content" es="Contenido" />} right={<T en="Coffee" es="Café" />} />
            <h2 className="mt-8 font-serif text-d3 font-medium">
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
      <Label tone="pacamara" fields={[<T key="n" en="Next gathering" es="Próximo encuentro" />, "Instagram"]}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-d1 font-medium">
              <T en="Send us a DM for the next gathering." es="Escríbenos por Instagram." />
            </h2>
          </Reveal>
          <Reveal i={1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
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
