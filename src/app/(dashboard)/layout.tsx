'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { Home, BookOpen, TrendingUp, Trophy, Settings, Gem } from 'lucide-react'
import ChatBot from '@/components/ChatBot'
import PlanBadge from '@/components/PlanBadge'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/modules', icon: BookOpen, label: 'Modules' },
  { href: '/voortgang', icon: TrendingUp, label: 'Voortgang' },
  { href: '/prestaties', icon: Trophy, label: 'Prestaties' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>

      {/* SIDEBAR */}
      <aside className="flex flex-col" style={{ width: 240, background: '#111118', borderRight: '1px solid #1e1e30', flexShrink: 0 }}>
        <div className="text-lg font-bold px-6 py-7" style={{ borderBottom: '1px solid #1e1e30' }}>
          Clavi<span style={{ color: '#a855f7' }}>fy</span>
        </div>

        <nav className="flex-1 py-4">
          <div className="px-6 py-2 text-xs uppercase tracking-widest" style={{ color: '#6b7280' }}>Navigatie</div>
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href}>
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
          <Link href="/instellingen">
            <div className="flex items-center gap-3 px-6 py-[10px] text-sm cursor-pointer" style={{ color: '#6b7280' }}>
              <Settings size={16} /> Instellingen
            </div>
          </Link>
          <Link href="/upgraden">
            <div className="flex items-center gap-3 px-6 py-[10px] text-sm cursor-pointer" style={{ color: '#a78bfa' }}>
              <Gem size={16} /> Upgraden
            </div>
          </Link>
        </nav>

        <div className="px-6 py-5" style={{ borderTop: '1px solid #1e1e30' }}>
          <div className="flex items-center gap-3">
            <UserButton />
            <div>
              <div className="text-sm font-semibold">Mijn account</div>
              <PlanBadge />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      <ChatBot />
    </div>
  )
}
