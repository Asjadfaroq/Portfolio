import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Asjad Farooq | Full-Stack Developer",
  description:
    "Asjad Farooq - Full-Stack Developer specializing in Next.js, React, and Node.js. Portfolio showcasing projects, tech stack, GitHub activity, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
