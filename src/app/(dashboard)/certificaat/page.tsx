import { currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { modules } from '@/lib/modules'
import { getIsAdmin } from '@/lib/isAdmin'
import CertificaatClient from './CertificaatClient'

async function getUserData(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: progress } = await client.from('user_progress').select('lesson_id').eq('user_id', userId)
  const { data: purchase } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return {
    completedIds: new Set((progress ?? []).map((p: { lesson_id: string }) => p.lesson_id)),
    hasPremium: !!purchase,
  }
}

export default async function CertificaatPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const isAdmin = await getIsAdmin()
  const { completedIds, hasPremium } = await getUserData(user.id)
  if (!isAdmin && !hasPremium) redirect('/upgraden')

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const allDone = completedIds.size >= totalLessons

  const moduleDone = modules.map(m => ({
    id: m.id,
    title: m.title,
    done: m.lessons.every(l => completedIds.has(l.id)),
    completed: m.lessons.filter(l => completedIds.has(l.id)).length,
    total: m.lessons.length,
  }))

  const defaultName = [user.firstName, user.lastName].filter(Boolean).join(' ') ||
    user.emailAddresses[0]?.emailAddress?.split('@')[0] || 'Student'

  return (
    <div className="min-h-screen p-6 md:p-10" style={{ background: '#0a0a0f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#a855f7' }}>Certificaten</div>
          <h1 className="text-2xl font-bold">Jouw certificaten</h1>
          <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Verdien certificaten door modules te voltooien. Deel ze op LinkedIn.</p>
        </div>

        <CertificaatClient
          defaultName={defaultName}
          userId={user.id}
          allDone={allDone}
          moduleDone={moduleDone}
        />
      </div>
    </div>
  )
}
