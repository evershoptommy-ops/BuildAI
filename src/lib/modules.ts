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
      { id: '2-3', title: 'Je eerste extensie bouwen: de Screenshot Tool', duration: '25 min', description: 'Een screenshot extensie bouwen die direct naar je clipboard kopieert — en hoe je die gebruikt met Claude.' },
      { id: '2-4', title: 'Je extensie mooier maken', duration: '12 min', description: 'Screenshot van je eigen extensie maken en Claude vragen om een professioneel redesign.' },
      { id: '2-5', title: 'Andere extensies die je nu kunt bouwen', duration: '15 min', description: 'Vijf extensies die je direct kunt bouwen en welke het best verkopen.' },
    ],
  },
  {
    id: 3,
    title: 'Bouw een Krachtige AI Machine',
    description: 'Claude Code direct in VS Code. Je bouwt een 3-laagse agent-architectuur die zichzelf verbetert en leverbaar is aan klanten.',
    premium: true,
    lessons: [
      { id: '3-1', title: 'Claude Code installeren in VS Code', duration: '15 min', description: 'De Claude Code extensie installeren en verbinden met je projectmap.' },
      { id: '3-2', title: 'De 3-laagse architectuur — waarom structuur alles is', duration: '20 min', description: 'Directives, orchestratie en execution: het fundament van je systeem.' },
      { id: '3-3', title: 'CLAUDE.md schrijven — de hersenen van je systeem', duration: '18 min', description: 'De briefing die Claude bij elke sessie automatisch leest.' },
      { id: '3-4', title: 'Python packages installeren en omgeving klaarmaken', duration: '12 min', description: 'Eenmalige installatie van de packages die je agents nodig hebben.' },
      { id: '3-5', title: 'Je eerste werkende agent — weerrapport ophalen', duration: '25 min', description: 'Van API key tot tekstbestand: een complete agent bouwen stap voor stap.' },
      { id: '3-6', title: 'Twee agents koppelen — rapport ophalen én automatisch mailen', duration: '25 min', description: 'Één opdracht, twee taken in volgorde: de echte kracht van het systeem.' },
      { id: '3-7', title: 'Self-annealing en leverbaar maken', duration: '20 min', description: 'Je systeem laten zichzelf verbeteren en verpakken als klantproduct.' },
      { id: '3-8', title: 'Je rapport professioneel maken', duration: '18 min', description: 'Van platte tekst naar een gestylde HTML e-mail die je trots aan een klant kunt sturen.' },
    ],
  },
  {
    id: 4,
    title: 'Bouw een SEO Agent',
    description: 'Laat AI zoekwoorden vinden, pagina\'s analyseren en rapporten schrijven. Eén opdracht — de agent doet de rest.',
    premium: true,
    lessons: [
      { id: '4-1', title: 'Wat is SEO en wat gaat de agent doen?', duration: '12 min', description: 'Wat SEO is in gewone taal, welk probleem je agent oplost, en hoe de module is opgebouwd.' },
      { id: '4-2', title: 'Nieuw project aanmaken en CLAUDE.md schrijven', duration: '15 min', description: 'Dezelfde werkwijze als module 3 — snel doorlopen en aanpassen voor de SEO agent.' },
      { id: '4-3', title: 'API keys instellen en packages installeren', duration: '15 min', description: 'DataForSEO en Claude API aanmaken, keys opslaan, en alles testen.' },
      { id: '4-4', title: 'Eerste agent — zoekwoorden ophalen', duration: '20 min', description: 'Zoekwoorden en zoekvolumes ophalen via DataForSEO en opslaan als leesbare lijst.' },
      { id: '4-5', title: 'Tweede agent — een pagina analyseren', duration: '20 min', description: 'Een website bezoeken, uitlezen en rapporteren over titel, koppen en woordcount.' },
      { id: '4-6', title: 'Derde agent — SEO rapport schrijven via Claude API', duration: '20 min', description: 'Claude aanroepen vanuit Python om zoekwoorden en pagina-analyse te combineren tot een rapport.' },
      { id: '4-7', title: 'Alles koppelen en leverbaar maken', duration: '20 min', description: 'Drie agents koppelen via één opdracht, README schrijven, en klantklaar opleveren.' },
    ],
  },
  {
    id: 5,
    title: 'Bouw een Content Agent',
    description: 'Schrijf SEO-teksten en publiceer ze direct op WordPress of Shopify. Van zoekwoord tot live blogpost in één opdracht.',
    premium: true,
    lessons: [
      { id: '5-1', title: 'Wat bouw je en waarom?', duration: '10 min', description: 'Het probleem dat je oplost, wat je gaat bouwen, en hoe je dit verkoopt.' },
      { id: '5-2', title: 'Project aanmaken en CLAUDE.md', duration: '12 min', description: 'Projectstructuur aanmaken voor de content agent — dezelfde aanpak als eerder.' },
      { id: '5-3', title: 'Agent 1 — SEO content schrijven', duration: '20 min', description: 'Een volledig SEO-geoptimaliseerd blogartikel schrijven via de Claude API.' },
      { id: '5-4', title: 'WordPress API instellen', duration: '15 min', description: 'Application Password aanmaken en de verbinding met WordPress testen.' },
      { id: '5-5', title: 'Agent 2a — Publiceren op WordPress', duration: '18 min', description: 'De geschreven content automatisch aanmaken als concept blogpost op WordPress.' },
      { id: '5-6', title: 'Agent 2b — Publiceren op Shopify', duration: '18 min', description: 'De geschreven content aanmaken als blogartikel op Shopify via de Admin API.' },
      { id: '5-7', title: 'Volledige pipeline koppelen en leverbaar maken', duration: '20 min', description: 'Schrijven en publiceren combineren in één opdracht en klantklaar opleveren.' },
    ],
  },
]
