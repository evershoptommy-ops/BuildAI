'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function getSessionId(): string {
  let id = sessionStorage.getItem('clavify_sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('clavify_sid', id)
  }
  return id
}

export default function Beacon() {
  const pathname = usePathname()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const sessionId = getSessionId()

    function ping() {
      fetch('/api/beacon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, path: pathname }),
        keepalive: true,
      }).catch(() => {})
    }

    ping()
    intervalRef.current = setInterval(ping, 30_000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [pathname])

  return null
}
