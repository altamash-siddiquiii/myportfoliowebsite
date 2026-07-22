import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { WhatsappIcon } from "./BrandIcons";
import { siteConfig } from "../config/siteConfig";
import { checkRateLimit } from "../utils/rateLimit";
import styles from "./Contact.module.css";

// Max contact-form submissions allowed per browser per time window.
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_KEY = "contact-form-sends";

// EmailJS config — only the PUBLIC key ever lives in frontend code.
// Create a free account at emailjs.com, set up a service + template,
// then set these three in your .env file. Never put a private/API
// secret key here.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const STATUS = {
    IDLE: "idle",
    SENDING: "sending",
    SUCCESS: "success",
    ERROR: "error",
    RATE_LIMITED: "rate_limited",
};

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [retrySeconds, setRetrySeconds] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot check — bots fill every field including hidden ones;
        // real users never see or fill this field.
        const honeypot = formRef.current.elements.namedItem("company_website");
        if (honeypot && honeypot.value) {
            return; // silently drop, no error shown to the (bot) submitter
        }

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error(
                "EmailJS is not configured — set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env"
            );
            setStatus(STATUS.ERROR);
            return;
        }

        const { allowed, retryAfterMs } = checkRateLimit(
            RATE_LIMIT_KEY,
            RATE_LIMIT_MAX,
            RATE_LIMIT_WINDOW_MS
        );
        if (!allowed) {
            setRetrySeconds(Math.ceil(retryAfterMs / 1000));
            setStatus(STATUS.RATE_LIMITED);
            return;
        }

        setStatus(STATUS.SENDING);

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setStatus(STATUS.SUCCESS);
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS send failed:", err);
            setStatus(STATUS.ERROR);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <SectionHeading kicker="Contact" title="Let's" goldWord="Connect" align="center" />

                <div className={styles.grid}>
                    <motion.div
                        className={styles.infoCol}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={styles.intro}>
                            I'm currently open to full-time, internship, or contract
                            opportunities. Whether you have a project in mind or just want
                            to say hello, feel free to reach out.
                        </p>

                        <ul className={styles.infoList}>
                            <li className={styles.infoItem}>
                                <span className={styles.infoIcon}>
                                    <Mail size={18} />
                                </span>
                                <div>
                                    <span className={styles.infoLabel}>Email</span>
                                    <a href={siteConfig.contact.emailHref} className={styles.infoValue}>
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoIcon}>
                                    <Phone size={18} />
                                </span>
                                <div>
                                    <span className={styles.infoLabel}>Phone</span>
                                    <a href={siteConfig.contact.phoneHref} className={styles.infoValue}>
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </li>
                            {siteConfig.socials.whatsapp && (
                                <li className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <WhatsappIcon size={18} />
                                    </span>
                                    <div>
                                        <span className={styles.infoLabel}>WhatsApp</span>
                                        <a
                                            href={siteConfig.socials.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.infoValue}
                                        >
                                            Message me directly
                                        </a>
                                    </div>
                                </li>
                            )}
                            <li className={styles.infoItem}>
                                <span className={styles.infoIcon}>
                                    <MapPin size={18} />
                                </span>
                                <div>
                                    <span className={styles.infoLabel}>Location</span>
                                    <span className={styles.infoValue}>{siteConfig.location}</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className={styles.form}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Honeypot field — hidden from real users via CSS, not
                type="hidden", since some bots skip hidden inputs. */}
                        <div className={styles.honeypotField} aria-hidden="true">
                            <label htmlFor="company_website">Company Website</label>
                            <input
                                type="text"
                                id="company_website"
                                name="company_website"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className={styles.fieldRow}>
                            <div className={styles.field}>
                                <label htmlFor="from_name" className={styles.label}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    required
                                    className={styles.input}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="reply_to" className={styles.label}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="reply_to"
                                    name="reply_to"
                                    required
                                    className={styles.input}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="subject" className={styles.label}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className={styles.input}
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message" className={styles.label}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className={styles.textarea}
                                placeholder="Tell me a bit about your project or opportunity..."
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === STATUS.SENDING}
                        >
                            {status === STATUS.SENDING ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <Send size={16} />
                                </>
                            )}
                        </button>

                        {status === STATUS.SUCCESS && (
                            <p className={styles.statusSuccess}>
                                <CheckCircle2 size={16} />
                                Message sent — I'll get back to you soon.
                            </p>
                        )}
                        {status === STATUS.RATE_LIMITED && (
                            <p className={styles.statusError}>
                                <AlertCircle size={16} />
                                Too many messages sent — please wait {retrySeconds}s and try
                                again, or reach out via WhatsApp/email directly.
                            </p>
                        )}
                        {status === STATUS.ERROR && (
                            <p className={styles.statusError}>
                                <AlertCircle size={16} />
                                Something went wrong. Please try emailing me directly.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}