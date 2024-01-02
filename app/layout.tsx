import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DevQuest",
    description: "A place to ask questions and get answers about software development.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
     </ClerkProvider>
    );
}
