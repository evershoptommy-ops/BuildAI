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
        body: 'Open de terminal (Ctrl+` op Windows, Cmd+` op Mac) en typ:',
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
      'Het chatvenster is zichtbaar in het paneel rechts',
      '"Edit automatically" staat aan',
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
        body: 'Je ziet nu `mijn-agent` links in de Explorer en het Claude Code paneel rechts. Klik in het tekstvak onderin het Claude Code paneel en typ:',
        code: 'Maak de volgende structuur aan in de huidige map:\n\n├── CLAUDE.md\n├── .env\n├── .env.example\n├── .gitignore\n├── directives/\n├── execution/\n└── .tmp/\n\nVul .gitignore in met: .env, .tmp/, __pycache__/, *.pyc\nLaat de andere bestanden leeg.\nBevestig als alles klaar is.',
      },
      {
        title: '.env nooit delen',
        body: 'Het `.env` bestand bevat straks je API keys en wachtwoorden. Dit bestand mag NOOIT naar GitHub of gedeeld worden. De `.gitignore` die Claude aanmaakt zorgt hiervoor automatisch.',
        type: 'warning',
      },
      {
        title: '.env.example invullen',
        body: 'Klik op `.env.example`. Voeg toe en sla op (Ctrl+S op Windows, Cmd+S op Mac):',
        code: '# Kopieer dit bestand naar .env en vul de echte waarden in\n# .env.example mag je delen — .env nooit\nWEATHER_API_KEY=jouw_openweathermap_key_hier\nGMAIL_USER=jouw@gmail.com\nGMAIL_APP_PASSWORD=jouw_app_wachtwoord_hier',
      },
      {
        title: 'VS Code heropen in mijn-agent',
        body: 'Vanaf nu werk je altijd vanuit de `mijn-agent` map. Heropen VS Code zodat Claude altijd de juiste context heeft:\n\nFile → Open Folder → navigeer naar `clavify-projecten/mijn-agent` → klik "Map selecteren" of "Open".\n\nJe ziet nu `mijn-agent` als de root in de Explorer.',
      },
    ],
    checklist: [
      '`mijn-agent` structuur is aangemaakt en zichtbaar in de Explorer',
      '`.gitignore` bevat .env en .tmp/',
      '`.env.example` is ingevuld en opgeslagen (Ctrl+S / Cmd+S)',
      'VS Code is heropend in de `mijn-agent` map',
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
        body: 'Soms toont Claude eerst een plan voordat hij iets doet. Je ziet een overzicht van wat hij gaat aanpassen. Lees het door — ziet het er goed uit? Klik "Continue" of "Accept plan". Wil je iets aanpassen? Typ je opmerking in het paneel.',
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
        body: 'Typ in het paneel:',
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
        body: 'Druk op Ctrl+` (Windows) of Cmd+` (Mac). De terminal opent onderin VS Code.\n\nControleer of je in de juiste map staat:\n• **Mac/Linux:** typ `pwd` — je ziet `.../clavify-projecten/mijn-agent`\n• **Windows:** typ `cd` — je ziet `...\\clavify-projecten\\mijn-agent`\n\nSta je ergens anders? Navigeer handmatig:\n• Windows: `cd clavify-projecten\\mijn-agent`\n• Mac: `cd clavify-projecten/mijn-agent`',
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
      '`.env.example` bevat alle benodigde variabelenamen',
    ],
  },

  '3-5': {
    intro: 'Nu gaan we iets echts bouwen. Een agent die op jouw commando het actuele weer ophaalt voor een stad en het resultaat netjes opslaat. Volledig werkend, stap voor stap — van API key tot tekstbestand.',
    sections: [
      {
        title: 'Stap 1: API key ophalen',
        body: 'Ga naar **openweathermap.org** → "Sign In" → "Create an Account". Bevestig je e-mail. Na inloggen: klik rechtsboven op je gebruikersnaam → "My API keys". Kopieer de sleutel onder "Default".\n\nOpen `.env` in VS Code door erop te klikken in de Explorer links. Voeg toe en sla op (Ctrl+S op Windows, Cmd+S op Mac):',
        code: 'WEATHER_API_KEY=plak_hier_jouw_key',
      },
      {
        title: 'Nieuwe API key — wacht even',
        body: 'Een nieuw aangemaakte API key duurt tot 2 uur voordat hij actief is. Krijg je een 401-fout vlak na het aanmaken? Wacht een uur en probeer opnieuw. Dit is geen fout in je code.',
        type: 'warning',
      },
      {
        title: 'Stap 2: Directive schrijven',
        body: 'Typ in het Claude-paneel:',
        code: 'Maak directives/weer_rapport.md aan met een volledige directive in het Nederlands.\n\nDe directive beschrijft een Python script dat:\n- Weerdata ophaalt via OpenWeatherMap API voor een opgegeven stad\n- Resultaat opslaat als leesbare tekst in .tmp/weer_rapport.txt\n- Toont: datum en tijd, stadsnaam, temperatuur in Celsius, feels like,\n  weerbeschrijving, luchtvochtigheid, windsnelheid in km/h\n\nInclusief:\n- Doel\n- Input parameters (stad en output bestandspad)\n- Hoe het script aan te roepen\n- Vereisten (.env variabelen en geïnstalleerde packages)\n- Edge cases: stad niet gevonden, ongeldige API key, netwerk fout,\n  ontbrekende .env variabele\n- Instructie voor zelfherstel bij fouten',
      },
      {
        title: 'Stap 3: Script bouwen',
        body: 'Typ in het paneel:',
        code: 'Lees directives/weer_rapport.md en bouw execution/weer_ophalen.py\n\nTechnisch:\n- argparse voor --stad en --output argumenten\n- load_dotenv() als allereerste actie\n- WEATHER_API_KEY laden via os.getenv()\n- Endpoint: https://api.openweathermap.org/data/2.5/weather\n- Windsnelheid: m/s × 3.6 = km/h\n- Schrijf resultaat naar het outputbestand\n- Volg alle edge cases uit de directive\n- Commentaar bij elke sectie',
      },
      {
        title: 'load_dotenv() als eerste',
        body: 'Controleer het script na aanmaken: de eerste regels van `execution/weer_ophalen.py` moeten zijn:\n\n`from dotenv import load_dotenv` en `load_dotenv()`\n\nZie je dit niet? Typ in het paneel: "Controleer dat load_dotenv() de allereerste actie is in execution/weer_ophalen.py."',
        type: 'warning',
      },
      {
        title: 'Stap 4: De agent draaien',
        body: 'Typ in het paneel:',
        code: 'Lees directives/weer_rapport.md en voer de taak uit voor de stad Utrecht.\nSla het resultaat op in .tmp/weer_rapport.txt',
      },
      {
        title: 'Als er iets fout gaat',
        body: 'Typ in het paneel:',
        code: 'Er is een fout opgetreden. Voer de self-annealing procedure uit:\n1. Lees de foutmelding volledig\n2. Fix het script\n3. Test het opnieuw\n4. Update directives/weer_rapport.md met wat je hebt geleerd\nLeg daarna uit wat er mis was en wat je hebt gewijzigd.',
        type: 'tip',
      },
    ],
    checklist: [
      'OpenWeatherMap API key staat in `.env` en opgeslagen (Ctrl+S / Cmd+S)',
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
        body: 'Typ in het paneel:',
        code: 'Maak directives/send_email.md aan met een volledige directive in het Nederlands.\nBouw daarna ook direct execution/send_email.py\n\nHet systeem verstuurt een e-mail via Gmail met inhoud uit een lokaal tekstbestand.\n\nDirective moet bevatten:\n- Input parameters: --to, --subject, --body (pad naar .txt bestand)\n- Vereisten: GMAIL_USER en GMAIL_APP_PASSWORD in .env\n- Edge cases: bestand niet gevonden, SMTP fout, ontbrekende .env variabelen,\n  ongeldig e-mailadres\n- Instructie voor zelfherstel\n\nScript technisch:\n- argparse voor --to, --subject, --body\n- load_dotenv() als allereerste actie\n- smtplib.SMTP_SSL op poort 465 (niet STARTTLS op 587)\n- Print bevestiging met tijdstip na succes',
      },
      {
        title: 'Stap 3: Testmail sturen',
        body: 'Typ in het paneel (vervang het e-mailadres door jouw eigen adres):',
        code: 'Voer de send_email directive uit.\nStuur een e-mail naar [jouw eigen e-mailadres]\nmet subject "Test Clavify Agent"\nen gebruik .tmp/weer_rapport.txt als inhoud.',
      },
      {
        title: '535 Authentication failed?',
        body: 'Controleer: geen spaties in het App Password in `.env`, is 2-stapsverificatie echt actief, juist Gmail adres in GMAIL_USER. Typ daarna in het paneel: "535 authenticatiefout. Controleer of het script SMTP_SSL gebruikt op poort 465 en niet STARTTLS op 587."',
        type: 'warning',
      },
      {
        title: 'Stap 4: De twee agents koppelen',
        body: 'Typ in het paneel (vervang het e-mailadres):',
        code: 'Voer dit in volgorde uit via de directives:\n1. Haal het weerrapport op voor Rotterdam via weer_rapport directive\n   en sla op in .tmp/weer_rapport.txt\n2. Stuur het rapport naar [jouw e-mailadres]\n   met subject "Weerrapport Rotterdam" via send_email directive\n\nGebruik de directives als instructiebron.\nMeld na elke stap kort wat je hebt gedaan.',
      },
    ],
    checklist: [
      'Gmail App Password aangemaakt en in `.env` zonder spaties, opgeslagen (Ctrl+S / Cmd+S)',
      '`directives/send_email.md` en `execution/send_email.py` aangemaakt door Claude',
      'Testmail ontvangen in eigen inbox',
      'De twee agents werken samen via één opdracht in het paneel',
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
        body: 'Open `.env` en verander je API key tijdelijk naar een nep-waarde (Ctrl+S op Windows, Cmd+S op Mac). Typ dan in het paneel:',
        code: 'Voer de weer_rapport directive uit voor Amsterdam.',
      },
      {
        title: 'Herstel daarna',
        body: 'Zet je echte API key terug in `.env` en sla op (Ctrl+S op Windows, Cmd+S op Mac). Typ dan:',
        code: 'De fout was een ongeldige API key — die is nu gecorrigeerd.\nUpdate de directive met een notitie over dit type fout.',
      },
      {
        title: 'Leverbaar maken voor een klant',
        body: 'Typ in het paneel:',
        code: 'Maak README.md aan voor een niet-technische klant. Schrijf in simpele taal.\n\nInhoud:\n- Wat doet dit systeem (2 zinnen)\n- Wat heb je nodig\n- Hoe .env instellen stap voor stap (verwijs naar .env.example)\n- Hoe gebruiken via het Claude-paneel in VS Code\n- Hoe automatisch inplannen:\n  Windows: via Taakplanner stap voor stap\n  Mac: via crontab zonder vim:\n  (crontab -l 2>/dev/null; echo "0 8 * * * cd /pad/naar/mijn-agent && claude -p \'voer het dagelijkse weerrapport uit\'") | crontab -\n  Leg uit dat ze /pad/naar/mijn-agent vervangen door het echte pad (te vinden via pwd)\n\nSla op in README.md',
      },
      {
        title: 'Jouw directives zijn jouw kennisbank',
        body: 'Na elke klant wordt je systeem slimmer. De directives bevatten alle lessen die het systeem heeft geleerd. Klant 2 profiteert van alles wat je bij klant 1 hebt geleerd — zonder extra werk. Dit is wat jou onderscheidt van iemand die elke keer opnieuw begint.\n\nDit is een leverbaar product. ZIP de map, installeer het bij de klant, vraag €300–€500 voor de bouw en €50/maand voor onderhoud.',
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

  '4-1': {
    intro: 'Je kunt nu tools bouwen. Maar als je potentiële klanten zegt "ik bouw Python scripts en Chrome extensies", kijken ze je glazig aan. Je moet het vertalen naar wat zij begrijpen: resultaat.',
    sections: [
      {
        title: 'Hoe je het niet zegt vs. hoe je het wel zegt',
        body: '❌ **Niet:** "Ik bouw tools met Python en VS Code, geautomatiseerde scripts, API-koppelingen, en Chrome extensies met JavaScript."\n\n✅ **Wel:** "Ik bouw kleine software-tools die repetitieve taken automatiseren. Denk aan: je medewerker hoeft niet meer elke dag handmatig data te kopiëren — een tool doet dat in één klik."',
        type: 'tip',
      },
      {
        title: 'Je doelgroep',
        body: 'De beste klanten voor jou zijn kleine bedrijven (5–50 medewerkers) die:\n\n• Veel handmatig werk doen in Excel of e-mail\n• Geen eigen IT-afdeling hebben\n• Budget hebben (geen zzp\'ers zonder personeel)\n• In een niche zitten: makelaars, kappers, installateurs, accountants, restaurants',
      },
      {
        title: 'Je aanbod',
        body: 'Houd het simpel. Bied drie dingen aan:\n\n1. **Standaard tool** (€200–€500): een bestaande tool aanpassen voor hun situatie\n2. **Custom tool** (€500–€1.500): een tool op maat bouwen voor hun specifieke probleem\n3. **Onderhoud** (€50–€100/maand): de tool up-to-date houden en kleine aanpassingen',
      },
    ],
    checklist: [
      'Ik kan mijn dienst uitleggen in twee zinnen',
      'Ik weet welke doelgroep ik ga benaderen',
      'Ik heb mijn drie aanbiedingen bepaald',
    ],
  },

  '4-2': {
    intro: 'Je eerste klant is het moeilijkst. Daarna wordt het makkelijker — elke tevreden klant levert referrals op. Maar die eerste moet je actief zoeken.',
    sections: [
      {
        title: 'Methode 1: Jouw netwerk',
        body: 'De snelste manier. Stuur dit bericht naar 10 mensen in je netwerk:',
        code: 'Hé [naam], ik ben bezig met iets nieuws. Ik bouw kleine software-tools voor bedrijven die helpen met automatisering en tijdsbesparing. Ken jij iemand die zoiets zou willen — of loop je zelf ergens tegenaan? Geen verplichtingen, ik verken gewoon wat er leeft.',
      },
      {
        title: 'Methode 2: LinkedIn directbenadering',
        body: 'Zoek op LinkedIn naar eigenaren van kleine bedrijven in een specifieke niche. Stuur een verbindingsverzoek met notitie:\n\nTarget: 5 berichten per dag. Verwacht 10–20% respons.',
        code: 'Ik zie dat je [bedrijf type] hebt. Ik bouw tools die [specifiek resultaat voor die branche] automatiseren. Zou je open staan voor een kort gesprek?',
      },
      {
        title: 'Methode 3: Gratis pilot',
        body: 'Ga naar een lokaal bedrijf en stel voor:\n\n"Ik bouw gratis een kleine tool voor jullie als ik het mag gebruiken als portfolio-project. Als jullie er blij mee zijn, betalen jullie niets. Als jullie willen dat ik het onderhoud of uitbrei, spreken we een bedrag af."\n\nDit kost jou 2–4 uur. Het levert je een referentie, portfolio, en vaak een betaalde opdracht op.',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik heb het netwerk-bericht verstuurd naar minimaal 5 mensen',
      'Ik heb mijn LinkedIn profiel bijgewerkt met mijn dienst',
      'Ik weet hoe ik een gratis pilot aanbied',
    ],
  },

  '4-3': {
    intro: 'Een klant wil met je praten. Goed. Dit is geen verkooppitch — dit is een gesprek. Jij luistert, stelt vragen, en kijkt of je kunt helpen.',
    sections: [
      {
        title: 'De structuur van een goed kennismakingsgesprek (30–45 min)',
        body: '**Deel 1 — Kennismaken (5 min):**\nVertel kort wie je bent. Eén minuut. Dan: "Maar vertel eens over jullie bedrijf."\n\n**Deel 2 — Probleem begrijpen (15 min):**\nStel deze vijf vragen:\n\n1. "Welke taken doen jullie elke dag/week die veel tijd kosten maar eigenlijk repetitief zijn?"\n2. "Hoe doen jullie dat nu? Excel, e-mail, handmatig?"\n3. "Als dat geautomatiseerd zou zijn, hoeveel tijd bespaar je dan per week?"\n4. "Heb je eerder geprobeerd dit op te lossen? Wat is er mis gegaan?"\n5. "Wat is voor jullie het ideale resultaat?"',
      },
      {
        title: 'Prijs bepalen',
        body: 'Je prijs is gebaseerd op de waarde die je levert, niet op je uren. Als een tool iemand 3 uur per week bespaart, is dat per jaar 150 uur. Tegen €25/uur is dat €3.750. Een tool van €600 is dan een no-brainer.\n\n**Vuistregel:** vraag 20–30% van de jaarlijkse besparing.',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik ken de vijf vragen uit mijn hoofd',
      'Ik weet hoe ik een prijs berekent op basis van waarde',
      'Ik heb een gesprek gepland of gevoerd',
    ],
  },

  '4-4': {
    intro: 'Je hebt een klant, je hebt de tool gebouwd. Nu: professioneel opleveren.',
    sections: [
      {
        title: 'Stap 1: De tool documenteren',
        body: 'Vraag Claude om een gebruikersinstructie te schrijven:',
        code: 'Schrijf een korte gebruikersinstructie (1 A4) voor een niet-technische gebruiker die [tool naam] gaat gebruiken. Leg stap voor stap uit hoe het werkt. Gebruik simpele taal, geen technisch jargon.',
      },
      {
        title: 'Stap 2: Installatiegesprek plannen',
        body: 'Plan 30 minuten met de klant om de tool samen te installeren en uit te leggen. Dit is niet optioneel — dit is waar klanten het vertrouwen krijgen dat ze de tool ook echt gaan gebruiken.',
      },
      {
        title: 'Stap 3: Proefperiode afspreken',
        body: '"Ik stel voor dat jullie de tool twee weken gebruiken. Als er iets niet werkt of als jullie iets missen, geef het door en ik pas het aan. Na twee weken doen we een korte check-in."\n\nDit kost jou weinig tijd en maakt klanten veel tevredener.',
      },
      {
        title: 'Stap 4: Factuur sturen',
        body: 'Gebruik Moneybird (NL) of een simpele template. Vermeld:\n\n• Je naam / bedrijfsnaam\n• KVK nummer\n• BTW nummer (als van toepassing)\n• Beschrijving van de geleverde tool\n• Bedrag\n• Betalingstermijn (14 dagen is standaard)',
      },
      {
        title: 'Stap 5: Referentie vragen',
        body: '"Ik ben blij dat de tool goed werkt voor jullie. Zou je bereid zijn om een korte referentie te schrijven die ik op mijn website mag zetten? En ken je andere ondernemers die hier ook baat bij zouden hebben?"',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik heb een gebruikersinstructie gemaakt',
      'De installatieafspraak is gepland',
      'Ik weet hoe ik een professionele factuur stuur',
    ],
  },

  '4-5': {
    intro: 'Je hebt je eerste klant. Nu bouw je een systeem dat nieuwe klanten aantrekt zonder dat je elke keer vanaf nul begint.',
    sections: [
      {
        title: 'Pijler 1: Portfolio',
        body: 'Na elke opdracht: maak een korte casestudy.\n\n• Wat was het probleem?\n• Wat heb je gebouwd?\n• Wat is het resultaat? (uren bespaard, fouten verminderd, etc.)\n\nZelfs zonder getallen werkt dit: "Restaurant X had een handmatig reserveringssysteem. Ik bouwde een tool die reserveringen bijhoudt. De eigenaar besteedt er nu 30 minuten per week minder aan."',
      },
      {
        title: 'Pijler 2: Online aanwezigheid',
        body: 'Bouw een simpele portfolio-pagina. Vraag Claude:',
        code: 'Bouw een professionele HTML portfolio pagina voor een freelance AI tools developer. Sectie: over mij (kort), diensten (3 aanbiedingen met prijs), portfolio (3 casestudies als kaarten), contact formulier. Modern ontwerp, donkerblauw kleurenschema.',
      },
      {
        title: 'Pijler 3: Herhalende inkomsten',
        body: 'Maak van elke tool een abonnement:\n\n• **Basis**: tool werkt as-is (eenmalig betaald)\n• **Onderhoud**: €50/maand — updates, bugs fixen, kleine aanpassingen\n• **Premium**: €150/maand — onderhoud + maandelijks een nieuwe functie\n\nMet 7 klanten op het onderhoudspakket heb je €350/maand passief inkomen naast je projecten.',
        type: 'tip',
      },
      {
        title: 'Je eerste €1.000/maand plan',
        body: '• Maand 1: 1 gratis pilotproject → referentie\n• Maand 2: 2 betaalde projecten (€300 + €500) + 1 onderhoud (€75) = €875\n• Maand 3: 1 project (€500) + 3 onderhoud (€225) = €725\n• Maand 4+: groeiende onderhoud-inkomsten + nieuwe projecten',
      },
    ],
    checklist: [
      'Ik heb mijn eerste casestudy geschreven',
      'Mijn portfolio pagina is online',
      'Ik heb een onderhoudspakket aangeboden aan mijn eerste klant',
    ],
  },
}
