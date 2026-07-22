import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";
import GoldText from "../components/GoldText";
import SEOHead from "../components/SEOHead";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles.page}>
            <SEOHead
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
                path="/404"
                noindex
            />
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.code}>
                        4<GoldText>0</GoldText>4
                    </span>
                    <h1 className={styles.title}>Page Not Found</h1>
                    <p className={styles.text}>
                        The page you're looking for doesn't exist or may have moved.
                    </p>
                    <Link to="/" className={styles.homeLink}>
                        <HomeIcon size={16} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}