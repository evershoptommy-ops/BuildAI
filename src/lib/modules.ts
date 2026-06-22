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
    title: 'De Basis',
    description: 'Van nul naar je eerste werkende tool. VS Code, Claude en Python installeren en je eerste factuurberekening bouwen.',
    premium: false,
    lessons: [
      { id: '1-1', title: 'Welkom bij Clavify', duration: '8 min', description: 'Wat Clavify is, hoe de cursus werkt, en wat je aan het einde kunt.' },
      { id: '1-2', title: 'VS Code installeren en instellen', duration: '12 min', description: 'VS Code downloaden, installeren en je werkmap aanmaken.' },
      { id: '1-3', title: 'Claude instellen als je AI-partner', duration: '10 min', description: 'Een Claude account aanmaken en leren hoe je de juiste vragen stelt.' },
      { id: '1-4', title: 'Node.js en Python installeren', duration: '15 min', description: 'De motoren achter je tools installeren en controleren of alles werkt.' },
      { id: '1-5', title: 'Je eerste tool: een factuurberekening', duration: '20 min', description: 'Je eerste echte werkende tool bouwen samen met Claude.' },
    ],
  },
  {
    id: 2,
    title: 'Je eerste Chrome Extensie',
    description: 'Bouw een echte Chrome extensie van nul af. Aan het einde heb je iets wat je aan klanten kunt laten zien.',
    premium: false,
    lessons: [
      { id: '2-1', title: 'Wat is een Chrome extensie en waarom is het waardevol?', duration: '10 min', description: 'Hoe Chrome extensies werken en waarom bedrijven ervoor betalen.' },
      { id: '2-2', title: 'De structuur van een extensie begrijpen', duration: '12 min', description: 'De drie bestanden die elke extensie nodig heeft: manifest, html en js.' },
      { id: '2-3', title: 'Je eerste extensie bouwen: de Woordenteller', duration: '25 min', description: 'Een complete Chrome extensie bouwen en laden in Chrome.' },
      { id: '2-4', title: 'Je extensie mooier maken', duration: '18 min', description: 'CSS gebruiken om je extensie er professioneel uit te laten zien.' },
      { id: '2-5', title: 'Andere extensies die je nu kunt bouwen', duration: '15 min', description: 'Vijf extensies die je direct kunt bouwen en welke het best verkopen.' },
    ],
  },
  {
    id: 3,
    title: 'Gevorderde Tools',
    description: 'Van hobby naar professioneel product. Tools met API-koppelingen, webinterfaces en automatisering.',
    premium: true,
    lessons: [
      { id: '3-1', title: 'Werken met API\'s: data ophalen van het internet', duration: '20 min', description: 'Wat een API is en je eerste koppeling bouwen met OpenWeatherMap.' },
      { id: '3-2', title: 'Een webinterface bouwen met HTML/CSS/JavaScript', duration: '30 min', description: 'Je tool omzetten naar een echte webpagina die er als een app uitziet.' },
      { id: '3-3', title: 'Data opslaan: bestanden en lokale opslag', duration: '22 min', description: 'Data bewaren in JSON bestanden en LocalStorage.' },
      { id: '3-4', title: 'Automatisering: taken uitvoeren zonder tussenkomst', duration: '25 min', description: 'Scripts bouwen die automatisch draaien terwijl jij slaapt.' },
      { id: '3-5', title: 'Je toolkit: de 10 meest verkochte tools', duration: '20 min', description: 'De tools die kleine bedrijven het meest vragen en wat je ervoor kunt vragen.' },
    ],
  },
  {
    id: 4,
    title: 'Verkopen aan Klanten',
    description: 'Van tool naar inkomen. Je eerste betalende klant vinden, professioneel opleveren en schalen.',
    premium: true,
    lessons: [
      { id: '4-1', title: 'Positionering: wat jij aanbiedt en aan wie', duration: '18 min', description: 'Hoe je jezelf positioneert als AI tools specialist en in welke taal.' },
      { id: '4-2', title: 'Je eerste klant vinden', duration: '22 min', description: 'De drie snelste manieren om je eerste klant te vinden.' },
      { id: '4-3', title: 'Het kennismakingsgesprek', duration: '20 min', description: 'Hoe je een gesprek structureert en ter plekke een prijs bepaalt.' },
      { id: '4-4', title: 'Levering en afronding', duration: '18 min', description: 'Professioneel opleveren, factuur sturen en een referentie vragen.' },
      { id: '4-5', title: 'Schalen: van één klant naar tien', duration: '25 min', description: 'Portfolio, online aanwezigheid en herhalende inkomsten opbouwen.' },
    ],
  },
]
