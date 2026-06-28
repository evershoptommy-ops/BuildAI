'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Module {
  id: number
  title: string
  description: string
  premium: boolean
  lessons: { id: string }[]
}

interface Props {
  modules: Module[]
  completedIds: string[]
  hasPremium: boolean
}

export default function DashboardModules({ modules, completedIds, hasPremium }: Props) {
  const [parent] = useAutoAnimate()
  const completedSet = new Set(completedIds)

  return (
    <div ref={parent} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {modules.map((m, i) => {
        const done = m.lessons.filter(l => completedSet.has(l.id)).length
        const pct = Math.round((done / m.lessons.length) * 100)
        const isDone = pct === 100
        const isActive = pct > 0 && pct < 100
        const isLocked = m.premium && !hasPremium

        const firstLesson = m.lessons[0]
        const nextUnfinished = m.lessons.find(l => !completedSet.has(l.id)) ?? firstLesson
        const href = isLocked ? '/upgraden' : `/modules/${m.id}/${nextUnfinished.id}`

        return (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{
                background: '#111118',
                border: `1px solid ${isActive ? '#7c3aed' : '#1e1e30'}`,
                borderRadius: 14, padding: '18px 20px',
                display: 'flex', alignItems: 'flex-start', gap: 14,
                opacity: isLocked ? 0.5 : 1,
                cursor: 'pointer',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { if (!isLocked) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(168,85,247,0.4)' }}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = isActive ? '#7c3aed' : '#1e1e30'}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700,
                  background: isDone ? 'rgba(16,185,129,.12)' : 'rgba(124,58,237,.15)',
                  border: `1px solid ${isDone ? 'rgba(16,185,129,.3)' : 'rgba(124,58,237,.3)'}`,
                  color: isDone ? '#34d399' : '#a78bfa',
                }}>
                  {isDone ? '✓' : m.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold mb-1">Module {m.id} — {m.title}</div>
                  <div className="text-xs leading-relaxed mb-3" style={{ color: '#6b7280' }}>{m.description}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {isDone && <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500, background: 'rgba(16,185,129,.12)', color: '#34d399', border: '1px solid rgba(16,185,129,.25)' }}>Voltooid</span>}
                    {isActive && <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500, background: 'rgba(245,158,11,.12)', color: '#fbbf24', border: '1px solid rgba(245,158,11,.25)' }}>Bezig — {done}/{m.lessons.length}</span>}
                    {!isDone && !isActive && !isLocked && <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)' }}>Nog niet gestart</span>}
                    {isLocked && <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)' }}>💎 Premium</span>}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
