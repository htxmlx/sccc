import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteConfig.title ?? "Carles Smyrna Christian Church",
    description: siteConfig.description ?? "Welcome to Carles Smyrna Christian Church. Join us as we spread the word of God.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title as string}</title>
                <meta name="description" content={metadata.description ?? ""} />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <main>{children}</main>
                <FooterSection />
            </body>
        </html>
    );
}
