import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relearning Next.js",
  description: "Relearning Next.js with Vercel",
  keywords: ["next.js", "react", "javascript", "typescript", "vercel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex-col justify-center mb-4 bg-gray-100 dark:bg-gray-900 py-8">
          <div className="flex justify-center gap-4">
            <h1 className="text-2xl font-bold text-center p-4">
              This is part of the layout
            </h1>
          </div>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
