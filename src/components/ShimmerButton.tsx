'use client'

import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
  fullWidth?: boolean
}

export default function ShimmerButton({ href, children, fullWidth }: Props) {
  return (
    <Link href={href} style={{ width: fullWidth ? '100%' : 'auto', display: 'block' }}>
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        .shimmer-btn:hover .shimmer-shine {
          animation: shimmer 0.7s ease forwards;
        }
      `}</style>
      <button
        className="shimmer-btn"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          border: 'none',
          color: '#fff',
          borderRadius: 12,
          padding: '14px 30px',
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: fullWidth ? '100%' : 'auto',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          boxShadow: '0 0 0 rgba(124,58,237,0)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(124,58,237,0.4)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(124,58,237,0)'
        }}
      >
        <span className="shimmer-shine" style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '40%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          pointerEvents: 'none',
        }} />
        {children}
      </button>
    </Link>
  )
}
