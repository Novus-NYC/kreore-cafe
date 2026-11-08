export type Tone = "noir" | "pureza" | "bourbon" | "gesha" | "pacamara"

export type Coffee = {
  slug: string
  name: string
  tone: Tone
  /** Label field shown above the name. */
  kind: "VARIEDAD" | "LÍNEA KREORE" | "FORMATO"
  kindEn: string
  es: string
  en: string
  /** Sachets carry a photo on the shelf and the cafés page. */
  photo?: boolean
}

// Descriptions describe the variety in general, never a specific lot.
// Pureza and Noir 82 details are unknown: owner to supply notes.
export const coffees: Coffee[] = [
  {
    slug: "pink-bourbon",
    name: "Pink Bourbon",
    tone: "bourbon",
    kind: "VARIEDAD",
    kindEn: "Variety",
    es: "Una variedad cultivada en Colombia y muy apreciada en el café de especialidad.",
    en: "A Colombian-grown variety prized in specialty coffee.",
  },
  {
    slug: "gesha",
    name: "Gesha",
    tone: "gesha",
    kind: "VARIEDAD",
    kindEn: "Variety",
    es: "Una variedad célebre en el café de especialidad por sus tazas florales, casi como un té.",
    en: "A celebrated variety known in specialty coffee for its floral, tea-like cups.",
  },
  {
    slug: "pureza",
    name: "Pureza",
    tone: "pureza",
    kind: "LÍNEA KREORE",
    kindEn: "Kreore line",
    es: "Pregúntale a Viviana por esta línea.",
    en: "Ask Viviana about this line.",
  },
  {
    slug: "noir-82",
    name: "Noir 82",
    tone: "noir",
    kind: "LÍNEA KREORE",
    kindEn: "Kreore line",
    es: "Pregúntale a Viviana por esta línea.",
    en: "Ask Viviana about this line.",
  },
  {
    slug: "pacamara",
    name: "Pacamara",
    tone: "pacamara",
    kind: "VARIEDAD",
    kindEn: "Variety",
    es: "Una variedad de grano grande, cruce de Pacas y Maragogipe.",
    en: "A large-bean variety, a cross of Pacas and Maragogipe.",
  },
  {
    slug: "sachets",
    name: "Sachets",
    tone: "pureza",
    kind: "FORMATO",
    kindEn: "Format",
    es: "Sobres individuales de café Kreore para filtrar, pensados para la oficina y los viajes.",
    en: "Single-serve Kreore drip sachets, made for offices and travel.",
    photo: true,
  },
]
