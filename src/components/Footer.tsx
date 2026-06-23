'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
    if (res.ok) {
      setStatus('sent')
      setName(''); setEmail(''); setMessage('')
    } else {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Contact sectie */}
      <section style={{ borderTop: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Heb je een vraag?</h2>
          <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 32 }}>We reageren binnen 24 uur.</p>

          {status === 'sent' ? (
            <div style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 14, padding: '24px 28px', color: '#c4b5fd' }}>
              ✓ Bericht verzonden. We nemen zo snel mogelijk contact op.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontSize: 13, color: '#9ca3af', display: 'block', marginBottom: 6 }}>Naam</label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Jan de Vries"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: '#9ca3af', display: 'block', marginBottom: 6 }}>E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jan@email.nl"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, color: '#9ca3af', display: 'block', marginBottom: 6 }}>Bericht</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Stel je vraag..."
                  required
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: 13 }}>Er ging iets mis. Probeer het opnieuw of mail naar support@clavify.io.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '13px 28px', fontSize: 15, fontWeight: 600, cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1, alignSelf: 'flex-start' }}
              >
                {status === 'sending' ? 'Versturen...' : 'Verstuur bericht →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1e1e30', background: '#0a0a0f' }} className="px-5 sm:px-8 md:px-12 pt-12 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

            {/* Kolom 1 */}
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
                <span style={{ color: '#a855f7' }}>✦</span> <span style={{ color: '#a855f7' }}>Clavify</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.7 }}>
                De Nederlandse cursus voor AI-agent bouwers. Bouw tools met Claude en VS Code en verkoop ze aan klanten.
              </p>
            </div>

            {/* Kolom 2 */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Cursus</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: 'De Basis', href: '/modules' },
                  { label: 'Chrome Extensie', href: '/modules' },
                  { label: 'AI Machine', href: '/modules' },
                  { label: 'SEO Agent', href: '/modules' },
                  { label: 'Content Agent', href: '/modules' },
                ].map(l => (
                  <Link key={l.label} href={l.href} style={{ color: '#9ca3af', fontSize: 14, textDecoration: 'none' }}>{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Kolom 3 */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Support</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="#faq" style={{ color: '#9ca3af', fontSize: 14, textDecoration: 'none' }}>FAQ</a>
                <a href="mailto:support@clavify.io" style={{ color: '#9ca3af', fontSize: 14, textDecoration: 'none' }}>support@clavify.io</a>
                <Link href="/privacybeleid" style={{ color: '#9ca3af', fontSize: 14, textDecoration: 'none' }}>Privacybeleid</Link>
                <Link href="/voorwaarden" style={{ color: '#9ca3af', fontSize: 14, textDecoration: 'none' }}>Voorwaarden</Link>
              </div>
            </div>
          </div>

          {/* Onderbalk */}
          <div style={{ borderTop: '1px solid #1e1e30', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ color: '#4b5563', fontSize: 13 }}>© 2026 Clavify. Alle rechten voorbehouden.</span>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <span style={{ color: '#4b5563', fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}>
                🔒 Stripe
              </span>
              <span style={{ color: '#4b5563', fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}>
                🛡️ 14 dagen garantie
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#16161f',
  border: '1px solid #1e1e30',
  borderRadius: 10,
  padding: '12px 14px',
  color: '#e5e7eb',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
}
