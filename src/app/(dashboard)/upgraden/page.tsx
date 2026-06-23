import { currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { getIsAdmin } from '@/lib/isAdmin'
import { modules } from '@/lib/modules'
import { Check } from 'lucide-react'
import CheckoutButton from '@/components/CheckoutButton'
import { redirect } from 'next/navigation'

async function getPremiumStatus(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return !!data
}

const included = [
  'Module 3 — Bouw een Krachtige AI Machine',
  'Module 4 — Bouw een SEO Agent',
  'Module 5 — Bouw een Content Agent',
  'Alle toekomstige modules',
  'Certificaat na voltooiing',
]

export default async function UpgradenPage() {
  const user = await currentUser()
  const isAdmin = await getIsAdmin()
  const hasPremiumDb = await getPremiumStatus(user!.id)
  const hasPremium = isAdmin || hasPremiumDb

  if (hasPremium) redirect('/modules')

  const premiumModules = modules.filter(m => m.premium)

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 sm:px-6 md:px-9 py-5 md:py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <h2 className="text-xl font-bold">Upgrade naar Premium</h2>
        <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Eenmalig — levenslang toegang tot alle modules</p>
      </div>

      <div className="p-4 sm:p-6 md:p-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 max-w-4xl">

          {/* Links: wat je krijgt */}
          <div className="flex flex-col gap-5">
            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 20px' }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Inbegrepen bij Premium</div>
              <div className="flex flex-col gap-3">
                {included.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={15} style={{ color: '#a855f7', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 20px' }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#6b7280' }}>Premium modules</div>
              <div className="flex flex-col gap-4">
                {premiumModules.map(m => (
                  <div key={m.id} className="flex gap-3 items-start">
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(124,58,237,.12)', border: '1px solid rgba(124,58,237,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#a855f7', flexShrink: 0 }}>
                      {m.id}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{m.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{m.lessons.length} lessen</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rechts: prijs + CTA */}
          <div>
            <div style={{ background: 'rgba(124,58,237,.06)', border: '1px solid rgba(124,58,237,.35)', borderRadius: 20, padding: '28px 24px' }}>
              <div className="text-sm font-semibold mb-1" style={{ color: '#a855f7' }}>Clavify Premium</div>
              <div className="text-5xl font-extrabold mb-1" style={{ letterSpacing: '-2px' }}>€97</div>
              <div className="text-sm mb-2" style={{ color: '#6b7280' }}>Eenmalig — levenslang toegang</div>

              <div style={{ height: 1, background: '#1e1e30', margin: '20px 0' }} />

              <div className="flex flex-col gap-2 mb-6">
                {[
                  'Geen maandelijkse kosten',
                  'Alle toekomstige modules inbegrepen',
                  'Direct toegang na betaling',
                ].map(f => (
                  <div key={f} className="text-xs flex items-center gap-2" style={{ color: '#6b7280' }}>
                    <Check size={12} style={{ color: '#34d399', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>

              <CheckoutButton />

              <p className="text-xs text-center mt-4" style={{ color: '#4b5563' }}>
                Veilige betaling via Stripe
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
