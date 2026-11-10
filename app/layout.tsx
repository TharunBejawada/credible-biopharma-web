import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted variable fonts (no build-time Google Fonts fetch, so Amplify builds are reliable).
const sora = localFont({ src: "./fonts/Sora.woff2", weight: "100 800", variable: "--font-sora", display: "swap" });
const inter = localFont({ src: "./fonts/Inter.woff2", weight: "100 900", variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Credible Biopharma – Reliable Healthcare Solutions",
  description:
    "B2B healthcare solutions supplying pharmaceuticals, injectables, surgical products, medical consumables and implants to hospitals, distributors and institutions.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
