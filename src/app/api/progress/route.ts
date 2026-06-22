import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

export async function GET() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await adminClient()
    .from('user_progress')
    .select('lesson_id, module_id, completed_at')
    .eq('user_id', userId)

  if (error) {
    console.error('GET progress error:', JSON.stringify(error), 'code:', error.code, 'msg:', error.message, 'details:', error.details)
    return NextResponse.json({ error: error.message, code: error.code, details: error.details }, { status: 500 })
  }

  const { data: streak } = await adminClient()
    .from('user_streaks')
    .select('current_streak, longest_streak')
    .eq('user_id', userId)
    .single()

  return NextResponse.json({ progress: data, streak })
}

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { lessonId, moduleId } = await req.json()

  const client = adminClient()

  const { error } = await client
    .from('user_progress')
    .upsert(
      { user_id: userId, lesson_id: lessonId, module_id: moduleId },
      { onConflict: 'user_id,lesson_id' }
    )

  if (error) {
    console.error('POST progress error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  const { data: streak } = await client
    .from('user_streaks')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (!streak) {
    await client.from('user_streaks').insert({
      user_id: userId, current_streak: 1, last_activity: today, longest_streak: 1
    })
  } else {
    const newStreak = streak.last_activity === yesterday
      ? streak.current_streak + 1
      : streak.last_activity === today
        ? streak.current_streak
        : 1
    await client.from('user_streaks').update({
      current_streak: newStreak,
      last_activity: today,
      longest_streak: Math.max(newStreak, streak.longest_streak),
      updated_at: new Date().toISOString()
    }).eq('user_id', userId)
  }

  return NextResponse.json({ success: true })
}
