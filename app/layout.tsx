import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Godfrey Osaki Studios",
  description: "Wedding and Portrait Photographers",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
