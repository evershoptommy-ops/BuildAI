'use client'

import Link from 'next/link'
import ShimmerButton from './ShimmerButton'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28 relative" style={{ overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-item { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-item:nth-child(1) { animation-delay: 0ms; }
        .hero-item:nth-child(2) { animation-delay: 120ms; }
        .hero-item:nth-child(3) { animation-delay: 240ms; }
        .hero-item:nth-child(4) { animation-delay: 360ms; }
        .hero-item:nth-child(5) { animation-delay: 480ms; }

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

      {/* Badge */}
      <div className="hero-item" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)', marginBottom: 20 }}>
        ✦ Gratis beginnen — geen creditcard nodig
      </div>

      {/* Headline */}
      <h1 className="hero-item text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-3xl mb-5 md:mb-6" style={{ letterSpacing: '-1px' }}>
        Bouw je eigen AI-tools en{' '}
        <em className="animated-gradient" style={{ fontStyle: 'normal' }}>verkoop ze aan klanten</em>
      </h1>

      {/* Subtekst */}
      <p className="hero-item text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed" style={{ color: '#6b7280' }}>
        Leer stap voor stap hoe je met Claude en VS Code echte AI-tools maakt — zonder jaren aan ervaring. Van Chrome extensie tot volledige SEO agent.
      </p>

      {/* CTA knoppen */}
      <div className="hero-item flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto">
        <ShimmerButton href="/sign-up" fullWidth>
          🚀 Start gratis vandaag
        </ShimmerButton>
        <a href="#cursus" className="w-full sm:w-auto">
          <button style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 12, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', width: '100%' }}>
            Bekijk de modules
          </button>
        </a>
      </div>

      {/* Social proof */}
      <div className="hero-item flex items-center gap-3 mt-8" style={{ fontSize: 13, color: '#6b7280' }}>
        <div className="flex">
          {['T', 'M', 'S', 'J', 'A'].map((l, i) => (
            <div key={l} style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #0a0a0f', marginLeft: i === 0 ? 0 : -8, background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>
              {l}
            </div>
          ))}
        </div>
        <span>840+ cursisten gestart</span>
      </div>
    </section>
  )
}
