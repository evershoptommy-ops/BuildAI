import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

export async function GET() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ premium: false })

  const { data } = await adminClient()
    .from('user_purchases')
    .select('product')
    .eq('user_id', userId)
    .eq('product', 'premium')
    .single()

  return NextResponse.json({ premium: !!data })
}
