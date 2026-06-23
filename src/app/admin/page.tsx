import { redirect } from 'next/navigation'
import { getIsAdmin } from '@/lib/isAdmin'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'
import { modules } from '@/lib/modules'
import { Users, TrendingUp, Euro, BookOpen, Flame, Award } from 'lucide-react'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

async function getLiveStats() {
  const db = adminClient()
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
  const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString()
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  // Live bezoekers — unieke sessies actief in laatste 5 min
  const { data: liveRows } = await db
    .from('page_views')
    .select('session_id, path')
    .gte('last_seen', fiveMinAgo)

  const liveSessions = new Map<string, string>()
  liveRows?.forEach(r => liveSessions.set(r.session_id, r.path))
  const liveVisitors = Array.from(liveSessions.entries()).map(([sid, path]) => ({ sid, path }))

  // Stripe: checkouts geopend laatste 30 min
  const allSessions = await stripe.checkout.sessions.list({ limit: 100 })
  const inCheckout = allSessions.data.filter(s =>
    s.status === 'open' && s.created * 1000 > Date.now() - 30 * 60 * 1000
  )

  // Stripe: betalingen laatste 24u
  const recentPaid = allSessions.data.filter(s =>
    s.payment_status === 'paid' && s.created * 1000 > Date.now() - 24 * 60 * 60 * 1000
  )

  // Top pagina's afgelopen uur
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
  const { data: recentViews } = await db
    .from('page_views')
    .select('path')
    .gte('last_seen', oneHourAgo)

  const pageCounts: Record<string, number> = {}
  recentViews?.forEach(r => { pageCounts[r.path] = (pageCounts[r.path] ?? 0) + 1 })
  const topPages = Object.entries(pageCounts).sort((a, b) => b[1] - a[1]).slice(0, 6)

  return { liveVisitors, inCheckout, recentPaid, topPages }
}

async function getStats() {
  const db = adminClient()
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const [
    { data: purchases },
    { data: progress },
    { data: streaks },
    { count: totalUsers },
  ] = await Promise.all([
    db.from('user_purchases').select('*').eq('product', 'premium'),
    db.from('user_progress').select('lesson_id, user_id, completed_at'),
    db.from('user_streaks').select('current_streak, longest_streak, user_id'),
    db.from('user_progress').select('user_id', { count: 'exact', head: true }),
  ])

  // Stripe betalingen ophalen
  const sessions = await stripe.checkout.sessions.list({ limit: 100 })
  const paidSessions = sessions.data.filter(s => s.payment_status === 'paid')
  const totalRevenue = paidSessions.reduce((sum, s) => sum + (s.amount_total ?? 0), 0)

  // Unieke gebruikers
  const uniqueUsers = new Set(progress?.map(p => p.user_id) ?? []).size

  // Meest voltooide lessen
  const lessonCounts: Record<string, number> = {}
  progress?.forEach(p => {
    lessonCounts[p.lesson_id] = (lessonCounts[p.lesson_id] ?? 0) + 1
  })
  const topLessons = Object.entries(lessonCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([id, count]) => {
      const [moduleId, lessonNum] = id.split('-')
      const mod = modules.find(m => String(m.id) === moduleId)
      const lesson = mod?.lessons.find(l => l.id === id)
      return { id, title: lesson?.title ?? id, module: moduleId, count }
    })

  // Aankopen per dag (laatste 14 dagen)
  const now = new Date()
  const days: { date: string; count: number; revenue: number }[] = []
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    const daySessions = paidSessions.filter(s => {
      const created = new Date((s.created) * 1000).toISOString().split('T')[0]
      return created === dateStr
    })
    days.push({
      date: dateStr,
      count: daySessions.length,
      revenue: daySessions.reduce((sum, s) => sum + (s.amount_total ?? 0), 0),
    })
  }

  // Streak stats
  const activeStreaks = streaks?.filter(s => s.current_streak > 0) ?? []
  const avgStreak = activeStreaks.length > 0
    ? Math.round(activeStreaks.reduce((s, u) => s + u.current_streak, 0) / activeStreaks.length)
    : 0
  const maxStreak = streaks?.reduce((max, s) => Math.max(max, s.longest_streak ?? 0), 0) ?? 0

  // Voortgang per module
  const moduleProgress = modules.map(m => {
    const total = progress?.filter(p => p.lesson_id.startsWith(`${m.id}-`)).length ?? 0
    return { id: m.id, title: m.title, completions: total }
  })

  return {
    premiumCount: purchases?.length ?? 0,
    totalRevenue,
    uniqueUsers,
    totalCompletions: progress?.length ?? 0,
    topLessons,
    days,
    avgStreak,
    maxStreak,
    moduleProgress,
    recentPurchases: purchases?.slice(-5).reverse() ?? [],
  }
}

function StatCard({ icon, label, value, sub, color }: { icon: React.ReactNode; label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 14, padding: '20px 22px' }}>
      <div className="flex items-center gap-3 mb-3">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color ?? '#7c3aed'}22`, border: `1px solid ${color ?? '#7c3aed'}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color ?? '#a855f7' }}>
          {icon}
        </div>
        <div className="text-sm" style={{ color: '#6b7280' }}>{label}</div>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {sub && <div className="text-xs mt-1" style={{ color: '#6b7280' }}>{sub}</div>}
    </div>
  )
}

export default async function AdminPage() {
  const isAdmin = await getIsAdmin()
  if (!isAdmin) redirect('/dashboard')

  const [stats, live] = await Promise.all([getStats(), getLiveStats()])
  const maxBar = Math.max(...stats.days.map(d => d.revenue), 1)

  return (
    <div className="min-h-screen p-6 md:p-10" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#a855f7' }}>Admin</div>
          <h1 className="text-2xl font-bold">Clavify Dashboard</h1>
        </div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>
          {new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>

      {/* Live sectie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        {/* Live bezoekers */}
        <div style={{ background: '#0d1117', border: '1px solid #1a2a1a', borderRadius: 16, padding: '20px 22px' }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7280' }}>Live bezoekers</div>
            <div className="ml-auto text-2xl font-bold" style={{ color: '#22c55e' }}>{live.liveVisitors.length}</div>
          </div>
          <div className="flex flex-col gap-1.5">
            {live.liveVisitors.length === 0 && <div style={{ color: '#6b7280', fontSize: 12 }}>Niemand actief</div>}
            {live.liveVisitors.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', opacity: 0.7, flexShrink: 0 }} />
                <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: 'monospace' }} className="truncate">{v.path}</div>
              </div>
            ))}
          </div>
        </div>

        {/* In checkout */}
        <div style={{ background: '#111108', border: '1px solid #2a2a10', borderRadius: 16, padding: '20px 22px' }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 8px #fbbf24' }} />
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7280' }}>In checkout</div>
            <div className="ml-auto text-2xl font-bold" style={{ color: '#fbbf24' }}>{live.inCheckout.length}</div>
          </div>
          <div className="flex flex-col gap-1.5">
            {live.inCheckout.length === 0 && <div style={{ color: '#6b7280', fontSize: 12 }}>Niemand in checkout</div>}
            {live.inCheckout.map(s => (
              <div key={s.id} className="flex items-center justify-between">
                <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: 'monospace' }}>{s.id.slice(-8)}</div>
                <div style={{ fontSize: 11, color: '#6b7280' }}>
                  {Math.round((Date.now() - s.created * 1000) / 60000)}m geleden
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Betaald laatste 24u */}
        <div style={{ background: '#0d1118', border: '1px solid #1a1a2a', borderRadius: 16, padding: '20px 22px' }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7' }} />
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7280' }}>Betaald (24u)</div>
            <div className="ml-auto text-2xl font-bold" style={{ color: '#a855f7' }}>{live.recentPaid.length}</div>
          </div>
          <div className="flex flex-col gap-1.5">
            {live.recentPaid.length === 0 && <div style={{ color: '#6b7280', fontSize: 12 }}>Nog geen betalingen vandaag</div>}
            {live.recentPaid.map(s => (
              <div key={s.id} className="flex items-center justify-between">
                <div style={{ fontSize: 12, color: '#9ca3af' }}>€{((s.amount_total ?? 0) / 100).toFixed(0)}</div>
                <div style={{ fontSize: 11, color: '#6b7280' }}>
                  {new Date(s.created * 1000).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top pagina's */}
      {live.topPages.length > 0 && (
        <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '20px 24px', marginBottom: 24 }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#6b7280' }}>Populairste pagina's afgelopen uur</div>
          <div className="flex flex-wrap gap-2">
            {live.topPages.map(([path, count]) => (
              <div key={path} style={{ background: '#1e1e30', borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#9ca3af', display: 'flex', gap: 8 }}>
                <span style={{ fontFamily: 'monospace' }}>{path}</span>
                <span style={{ color: '#a855f7', fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <StatCard icon={<Euro size={16} />} label="Totale omzet" value={`€${(stats.totalRevenue / 100).toFixed(0)}`} sub="via Stripe" color="#34d399" />
        <StatCard icon={<Award size={16} />} label="Premium users" value={stats.premiumCount} sub="aankopen totaal" color="#a855f7" />
        <StatCard icon={<Users size={16} />} label="Actieve users" value={stats.uniqueUsers} sub="hebben lessen gedaan" />
        <StatCard icon={<BookOpen size={16} />} label="Les voltooiingen" value={stats.totalCompletions} sub="totaal" />
        <StatCard icon={<Flame size={16} />} label="Gem. streak" value={`${stats.avgStreak}d`} sub="actieve gebruikers" color="#fbbf24" />
        <StatCard icon={<TrendingUp size={16} />} label="Langste streak" value={`${stats.maxStreak}d`} sub="ooit behaald" color="#f97316" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* Omzet afgelopen 14 dagen */}
        <div className="lg:col-span-2" style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 24px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: '#6b7280' }}>Omzet afgelopen 14 dagen</div>
          <div className="flex items-end gap-1.5" style={{ height: 120 }}>
            {stats.days.map((day) => {
              const height = day.revenue > 0 ? Math.max((day.revenue / maxBar) * 100, 8) : 2
              const isToday = day.date === new Date().toISOString().split('T')[0]
              return (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-1" title={`${day.date}: €${(day.revenue / 100).toFixed(0)}`}>
                  <div style={{ width: '100%', height: `${height}%`, background: isToday ? '#a855f7' : day.revenue > 0 ? '#7c3aed' : '#1e1e30', borderRadius: '4px 4px 0 0', transition: 'height 0.3s' }} />
                  <div style={{ fontSize: 9, color: '#4b5563', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                    {day.date.slice(5)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Module voltooiingen */}
        <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 24px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Voltooiingen per module</div>
          <div className="flex flex-col gap-3">
            {stats.moduleProgress.map(m => {
              const max = Math.max(...stats.moduleProgress.map(x => x.completions), 1)
              const pct = Math.round((m.completions / max) * 100)
              return (
                <div key={m.id}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: '#9ca3af' }}>Module {m.id}</span>
                    <span style={{ color: '#6b7280' }}>{m.completions}</span>
                  </div>
                  <div style={{ height: 6, background: '#1e1e30', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Top lessen */}
        <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 24px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Meest voltooide lessen</div>
          <div className="flex flex-col gap-2">
            {stats.topLessons.length === 0 && <div style={{ color: '#6b7280', fontSize: 13 }}>Nog geen data</div>}
            {stats.topLessons.map((l, i) => (
              <div key={l.id} className="flex items-center gap-3">
                <div style={{ width: 22, height: 22, borderRadius: 6, background: '#1e1e30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#6b7280', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate">{l.title}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Module {l.module} · les {l.id}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#a855f7' }}>{l.count}×</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recente aankopen */}
        <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 24px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Recente aankopen</div>
          <div className="flex flex-col gap-3">
            {stats.recentPurchases.length === 0 && <div style={{ color: '#6b7280', fontSize: 13 }}>Nog geen aankopen</div>}
            {stats.recentPurchases.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-mono" style={{ color: '#9ca3af' }}>{p.user_id.slice(0, 20)}…</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>
                    {new Date(p.purchased_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#34d399' }}>
                  €{((p.amount ?? 0) / 100).toFixed(0)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
