import { currentUser } from '@clerk/nextjs/server'
import { ArrowRight, Flame } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { modules } from '@/lib/modules'
import { getIsAdmin } from '@/lib/isAdmin'

async function getUserData(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: progress } = await client.from('user_progress').select('lesson_id, module_id').eq('user_id', userId)
  const { data: streak } = await client.from('user_streaks').select('current_streak').eq('user_id', userId).single()
  const { data: purchase } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return { progress: progress ?? [], streak: streak?.current_streak ?? 0, hasPremiumDb: !!purchase }
}

export default async function DashboardPage() {
  const user = await currentUser()
  const firstName = user?.firstName ?? 'daar'
  const isAdmin = await getIsAdmin()
  const { progress, streak, hasPremiumDb } = await getUserData(user!.id)
  const hasPremium = isAdmin || hasPremiumDb

  const completedIds = new Set(progress.map((p: { lesson_id: string }) => p.lesson_id))
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = completedIds.size
  const totalProgress = Math.round((completedCount / totalLessons) * 100)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Goedemorgen' : hour < 18 ? 'Goedemiddag' : 'Goedenavond'

  const activeModule = modules.find(m => {
    const done = m.lessons.filter(l => completedIds.has(l.id)).length
    return done > 0 && done < m.lessons.length
  }) ?? modules[0]
  const nextLesson = activeModule.lessons.find(l => !completedIds.has(l.id)) ?? activeModule.lessons[0]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 md:px-9 py-4 md:py-5" style={{ borderBottom: '1px solid #1e1e30' }}>
        <div>
          <div className="text-sm mb-1" style={{ color: '#6b7280' }}>Welkom terug 👋</div>
          <h2 className="text-lg md:text-xl font-bold">{greeting}, {firstName}</h2>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, fontSize: 13, fontWeight: 500, background: 'rgba(245,158,11,.12)', color: '#fbbf24', border: '1px solid rgba(245,158,11,.25)' }}>
              <Flame size={14} /> {streak}-daagse streak
            </div>
          )}
          <Link href={`/modules/${activeModule.id}/${nextLesson.id}`}>
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '10px 18px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              Verdergaan <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-9">
        {/* Stats: 1 kolom op mobile, 3 op tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 14, padding: '18px 20px' }}>
            <div className="text-sm mb-2" style={{ color: '#6b7280' }}>Voortgang cursus</div>
            <div className="text-3xl font-bold">{totalProgress}%</div>
            <div style={{ height: 6, background: '#1e1e30', borderRadius: 999, margin: '10px 0 6px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${totalProgress}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
            </div>
            <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Module {activeModule.id} bezig</div>
          </div>
          <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 14, padding: '18px 20px' }}>
            <div className="text-sm mb-2" style={{ color: '#6b7280' }}>Lessen voltooid</div>
            <div className="text-3xl font-bold">{completedCount}</div>
            <div className="text-xs mt-1" style={{ color: '#6b7280' }}>van {totalLessons} lessen totaal</div>
          </div>
          <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 14, padding: '18px 20px' }}>
            <div className="text-sm mb-2" style={{ color: '#6b7280' }}>Streak</div>
            <div className="text-3xl font-bold" style={{ color: streak > 0 ? '#fbbf24' : undefined }}>{streak > 0 ? `🔥 ${streak}` : '—'}</div>
            <div className="text-xs mt-1" style={{ color: '#6b7280' }}>{streak > 0 ? 'dagen op rij' : 'Nog geen streak'}</div>
          </div>
        </div>

        {/* Modules: 1 kolom op mobile, 2 op md+ */}
        <div className="text-base font-bold mb-4">Jouw modules</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {modules.map((m) => {
            const done = m.lessons.filter(l => completedIds.has(l.id)).length
            const pct = Math.round((done / m.lessons.length) * 100)
            const isDone = pct === 100
            const isActive = pct > 0 && pct < 100
            const isLocked = m.premium && !hasPremium

            return (
              <div key={m.id} style={{
                background: '#111118',
                border: `1px solid ${isActive ? '#7c3aed' : '#1e1e30'}`,
                borderRadius: 14, padding: '18px 20px',
                display: 'flex', alignItems: 'flex-start', gap: 14,
                opacity: isLocked ? 0.5 : 1,
              }}>
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
            )
          })}
        </div>
      </div>
    </div>
  )
}
