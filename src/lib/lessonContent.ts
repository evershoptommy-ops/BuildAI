export interface LessonContent {
  intro: string
  sections: Section[]
  checklist: string[]
}

export interface Section {
  title?: string
  body: string
  code?: string
  type?: 'text' | 'code' | 'tip' | 'warning'
}

export const lessonContent: Record<string, LessonContent> = {
  '1-1': {
    intro: 'Welkom. Je hebt net een beslissing gemaakt die 99% van de mensen nooit nemen: je gaat leren hoe je AI écht kunt inzetten — niet als chatbot, maar als bouwpartner.',
    sections: [
      {
        body: 'De meeste mensen gebruiken Claude of ChatGPT om een e-mail te schrijven of een vraag te stellen. Jij gaat het anders doen. Jij gaat Claude gebruiken om software te maken. Echte software. Tools die bedrijven willen hebben en waarvoor ze betalen.\n\nJe hoeft geen programmeur te zijn. Je hebt geen technische achtergrond nodig. Wat je wel nodig hebt: nieuwsgierigheid, geduld, en de bereidheid om dingen uit te proberen die soms niet meteen werken.',
      },
      {
        title: 'Hoe de cursus werkt',
        body: 'De cursus bestaat uit 4 modules:\n\n• **Module 1** (gratis): Installatie en je eerste tool\n• **Module 2** (gratis): Je eerste Chrome extensie\n• **Module 3** (premium): Gevorderde tools en automatisering\n• **Module 4** (premium): Verkopen aan klanten en schalen\n\nElke les heeft een korte uitleg, een oefening, en een checklist. Doe de oefeningen. Dat is waar het echte leren gebeurt.',
      },
    ],
    checklist: [
      'Ik heb mijn account aangemaakt',
      'Ik heb de cursusstructuur bekeken',
      'Ik ben klaar om te beginnen',
    ],
  },

  '1-2': {
    intro: 'VS Code is je werkplaats. Het is een gratis programma van Microsoft waarin je al je code schrijft en je projecten beheert. Het ziet er misschien intimiderend uit, maar je hebt maar een klein deel nodig.',
    sections: [
      {
        title: 'Stap 1: Downloaden',
        body: 'Ga naar **code.visualstudio.com** en download de versie voor jouw systeem:\n\n• Windows: klik op "Windows" — download de .exe\n• Mac: klik op "Mac" — kies Apple Silicon als je een M1/M2/M3 Mac hebt, anders Intel\n• Linux: klik op je distributie',
      },
      {
        title: 'Stap 2: Installeren',
        body: '**Windows:** dubbelklik op het gedownloade bestand en volg de stappen. Vink "Add to PATH" aan — dit is belangrijk.\n\n**Mac:** sleep VS Code naar je Applications map.',
        type: 'tip',
      },
      {
        title: 'Stap 3: VS Code openen en instellen',
        body: 'Open VS Code. Je ziet een welkomstscherm. Sluit dat voor nu.\n\nDe dingen die je gaat gebruiken:\n\n• **Explorer** (linker zijbalk, map-icoontje): hier zie je je bestanden\n• **Terminal** (menu → Terminal → New Terminal): hier typ je opdrachten\n• **Editor** (het grote middelste gedeelte): hier schrijf je code',
      },
      {
        title: 'Stap 4: Een werkmap aanmaken',
        body: 'Open de terminal (Terminal → New Terminal in de menubalk) en typ:',
        code: 'mkdir clavify-projecten\ncd clavify-projecten',
      },
    ],
    checklist: [
      'VS Code is geïnstalleerd',
      'Ik kan de terminal openen',
      'Ik heb de map clavify-projecten aangemaakt',
    ],
  },

  '1-3': {
    intro: 'Claude is je AI-partner. Maar de meeste mensen gebruiken het verkeerd. Ze stellen vage vragen en krijgen vage antwoorden. Jij gaat het anders doen.',
    sections: [
      {
        title: 'Account aanmaken',
        body: 'Ga naar **claude.ai** en maak een gratis account aan. Voor deze cursus is de gratis versie voldoende om te starten. Als je later professioneel tools gaat bouwen voor klanten, is Claude Pro (~$20/maand) de investering waard.',
      },
      {
        title: 'De gouden regel: Context is alles',
        body: '**Slechte vraag aan Claude:**\n"Maak een tool voor een restaurant."\n\n**Goede vraag aan Claude:**\n"Ik bouw een eenvoudig Python script voor een restaurant in Amsterdam. Ze willen dat medewerkers aan het begin van de dag hun naam invoeren, en dat het script bijhoudt hoeveel uur elk persoon heeft gewerkt. Aan het einde van de week moet er een simpel overzicht komen. Begin met de basisstructuur van het script en leg elke stap uit."\n\nHet verschil: context (wat, voor wie, waarom), specificiteit (wat het precies moet doen), en richting (begin hier, leg dit uit).',
        type: 'tip',
      },
      {
        title: 'De drie rollen van Claude in jouw workflow',
        body: '1. **Bouwer**: Claude schrijft de code, jij geeft de opdracht\n2. **Uitlegger**: Claude legt uit waarom iets werkt (of niet werkt)\n3. **Debugger**: Als iets kapot is, plak je de foutmelding in Claude en vraag je om hulp',
      },
      {
        title: 'Oefening',
        body: 'Ga naar claude.ai en stel deze vraag:',
        code: 'Ik ben een beginner die leert programmeren. Leg me in 5 stappen uit wat een Python script is en hoe het verschilt van een website.',
      },
    ],
    checklist: [
      'Ik heb een Claude account aangemaakt',
      'Ik heb mijn eerste vraag gesteld aan Claude',
      'Ik begrijp het verschil tussen een slechte en goede prompt',
    ],
  },

  '1-4': {
    intro: 'Node.js en Python zijn de "motoren" achter de tools die je gaat bouwen. Je hoeft niet te weten hoe ze werken — je hoeft ze alleen te installeren.',
    sections: [
      {
        title: 'Node.js installeren',
        body: 'Ga naar **nodejs.org** en download de LTS versie (de aanbevolen stabiele versie).\n\nNa installatie: open je terminal in VS Code en typ:',
        code: 'node --version',
      },
      {
        title: 'Python installeren',
        body: 'Ga naar **python.org/downloads** en download de nieuwste versie.\n\n⚠️ **BELANGRIJK voor Windows:** vink tijdens de installatie "Add Python to PATH" aan. Zonder dit werkt het niet.\n\nNa installatie, typ in je terminal:',
        code: 'python --version',
      },
      {
        title: 'Als het niet werkt',
        body: 'Kopieer de foutmelding die je ziet en vraag het aan Claude:',
        code: 'Ik probeer Node.js te installeren op [Windows/Mac] en krijg deze foutmelding: [plak foutmelding]. Wat moet ik doen?',
        type: 'tip',
      },
    ],
    checklist: [
      'Node.js is geïnstalleerd (node --version werkt)',
      'Python is geïnstalleerd (python --version werkt)',
      'Ik weet hoe ik Claude gebruik bij technische problemen',
    ],
  },

  '1-5': {
    intro: 'Nu gaan we iets échts bouwen. We maken een factuurberekening: je vult uurtarief en uren in, en het script berekent het totaal inclusief BTW. Simpel, maar echt — en je kunt het vandaag nog aan een vriend laten zien.',
    sections: [
      {
        title: 'Stap 1: Maak een projectmap aan',
        body: 'Open de terminal in VS Code en typ:',
        code: 'cd clavify-projecten\nmkdir factuur-tool\ncd factuur-tool',
      },
      {
        title: 'Stap 2: Vraag Claude om de code',
        body: 'Ga naar claude.ai en stuur dit bericht:',
        code: 'Maak een Python script dat werkt als een eenvoudige factuurcalculator. De gebruiker voert via de terminal in: hun naam, het uurtarief (in euro), en het aantal gewerkte uren. Het script berekent het subtotaal, voegt 21% BTW toe, en toont een nette factuuroverzicht in de terminal. Voeg ook een optie toe om dit op te slaan als een .txt bestand. Geef me de complete code met commentaar bij elke stap.',
      },
      {
        title: 'Stap 3: De code in VS Code zetten',
        body: 'Claude geeft je een stuk code. Doe dit:\n\n1. Maak in VS Code een nieuw bestand: File → New File\n2. Sla het op als `factuur.py` in je factuur-tool map\n3. Kopieer de code van Claude en plak het in dit bestand\n4. Sla op (Ctrl+S of Cmd+S)',
      },
      {
        title: 'Stap 4: De tool uitvoeren',
        body: 'In de terminal:',
        code: 'python factuur.py',
      },
      {
        title: 'Als er een fout is',
        body: 'Geen paniek. Kopieer de foutmelding en stuur hem naar Claude:',
        code: 'Ik probeer dit script uit te voeren en krijg deze fout: [foutmelding]. Hoe los ik dit op?',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik heb de factuur-tool map aangemaakt',
      'Het script werkt in de terminal',
      'Ik begrijp hoe ik foutmeldingen aanpak met Claude',
    ],
  },

  '2-1': {
    intro: 'Een Chrome extensie is een mini-programma dat in je browser leeft. Je kent ze: AdBlock, Grammarly, LastPass. Maar de meeste bedrijven willen geen publieke extensies — ze willen iets voor henzelf.',
    sections: [
      {
        title: 'Waarom dit waardevol is',
        body: 'Chrome extensies zijn relatief eenvoudig te bouwen, maar de meeste bedrijven weten niet hoe. Ze zien het als "software" en denken dat het duur is. Dat is jouw kans.\n\nExtensies die bedrijven wensen:\n\n• **Productiviteitstools**: Timer, takenlijst, focus-modus\n• **Data-extractie**: Kopieer automatisch informatie van websites\n• **Integraties**: Koppel twee websites aan elkaar met één klik\n• **Branding**: Aangepaste nieuwe-tab-pagina met bedrijfslogo en links',
      },
      {
        title: 'Hoe een extensie technisch werkt (simpel)',
        body: 'Een Chrome extensie bestaat uit drie bestanden:\n\n1. `manifest.json` — het "paspoort" van de extensie (naam, rechten, etc.)\n2. `popup.html` — wat de gebruiker ziet als hij op het icoontje klikt\n3. `popup.js` — wat er gebeurt als de gebruiker interacteert\n\nDat is het. Drie bestanden. De rest is details.',
      },
    ],
    checklist: [
      'Ik begrijp wat een Chrome extensie is',
      'Ik kan drie praktijkvoorbeelden noemen',
      'Ik begrijp de basisstructuur (3 bestanden)',
    ],
  },

  '2-2': {
    intro: 'Laten we elk bestand bekijken. Je hoeft dit niet uit je hoofd te leren — Claude helpt je altijd — maar het helpt als je begrijpt wat je naar kijkt.',
    sections: [
      {
        title: 'manifest.json — Het paspoort',
        body: 'Dit is het belangrijkste bestand. Chrome leest dit om te begrijpen wat je extensie doet.',
        code: '{\n  "manifest_version": 3,\n  "name": "Mijn Eerste Extensie",\n  "version": "1.0",\n  "description": "Een eenvoudige Chrome extensie",\n  "action": {\n    "default_popup": "popup.html",\n    "default_icon": "icon.png"\n  }\n}',
      },
      {
        title: 'popup.html — Wat de gebruiker ziet',
        body: 'Dit is een gewone HTML pagina, maar dan klein.',
        code: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <style>\n    body { width: 300px; padding: 20px; font-family: Arial; }\n    button { background: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <h2>Mijn Tool</h2>\n  <button id="mijnKnop">Klik hier</button>\n  <p id="resultaat"></p>\n  <script src="popup.js"></script>\n</body>\n</html>',
      },
      {
        title: 'popup.js — Wat er gebeurt',
        body: 'Dit is de logica achter de extensie.',
        code: "document.getElementById('mijnKnop').addEventListener('click', function() {\n  document.getElementById('resultaat').textContent = 'Het werkt!';\n});",
      },
    ],
    checklist: [
      'Ik begrijp wat manifest.json doet',
      'Ik weet waarvoor popup.html en popup.js zijn',
      'Ik heb de voorbeeldcode doorgelezen',
    ],
  },

  '2-3': {
    intro: 'We bouwen een woordenteller. De gebruiker kan tekst invoeren, en de extensie telt woorden, tekens, en zinnen. Simpel maar nuttig.',
    sections: [
      {
        title: 'Stap 1: Projectmap aanmaken',
        body: 'Open de terminal in VS Code:',
        code: 'cd clavify-projecten\nmkdir woordenteller-extensie\ncd woordenteller-extensie',
      },
      {
        title: 'Stap 2: Vraag Claude om de complete extensie',
        body: 'Ga naar claude.ai en stuur:',
        code: 'Bouw een complete Chrome extensie (Manifest V3) die werkt als een woordenteller. De popup toont een tekstvak waar de gebruiker tekst kan invoeren of plakken. Terwijl de gebruiker typt, toont de extensie live het aantal woorden, tekens (met en zonder spaties), en zinnen. Maak het ontwerp minimalistisch en professioneel met een donker kleurenschema. Geef me alle drie de bestanden: manifest.json, popup.html, en popup.js.',
      },
      {
        title: 'Stap 3: Bestanden opslaan',
        body: 'Claude geeft je de drie bestanden terug. Klik in de Claude chat op **Download all** (onderaan de bestandenlijst) om de ZIP te downloaden.\n\nPak de ZIP uit en zet de bestanden (`manifest.json`, `popup.html`, `popup.js`) in je `woordenteller-extensie` map in `clavify-projecten`.\n\n⚠️ Let op: je hebt alleen de losse bestanden nodig, niet een submap. Zorg dat `manifest.json` direct in de `woordenteller-extensie` map staat.',
        type: 'warning',
      },
      {
        title: 'Stap 4: Extensie laden in Chrome',
        body: '1. Open Chrome\n2. Ga naar `chrome://extensions/`\n3. Zet "Ontwikkelaarsmodus" aan (rechts bovenin)\n4. Klik "Uitgepakte extensie laden"\n5. Selecteer je `woordenteller-extensie` map\n\nJe extensie verschijnt nu in Chrome. Klik op het puzzelstukje rechtsboven om hem vast te zetten.',
      },
      {
        title: 'Iets aanpassen?',
        body: 'Vraag het aan Claude:',
        code: 'In mijn Chrome extensie wil ik ook het gemiddeld aantal woorden per zin tonen. Hoe pas ik popup.js aan?',
        type: 'tip',
      },
    ],
    checklist: [
      'De drie bestanden zijn aangemaakt',
      'De extensie is geladen in Chrome',
      'De woordenteller werkt correct',
      'Ik heb minstens één aanpassing gemaakt',
    ],
  },

  '2-4': {
    intro: 'Een werkende extensie is stap één. Een extensie die er professioneel uitziet, is stap twee. Klanten betalen meer voor tools die er goed uitzien.',
    sections: [
      {
        title: 'CSS basics voor extensies',
        body: 'Extensie-popups zijn kleine HTML pagina\'s. Alles wat je in gewone websites doet met CSS, werkt hier ook. Maar er zijn een paar regels:\n\n• Breedte: maximaal 800px (Chrome knipt af), standaard 300-400px\n• Hoogte: wordt automatisch bepaald door de inhoud\n• Gebruik geen `position: fixed` — dat werkt raar in popups',
      },
      {
        title: 'Claude vragen om een redesign',
        body: 'Stuur dit naar Claude:',
        code: 'Mijn Chrome extensie woordenteller ziet er basic uit. Redesign de popup.html en CSS zodat het er professioneel uitziet. Gebruik een wit/grijs kleurenschema met blauwe accenten. Voeg subtiele hover-effecten toe aan de statistieken. Maak het modern en clean, vergelijkbaar met een SaaS product. Behoud alle bestaande functionaliteit.',
      },
      {
        title: 'Het nieuwe bestand opslaan',
        body: 'Claude geeft je een nieuw `popup.html` terug. Doe het volgende:\n\n1. Klik op **Download all** onderaan de bestandenlijst in Claude\n2. Pak de ZIP uit\n3. Kopieer het nieuwe `popup.html` bestand naar je `woordenteller-extensie` map — overschrijf het oude bestand\n4. Ga naar `chrome://extensions/` en klik op het ververs-icoontje (↺) bij je extensie\n5. Klik opnieuw op je extensie om het nieuwe ontwerp te zien',
        type: 'tip',
      },
      {
        title: 'Een icoontje toevoegen',
        body: 'Download een 128x128px PNG van emojipng.com of flaticon.com. Sla het bestand op als `icon.png` direct in je `woordenteller-extensie` map — dus niet in een submap.\n\nOpen daarna je `manifest.json` in VS Code. Zoek het stuk met `"action"` en voeg het `"icons"` blok eronder toe, zodat het er zo uitziet:',
        code: '{\n  "manifest_version": 3,\n  "name": "Mijn Eerste Extensie",\n  "version": "1.0",\n  "action": {\n    "default_popup": "popup.html"\n  },\n  "icons": {\n    "16": "icon.png",\n    "48": "icon.png",\n    "128": "icon.png"\n  }\n}',
      },
      {
        title: 'Extensie herladen na wijziging',
        body: 'Na elke wijziging aan `manifest.json` moet je het bestand eerst opslaan en dan de extensie herladen in Chrome:\n\n1. Sla `manifest.json` op in VS Code (Ctrl+S op Windows, Cmd+S op Mac)\n2. Ga naar `chrome://extensions/`\n3. Klik op het ververs-icoontje (↺) bij je extensie\n4. Klik opnieuw op het extensie-icoontje om het resultaat te zien\n\nJe icoontje verschijnt nu in de Chrome extensiebalk.',
        type: 'tip',
      },
    ],
    checklist: [
      'Mijn extensie heeft een professioneel ontwerp',
      'Er is een icoontje toegevoegd',
      'Ik kan uitleggen hoe ik CSS gebruik in een extensie',
    ],
  },

  '2-5': {
    intro: 'Je hebt nu de basis. Hier zijn vier extensies die je vandaag kunt bouwen met exact dezelfde aanpak als de woordenteller. Kies er één en bouw hem af voor het einde van deze les.',
    sections: [
      {
        title: 'Hoe je elke extensie bouwt',
        body: 'De aanpak is elke keer hetzelfde:\n\n1. Maak een nieuwe map aan in `clavify-projecten` (bijv. `pomodoro-extensie`)\n2. Stuur de prompt hieronder naar Claude\n3. Download de bestanden en zet ze in je map\n4. Laad de extensie via `chrome://extensions/` → "Uitgepakte extensie laden"\n5. Test en pas aan',
        type: 'tip',
      },
      {
        title: '1. Pomodoro Timer ⭐ Aanbevolen voor beginners',
        body: 'Een timer die 25 minuten werkt, 5 minuten pauze, en bijhoudt hoeveel sessies je hebt gedaan. Populair bij zelfstandigen en studenten. Makkelijkste om mee te beginnen.',
        code: 'Bouw een complete Chrome extensie (Manifest V3) die werkt als een Pomodoro timer. 25 minuten werken, dan 5 minuten pauze. Toon een visuele countdown in de popup. Speel een geluidssignaal af bij het einde van een sessie. Houd bij hoeveel sessies er gedaan zijn. Gebruik een donker, professioneel ontwerp. Geef me alle bestanden: manifest.json, popup.html, en popup.js.',
      },
      {
        title: '2. Kleurenkopieerder',
        body: 'De gebruiker opent de extensie op een website, voert een hex-kleur in of klikt op "Kopieer kleur", en de extensie slaat hem op in een lijstje. Ideaal voor designers.',
        code: 'Bouw een Chrome extensie (Manifest V3) die werkt als een kleurenpalet-opslager. De gebruiker kan een hex-kleurcode invoeren en opslaan in een lijst. De lijst toont een kleurvlakje naast de hex-code. Er is een kopieer-knop per kleur. Opgeslagen kleuren blijven bewaard via LocalStorage. Donker professioneel ontwerp. Geef me alle bestanden: manifest.json, popup.html, en popup.js.',
      },
      {
        title: '3. Linkopslager',
        body: 'De gebruiker klikt op een knop in de extensie, en de huidige pagina-URL wordt opgeslagen in een lijstje. Met een knop om alle links te exporteren als tekstbestand.',
        code: 'Bouw een Chrome extensie (Manifest V3) die de huidige pagina-URL opslaat als de gebruiker op een knop klikt. Toon een lijst van alle opgeslagen links met titel en URL. Voeg een "Verwijder" knop toe per link. Voeg een "Exporteer als .txt" knop toe onderaan. Sla alles op via LocalStorage. Donker professioneel ontwerp. Geef me alle bestanden: manifest.json, popup.html, en popup.js.',
      },
      {
        title: '4. Aangepaste Nieuwe Tab',
        body: 'Vervangt de standaard nieuwe tab met een persoonlijke startpagina: een naam, snelkoppelingen naar favoriete websites, en een motiverende quote. Populair bij kleine bedrijven.',
        code: 'Bouw een Chrome extensie (Manifest V3) die de nieuwe tab vervangt met een persoonlijke startpagina. Toon een begroeting met de tijd van de dag ("Goedemorgen", "Goedemiddag", "Goedenavond"). Toon 6 aanpasbare snelkoppelingen met icoon en naam. Toon een willekeurige motiverende quote onderaan. Gebruik een mooi donker gradient ontwerp. Geef me alle bestanden: manifest.json, newtab.html, newtab.js, en pas manifest.json aan om de nieuwe tab te vervangen.',
      },
      {
        title: 'Welke extensies verkopen het best?',
        body: 'In volgorde van populariteit bij MKB-klanten:\n\n1. **Aangepaste nieuwe tab** — persoonlijk, zichtbaar elke dag, makkelijk te verkopen\n2. **Linkopslager / data-tools** — bespaart hen aantoonbaar tijd\n3. **Pomodoro / productiviteit** — populair bij kleine teams\n\nNa deze module kun je al een van deze extensies aanbieden aan een eerste klant voor €150–€300.',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik heb een tweede extensie gebouwd (naar keuze)',
      'Ik heb de extensie geladen en getest in Chrome',
      'Ik weet welke extensies commercieel interessant zijn',
      'Ik kan de basisstructuur reproduceren zonder de les te raadplegen',
    ],
  },

  '3-1': {
    intro: 'In modules 1 en 2 werkte je met Claude via de browser. Dat werkt prima voor losse vragen. Maar voor een heel projectsysteem wil je Claude direct in je editor — als een collega die naast je zit, meekijkt, en bestanden direct aanpast zonder dat jij iets hoeft te kopiëren.',
    sections: [
      {
        title: 'Wat is de Claude Code extensie?',
        body: 'De Claude Code extensie is een agent die je project begrijpt, bestanden aanmaakt en aanpast, en scripts uitvoert — allemaal vanuit een paneel rechts in VS Code.\n\n**Browser (zoals je deed in module 1 en 2):** jij kopieert code → plakt in Claude → krijgt antwoord → kopieert terug → plakt op de juiste plek. Vijf stappen, kans op fouten bij elke stap.\n\n**Claude Code extensie:** jij typt een opdracht → Claude leest je bestanden → past ze direct aan → klaar. Één stap.',
      },
      {
        title: 'Geen download nodig',
        body: 'Anders dan in module 2 hoef je hier geen bestanden te downloaden of handmatig te verplaatsen. Claude Code schrijft alles direct in je projectmap. Je gebruikt Ctrl+S / Cmd+S alleen als je zelf iets typt in een bestand.',
        type: 'tip',
      },
      {
        title: 'Vereisten voordat je begint',
        body: '**VS Code versie 1.98.0 of nieuwer**\nControleer via Help → About (Windows) of Code → About VS Code (Mac). Zie je een lager versienummer? Download de nieuwste versie via **code.visualstudio.com**.\n\n**Claude Pro account of hoger**\nDe Claude Code extensie werkt niet met een gratis account. Je hebt minimaal Claude Pro nodig (~$17/maand). Ga naar **claude.ai** → klik op je naam → Upgrade.',
      },
      {
        title: 'Gratis account werkt niet',
        body: 'Heb je alleen een gratis Anthropic account? Dan kun je de extensie niet activeren. Upgrade eerst naar Pro. Wil je de module toch volgen zonder Pro? Zie het alternatief onderaan deze les.',
        type: 'warning',
      },
      {
        title: 'Stap 1: De extensie installeren',
        body: 'Open VS Code. Druk op Ctrl+Shift+X (Windows) of Cmd+Shift+X (Mac) om de Extensions marketplace te openen.\n\nZoek op: `Claude Code`\n\nJe ziet de officiële extensie van Anthropic. Klik op "Install". Herstart VS Code als het icoontje daarna niet verschijnt.',
      },
      {
        title: 'Stap 2: Het paneel openen',
        body: 'Het Claude Code icoontje (✦) staat op drie plekken:\n\n• **Linker zijbalk:** alleen zichtbaar als er een bestand open staat in de editor\n• **Rechtsonder in de statusbalk:** werkt altijd, ook zonder open bestand\n• **Command Palette:** Ctrl+Shift+P (Windows) / Cmd+Shift+P (Mac) → typ "Claude Code: Open"',
      },
      {
        title: 'Icoontje niet zichtbaar?',
        body: 'Open een willekeurig bestand in de editor — bijvoorbeeld je `factuur.py` uit module 1. Het icoontje in de linker zijbalk verschijnt alleen als de editor een bestand heeft geladen.',
        type: 'tip',
      },
      {
        title: 'Stap 3: Inloggen',
        body: 'Klik op het ✦ icoontje. Het paneel opent rechts. Klik op "Sign in". Je browser opent — log in met hetzelfde Anthropic account als claude.ai. Na bevestiging keert VS Code terug en zie je een leeg chatvenster.',
      },
      {
        title: 'Stap 4: Automatisch goedkeuren instellen',
        body: 'In het Claude Code paneel zie je de melding "Press Shift+Tab to automatically approve code edits". Druk één keer op **Shift+Tab** — Claude vraagt daarna niet meer om bevestiging bij elke bestandswijziging. Dat is de snelste workflow.\n\nWil je liever elke wijziging zelf goedkeuren? Laat het dan staan. Je klikt dan steeds op "Accept" als Claude iets aanpast.',
        type: 'tip',
      },
      {
        title: 'Je eerste test',
        body: 'Typ in het chatvenster:',
        code: 'Hallo. Welke bestanden en mappen staan er in de map die nu open staat in VS Code?',
      },
      {
        title: 'Als de extensie niet werkt',
        body: '**Icoontje verschijnt niet:** open een bestand in de editor.\n\n**Reload window:** Ctrl+Shift+P / Cmd+Shift+P → typ "Developer: Reload Window" → Enter.\n\n**Inloggen mislukt:** open VS Code vanuit de terminal met `code .` in plaats van via het startmenu of Spotlight.\n\n**Vragen worden niet beantwoord:** controleer of je Claude Pro account actief is via **claude.ai** → Instellingen → Abonnement.',
      },
      {
        title: 'Alternatief voor gratis accounts',
        body: 'Installeer Claude Code via de terminal en start met `claude`. De rest van de module werkt hetzelfde — je typt opdrachten in de terminal in plaats van het VS Code paneel.',
        code: 'npm install -g @anthropic-ai/claude-code',
      },
    ],
    checklist: [
      'De Claude Code extensie is geïnstalleerd en ik ben ingelogd',
      'Het chatvenster is zichtbaar in het Claude-paneel rechts',
      'Shift+Tab is ingedrukt voor automatisch goedkeuren',
      'Claude kan de inhoud van mijn projectmap benoemen',
    ],
  },

  '3-2': {
    intro: 'Voordat je iets bouwt, zet je de structuur goed neer. Dit is het fundament van alles. Een agent zonder structuur is als een medewerker zonder taakomschrijving — hij probeert wel, maar het gaat mis op het verkeerde moment.',
    sections: [
      {
        title: 'Waarom structuur zo belangrijk is',
        body: 'Stel je voor: je vraagt Claude om een website te scrapen, een rapport te maken, en dat per e-mail te sturen. Als Claude dat allemaal zelf uitdenkt — los, zonder vaste regels — gaat het vroeg of laat mis. Eén fout in stap 2 = stap 3 ook fout. 90% succes per stap = 59% totaal succes over 5 stappen.\n\nDe oplossing: drie lagen die elk een eigen verantwoordelijkheid hebben.',
      },
      {
        title: 'Laag 1: Directives — Wat moet er gebeuren',
        body: 'Instructiebestanden in gewone taal. Geen code. Je schrijft hier alsof je een slimme medewerker instrueert: wat is het doel, welke stappen zijn er, welk script moet gebruikt worden, wat doe je als er iets misgaat.\n\nLocatie: `directives/` map',
      },
      {
        title: 'Laag 2: Orchestratie — Claude zelf',
        body: 'Claude leest de directives, beslist wat er moet gebeuren, bouwt of roept de juiste scripts aan, en verbetert de directives als hij iets nieuws leert. Hij schrijft geen nieuw script als er al één bestaat.\n\nLocatie: `CLAUDE.md` — zijn briefing bij elke sessie',
      },
      {
        title: 'Laag 3: Execution — Python scripts',
        body: 'De werkpaarden. Doen altijd hetzelfde. Elk script doet één ding en doet dat goed. Claude roept ze aan — hij denkt de logica niet zelf uit.\n\nLocatie: `execution/` map',
      },
      {
        title: 'Stap 1: Map aanmaken in de Verkenner',
        body: 'Kies zelf een naam voor je agent — iets wat past bij wat je gaat bouwen. Bijvoorbeeld `weer-agent`, `mail-agent`, of gewoon `mijn-agent`. Gebruik geen spaties in de naam, gebruik een koppelteken in plaats daarvan.\n\n**Windows:**\n1. Open de Verkenner (de gele map in je taakbalk)\n2. Navigeer naar je `clavify-projecten` map — die heb je aangemaakt in module 1\n3. Klik met de rechtermuisknop op een lege plek → "Nieuwe map"\n4. Geef de map jouw gekozen naam\n\n**Mac:**\n1. Open Finder\n2. Navigeer naar je `clavify-projecten` map\n3. Rechtsklik op een lege plek → "Nieuwe map"\n4. Geef de map jouw gekozen naam',
      },
      {
        title: 'Stap 2: Map openen in VS Code',
        body: 'Open VS Code. Klik op **File → Open Folder** (Windows) of **File → Open...** (Mac).\n\nNavigeer naar je `clavify-projecten` map, klik op de map die je net hebt aangemaakt, en klik op "Map selecteren" (Windows) of "Open" (Mac).\n\nJe ziet nu jouw map verschijnen in de Explorer links — de map is leeg, dat klopt.',
        type: 'tip',
      },
      {
        title: 'De mapstructuur laten aanmaken door Claude',
        body: 'Je ziet nu jouw agentmap links in de Explorer en het Claude Code paneel rechts. Klik in het tekstvak onderin het Claude Code paneel en typ:',
        code: 'Maak de volgende structuur aan in de huidige map:\n\n├── CLAUDE.md\n├── .env\n├── .env.example\n├── .gitignore\n├── directives/\n├── execution/\n└── .tmp/\n\nVul .gitignore in met: .env, .tmp/, __pycache__/, *.pyc\nLaat de andere bestanden leeg.\nBevestig als alles klaar is.',
      },
      {
        title: '.env nooit delen',
        body: 'Het `.env` bestand bevat straks je API keys en wachtwoorden. Dit bestand mag NOOIT naar GitHub of gedeeld worden. De `.gitignore` die Claude aanmaakt zorgt hiervoor automatisch.',
        type: 'warning',
      },
      {
        title: '.env.example invullen',
        body: 'Klik op `.env.example` in de Explorer links. Dit bestand is een sjabloon — het laat zien welke variabelen jouw project nodig heeft, zonder de echte waarden. Anderen mogen dit bestand zien; `.env` nooit.\n\nVoeg deze starttekst toe en sla op (Ctrl+S op Windows, Cmd+S op Mac). Naarmate je verder gaat in de module voeg je hier variabelen aan toe:',
        code: '# Kopieer dit bestand naar .env en vul de echte waarden in\n# .env.example mag je delen — .env nooit\n\n# Variabelen komen hier te staan naarmate je verder gaat in de module',
      },
    ],
    checklist: [
      'Mijn agentmap is aangemaakt en geopend in VS Code',
      'De mapstructuur (CLAUDE.md, directives/, execution/, .tmp/) is aangemaakt door Claude',
      '`.gitignore` bevat .env en .tmp/',
      '`.env.example` is ingevuld en opgeslagen (Ctrl+S / Cmd+S)',
    ],
  },

  '3-3': {
    intro: 'CLAUDE.md is het bestand dat Claude automatisch leest bij elke sessie. Het is zijn briefing — alles wat je hierin schrijft weet hij direct, zonder dat je het elke keer opnieuw hoeft uit te leggen. Het verschil tussen een nieuwe medewerker die niets weet en een ervaren collega die precies weet hoe jij werkt.',
    sections: [
      {
        title: 'CLAUDE.md laten schrijven',
        body: 'Open het bestand `CLAUDE.md` in VS Code: klik erop in de Explorer links (de bestandenlijst in de zijbalk). Het bestand is leeg — dat klopt. Typ daarna in het Claude-paneel rechts:',
        code: 'Schrijf de inhoud voor CLAUDE.md en sla het direct op.\nDit is mijn briefing die je automatisch leest bij elke sessie.\nSchrijf in het Nederlands.\n\nInhoud:\n1. Uitleg van de 3-laagse architectuur (directives, orchestratie, execution)\n2. Werkprincipes:\n   - Check execution/ eerst voordat je een script schrijft\n   - Zelfherstellend: bij fout → fix script → test → update directive\n   - Directives zijn levende documenten: update ze als je iets nieuws leert\n   - .env en .tmp/ nooit committen naar Git\n3. De mappenstructuur als tekstdiagram\n4. Een sectie "Over dit Project" die ik zelf nog invul',
      },
      {
        title: 'Plan mode herkennen',
        body: 'Soms toont Claude eerst een plan voordat hij iets doet. Je ziet een overzicht van wat hij gaat aanpassen. Lees het door — ziet het er goed uit? Klik "Continue" of "Accept plan". Wil je iets aanpassen? Typ je opmerking in het Claude-paneel.',
      },
      {
        title: '"Over dit Project" zelf invullen',
        body: 'Scroll naar het einde van CLAUDE.md. Je ziet een lege sectie "Over dit Project". Vul dit zelf in — Claude leest dit bij elke sessie en past zijn gedrag aan op jouw project:',
        code: '## Over dit Project\n\nDit project haalt dagelijks weerdata op voor een stad\nen stuurt het automatisch per e-mail naar de klant.\n\nDoelgroep: kleine bedrijven in Nederland\nDeliverable: e-mail in inbox van de klant elke ochtend',
      },
      {
        title: 'Opslaan niet vergeten',
        body: 'Sla CLAUDE.md op na het invullen van "Over dit Project" (Ctrl+S op Windows, Cmd+S op Mac).',
        type: 'tip',
      },
      {
        title: 'Testen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees CLAUDE.md en leg me uit hoe jij werkt in dit project.\nNoem de 3 lagen, de werkprincipes, en de mappenstructuur.',
      },
    ],
    checklist: [
      'CLAUDE.md is geschreven door Claude en opgeslagen',
      '"Over dit Project" is door mij ingevuld en opgeslagen (Ctrl+S / Cmd+S)',
      'Claude beschrijft de 3 lagen correct op basis van CLAUDE.md',
      'Ik begrijp wat Plan mode is en wanneer ik "Accept" klik',
    ],
  },

  '3-4': {
    intro: 'Claude Code kan Python packages niet installeren via het paneel — dat doe je eenmalig handmatig via de terminal. Daarna hoef je er nooit meer aan te denken.',
    sections: [
      {
        title: 'Terminal openen in VS Code',
        body: 'Druk op Terminal → New Terminal in de menubalk. De terminal opent onderin VS Code.\n\nControleer of je in de juiste map staat:\n• **Mac/Linux:** typ `pwd` — je ziet `.../clavify-projecten/mijn-agent`\n• **Windows:** typ `cd` — je ziet `...\\clavify-projecten\\mijn-agent`\n\nSta je ergens anders? Navigeer handmatig:\n• Windows: `cd clavify-projecten\\mijn-agent`\n• Mac: `cd clavify-projecten/mijn-agent`',
      },
      {
        title: 'Packages installeren',
        body: 'Typ deze commando\'s één voor één:',
        code: 'pip install requests\npip install python-dotenv',
      },
      {
        title: 'Werkt pip niet?',
        body: 'Probeer `pip3` of `python -m pip`:',
        code: 'pip3 install requests\npip3 install python-dotenv',
        type: 'tip',
      },
      {
        title: 'Controleren of het werkt',
        body: 'Voer dit commando uit — je moet "Klaar" zien:',
        code: 'python -c "import requests; from dotenv import load_dotenv; print(\'Klaar\')"',
      },
      {
        title: 'Foutmelding bij installatie?',
        body: 'Kopieer de foutmelding en plak hem in het Claude-paneel:',
        code: 'Ik krijg deze fout bij het installeren van Python packages op [Windows/Mac]: [foutmelding]. Hoe los ik dit op?',
        type: 'tip',
      },
    ],
    checklist: [
      '`requests` en `python-dotenv` zijn geïnstalleerd',
      'Het testcommando geeft "Klaar"',
    ],
  },

  '3-5': {
    intro: 'Nu gaan we iets echts bouwen. Een agent die op jouw commando het actuele weer ophaalt voor een stad en het resultaat netjes opslaat. Volledig werkend, stap voor stap — van API key tot tekstbestand.',
    sections: [
      {
        title: 'Stap 1: API key ophalen',
        body: 'Ga naar https://www.weatherapi.com/ → klik op "Sign Up" → maak een gratis account aan en bevestig je e-mail. Na inloggen zie je direct je API key op het dashboard. Kopieer hem.\n\nDe API key werkt direct — geen wachttijd.',
        type: 'tip',
      },
      {
        title: 'API key opslaan in .env',
        body: 'Open `.env` in VS Code door erop te klikken in de Explorer links. Voeg toe en sla op (Ctrl+S op Windows, Cmd+S op Mac):',
        code: 'WEATHER_API_KEY=plak_hier_jouw_key',
      },
      {
        title: 'Stap 2: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/weer_rapport.md aan met een volledige directive in het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Weerdata ophaalt via OpenWeatherMap API voor een opgegeven stad\n- Resultaat opslaat als leesbare tekst in .tmp/weer_rapport.txt\n- Toont: datum en tijd, stadsnaam, temperatuur in Celsius, feels like,\n  weerbeschrijving, luchtvochtigheid, windsnelheid in km/h\n\nInclusief:\n- Doel\n- Input parameters (stad en output bestandspad)\n- Hoe het script aan te roepen\n- Vereisten (.env variabelen en geïnstalleerde packages)\n- API: WeatherAPI.com (weatherapi.com), endpoint /v1/current.json\n- Edge cases: stad niet gevonden, ongeldige API key, netwerk fout,\n  ontbrekende .env variabele\n- Instructie voor zelfherstel bij fouten',
      },
      {
        title: 'Stap 3: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/weer_rapport.md en bouw execution/weer_ophalen.py\n\nTechnisch:\n- argparse voor --stad en --output argumenten\n- load_dotenv() als allereerste actie\n- WEATHER_API_KEY laden via os.getenv()\n- Endpoint: https://api.weatherapi.com/v1/current.json?key={key}&q={stad}&lang=nl\n- Haal op: temperatuur (°C), feels like (°C), weerbeschrijving, luchtvochtigheid, windsnelheid (km/h)\n- Schrijf resultaat naar het outputbestand\n- Volg alle edge cases uit de directive\n- Commentaar bij elke sectie',
      },
      {
        title: 'load_dotenv() als eerste',
        body: 'Controleer het script na aanmaken: de eerste regels van `execution/weer_ophalen.py` moeten zijn:\n\n`from dotenv import load_dotenv` en `load_dotenv()`\n\nZie je dit niet? Typ in het Claude-paneel: "Controleer dat load_dotenv() de allereerste actie is in execution/weer_ophalen.py."',
        type: 'warning',
      },
      {
        title: 'Stap 4: De agent draaien',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/weer_rapport.md en voer de taak uit voor de stad Utrecht.\nSla het resultaat op in .tmp/weer_rapport.txt',
      },
      {
        title: 'Als er iets fout gaat',
        body: 'Typ in het Claude-paneel:',
        code: 'Er is een fout opgetreden. Voer de self-annealing procedure uit:\n1. Lees de foutmelding volledig\n2. Fix het script\n3. Test het opnieuw\n4. Update directives/weer_rapport.md met wat je hebt geleerd\nLeg daarna uit wat er mis was en wat je hebt gewijzigd.',
        type: 'tip',
      },
    ],
    checklist: [
      'WeatherAPI key staat in `.env` en opgeslagen (Ctrl+S / Cmd+S)',
      '`directives/weer_rapport.md` is aangemaakt door Claude',
      '`execution/weer_ophalen.py` heeft `load_dotenv()` als eerste regel',
      '`.tmp/weer_rapport.txt` bevat een correct weerrapport',
    ],
  },

  '3-6': {
    intro: 'Je hebt één werkende agent. Nu voeg je een tweede toe en koppel je ze. Jij geeft één opdracht — het systeem voert twee taken in volgorde uit. Dit is het moment waarop het echt een machine wordt.',
    sections: [
      {
        title: 'Stap 1: Gmail App Password aanmaken',
        body: 'Je script stuurt e-mail via Gmail. Hiervoor heb je een App Password nodig — een apart wachtwoord speciaal voor dit script, los van je normale wachtwoord.\n\n**Eerst: verificatie in twee stappen aanzetten**\n1. Ga naar **myaccount.google.com** → klik "Beveiliging"\n2. Scroll naar "Verificatie in twee stappen" en zet het aan — dit is verplicht voordat App Passwords werken\n3. Volg de stappen om je telefoonnummer te koppelen\n\n**Dan: App Password aanmaken**\n4. Ga naar **myaccount.google.com/apppasswords**\n5. Geef het een naam zoals "clavify-agent" en klik "Maken"\n6. Kopieer de 16 tekens — je ziet ze maar één keer\n\nOpen `.env` in VS Code (klik erop in de Explorer links). Voeg toe en sla op (Ctrl+S op Windows, Cmd+S op Mac):',
        code: 'GMAIL_USER=jouw@gmail.com\nGMAIL_APP_PASSWORD=de16tekenshier',
      },
      {
        title: 'Geen spaties in het wachtwoord',
        body: 'Google toont het App Password soms met spaties voor leesbaarheid. Voer het in `.env` in zonder spaties, anders werkt de authenticatie niet.',
        type: 'warning',
      },
      {
        title: 'Stap 2: E-mail directive en script laten bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/send_email.md aan met een volledige directive in het Nederlands.\nBouw daarna ook direct execution/send_email.py\n\nHet systeem verstuurt een e-mail via Gmail met inhoud uit een lokaal tekstbestand.\n\nDirective moet bevatten:\n- Input parameters: --to, --subject, --body (pad naar .txt bestand)\n- Vereisten: GMAIL_USER en GMAIL_APP_PASSWORD in .env\n- Edge cases: bestand niet gevonden, SMTP fout, ontbrekende .env variabelen,\n  ongeldig e-mailadres\n- Instructie voor zelfherstel\n\nScript technisch:\n- argparse voor --to, --subject, --body\n- load_dotenv() als allereerste actie\n- smtplib.SMTP_SSL op poort 465 (niet STARTTLS op 587)\n- Print bevestiging met tijdstip na succes',
      },
      {
        title: 'Stap 3: Testmail sturen',
        body: 'Typ in het Claude-paneel (vervang het e-mailadres door jouw eigen adres):',
        code: 'Voer de send_email directive uit.\nStuur een e-mail naar [jouw eigen e-mailadres]\nmet subject "Test Clavify Agent"\nen gebruik .tmp/weer_rapport.txt als inhoud.',
      },
      {
        title: '535 Authentication failed?',
        body: 'Controleer: geen spaties in het App Password in `.env`, is 2-stapsverificatie echt actief, juist Gmail adres in GMAIL_USER. Typ daarna in het Claude-paneel: "535 authenticatiefout. Controleer of het script SMTP_SSL gebruikt op poort 465 en niet STARTTLS op 587."',
        type: 'warning',
      },
      {
        title: 'Stap 4: De twee agents koppelen',
        body: 'Typ in het Claude-paneel (vervang het e-mailadres):',
        code: 'Voer dit in volgorde uit via de directives:\n1. Haal het weerrapport op voor Rotterdam via weer_rapport directive\n   en sla op in .tmp/weer_rapport.txt\n2. Stuur het rapport naar [jouw e-mailadres]\n   met subject "Weerrapport Rotterdam" via send_email directive\n\nGebruik de directives als instructiebron.\nMeld na elke stap kort wat je hebt gedaan.',
      },
    ],
    checklist: [
      'Gmail App Password aangemaakt en in `.env` zonder spaties, opgeslagen (Ctrl+S / Cmd+S)',
      '`directives/send_email.md` en `execution/send_email.py` aangemaakt door Claude',
      'Testmail ontvangen in eigen inbox',
      'De twee agents werken samen via één opdracht in het Claude-paneel',
    ],
  },

  '3-7': {
    intro: 'Je systeem werkt. Nu leer je twee dingen: hoe het zichzelf verbetert als er iets misgaat — en hoe je het verpakt als een product dat je kunt leveren aan een klant.',
    sections: [
      {
        title: 'Het systeem dat zichzelf verbetert',
        body: 'Dit is het principe dat je systeem waardevoller maakt naarmate het vaker draait:\n\nFout optreedt → Claude leest de volledige foutmelding → Claude repareert het script → Claude test het opnieuw → Claude voegt de oplossing toe aan de directive → Systeem is sterker dan ervoor.\n\nElk probleem dat het systeem oplost wordt kennis in de directive. Na tien runs weet het systeem dingen die jij nooit handmatig had kunnen documenteren.',
      },
      {
        title: 'Wat je typt bij een fout',
        body: 'Gebruik deze vaste procedure:',
        code: 'Er is een fout opgetreden. Voer de self-annealing procedure uit:\n1. Lees de foutmelding volledig\n2. Fix het script\n3. Test het opnieuw\n4. Update de directive met wat je hebt geleerd\nLeg daarna uit wat er mis was en wat je hebt gewijzigd.',
      },
      {
        title: 'Drie situaties waarbij jij ingrijpt',
        body: '**1. Betaalde API calls voor debuggen.** Vraag eerst: hoeveel calls zijn er nodig? Geef toestemming voordat Claude doorgaat.\n\n**2. De aanpak is fundamenteel verkeerd.** Dan is het een gesprek, geen automatische fix. Stop Claude en bespreek de richting.\n\n**3. Het probleem zit in `.env`.** Verkeerde of ontbrekende API key is geen scriptfout. Dat los jij zelf op door het bestand te controleren.',
        type: 'tip',
      },
      {
        title: 'Oefening: breek je systeem bewust',
        body: 'Open `.env` en verander je API key tijdelijk naar een nep-waarde (Ctrl+S op Windows, Cmd+S op Mac). Typ dan in het Claude-paneel:',
        code: 'Voer de weer_rapport directive uit voor Amsterdam.',
      },
      {
        title: 'Herstel daarna',
        body: 'Zet je echte API key terug in `.env` en sla op (Ctrl+S op Windows, Cmd+S op Mac). Typ dan:',
        code: 'De fout was een ongeldige API key — die is nu gecorrigeerd.\nUpdate de directive met een notitie over dit type fout.',
      },
      {
        title: 'Leverbaar maken voor een klant',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak README.md aan voor een niet-technische klant. Schrijf in simpele taal.\n\nInhoud:\n- Wat doet dit systeem (2 zinnen)\n- Wat heb je nodig\n- Hoe .env instellen stap voor stap (verwijs naar .env.example)\n- Hoe gebruiken via het Claude-paneel in VS Code\n- Hoe automatisch inplannen:\n  Windows: via Taakplanner stap voor stap\n  Mac: via crontab zonder vim:\n  (crontab -l 2>/dev/null; echo "0 8 * * * cd /pad/naar/mijn-agent && claude -p \'voer het dagelijkse weerrapport uit\'") | crontab -\n  Leg uit dat ze /pad/naar/mijn-agent vervangen door het echte pad (te vinden via pwd)\n\nSla op in README.md',
      },
      {
        title: 'Jouw directives zijn jouw kennisbank',
        body: 'Na elke klant wordt je systeem slimmer. De directives bevatten alle lessen die het systeem heeft geleerd. Klant 2 profiteert van alles wat je bij klant 1 hebt geleerd — zonder extra werk. Dit is wat jou onderscheidt van iemand die elke keer opnieuw begint.\n\nDit is een leverbaar product. ZIP de map en installeer het bij de klant. In module 4 leer je hoe je dit verkoopt en wat je ervoor kunt vragen.',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik heb het systeem bewust laten falen en de self-annealing procedure gezien',
      'De directive bevat een notitie over de 401-fout na de oefening',
      '`README.md` is aangemaakt voor de klant',
      '`CLAUDE.md` is bijgewerkt met klantgegevens en opgeslagen (Ctrl+S / Cmd+S)',
    ],
  },

  '3-8': {
    intro: 'Je agent werkt. Maar een platte tekstmail voelt niet als een product — het voelt als een script. In deze les geef je het rapport een eigen gezicht: een gestylde HTML e-mail die er uitziet alsof hij door een professional is gemaakt.',
    sections: [
      {
        title: 'Waarom HTML e-mail?',
        body: 'Een HTML e-mail is gewoon een webpagina die in de inbox van de ontvanger wordt weergegeven. Je kunt kleuren, lettertypen, logo\'s en lay-out toevoegen — zonder dat de ontvanger iets hoeft te doen. Het werkt in Gmail, Outlook en Apple Mail.\n\nVoor jou als verkoper is het verschil groot: een gestylde mail rechtvaardigt een hogere prijs en ziet er meteen professioneel uit.',
      },
      {
        title: 'Stap 1: HTML e-mail template laten maken',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/html_email.md aan en bouw execution/send_html_email.py\n\nHet script stuurt een gestylde HTML e-mail met weerdata.\n\nDirective:\n- Input parameters: --to, --subject, --data (pad naar .tmp/weer_rapport.txt)\n- Leest het tekstbestand en verwerkt de data in een HTML template\n- Vereisten: GMAIL_USER en GMAIL_APP_PASSWORD in .env\n- Edge cases: bestand niet gevonden, SMTP fout, ontbrekende variabelen\n\nScript technisch:\n- load_dotenv() als allereerste actie\n- argparse voor --to, --subject, --data\n- Lees het .txt bestand en haal de weerwaarden eruit\n- Bouw een HTML e-mail met MIMEMultipart("alternative")\n- smtplib.SMTP_SSL op poort 465\n- HTML template met:\n  * Donker header blok met stadsnaam en temperatuur groot\n  * Witte kaart met luchtvochtigheid, windsnelheid, weerbeschrijving\n  * Subtiele footer met "Powered by jouw naam"\n  * Mobiel-vriendelijk (max-width: 600px, inline CSS)\n- Print bevestiging met tijdstip na succes',
      },
      {
        title: 'Stap 2: Test de HTML e-mail',
        body: 'Typ in het Claude-paneel (vervang het e-mailadres):',
        code: 'Voer dit in volgorde uit:\n1. Haal weerrapport op voor Amsterdam via weer_rapport directive\n2. Stuur de gestylde HTML e-mail naar [jouw e-mailadres] via html_email directive\n   met subject "Weerrapport Amsterdam"',
      },
      {
        title: 'Open de mail op je telefoon',
        body: 'Bekijk het resultaat ook op je telefoon — HTML e-mails zien er op mobiel soms anders uit dan op desktop. Ziet het er goed uit? Dan is dit iets wat je trots aan een klant kunt laten zien.',
        type: 'tip',
      },
      {
        title: 'Stap 3: Jouw eigen sausje',
        body: 'Dit is het moment om Claude gewoon te vragen wat jij wil. Je hoeft geen technische kennis te hebben — beschrijf wat je wilt zien en Claude past het aan.\n\nDenk aan dingen als: een andere kleur die past bij je klant, een persoonlijke begroeting met de naam van de ontvanger, je eigen naam in de footer, een andere volgorde van de gegevens, of een extra sectie met een dagelijkse tip. Vraag het gewoon in het Claude-paneel — hij weet waar de code staat en regelt de rest.',
      },
      {
        title: 'Dit is wat je verkoopt',
        body: 'Een klant die elke ochtend een mooie, gepersonaliseerde e-mail ontvangt met informatie die relevant is voor zijn bedrijf — dat is een product. In module 4 leer je hoe je dit gesprek voert en wat je ervoor vraagt.',
        type: 'tip',
      },
    ],
    checklist: [
      'De HTML e-mail is verstuurd en ziet er professioneel uit',
      'De mail werkt goed op zowel desktop als telefoon',
      'Ik heb de mail gepersonaliseerd met een eigen kleur of tekst',
    ],
  },

  '4-1': {
    intro: 'Voordat je iets bouwt, moet je begrijpen wat je bouwt en waarom. In deze les leer je wat SEO is in gewone taal, welk probleem jouw agent oplost voor een klant, en precies hoe de agent werkt.',
    sections: [
      {
        title: 'Wat is SEO — in gewone taal',
        body: 'SEO staat voor Search Engine Optimization. In het Nederlands: ervoor zorgen dat een website hoger verschijnt in Google als iemand iets zoekt.\n\nStel je voor: je hebt een loodgietersbedrijf in Utrecht. Als iemand googelt op "loodgieter Utrecht", wil je dat jouw website als eerste verschijnt — niet die van de concurrent. Dat is SEO.\n\nDrie dingen bepalen of een website hoog scoort in Google:\n\n**1. Zoekwoorden** — gebruikt de website de woorden die mensen echt intypen?\n\n**2. Content** — heeft de website genoeg tekst die nuttig is en die zoekwoorden bevat?\n\n**3. Techniek** — is de paginatitel goed, staat er een beschrijving in, laadt de pagina snel?\n\nBedrijven betalen SEO-bureaus honderden euro\'s per maand om dit bij te houden. Jij gaat een agent bouwen die dit automatisch doet in minuten.',
      },
      {
        title: 'Wat de SEO agent doet',
        body: '**Taak 1: Zoekwoorden ophalen**\nJij typt een onderwerp in. De agent vraagt DataForSEO — een database van miljarden zoekopdrachten — welke woorden mensen gebruiken rond dat onderwerp. Je krijgt een lijst terug van gerelateerde zoekwoorden, inclusief hoe vaak elk woord per maand wordt gezocht.\n\n**Taak 2: Pagina analyseren**\nDe agent bezoekt een URL (bijv. de website van een klant) en leest de pagina uit. Hij kijkt naar: de paginatitel, de beschrijving, de kopjes, en hoeveel tekst er op de pagina staat.\n\n**Taak 3: SEO rapport schrijven**\nDe agent combineert de zoekwoorden en de pagina-analyse en vraagt Claude om er een leesbaar rapport van te maken: wat gaat goed, wat kan beter, en welke zoekwoorden moet de klant toevoegen.',
      },
      {
        title: 'Geen SEO kennis nodig',
        body: 'Je hoeft geen SEO-expert te zijn om dit te verkopen. De agent doet het werk. Jij levert het rapport. De klant krijgt inzicht dat hij anders zelf had moeten uitzoeken of duur had moeten inkopen bij een bureau.',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik begrijp wat SEO is in gewone taal',
      'Ik weet welke drie taken de agent uitvoert',
      'Ik weet hoe ik dit product kan verkopen',
    ],
  },

  '4-2': {
    intro: 'Je gebruikt dezelfde werkwijze als in module 3 — dezelfde mappen, dezelfde aanpak. Als je module 3 hebt gedaan, ken je deze stappen al. We doorlopen ze snel en passen CLAUDE.md aan voor de SEO agent.',
    sections: [
      {
        title: 'Stap 1: VS Code openen in clavify-projecten',
        body: 'Open VS Code. Ga naar File → Open Folder. Navigeer naar je `clavify-projecten` map — dezelfde map waar ook jouw agent uit module 3 staat. Klik "Map selecteren" (Windows) of "Open" (Mac).\n\nJe ziet je bestaande projecten in de Explorer links.',
      },
      {
        title: 'Stap 2: Projectstructuur aanmaken',
        body: 'Open het Claude-paneel via het ✦ icoontje in de linker zijbalk of rechtsonder in de statusbalk. Geen bestand open? Open dan een bestand uit een eerder project zodat het icoontje actief wordt.\n\nTyp in het Claude-paneel:',
        code: 'Maak een nieuwe projectmap aan genaamd seo-agent\nin de huidige clavify-projecten map.\n\nMaak deze structuur aan:\nseo-agent/\n├── CLAUDE.md\n├── .env\n├── .env.example\n├── .gitignore\n├── directives/\n├── execution/\n├── rapporten/\n└── .tmp/\n\nVul .gitignore in met: .env, .tmp/, __pycache__/, *.pyc\nLaat de andere bestanden leeg.\nBevestig als alles klaar is.',
      },
      {
        title: 'Extra map: rapporten/',
        body: 'Dit project heeft een extra map die je agent uit module 3 niet had: `rapporten/`. Hier komen de SEO-rapporten die je aan klanten stuurt. Anders dan `.tmp/` zijn dit eindproducten die je bewaart.',
        type: 'tip',
      },
      {
        title: 'Stap 3: VS Code heropen in seo-agent',
        body: 'File → Open Folder → navigeer naar `clavify-projecten/seo-agent` → klik "Map selecteren" of "Open".\n\nJe ziet nu `seo-agent` als de root in de Explorer. Open daarna het Claude-paneel opnieuw — na het heropenen van VS Code moet je het paneel opnieuw activeren via het ✦ icoontje.',
      },
      {
        title: 'Stap 4: .env.example invullen',
        body: 'Klik op `.env.example` in de Explorer links. Voeg toe en sla op (Ctrl+S / Cmd+S):',
        code: '# Kopieer dit naar .env en vul de echte waarden in\n# .env.example mag je delen — .env nooit\n\n# DataForSEO (aanmaken via app.dataforseo.com/api-access)\nDATAFORSEO_LOGIN=jouw_dataforseo_email\nDATAFORSEO_PASSWORD=jouw_dataforseo_api_wachtwoord\n\n# Claude API (aanmaken via console.anthropic.com)\nANTHROPIC_API_KEY=jouw_claude_api_key\n\n# Gmail (optioneel — alleen nodig als je rapporten automatisch wilt mailen)\nGMAIL_USER=jouw@gmail.com\nGMAIL_APP_PASSWORD=jouw_app_wachtwoord_hier',
      },
      {
        title: 'Stap 5: CLAUDE.md schrijven',
        body: 'Klik op `CLAUDE.md` in de Explorer links. Typ in het Claude-paneel:',
        code: 'Schrijf de inhoud voor CLAUDE.md voor dit SEO project en sla het direct op.\nSchrijf in het Nederlands.\n\nInhoud:\n1. Uitleg 3-laagse architectuur (directives, orchestratie, execution)\n2. Werkprincipes: check execution/ eerst, zelfherstellend, directives updaten,\n   .env nooit committen\n3. Mappenstructuur als tekstdiagram (inclusief rapporten/ map)\n4. Over dit Project:\n   Dit systeem analyseert websites op SEO-kwaliteit. Het haalt gerelateerde\n   zoekwoorden op via DataForSEO, analyseert een webpagina, en schrijft\n   een leesbaar SEO-rapport via de Claude API.\n   Deliverable: een .txt rapport in rapporten/ klaar om te sturen naar de klant.\n5. API overzicht:\n   - DataForSEO Labs API: gerelateerde zoekwoorden ophalen\n   - Anthropic API: rapport schrijven (ANTHROPIC_API_KEY)\n   - requests + BeautifulSoup: pagina bezoeken en uitlezen (geen API key nodig)',
      },
      {
        title: 'Testen',
        body: 'Typ in het Claude-paneel om te controleren of Claude alles begrijpt:',
        code: 'Lees CLAUDE.md en leg me uit hoe dit SEO project werkt.\nNoem de 3 lagen, de API\'s, en de mappenstructuur.',
      },
    ],
    checklist: [
      '`seo-agent` structuur is aangemaakt inclusief `rapporten/` map',
      'VS Code is heropend in `seo-agent` en het Claude-paneel is opnieuw geopend',
      '`.env.example` is ingevuld en opgeslagen (Ctrl+S / Cmd+S)',
      'CLAUDE.md beschrijft het project correct inclusief de drie API\'s',
    ],
  },

  '4-3': {
    intro: 'De SEO agent gebruikt twee externe diensten: DataForSEO voor zoekwoorddata en de Claude API voor het schrijven van het rapport. In deze les maak je accounts aan, haal je de keys op, en controleer je of alles werkt.',
    sections: [
      {
        title: 'Stap 1: DataForSEO account aanmaken',
        body: 'Ga naar https://dataforseo.com/ → klik op "Sign Up" rechtsboven. Vul je naam, e-mailadres en wachtwoord in en bevestig je e-mail.\n\nNa inloggen: klik linksboven op je gebruikersnaam of ga naar app.dataforseo.com/api-access. Je ziet twee dingen:\n\n- **Login:** je e-mailadres\n- **Password:** een apart API-wachtwoord\n\nKopieer beide.',
      },
      {
        title: 'Twee verschillende wachtwoorden',
        body: 'DataForSEO geeft je een apart wachtwoord speciaal voor de API. Dit is NIET hetzelfde als het wachtwoord waarmee je inlogt op de website. Gebruik het API wachtwoord in `.env`.',
        type: 'warning',
      },
      {
        title: 'Gratis $1 tegoed',
        body: 'Na aanmelden krijg je automatisch $1 gratis tegoed. Dat is genoeg om de volledige module te doorlopen — elke API call kost minder dan $0.002.',
        type: 'tip',
      },
      {
        title: 'Stap 2: Claude API key ophalen',
        body: 'Ga naar https://console.anthropic.com/ → Log in met je Anthropic account (hetzelfde als claude.ai).\n\nKlik links op "API Keys" → "Create Key". Geef hem een naam zoals "clavify-seo-agent". Kopieer de sleutel direct — hij is maar één keer zichtbaar.',
      },
      {
        title: 'Stap 3: Keys invullen in .env',
        body: 'Klik op `.env` in de Explorer links. Voeg toe en sla op (Ctrl+S / Cmd+S):',
        code: 'DATAFORSEO_LOGIN=jouw_dataforseo_email\nDATAFORSEO_PASSWORD=jouw_api_wachtwoord_hier\nANTHROPIC_API_KEY=sk-ant-...jouw_key_hier',
      },
      {
        title: 'Stap 4: Packages installeren',
        body: 'Open de terminal in VS Code (Terminal → New Terminal in de menubalk). Installeer de packages één voor één:',
        code: 'pip install requests\npip install python-dotenv\npip install anthropic\npip install beautifulsoup4',
      },
      {
        title: 'beautifulsoup4 vs bs4',
        body: 'Je installeert het package met de naam `beautifulsoup4`, maar in je Python code schrijf je `from bs4 import BeautifulSoup`. Dat is de juiste manier — de package naam en de import naam zijn hier verschillend.',
        type: 'tip',
      },
      {
        title: 'Stap 5: Alles testen',
        body: 'Test eerst of alle packages werken:',
        code: 'python -c "import requests; from dotenv import load_dotenv; import anthropic; from bs4 import BeautifulSoup; print(\'Alle packages werken\')"',
      },
      {
        title: 'DataForSEO credentials testen',
        body: 'Test of je DataForSEO login klopt:',
        code: 'python -c "\nimport requests, os\nfrom dotenv import load_dotenv\nload_dotenv()\nr = requests.get(\n    \'https://api.dataforseo.com/v3/appendix/user_data\',\n    auth=(os.getenv(\'DATAFORSEO_LOGIN\'), os.getenv(\'DATAFORSEO_PASSWORD\'))\n)\nprint(\'Status:\', r.status_code)\nif r.status_code == 200:\n    print(\'DataForSEO credentials werken\')\nelse:\n    print(\'Fout — controleer je login en wachtwoord in .env\')\n"',
      },
    ],
    checklist: [
      'DataForSEO account aangemaakt en API login + wachtwoord gekopieerd',
      'Claude API key aangemaakt en opgeslagen',
      'Beide keys in `.env` en opgeslagen (Ctrl+S / Cmd+S)',
      'Alle packages geïnstalleerd — testcommando geeft "Alle packages werken"',
      'DataForSEO test geeft "Status: 200"',
    ],
  },

  '4-4': {
    intro: 'De eerste taak van de SEO agent: zoekwoorden ophalen. Jij geeft een onderwerp op, de agent vraagt DataForSEO om gerelateerde zoekwoorden, en slaat ze op als lijst met zoekvolumes. Dit is de grondstof voor het rapport.',
    sections: [
      {
        title: 'Wat zijn zoekwoorden en zoekvolumes?',
        body: 'Als iemand "loodgieter Utrecht" intypt in Google, is dat een zoekwoord. Maar er zijn ook mensen die zoeken op "loodgieter spoed Utrecht", "loodgieter goedkoop Utrecht" of "lekkage loodgieter Utrecht". Al die varianten zijn ook zoekwoorden.\n\nDataForSEO geeft je die lijst automatisch — inclusief het zoekvolume: hoe vaak elk woord per maand wordt gezocht. Een zoekwoord met hoog volume is waardevol voor een klant.',
      },
      {
        title: 'Stap 1: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/zoekwoorden_ophalen.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Een zoekterm ontvangt als input\n- Via de DataForSEO Labs API gerelateerde zoekwoorden ophaalt\n- Endpoint (POST): https://api.dataforseo.com/v3/dataforseo_labs/google/related_keywords/live\n- Request body: [{"keyword": "ZOEKTERM", "location_code": 2528, "language_code": "nl", "limit": 20}]\n  (location_code 2528 = Nederland)\n- Authenticatie via: auth=(DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD)\n- Per zoekwoord opslaat: het zoekwoord en het maandelijkse zoekvolume\n  (pad: tasks[0].result[0].items[n].keyword_data.keyword_info.search_volume)\n- Sorteert op zoekvolume van hoog naar laag\n- Resultaat opslaat in .tmp/zoekwoorden.txt\n\nInclusief edge cases: geen resultaten, API fout, ongeldige credentials (HTTP 401),\nleeg zoekvolume (None → toon als 0)',
      },
      {
        title: 'Stap 2: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/zoekwoorden_ophalen.md en bouw execution/zoekwoorden_ophalen.py\n\nTechnisch:\n- argparse voor --zoekterm en --output\n- load_dotenv() als allereerste actie\n- POST request naar het endpoint uit de directive\n- Haal uit tasks[0].result[0].items elk item op:\n  keyword uit item["keyword_data"]["keyword"]\n  search_volume uit item["keyword_data"]["keyword_info"]["search_volume"]\n  als search_volume None is: gebruik 0\n- Sorteer op search_volume van hoog naar laag\n- Schrijf naar outputbestand:\n  "Zoekwoorden voor: [zoekterm]"\n  "Opgehaald op: [datum]"\n  dan per zoekwoord: "zoekwoord     [volume] zoekacties/maand"\n- Volg alle edge cases\n- Commentaar bij elke sectie',
      },
      {
        title: 'Stap 3: De agent draaien',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/zoekwoorden_ophalen.md en voer de taak uit.\nZoekterm: "loodgieter Utrecht"\nSla op in .tmp/zoekwoorden.txt',
      },
      {
        title: 'Als de zoekwoorden niet verschijnen',
        body: 'DataForSEO heeft een geneste response structuur. Als het script wel draait maar het outputbestand leeg of fout is, typ dan in het Claude-paneel:\n\n"Controleer dat het script de keyword en search_volume correct uithaalt uit de DataForSEO response — het pad is tasks[0].result[0].items[n].keyword_data.keyword en .keyword_info.search_volume"',
        type: 'tip',
      },
      {
        title: 'Zoekvolumes zijn schattingen',
        body: 'DataForSEO geeft gemiddelde maandelijkse zoekvolumes op basis van historische data. Dit zijn schattingen, geen exacte cijfers. Leg dit ook zo uit aan klanten — maar de richting klopt altijd.',
        type: 'warning',
      },
    ],
    checklist: [
      '`directives/zoekwoorden_ophalen.md` is aangemaakt',
      '`execution/zoekwoorden_ophalen.py` heeft `load_dotenv()` als eerste regel',
      '`.tmp/zoekwoorden.txt` bevat een lijst zoekwoorden met volumes',
      'De lijst is gesorteerd van hoog naar laag zoekvolume',
    ],
  },

  '4-5': {
    intro: 'De agent leert nu een nieuwe vaardigheid: een website bezoeken en uitlezen. Hij gaat naar een URL, leest de pagina, en rapporteert wat hij vindt over de SEO-kwaliteit.',
    sections: [
      {
        title: 'Wat analyseert de agent?',
        body: '**Paginatitel (title tag):** de tekst die je ziet als tabblad in je browser en als blauwe link in Google. Het belangrijkste SEO-element van een pagina.\n\n**Meta beschrijving:** de grijze tekst onder de blauwe link in Google. Bepaalt of mensen klikken.\n\n**H1 kop:** de hoofdtitel op de pagina zelf. Moet het belangrijkste zoekwoord bevatten.\n\n**H2 koppen:** tussenkopjes op de pagina. Geven structuur en helpen Google begrijpen waar de pagina over gaat.\n\n**Woordcount:** hoeveel tekst staat er op de pagina? Google waardeert pagina\'s met minstens 300 woorden.',
      },
      {
        title: 'Stap 1: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/pagina_analyseren.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Een URL ontvangt als input\n- De pagina bezoekt via requests met een User-Agent header\n- Met BeautifulSoup uithaalt:\n  * Paginatitel (title tag)\n  * Meta beschrijving (content van <meta name="description">)\n  * Eerste H1 tag\n  * Alle H2 tags (maximaal 5)\n  * Totaal aantal woorden in de body tekst\n  * De eerste 300 woorden als tekst-preview\n- Resultaat opslaat in .tmp/pagina_analyse.txt\n- Voor ontbrekende elementen schrijft: "Niet gevonden"\n\nEdge cases: URL niet bereikbaar, 403 geblokkeerd, geen title tag,\nredirect, time-out na 10 seconden',
      },
      {
        title: 'Stap 2: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/pagina_analyseren.md en bouw execution/pagina_analyseren.py\n\nTechnisch:\n- argparse voor --url en --output\n- load_dotenv() als allereerste actie\n- requests.get() met:\n  headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}\n  timeout = 10\n- BeautifulSoup(response.text, "html.parser")\n- title via soup.find("title")\n- meta description via soup.find("meta", attrs={"name": "description"}) → .get("content")\n- H1 via soup.find("h1")\n- H2 via soup.find_all("h2", limit=5)\n- Body tekst via soup.get_text(), verwijder extra witruimte, tel woorden\n- Alles netjes geformatteerd naar outputbestand\n- Volg alle edge cases',
      },
      {
        title: 'Wat is een User-Agent?',
        body: 'Een User-Agent is een stukje tekst dat je browser meestuurt aan websites om te vertellen wat voor browser je gebruikt. Sommige websites blokkeren verzoeken zonder User-Agent. Door er één mee te sturen doet je script zich voor als een gewone bezoeker.',
        type: 'tip',
      },
      {
        title: 'Stap 3: Testen met example.com',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/pagina_analyseren.md en voer de taak uit.\nURL: https://www.example.com\nSla op in .tmp/pagina_analyse.txt',
      },
      {
        title: 'Stap 4: Testen met een echte URL',
        body: 'Typ in het Claude-paneel met een echte URL — de website van een lokaal bedrijf of jouw eigen website:',
        code: 'Lees directives/pagina_analyseren.md en voer de taak uit.\nURL: [een echte website URL]\nSla op in .tmp/pagina_analyse.txt',
      },
    ],
    checklist: [
      '`directives/pagina_analyseren.md` is aangemaakt',
      '`execution/pagina_analyseren.py` is gebouwd',
      'Test met example.com geeft een correct analysebestand',
      'Test met een echte URL werkt ook en toont meer tekst',
    ],
  },

  '4-6': {
    intro: 'Je hebt twee bestanden: zoekwoorden en een pagina-analyse. Nu komt de krachtigste stap: je roept Claude aan vanuit Python om die data te lezen en er een professioneel SEO rapport van te maken. Volledig automatisch.',
    sections: [
      {
        title: 'Hoe werkt Claude aanroepen vanuit Python?',
        body: 'In module 3 typte je opdrachten in het Claude-paneel in VS Code. Nu doet je Python script dat zelf. Het script stuurt een bericht naar Claude via de Anthropic API en Claude stuurt een rapport terug. Dat rapport sla je op als bestand.\n\nHet voordeel: dit is volledig automatisch. Het script draait, leest de data, vraagt Claude om een rapport, en slaat het op — zonder dat jij iets doet.',
      },
      {
        title: 'Stap 1: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/rapport_schrijven.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- .tmp/zoekwoorden.txt en .tmp/pagina_analyse.txt inleest\n- Controleert of beide bestanden bestaan\n- Via Anthropic API (claude-sonnet-4-6, max_tokens: 2000) een SEO rapport schrijft\n- System prompt: "Je bent een SEO specialist die rapporten schrijft voor\n  Nederlandse MKB-eigenaren. Schrijf altijd in duidelijk Nederlands zonder\n  technisch jargon. Wees concreet en geef altijd uitvoerbare aanbevelingen."\n- Rapport bevat:\n  * Samenvatting (wat gaat goed, wat kan beter — 3-5 zinnen)\n  * Zoekwoorden analyse (welke gevonden zoekwoorden passen, welke ontbreken)\n  * Pagina bevindingen (beoordeling van titel, meta, H1, woordcount)\n  * Top 3 aanbevelingen (concrete acties)\n- Slaat op in rapporten/ als: seo_rapport_YYYY-MM-DD.txt\n\nEdge cases: inputbestanden niet gevonden (print welke les eerst uitgevoerd moet\nworden), API fout, lege inputbestanden',
      },
      {
        title: 'Stap 2: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/rapport_schrijven.md en bouw execution/rapport_schrijven.py\n\nTechnisch:\n- load_dotenv() als allereerste actie\n- Controleer of .tmp/zoekwoorden.txt en .tmp/pagina_analyse.txt bestaan\n  als een van beide ontbreekt: print welk bestand mist en welke les\n  de student eerst moet uitvoeren, daarna sys.exit(1)\n- Lees beide bestanden in als string\n- client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))\n- Model: claude-sonnet-4-6, max_tokens: 2000\n- Combineer beide inputbestanden in de user message\n- Haal response op via response.content[0].text\n- Maak rapporten/ aan als die niet bestaat\n- Sla op als rapporten/seo_rapport_YYYY-MM-DD.txt\n- Print bevestiging met bestandspad\n- Volg alle edge cases',
      },
      {
        title: 'Stap 3: De agent draaien',
        body: 'Zorg dat `.tmp/zoekwoorden.txt` en `.tmp/pagina_analyse.txt` allebei bestaan (aangemaakt in les 4-4 en 4-5). Typ dan in het Claude-paneel:',
        code: 'Lees directives/rapport_schrijven.md en voer de taak uit.',
      },
      {
        title: 'Elk rapport is uniek',
        body: 'Claude genereert het rapport op basis van de data die binnenkomt. Elke keer dat je de agent draait met andere zoekwoorden of een andere URL, krijg je een ander rapport. Dit is precies waarom het schaalbaar is als dienst.',
        type: 'tip',
      },
    ],
    checklist: [
      '`directives/rapport_schrijven.md` is aangemaakt',
      '`execution/rapport_schrijven.py` controleert of inputbestanden bestaan',
      'Een rapport staat in `rapporten/` met de juiste datum in de naam',
      'Het rapport bevat samenvatting, zoekwoordenanalyse, bevindingen en aanbevelingen',
    ],
  },

  '4-7': {
    intro: 'Je hebt drie werkende agents. Nu koppel je ze zodat jij één opdracht geeft en het systeem alles automatisch uitvoert. Daarna maak je het leverbaar voor een klant.',
    sections: [
      {
        title: 'Stap 1: Alles in één opdracht uitvoeren',
        body: 'Typ in het Claude-paneel:',
        code: 'Voer de volledige SEO analyse uit in deze volgorde:\n\n1. Haal zoekwoorden op voor "loodgieter Utrecht"\n   via directives/zoekwoorden_ophalen.md\n   Sla op in .tmp/zoekwoorden.txt\n\n2. Analyseer de pagina https://www.example.com\n   via directives/pagina_analyseren.md\n   Sla op in .tmp/pagina_analyse.txt\n\n3. Schrijf het SEO rapport\n   via directives/rapport_schrijven.md\n\nMeld na elke stap kort wat je hebt gedaan.',
      },
      {
        title: 'Stap 2: Overkoepelende directive aanmaken',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/volledige_seo_analyse.md aan in het Nederlands.\n\nDit is de overkoepelende directive voor de complete SEO analyse.\n\nInhoud:\n- Doel: volledige SEO analyse uitvoeren voor een website\n- Input: zoekterm en URL van de te analyseren pagina\n- Stappen in volgorde:\n  1. Voer directives/zoekwoorden_ophalen.md uit\n  2. Voer directives/pagina_analyseren.md uit\n  3. Voer directives/rapport_schrijven.md uit\n- Output: SEO rapport in rapporten/ klaar om te sturen\n- Bij fout in een stap: voer self-annealing uit',
      },
      {
        title: 'Voortaan gebruik je dit',
        body: 'Na het aanmaken van de overkoepelende directive hoef je nog maar één ding te typen voor een complete analyse:',
        code: 'Lees directives/volledige_seo_analyse.md en voer de analyse uit voor:\nZoekterm: [zoekwoord]\nURL: [website URL]',
      },
      {
        title: 'Stap 3: README aanmaken voor de klant',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak README.md aan voor een niet-technische klant. Schrijf in simpele taal.\n\nInhoud:\n- Wat doet dit systeem (2 zinnen)\n- Wat heb je nodig (Python, packages, twee API keys)\n- Hoe .env instellen stap voor stap (verwijs naar .env.example)\n- Hoe een analyse uitvoeren:\n  open VS Code → open seo-agent map → open Claude-paneel →\n  typ de opdracht met zoekterm en URL → wacht op bevestiging →\n  open het rapport in de rapporten/ map\n\nSla op in README.md',
      },
      {
        title: 'Stap 4: CLAUDE.md aanpassen voor de klant',
        body: 'Open `CLAUDE.md` en voeg onderaan toe (Ctrl+S / Cmd+S):',
        code: '## Over dit Project\n\nDit systeem voert automatisch SEO analyses uit voor [Naam Klant].\n\nWebsite: https://www.klant-website.nl\nZoekterm: [hoofdzoekwoord van de klant]\nDeliverable: SEO rapport in rapporten/ na elke analyse',
      },
      {
        title: 'Jouw rapporten worden steeds beter',
        body: 'Elke keer dat je self-annealing gebruikt om een fout te herstellen, worden je directives slimmer. Na vijf klanten weet je systeem precies welke websites problemen geven, hoe het daarmee omgaat, en wat de beste manier is om data te verwerken. Die kennis zit in de directives — dat is jouw concurrentievoordeel.',
        type: 'tip',
      },
    ],
    checklist: [
      'De drie agents werken samen via één opdracht in het Claude-paneel',
      '`directives/volledige_seo_analyse.md` is aangemaakt',
      '`README.md` is aangemaakt voor de klant',
      '`CLAUDE.md` is bijgewerkt met klantgegevens (Ctrl+S / Cmd+S)',
    ],
  },

  '5-1': {
    intro: 'In module 4 bouwde je een agent die analyseert en rapporteert. Nu gaat de agent een stap verder: hij schrijft ook de tekst en publiceert die direct op de website van de klant. Geen kopiëren, geen handmatig inloggen — de content staat live.',
    sections: [
      {
        title: 'Het probleem dat je oplost',
        body: 'Bedrijven weten vaak wel dat ze betere teksten nodig hebben op hun website. Maar ze hebben geen tijd om ze te schrijven. Een SEO-bureau vraagt €200-€500 per blogartikel. En dan moet de tekst ook nog worden geüpload.\n\nJouw agent doet dit in minuten:\n1. Zoekwoorden ophalen (module 4)\n2. Analyseren wat er al op de website staat (module 4)\n3. Een nieuwe, SEO-geoptimaliseerde tekst schrijven\n4. Die tekst direct publiceren op de website',
      },
      {
        title: 'Wat je gaat bouwen',
        body: '**De content schrijver:** een agent die op basis van zoekwoorden en een onderwerp een volledig blogartikel schrijft. Met de juiste titel, tussenkopjes, en zoekwoorden verwerkt in de tekst.\n\n**De WordPress publisher:** een agent die de geschreven content direct aanmaakt als blogpost op een WordPress website via de WordPress REST API.\n\n**De Shopify publisher:** een agent die de geschreven content aanmaakt als blogartikel op een Shopify webshop via de Shopify Admin API.\n\nJe kiest welk platform je voor de klant gebruikt. De content schrijver is hetzelfde voor beide — alleen de publisher verschilt.',
      },
    ],
    checklist: [
      'Ik begrijp wat de content agent doet',
      'Ik weet welke twee platforms ondersteund worden',
      'Ik weet hoe ik dit product kan verkopen',
    ],
  },

  '5-2': {
    intro: 'Je gebruikt dezelfde aanpak als in module 3 en 4. Snel doorlopen — je kent de stappen al.',
    sections: [
      {
        title: 'Stap 1: Projectstructuur aanmaken',
        body: 'Open VS Code. Ga naar File → Open Folder → navigeer naar je `clavify-projecten` map.\n\nOpen het Claude-paneel. Zorg dat een bestand open staat (open anders een bestand uit een eerder project). Typ in het Claude-paneel:',
        code: 'Maak een nieuwe projectmap aan genaamd content-agent\nin de huidige clavify-projecten map.\n\nStructuur:\ncontent-agent/\n├── CLAUDE.md\n├── .env\n├── .env.example\n├── .gitignore\n├── directives/\n├── execution/\n├── content/\n└── .tmp/\n\nVul .gitignore in met: .env, .tmp/, __pycache__/, *.pyc\nLaat de andere bestanden leeg.\nBevestig als alles klaar is.',
      },
      {
        title: 'Extra map: content/',
        body: 'Hier slaat de agent alle geschreven teksten op voordat ze gepubliceerd worden. Zo heb je altijd een lokale kopie — ook als de publicatie mislukt.',
        type: 'tip',
      },
      {
        title: 'Stap 2: VS Code heropen in content-agent',
        body: 'File → Open Folder → `clavify-projecten/content-agent` → "Map selecteren" of "Open".\n\nOpen het Claude-paneel opnieuw na het heropenen.',
      },
      {
        title: 'Stap 3: .env.example invullen',
        body: 'Klik op `.env.example` in de Explorer links. Voeg toe en sla op (Ctrl+S / Cmd+S):',
        code: '# Kopieer dit naar .env en vul de echte waarden in\n# .env.example mag je delen — .env nooit\n# Vul alleen in wat relevant is voor jouw klant (WordPress OF Shopify)\n\n# Claude API (aanmaken via console.anthropic.com)\nANTHROPIC_API_KEY=jouw_claude_api_key\n\n# WordPress (alleen invullen als de klant WordPress heeft)\nWP_URL=https://www.klant-website.nl\nWP_USERNAME=wordpress_gebruikersnaam\nWP_APP_PASSWORD=xxxx_xxxx_xxxx_xxxx\n\n# Shopify (alleen invullen als de klant Shopify heeft)\nSHOPIFY_STORE=jouw-store.myshopify.com\nSHOPIFY_ACCESS_TOKEN=shpat_xxxx\nSHOPIFY_BLOG_ID=123456789',
      },
      {
        title: 'Stap 4: CLAUDE.md schrijven',
        body: 'Klik op `CLAUDE.md` in de Explorer links. Typ in het Claude-paneel:',
        code: 'Schrijf de inhoud voor CLAUDE.md voor dit content project en sla het direct op.\nSchrijf in het Nederlands.\n\nInhoud:\n1. Uitleg 3-laagse architectuur (directives, orchestratie, execution)\n2. Werkprincipes: check execution/ eerst, zelfherstellend, directives updaten,\n   .env nooit committen\n3. Mappenstructuur als tekstdiagram inclusief content/ map\n4. Over dit Project:\n   Dit systeem schrijft SEO-geoptimaliseerde blogartikelen en publiceert ze\n   direct op WordPress of Shopify via hun API.\n   Deliverable: gepubliceerde blogpost op de website van de klant.\n5. API overzicht:\n   - Anthropic API: content schrijven (ANTHROPIC_API_KEY)\n   - WordPress REST API: publiceren op WordPress\n   - Shopify Admin API: publiceren op Shopify\n6. Platform keuze:\n   Gebruik WordPress scripts als de klant WordPress heeft.\n   Gebruik Shopify scripts als de klant Shopify heeft.',
      },
    ],
    checklist: [
      '`content-agent` structuur aangemaakt inclusief `content/` map',
      'VS Code heropend in `content-agent` en Claude-paneel opnieuw geopend',
      '`.env.example` ingevuld met alle variabelen voor beide platforms',
      'CLAUDE.md beschrijft beide platforms correct',
    ],
  },

  '5-3': {
    intro: 'Dit is de kern van de module. De agent krijgt een onderwerp en een lijst zoekwoorden, en schrijft daar een volledig SEO-geoptimaliseerd blogartikel van. De tekst is direct klaar om te publiceren.',
    sections: [
      {
        title: 'Wat maakt een tekst SEO-geoptimaliseerd?',
        body: '**Titel (H1):** bevat het hoofdzoekwoord en wekt interesse. Maximaal 60 tekens zodat hij niet wordt afgekapt in Google.\n\n**Meta beschrijving:** een korte samenvatting van 150-160 tekens. Bevat het zoekwoord en geeft mensen een reden om te klikken.\n\n**Introductie:** de eerste alinea bevat het hoofdzoekwoord en legt uit wat de lezer gaat leren.\n\n**Tussenkopjes (H2, H3):** geven structuur en bevatten gerelateerde zoekwoorden.\n\n**Woordcount:** minimaal 600 woorden voor een blogartikel. Meer is beter — Google waardeert diepgang.',
      },
      {
        title: 'Stap 1: Packages installeren',
        body: 'Open de terminal (Terminal → New Terminal in de menubalk). Installeer packages:',
        code: 'pip install anthropic\npip install python-dotenv\npip install requests',
      },
      {
        title: 'Stap 2: Claude API key invullen',
        body: 'Als je al een Claude API key hebt van module 4, kopieer die dan naar `.env` hier.\n\nKlik op `.env` in de Explorer links. Voeg toe en sla op (Ctrl+S / Cmd+S):',
        code: 'ANTHROPIC_API_KEY=sk-ant-...jouw_key_hier',
      },
      {
        title: 'Stap 3: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/content_schrijven.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Een onderwerp en een lijst zoekwoorden ontvangt\n- Via Anthropic API (claude-sonnet-4-6, max_tokens: 4000) een blogartikel schrijft\n- Artikel bevat:\n  * SEO-titel (max 60 tekens, bevat hoofdzoekwoord)\n  * Meta beschrijving (max 160 tekens)\n  * Introductie van minimaal 100 woorden\n  * Minimaal 4 H2-tussenkopjes met gerelateerde zoekwoorden\n  * Conclusie met call-to-action\n  * Minimaal 600 woorden totaal\n- Output slaat op in content/ als: artikel_YYYY-MM-DD_[onderwerp].txt\n  (spaties vervangen door koppeltekens)\n- Output heeft duidelijke secties: TITEL:, META BESCHRIJVING:, ARTIKEL:\n- System prompt: je bent een Nederlandse SEO-copywriter voor MKB-bedrijven,\n  toegankelijke vriendelijke toon, verwerk zoekwoorden natuurlijk\n\nInclusief edge cases en self-annealing',
      },
      {
        title: 'Stap 4: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/content_schrijven.md en bouw execution/content_schrijven.py\n\nTechnisch:\n- argparse voor --onderwerp en --zoekwoorden\n- load_dotenv() als allereerste actie\n- Anthropic client met os.getenv("ANTHROPIC_API_KEY")\n- Model: claude-sonnet-4-6, max_tokens: 4000\n- User message: "Schrijf een blogartikel over: [onderwerp].\n  Verwerk deze zoekwoorden natuurlijk in de tekst: [zoekwoorden].\n  Begin direct met de output in dit formaat:\n  TITEL: [de titel]\n  META BESCHRIJVING: [de meta beschrijving]\n  ARTIKEL:\n  [het volledige artikel]"\n- Maak content/ aan als die niet bestaat\n- Sla op als content/artikel_YYYY-MM-DD_[onderwerp-met-koppeltekens].txt\n- Print bevestiging met bestandspad',
      },
      {
        title: 'Stap 5: De agent draaien',
        body: 'Zorg dat je API key in `.env` staat. Typ in het Claude-paneel:',
        code: 'Lees directives/content_schrijven.md en voer de taak uit.\nOnderwerp: loodgieter Utrecht\nZoekwoorden: loodgieter Utrecht, loodgieter spoed Utrecht, lekkage loodgieter Utrecht',
      },
      {
        title: 'Pas de tone of voice aan per klant',
        body: 'Wil een klant een formelere toon? Pas de system prompt in de directive aan: voeg toe "Schrijf in een formele, zakelijke toon". Wil een andere branche? Pas het onderwerp en de zoekwoorden aan. De agent is direct inzetbaar voor elke sector.',
        type: 'tip',
      },
    ],
    checklist: [
      '`anthropic`, `python-dotenv` en `requests` zijn geïnstalleerd',
      'Claude API key staat in `.env`',
      '`directives/content_schrijven.md` is aangemaakt',
      '`execution/content_schrijven.py` is gebouwd',
      'Een artikel staat in `content/` met TITEL, META BESCHRIJVING en ARTIKEL secties',
    ],
  },

  '5-4': {
    intro: 'WordPress heeft een ingebouwde REST API waarmee je van buitenaf blogposts kunt aanmaken, aanpassen en publiceren. Je hebt geen extra plugin nodig — het werkt standaard op elke moderne WordPress installatie.',
    sections: [
      {
        title: 'Vereisten',
        body: 'De klant moet een WordPress website hebben met:\n- WordPress versie 5.6 of nieuwer (dat is bijna altijd het geval)\n- Toegang tot het WordPress dashboard\n- Een WordPress gebruiker met minimaal **Auteur** rechten\n\nHeb je een Shopify klant? Sla dan deze les over en ga direct naar les 5-6.',
        type: 'warning',
      },
      {
        title: 'Stap 1: Application Password aanmaken in WordPress',
        body: 'Log in op het WordPress dashboard van de klant:\n\n1. Klik rechtsboven op de gebruikersnaam → "Profiel"\n2. Scroll helemaal naar beneden naar "Applicatiewachtwoorden"\n3. Vul bij "Naam nieuw applicatiewachtwoord" in: `clavify-agent`\n4. Klik op "Nieuw applicatiewachtwoord toevoegen"\n5. WordPress toont een wachtwoord van 24 tekens met spaties\n6. Kopieer het direct — je ziet het maar één keer',
      },
      {
        title: 'Applicatiewachtwoorden niet zichtbaar?',
        body: 'Sommige beveiligingsplugins schakelen Application Passwords uit. Zoek in de instellingen van de actieve beveiligingsplugin naar "Application Passwords" of "REST API" en schakel het tijdelijk in voor de installatie.',
        type: 'tip',
      },
      {
        title: 'Stap 2: WordPress gegevens invullen in .env',
        body: 'Klik op `.env` in de Explorer links. Voeg toe en sla op (Ctrl+S / Cmd+S):',
        code: 'WP_URL=https://www.klant-website.nl\nWP_USERNAME=gebruikersnaam_van_de_klant\nWP_APP_PASSWORD=AbCd EfGh IjKl MnOp QrSt UvWx',
      },
      {
        title: 'Spaties in het wachtwoord',
        body: 'Het WordPress Application Password bevat spaties. Dat is correct zo — laat ze staan in `.env`. Het Python script verwerkt ze goed.',
        type: 'tip',
      },
      {
        title: 'Stap 3: Verbinding testen',
        body: 'Typ dit in de terminal (Windows gebruikers: gebruik PowerShell):',
        code: 'python -c "\nimport requests, os, base64\nfrom dotenv import load_dotenv\nload_dotenv()\nurl = os.getenv(\'WP_URL\')\nuser = os.getenv(\'WP_USERNAME\')\npwd = os.getenv(\'WP_APP_PASSWORD\')\ncredentials = base64.b64encode(f\'{user}:{pwd}\'.encode()).decode()\nheaders = {\'Authorization\': f\'Basic {credentials}\'}\nr = requests.get(f\'{url}/wp-json/wp/v2/users/me\', headers=headers)\nprint(\'Status:\', r.status_code)\nif r.status_code == 200:\n    print(\'Verbonden als:\', r.json().get(\'name\', \'onbekend\'))\nelse:\n    print(\'Fout — controleer WP_URL, WP_USERNAME en WP_APP_PASSWORD in .env\')\n"',
      },
    ],
    checklist: [
      'WordPress Application Password aangemaakt en gekopieerd',
      'WP_URL, WP_USERNAME en WP_APP_PASSWORD in `.env` en opgeslagen (Ctrl+S / Cmd+S)',
      'Verbindingstest geeft "Status: 200"',
    ],
  },

  '5-5': {
    intro: 'De verbinding werkt. Nu bouw je het script dat de geschreven content automatisch aanmaakt als blogpost op WordPress.',
    sections: [
      {
        title: 'Hoe werkt publiceren via de API?',
        body: 'Je stuurt een POST request naar `jouw-website.nl/wp-json/wp/v2/posts` met daarin de titel, de inhoud (HTML) en de status: `publish` (direct live) of `draft` (concept).\n\nWordPress maakt de post aan en geeft je de URL terug. Dat is alles.',
      },
      {
        title: 'Stap 1: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/publiceren_wordpress.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Het meest recente bestand in content/ leest (of een specifiek bestand)\n- TITEL, META BESCHRIJVING en ARTIKEL secties uithaalt\n- Artikeltekst omzet naar HTML:\n  * ## Koppen → <h2>\n  * ### Koppen → <h3>\n  * Lege regels scheiden alinea\'s → <p>\n- Blogpost aanmaakt op WordPress via REST API:\n  * Endpoint: WP_URL/wp-json/wp/v2/posts\n  * Auth: Basic Auth met base64(WP_USERNAME:WP_APP_PASSWORD)\n  * Status: "draft" (standaard) zodat klant eerst naleest\n  * Optionele --direct-live vlag voor "publish"\n- Na succes de URL van de draft post print\n\nEdge cases: contentbestand niet gevonden, WordPress geeft fout,\nauthenticatie mislukt',
      },
      {
        title: 'Stap 2: Script bouwen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/publiceren_wordpress.md en bouw execution/publiceren_wordpress.py\n\nTechnisch:\n- argparse voor --bestand (optioneel) en --direct-live (store_true)\n- load_dotenv() als allereerste actie\n- Als geen --bestand: meest recente bestand in content/ via os.listdir() en max() met getmtime()\n- Lees bestand en split op "TITEL:\\n", "META BESCHRIJVING:\\n", "ARTIKEL:\\n"\n- Converteer markdown naar HTML\n- Authorization: base64(gebruikersnaam:wachtwoord)\n- POST naar WP_URL/wp-json/wp/v2/posts\n- Status: "publish" als --direct-live, anders "draft"\n- Print: "Post aangemaakt: [URL]"',
      },
      {
        title: 'Stap 3: De agent draaien',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/publiceren_wordpress.md en voer de taak uit.\nGebruik het meest recente artikel in de content/ map.\nMaak het aan als concept (draft) zodat de klant het eerst kan nalezen.',
      },
      {
        title: 'Altijd eerst als concept',
        body: 'We publiceren standaard als concept en niet direct live. Dit geeft de klant de kans om de tekst na te lezen en eventueel aan te passen. Als de klant vertrouwen heeft gekregen in de kwaliteit, kun je `--direct-live` gebruiken.',
        type: 'tip',
      },
    ],
    checklist: [
      '`directives/publiceren_wordpress.md` is aangemaakt',
      '`execution/publiceren_wordpress.py` is gebouwd',
      'De agent maakt een draft post aan op WordPress',
      'De URL van de post verschijnt in het Claude-paneel na uitvoering',
    ],
  },

  '5-6': {
    intro: 'Heeft de klant Shopify in plaats van WordPress? Dan gebruik je deze les. De content schrijver uit les 5-3 is hetzelfde — alleen de publisher verschilt.',
    sections: [
      {
        title: 'Stap 1: Shopify Access Token aanmaken',
        body: 'Log in op het Shopify dashboard van de klant:\n\n1. Ga naar **Instellingen** (tandwiel icoon linksonder)\n2. Klik op **"Apps en verkoopkanalen"**\n3. Klik op **"Apps ontwikkelen"** rechtsbovenin\n4. Klik **"Een app maken"** → geef hem een naam zoals "Clavify Agent"\n5. Klik op **"Configuratie"** (bovenaan de app pagina)\n6. Scroll naar **"Beheerdersrechten voor API-toegang"** → klik op "Bewerken"\n7. Zoek **"Store content"** en zet `write_content` en `read_content` aan\n8. Klik **"Opslaan"** → ga terug naar het overzicht → klik **"App installeren"**\n9. Na installatie: klik **"Token weergeven"** → kopieer direct (begint met `shpat_`) — maar één keer zichtbaar',
      },
      {
        title: 'Eerste keer: aangepaste apps inschakelen',
        body: 'Als je "Apps ontwikkelen" niet ziet: klik op **"Aangepaste app-ontwikkeling toestaan"** en bevestig. Daarna verschijnt de knop.',
        type: 'tip',
      },
      {
        title: 'Stap 2: Blog ID ophalen',
        body: 'Shopify organiseert blogposts in "blogs". Haal de lijst op via de terminal:',
        code: 'python -c "\nimport requests, os\nfrom dotenv import load_dotenv\nload_dotenv()\nstore = os.getenv(\'SHOPIFY_STORE\')\ntoken = os.getenv(\'SHOPIFY_ACCESS_TOKEN\')\nr = requests.get(\n    f\'https://{store}/admin/api/2026-01/blogs.json\',\n    headers={\'X-Shopify-Access-Token\': token}\n)\nprint(\'Status:\', r.status_code)\nif r.status_code == 200:\n    for blog in r.json()[\'blogs\']:\n        print(f\'Blog ID: {blog[\"id\"]} — Naam: {blog[\"title\"]}\')\n"',
      },
      {
        title: 'Stap 3: Gegevens invullen in .env',
        body: 'Voeg toe aan `.env` en sla op (Ctrl+S / Cmd+S):',
        code: 'SHOPIFY_STORE=jouw-store.myshopify.com\nSHOPIFY_ACCESS_TOKEN=shpat_xxxx\nSHOPIFY_BLOG_ID=123456789',
      },
      {
        title: 'Stap 4: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/publiceren_shopify.md aan met een volledige directive\nin het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Meest recente bestand in content/ leest (of specifiek bestand)\n- TITEL, META BESCHRIJVING en ARTIKEL uithaalt\n- Tekst omzet naar HTML (zelfde als WordPress publisher)\n- Blogartikel aanmaakt via Shopify Admin API:\n  * Endpoint: https://SHOPIFY_STORE/admin/api/2026-01/blogs/SHOPIFY_BLOG_ID/articles.json\n  * Header: X-Shopify-Access-Token: SHOPIFY_ACCESS_TOKEN\n  * Concept (geen published_at): {"article": {"title": TITEL, "body_html": HTML, "summary_html": META}}\n  * Direct live (--direct-live): voeg "published_at": datetime.now().isoformat() toe\n- Na succes de artikel-URL print\n\nEdge cases: bestand niet gevonden, API fout, ongeldige token, ontbrekende BLOG_ID',
      },
      {
        title: 'Stap 5: Script bouwen en draaien',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/publiceren_shopify.md en bouw execution/publiceren_shopify.py\n\nTechnisch:\n- argparse voor --bestand (optioneel) en --direct-live (store_true)\n- load_dotenv() als allereerste actie\n- Meest recente bestand in content/ ophalen als geen --bestand\n- Markdown naar HTML conversie\n- POST naar Shopify Articles endpoint\n- Geen published_at voor concept, datetime.now().isoformat() voor --direct-live\n- Print na succes de artikel URL',
      },
    ],
    checklist: [
      'Shopify Custom App aangemaakt met `write_content` scope',
      'Access Token gekopieerd en in `.env` gezet',
      'Blog ID opgehaald en in `.env` gezet',
      '`directives/publiceren_shopify.md` en `execution/publiceren_shopify.py` aangemaakt',
      'De agent maakt een concept artikel aan op Shopify',
    ],
  },

  '5-7': {
    intro: 'Je hebt drie agents: een content schrijver, een WordPress publisher, en een Shopify publisher. Nu koppel je ze zodat jij één opdracht geeft en de agent schrijft en publiceert. Daarna maak je het leverbaar.',
    sections: [
      {
        title: 'Dit vervangt geen copywriter',
        body: 'Claude schrijft goede basisteksten maar de klant moet ze altijd even nalezen en waar nodig aanpassen. Vertel dit ook aan klanten — het is eerlijk en het zorgt dat ze betrokken blijven. Jij levert de ruwe diamant, de klant geeft de finishing touch.',
        type: 'tip',
      },
      {
        title: 'Stap 1: Overkoepelende directives aanmaken',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/volledige_pipeline_wordpress.md aan in het Nederlands.\n\nOverkoepelende directive voor de complete WordPress content pipeline.\n\nInhoud:\n- Doel: blogartikel schrijven en publiceren op WordPress\n- Input: onderwerp en lijst zoekwoorden (kommagescheiden)\n- Stappen:\n  1. Voer directives/content_schrijven.md uit\n  2. Voer directives/publiceren_wordpress.md uit\n- Output: concept blogpost op WordPress klaar voor controle\n- Bij fout in een stap: voer self-annealing uit',
      },
      {
        title: 'Stap 2: Pipeline testen',
        body: 'Typ in het Claude-paneel:',
        code: 'Lees directives/volledige_pipeline_wordpress.md en voer de pipeline uit voor:\nOnderwerp: thuisbezorging bloemen Amsterdam\nZoekwoorden: bloemen bezorgen Amsterdam, boeket bezorgen Amsterdam, bloemen thuisbezorging Amsterdam zelfde dag',
      },
      {
        title: 'Stap 3: Koppelen met module 4 SEO data (optioneel)',
        body: 'Heb je module 4 gedaan? Dan kun je de zoekwoorden direct vanuit de SEO agent gebruiken. Kopieer:\n- `execution/zoekwoorden_ophalen.py` vanuit `seo-agent/execution/`\n- `directives/zoekwoorden_ophalen.md` vanuit `seo-agent/directives/`\n\nVoeg je DataForSEO keys toe aan `.env` en sla op (Ctrl+S / Cmd+S). Maak daarna een gecombineerde directive:',
        code: 'Maak directives/seo_en_content_pipeline.md aan in het Nederlands.\n\nVolledig geautomatiseerde SEO + content pipeline.\n\nStappen:\n1. Haal zoekwoorden op via directives/zoekwoorden_ophalen.md\n2. Schrijf blogartikel via directives/content_schrijven.md\n3. Publiceer via directives/publiceren_wordpress.md\n   OF directives/publiceren_shopify.md\n   (kies op basis van het platform van de klant)',
      },
      {
        title: 'Stap 4: README en CLAUDE.md aanpassen voor de klant',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak README.md aan voor een niet-technische klant. Schrijf in simpele taal.\n\nInhoud:\n- Wat doet dit systeem (2 zinnen)\n- Vereisten (Python, packages, API keys)\n- Hoe .env instellen (verwijs naar .env.example)\n- Hoe een artikel schrijven en publiceren:\n  open VS Code → open content-agent → open Claude-paneel →\n  typ de pipeline opdracht → wacht op bevestiging →\n  ga naar WordPress/Shopify om het concept na te lezen\n\nSla op in README.md',
      },
      {
        title: 'Modules 4 en 5 als complete dienst',
        body: 'Module 4 analyseert en rapporteert. Module 5 schrijft en publiceert. Samen zijn dit de bouwstenen van een volwaardige SEO-dienst: maand 1 — analyseer de website en maak een rapport, maand 2 t/m 12 — schrijf en publiceer elke maand 2-4 nieuwe artikelen.',
        type: 'tip',
      },
    ],
    checklist: [
      '`directives/volledige_pipeline_wordpress.md` aangemaakt',
      'De volledige pipeline werkt via één opdracht',
      '`README.md` aangemaakt voor de klant',
      '`CLAUDE.md` bijgewerkt met klantgegevens (Ctrl+S / Cmd+S)',
    ],
  },
}
