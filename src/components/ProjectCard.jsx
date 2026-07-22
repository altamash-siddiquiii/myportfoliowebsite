import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index = 0 }) {
    return (
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
        >
            <div className={styles.thumb} aria-hidden="true">
                <span className={styles.thumbLabel}>
                    {project.title.charAt(0)}
                </span>
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>

                <p className={styles.tagline}>{project.tagline}</p>

                <p className={styles.summary}>{project.summary}</p>

                <ul className={styles.techList}>
                    {project.tech.map((t) => (
                        <li key={t} className={styles.techPill}>
                            {t}
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <Link
                        to={`/projects/${project.slug}`}
                        className={styles.detailLink}
                    >
                        View Case Study
                        <ArrowUpRight size={15} />
                    </Link>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        aria-label={`${project.title} GitHub repository`}
                    >
                        <GithubIcon size={17} />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}