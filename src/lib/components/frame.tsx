import Image from "next/image"
import type { ReactNode } from "react"
import type { Photo } from "@/lib/images"
import { T } from "@/lib/i18n"
import { copy } from "@/lib/copy"

type FrameProps = {
  photo: Photo
  /** Tailwind aspect class for the fixed-ratio wrapper, e.g. "aspect-[4/5]". */
  ratio?: string
  sizes: string
  preload?: boolean
  objectPosition?: string
  /** Right-hand caption field. */
  note?: ReactNode
  className?: string
  imgClassName?: string
  /** Hide the caption row (e.g. inside a coffee card that has its own label). */
  bare?: boolean
}

/** Photo in a 1px rule frame with the shared warm grade and a label-style caption row. */
export function Frame({
  photo,
  ratio = "aspect-[4/5]",
  sizes,
  preload = false,
  objectPosition,
  note,
  className = "",
  imgClassName = "",
  bare = false,
}: FrameProps) {
  return (
    <figure className={className}>
      <div className={`photo-zoom relative overflow-hidden ${ratio}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          placeholder={preload ? "empty" : "blur"}
          className={`photo-grade object-cover ${imgClassName}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {bare ? null : (
        <figcaption className="label-row mt-3 flex justify-between gap-4">
          <span>
            <T t={copy.common.photo} /> · <T t={photo.caption} />
          </span>
          {note ? <span>{note}</span> : null}
        </figcaption>
      )}
    </figure>
  )
}
