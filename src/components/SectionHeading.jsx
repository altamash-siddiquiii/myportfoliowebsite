import { motion } from "framer-motion";
import GoldText from "./GoldText";
import styles from "./SectionHeading.module.css";

// Shared heading pattern used by About, Skills, Experience, Projects,
// Contact etc. — keeps the "kicker + title" layout identical across
// every section instead of re-implementing it each time.
export default function SectionHeading({ kicker, title, goldWord, align = "left" }) {
    return (
        <motion.div
            className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {kicker && <span className={styles.kicker}>{kicker}</span>}
            <h2 className={styles.title}>
                {title} {goldWord && <GoldText>{goldWord}</GoldText>}
            </h2>
        </motion.div>
    );
}