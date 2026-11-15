import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext();
const THEME_STORAGE_KEY = "crypto-theme";

const getSavedTheme = () => {
  if (typeof window === "undefined") return null;

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
};

const getSystemTheme = () => {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeProvider({ children }) {
  const [savedTheme, setSavedTheme] = useState(getSavedTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const theme = savedTheme ?? systemTheme;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (savedTheme || !window.matchMedia) return undefined;

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    colorScheme.addEventListener("change", updateSystemTheme);
    return () => colorScheme.removeEventListener("change", updateSystemTheme);
  }, [savedTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setSavedTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
