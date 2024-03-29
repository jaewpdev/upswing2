import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upswing",
  description: "Taking your business where you want it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className} text-stone-900`}>
        <Navigation />
        <div className="mt-[73px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
