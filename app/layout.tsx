import Footer from "@/components/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800'], // for Extra-Bold
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: "OLX Clone",
  description: "Buy and Sell - OLX Clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
