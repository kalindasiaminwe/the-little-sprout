import type { Metadata } from "next";
import "./globals.css";
import { merriweather } from "@/components/ui/fonts";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "The Little Sprout",
  description:
    "The Little Sprout - Your Green Haven for Beautiful Plants and Expert Care Tips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased bg-white`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
