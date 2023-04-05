"use client";

import { useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  return "dark";
};

const toggleTheme = (t: Theme): Theme => t === "dark" ? "light" : "dark";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());
  const toggle = () => {
    setTheme(toggleTheme);
    document.documentElement.dataset.mode = toggleTheme(theme);
  };

  return (
    <button onClick={toggle} className="rounded-xl cursor-pointer bg-froggy-200 text-froggy-900 dark:text-froggy-50 dark:bg-froggy-900 px-8 py-4">
      Toggle theme
    </button>
  );
};

export default ThemeToggle;
