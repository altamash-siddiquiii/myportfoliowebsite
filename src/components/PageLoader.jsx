import styles from "./PageLoader.module.css";

// Minimal fallback shown briefly during route-level code splitting.
export default function PageLoader() {
    return (
        <div className={styles.wrap} role="status" aria-label="Loading page">
            <span className={styles.ring} />
        </div>
    );
}