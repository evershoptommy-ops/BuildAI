'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Daan V.',
    role: 'Freelance marketeer',
    avatar: '/avatars/random-person (1).jpeg',
    text: 'Na module 2 had ik al een Chrome extensie die ik aan een klant heb laten zien. Die wilde hem direct hebben. Eerste opdracht binnen — €250.',
  },
  {
    name: 'Sara M.',
    role: 'ZZP\'er — tekstschrijver',
    avatar: '/avatars/random-person (2).jpeg',
    text: 'Ik dacht dat dit iets was voor developers. Maar de manier waarop het wordt uitgelegd maakt het voor iedereen toegankelijk. Na module 3 automatiseer ik mijn hele rapportage.',
  },
  {
    name: 'Joren B.',
    role: 'Ondernemer — webshop eigenaar',
    avatar: '/avatars/random-person (3).jpeg',
    text: 'De SEO agent uit module 4 schrijft nu automatisch mijn productbeschrijvingen. Wat vroeger 2 uur kostte, doet de agent in 30 seconden. Letterlijk.',
  },
  {
    name: 'Lisa K.',
    role: 'VA — Virtueel assistent',
    avatar: '/avatars/random-person (4).jpeg',
    text: 'Ik bied nu AI-automatisering aan als extra dienst. Klanten vragen er zelf naar. Clavify heeft me in 5 modules iets geleerd wat ik in geen enkele andere cursus heb gevonden.',
  },
  {
    name: 'Thomas R.',
    role: 'Marketingbureau eigenaar',
    avatar: '/avatars/random-person (5).jpeg',
    text: 'Mijn team gebruikt de content agent uit module 5 dagelijks. We publiceren nu 3x meer blogposts zonder extra werkuren. De ROI was er al na de eerste week.',
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current])

  const t = testimonials[current]

  return (
    <section style={{ borderTop: '1px solid #1e1e30' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ervaringen</div>
          <h2 className="text-2xl md:text-3xl font-bold">Wat cursisten zeggen</h2>
        </div>

        {/* Quote card */}
        <div style={{
          background: '#111118',
          border: '1px solid #1e1e30',
          borderRadius: 20,
          padding: '36px 32px',
          minHeight: 200,
          position: 'relative',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(6px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          {/* Quote mark */}
          <div style={{ position: 'absolute', top: 24, left: 28, fontSize: 64, lineHeight: 1, color: 'rgba(168,85,247,0.15)', fontFamily: 'Georgia, serif', userSelect: 'none' }}>"</div>

          <p style={{ color: '#e5e7eb', fontSize: 16, lineHeight: 1.8, marginBottom: 28, position: 'relative', zIndex: 1, paddingTop: 8 }}>
            {t.text}
          </p>

          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid rgba(168,85,247,0.3)' }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{t.role}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ color: '#fbbf24', fontSize: 13 }}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 999,
                border: 'none',
                cursor: 'pointer',
                background: i === current ? '#a855f7' : '#2a2a3a',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
