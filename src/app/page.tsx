import { ArrowRight, Zap, Bot, TrendingUp, Check } from 'lucide-react'
import Link from 'next/link'
import LandingNav from '@/components/LandingNav'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import FAQ from '@/components/FAQ'

const modules = [
  { num: 1, title: 'De Basis', tag: 'Gratis', desc: 'VS Code, Claude en Python installeren. Je eerste werkende tool bouwen — een factuurberekening die je meteen kunt gebruiken.', free: true },
  { num: 2, title: 'Je eerste Chrome Extensie', tag: 'Gratis', desc: 'Een echte Chrome extensie bouwen van nul. Iets concreets om aan klanten te laten zien na één weekend werken.', free: true },
  { num: 3, title: 'Bouw een Krachtige AI Machine', tag: 'Premium', desc: 'Claude Code direct in VS Code. Een 3-laagse agent-architectuur die zichzelf verbetert en leverbaar is aan klanten.', free: false },
  { num: 4, title: 'Bouw een SEO Agent', tag: 'Premium', desc: 'Zoekwoorden ophalen, websites analyseren en automatisch een professioneel SEO-rapport schrijven via de Claude API.', free: false },
  { num: 5, title: 'Bouw een Content Agent', tag: 'Premium', desc: 'SEO-teksten schrijven en direct publiceren op WordPress of Shopify. Van zoekwoord tot live blogpost in één opdracht.', free: false },
]

const steps = [
  { n: '01', title: 'Installeer VS Code en Claude', desc: 'Je omgeving staat in 15 minuten klaar. We loodsen je stap voor stap door de installatie — ook zonder technische achtergrond.' },
  { n: '02', title: 'Bouw je eerste tool', desc: 'Schrijf geen code — geef Claude instructies. Jij bepaalt wat het moet doen, Claude bouwt het. Je ziet direct resultaat.' },
  { n: '03', title: 'Lever het aan een klant', desc: 'Je tools zijn klaar om te verkopen. We laten je zien hoe je klanten vindt, het gesprek voert en professioneel oplevert.' },
]

const freeFeatures = [
  'Module 1: De Basis (VS Code, Claude, Python)',
  'Module 2: Je eerste Chrome Extensie',
  'Toegang tot de AI-assistent',
  'Voortgang bijhouden',
]

const premiumFeatures = [
  'Alles uit het gratis plan',
  'Module 3: AI Machine met agent-architectuur',
  'Module 4: Volledige SEO Agent',
  'Module 5: Content Agent (WordPress + Shopify)',
  'Certificaat na voltooiing',
  'Alle toekomstige modules',
]

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>

      {/* NAV — client component met hamburger menu */}
      <LandingNav />

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28 relative">
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)', marginBottom: 20 }}>
          ✦ Gratis beginnen — geen creditcard nodig
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-3xl mb-5 md:mb-6" style={{ letterSpacing: '-1px' }}>
          Bouw je eigen AI-tools en{' '}
          <em style={{ fontStyle: 'normal', color: '#a855f7' }}>verkoop ze aan klanten</em>
        </h1>

        <p className="text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed" style={{ color: '#6b7280' }}>
          Leer stap voor stap hoe je met Claude en VS Code echte AI-tools maakt — zonder jaren aan ervaring. Van Chrome extensie tot volledige SEO agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto">
          <Link href="/sign-up" className="w-full sm:w-auto">
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 12, padding: '14px 30px', fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' }}>
              🚀 Start gratis vandaag
            </button>
          </Link>
          <a href="#cursus" className="w-full sm:w-auto">
            <button style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 12, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', width: '100%' }}>
              Bekijk de modules
            </button>
          </a>
        </div>

        <div className="flex items-center gap-3 mt-8" style={{ fontSize: 13, color: '#6b7280' }}>
          <div className="flex">
            {['T', 'M', 'S', 'J', 'A'].map((l, i) => (
              <div key={l} style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #0a0a0f', marginLeft: i === 0 ? 0 : -8, background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>
                {l}
              </div>
            ))}
          </div>
          <span>Meer dan <strong>840 mensen</strong> zijn al begonnen</span>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ borderTop: '1px solid #1e1e30', borderBottom: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 md:px-12 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: '👥', label: '840+ studenten' },
            { icon: '📖', label: '33 lessen' },
            { icon: '⏱️', label: '9+ uur materiaal' },
            { icon: '🎁', label: 'Gratis te starten' },
            { icon: '∞', label: 'Levenslang toegang' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2" style={{ color: '#a855f7', fontSize: 13, fontWeight: 500 }}>
              <span>{item.icon}</span>
              <span style={{ color: '#9ca3af' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOE HET WERKT */}
      <section id="hoe-het-werkt" style={{ borderTop: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hoe het werkt</div>
            <h2 className="text-2xl md:text-3xl font-bold">Van nul naar je eerste klant in 5 modules</h2>
          </div>
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4 md:gap-6 items-start" style={{ background: '#16161f', border: '1px solid #1e1e30', borderRadius: 16, padding: '20px 20px' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>
                  {step.n}
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">{step.title}</div>
                  <div style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="cursus" style={{ borderTop: '1px solid #1e1e30' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>De cursus</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">5 modules. Van basis tot verkopen.</h2>
            <p style={{ color: '#6b7280', fontSize: 15 }}>Modules 1 en 2 zijn gratis. Upgrade voor de geavanceerde modules.</p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {modules.map((mod) => (
              <div key={mod.num} className="flex items-start gap-4" style={{ background: '#111118', border: `1px solid ${mod.free ? '#1e1e30' : 'rgba(124,58,237,.2)'}`, borderRadius: 16, padding: '18px 20px' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: mod.free ? '#16161f' : 'rgba(124,58,237,.12)', border: `1px solid ${mod.free ? '#2a2a3a' : 'rgba(124,58,237,.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: mod.free ? '#6b7280' : '#a855f7', flexShrink: 0 }}>
                  {mod.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-sm">{mod.title}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: mod.free ? 'rgba(16,185,129,.12)' : 'rgba(124,58,237,.15)', color: mod.free ? '#34d399' : '#a78bfa', border: `1px solid ${mod.free ? 'rgba(16,185,129,.3)' : 'rgba(124,58,237,.3)'}`, whiteSpace: 'nowrap' }}>
                      {mod.tag}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section style={{ borderTop: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Voor wie</div>
            <h2 className="text-2xl md:text-3xl font-bold">Je hoeft geen programmeur te zijn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Zap size={20} />, title: 'Beginners', desc: 'Nog nooit geprogrammeerd? Geen probleem. Claude schrijft de code — jij geeft de instructies.' },
              { icon: <Bot size={20} />, title: 'Freelancers', desc: 'Voeg AI-tools toe aan je diensten en vraag er meer voor. Klanten betalen voor resultaat, niet voor code.' },
              { icon: <TrendingUp size={20} />, title: 'Ondernemers', desc: 'Automatiseer processen in je eigen bedrijf of bouw tools voor klanten in jouw branche.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#16161f', border: '1px solid #1e1e30', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(124,58,237,.12)', border: '1px solid rgba(124,58,237,.25)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', marginBottom: 16 }}>
                  {item.icon}
                </div>
                <div className="font-semibold mb-2">{item.title}</div>
                <div style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      {/* PRIJZEN */}
      <section id="prijzen" style={{ borderTop: '1px solid #1e1e30' }} className="px-5 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Prijzen</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Begin gratis. Upgrade wanneer je klaar bent.</h2>
            <p style={{ color: '#6b7280', fontSize: 15 }}>Geen creditcard nodig om te starten.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Gratis */}
            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 20, padding: '28px 24px' }}>
              <div className="text-sm font-semibold mb-1" style={{ color: '#6b7280' }}>Gratis</div>
              <div className="text-4xl font-bold mb-1">€0</div>
              <div className="text-sm mb-6" style={{ color: '#6b7280' }}>Voor altijd gratis</div>
              <div className="flex flex-col gap-3 mb-8">
                {freeFeatures.map(f => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <Check size={15} style={{ color: '#34d399', marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#9ca3af' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/sign-up">
                <button style={{ width: '100%', background: 'transparent', border: '1px solid #2a2a3a', color: '#e5e7eb', borderRadius: 10, padding: '11px 0', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                  Gratis starten
                </button>
              </Link>
            </div>
            {/* Premium */}
            <div style={{ background: 'rgba(124,58,237,.06)', border: '1px solid rgba(124,58,237,.35)', borderRadius: 20, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, background: '#7c3aed', color: '#fff' }}>POPULAIR</div>
              <div className="text-sm font-semibold mb-1" style={{ color: '#a855f7' }}>Premium</div>
              <div className="text-4xl font-bold mb-1">€197</div>
              <div className="text-sm mb-6" style={{ color: '#6b7280' }}>Eenmalig — levenslang toegang</div>
              <div className="flex flex-col gap-3 mb-8">
                {premiumFeatures.map(f => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <Check size={15} style={{ color: '#a855f7', marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#e5e7eb' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/sign-up">
                <button style={{ width: '100%', background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '12px 0', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                  Nu upgraden
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section style={{ borderTop: '1px solid #1e1e30', background: '#111118' }} className="px-5 sm:px-8 py-14 md:py-20 text-center">
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">Klaar om te beginnen?</h2>
          <p className="text-base md:text-lg mb-8 relative" style={{ color: '#6b7280' }}>Module 1 en 2 zijn gratis. Geen creditcard nodig.</p>
          <Link href="/sign-up">
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 12, padding: '14px 36px', fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, position: 'relative' }}>
              🚀 Start gratis <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1e1e30' }} className="px-5 sm:px-8 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="text-sm font-bold">Clavi<span style={{ color: '#a855f7' }}>fy</span></div>
        <div className="text-xs order-last sm:order-none" style={{ color: '#4b5563' }}>© 2026 Clavify. Alle rechten voorbehouden.</div>
        <div className="flex gap-6">
          {['Privacybeleid', 'Voorwaarden'].map(l => (
            <a key={l} href="#" className="text-xs" style={{ color: '#4b5563' }}>{l}</a>
          ))}
        </div>
      </footer>

    </main>
  )
}
