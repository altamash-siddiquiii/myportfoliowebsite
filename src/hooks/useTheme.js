import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "portfolio-theme";

// Reads/writes the data-theme attribute on <html> and persists the
// user's choice. Falls back to the OS preference on first visit.
export function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "dark" || stored === "light") return stored;
        const prefersLight = window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;
        return prefersLight ? "light" : "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return { theme, toggleTheme };
}
