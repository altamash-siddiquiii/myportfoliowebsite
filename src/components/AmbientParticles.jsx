import styles from "./AmbientParticles.module.css";

// Fixed, hand-placed positions (not random) so there's no layout shift
// and the same look on every load. Pure CSS animation (transform/opacity
// only) — cheap enough to run behind the whole site, not just the Hero.
const DOTS = [
    { top: "8%", left: "12%", size: 5, duration: 18, delay: 0 },
    { top: "18%", left: "82%", size: 3, duration: 14, delay: 1.5 },
    { top: "32%", left: "6%", size: 4, duration: 20, delay: 3 },
    { top: "44%", left: "92%", size: 6, duration: 16, delay: 0.5 },
    { top: "58%", left: "22%", size: 3, duration: 22, delay: 4 },
    { top: "67%", left: "70%", size: 5, duration: 15, delay: 2 },
    { top: "78%", left: "10%", size: 4, duration: 19, delay: 1 },
    { top: "86%", left: "88%", size: 3, duration: 17, delay: 3.5 },
    { top: "95%", left: "45%", size: 5, duration: 21, delay: 2.5 },
    { top: "24%", left: "48%", size: 3, duration: 13, delay: 0.8 },
];

// Ambient dots drifting behind the entire site (not just the Hero) —
// mounted once in App.jsx, fixed/full-viewport, purely decorative.
export default function AmbientParticles() {
    return (
        <div className={styles.wrapper} aria-hidden="true">
            {DOTS.map((dot, i) => (
                <span
                    key={i}
                    className={styles.dot}
                    style={{
                        top: dot.top,
                        left: dot.left,
                        width: dot.size,
                        height: dot.size,
                        animationDuration: `${dot.duration}s`,
                        animationDelay: `${dot.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
