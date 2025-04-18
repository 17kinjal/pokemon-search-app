import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/UI/Header";
import QueryProvider from "@/lib/providers/QueryProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Search App",
  description: "Pokemon Search App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f0f0f0]`}
      >
        <Header>
          <h1 className="text-black text-xl font-bold">Pokemon Search App</h1>
        </Header>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
