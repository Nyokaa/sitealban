import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyAppointment from "@/components/StickyAppointment";
import Chatbot from "@/components/Chatbot";
import StructuredData from "@/components/StructuredData";
import { site } from "@/data/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // Racine du domaine uniquement : Next ajoute déjà le basePath aux images
  // (évite un doublon /sitealban/sitealban/ sur l'URL de l'image de partage).
  metadataBase: new URL("/", site.url),
  title: {
    default: `${site.name} — Étude notariale à ${site.contact.city}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
  // Tant que le site n'est pas agréé/publié, on interdit l'indexation.
  robots: site.indexable
    ? undefined
    : { index: false, follow: false, nocache: true },
  openGraph: {
    title: site.name,
    description: site.slogan,
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <StickyAppointment />
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
