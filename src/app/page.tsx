import Link from 'next/link'
import { ArrowRight, Zap, Plug, Euro } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid #1e1e30' }} className="flex items-center justify-between px-12 py-5">
        <div className="text-xl font-bold tracking-tight">
          Clavi<span style={{ color: '#a855f7' }}>fy</span>
        </div>
        <div className="flex gap-8">
          {['Cursus', 'Hoe het werkt', 'Prijzen'].map(item => (
            <a key={item} href="#" style={{ color: '#6b7280' }} className="text-sm hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/sign-in">
            <button style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 10, padding: '9px 20px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
              Inloggen
            </button>
          </Link>
          <Link href="/sign-up">
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '10px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              Gratis starten <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-12 py-24 relative">
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 13, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)', marginBottom: 20 }}>
          ✦ Gratis beginnen — geen creditcard nodig
        </div>

        <h1 className="text-6xl font-extrabold leading-tight max-w-3xl mb-6" style={{ letterSpacing: '-1.5px' }}>
          Bouw je eigen tools met{' '}
          <em style={{ fontStyle: 'normal', color: '#a855f7' }}>AI</em>{' '}
          en verkoop ze aan klanten
        </h1>

        <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: '#6b7280' }}>
          Leer stap voor stap hoe je met Claude en VS Code echte programma&apos;s maakt — zonder jaren aan ervaring nodig te hebben.
        </p>

        <div className="flex gap-4 items-center">
          <Link href="/sign-up">
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '14px 30px', fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              🚀 Start gratis vandaag
            </button>
          </Link>
          <button style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
            Bekijk hoe het werkt
          </button>
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

      {/* FEATURES */}
      <div style={{ borderTop: '1px solid #1e1e30', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[
          { icon: <Zap size={20} />, title: 'Installatie in 15 minuten', desc: 'Van nul naar werkende omgeving. We loodsen je stap voor stap door VS Code en Claude — ook als je nog nooit code hebt geschreven.' },
          { icon: <Plug size={20} />, title: 'Je eerste Chrome extensie', desc: 'Bouw een echte Chrome extensie die je aan vrienden en klanten kunt laten zien. Concreet resultaat na je eerste module.' },
          { icon: <Euro size={20} />, title: 'Verdien met je skills', desc: 'Weet wat je kunt aanbieden, hoe je het prijst, en hoe je je eerste betalende klant vindt. Van tool naar inkomen.' },
        ].map((f, i) => (
          <div key={i} style={{ background: '#111118', padding: '32px 36px', borderRight: i < 2 ? '1px solid #1e1e30' : 'none' }}>
            <div style={{ width: 44, height: 44, background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.3)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, color: '#a855f7' }}>
              {f.icon}
            </div>
            <h3 className="text-base font-semibold mb-2">{f.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{f.desc}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
