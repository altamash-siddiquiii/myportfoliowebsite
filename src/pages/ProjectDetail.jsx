import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import SEOHead from "../components/SEOHead";
import { getProjectSchema } from "../data/personSchema";
import { projects } from "../data/projects";
import { siteConfig } from "../config/siteConfig";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className={styles.page}>
      <SEOHead
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        jsonLd={getProjectSchema(project, siteConfig.siteUrl)}
      />

      <div className={`container ${styles.inner}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/#projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <header className={styles.header}>
            <span className={styles.tagline}>{project.tagline}</span>

            <h1 className={styles.title}>{project.title}</h1>

            <p className={styles.summary}>{project.summary}</p>

            <ul className={styles.techList}>
              {project.tech.map((t) => (
                <li key={t} className={styles.techPill}>
                  {t}
                </li>
              ))}
            </ul>

            <div className={styles.linkRow}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                <GithubIcon size={16} />
                View Code
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </header>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Overview</h2>
            <p className={styles.blockText}>{project.overview}</p>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Key Features</h2>

            <ul className={styles.featureList}>
              {project.keyFeatures.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Architecture &amp; Approach</h2>
            <p className={styles.blockText}>{project.architecture}</p>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Challenges &amp; Solutions</h2>

            <div className={styles.challengeList}>
              {project.challenges.map((item, i) => (
                <div key={i} className={styles.challengeCard}>
                  <div className={styles.challengeRow}>
                    <span className={styles.challengeLabel}>Challenge</span>
                    <p className={styles.challengeText}>
                      {item.challenge}
                    </p>
                  </div>

                  <div className={styles.challengeRow}>
                    <span className={styles.solutionLabel}>Solution</span>
                    <p className={styles.challengeText}>
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}