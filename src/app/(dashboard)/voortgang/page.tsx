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
  const { data: progress } = await client.from('user_progress').select('lesson_id, module_id, completed_at').eq('user_id', userId)
  const { data: streak } = await client.from('user_streaks').select('*').eq('user_id', userId).single()
  const { data: purchase } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return { progress: progress ?? [], streak, hasPremiumDb: !!purchase }
}

export default async function VoortgangPage() {
  const user = await currentUser()
  const isAdmin = await getIsAdmin()
  const { progress, streak, hasPremiumDb } = await getUserData(user!.id)
  const hasPremium = isAdmin || hasPremiumDb

  const completedIds = new Set(progress.map((p: { lesson_id: string }) => p.lesson_id))
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = completedIds.size
  const totalProgress = Math.round((completedCount / totalLessons) * 100)

  const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
  const today = new Date().getDay()
  const todayIndex = today === 0 ? 6 : today - 1
  const currentStreak = streak?.current_streak ?? 0

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 sm:px-6 md:px-9 py-5 md:py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <h2 className="text-xl font-bold">Voortgang</h2>
        <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Jouw leertraject in één overzicht</p>
      </div>

      <div className="p-4 sm:p-6 md:p-9">

        {/* Profiel header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 md:p-6 mb-6 rounded-2xl" style={{ background: '#111118', border: '1px solid #1e1e30' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, flexShrink: 0 }}>
            {user?.firstName?.[0] ?? 'U'}
          </div>
          <div className="flex-1">
            <div className="text-lg font-bold mb-0.5">{user?.firstName} {user?.lastName}</div>
            <div className="text-sm" style={{ color: '#6b7280' }}>{isAdmin ? '⚡ Admin' : hasPremium ? '💎 Premium' : 'Gratis plan'} · Lid sinds {new Date(user?.createdAt ?? '').toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}</div>
          </div>
          <div className="flex gap-6 sm:gap-10 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold">{totalProgress}%</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Voltooid</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold">{completedCount}</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Lessen</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold" style={{ color: '#fbbf24' }}>🔥 {currentStreak}</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Streak</div>
            </div>
          </div>
        </div>

        {/* Grid: 1 kolom op mobile, 2 op md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

          {/* Module voortgang */}
          <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '20px 20px' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Module voortgang</div>
            {modules.map(m => {
              const done = m.lessons.filter(l => completedIds.has(l.id)).length
              const pct = Math.round((done / m.lessons.length) * 100)
              return (
                <div key={m.id} className="flex items-center gap-3 mb-4">
                  <div style={{ fontSize: 16, width: 22, textAlign: 'center', flexShrink: 0 }}>
                    {pct === 100 ? '✅' : (m.premium && !hasPremium) ? '🔒' : pct > 0 ? '⚡' : '○'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium mb-1 truncate">{m.title}</div>
                    <div style={{ height: 4, background: '#1e1e30', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
                    </div>
                  </div>
                  <div className="text-xs w-8 text-right" style={{ color: pct === 100 ? '#34d399' : '#6b7280', flexShrink: 0 }}>
                    {(m.premium && !hasPremium) ? '—' : `${pct}%`}
                  </div>
                </div>
              )
            })}

            {!hasPremium && (
              <div className="mt-5 p-4 rounded-xl" style={{ background: 'rgba(124,58,237,.08)', border: '1px solid rgba(124,58,237,.2)' }}>
                <div className="text-sm font-semibold mb-1">Upgrade naar Premium</div>
                <div className="text-xs mb-3" style={{ color: '#6b7280' }}>Ontgrendel alle modules en ontvang een certificaat</div>
                <CheckoutButton />
              </div>
            )}
          </div>

          {/* Rechter kolom */}
          <div className="flex flex-col gap-5">

            {/* Streak */}
            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '20px 20px' }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#6b7280' }}>Dagelijkse streak</div>
              <div className="flex justify-center gap-1.5 sm:gap-2 mb-4">
                {days.map((day, i) => {
                  const isDone = currentStreak > 0 && i <= todayIndex && i > todayIndex - currentStreak
                  const isToday = i === todayIndex
                  return (
                    <div key={day} style={{
                      width: 34, height: 34, borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 600,
                      background: isToday ? '#a855f7' : isDone ? '#7c3aed' : '#1e1e30',
                      color: isDone || isToday ? '#fff' : '#6b7280',
                      boxShadow: isToday ? '0 0 10px rgba(168,85,247,0.4)' : 'none',
                    }}>
                      {day}
                    </div>
                  )
                })}
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold" style={{ color: '#a855f7', lineHeight: 1 }}>{currentStreak}</div>
                <div className="text-sm mt-2" style={{ color: '#6b7280' }}>dagen op rij 🔥</div>
                {streak?.longest_streak > 0 && (
                  <div className="text-xs mt-1" style={{ color: '#444' }}>Langste streak: {streak.longest_streak} dagen</div>
                )}
              </div>
            </div>

            {/* Prestaties */}
            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '20px 20px' }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#6b7280' }}>Prestaties</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🚀', name: 'Eerste les', desc: 'Je bent begonnen', unlocked: completedCount >= 1 },
                  { icon: '⚙️', name: 'Setup voltooid', desc: 'Module 1 klaar', unlocked: modules[0].lessons.every(l => completedIds.has(l.id)) },
                  { icon: '🔌', name: 'Builder', desc: 'Eerste extensie', unlocked: modules[1].lessons.every(l => completedIds.has(l.id)) },
                  { icon: '💶', name: 'Eerste klant', desc: 'Betaald project', unlocked: false },
                ].map(a => (
                  <div key={a.name} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: '#16161f', border: '1px solid #1e1e30', opacity: a.unlocked ? 1 : 0.4 }}>
                    <div style={{ fontSize: 20, flexShrink: 0 }}>{a.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">{a.name}</div>
                      <div className="text-xs mt-0.5 truncate" style={{ color: '#6b7280' }}>{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
