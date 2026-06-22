'use client'

import { useParams, useRouter } from 'next/navigation'
import { modules } from '@/lib/modules'
import { ChevronLeft, ChevronRight, CheckCircle2, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = Number(params.moduleId)
  const lessonId = params.lessonId as string

  const mod = modules.find(m => m.id === moduleId)
  const lessonIndex = mod?.lessons.findIndex(l => l.id === lessonId) ?? -1
  const lesson = mod?.lessons[lessonIndex]

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/progress')
      .then(r => r.json())
      .then(data => {
        if (data.progress) {
          setCompletedLessons(new Set(data.progress.map((p: { lesson_id: string }) => p.lesson_id)))
        }
      })
  }, [])

  if (!mod || !lesson || lessonIndex === -1) return null

  const prevLesson = mod.lessons[lessonIndex - 1]
  const nextLesson = mod.lessons[lessonIndex + 1]
  const progress = Math.round(((lessonIndex + 1) / mod.lessons.length) * 100)
  const isCompleted = completedLessons.has(lessonId)

  async function completeAndContinue() {
    setSaving(true)
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonId, moduleId }),
    })
    setCompletedLessons(prev => new Set([...prev, lessonId]))
    setSaving(false)
    if (nextLesson) {
      router.push(`/modules/${moduleId}/${nextLesson.id}`)
    } else {
      router.push('/modules')
    }
  }

  return (
    <div className="flex h-full">

      {/* SIDEBAR */}
      <div style={{ width: 300, background: '#111118', borderRight: '1px solid #1e1e30', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div className="p-6" style={{ borderBottom: '1px solid #1e1e30' }}>
          <Link href="/modules" className="flex items-center gap-2 text-xs mb-4" style={{ color: '#6b7280' }}>
            <ChevronLeft size={12} /> Terug naar modules
          </Link>
          <div className="text-sm font-bold mb-3">Module {mod.id} — {mod.title}</div>
          <div style={{ height: 4, background: '#1e1e30', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
          </div>
          <div className="text-xs mt-2" style={{ color: '#6b7280' }}>Les {lessonIndex + 1} van {mod.lessons.length}</div>
        </div>

        <div className="flex-1 overflow-auto p-3">
          {mod.lessons.map((l, i) => {
            const done = completedLessons.has(l.id)
            const active = l.id === lessonId
            return (
              <Link key={l.id} href={`/modules/${moduleId}/${l.id}`}>
                <div className="flex items-center gap-3 px-3 py-[10px] rounded-lg text-sm cursor-pointer mb-1"
                  style={{
                    background: active ? 'rgba(124,58,237,.12)' : 'transparent',
                    color: done ? '#34d399' : active ? '#fff' : '#6b7280',
                  }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 700,
                    background: done ? 'rgba(16,185,129,.15)' : active ? 'rgba(124,58,237,.3)' : '#1e1e30',
                    color: done ? '#34d399' : active ? '#a78bfa' : '#6b7280',
                    border: `1px solid ${done ? 'rgba(16,185,129,.3)' : active ? 'rgba(124,58,237,.5)' : '#2a2a3a'}`,
                  }}>
                    {done ? '✓' : i + 1}
                  </div>
                  <span className="flex-1 text-xs leading-tight">{l.title}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* INHOUD */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-9 py-4" style={{ borderBottom: '1px solid #1e1e30' }}>
          <div className="text-sm font-semibold">Les {lessonIndex + 1} — {lesson.title}</div>
          <div className="flex items-center gap-3 text-sm" style={{ color: '#6b7280' }}>
            <Clock size={13} />
            <span>{lesson.duration}</span>
            <div style={{ width: 120, height: 4, background: '#1e1e30', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: '#a855f7', borderRadius: 999 }} />
            </div>
            <span>{progress}%</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto px-14 py-10">
          <div className="text-xs font-semibold mb-3 tracking-wider" style={{ color: '#a855f7' }}>
            MODULE {mod.id} · LES {lessonIndex + 1}
          </div>
          <h1 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: '-0.5px' }}>{lesson.title}</h1>
          <p className="text-base mb-10 max-w-xl leading-relaxed" style={{ color: '#6b7280' }}>{lesson.description}</p>

          <div className="flex flex-col gap-4 mb-10 max-w-2xl">
            {[
              { num: 1, title: 'Voorbereiding', desc: 'Zorg dat VS Code open staat en je project zichtbaar is in de sidebar.', done: true },
              { num: 2, title: 'Stap uitvoeren', desc: 'Volg de instructies hieronder stap voor stap. Claude helpt je als je vastloopt.', active: true },
              { num: 3, title: 'Resultaat controleren', desc: 'Na het uitvoeren controleer je of het resultaat klopt met de verwachting.', done: false },
            ].map(step => (
              <div key={step.num} className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: step.active ? 'rgba(124,58,237,.08)' : '#111118',
                  border: `1px solid ${step.active ? '#7c3aed' : '#1e1e30'}`,
                }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, marginTop: 1,
                  background: step.done ? 'rgba(16,185,129,.15)' : step.active ? '#7c3aed' : '#1e1e30',
                  color: step.done ? '#34d399' : '#fff',
                }}>
                  {step.done ? '✓' : step.num}
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">{step.title}</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            {prevLesson && (
              <button onClick={() => router.push(`/modules/${moduleId}/${prevLesson.id}`)}
                style={{ background: 'transparent', border: '1px solid #1e1e30', color: '#e5e7eb', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <ChevronLeft size={14} /> Vorige
              </button>
            )}

            {isCompleted ? (
              <button onClick={() => nextLesson ? router.push(`/modules/${moduleId}/${nextLesson.id}`) : router.push('/modules')}
                style={{ background: '#111118', border: '1px solid rgba(16,185,129,.4)', color: '#34d399', borderRadius: 10, padding: '11px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} /> Voltooid {nextLesson ? '— Volgende les' : '— Terug naar modules'} <ChevronRight size={14} />
              </button>
            ) : (
              <button onClick={completeAndContinue} disabled={saving}
                style={{ background: saving ? '#4a2d8a' : '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '11px 22px', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} /> {saving ? 'Opslaan...' : nextLesson ? 'Voltooid & Doorgaan' : 'Module voltooid! 🎉'} {!saving && <ChevronRight size={14} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
