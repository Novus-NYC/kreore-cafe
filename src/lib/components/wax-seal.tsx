/**
 * A small, static wax seal in deep rose with a K, like the seal on Kreore's blush invitations.
 * Decorative: the card it sits on carries the text.
 */
export function WaxSeal({ className = "" }: { className?: string }) {
  // A softly scalloped rim so it reads as pressed wax, not a flat badge.
  const rim = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2
    const r = i % 2 === 0 ? 47 : 44.5
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`
  }).join(" ")
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={className}>
      <polygon points={rim} fill="#9C3D57" strokeLinejoin="round" stroke="#9C3D57" strokeWidth="4" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#C27389" strokeWidth="1.5" />
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#F6DDE3"
        style={{ fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 600, fontSize: 46 }}
      >
        K
      </text>
    </svg>
  )
}
