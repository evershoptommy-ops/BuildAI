'use client'

import { useEffect, useState, useRef } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(scrolled / total, 1) : 0)
      setActive(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setActive(false), 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // Maatvoering per breakpoint via JS (responsive zonder Tailwind op SVG-attrs)
  const [size, setSize] = useState(36)
  const [stroke, setStroke] = useState(2.5)

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth
      if (w >= 1280) { setSize(44); setStroke(3) }
      else if (w >= 768) { setSize(40); setStroke(3) }
      else { setSize(36); setStroke(2.5) }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const padding = 4
  const viewBox = size + padding * 2
  const center = viewBox / 2
  const radius = size / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progress)

  const opacity = active ? 0.65 : 0.35
  const offsetPx = size <= 36 ? 16 : 24

  return (
    <div
      style={{
        position: 'fixed',
        left: offsetPx,
        bottom: offsetPx,
        zIndex: 50,
        pointerEvents: 'none',
        userSelect: 'none',
        opacity,
        transition: 'opacity 0.4s ease',
        width: viewBox,
        height: viewBox,
      }}
      aria-hidden="true"
    >
      <svg
        width={viewBox}
        height={viewBox}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        fill="none"
        style={{ display: 'block' }}
      >
        {/* Track ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#a855f7"
          strokeOpacity={0.15}
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#a855f7"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
          style={{ transition: 'stroke-dashoffset 0.08s linear' }}
        />
        {/* ✦ merkteken */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#a855f7"
          fontSize={size * 0.38}
          fontWeight="700"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          ✦
        </text>
      </svg>
    </div>
  )
}
