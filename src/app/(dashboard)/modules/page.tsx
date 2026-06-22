'use client'

import Link from 'next/link'
import { Lock, Clock, ChevronRight, CheckCircle2 } from 'lucide-react'
import { modules } from '@/lib/modules'
import { useEffect, useState } from 'react'
import CheckoutButton from '@/components/CheckoutButton'

export default function ModulesPage() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [hasPremium, setHasPremium] = useState(false)

  useEffect(() => {
    fetch('/api/progress')
      .then(r => r.json())
      .then(data => {
        if (data.progress) {
          setCompletedLessons(new Set(data.progress.map((p: { lesson_id: string }) => p.lesson_id)))
        }
        setLoading(false)
      })
    fetch('/api/premium')
      .then(r => r.json())
      .then(data => setHasPremium(data.premium))
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="px-9 py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <h2 className="text-xl font-bold">Modules</h2>
        <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Doorloop de modules op volgorde voor het beste resultaat</p>
      </div>

      <div className="p-9 flex flex-col gap-5">
        {modules.map((mod) => {
          const doneLessons = mod.lessons.filter(l => completedLessons.has(l.id)).length
          const progress = mod.lessons.length > 0 ? Math.round((doneLessons / mod.lessons.length) * 100) : 0
          const isLocked = mod.premium && !hasPremium
          const isDone = progress === 100
          const isActive = progress > 0 && progress < 100
          const totalMinutes = mod.lessons.reduce((acc, l) => acc + parseInt(l.duration), 0)
          const nextLesson = mod.lessons.find(l => !completedLessons.has(l.id)) ?? mod.lessons[0]

          return (
            <div key={mod.id} style={{
              background: '#111118',
              border: `1px solid ${isActive ? '#7c3aed' : '#1e1e30'}`,
              borderRadius: 16,
              opacity: isLocked ? 0.6 : 1,
            }}>
              <div className="flex items-start gap-5 p-6">
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700,
                  background: isDone ? 'rgba(16,185,129,.12)' : isLocked ? 'rgba(255,255,255,.05)' : 'rgba(124,58,237,.15)',
                  border: `1px solid ${isDone ? 'rgba(16,185,129,.3)' : isLocked ? '#1e1e30' : 'rgba(124,58,237,.3)'}`,
                  color: isDone ? '#34d399' : isLocked ? '#6b7280' : '#a78bfa',
                }}>
                  {isDone ? <CheckCircle2 size={22} /> : isLocked ? <Lock size={18} /> : mod.id}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-base font-bold">Module {mod.id} — {mod.title}</h3>
                    {isDone && <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: 'rgba(16,185,129,.12)', color: '#34d399', border: '1px solid rgba(16,185,129,.3)' }}>Voltooid</span>}
                    {isActive && <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: 'rgba(245,158,11,.12)', color: '#fbbf24', border: '1px solid rgba(245,158,11,.25)' }}>Bezig</span>}
                    {isLocked && <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: 'rgba(124,58,237,.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,.3)' }}>💎 Premium</span>}
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#6b7280' }}>{mod.description}</p>
                  <div className="flex items-center gap-5 text-xs" style={{ color: '#6b7280' }}>
                    <span className="flex items-center gap-1"><Clock size={12} /> {totalMinutes} min totaal</span>
                    <span>{mod.lessons.length} lessen</span>
                    {!loading && progress > 0 && <span style={{ color: '#a78bfa' }}>{doneLessons}/{mod.lessons.length} voltooid</span>}
                  </div>
                  {isActive && (
                    <div style={{ height: 4, background: '#1e1e30', borderRadius: 999, marginTop: 12, overflow: 'hidden', maxWidth: 300 }}>
                      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
                    </div>
                  )}
                </div>

                {!isLocked && (
                  <Link href={`/modules/${mod.id}/${nextLesson.id}`}>
                    <button style={{
                      background: isActive ? '#7c3aed' : isDone ? 'rgba(16,185,129,.12)' : 'rgba(124,58,237,.15)',
                      border: `1px solid ${isActive ? 'transparent' : isDone ? 'rgba(16,185,129,.3)' : 'rgba(124,58,237,.3)'}`,
                      color: isDone ? '#34d399' : '#fff',
                      borderRadius: 10, padding: '10px 18px', fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0,
                    }}>
                      {isDone ? 'Herhalen' : isActive ? 'Verdergaan' : 'Starten'}
                      <ChevronRight size={14} />
                    </button>
                  </Link>
                )}
              </div>

              {isLocked && (
                <div style={{ borderTop: '1px solid #1e1e30', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div>
                    <div className="text-sm font-semibold mb-1">💎 Premium module</div>
                    <div className="text-xs" style={{ color: '#6b7280' }}>Upgrade om toegang te krijgen tot alle {mod.lessons.length} lessen + certificaat</div>
                  </div>
                  <CheckoutButton />
                </div>
              )}

              {!isLocked && (
                <div style={{ borderTop: '1px solid #1e1e30' }}>
                  {mod.lessons.map((lesson, li) => {
                    const lessonDone = completedLessons.has(lesson.id)
                    return (
                      <Link key={lesson.id} href={`/modules/${mod.id}/${lesson.id}`}>
                        <div className="flex items-center gap-4 px-6 py-3 cursor-pointer" style={{ borderBottom: li < mod.lessons.length - 1 ? '1px solid #1a1a28' : 'none' }}>
                          <div style={{
                            width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 9, fontWeight: 700,
                            background: lessonDone ? 'rgba(16,185,129,.15)' : '#1e1e30',
                            color: lessonDone ? '#34d399' : '#6b7280',
                            border: `1px solid ${lessonDone ? 'rgba(16,185,129,.3)' : '#2a2a3a'}`,
                          }}>
                            {lessonDone ? '✓' : li + 1}
                          </div>
                          <span className="text-sm flex-1" style={{ color: lessonDone ? '#e5e7eb' : '#6b7280' }}>{lesson.title}</span>
                          <span className="text-xs" style={{ color: '#444' }}>{lesson.duration}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
