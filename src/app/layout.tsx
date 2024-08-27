import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "corporate",
  description:
    "Welcome to our corporate site, where we provide top-notch services to our clients. Our team of experts is dedicated to delivering exceptional results and exceeding client expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
