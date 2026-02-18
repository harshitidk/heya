import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body
        className={cn(
          bricolage.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
