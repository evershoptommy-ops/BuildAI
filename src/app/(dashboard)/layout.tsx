'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { Home, BookOpen, TrendingUp, Trophy, Settings, Gem, Menu, X, Award } from 'lucide-react'
import { useState, useEffect } from 'react'
import ChatBot from '@/components/ChatBot'
import PlanBadge from '@/components/PlanBadge'

const quotes = [
  'Vroeger had je een developer nodig. Nu heb je een idee nodig.',
  'Code schrijven leer je in jaren. Vragen stellen deed je al als kind.',
  'Je eerste tool hoeft niet perfect te zijn. Hij moet alleen werken.',
  'Anderen wachten tot het makkelijker wordt. Jij begint vandaag.',
  'Het enige wat tussen jou en je eerste tool staat, is de eerste prompt.',
  'Een tool die 80% werkt en live staat, is meer waard dan een perfect idee in je hoofd.',
  'Je eerste klant vraagt niet hoe je het gebouwd hebt. Die vraagt wanneer het klaar is.',
  'AI doet het zware werk. Jij bepaalt wat er gedaan wordt.',
  'De mensen die dit nu leren, geven over vijf jaar les aan de rest.',
  'Je bouwt niet voor jezelf. Je bouwt voor de klant die dit allang wilde hebben.',
]

function QuoteRotator() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % quotes.length)
        setVisible(true)
      }, 600)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-6 py-4" style={{ borderTop: '1px solid #1e1e30' }}>
      <p style={{
        color: '#4b5563',
        fontSize: 11,
        lineHeight: 1.6,
        fontStyle: 'italic',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
        margin: 0,
      }}>
        "{quotes[index]}"
      </p>
    </div>
  )
}

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/modules', icon: BookOpen, label: 'Modules' },
  { href: '/voortgang', icon: TrendingUp, label: 'Voortgang' },
  { href: '/prestaties', icon: Trophy, label: 'Prestaties' },
  { href: '/certificaat', icon: Award, label: 'Certificaten' },
]

function SidebarInner({ pathname, onClose, hasPremium }: { pathname: string; onClose?: () => void; hasPremium: boolean }) {
  return (
    <>
      <div className="flex items-center justify-between text-lg font-bold px-6 py-7" style={{ borderBottom: '1px solid #1e1e30' }}>
        <span>Clavi<span style={{ color: '#a855f7' }}>fy</span></span>
        {onClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', padding: 4 }}>
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="flex-1 py-4">
        <div className="px-6 py-2 text-xs uppercase tracking-widest" style={{ color: '#6b7280' }}>Navigatie</div>
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} onClick={onClose}>
              <div className="flex items-center gap-3 px-6 py-[10px] text-sm cursor-pointer transition-colors"
                style={{
                  color: active ? '#fff' : '#6b7280',
                  background: active ? 'rgba(124,58,237,.12)' : 'transparent',
                  borderLeft: active ? '2px solid #a855f7' : '2px solid transparent',
                }}>
                <Icon size={16} />
                {label}
              </div>
            </Link>
          )
        })}

        <div className="px-6 py-2 mt-4 text-xs uppercase tracking-widest" style={{ color: '#6b7280' }}>Account</div>
        <Link href="/instellingen" onClick={onClose}>
          <div className="flex items-center gap-3 px-6 py-[10px] text-sm cursor-pointer" style={{ color: '#6b7280' }}>
            <Settings size={16} /> Instellingen
          </div>
        </Link>
        {!hasPremium && (
          <Link href="/upgraden" onClick={onClose}>
            <div className="flex items-center gap-3 px-6 py-[10px] text-sm cursor-pointer" style={{ color: '#a78bfa' }}>
              <Gem size={16} /> Upgraden
            </div>
          </Link>
        )}
      </nav>

      <QuoteRotator />

      <div className="px-6 py-5" style={{ borderTop: '1px solid #1e1e30' }}>
        <div className="flex items-center gap-3">
          <UserButton />
          <div>
            <div className="text-sm font-semibold">Mijn account</div>
            <PlanBadge />
          </div>
        </div>
      </div>
    </>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [hasPremium, setHasPremium] = useState(false)

  useEffect(() => {
    fetch('/api/premium')
      .then(r => r.json())
      .then(d => setHasPremium(d.premium || d.admin))
      .catch(() => {})
  }, [])

  return (
    <div className="flex h-screen" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>

      {/* Desktop sidebar — verborgen op mobile */}
      <aside className="hidden md:flex flex-col" style={{ width: 240, background: '#111118', borderRight: '1px solid #1e1e30', flexShrink: 0 }}>
        <SidebarInner pathname={pathname} hasPremium={hasPremium} />
      </aside>

      {/* Mobile overlay drawer */}
      {drawerOpen && (
        <div className="md:hidden" style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
          <div
            onClick={() => setDrawerOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }}
          />
          <aside className="flex flex-col" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 260, background: '#111118', borderRight: '1px solid #1e1e30' }}>
            <SidebarInner pathname={pathname} onClose={() => setDrawerOpen(false)} hasPremium={hasPremium} />
          </aside>
        </div>
      )}

      {/* Hoofd content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile topbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid #1e1e30', background: '#111118', flexShrink: 0 }}>
          <button
            onClick={() => setDrawerOpen(true)}
            style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 8, padding: '6px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <Menu size={18} />
          </button>
          <div className="text-base font-bold">
            Clavi<span style={{ color: '#a855f7' }}>fy</span>
          </div>
          <UserButton />
        </div>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>

      <ChatBot />
    </div>
  )
}
