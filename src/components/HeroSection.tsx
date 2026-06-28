'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28 relative">
      {/* Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Badge */}
      <motion.div {...fadeUp(0)}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)', marginBottom: 20 }}>
          ✦ Gratis beginnen — geen creditcard nodig
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1 {...fadeUp(0.1)} className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-3xl mb-5 md:mb-6" style={{ letterSpacing: '-1px' }}>
        Bouw je eigen AI-tools en{' '}
        <em style={{ fontStyle: 'normal', color: '#a855f7' }}>verkoop ze aan klanten</em>
      </motion.h1>

      {/* Subtekst */}
      <motion.p {...fadeUp(0.2)} className="text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed" style={{ color: '#6b7280' }}>
        Leer stap voor stap hoe je met Claude en VS Code echte AI-tools maakt — zonder jaren aan ervaring. Van Chrome extensie tot volledige SEO agent.
      </motion.p>

      {/* CTA knoppen */}
      <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto">
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
      </motion.div>

      {/* Social proof avatars */}
      <motion.div {...fadeUp(0.4)} className="flex items-center gap-3 mt-8" style={{ fontSize: 13, color: '#6b7280' }}>
        <div className="flex">
          {['T', 'M', 'S', 'J', 'A'].map((l, i) => (
            <div key={l} style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #0a0a0f', marginLeft: i === 0 ? 0 : -8, background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>
              {l}
            </div>
          ))}
        </div>
        <span>840+ cursisten gestart</span>
      </motion.div>
    </section>
  )
}
