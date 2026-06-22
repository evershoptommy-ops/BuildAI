'use client'
import { useState } from 'react'

export default function CheckoutButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    const res = await fetch('/api/checkout', { method: 'POST' })
    const { url } = await res.json()
    if (url) window.location.href = url
    else setLoading(false)
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
      style={{
        background: loading ? '#5b21b6' : '#7c3aed',
        border: 'none', color: '#fff', borderRadius: 10,
        padding: '12px 24px', fontSize: 15, fontWeight: 600,
        cursor: loading ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}
    >
      {loading ? '⏳ Laden...' : '💎 Nu upgraden — €97'}
    </button>
  )
}
