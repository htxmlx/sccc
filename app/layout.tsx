import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- STEP 1: GLOBAL SEO & AI SEARCH DATA ---
export const metadata: Metadata = {
  title: {
    default: "Smyrna Christian Church | Carles, Iloilo",
    template: "%s | Smyrna Christian Church",
  },
  description:
    "A faith-filled community welcoming all. Rooted in Faith, Strengthened by Love. Join our journey in Carles, Iloilo.",
  keywords: [
    "Smyrna Christian Church",
    "Church in Carles Iloilo",
    "Poblacion Carles Church",
    "Worship Carles",
    "Christian Community Iloilo",
  ],
  authors: [{ name: "Smyrna Christian Church" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://smyrna-church.vercel.app", // Replace with your actual Vercel URL
    siteName: "Smyrna Christian Church",
    title: "Smyrna Christian Church | Rooted in Faith",
    description:
      "Faith-filled community welcoming all. Worship, fellowship, and love unite us. Join us at Ariola Street, Poblacion, Carles.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  // Geo Metadata for AI & Local Search
  other: {
    "geo.region": "PH-ILL",
    "geo.placename": "Carles, Iloilo",
    "geo.position": "11.2974;123.1673",
    ICBM: "11.2974, 123.1673",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STEP 2: JSON-LD FOR AI CHATBOTS ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Smyrna Christian Church",
    url: "https://smyrna-church.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ariola Street, Poblacion",
      addressLocality: "Carles",
      addressRegion: "Iloilo",
      postalCode: "5019",
      addressCountry: "PH",
    },
    description:
      "A faith-filled community welcoming all. Worship, fellowship, and love unite us.",
    hasMap:
      "https://www.google.com/maps/search/Smyrna+Christian+Church+Carles+Iloilo",
    logo: "https://smyrna-church.vercel.app/logo.png",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Injecting the AI-readable data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SmoothScroll>
            <main className="relative min-h-screen">{children}</main>
            {/* The footer is now semantically placed within the scroll context */}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
