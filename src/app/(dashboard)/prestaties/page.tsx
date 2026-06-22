import { currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { modules } from '@/lib/modules'
import CheckoutButton from '@/components/CheckoutButton'
import { getIsAdmin } from '@/lib/isAdmin'

async function getUserData(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: progress } = await client.from('user_progress').select('lesson_id, module_id').eq('user_id', userId)
  const { data: streak } = await client.from('user_streaks').select('current_streak, longest_streak').eq('user_id', userId).single()
  const { data: purchase } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return {
    progress: progress ?? [],
    streak: streak ?? { current_streak: 0, longest_streak: 0 },
    hasPremium: !!purchase,
  }
}

export default async function PrestatiesPage() {
  const user = await currentUser()
  const isAdmin = await getIsAdmin()
  const { progress, streak, hasPremium: hasPremiumDb } = await getUserData(user!.id)
  const hasPremium = isAdmin || hasPremiumDb

  const completedIds = new Set(progress.map((p: { lesson_id: string }) => p.lesson_id))
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = completedIds.size
  const allDone = completedCount === totalLessons

  const mod1Done = modules[0].lessons.every(l => completedIds.has(l.id))
  const mod2Done = modules[1].lessons.every(l => completedIds.has(l.id))
  const mod3Done = modules[2].lessons.every(l => completedIds.has(l.id))
  const mod4Done = modules[3].lessons.every(l => completedIds.has(l.id))

  const badges = [
    { icon: '🚀', name: 'Eerste stap', desc: 'Je eerste les voltooid', unlocked: completedCount >= 1 },
    { icon: '⚙️', name: 'Setup Pro', desc: 'Module 1 volledig afgerond', unlocked: mod1Done },
    { icon: '🔌', name: 'Builder', desc: 'Eerste Chrome extensie gebouwd', unlocked: mod2Done },
    { icon: '💶', name: 'Freelancer', desc: 'Module 3 voltooid', unlocked: mod3Done },
    { icon: '🏗️', name: 'Architect', desc: 'Module 4 voltooid', unlocked: mod4Done },
    { icon: '🔥', name: 'Op Stoom', desc: '7 dagen streak', unlocked: streak.current_streak >= 7 },
    { icon: '⚡', name: 'Snelle Starter', desc: '5 lessen voltooid', unlocked: completedCount >= 5 },
    { icon: '🏆', name: 'Cursus Voltooid', desc: 'Alle lessen afgerond', unlocked: allDone },
  ]

  const milestones = [
    { pct: 10, label: '10% voltooid', unlocked: completedCount >= Math.ceil(totalLessons * 0.1) },
    { pct: 25, label: '25% voltooid', unlocked: completedCount >= Math.ceil(totalLessons * 0.25) },
    { pct: 50, label: 'Halfway there', unlocked: completedCount >= Math.ceil(totalLessons * 0.5) },
    { pct: 75, label: '75% voltooid', unlocked: completedCount >= Math.ceil(totalLessons * 0.75) },
    { pct: 100, label: 'Volledig afgerond', unlocked: allDone },
  ]

  const unlockedBadges = badges.filter(b => b.unlocked).length
  const totalProgress = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="flex flex-col h-full">
      <div className="px-9 py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <h2 className="text-xl font-bold">Prestaties</h2>
        <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Jouw behaalde badges en mijlpalen</p>
      </div>

      <div className="p-9">

        {/* SCORE HEADER */}
        <div className="flex items-center gap-6 p-6 mb-8 rounded-2xl" style={{ background: '#111118', border: '1px solid #1e1e30' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>
            🏆
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold mb-1">{unlockedBadges} van {badges.length} badges behaald</div>
            <div style={{ height: 8, background: '#1e1e30', borderRadius: 999, overflow: 'hidden', maxWidth: 320 }}>
              <div style={{ height: '100%', width: `${Math.round((unlockedBadges / badges.length) * 100)}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999, transition: 'width 0.6s ease' }} />
            </div>
            <div className="text-sm mt-2" style={{ color: '#6b7280' }}>Cursus voortgang: {totalProgress}%</div>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">{unlockedBadges}</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Badges</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#fbbf24' }}>🔥 {streak.current_streak}</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Streak</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{completedCount}</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Lessen</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* BADGES */}
          <div className="col-span-2" style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: 24 }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Badges</div>
            <div className="grid grid-cols-2 gap-4">
              {badges.map(badge => (
                <div key={badge.name} className="flex items-center gap-4 p-4 rounded-xl" style={{
                  background: badge.unlocked ? 'rgba(124,58,237,.08)' : '#16161f',
                  border: `1px solid ${badge.unlocked ? 'rgba(124,58,237,.3)' : '#1e1e30'}`,
                  opacity: badge.unlocked ? 1 : 0.45,
                }}>
                  <div style={{ fontSize: 28, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, background: badge.unlocked ? 'rgba(124,58,237,.15)' : '#1e1e30', flexShrink: 0 }}>
                    {badge.unlocked ? badge.icon : '🔒'}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{badge.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{badge.desc}</div>
                    {badge.unlocked && (
                      <div className="text-xs mt-1" style={{ color: '#a855f7' }}>✓ Behaald</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RECHTER KOLOM */}
          <div className="flex flex-col gap-5">

            {/* MIJLPALEN */}
            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: 24 }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#6b7280' }}>Mijlpalen</div>
              <div className="flex flex-col gap-3">
                {milestones.map(m => (
                  <div key={m.pct} className="flex items-center gap-3">
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12,
                      background: m.unlocked ? 'rgba(16,185,129,.15)' : '#1e1e30',
                      border: `1px solid ${m.unlocked ? 'rgba(16,185,129,.4)' : '#2a2a3a'}`,
                      color: m.unlocked ? '#34d399' : '#6b7280',
                    }}>
                      {m.unlocked ? '✓' : m.pct}
                    </div>
                    <div className="text-sm" style={{ color: m.unlocked ? '#e5e7eb' : '#6b7280' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICAAT */}
            <div style={{ background: '#111118', border: `1px solid ${allDone && hasPremium ? 'rgba(124,58,237,.4)' : '#1e1e30'}`, borderRadius: 16, padding: 24 }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Certificaat</div>
              {allDone && hasPremium ? (
                <>
                  <div className="text-sm mb-3">🎓 Je hebt de cursus voltooid! Download je certificaat.</div>
                  <button style={{ width: '100%', background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '10px 0', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                    📄 Download certificaat
                  </button>
                </>
              ) : !hasPremium ? (
                <>
                  <div className="text-sm mb-3" style={{ color: '#6b7280' }}>Upgrade naar Premium om een certificaat te ontvangen na voltooiing.</div>
                  <CheckoutButton />
                </>
              ) : (
                <div className="text-sm" style={{ color: '#6b7280' }}>Rond alle lessen af om je certificaat te downloaden. ({completedCount}/{totalLessons} lessen voltooid)</div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
