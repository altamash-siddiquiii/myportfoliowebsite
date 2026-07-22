import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { siteConfig, navLinks } from "../config/siteConfig";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Adds a subtle elevated/blurred background once the user scrolls
    // past the hero, instead of the navbar sitting flat the whole time.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const handleLinkClick = () => setMobileOpen(false);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={`container ${styles.inner}`} aria-label="Primary">
                <a href="#top" className={styles.brand} aria-label={`${siteConfig.name} — home`}>
                    <span className={styles.avatarRing}>
                        <img
                            src={siteConfig.photo}
                            alt={siteConfig.name}
                            className={styles.avatar}
                            width={36}
                            height={36}
                        />
                    </span>
                    <span className={styles.brandName}>
                        {siteConfig.name.split(" ")[0]}
                    </span>
                </a>

                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={styles.link}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/resume" className={styles.resumeLink}>
                            Resume
                        </a>
                    </li>
                </ul>

                <div className={styles.actions}>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                    <button
                        type="button"
                        className={styles.menuBtn}
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={styles.mobileMenu}
                    >
                        <ul className={styles.mobileLinks}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={handleLinkClick} className={styles.mobileLink}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="/resume" onClick={handleLinkClick} className={styles.mobileLink}>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
