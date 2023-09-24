import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/home/LayoutClient";

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
                <LayoutClient>{children}</LayoutClient>
            </body>
        </html>
    );
}
