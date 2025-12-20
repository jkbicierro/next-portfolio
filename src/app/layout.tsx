import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/block/navbar";
import Copyright from "@/components/block/copyright";
import Footer from "@/components/block/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const dm_font = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

const pacifico_font = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "John Bicierro",
    template: "%s - John Bicierro",
  },
  description:
    "John Bicierro is a software engineer specializing in building full-stack web applications. Explore his case studies, insights, and projects showcasing his expertise.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

  // Facebook, LinkedIn, Discord, etc
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "John Bicierro",
    description:
      "John Bicierro is a software engineer specializing in building full-stack web applications. Explore his case studies, insights, and projects showcasing his expertise.",
    siteName: "John Bicierro",
    images: [
      {
        url: "/og-image.png", // Create 1200x630px image
        width: 1200,
        height: 630,
        alt: "John Bicierro - Full Stack Developer",
      },
    ],
  },

  keywords: [
    "John Bicierro",
    "full stack developer",
    "software engineer",
    "next.js developer",
    "typescript",
    "react developer",
    "web development",
    "portfolio",
  ],

  authors: [{ name: "John Bicierro", url: "https://jkbicierro.com" }],

  creator: "John Bicierro",
  publisher: "John Bicierro",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", // 180x180px
  },

  alternates: {
    canonical: "https://jkbicierro.com",
  },

  applicationName: "John Bicierro",

  category: "technology",
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
          <Footer />

          <Toaster position="bottom-right" expand={false} richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
