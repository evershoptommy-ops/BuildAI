import { currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { getIsAdmin } from '@/lib/isAdmin'
import { UserButton } from '@clerk/nextjs'
import CheckoutButton from '@/components/CheckoutButton'

async function getPremiumStatus(userId: string) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data } = await client.from('user_purchases').select('id').eq('user_id', userId).eq('product', 'premium').maybeSingle()
  return !!data
}

export default async function InstellingenPage() {
  const user = await currentUser()
  const isAdmin = await getIsAdmin()
  const hasPremiumDb = await getPremiumStatus(user!.id)
  const hasPremium = isAdmin || hasPremiumDb

  const email = user?.emailAddresses?.[0]?.emailAddress ?? ''
  const name = [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'Onbekend'

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 sm:px-6 md:px-9 py-5 md:py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <h2 className="text-xl font-bold">Instellingen</h2>
        <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Jouw account en abonnement</p>
      </div>

      <div className="p-4 sm:p-6 md:p-9 flex flex-col gap-5 md:gap-6 w-full md:max-w-2xl">

        {/* Profiel */}
        <div style={{ background: '#111118', border: '1px solid #1e1e30', borderRadius: 16, padding: '22px 20px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Profiel</div>
          <div className="flex items-center gap-4 mb-5">
            <UserButton />
            <div className="min-w-0">
              <div className="font-semibold truncate">{name}</div>
              <div className="text-sm mt-0.5 truncate" style={{ color: '#6b7280' }}>{email}</div>
            </div>
          </div>
          <div style={{ fontSize: 13, color: '#6b7280' }}>
            Klik op je profielfoto hierboven om je naam, e-mail of wachtwoord te wijzigen.
          </div>
        </div>

        {/* Abonnement */}
        <div style={{ background: '#111118', border: `1px solid ${hasPremium ? 'rgba(124,58,237,.35)' : '#1e1e30'}`, borderRadius: 16, padding: '22px 20px' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#6b7280' }}>Abonnement</div>

          <div className="flex items-center gap-3 mb-4">
            <div style={{
              padding: '4px 12px', borderRadius: 999, fontSize: 13, fontWeight: 600,
              background: hasPremium ? 'rgba(124,58,237,.15)' : 'rgba(107,114,128,.12)',
              color: hasPremium ? '#a855f7' : '#6b7280',
              border: `1px solid ${hasPremium ? 'rgba(124,58,237,.35)' : '#2a2a3a'}`,
            }}>
              {isAdmin ? '⚡ Admin' : hasPremium ? '💎 Clavify Premium' : 'Gratis plan'}
            </div>
          </div>

          {hasPremium ? (
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Je hebt toegang tot alle modules, inclusief module 3, 4 en 5. Je certificaat is beschikbaar zodra je alle lessen hebt afgerond.
            </p>
          ) : (
            <>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
                Je hebt nu toegang tot module 1 en 2. Upgrade naar Premium voor toegang tot alle modules, inclusief de SEO agent en content agent.
              </p>
              <CheckoutButton />
            </>
          )}
        </div>

      </div>
    </div>
  )
}
