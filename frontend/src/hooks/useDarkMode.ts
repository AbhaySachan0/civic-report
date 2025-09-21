import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Load from localStorage or default to false
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
