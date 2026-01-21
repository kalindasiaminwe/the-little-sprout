import type { Metadata } from "next";
import "./globals.css";
import {  merriweather } from "@/components/ui/fonts";
import Navbar from "@/components/navbar";




export const metadata: Metadata = {
  title: "The Little Sprout",
  description: "The Little Sprout - Your Green Haven for Beautiful Plants and Expert Care Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${merriweather.className} antialiased bg-white`}
      >
        <Navbar  />
        {children}
      </body>
    </html>
  );
}
