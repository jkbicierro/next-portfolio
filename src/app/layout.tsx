import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/block/navbar";
import Copyright from "@/components/block/copyright";

const dm_font = DM_Sans({
    variable: "--font-dm",
});

const pacifico_font = Pacifico({
    weight: "400",
    variable: "--font-pacifico",
});

export const metadata: Metadata = {
    title: "Jeck",
    description: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dm_font.variable} ${pacifico_font.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavBar />
                    {children}
                    <Copyright />
                </ThemeProvider>
            </body>
        </html>
    );
}
