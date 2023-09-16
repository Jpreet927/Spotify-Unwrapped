"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotify Unwrapped",
    description:
        "A website where you can view your Spotify listening habits without having to wait for the end of the year.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
