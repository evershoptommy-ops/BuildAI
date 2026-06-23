import { currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { modules } from '@/lib/modules'
import { getIsAdmin } from '@/lib/isAdmin'
import CertificaatDownload from './CertificaatDownload'

async function getUserData(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: progress } = await client.from('user_progress').select('lesson_id').eq('user_id', userId)
  const { data: purchase } = await client.from('user_purchases').select('purchased_at').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return {
    completedIds: new Set((progress ?? []).map((p: { lesson_id: string }) => p.lesson_id)),
    hasPremium: !!purchase,
    purchasedAt: purchase?.purchased_at ?? null,
  }
}

export default async function CertificaatPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const isAdmin = await getIsAdmin()
  const { completedIds, hasPremium, purchasedAt } = await getUserData(user.id)
  const hasPremiumAccess = isAdmin || hasPremium

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const allDone = completedIds.size >= totalLessons

  const moduleDone = modules.map(m => ({
    ...m,
    done: m.lessons.every(l => completedIds.has(l.id)),
  }))

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ') || user.emailAddresses[0]?.emailAddress || 'Student'

  if (!hasPremiumAccess) redirect('/upgraden')

  return (
    <div className="min-h-screen p-6 md:p-10" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#a855f7' }}>Certificaten</div>
          <h1 className="text-2xl font-bold">Jouw certificaten</h1>
          <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Verdien certificaten door modules te voltooien. Deel ze op LinkedIn.</p>
        </div>

        {/* Eindcertificaat */}
        <div className="mb-6" style={{ background: '#111118', border: `1px solid ${allDone ? 'rgba(168,85,247,0.4)' : '#1e1e30'}`, borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden' }}>
          {allDone && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #7c3aed, #a855f7, #6366f1)' }} />
          )}
          <div className="flex items-start gap-4">
            <div style={{ width: 56, height: 56, borderRadius: 16, background: allDone ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#1e1e30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
              {allDone ? '🎓' : '🔒'}
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">Clavify — Volledig certificaat</div>
              <div className="text-sm mt-1" style={{ color: '#6b7280' }}>
                {allDone ? 'Alle 4 modules voltooid — je hebt de volledige cursus afgerond.' : `${completedIds.size} van ${totalLessons} lessen voltooid. Rond alle modules af om dit certificaat te verdienen.`}
              </div>
              {allDone && (
                <div className="mt-4">
                  <CertificaatDownload
                    name={fullName}
                    type="full"
                    moduleTitle="Clavify AI-cursus"
                    certId={`CL-FULL-${user.id.slice(-6).toUpperCase()}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Per module */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moduleDone.map(m => (
            <div key={m.id} style={{ background: '#111118', border: `1px solid ${m.done ? 'rgba(168,85,247,0.25)' : '#1e1e30'}`, borderRadius: 16, padding: 22, position: 'relative', overflow: 'hidden' }}>
              {m.done && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }} />
              )}
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: 40, height: 40, borderRadius: 12, background: m.done ? 'rgba(124,58,237,0.2)' : '#1e1e30', border: `1px solid ${m.done ? 'rgba(124,58,237,0.4)' : '#2a2a3a'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                  {m.done ? '✓' : m.id}
                </div>
                <div>
                  <div className="font-semibold text-sm">Module {m.id}</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>{m.title}</div>
                </div>
                {m.done && <div className="ml-auto text-xs font-medium" style={{ color: '#a855f7' }}>Voltooid</div>}
              </div>

              {!m.done && (
                <div>
                  <div style={{ height: 4, background: '#1e1e30', borderRadius: 999, overflow: 'hidden', marginBottom: 6 }}>
                    <div style={{ height: '100%', width: `${Math.round((m.lessons.filter(l => completedIds.has(l.id)).length / m.lessons.length) * 100)}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
                  </div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>
                    {m.lessons.filter(l => completedIds.has(l.id)).length} / {m.lessons.length} lessen
                  </div>
                </div>
              )}

              {m.done && (
                <CertificaatDownload
                  name={fullName}
                  type="module"
                  moduleTitle={`Module ${m.id} — ${m.title}`}
                  certId={`CL-M${m.id}-${user.id.slice(-6).toUpperCase()}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
