'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Moet ik kunnen programmeren?',
    a: 'Nee. Claude schrijft de code. Jij geeft instructies in gewone taal. Als je een computer kunt bedienen, kun je beginnen.',
  },
  {
    q: 'Hoe lang duurt het voor ik mijn eerste tool heb?',
    a: 'De meeste studenten bouwen hun eerste werkende tool aan het einde van module 1 — dat is één avond van ongeveer een uur.',
  },
  {
    q: 'Werkt dit ook als ik al een baan heb?',
    a: 'Ja. Elke les duurt 10-25 minuten. De meeste studenten volgen Clavify \'s avonds of in het weekend.',
  },
  {
    q: 'Is €197 niet veel voor een online cursus?',
    a: 'Een dagtraining AI bij een bureau kost €500-€750. Clavify geeft je 9+ uur praktisch materiaal voor €197 — in je eigen tempo, levenslang beschikbaar. Je eerste klant betaalt het terug.',
  },
  {
    q: 'Wat als ik vastloop?',
    a: 'Je hebt toegang tot de AI-assistent in het platform die alle vragen over de modules beantwoordt.',
  },
  {
    q: 'Krijg ik ook toekomstige modules?',
    a: 'Ja. Je betaalt één keer en krijgt levenslang toegang, inclusief alle modules die we in de toekomst toevoegen.',
  },
  {
    q: 'Is er een garantie?',
    a: 'Ja — niet tevreden na module 1? Mail binnen 14 dagen. Je krijgt geld terug of een persoonlijke sessie om je verder te helpen. Jouw keuze.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ borderTop: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Veelgestelde vragen</div>
          <h2 className="text-2xl md:text-3xl font-bold">Alles wat je wil weten</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ background: '#16161f', border: `1px solid ${open === i ? 'rgba(168,85,247,0.3)' : '#1e1e30'}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s ease' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', color: '#e5e7eb', textAlign: 'left', gap: 12 }}
              >
                <span style={{ fontSize: 15, fontWeight: 500 }}>{faq.q}</span>
                <span style={{ color: '#a855f7', fontSize: 18, flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
                  ∨
                </span>
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{ padding: '0 20px 18px', color: '#9ca3af', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
