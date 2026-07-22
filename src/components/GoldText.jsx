// Small reusable wrapper so any heading/word can get the shimmer effect
// without repeating the className logic everywhere.
export default function GoldText({ as: Tag = "span", children, className = "" }) {
    return <Tag className={`gold-shimmer ${className}`}>{children}</Tag>;
}
