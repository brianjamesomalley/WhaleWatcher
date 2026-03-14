import { PROFILES } from './profiles.js'

// In dev: Vite proxies /api → localhost:5000
// In prod: set VITE_API_URL in Vercel env vars
export const API = import.meta.env.VITE_API_URL || ''

export async function fetchFeed() {
  try {
    const r = await fetch(`${API}/api/feed`)
    if (!r.ok) throw new Error('API down')
    return await r.json()
  } catch {
    // No backend? Falls back to static profiles. Nothing breaks.
    return [...PROFILES].sort(() => Math.random() - 0.5)
  }
}

export async function logSwipe(profileId, direction) {
  try {
    await fetch(`${API}/api/swipe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profile_id: profileId, direction }),
    })
  } catch { /* silent */ }
}
