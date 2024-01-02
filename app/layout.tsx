import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

export const metadata: Metadata = {
    title: "DevQuest",
    description: "A community-driven platform for developers around th world to ask questions and share knowledge. Explore topics in web development, mobile development, data structures, algorithms and more.",
    icons: {
        icon: "/assets/images/site-logo.png",
    },
};

const inter = Inter({ subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"],
    weight: [ '300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
        appearance={{
            elements:{
                formButtonPrimary: 'primary-gradient',
                footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }}
        }>
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                {children}
            </body>
        </html>
     </ClerkProvider>
    );
}
