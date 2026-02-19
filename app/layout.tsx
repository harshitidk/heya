import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { NavBar } from "@/components/NavBar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

export const metadata: Metadata = {
  title: "Harshit - Portfolio",
  description: "Harshit is a performative designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body
        className={cn(
          "antialiased bg-background text-foreground font-sans relative"
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
