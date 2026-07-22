// Brand/logo icons via the Font Awesome CDN (loaded in index.html) —
// lucide-react dropped trademarked brand icons, and pulling in a whole
// separate npm icon package for five logos isn't worth it.
function FaIcon({ icon, size = 18, className = "" }) {
    return (
        <i
            className={`${icon} ${className}`}
            style={{ fontSize: size, lineHeight: 1 }}
            aria-hidden="true"
        />
    );
}

export function GithubIcon(props) {
    return <FaIcon icon="fa-brands fa-github" {...props} />;
}

export function LinkedinIcon(props) {
    return <FaIcon icon="fa-brands fa-linkedin" {...props} />;
}

export function WhatsappIcon(props) {
    return <FaIcon icon="fa-brands fa-whatsapp" {...props} />;
}

export function TwitterIcon(props) {
    return <FaIcon icon="fa-brands fa-x-twitter" {...props} />;
}

export function InstagramIcon(props) {
    return <FaIcon icon="fa-brands fa-instagram" {...props} />;
}
