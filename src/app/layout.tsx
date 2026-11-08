import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { site } from "@/lib/site"
import { LangProvider } from "@/lib/i18n"

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

const description =
  "Colombian specialty coffee by Viviana Durán for New York events, offices, hotels and pop-ups. Creo porque oré."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kreore Café | Colombian specialty coffee in New York",
    template: "%s | Kreore Café",
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    alternateLocale: ["es_US"],
    title: "Kreore Café | Colombian specialty coffee in New York",
    description,
    images: [
      {
        url: "/images/farm-tour.jpg",
        width: 1012,
        height: 1800,
        alt: "A coffee farm tour in Colombia, visitors in white sombreros vueltiaos",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#FBF8F3",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <LangProvider>
          <Navbar />
          <main id="content" className="flex-1 overflow-x-clip">
            {children}
          </main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
