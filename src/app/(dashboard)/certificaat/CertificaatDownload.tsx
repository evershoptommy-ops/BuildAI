'use client'

interface Props {
  name: string
  type: 'module' | 'full'
  moduleTitle: string
  certId: string
}

export default function CertificaatDownload({ name, type, moduleTitle, certId }: Props) {
  function download() {
    const W = 1200
    const H = 840
    const canvas = document.createElement('canvas')
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')!

    // Achtergrond wit
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W, H)

    // Subtiele achtergrond textuur — lichte dots
    ctx.fillStyle = 'rgba(124,58,237,0.03)'
    for (let x = 0; x < W; x += 32) {
      for (let y = 0; y < H; y += 32) {
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Bovenste paarse gradient balk
    const topGrad = ctx.createLinearGradient(0, 0, W, 0)
    topGrad.addColorStop(0, '#7c3aed')
    topGrad.addColorStop(0.5, '#a855f7')
    topGrad.addColorStop(1, '#6366f1')
    ctx.fillStyle = topGrad
    ctx.fillRect(0, 0, W, 10)

    // Onderste lijn
    ctx.fillStyle = 'rgba(124,58,237,0.15)'
    ctx.fillRect(0, H - 3, W, 3)

    // Rand (subtiel)
    ctx.strokeStyle = 'rgba(124,58,237,0.12)'
    ctx.lineWidth = 1
    ctx.strokeRect(28, 28, W - 56, H - 56)

    // Decoratief hoek ornament links boven
    ctx.strokeStyle = 'rgba(124,58,237,0.25)'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(28, 70); ctx.lineTo(28, 28); ctx.lineTo(70, 28); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(W - 28, 70); ctx.lineTo(W - 28, 28); ctx.lineTo(W - 70, 28); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(28, H - 70); ctx.lineTo(28, H - 28); ctx.lineTo(70, H - 28); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(W - 28, H - 70); ctx.lineTo(W - 28, H - 28); ctx.lineTo(W - 70, H - 28); ctx.stroke()

    // ✦ Logo links boven
    ctx.font = 'bold 22px Georgia, serif'
    ctx.fillStyle = '#7c3aed'
    ctx.textAlign = 'left'
    ctx.fillText('✦', 56, 76)

    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#1a1a2e'
    ctx.fillText('CLAVIFY', 82, 76)

    // "Certificaat van Voltooiing" label
    ctx.font = '13px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#a855f7'
    ctx.letterSpacing = '3px'
    ctx.textAlign = 'center'
    ctx.fillText('CERTIFICAAT VAN VOLTOOIING', W / 2, 200)

    // Decoratieve lijn onder label
    ctx.strokeStyle = 'rgba(124,58,237,0.2)'
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(W / 2 - 120, 216); ctx.lineTo(W / 2 + 120, 216); ctx.stroke()

    // "Dit certificaat wordt uitgereikt aan"
    ctx.font = '16px Georgia, serif'
    ctx.fillStyle = '#6b7280'
    ctx.fillText('Dit certificaat wordt uitgereikt aan', W / 2, 290)

    // Naam
    ctx.font = `bold ${name.length > 22 ? 46 : 56}px Georgia, serif`
    ctx.fillStyle = '#1a1a2e'
    ctx.fillText(name, W / 2, 380)

    // Naam onderstreping
    const nameWidth = ctx.measureText(name).width
    const lineGrad = ctx.createLinearGradient(W / 2 - nameWidth / 2, 0, W / 2 + nameWidth / 2, 0)
    lineGrad.addColorStop(0, 'transparent')
    lineGrad.addColorStop(0.3, '#a855f7')
    lineGrad.addColorStop(0.7, '#7c3aed')
    lineGrad.addColorStop(1, 'transparent')
    ctx.strokeStyle = lineGrad
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(W / 2 - nameWidth / 2, 395); ctx.lineTo(W / 2 + nameWidth / 2, 395); ctx.stroke()

    // "voor het succesvol afronden van"
    ctx.font = '16px Georgia, serif'
    ctx.fillStyle = '#6b7280'
    ctx.fillText('voor het succesvol afronden van', W / 2, 455)

    // Module/cursus titel
    ctx.font = `bold ${type === 'full' ? 28 : 26}px -apple-system, BlinkMacSystemFont, Arial, sans-serif`
    ctx.fillStyle = '#7c3aed'
    ctx.fillText(moduleTitle, W / 2, 510)

    // Divider
    ctx.strokeStyle = 'rgba(124,58,237,0.12)'
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(56, 580); ctx.lineTo(W - 56, 580); ctx.stroke()

    // Footer links: datum
    const date = new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
    ctx.font = '13px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#9ca3af'
    ctx.textAlign = 'left'
    ctx.fillText('Datum', 60, 618)
    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#1a1a2e'
    ctx.fillText(date, 60, 638)

    // Footer midden: clavify.io
    ctx.textAlign = 'center'
    ctx.font = '13px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#9ca3af'
    ctx.fillText('Uitgegeven door', W / 2, 618)
    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#7c3aed'
    ctx.fillText('clavify.io', W / 2, 638)

    // Footer rechts: certificaat ID
    ctx.textAlign = 'right'
    ctx.font = '13px -apple-system, BlinkMacSystemFont, Arial, sans-serif'
    ctx.fillStyle = '#9ca3af'
    ctx.fillText('Certificaatnummer', W - 60, 618)
    ctx.font = 'bold 13px monospace'
    ctx.fillStyle = '#1a1a2e'
    ctx.fillText(certId, W - 60, 638)

    // Download
    const link = document.createElement('a')
    link.download = `clavify-certificaat-${certId.toLowerCase()}.png`
    link.href = canvas.toDataURL('image/png', 1.0)
    link.click()
  }

  return (
    <button
      onClick={download}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
        border: 'none',
        borderRadius: 10,
        padding: '10px 18px',
        color: '#fff',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
      }}
    >
      <span style={{ fontSize: 15 }}>⬇</span>
      Download certificaat
    </button>
  )
}
