import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./layout.scss";

const sans = Nunito_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
});

const display = Nunito({
    variable: "--font-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tablet",
    description: "Tablet.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} ${display.variable}`}>{children}</body>
        </html>
    );
}
