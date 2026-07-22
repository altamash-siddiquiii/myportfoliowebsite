// Client-side only rate limit (localStorage) — throttles casual repeat
// submissions from the same browser. It is NOT a security boundary (a
// user can clear storage or use another browser/tab); real abuse
// protection has to live server-side or on the EmailJS dashboard
// (Account → Security → set a per-hour limit).
export function checkRateLimit(storageKey, maxCalls, windowMs) {
    const now = Date.now();

    let stored;
    try {
        stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
        stored = [];
    }

    const timestamps = stored.filter((t) => now - t < windowMs);

    if (timestamps.length >= maxCalls) {
        const retryAfterMs = windowMs - (now - timestamps[0]);
        return { allowed: false, retryAfterMs: Math.max(retryAfterMs, 0) };
    }

    timestamps.push(now);
    localStorage.setItem(storageKey, JSON.stringify(timestamps));
    return { allowed: true, retryAfterMs: 0 };
}
