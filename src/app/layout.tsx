import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({ weight: '500', subsets: ["latin"] });

export const metadata = {
    title: 'ExoAnalytics - Explore Exoplanets',
    description: 'ExoAnalytics provides comprehensive data visualization and insights into exoplanets using NASA’s Exoplanet Archive.',
    openGraph: {
        type: 'website',
        url: 'https://exoanalytics.fmacal.com/',
        title: 'ExoAnalytics - Explore Exoplanets',
        description: 'Discover detailed data and visualizations about exoplanets using ExoAnalytics, powered by NASA’s Exoplanet Archive.',
        images: [
            {
                url: 'https://exoanalytics.fmacal.com/public/exoanalytics.png',
                width: 253,
                height: 233,
                alt: 'ExoAnalytics Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ExoAnalytics - Explore Exoplanets',
        description: 'Discover detailed data and visualizations about exoplanets using ExoAnalytics, powered by NASA’s Exoplanet Archive.',
        image: 'https://exoanalytics.fmacal.com/public/exoanalytics.png',
    },
    icons: {
        icon: '/favicon.ico',
    },
    
    canonical: 'https://exoanalytics.fmacal.com/',
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
      },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
    userScalable: true,
    themeColor: '#000000',
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
