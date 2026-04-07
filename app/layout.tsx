import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud 9 Depot | Smoke Shop – Akron, OH",
  description:
    "Cloud 9 Depot – Your go-to smoke shop in Akron, Ohio. Vapes, glass, accessories, and more. Open daily 9 AM–11 PM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
