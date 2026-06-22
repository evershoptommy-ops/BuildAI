import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuildAI — Bouw tools met AI',
  description: 'Leer stap voor stap hoe je met Claude en VS Code echte programmas maakt en verkoopt aan klanten.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="nl" className="h-full">
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  )
}
