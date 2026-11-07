"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const currentTheme =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;
    window.localStorage.setItem("gop-theme", nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
      className="theme-toggle flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-current/25 transition-colors hover:bg-current/10"
    >
      <FiMoon aria-hidden="true" className="theme-toggle-moon" size={18} />
      <FiSun aria-hidden="true" className="theme-toggle-sun" size={18} />
    </button>
  );
}
