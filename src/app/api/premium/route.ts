import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

export async function GET() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ premium: false, admin: false })

  const user = await currentUser()
  const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() ?? ''
  const isAdmin = ADMIN_EMAILS.includes(email)

  if (isAdmin) return NextResponse.json({ premium: true, admin: true })

  const { data } = await adminClient()
    .from('user_purchases')
    .select('product')
    .eq('user_id', userId)
    .eq('product', 'premium')
    .single()

  return NextResponse.json({ premium: !!data, admin: false })
}
