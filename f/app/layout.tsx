import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 1. The Metadata Object
export const metadata: Metadata = {
  title: {
    default: "cX | Premium Hoodie Collection",
    template: "%s | cX",
  },
  description: "Explore the latest in high-quality, comfortable streetwear.",
  keywords: ["Hoodies", "Streetwear", "cX Fashion", "Clothing Brand"],
  authors: [{ name: "Robiul Hasan Jisan "  }],
  creator: "cX Brand",
  openGraph: {
    title: "cX | Hoodie Collection",
    description: "Premium comfort, unmatched style.",
    url: "https://clothing-xpress-9q3q.vercel.app/",
    siteName: "cX Store",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "cX Hoodie Collection Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cX | Hoodie Collection",
    description: "Shop the latest cX Hoodies.",
    images: [""],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// 2. The Required Default Export (The Component)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
