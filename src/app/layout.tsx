import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exoanalytics",
  description: "ExoAnalytics is a web app that displays exoplanet data from NASA's Exoplanet Archive.",
};

export const viewport : Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale : 5,
    minimumScale: 1,
    userScalable: true
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
