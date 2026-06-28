'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedProgressBar({ value }: { value: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), 100)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{ height: 6, background: '#1e1e30', borderRadius: 999, marginTop: 16, overflow: 'hidden', maxWidth: 400 }}>
      <div style={{
        height: '100%',
        width: `${width}%`,
        background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
        borderRadius: 999,
        transition: 'width 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      }} />
    </div>
  )
}
