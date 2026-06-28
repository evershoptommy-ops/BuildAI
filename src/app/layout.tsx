import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import Beacon from '@/components/Beacon'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Clavify — Bouw tools met AI',
  description: 'Leer stap voor stap hoe je met Claude en VS Code echte programmas maakt en verkoopt aan klanten.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider signUpForceRedirectUrl="/welkom" signInFallbackRedirectUrl="/dashboard">
      <html lang="nl" className={`h-full ${inter.variable} ${jakarta.variable}`}>
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
