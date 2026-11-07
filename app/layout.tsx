import type { Metadata } from "next";
import Script from "next/script";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godfrey Osaki Studios | Wedding & Portrait Photography",
  description:
    "Wedding and portrait photography in Lagos, Nigeria. Emmanuel and Onella create timeless images shaped by connection, creativity and trust.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-paper font-sans text-ink">
        {children}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            var savedTheme = localStorage.getItem("gop-theme");
            if (savedTheme === "light" || savedTheme === "dark") {
              document.documentElement.dataset.theme = savedTheme;
            }
          } catch {
            document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
          }`}
        </Script>
      </body>
    </html>
  );
}
