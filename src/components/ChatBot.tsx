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
  if (content?.intro) parts.push(`Intro: ${content.intro}`)
  if (content?.sections?.[0]) parts.push(`Eerste sectie: ${content.sections[0].title ?? ''} — ${content.sections[0].body?.slice(0, 200)}`)
  parts.push('Beantwoord vragen specifiek over deze les tenzij anders gevraagd]')
  return parts.join('\n')
}

// Splits bericht in tekst + opties
function parseMessage(content: string): { text: string; options: string[] } {
  const match = content.match(/\[OPTIES:\s*(.+?)\]\s*$/s)
  if (!match) return { text: content.trim(), options: [] }
  const text = content.slice(0, match.index).trim()
  const options = match[1].split('|').map(o => o.trim()).filter(Boolean)
  return { text, options }
}

function MessageBubble({ message, onOption }: { message: Message; onOption: (opt: string) => void }) {
  const isUser = message.role === 'user'
  const { text, options } = isUser ? { text: message.content, options: [] } : parseMessage(message.content)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start', gap: 6 }}>
      <div style={{
        maxWidth: '85%',
        padding: '9px 13px',
        borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: isUser ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#1a1a28',
        fontSize: 13,
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
        color: '#e5e7eb',
        boxShadow: isUser ? '0 2px 8px rgba(124,58,237,0.3)' : 'none',
      }}>
        {text}
      </div>
      {options.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: '85%' }}>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => onOption(opt)}
              style={{
                background: 'transparent',
                border: '1px solid #3a2a5a',
                borderRadius: 20,
                padding: '5px 13px',
                fontSize: 12,
                color: '#c4b5fd',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(124,58,237,0.2)'
                el.style.borderColor = '#7c3aed'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.borderColor = '#3a2a5a'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [messages, open])

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text.trim() }
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
          context: getLessonContext(pathname),
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

  const chatStyle = isMobile
    ? { position: 'fixed' as const, bottom: 0, left: 0, right: 0, height: '72vh', borderRadius: '20px 20px 0 0', borderBottom: 'none' }
    : { position: 'fixed' as const, bottom: 96, right: 24, width: 360, height: 500, borderRadius: 20 }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: isMobile && open ? 'calc(72vh + 10px)' : 24,
          right: 24,
          width: 52, height: 52,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
          boxShadow: open ? '0 4px 24px rgba(168,85,247,0.6)' : '0 4px 20px rgba(124,58,237,0.45)',
          zIndex: 1001,
          transition: 'bottom 0.25s ease, box-shadow 0.2s',
        }}
        title="Stel een vraag"
      >
        {open ? '✕' : '✦'}
      </button>

      {open && (
        <>
          {isMobile && (
            <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 998 }} />
          )}
          <div style={{
            ...chatStyle,
            background: '#0f0f18',
            border: '1px solid #1e1e35',
            display: 'flex', flexDirection: 'column',
            zIndex: 999,
            boxShadow: '0 12px 48px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1e1e35', display: 'flex', alignItems: 'center', gap: 10, background: '#111120' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>✦</div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 14, color: '#f0e9ff' }}>Clavify Assistent</div>
                <div style={{ fontSize: 11, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Online
                </div>
              </div>
              {isMobile && (
                <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 18, padding: 4 }}>✕</button>
              )}
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: 32 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>✦</div>
                  <div style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6 }}>
                    Hoi! Heb je een vraag over de cursus?<br />Ik help je verder.
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginTop: 16 }}>
                    {['Ik loop vast', 'Leg dit uit', 'Wat is de volgende stap?'].map(s => (
                      <button key={s} onClick={() => sendMessage(s)} style={{ background: 'transparent', border: '1px solid #2a2a40', borderRadius: 20, padding: '5px 13px', fontSize: 12, color: '#c4b5fd', cursor: 'pointer' }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map(m => (
                <MessageBubble key={m.id} message={m} onOption={sendMessage} />
              ))}
              {isLoading && messages[messages.length - 1]?.content === '' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', background: '#1a1a28', borderRadius: '16px 16px 16px 4px', width: 'fit-content' }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7', animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '10px 12px', borderTop: '1px solid #1e1e35', background: '#111120' }}>
              <form onSubmit={e => { e.preventDefault(); sendMessage(input) }} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Typ je vraag..."
                  disabled={isLoading}
                  style={{ flex: 1, background: '#1a1a2e', border: '1px solid #2a2a40', borderRadius: 12, padding: '9px 13px', fontSize: 13, color: '#e5e7eb', outline: 'none' }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  style={{ width: 38, height: 38, background: input.trim() && !isLoading ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#1a1a2e', border: '1px solid #2a2a40', borderRadius: 12, color: '#fff', fontSize: 16, cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', flexShrink: 0 }}
                >
                  ↑
                </button>
              </form>
            </div>
          </div>

          <style>{`
            @keyframes bounce {
              0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
              40% { transform: translateY(-5px); opacity: 1; }
            }
          `}</style>
        </>
      )}
    </>
  )
}
