// WhaleAvatar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// TODO: plug your image generator in here.
//
// profile.id        e.g. "blackrock", "tether", "softbank"
// profile.imageUrl  set this on the profile object once you have generated URLs
// profile.emoji     fallback when no image exists yet
//
// Plug-in options (pick one):
//   A) Static files  → drop PNGs in /public/avatars/
//                      set imageUrl: `/avatars/${id}.png` in profiles.js
//   B) Cloudinary    → imageUrl: `https://res.cloudinary.com/YOUR_CLOUD/image/upload/${id}.png`
//   C) API-generated → fetch(`/api/avatar/${profile.id}`) returns { url }
//                      add the endpoint to api.py in the backend
//   D) DALL-E / Replicate → same as C, swap out the backend logic
//
// Until imageUrl is set on a profile, falls back to emoji. Nothing breaks.
// ─────────────────────────────────────────────────────────────────────────────

export default function WhaleAvatar({ profile, size = 80, animate = false }) {
  const circle = {
    width: size, height: size, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 8px',
    animation: animate ? 'bob 3s ease-in-out infinite' : 'none',
  }

  if (profile.imageUrl) {
    return (
      <img
        src={profile.imageUrl}
        alt={profile.name}
        style={{ ...circle, objectFit: 'cover', border: '2px solid rgba(255,255,255,0.15)', display: 'block' }}
      />
    )
  }

  // Emoji fallback
  return (
    <div style={{ ...circle, background: 'rgba(255,255,255,0.06)', fontSize: size * 0.5 }}>
      {profile.emoji}
    </div>
  )
}
