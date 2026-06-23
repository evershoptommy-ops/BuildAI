import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

export async function POST(req: NextRequest) {
  try {
    const { session_id, path } = await req.json()
    if (!session_id || !path) return NextResponse.json({ ok: false }, { status: 400 })

    const db = adminClient()

    // Upsert: update last_seen als session al bestaat op dit pad, anders insert
    const { error } = await db
      .from('page_views')
      .upsert(
        { session_id, path, last_seen: new Date().toISOString() },
        { onConflict: 'session_id,path', ignoreDuplicates: false }
      )

    if (error) {
      // Als er geen unique constraint is, gewoon updaten
      await db
        .from('page_views')
        .update({ last_seen: new Date().toISOString() })
        .eq('session_id', session_id)
        .eq('path', path)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
