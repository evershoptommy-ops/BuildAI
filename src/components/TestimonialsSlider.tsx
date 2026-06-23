'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Daan Vermeer',
    role: 'Freelance marketeer',
    avatar: '/avatars/man1.jpeg',
    text: 'Ik had altijd ideeën voor tools maar geen developer budget. Na module 2 had ik een werkende Chrome extensie die ik voor €300 aan een lokale ondernemer heb verkocht. Dat was mijn investering in de cursus al dubbel terug.',
  },
  {
    name: 'Karim Aouad',
    role: 'Online ondernemer',
    avatar: '/avatars/man2.jpeg',
    text: 'Module 4 heeft mijn SEO-aanpak compleet veranderd. Mijn agent analyseert een website in 20 seconden en geeft een rapport dat ik vroeger een halve dag voor nodig had. Klanten zien het resultaat — niet hoe ik het maak.',
  },
  {
    name: 'Tom Brouwers',
    role: 'Webdesigner',
    avatar: '/avatars/man3.jpeg',
    text: 'Ik bouw websites maar kon nooit iets extra\'s bieden. Nu zeg ik standaard: "Ik voeg ook een AI-tool toe." Drie klanten hebben dat al afgenomen. Het is een makkelijke upsell geworden.',
  },
  {
    name: 'Sarah Maes',
    role: 'VA & online assistent',
    avatar: '/avatars/vrouw1.jpeg',
    text: 'Als VA doe ik veel repetitief werk. Dankzij module 3 heb ik een agent die mijn klanten automatisch wekelijkse rapportages stuurt. Ik bespaar minstens 4 uur per week — per klant.',
  },
  {
    name: 'Lisa van den Berg',
    role: 'Eigenaar bloemenzaak',
    avatar: '/avatars/vrouw2.jpeg',
    text: 'Ik dacht dat AI iets was voor grote bedrijven. Maar de content agent publiceert nu automatisch mijn weekaanbiedingen op mijn website. Ik doe er zelf niets meer aan.',
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
