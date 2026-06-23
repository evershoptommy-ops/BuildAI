'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function LandingNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ borderBottom: '1px solid #1e1e30', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(10px)' }}>
      <div className="flex items-center justify-between px-5 md:px-12 py-4 md:py-5">
        <div className="text-xl font-bold tracking-tight">
          Clavi<span style={{ color: '#a855f7' }}>fy</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {['#cursus', '#hoe-het-werkt', '#prijzen'].map((href, i) => (
            <a key={href} href={href} style={{ color: '#6b7280' }} className="text-sm hover:text-white transition-colors">
              {['Cursus', 'Hoe het werkt', 'Prijzen'][i]}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
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

        {/* Mobile: login + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link href="/sign-in">
            <button style={{ background: 'transparent', border: '1px solid #2a2a3a', color: '#e5e7eb', borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer' }}>
              Inloggen
            </button>
          </Link>
          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: 'transparent', border: '1px solid #2a2a3a', color: '#e5e7eb', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden flex flex-col" style={{ borderTop: '1px solid #1e1e30', background: 'rgba(10,10,15,0.98)', padding: '12px 20px 20px' }}>
          {[['#cursus', 'Cursus'], ['#hoe-het-werkt', 'Hoe het werkt'], ['#prijzen', 'Prijzen']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ color: '#9ca3af', fontSize: 15, padding: '12px 0', borderBottom: '1px solid #1e1e30', display: 'block' }}>
              {label}
            </a>
          ))}
          <Link href="/sign-up" onClick={() => setOpen(false)}>
            <button style={{ width: '100%', background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '13px', fontSize: 15, fontWeight: 600, cursor: 'pointer', marginTop: 16 }}>
              🚀 Gratis starten
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}
