import { useState, useRef, useEffect, useCallback } from 'react'
import WhaleAvatar from './WhaleAvatar.jsx'
import { Sparkline, Pill } from './components.jsx'

export default function SwipeCard({ profile, onLeft, onRight, isTop, stackPos }) {
  const cardRef = useRef(null)
  const dragState = useRef({ active: false, startX: 0, startY: 0, curX: 0 })
  const [overlayDir, setOverlayDir] = useState(null)

  const scales = [1, 0.95, 0.90]
  const translateYs = [0, 14, 28]
  const scale = scales[stackPos] || 0.88
  const ty = translateYs[stackPos] || 36
  const baseTransform = `scale(${scale}) translateY(${ty}px)`

  const getCoords = (e) => {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    return { x: e.clientX, y: e.clientY }
  }

  const onStart = useCallback((e) => {
    if (!isTop) return
    const { x, y } = getCoords(e)
    dragState.current = { active: true, startX: x, startY: y, curX: 0 }
    if (cardRef.current) cardRef.current.style.transition = 'none'
  }, [isTop])

  const onMove = useCallback((e) => {
    if (!dragState.current.active || !isTop) return
    const { x, y } = getCoords(e)
    const dx = x - dragState.current.startX
    const dy = (y - dragState.current.startY) * 0.25
    dragState.current.curX = dx
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${dx}px) translateY(${dy}px) rotate(${dx * 0.07}deg)`
    }
    if (dx > 35) setOverlayDir('right')
    else if (dx < -35) setOverlayDir('left')
    else setOverlayDir(null)
  }, [isTop])

  const onEnd = useCallback(() => {
    if (!dragState.current.active) return
    dragState.current.active = false
    const dx = dragState.current.curX
    const card = cardRef.current
    if (!card) return
    if (dx > 100) {
      card.style.transition = 'transform 0.35s ease-in, opacity 0.25s'
      card.style.transform = 'translateX(600px) rotate(20deg)'
      card.style.opacity = '0'
      setTimeout(() => onRight(profile), 300)
    } else if (dx < -100) {
      card.style.transition = 'transform 0.35s ease-in, opacity 0.25s'
      card.style.transform = 'translateX(-600px) rotate(-20deg)'
      card.style.opacity = '0'
      setTimeout(() => onLeft(profile), 300)
    } else {
      card.style.transition = 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      card.style.transform = baseTransform
      setOverlayDir(null)
    }
  }, [onLeft, onRight, profile, baseTransform])

  useEffect(() => {
    const el = cardRef.current
    if (!el || !isTop) return
    el.addEventListener('mousedown', onStart)
    el.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseup', onEnd)
    window.addEventListener('touchend', onEnd)
    return () => {
      el.removeEventListener('mousedown', onStart)
      el.removeEventListener('touchstart', onStart)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('touchend', onEnd)
    }
  }, [isTop, onStart, onMove, onEnd])

  const live = profile.live_data || {}
  const barHeights = live.bar_heights || [50, 60, 45, 70, 40, 80, 55, 65, 50, 75, 45, 85]
  const barColors  = live.bar_colors  || barHeights.map((_, i) => i % 3 === 2 ? '#FF2D78' : '#FFD700')
  const rugColor   = profile.rug_color || (profile.rugOdds >= 70 ? '#FF2D78' : profile.rugOdds >= 40 ? '#ff6400' : '#FFD700')

  return (
    <div ref={cardRef} style={{
      position: 'absolute', inset: 0, borderRadius: 20, overflow: 'hidden',
      cursor: isTop ? 'grab' : 'default', userSelect: 'none',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
      transform: baseTransform, zIndex: 10 - stackPos, willChange: 'transform',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${profile.bgFrom || '#0a0a1a'}, ${profile.bgTo || '#1a1a2e'})` }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

      <div style={{ position: 'absolute', top: 20, right: 16, zIndex: 20, border: '3px solid #00FF87', borderRadius: 8, padding: '4px 10px', transform: 'rotate(15deg)', opacity: overlayDir === 'right' ? 1 : 0, transition: 'opacity 0.1s', pointerEvents: 'none' }}>
        <span style={{ color: '#00FF87', fontSize: 16, fontWeight: 800, letterSpacing: 1 }}>BUY 💎</span>
      </div>
      <div style={{ position: 'absolute', top: 20, left: 16, zIndex: 20, border: '3px solid #FF2D78', borderRadius: 8, padding: '4px 10px', transform: 'rotate(-15deg)', opacity: overlayDir === 'left' ? 1 : 0, transition: 'opacity 0.1s', pointerEvents: 'none' }}>
        <span style={{ color: '#FF2D78', fontSize: 16, fontWeight: 800, letterSpacing: 1 }}>PASS 🗑️</span>
      </div>

      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', padding: '18px 18px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <WhaleAvatar profile={profile} animate={isTop} />
          <span style={{ fontSize: 9, color: '#60a0ff', letterSpacing: 1, background: 'rgba(0,120,255,0.18)', border: '1px solid rgba(0,120,255,0.4)', padding: '2px 8px', borderRadius: 10, display: 'inline-block', marginTop: 4 }}>✓ VERIFIED MANIPULATOR</span>
          {live.current_price && <div style={{ fontSize: 10, color: '#00FF87', marginTop: 4 }}>{live.primary_ticker}: ${live.current_price}</div>}
        </div>

        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 2 }}>{profile.name}</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{profile.handle}</div>
        <div style={{ fontSize: 12, color: '#FFD700', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 10 }}>"{profile.pickupLine}"</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
          {(profile.tags || []).map((t, i) => <Pill key={i} text={t} />)}
        </div>

        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, marginBottom: 5 }}>MARKET ACTIVITY · {profile.primaryTicker}</div>
        <Sparkline heights={barHeights} colors={barColors} />

        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, margin: '12px 0 6px' }}>DOCUMENTED MOVES</div>
        {(profile.moonHistory || []).map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, fontSize: 10 }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', flex: 1 }}>{m.asset}</span>
            <span style={{ color: m.up ? '#00FF87' : '#FF2D78', fontWeight: 700 }}>{m.move}</span>
            <span style={{ fontSize: 8, border: '1px solid #00c8ff55', color: '#00c8ff', padding: '1px 5px', borderRadius: 8 }}>{m.side}</span>
          </div>
        ))}

        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: 2 }}>RUG ODDS</span>
            <span style={{ fontSize: 10, color: rugColor, fontWeight: 700 }}>{profile.rugOdds}%</span>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${profile.rugOdds}%`, background: rugColor, borderRadius: 3, transition: 'width 0.5s' }} />
          </div>
        </div>

        {(profile.documentedMoves || profile.documented_moves)?.[0] && (() => {
          const m = (profile.documentedMoves || profile.documented_moves)[0]
          return (
            <div style={{ marginTop: 12, background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.18)', borderRadius: 10, padding: 10 }}>
              <div style={{ fontSize: 10, color: '#FFD700', fontWeight: 700, marginBottom: 4 }}>📌 {m.date} · {m.asset}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{m.move}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', marginTop: 4, fontStyle: 'italic' }}>Source: {m.source}</div>
            </div>
          )
        })()}
      </div>
    </div>
  )
}
