import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileWarning } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import SEOHead from "../components/SEOHead";
import styles from "./Resume.module.css";

export default function Resume() {
  // Tracks whether the iframe failed to load the PDF (e.g. the file
  // hasn't been dropped into /public/resume/ yet, or the browser
  // blocks inline PDF rendering). Shows a graceful fallback instead
  // of a blank/broken iframe.
  const [previewFailed, setPreviewFailed] = useState(false);

  const resumeUrl = siteConfig.resume.pdfPath;

  return (
    <main className={styles.page}>
      <SEOHead
        title="Resume"
        description={`View and download ${siteConfig.name}'s resume — ${siteConfig.title}.`}
        path="/resume"
      />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.kicker}>Resume</span>

          <h1 className={styles.title}>{siteConfig.name}</h1>

          <p className={styles.subtitle}>
            {siteConfig.title} ({siteConfig.contact.email})
          </p>

          <div className={styles.actions}>
            <a
              href={resumeUrl}
              download={siteConfig.resume.fileName}
              className={styles.downloadBtn}
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              <ExternalLink size={16} />
              Open in New Tab
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.previewWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {!previewFailed ? (
            <iframe
              src={resumeUrl}
              title={`${siteConfig.name} Resume Preview`}
              className={styles.iframe}
              onError={() => setPreviewFailed(true)}
            >
              {/* Fallback content for browsers that don't support
                  iframe PDF rendering at all (rare, but graceful). */}
              <p className={styles.fallbackText}>
                Your browser doesn't support embedded PDF preview.{" "}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the resume directly
                </a>
                .
              </p>
            </iframe>
          ) : (
            <div className={styles.previewError}>
              <FileWarning
                size={32}
                className={styles.errorIcon}
              />

              <p className={styles.errorText}>
                Preview unavailable. Use the buttons above to download or
                open the resume in a new tab.
              </p>
            </div>
          )}

          {/* Mobile notice — inline PDF preview is unreliable on many
              mobile browsers, so we point users to the fallback buttons. */}
          <p className={styles.mobileNotice}>
            On mobile, if the preview doesn't render, use "Open in New Tab"
            above for the best viewing experience.
          </p>
        </motion.div>
      </div>
    </main>
  );
}