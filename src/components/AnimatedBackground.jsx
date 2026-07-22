import { motion } from "framer-motion";
import styles from "./AnimatedBackground.module.css";

// Ambient, cinematic backdrop for the Hero — layered blurred radial
// gradient "blobs" that drift slowly. Kept in its own component so the
// hero background is a one-file swap if an image is used later instead.
export default function AnimatedBackground() {
    return (
        <div className={styles.wrapper} aria-hidden="true">
            <motion.div
                className={`${styles.blob} ${styles.blobOne}`}
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 20, 0],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className={`${styles.blob} ${styles.blobTwo}`}
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 40, -25, 0],
                }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className={`${styles.blob} ${styles.blobThree}`}
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, -20, 30, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className={styles.grain} />
        </div>
    );
}