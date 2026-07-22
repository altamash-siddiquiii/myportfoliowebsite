import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({ theme, toggleTheme }) {
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            aria-pressed={!isDark}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={styles.iconWrap}
                >
                    {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
