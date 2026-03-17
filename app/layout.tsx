import type { Metadata } from "next";
import { Bricolage_Grotesque, Bowlby_One_SC, Poppins, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { NavBar } from "@/components/NavBar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import ClientBody from "@/components/ClientBody";
import { ThemeProvider } from "@/components/ThemeContext";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const bowlby = Bowlby_One_SC({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nanum = Nanum_Pen_Script({
  variable: "--font-nanum",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Harshit - Portfolio",
  description: "Portfolio of Harshit Saidaniya, a product designer who vibe codes for fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${bowlby.variable} ${poppins.variable} ${nanum.variable} bg-[#FDFDFD]`}>
      <body
        className={cn(
          "antialiased bg-[#FDFDFD] text-foreground font-sans relative"
        )}
      >
        <ThemeProvider>
          <ClientBody>
            <ThemeSwitcher />
            <NavBar />
            {children}
          </ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
