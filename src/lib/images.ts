import type { StaticImageData } from "next/image"
import farmTour from "../../public/images/farm-tour.jpg"
import coffeeField from "../../public/images/coffee-field.jpg"
import cocoraValley from "../../public/images/cocora-valley.jpg"
import beans from "../../public/images/beans.jpg"
import sachetsShelf from "../../public/images/sachets-shelf.jpg"
import toastStreet from "../../public/images/toast-street.jpg"
import mocadaCrop from "../../public/images/mocada-crop.jpg"
import kreoreSachet from "../../public/images/kreore-sachet.jpg"

export type Photo = {
  src: StaticImageData
  alt: string
  caption: { en: string; es: string }
}

// Real Kreore photos from the owner's own site, plus two Unsplash License stock photos
// (beans.jpg and cocora-valley.jpg, marked below). Never name people in alt text.
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
  // Stock (Unsplash License): unsplash.com/photos/gagbXVp6poM, Valle del Cocora, Quindío.
  cocoraValley: {
    src: cocoraValley,
    alt: "Green hillsides and forest under low clouds and mist in Quindío, in Colombia's coffee region",
    caption: { en: "Quindío, Colombia", es: "Quindío, Colombia" },
  },
  // Stock (Unsplash License): unsplash.com/photos/lcfH0p6emhw
  beans: {
    src: beans,
    alt: "Close-up of roasted coffee beans",
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
  // A tight crop of the bottom of toast-street.jpg: the Kreore drip sachet held up at a pop-up.
  kreoreSachet: {
    src: kreoreSachet,
    alt: "A hand holding a white Kreore Colombian specialty drip coffee sachet at a street pop-up",
    caption: { en: "Kreore drip coffee", es: "Café de filtro Kreore" },
  },
  // A tight 4:5 crop of mocada-entrance.jpg (her, the case and the MoCADA lettering on the glass).
  // It drops the building facade and the Spanish caption baked into the original's upper third.
  mocadaEntrance: {
    src: mocadaCrop,
    alt: "A Kreore team member with a rolling case, pointing up at the MoCADA entrance in Brooklyn",
    caption: { en: "MoCADA, Brooklyn", es: "MoCADA, Brooklyn" },
  },
} satisfies Record<string, Photo>
