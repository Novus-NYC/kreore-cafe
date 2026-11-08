import type { StaticImageData } from "next/image"
import farmTour from "../../public/images/farm-tour.jpg"
import coffeeField from "../../public/images/coffee-field.jpg"
import sombreros from "../../public/images/sombreros.jpg"
import beans from "../../public/images/beans.jpg"
import sachetsShelf from "../../public/images/sachets-shelf.jpg"
import toastStreet from "../../public/images/toast-street.jpg"
import mocadaEntrance from "../../public/images/mocada-entrance.jpg"

export type Photo = {
  src: StaticImageData
  alt: string
  caption: { en: string; es: string }
}

// All real Kreore photos from the owner's own site. Never name people in alt text.
export const photos = {
  farmTour: {
    src: farmTour,
    alt: "A group in white sombreros vueltiaos on a coffee farm tour among banana plants in Colombia",
    caption: { en: "Farm in Colombia", es: "Finca en Colombia" },
  },
  coffeeField: {
    src: coffeeField,
    alt: "A woman in a white hat walking past coffee plants on a hillside farm in Colombia",
    caption: { en: "Coffee farm, Colombia", es: "Cafetal en Colombia" },
  },
  sombreros: {
    src: sombreros,
    alt: "Visitors in white sombreros under a bamboo drying canopy where coffee beans rest on raised beds",
    caption: { en: "Drying the coffee", es: "Secado del café" },
  },
  beans: {
    src: beans,
    alt: "Close-up of roasted coffee beans piled in a glass container",
    caption: { en: "Roasted coffee", es: "Café tostado" },
  },
  sachetsShelf: {
    src: sachetsShelf,
    alt: "Kreore drip coffee sachets and a Pureza bag on a white shelf with books and a lamp",
    caption: { en: "Kreore sachets", es: "Sobres Kreore" },
  },
  toastStreet: {
    src: toastStreet,
    alt: "Friends toasting with colorful mugs on a street, a Kreore drip sachet in the foreground",
    caption: { en: "Kreore pop-up", es: "Pop-up Kreore" },
  },
  mocadaEntrance: {
    src: mocadaEntrance,
    alt: "A Kreore team member with a rolling case outside the MoCADA entrance in Brooklyn",
    caption: { en: "MoCADA, Brooklyn", es: "MoCADA, Brooklyn" },
  },
} satisfies Record<string, Photo>
