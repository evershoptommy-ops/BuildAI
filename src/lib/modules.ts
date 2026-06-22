export type LessonStatus = 'done' | 'active' | 'locked'

export interface Lesson {
  id: string
  title: string
  duration: string
  description: string
}

export interface Module {
  id: number
  title: string
  description: string
  lessons: Lesson[]
  premium: boolean
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Installatie & Setup',
    description: 'VS Code, Claude en je eerste omgeving opzetten zodat je klaar bent om te bouwen.',
    premium: false,
    lessons: [
      { id: '1-1', title: 'Wat is VS Code en waarom gebruiken we het?', duration: '5 min', description: 'Korte introductie over de tools die we gaan gebruiken.' },
      { id: '1-2', title: 'VS Code installeren', duration: '8 min', description: 'Stap voor stap VS Code downloaden en instellen op Windows.' },
      { id: '1-3', title: 'Claude instellen in VS Code', duration: '10 min', description: 'De Claude extensie installeren en je eerste prompt uitvoeren.' },
      { id: '1-4', title: 'Je omgeving testen', duration: '5 min', description: 'Controleren of alles werkt voordat we beginnen met bouwen.' },
    ],
  },
  {
    id: 2,
    title: 'Je eerste Chrome Extensie',
    description: 'Bouw een echte Chrome extensie van nul af. Aan het einde heb je iets wat je aan klanten kunt laten zien.',
    premium: false,
    lessons: [
      { id: '2-1', title: 'Hoe werkt een Chrome extensie?', duration: '6 min', description: 'De structuur en bestanden die elke extensie nodig heeft.' },
      { id: '2-2', title: 'Projectmap aanmaken in VS Code', duration: '8 min', description: 'Je eerste mapstructuur opzetten met Claude als hulp.' },
      { id: '2-3', title: 'manifest.json uitleggen', duration: '10 min', description: 'Het bestand dat Chrome vertelt wat je extensie doet.' },
      { id: '2-4', title: 'Een knop toevoegen aan de extensie', duration: '12 min', description: 'Interactiviteit inbouwen met een popup en een klik-actie.' },
      { id: '2-5', title: 'De extensie installeren in Chrome', duration: '7 min', description: 'Developer mode aanzetten en je extensie live testen.' },
      { id: '2-6', title: 'Afronding & wat nu?', duration: '5 min', description: 'Je resultaat bekijken en de volgende stappen bespreken.' },
    ],
  },
  {
    id: 3,
    title: 'Je eerste klant',
    description: 'Wat kun je aanbieden, hoe prijzen je het, en hoe vind je je eerste betalende klant.',
    premium: true,
    lessons: [
      { id: '3-1', title: 'Wat kun je verkopen als AI-builder?', duration: '8 min', description: 'Overzicht van diensten die mensen nu al laten bouwen.' },
      { id: '3-2', title: 'Hoe je een project prijst', duration: '10 min', description: 'Van uurtarief naar vaste prijs — wat werkt beter en wanneer.' },
      { id: '3-3', title: 'Waar je klanten vindt', duration: '12 min', description: 'Platforms, netwerk en outreach die werken voor beginners.' },
      { id: '3-4', title: 'Je eerste gesprek voeren', duration: '10 min', description: 'Hoe je een briefing doet en verwachtingen managet.' },
      { id: '3-5', title: 'Van gesprek naar betaalde opdracht', duration: '8 min', description: 'Offerte, akkoord, en oplevering zonder gedoe.' },
    ],
  },
  {
    id: 4,
    title: 'Grotere projecten bouwen',
    description: 'Van simpel script naar volledig werkend product dat je kunt hosten en doorverkopen.',
    premium: true,
    lessons: [
      { id: '4-1', title: 'Een webapp bouwen met Next.js', duration: '15 min', description: 'De basis van een moderne webapplicatie opzetten.' },
      { id: '4-2', title: 'Database toevoegen met Supabase', duration: '12 min', description: 'Data opslaan en ophalen zonder backend kennis.' },
      { id: '4-3', title: 'Inloggen bouwen met Clerk', duration: '10 min', description: 'Gebruikersaccounts in 15 minuten werkend.' },
      { id: '4-4', title: 'Je app online zetten met Vercel', duration: '8 min', description: 'Gratis hosten en een eigen domeinnaam koppelen.' },
      { id: '4-5', title: 'Betalingen inbouwen met Stripe', duration: '15 min', description: 'Je eerste betaling ontvangen via een eigen product.' },
    ],
  },
]
