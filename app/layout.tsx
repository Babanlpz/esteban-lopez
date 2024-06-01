import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Esteban Lopez - Software Engineer",
  description:
    "Développeur web front-end ReactJs, NextJs, TailwindCss, TypeScript",
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
          GeistSans.variable,
          AnekTelugu,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
