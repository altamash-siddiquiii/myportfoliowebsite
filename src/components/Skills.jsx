import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories, softSkills } from "../data/skills";
import styles from "./Skills.module.css";

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionHeading kicker="Skills" title="Tech" goldWord="Stack" align="center" />

                <div className={styles.grid}>
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.id}
                            className={styles.card}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h3 className={styles.cardTitle}>
                                <span className={styles.cardIcon}>
                                    <i className={category.icon} aria-hidden="true" />
                                </span>
                                {category.label}
                            </h3>
                            <ul className={styles.pillList}>
                                {category.skills.map((skill) => (
                                    <li key={skill} className={styles.pill}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.softSkills}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.softLabel}>Soft Skills</span>
                    <div className={styles.softRow}>
                        {softSkills.map((skill) => (
                            <span key={skill} className={styles.softPill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}