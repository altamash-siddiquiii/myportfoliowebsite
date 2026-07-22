import { useEffect, useRef, useState } from "react";

const TYPING_MS = 65;
const DELETING_MS = 35;
const PAUSE_AFTER_TYPE_MS = 1600;
const PAUSE_AFTER_DELETE_MS = 300;

// Cycles through `words`, typing and deleting one character at a time.
// Skips the animation entirely for prefers-reduced-motion users — they
// just get the first word, static.
export function useTypewriter(words) {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const [text, setText] = useState(prefersReducedMotion ? words[0] : "");
    const indexRef = useRef(0);
    const charRef = useRef(0);
    const deletingRef = useRef(false);

    useEffect(() => {
        if (prefersReducedMotion || words.length === 0) return undefined;

        let timeoutId;

        const tick = () => {
            const currentWord = words[indexRef.current % words.length];

            if (!deletingRef.current) {
                charRef.current += 1;
                setText(currentWord.slice(0, charRef.current));

                if (charRef.current === currentWord.length) {
                    deletingRef.current = true;
                    timeoutId = setTimeout(tick, PAUSE_AFTER_TYPE_MS);
                    return;
                }
                timeoutId = setTimeout(tick, TYPING_MS);
            } else {
                charRef.current -= 1;
                setText(currentWord.slice(0, charRef.current));

                if (charRef.current === 0) {
                    deletingRef.current = false;
                    indexRef.current += 1;
                    timeoutId = setTimeout(tick, PAUSE_AFTER_DELETE_MS);
                    return;
                }
                timeoutId = setTimeout(tick, DELETING_MS);
            }
        };

        timeoutId = setTimeout(tick, TYPING_MS);
        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return text;
}
