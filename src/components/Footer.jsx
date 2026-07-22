import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import { siteConfig } from "../config/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <span className={styles.brandName}>
              {siteConfig.name}
            </span>

            <span className={styles.brandTagline}>
              {siteConfig.title} · {siteConfig.subtitle}
            </span>
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

            <a
              href={siteConfig.contact.emailHref}
              aria-label="Send an email"
              className={styles.socialIcon}
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p className={styles.builtWith}>
            Built with React &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}