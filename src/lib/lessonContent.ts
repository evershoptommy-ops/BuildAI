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
        body: 'Claude geeft je de drie bestanden terug. Klik in de Claude chat op **Download all** (onderaan de bestandenlijst) om de ZIP te downloaden.\n\nPak de ZIP uit en zet de bestanden (`manifest.json`, `popup.html`, `popup.js`) in je `woordenteller-extensie` map:\n`C:\\Users\\tommy\\clavify-projecten\\woordenteller-extensie\\`\n\n⚠️ Let op: je hebt alleen de losse bestanden nodig, niet een submap. Zorg dat `manifest.json` direct in de `woordenteller-extensie` map staat.',
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
    intro: 'Tot nu toe waren je tools zelfstandig. Nu gaan we verder: tools die verbinding maken met het internet en echte data ophalen via API\'s.',
    sections: [
      {
        title: 'Wat is een API?',
        body: 'Een API (Application Programming Interface) is een "deur" die websites openzetten zodat andere software hun data kan ophalen. Het weerbericht op je telefoon komt van een API. De koers van bitcoin op een dashboard komt van een API. De meeste nuttige tools werken met API\'s.',
      },
      {
        title: 'Je eerste API-koppeling: OpenWeatherMap',
        body: 'Stap 1: Ga naar **openweathermap.org** en maak een gratis account aan. Je krijgt een API-sleutel.\n\nStap 2: Vraag Claude om een weertool te bouwen:',
        code: 'Bouw een Python script dat de OpenWeatherMap API gebruikt. De gebruiker voert een stadsnaam in. Het script haalt de huidige temperatuur, luchtvochtigheid, en weerbeschrijving op en toont dit netjes in de terminal. Gebruik de gratis API (api.openweathermap.org/data/2.5/weather). Ik heb al een API-sleutel. Leg elke stap uit.',
      },
      {
        title: 'Belangrijk',
        body: '• API-keys zijn privé — deel ze nooit publiek\n• JSON is de taal die API\'s spreken — het ziet eruit als een woordenboek\n• Claude kan elke API koppelen als jij hem de documentatie geeft',
        type: 'warning',
      },
    ],
    checklist: [
      'Ik heb een OpenWeatherMap account en API-sleutel',
      'De weertool werkt in de terminal',
      'Ik begrijp wat JSON is',
    ],
  },

  '3-2': {
    intro: 'Een terminal-tool is goed voor jezelf. Maar als je iets aan een klant wilt laten zien, wil je een webpagina. We bouwen een HTML-versie van de weertool die er als een echte app uitziet.',
    sections: [
      {
        title: 'Vraag Claude om de webversie',
        body: 'Stuur dit naar Claude:',
        code: 'Bouw een complete HTML/CSS/JavaScript webpagina die werkt als een weerapp. Gebruik de OpenWeatherMap API. De pagina moet: een zoekbalk hebben voor een stadsnaam, een zoekknop, en de resultaten netjes tonen met iconen voor de weerconditie. Gebruik een modern, gradient-achtergrond ontwerp met witte kaarten voor de data. Alles in één HTML bestand. Voeg ook foutafhandeling toe als de stad niet bestaat.',
      },
      {
        title: 'Opslaan en openen',
        body: 'Sla op als `weer-app.html` en open in je browser door dubbel te klikken op het bestand. Je ziet meteen de werkende app.',
      },
    ],
    checklist: [
      'De weerapp werkt als HTML pagina in de browser',
      'Het ontwerp ziet er professioneel uit',
      'Foutmeldingen worden netjes getoond',
    ],
  },

  '3-3': {
    intro: 'Tools worden pas echt nuttig als ze dingen onthouden. In deze les leren we twee manieren om data op te slaan.',
    sections: [
      {
        title: 'Methode 1: Bestanden opslaan met Python',
        body: 'Vraag Claude:',
        code: 'Breid de factuurcalculator uit module 1 uit. Voeg een optie toe om alle facturen op te slaan in een JSON bestand (facturen.json). Voeg ook een optie toe om alle opgeslagen facturen te tonen, gesorteerd op datum. Leg uit hoe het JSON formaat werkt.',
      },
      {
        title: 'Methode 2: LocalStorage in browser tools',
        body: 'LocalStorage is een mini-opslagruimte in de browser. Het blijft bewaard ook na het sluiten van de browser.\n\nVraag Claude:',
        code: 'Voeg aan mijn woordenteller Chrome extensie een geschiedenis toe. Bewaar de laatste 10 getelde teksten in LocalStorage met timestamp. Toon een tabblad \'Geschiedenis\' in de extensie. Leg uit hoe LocalStorage werkt.',
      },
    ],
    checklist: [
      'Factuurcalculator slaat data op in JSON',
      'Woordenteller heeft een geschiedenis via LocalStorage',
      'Ik begrijp het verschil tussen de twee methoden',
    ],
  },

  '3-4': {
    intro: 'De meest waardevolle tools zijn tools die werken terwijl jij slaapt. Automatisering is waar het echte geld zit — bedrijven betalen goed voor scripts die hen tijd besparen.',
    sections: [
      {
        title: 'Project: Dagelijkse weersrapportage per e-mail',
        body: 'We bouwen een Python script dat elke ochtend automatisch het weerbericht naar een e-mailadres stuurt.\n\nVraag Claude:',
        code: 'Bouw een Python script dat automatisch een dagelijkse weersrapportage stuurt via e-mail. Gebruik de OpenWeatherMap API voor het weer van een ingestelde stad. Gebruik smtplib om een e-mail te sturen via Gmail (met App Password). De e-mail moet HTML zijn met een nette opmaak: stad, temperatuur, weerbeschrijving, en een advies.',
      },
      {
        title: 'Het script inplannen op Windows',
        body: 'Zoek op "Taakplanner" in het startmenu → Nieuwe eenvoudige taak aanmaken → Stel de tijd in en wijs je Python script aan.',
      },
      {
        title: 'Het script inplannen op Mac',
        body: 'Vraag Claude:',
        code: 'Hoe stel ik een cron job in op Mac om mijn Python script elke ochtend om 8:00 te draaien?',
        type: 'tip',
      },
    ],
    checklist: [
      'Het e-mailscript werkt handmatig',
      'Het script is ingepland voor automatische uitvoering',
      'Ik kan dit concept uitleggen aan een potentiële klant',
    ],
  },

  '3-5': {
    intro: 'Op basis van wat kleine bedrijven het meest nodig hebben, zijn dit de 10 tools die je kunt bouwen en verkopen.',
    sections: [
      {
        title: 'Tier 1 — Eenvoudig (€150–€500)',
        body: '1. **Factuurcalculator** — al gebouwd! Aanpassen voor elke klant\n2. **Adressenextractor** — kopieert contactinfo van websites naar Excel\n3. **Wachtwoordgenerator** — veilige wachtwoorden voor intern gebruik\n4. **Kleurenpalette-tool** — huisstijlkleuren snel kopiëren',
      },
      {
        title: 'Tier 2 — Gemiddeld (€500–€1.500)',
        body: '5. **Voorraad-tracker** — bijhouden van producten in een simpel systeem\n6. **Offertetool** — klant vult in, tool genereert PDF offerte\n7. **URL-checker** — controleert of links op een website nog werken\n8. **Tijdregistratie-dashboard** — overzicht van uren per project per klant',
      },
      {
        title: 'Tier 3 — Gevorderd (€1.500–€4.000)',
        body: '9. **Lead scraper** — haalt contactgegevens op van websites in een niche\n10. **Rapportage-automatisering** — trekt data uit meerdere bronnen en maakt wekelijks rapport',
      },
      {
        title: 'Hoe je elke tool snel bouwt',
        body: '1. Kies een tool uit de lijst\n2. Vraag Claude: "Bouw [tool naam] als Python script / Chrome extensie / HTML webpagina voor een klein bedrijf in [branche]. Maak het simpel en professioneel."\n3. Pas aan op basis van wat de klant specifiek wil\n4. Lever op',
        type: 'tip',
      },
    ],
    checklist: [
      'Ik ken de 10 meest verkochte tools',
      'Ik heb een van de Tier 1 tools gebouwd',
      'Ik weet wat ik voor elke tier kunt vragen',
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
