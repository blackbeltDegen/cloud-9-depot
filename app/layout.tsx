import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cloud 9 Depot | Smoke Shop – Akron, OH",
  description:
    "Cloud 9 Depot – Your go-to smoke shop in Akron, Ohio. Vapes, glass, accessories, and more. Open daily 9 AM–11 PM.",
  keywords: "smoke shop, vape shop, Akron Ohio, Cloud 9 Depot, vapes, glass pipes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
