import "./globals.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";

export const metadata = {
    metadataBase: new URL('https://heyconrado.dev'),
    title: {
        default: `${seo.title}`,
        template: `%s | ${seo.title}`,
    },
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
    authors: [{ name: "Conrado Gómez", url: "https://heyconrado.dev" }],
    creator: "Conrado Gómez",
    publisher: "Conrado Gómez",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: "/images/CG.png", sizes: "32x32", type: "image/png" },
            { url: "/images/CG.png", sizes: "192x192", type: "image/png" },
            { url: "/images/CG.png", sizes: "512x512", type: "image/png" },
        ],
        apple: { url: "/images/CG.png", sizes: "180x180", type: "image/png" },
    },
    manifest: "/manifest.json",
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://heyconrado.dev',
        siteName: 'Conrado Gómez',
        title: `${seo.title}`,
        description: `${seo.description}`,
        images: [
            {
                url: '/images/CG.png',
                width: 512,
                height: 512,
                alt: 'Conrado Gómez Logo',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: `${seo.title}`,
        description: `${seo.description}`,
        images: ['/images/CG.png'],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    verification: {
        google: 'google61825a7e4761c799',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" data-scroll-behavior="smooth">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={`antialiased overflow-auto`}>
                <Providers>
                    <div className="w-[100%] md:w-[700px] m-auto">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
