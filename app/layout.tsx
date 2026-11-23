import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const syne = localFont({
  variable: "--font-syne",
  display: "swap",
  src: [
    { path: "./fonts/Syne-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Syne-Semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Syne-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Syne-Extrabold.ttf", weight: "800", style: "normal" },
  ],
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
