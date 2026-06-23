'use client'

import { useState } from 'react'
import CertificaatDownload from './CertificaatDownload'
import { modules } from '@/lib/modules'

interface ModuleStatus {
  id: number
  title: string
  done: boolean
  completed: number
  total: number
}

interface Props {
  defaultName: string
  userId: string
  allDone: boolean
  moduleDone: ModuleStatus[]
}

export default function CertificaatClient({ defaultName, userId, allDone, moduleDone }: Props) {
  const [name, setName] = useState(defaultName)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(defaultName)

  return (
    <div>
      {/* Naam invoer */}
      <div className="mb-8 p-5 rounded-2xl" style={{ background: '#111118', border: '1px solid #1e1e30' }}>
        <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Naam op certificaat</div>
        {editing ? (
          <div className="flex gap-3 items-center">
            <input
              value={draft}
              onChange={e => setDraft(e.target.value)}
              autoFocus
              placeholder="Jouw volledige naam"
              style={{ flex: 1, background: '#1a1a28', border: '1px solid #7c3aed', borderRadius: 10, padding: '10px 14px', fontSize: 15, color: '#e5e7eb', outline: 'none' }}
            />
            <button
              onClick={() => { setName(draft); setEditing(false) }}
              disabled={!draft.trim()}
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', border: 'none', borderRadius: 10, padding: '10px 18px', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
            >
              Opslaan
            </button>
            <button
              onClick={() => { setDraft(name); setEditing(false) }}
              style={{ background: 'transparent', border: '1px solid #2a2a3a', borderRadius: 10, padding: '10px 14px', color: '#6b7280', fontSize: 13, cursor: 'pointer' }}
            >
              Annuleren
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div style={{ fontSize: 18, fontWeight: 700, color: '#e5e7eb' }}>{name}</div>
            <button
              onClick={() => { setDraft(name); setEditing(true) }}
              style={{ background: 'transparent', border: '1px solid #2a2a3a', borderRadius: 8, padding: '5px 12px', color: '#a855f7', fontSize: 12, cursor: 'pointer' }}
            >
              ✏ Aanpassen
            </button>
          </div>
        )}
        <div className="text-xs mt-2" style={{ color: '#4b5563' }}>Deze naam verschijnt op al je certificaten.</div>
      </div>

      {/* Eindcertificaat */}
      <div className="mb-6" style={{ background: '#111118', border: `1px solid ${allDone ? 'rgba(168,85,247,0.4)' : '#1e1e30'}`, borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden' }}>
        {allDone && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #7c3aed, #a855f7, #6366f1)' }} />
        )}
        <div className="flex items-start gap-4">
          <div style={{ width: 56, height: 56, borderRadius: 16, background: allDone ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#1e1e30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
            {allDone ? '🎓' : '🔒'}
          </div>
          <div className="flex-1">
            <div className="font-bold text-lg">Clavify — Volledig certificaat</div>
            <div className="text-sm mt-1 mb-4" style={{ color: '#6b7280' }}>
              {allDone
                ? 'Alle 4 modules voltooid — je hebt de volledige cursus afgerond.'
                : `Rond alle modules af om dit certificaat te verdienen.`}
            </div>
            {allDone && (
              <CertificaatDownload
                name={name}
                type="full"
                moduleTitle="Clavify AI-cursus"
                certId={`CL-FULL-${userId.slice(-6).toUpperCase()}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Per module */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moduleDone.map(m => (
          <div key={m.id} style={{ background: '#111118', border: `1px solid ${m.done ? 'rgba(168,85,247,0.25)' : '#1e1e30'}`, borderRadius: 16, padding: 22, position: 'relative', overflow: 'hidden' }}>
            {m.done && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }} />
            )}
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: 40, height: 40, borderRadius: 12, background: m.done ? 'rgba(124,58,237,0.2)' : '#1e1e30', border: `1px solid ${m.done ? 'rgba(124,58,237,0.4)' : '#2a2a3a'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0, color: m.done ? '#a855f7' : '#6b7280', fontWeight: 700 }}>
                {m.done ? '✓' : m.id}
              </div>
              <div>
                <div className="font-semibold text-sm">Module {m.id}</div>
                <div className="text-xs" style={{ color: '#6b7280' }}>{m.title}</div>
              </div>
              {m.done && <div className="ml-auto text-xs font-medium" style={{ color: '#a855f7' }}>Voltooid</div>}
            </div>

            {!m.done && (
              <div>
                <div style={{ height: 4, background: '#1e1e30', borderRadius: 999, overflow: 'hidden', marginBottom: 6 }}>
                  <div style={{ height: '100%', width: `${Math.round((m.completed / m.total) * 100)}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)', borderRadius: 999 }} />
                </div>
                <div className="text-xs" style={{ color: '#6b7280' }}>{m.completed} / {m.total} lessen</div>
              </div>
            )}

            {m.done && (
              <CertificaatDownload
                name={name}
                type="module"
                moduleTitle={`Module ${m.id} — ${m.title}`}
                certId={`CL-M${m.id}-${userId.slice(-6).toUpperCase()}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
