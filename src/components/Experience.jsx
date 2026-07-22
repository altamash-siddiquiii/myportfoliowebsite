import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <SectionHeading kicker="Experience" title="Where I've" goldWord="Worked" align="center" />

                <div className={styles.timeline}>
                    {experience.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={styles.entry}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.markerCol}>
                                <span className={styles.marker}>
                                    <Briefcase size={16} />
                                </span>
                                <span className={styles.markerLine} aria-hidden="true" />
                            </div>

                            <div className={styles.content}>
                                <div className={styles.headerRow}>
                                    <h3 className={styles.role}>{item.role}</h3>
                                    <span className={styles.period}>{item.period}</span>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                                <ul className={styles.highlights}>
                                    {item.highlights.map((point) => (
                                        <li key={point} className={styles.highlightItem}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}