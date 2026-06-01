import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

const cormorant = Cormorant_Garamond({
  variable: "--next-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--next-jost",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upvirtual.net"),
  title: "UpVirtual — Digital Agency",
  description: "Strategic design, funnels, social media, branding, and virtual assistance for growing businesses.",
  openGraph: {
    title: "UpVirtual — Digital Agency",
    description: "Strategic design, funnels, social media, branding, and virtual assistance for growing businesses.",
    url: "https://www.upvirtual.net",
    siteName: "UpVirtual",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "UpVirtual — Digital Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpVirtual — Digital Agency",
    description: "Strategic design, funnels, social media, branding, and virtual assistance for growing businesses.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
