import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";
import styles from "./Education.module.css";

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <SectionHeading kicker="Education" title="Academic" goldWord="Background" align="center" />

                <div className={styles.grid}>
                    {education.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={styles.icon}>
                                {item.type === "certification" ? (
                                    <Award size={18} />
                                ) : (
                                    <GraduationCap size={18} />
                                )}
                            </span>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.institution}>{item.institution}</p>
                                <div className={styles.metaRow}>
                                    <span>{item.meta}</span>
                                    <span className={styles.year}>{item.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}