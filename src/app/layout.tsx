import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({ weight : '500',  subsets: ["latin"] });

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
      <body className={`flex flex-col min-h-screen overflow-y-auto relative ${font.className}`}>{children}</body>
    </html>
  );
}
