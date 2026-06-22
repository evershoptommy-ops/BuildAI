import { modules } from '@/lib/modules'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ChevronRight, ChevronLeft } from 'lucide-react'

const mockProgress: Record<string, boolean> = {
  '1-1': true, '1-2': true, '1-3': true, '1-4': true,
  '2-1': true, '2-2': true,
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params
  const mod = modules.find(m => m.id === Number(moduleId))
  if (!mod) notFound()

  const doneLessons = mod.lessons.filter(l => mockProgress[l.id]).length
  const progress = Math.round((doneLessons / mod.lessons.length) * 100)
  const nextLesson = mod.lessons.find(l => !mockProgress[l.id]) ?? mod.lessons[0]
  const totalMinutes = mod.lessons.reduce((acc, l) => acc + parseInt(l.duration), 0)

  return (
    <div className="flex flex-col h-full">
      <div className="px-9 py-6" style={{ borderBottom: '1px solid #1e1e30' }}>
        <Link href="/modules" className="flex items-center gap-2 text-xs mb-4" style={{ color: '#6b7280' }}>
          <ChevronLeft size={12} /> Terug naar modules
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold mb-2 tracking-wider" style={{ color: '#a855f7' }}>MODULE {mod.id}</div>
            <h2 className="text-2xl font-extrabold mb-2">{mod.title}</h2>
            <p className="text-sm max-w-xl" style={{ color: '#6b7280' }}>{mod.description}</p>
            <div className="flex items-center gap-5 mt-4 text-sm" style={{ color: '#6b7280' }}>
              <span className="flex items-center gap-1"><Clock size={13} /> {totalMinutes} min</span>
              <span>{mod.lessons.length} lessen</span>
              <span style={{ color: '#a855f7' }}>{progress}% voltooid</span>
            </div>
          </div>
          <Link href={`/modules/${mod.id}/${nextLesson.id}`}>
            <button style={{ background: '#7c3aed', border: 'none', color: '#fff', borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              {progress > 0 ? 'Verdergaan' : 'Starten'} <ChevronRight size={14} />
            </button>
          </Link>
        </div>
        <div style={{ height: 6, background: '#1e1e30', borderRadius: 999, marginTop: 16, overflow: 'hidden', maxWidth: 400 }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
        </div>
      </div>

      <div className="p-9">
        <div className="text-sm font-semibold mb-4" style={{ color: '#6b7280' }}>LESSEN</div>
        <div className="flex flex-col gap-2 max-w-2xl">
          {mod.lessons.map((lesson, i) => {
            const done = mockProgress[lesson.id]
            return (
              <Link key={lesson.id} href={`/modules/${mod.id}/${lesson.id}`}>
                <div className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-colors"
                  style={{ background: '#111118', border: '1px solid #1e1e30' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    background: done ? 'rgba(16,185,129,.12)' : 'rgba(124,58,237,.1)',
                    border: `1px solid ${done ? 'rgba(16,185,129,.3)' : 'rgba(124,58,237,.2)'}`,
                    color: done ? '#34d399' : '#a78bfa',
                  }}>
                    {done ? '✓' : i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold" style={{ color: done ? '#9ca3af' : '#e5e7eb' }}>{lesson.title}</div>
                    <div className="text-xs mt-1" style={{ color: '#6b7280' }}>{lesson.description}</div>
                  </div>
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#6b7280' }}>
                    <span className="flex items-center gap-1"><Clock size={11} /> {lesson.duration}</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
