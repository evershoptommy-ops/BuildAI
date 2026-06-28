'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const steps = [
  {
    emoji: '👋',
    title: 'Welkom bij Clavify.',
    body: 'Je hebt de knop geklikt. Dat is het moeilijkste wat je vandaag hoeft te doen.\n\nVanaf nu ga jij tools bouwen met AI. Echte tools — dingen die werken, die je kunt laten zien, en die je kunt verkopen aan klanten.',
  },
  {
    emoji: '🤖',
    title: 'Je hoeft niet te kunnen coderen.',
    body: 'Claude schrijft de code. Jij vertelt in gewone taal wat je wil hebben.\n\nJij hoeft alleen te weten wat je wil maken — de rest doet Claude voor je.',
  },
  {
    emoji: '🚀',
    title: 'Klaar om je eerste tool te bouwen?',
    body: 'Module 1 en 2 zijn volledig gratis. Na module 1 heb je al een werkende tool op je computer.\n\nLaten we beginnen.',
  },
]

export default function WelkomPage() {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const current = steps[step]
  const isLast = step === steps.length - 1

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .onboard-card { animation: fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background: linear-gradient(270deg, #a855f7, #7c3aed, #c084fc, #6d28d9);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="onboard-card" key={step} style={{ maxWidth: 480, width: '100%', background: '#111118', border: '1px solid #1e1e30', borderRadius: 24, padding: '48px 40px', textAlign: 'center' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ fontSize: 52, marginBottom: 24 }}>{current.emoji}</div>

        <h1 className="animated-gradient" style={{ fontSize: 26, fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>
          {current.title}
        </h1>

        <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.8, marginBottom: 36, whiteSpace: 'pre-line' }}>
          {current.body}
        </p>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 32 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 999, background: i === step ? '#a855f7' : '#2a2a3a', transition: 'all 0.3s ease' }} />
          ))}
        </div>

        <button
          onClick={() => isLast ? router.push('/modules/1/1-1') : setStep(s => s + 1)}
          style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', border: 'none', color: '#fff', borderRadius: 12, padding: '14px 28px', fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s', boxShadow: '0 4px 20px rgba(124,58,237,0.3)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(124,58,237,0.45)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)' }}
        >
          {isLast ? '🚀 Start met leren' : 'Volgende →'}
        </button>

        {step > 0 && (
          <button onClick={() => setStep(s => s - 1)} style={{ background: 'none', border: 'none', color: '#4b5563', fontSize: 13, cursor: 'pointer', marginTop: 16 }}>
            ← Terug
          </button>
        )}
      </div>
    </div>
  )
}
