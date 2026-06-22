'use client'

import { useChat } from '@ai-sdk/react'
import { useState, useRef, useEffect } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
          zIndex: 1000,
          transition: 'transform 0.2s',
        }}
        title="Stel een vraag"
      >
        {open ? '✕' : '✦'}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 92,
          right: 28,
          width: 360,
          height: 480,
          background: '#111118',
          border: '1px solid #1e1e30',
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 999,
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 18px',
            borderBottom: '1px solid #1e1e30',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
            }}>✦</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Clavify Assistent</div>
              <div style={{ fontSize: 11, color: '#6b7280' }}>Stel al je cursusvragen</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.length === 0 && (
              <div style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', marginTop: 60 }}>
                Heb je een vraag over de cursus?<br />Ik help je graag verder.
              </div>
            )}
            {messages.map(m => (
              <div key={m.id} style={{
                display: 'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '8px 12px',
                  borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: m.role === 'user' ? '#7c3aed' : '#1a1a28',
                  fontSize: 13,
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                  color: '#e5e7eb',
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '8px 14px', borderRadius: '14px 14px 14px 4px', background: '#1a1a28', fontSize: 13, color: '#6b7280' }}>
                  ···
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} style={{
            padding: '10px 12px',
            borderTop: '1px solid #1e1e30',
            display: 'flex',
            gap: 8,
          }}>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Stel een vraag..."
              style={{
                flex: 1,
                background: '#1a1a28',
                border: '1px solid #2a2a3a',
                borderRadius: 10,
                padding: '8px 12px',
                fontSize: 13,
                color: '#e5e7eb',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                background: '#7c3aed',
                border: 'none',
                borderRadius: 10,
                padding: '8px 14px',
                color: '#fff',
                fontSize: 13,
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: isLoading || !input.trim() ? 0.5 : 1,
              }}
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  )
}
