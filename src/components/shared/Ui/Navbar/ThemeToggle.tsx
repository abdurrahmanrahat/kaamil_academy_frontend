"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      id="darkToggle"
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
