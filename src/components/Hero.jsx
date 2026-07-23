import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import GoldText from "./GoldText";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import { siteConfig } from "../config/siteConfig";
import { useTypewriter } from "../hooks/useTypewriter";
import styles from "./Hero.module.css";

// Detects touch devices once, so the tilt effect never fights with
// scrolling on mobile.
const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const roles = [
  siteConfig.title,
  `${siteConfig.subtitle} Developer`,
  "Frontend Developer",
  "Backend Developer",
  "React.js Developer",
  "Node.js Developer",
].filter(Boolean);

export default function Hero() {
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const typedRole = useTypewriter(roles);

  const handleMouseMove = useCallback((e) => {
    if (isTouchDevice || !frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    // Cap rotation to a subtle range — premium, not gimmicky
    setTilt({ rx: py * -10, ry: px * 12 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <AnimatedBackground />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.kicker}>{siteConfig.location}</span>

          <h1 className={styles.heading}>
            Hi, I'm <GoldText>{siteConfig.name}</GoldText>
            <br />
            <span className={styles.typedRole}>
              {typedRole}
              <motion.span
                className={styles.cursor}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className={styles.subtext}>
            Self-taught full stack developer building authentication systems,
            REST APIs, and database-driven platforms — turning freelance
            client requirements into production-ready web applications.
          </p>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.primaryBtn}>
              View Projects
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              Get in Touch
            </a>
          </div>

          <div className={styles.socialRow}>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={styles.socialIcon}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={styles.socialIcon}
            >
              <LinkedinIcon size={18} />
            </a>

            {siteConfig.socials.whatsapp && (
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={styles.socialIcon}
              >
                <WhatsappIcon size={18} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
        >
          <div
            ref={frameRef}
            className={styles.tiltFrame}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            }}
          >
            <div className={styles.ringGlow} />

            <img
              src={siteConfig.photo}
              alt={siteConfig.name}
              className={styles.photo}
              style={{ transform: 'scaleX(-1)' }} // flip
              width={340}
              height={340}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollCue}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
