import { motion } from "framer-motion";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, otherProjects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionHeading
                    kicker="Projects"
                    title="Featured"
                    goldWord="Work"
                    align="center"
                />

                <div className={styles.grid}>
                    {featured.map((project, i) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            index={i}
                        />
                    ))}
                </div>

                <motion.div
                    className={styles.otherBlock}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <h3 className={styles.otherHeading}>Other Projects</h3>

                    <div className={styles.otherList}>
                        {otherProjects.map((project) => (
                            <a
                                key={project.title}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.otherItem}
                            >
                                <span className={styles.otherTitle}>
                                    {project.title}
                                </span>

                                <span className={styles.otherTech}>
                                    {project.tech.join(" · ")}
                                </span>

                                <GithubIcon
                                    size={15}
                                    className={styles.otherIcon}
                                />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}