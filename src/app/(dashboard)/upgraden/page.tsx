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
            <div style={{ position: 'relative', background: 'linear-gradient(145deg, rgba(124,58,237,.12), rgba(168,85,247,.06))', border: '1px solid rgba(168,85,247,.4)', borderRadius: 20, padding: '28px 24px', overflow: 'hidden' }}>
              {/* Glow achtergrond */}
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

              {/* Populair badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, background: 'rgba(168,85,247,.2)', color: '#c4b5fd', border: '1px solid rgba(168,85,247,.4)', marginBottom: 16 }}>
                ✦ Meest gekozen
              </div>

              <div className="text-sm font-semibold mb-1" style={{ color: '#a855f7' }}>Clavify Premium</div>

              <div className="flex items-end gap-2 mb-1">
                <div className="text-5xl font-extrabold" style={{ letterSpacing: '-2px' }}>€197</div>
                <div className="text-sm mb-2" style={{ color: '#6b7280' }}>eenmalig</div>
              </div>
              <div className="text-xs mb-1" style={{ color: '#6b7280' }}>Levenslang toegang — geen abonnement</div>

              <div style={{ height: 1, background: 'rgba(168,85,247,.2)', margin: '20px 0' }} />

              <div className="flex flex-col gap-3 mb-6">
                {[
                  'Geen maandelijkse kosten',
                  'Alle toekomstige modules inbegrepen',
                  'Direct toegang na betaling',
                  '14 dagen niet-goed-geld-terug garantie',
                ].map(f => (
                  <div key={f} className="text-sm flex items-center gap-2">
                    <Check size={14} style={{ color: '#34d399', flexShrink: 0 }} />
                    <span style={{ color: '#d1d5db' }}>{f}</span>
                  </div>
                ))}
              </div>

              <CheckoutButton />

              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="text-xs" style={{ color: '#4b5563' }}>🔒 Stripe</span>
                <span className="text-xs" style={{ color: '#4b5563' }}>🛡️ 14 dagen garantie</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
