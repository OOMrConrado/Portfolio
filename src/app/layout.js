import "./globals.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";

export const metadata = {
    title: `${seo.title}`,
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
    icons: {
        icon: { url: "/images/CG.png", sizes: "512x512", type: "image/png" },
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
