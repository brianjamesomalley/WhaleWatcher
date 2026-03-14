// components.jsx — small shared UI pieces

export function Bubbles() {
  const bs = Array.from({ length: 14 }, (_, i) => ({
    size: 6 + (i * 9) % 22,
    left: (i * 19 + 7) % 100,
    delay: (i * 0.8) % 9,
    dur: 7 + (i * 1.4) % 7,
  }))
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {bs.map((b, i) => (
        <div key={i} style={{
          position: 'absolute', bottom: '-40px', left: `${b.left}%`,
          width: b.size, height: b.size, borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.18)',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent)',
          animation: `rise ${b.dur}s ${b.delay}s infinite ease-in`,
        }} />
      ))}
    </div>
  )
}

export function Sparkline({ heights = [], colors = [] }) {
  if (!heights.length) return null
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 40 }}>
      {heights.map((h, i) => (
        <div key={i} style={{
          flex: 1,
          height: Math.max(3, (h / 100) * 38),
          borderRadius: '2px 2px 0 0',
          background: colors[i] || '#FFD700',
          opacity: 0.75,
          transition: 'height 0.3s',
        }} />
      ))}
    </div>
  )
}

export function Pill({ text }) {
  const isRed  = text.includes('fine') || text.includes('Short') || text.includes('spoof')
  const isGold = text.includes('AUM')  || text.includes('$')     || text.includes('supply')
  const color  = isRed ? '#FF2D78' : isGold ? '#FFD700' : '#00c8ff'
  return (
    <span style={{
      padding: '2px 8px', borderRadius: 20, fontSize: 9, fontWeight: 700,
      background: `${color}18`, border: `1px solid ${color}55`, color,
      whiteSpace: 'nowrap', letterSpacing: 0.3,
    }}>{text}</span>
  )
}
