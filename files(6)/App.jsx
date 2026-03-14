import { useState, useEffect } from 'react'
import { fetchFeed, logSwipe } from './api.js'
import { Bubbles } from './components.jsx'
import SwipeCard from './SwipeCard.jsx'
import MatchScreen from './MatchScreen.jsx'

export default function App() {
  const [feed,    setFeed]    = useState([])
  const [idx,     setIdx]     = useState(0)
  const [match,   setMatch]   = useState(null)
  const [counts,  setCounts]  = useState({ likes: 0, passes: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeed().then(data => { setFeed(data); setLoading(false) })
  }, [])

  const handleRight = (p) => {
    logSwipe(p.id, 'right')
    setCounts(c => ({ ...c, likes: c.likes + 1 }))
    setMatch(p)
  }

  const handleLeft = (p) => {
    logSwipe(p.id, 'left')
    setCounts(c => ({ ...c, passes: c.passes + 1 }))
    setIdx(i => i + 1)
  }

  const handleBuy = (p) => {
    // TODO: affiliate link / portfolio add / analytics event
    console.log(`💸 BUY INTENT → ${p.name} (${p.primaryTicker})`)
    setMatch(null)
    setIdx(i => i + 1)
  }

  const handlePassMatch = () => { setMatch(null); setIdx(i => i + 1) }
  const resetDeck = () => { setIdx(0); setFeed(f => [...f].sort(() => Math.random() - 0.5)) }

  const cards    = feed.slice(idx, idx + 3)
  const hasCards = cards.length > 0

  return (
    <div style={{
      height: '100dvh', width: '100%',
      background: 'linear-gradient(160deg, #0D0D1A 0%, #1A0D2E 50%, #0D1A1A 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      overflow: 'hidden', position: 'relative', padding: '0 16px',
    }}>
      <Bubbles />

      <div style={{ zIndex: 10, textAlign: 'center', paddingTop: 'max(20px, env(safe-area-inset-top))', marginBottom: 8 }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, background: 'linear-gradient(90deg, #FF2D78, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: 1, display: 'inline-block', animation: 'bob 3s ease-in-out infinite' }}>
          🐋 WHALETINDER
        </div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, marginTop: 1 }}>REPLY MEANS BUY™ · SMART PEOPLE WHO DO DUMB SHIT</div>
        <div style={{ fontSize: 8, color: 'rgba(255,215,0,0.4)', marginTop: 2 }}>⚠️ Satire · Not financial advice · Do your own research</div>
      </div>

      <div style={{ display: 'flex', gap: 20, zIndex: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>✅ <b style={{ color: '#fff' }}>{counts.likes}</b> liked</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>❌ <b style={{ color: '#fff' }}>{counts.passes}</b> passed</span>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 400, flex: 1, zIndex: 10, minHeight: 0 }}>
        {loading && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ fontSize: 48 }}>🐋</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', animation: 'bob 1.5s ease-in-out infinite' }}>Summoning whale dossiers...</div>
          </div>
        )}

        {!loading && !hasCards && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center' }}>
            <div style={{ fontSize: 52 }}>🌊</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>You've seen all the whales.</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', maxWidth: 240 }}>The manipulation continues regardless of your awareness of it.</div>
            <button onClick={resetDeck} style={{ marginTop: 8, padding: '8px 20px', background: 'rgba(255,45,120,0.15)', border: '2px solid #FF2D78', borderRadius: 20, color: '#FF2D78', cursor: 'pointer', fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
              🔄 Reshuffle the Oligarchy
            </button>
          </div>
        )}

        {!loading && hasCards && [...cards].reverse().map((p, i) => {
          const stackPos = cards.length - 1 - i
          return (
            <SwipeCard
              key={p.id + idx}
              profile={p}
              isTop={stackPos === 0}
              stackPos={stackPos}
              onLeft={handleLeft}
              onRight={handleRight}
            />
          )
        })}
      </div>

      {!loading && hasCards && !match && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', zIndex: 10, paddingBottom: 'max(20px, env(safe-area-inset-bottom))', marginTop: 8 }}>
          <button onClick={() => handleLeft(cards[0])}  style={btnStyle('#FF2D78', 56)} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>✕</button>
          <button onClick={() => { logSwipe(cards[0].id, 'super'); setCounts(c => ({ ...c, likes: c.likes + 1 })); setMatch(cards[0]) }} style={btnStyle('#FFD700', 44)} title="Full dossier" onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>🕵️</button>
          <button onClick={() => handleRight(cards[0])} style={btnStyle('#00FF87', 56)} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>♥</button>
        </div>
      )}

      {match && <MatchScreen profile={match} onBuy={handleBuy} onPass={handlePassMatch} />}
    </div>
  )
}

const btnStyle = (color, size) => ({
  width: size, height: size, borderRadius: '50%',
  border: `2px solid ${color}`, background: `${color}26`,
  fontSize: size > 50 ? 22 : 18, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'transform 0.15s',
})
