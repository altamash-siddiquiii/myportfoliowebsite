import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "../config/siteConfig";
import styles from "./About.module.css";

const stats = [
    { label: "Major Projects", value: "4+" },
    { label: "Certifications", value: "2" },
    { label: "Languages Spoken", value: "3" },
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <SectionHeading kicker="About" title="Who" goldWord="I Am" align="center" />

                <motion.div
                    className={styles.textBlock}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={styles.paragraph}>
                        I'm a self-taught Full Stack Developer working across the MERN
                        stack, with hands-on experience building and deploying
                        full-stack web applications — from authentication systems and
                        REST APIs to database-driven platforms.
                    </p>
                    <p className={styles.paragraph}>
                        I have a strong foundation in JavaScript, React.js, Node.js,
                        Express.js, and MongoDB, complemented by working knowledge of
                        Data Structures and Algorithms in Java. I've delivered
                        freelance projects for real clients, which sharpened my
                        adaptability, my ability to learn fast, and my problem-solving
                        skills under real deadlines.
                    </p>
                    <p className={styles.paragraph}>
                        I'm currently seeking a full-time, internship, or contract
                        opportunity where I can keep building production-ready
                        software.
                    </p>

                    <ul className={styles.infoList}>
                        <li className={styles.infoItem}>
                            <MapPin size={16} className={styles.infoIcon} />
                            {siteConfig.location}
                        </li>
                        <li className={styles.infoItem}>
                            <Mail size={16} className={styles.infoIcon} />
                            <a href={siteConfig.contact.emailHref}>
                                {siteConfig.contact.email}
                            </a>
                        </li>
                        <li className={styles.infoItem}>
                            <Phone size={16} className={styles.infoIcon} />
                            <a href={siteConfig.contact.phoneHref}>
                                {siteConfig.contact.phone}
                            </a>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className={styles.statsBlock}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.statCard}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}