import WhaleAvatar from './WhaleAvatar.jsx'

export default function MatchScreen({ profile, onBuy, onPass }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.95)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px 20px',
      animation: 'match-pop 0.4s ease-out',
    }}>
      <WhaleAvatar profile={profile} size={100} />

      <div style={{
        fontFamily: "'Syne', sans-serif", fontSize: 30, fontWeight: 800,
        background: 'linear-gradient(90deg, #FF2D78, #FFD700)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        marginBottom: 4,
      }}>IT'S A MATCH!</div>

      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: 1, textAlign: 'center', marginBottom: 14 }}>
        YOU AND {profile.name.toUpperCase()} ARE ABOUT TO GET WRECKED TOGETHER
      </div>

      <div style={{ fontSize: 13, color: '#FFD700', fontStyle: 'italic', textAlign: 'center', maxWidth: 300, lineHeight: 1.6, marginBottom: 14 }}>
        {profile.matchMessage}
      </div>

      <div style={{ width: '100%', maxWidth: 360, background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: 12, padding: '12px 16px', marginBottom: 20 }}>
        <div style={{ fontSize: 10, color: '#FFD700', letterSpacing: 1, marginBottom: 8 }}>⚖️ REGULATORY RAP SHEET</div>
        {(profile.regulatoryActions || profile.regulatory_actions || []).slice(0, 3).map((r, i) => (
          <div key={i} style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 2 }}>• {r}</div>
        ))}
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', marginTop: 6, fontStyle: 'italic' }}>
          {profile.matchEvidence || profile.match_evidence}
        </div>
      </div>

      <button onClick={() => onBuy(profile)} style={{
        padding: '13px 36px',
        background: 'linear-gradient(90deg, #FF2D78, #FFD700)',
        border: 'none', borderRadius: 30,
        fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 800,
        color: '#000', cursor: 'pointer', letterSpacing: 0.5, marginBottom: 10,
      }}>
        💸 REPLY (MEANS BUY)
      </button>

      <button onClick={onPass} style={{
        background: 'none', border: 'none',
        color: 'rgba(255,255,255,0.25)', fontSize: 12,
        cursor: 'pointer', fontFamily: "'Space Mono', monospace",
      }}>
        I'm a law-abiding coward
      </button>
    </div>
  )
}
