import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import Beacon from '@/components/Beacon'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Clavify — Bouw tools met AI',
  description: 'Leer stap voor stap hoe je met Claude en VS Code echte programmas maakt en verkoopt aan klanten.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="nl" className="h-full">
        <body className="min-h-full flex flex-col">
          {children}
          <ScrollProgress />
          <Beacon />
          <Toaster theme="dark" position="bottom-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  )
}
