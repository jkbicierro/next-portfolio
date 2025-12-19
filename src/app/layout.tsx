import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/block/navbar";
import Copyright from "@/components/block/copyright";
import Footer from "@/components/block/footer";
import { Toaster } from "sonner";

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
  title: "John Bicierro",
  description:
    "John Bicierro's personal website showcasing projects and blog posts.",
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
        </ThemeProvider>

        <Toaster position="bottom-right" expand={false} richColors />
      </body>
    </html>
  );
}
