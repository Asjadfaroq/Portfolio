import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeroBackground from "@/components/HeroBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Asjad Farooq | Full-Stack Engineer",
  description:
    "Asjad Farooq - Experienced Full-Stack Engineer with .NET and MERN stack expertise. Next.js, React, Node.js, ASP.NET Core. Portfolio, projects, tech stack, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Global background for the entire app */}
        <HeroBackground />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
