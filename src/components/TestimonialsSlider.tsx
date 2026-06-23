'use client'

const testimonials = [
  {
    name: 'Daan Vermeer',
    role: 'Freelance marketeer',
    avatar: '/avatars/man1.jpeg',
    text: 'Ik had altijd ideeën voor tools maar geen developer budget. Na module 2 had ik een werkende Chrome extensie die ik voor €300 aan een lokale ondernemer heb verkocht.',
  },
  {
    name: 'Karim Aouad',
    role: 'Online ondernemer',
    avatar: '/avatars/man2.jpeg',
    text: 'Mijn agent analyseert een website in 20 seconden en geeft een rapport dat ik vroeger een halve dag voor nodig had. Klanten zien het resultaat — niet hoe ik het maak.',
  },
  {
    name: 'Tom Brouwers',
    role: 'Webdesigner',
    avatar: '/avatars/man3.jpeg',
    text: 'Nu zeg ik standaard: "Ik voeg ook een AI-tool toe." Drie klanten hebben dat al afgenomen. Het is een makkelijke upsell geworden.',
  },
  {
    name: 'Sarah Maes',
    role: 'VA & online assistent',
    avatar: '/avatars/vrouw1.jpeg',
    text: 'Dankzij module 3 heb ik een agent die mijn klanten automatisch wekelijkse rapportages stuurt. Ik bespaar minstens 4 uur per week — per klant.',
  },
  {
    name: 'Lisa van den Berg',
    role: 'Eigenaar bloemenzaak',
    avatar: '/avatars/vrouw2.jpeg',
    text: 'De content agent publiceert nu automatisch mijn weekaanbiedingen op mijn website. Ik doe er zelf niets meer aan.',
  },
]

export default function TestimonialsSlider() {
  return (
    <section style={{ borderTop: '1px solid #1e1e30', background: '#0a0a0f' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ervaringen</div>
          <h2 className="text-2xl md:text-3xl font-bold">Wat cursisten zeggen</h2>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-24">
          {testimonials.slice(3).map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div style={{
      background: '#111118',
      border: '1px solid #1e1e30',
      borderRadius: 16,
      padding: '24px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 3 }}>
        {[1,2,3,4,5].map(s => (
          <span key={s} style={{ color: '#fbbf24', fontSize: 13 }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.75, margin: 0, flex: 1 }}>
        "{t.text}"
      </p>

      {/* Person */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 8, borderTop: '1px solid #1e1e30' }}>
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f3f4f6' }}>{t.name}</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}
