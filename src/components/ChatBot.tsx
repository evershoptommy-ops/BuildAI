'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { modules } from '@/lib/modules'
import { lessonContent } from '@/lib/lessonContent'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function getLessonContext(pathname: string): string {
  // Haal module en les uit URL: /modules/[moduleId]/[lessonId]
  const match = pathname.match(/\/modules\/(\d+)\/(.+)/)
  if (!match) {
    if (pathname.startsWith('/modules')) return '\n\n[Student bekijkt het modulesoverzicht]'
    if (pathname.startsWith('/dashboard')) return '\n\n[Student is op het dashboard]'
    return ''
  }

  const [, moduleId, lessonId] = match
  const mod = modules.find(m => String(m.id) === moduleId)
  const lesson = mod?.lessons.find(l => l.id === lessonId)
  const content = lessonContent[lessonId as keyof typeof lessonContent]

  const parts = [`\n\n[Student is bezig met: Les ${lessonId} — "${lesson?.title ?? lessonId}" (Module ${moduleId}: ${mod?.title ?? ''})`]

  if (content?.intro) parts.push(`Intro van deze les: ${content.intro}`)
  if (content?.sections?.[0]) parts.push(`Eerste sectie: ${content.sections[0].title ?? ''} — ${content.sections[0].body?.slice(0, 200)}`)
  parts.push('Beantwoord vragen specifiek over deze les tenzij de student iets anders vraagt]')

  return parts.join('\n')
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function buildSystemContext() {
    return getLessonContext(pathname)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input.trim() }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    const assistantId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          context: buildSystemContext(),
        }),
      })

      if (!res.body) return
      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages(prev => prev.map(m =>
          m.id === assistantId ? { ...m, content: m.content + chunk } : m
        ))
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Venster afmetingen afhankelijk van schermgrootte
  const chatStyle = isMobile
    ? { position: 'fixed' as const, bottom: 0, left: 0, right: 0, height: '70vh', borderRadius: '16px 16px 0 0', borderBottom: 'none' }
    : { position: 'fixed' as const, bottom: 92, right: 28, width: 360, height: 480, borderRadius: 16 }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: isMobile && open ? 'calc(70vh + 8px)' : 28,
          right: 28,
          width: 52, height: 52,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
          zIndex: 1001,
          transition: 'bottom 0.2s',
        }}
        title="Stel een vraag"
      >
        {open ? '✕' : '✦'}
      </button>

      {open && (
        <>
          {/* Mobile backdrop */}
          {isMobile && (
            <div
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998 }}
            />
          )}
          <div style={{
            ...chatStyle,
            background: '#111118',
            border: '1px solid #1e1e30',
            display: 'flex', flexDirection: 'column',
            zIndex: 999,
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1e1e30', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✦</div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 14 }}>Clavify Assistent</div>
                <div style={{ fontSize: 11, color: '#6b7280' }}>
                  Stel al je cursusvragen
                </div>
              </div>
              {isMobile && (
                <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 18, padding: 4 }}>✕</button>
              )}
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.length === 0 && (
                <div style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', marginTop: 40 }}>
                  Heb je een vraag over de cursus?<br />Ik help je graag verder.
                </div>
              )}
              {messages.map(m => (
                <div key={m.id} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '82%', padding: '8px 12px',
                    borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: m.role === 'user' ? '#7c3aed' : '#1a1a28',
                    fontSize: 13, lineHeight: 1.5, whiteSpace: 'pre-wrap', color: '#e5e7eb',
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.content === '' && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ padding: '8px 14px', borderRadius: '14px 14px 14px 4px', background: '#1a1a28', fontSize: 13, color: '#6b7280' }}>···</div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} style={{ padding: '10px 12px', borderTop: '1px solid #1e1e30', display: 'flex', gap: 8 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Stel een vraag..."
                style={{ flex: 1, background: '#1a1a28', border: '1px solid #2a2a3a', borderRadius: 10, padding: '8px 12px', fontSize: 13, color: '#e5e7eb', outline: 'none' }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{ background: '#7c3aed', border: 'none', borderRadius: 10, padding: '8px 14px', color: '#fff', fontSize: 13, cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer', opacity: isLoading || !input.trim() ? 0.5 : 1 }}
              >
                ↑
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}
