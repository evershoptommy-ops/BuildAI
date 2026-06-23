'use client'

import { useEffect, useState } from 'react'

export default function PlanBadge() {
  const [label, setLabel] = useState('...')

  useEffect(() => {
    fetch('/api/premium')
      .then(r => r.json())
      .then(d => setLabel(d.admin ? '⚡ Admin' : d.premium ? '💎 Premium' : 'Gratis plan'))
      .catch(() => setLabel('Gratis plan'))
  }, [])

  return <div className="text-xs" style={{ color: '#6b7280' }}>{label}</div>
}
