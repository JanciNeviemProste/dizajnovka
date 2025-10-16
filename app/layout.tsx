import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Zelené fasády - Funkčné architektonické riešenia",
    template: "%s | Zelené fasády"
  },
  description: "Profesionálne riešenia zelených fasád pre komerčné aj rezidenčné budovy. Energetické úspory, lepšia mikroklíma, vyššia hodnota nehnuteľnosti.",
  keywords: ["zelené fasády", "living walls", "vertikálne záhrady", "zelená architektúra", "BREEAM", "LEED", "udržateľnosť", "ESG"],
  authors: [{ name: "Zelené fasády" }],
  creator: "Zelené fasády",
  publisher: "Zelené fasády",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zelenefasady.sk"),
  openGraph: {
    title: "Zelené fasády - Funkčné architektonické riešenia",
    description: "Profesionálne riešenia zelených fasád. Energetické úspory až 30%, lepšia mikroklíma, certifikácie BREEAM/LEED.",
    url: "https://zelenefasady.sk",
    siteName: "Zelené fasády",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zelené fasády - profesionálne riešenia",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelené fasády - Funkčné architektonické riešenia",
    description: "Profesionálne riešenia zelených fasád. Energetické úspory až 30%, lepšia mikroklíma.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zelenefasady.sk",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}