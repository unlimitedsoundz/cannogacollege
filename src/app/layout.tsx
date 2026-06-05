import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AuthProvider } from "@/components/auth/AuthProvider";

// next/font/google is disabled because build-time font fetching fails in this environment.
// We use a standard Google Fonts link in the <head> instead.
const inter = { variable: "font-inter-var" };
const playfair = { variable: "font-playfair-var" };




export const metadata: Metadata = {
    metadataBase: new URL('https://cannogacollege.ca'),
    title: {
        default: "Cannoga College – Ottawa, Canada",
        template: "%s | Cannoga College"
    },
    description: "Cannoga College is a dynamic and career-focused institution located in Ottawa, Canada's capital city. The college is committed to providing high-quality education through a wide range of Diploma, Degree, and Certificate programs.",
    applicationName: "Cannoga College",
    appleWebApp: {
        title: "Cannoga College",
        statusBarStyle: "default",
        capable: true,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' }
        ]
    },

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://cannogacollege.ca',
        siteName: 'Cannoga College',
        title: 'Cannoga College – Ottawa, Canada',
        description: "Cannoga College is a dynamic and career-focused institution located in Ottawa, Canada's capital city. The college is committed to providing high-quality education through a wide range of Diploma, Degree, and Certificate programs.",
        images: [
            {
                url: '/logo-cannoga.png',
                width: 800,
                height: 600,
                alt: 'Cannoga College Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cannoga College – Ottawa, Canada',
        description: "Cannoga College is a dynamic and career-focused institution located in Ottawa, Canada's capital city. The college is committed to providing high-quality education through a wide range of Diploma, Degree, and Certificate programs.",
        images: ['/logo-cannoga.png'],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&family=Rubik:wght@300..900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/metropolis.min.css" />
                <style dangerouslySetInnerHTML={{ __html: `
                    :root {
                        --font-inter: 'Metropolis', sans-serif;
                        --font-playfair: 'Metropolis', sans-serif;
                    }
                ` }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "UniversityOrUniversity",
                            "name": "Cannoga College",
                            "description": "Cannoga College is a dynamic and career-focused institution located in Ottawa, Canada’s capital city.",
                            "alternateName": "Cannoga College Ottawa",
                            "url": "https://www.cannogacollege.ca",
                            "logo": "https://www.cannogacollege.ca/logo-cannoga.png",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "2368 Midway Ave",
                                "addressLocality": "Ottawa",
                                "postalCode": "K2B 5J8",
                                "addressRegion": "Ontario",
                                "addressCountry": "CA"
                            },
                            "location": {
                                "@type": "Place",
                                "name": "Ottawa, Canada"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/cannoga-university"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-613-727-4723",
                                "contactType": "admissions",
                                "email": "admissions@cannogacollege.ca"
                            }
                        })
                    }}
                />
            </head>

            <body className="font-sans antialiased">
                <AuthProvider>
                    <Header />
                    <main className="pt-[112px] md:pt-[148px]">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />
                </AuthProvider>
            </body>
        </html>
    );
}
