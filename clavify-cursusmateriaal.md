# Clavify — Volledig Cursusmateriaal
**4 Modules | 20 Lessen | Modules 1 & 2 Gratis | Modules 3 & 4 Premium**

---

# MODULE 1 — De Basis (GRATIS)
## "Van nul naar je eerste werkende tool"

> **Doel:** De student heeft aan het einde van module 1 VS Code en Claude geïnstalleerd, begrijpt hoe ze samenwerken, en heeft zijn eerste micro-tool gebouwd en lokaal draaien.

---

### Les 1.1 — Welkom bij Clavify
**Duur:** ~8 minuten | **Type:** Video + tekst

**Wat je leert:**
- Wat Clavify is en wat je aan het einde van de cursus kunt
- Hoe de cursus is opgebouwd (modules, lessen, oefeningen)
- Wat "tools bouwen met AI" precies betekent in de praktijk

**Lesinhoud:**

Welkom. Je hebt net een beslissing gemaakt die 99% van de mensen nooit nemen: je gaat leren hoe je AI écht kunt inzetten — niet als chatbot, maar als bouwpartner.

De meeste mensen gebruiken Claude of ChatGPT om een e-mail te schrijven of een vraag te stellen. Jij gaat het anders doen. Jij gaat Claude gebruiken om software te maken. Echte software. Tools die bedrijven willen hebben en waarvoor ze betalen.

Je hoeft geen programmeur te zijn. Je hebt geen technische achtergrond nodig. Wat je wel nodig hebt: nieuwsgierigheid, geduld, en de bereidheid om dingen uit te proberen die soms niet meteen werken.

**Hoe de cursus werkt:**

De cursus bestaat uit 4 modules:
- **Module 1** (gratis): Installatie en je eerste tool
- **Module 2** (gratis): Je eerste Chrome extensie
- **Module 3** (premium): Gevorderde tools en automatisering
- **Module 4** (premium): Verkopen aan klanten en schalen

Elke les heeft een korte uitleg, een oefening, en een checklist. Doe de oefeningen. Dat is waar het echte leren gebeurt.

**Checklist:**
- [ ] Ik heb mijn account aangemaakt
- [ ] Ik heb de cursusstructuur bekeken
- [ ] Ik ben klaar om te beginnen

---

### Les 1.2 — VS Code installeren en instellen
**Duur:** ~12 minuten | **Type:** Stap-voor-stap handleiding + video

**Wat je leert:**
- VS Code downloaden en installeren (Windows, Mac, Linux)
- De belangrijkste instellingen configureren
- De mappenstructuur begrijpen die we de hele cursus gebruiken

**Lesinhoud:**

VS Code is je werkplaats. Het is een gratis programma van Microsoft waarin je al je code schrijft en je projecten beheert. Het ziet er misschien intimiderend uit, maar je hebt maar een klein deel nodig.

**Stap 1: Downloaden**

Ga naar code.visualstudio.com en download de versie voor jouw systeem:
- Windows: klik op "Windows" — download de .exe
- Mac: klik op "Mac" — kies Apple Silicon als je een M1/M2/M3 Mac hebt, anders Intel
- Linux: klik op je distributie

**Stap 2: Installeren**

Windows: dubbelklik op het gedownloade bestand en volg de stappen. Vink "Add to PATH" aan — dit is belangrijk.

Mac: sleep VS Code naar je Applications map.

**Stap 3: VS Code openen en instellen**

Open VS Code. Je ziet een welkomstscherm. Sluit dat voor nu.

De dingen die je gaat gebruiken:
- **Explorer** (linker zijbalk, map-icoontje): hier zie je je bestanden
- **Terminal** (menu → Terminal → New Terminal): hier typ je opdrachten
- **Editor** (het grote middelste gedeelte): hier schrijf je code

**Stap 4: Een werkmap aanmaken**

Open de terminal (Ctrl+\` op Windows, Cmd+\` op Mac) en typ:

```
mkdir clavify-projecten
cd clavify-projecten
```

Dit is de map waar al je projecten komen te staan.

**Checklist:**
- [ ] VS Code is geïnstalleerd
- [ ] Ik kan de terminal openen
- [ ] Ik heb de map clavify-projecten aangemaakt

---

### Les 1.3 — Claude instellen als je AI-partner
**Duur:** ~10 minuten | **Type:** Handleiding + praktijkoefening

**Wat je leert:**
- Een Claude account aanmaken (gratis tier is genoeg om te beginnen)
- Hoe je Claude gebruikt als programmeerpartner (niet als zoekmachine)
- De juiste manier om vragen te stellen aan Claude

**Lesinhoud:**

Claude is je AI-partner. Maar de meeste mensen gebruiken het verkeerd. Ze stellen vage vragen en krijgen vage antwoorden. Jij gaat het anders doen.

**Account aanmaken:**

Ga naar claude.ai en maak een gratis account aan. Voor deze cursus is de gratis versie voldoende om te starten. Als je later professioneel tools gaat bouwen voor klanten, is Claude Pro (~$20/maand) de investering waard.

**De gouden regel: Context is alles**

Slechte vraag aan Claude:
> "Maak een tool voor een restaurant."

Goede vraag aan Claude:
> "Ik bouw een eenvoudig Python script voor een restaurant in Amsterdam. Ze willen dat medewerkers aan het begin van de dag hun naam invoeren, en dat het script bijhoudt hoeveel uur elk persoon heeft gewerkt. Aan het einde van de week moet er een simpel overzicht komen. Begin met de basisstructuur van het script en leg elke stap uit."

Het verschil: context (wat, voor wie, waarom), specificiteit (wat het precies moet doen), en richting (begin hier, leg dit uit).

**De drie rollen van Claude in jouw workflow:**

1. **Bouwer**: Claude schrijft de code, jij geeft de opdracht
2. **Uitlegger**: Claude legt uit waarom iets werkt (of niet werkt)
3. **Debugger**: Als iets kapot is, plak je de foutmelding in Claude en vraagt om hulp

**Oefening:**

Ga naar claude.ai en stel deze vraag:
> "Ik ben een beginner die leert programmeren. Leg me in 5 stappen uit wat een Python script is en hoe het verschilt van een website."

Lees het antwoord. Stel een vervolgvraag over iets wat je niet begrijpt. Zo werkt de samenwerking.

**Checklist:**
- [ ] Ik heb een Claude account aangemaakt
- [ ] Ik heb mijn eerste vraag gesteld aan Claude
- [ ] Ik begrijp het verschil tussen een slechte en goede prompt

---

### Les 1.4 — Node.js en Python installeren
**Duur:** ~15 minuten | **Type:** Technische installatiehangeleiding

**Wat je leert:**
- Node.js installeren (nodig voor JavaScript tools en Chrome extensies)
- Python installeren (nodig voor automatiseringsscripts)
- Controleren of alles correct is geïnstalleerd

**Lesinhoud:**

Node.js en Python zijn de "motoren" achter de tools die je gaat bouwen. Je hoeft niet te weten hoe ze werken — je hoeft ze alleen te installeren.

**Node.js installeren:**

Ga naar nodejs.org en download de LTS versie (de aanbevolen stabiele versie).

Na installatie: open je terminal in VS Code en typ:
```
node --version
```
Als je een versienummer ziet (bijv. v20.10.0), werkt het.

**Python installeren:**

Ga naar python.org/downloads en download de nieuwste versie.

BELANGRIJK voor Windows: vink tijdens de installatie "Add Python to PATH" aan. Zonder dit werkt het niet.

Na installatie, typ in je terminal:
```
python --version
```
Of op sommige systemen:
```
python3 --version
```

**Als het niet werkt:**

Kopieer de foutmelding die je ziet en vraag het aan Claude:
> "Ik probeer Node.js te installeren op [Windows/Mac] en krijg deze foutmelding: [plak foutmelding]. Wat moet ik doen?"

Claude zal je stap voor stap door de oplossing leiden.

**Checklist:**
- [ ] Node.js is geïnstalleerd (node --version werkt)
- [ ] Python is geïnstalleerd (python --version werkt)
- [ ] Ik weet hoe ik Claude gebruik bij technische problemen

---

### Les 1.5 — Je eerste tool: een factuurberekening
**Duur:** ~20 minuten | **Type:** Praktijkproject + begeleide bouw

**Wat je leert:**
- Je eerste echte werkende tool bouwen samen met Claude
- Begrijpen hoe je een project opdeelt in kleine stappen
- Je tool uitvoeren vanuit VS Code

**Lesinhoud:**

Nu gaan we iets échts bouwen. We maken een factuurberekening: je vult uurtarief en uren in, en het script berekent het totaal inclusief BTW. Simpel, maar echt — en je kunt het vandaag nog aan een vriend laten zien.

**Stap 1: Maak een projectmap aan**

Open de terminal in VS Code en typ:
```
cd clavify-projecten
mkdir factuur-tool
cd factuur-tool
```

**Stap 2: Vraag Claude om de code**

Ga naar claude.ai en stuur dit bericht:

> "Maak een Python script dat werkt als een eenvoudige factuurcalculator. De gebruiker voert via de terminal in: hun naam, het uurtarief (in euro), en het aantal gewerkte uren. Het script berekent het subtotaal, voegt 21% BTW toe, en toont een nette factuuroverzicht in de terminal. Voeg ook een optie toe om dit op te slaan als een .txt bestand. Geef me de complete code met commentaar bij elke stap."

**Stap 3: De code in VS Code zetten**

Claude geeft je een stuk code. Doe dit:
1. Maak in VS Code een nieuw bestand: File → New File
2. Sla het op als `factuur.py` in je factuur-tool map
3. Kopieer de code van Claude en plak het in dit bestand
4. Sla op (Ctrl+S of Cmd+S)

**Stap 4: De tool uitvoeren**

In de terminal:
```
python factuur.py
```

Volg de instructies die het script geeft.

**Als er een fout is:**

Geen paniek. Kopieer de foutmelding en stuur hem naar Claude:
> "Ik probeer dit script uit te voeren en krijg deze fout: [foutmelding]. Hoe los ik dit op?"

**Wat je net hebt gedaan:**

Je hebt zojuist een werkende tool gebouwd. Zonder cursus programmeren. Zonder jaren oefening. Dit is de kracht van werken met Claude.

**Checklist:**
- [ ] Ik heb de factuur-tool map aangemaakt
- [ ] Het script werkt in de terminal
- [ ] Ik begrijp hoe ik foutmeldingen aanpak met Claude

---

# MODULE 2 — Je Eerste Chrome Extensie (GRATIS)
## "Bouw een tool die in de browser leeft"

> **Doel:** De student bouwt een werkende Chrome extensie die hij aan anderen kan laten zien en begrijpt hoe hij extensies kan aanpassen en verbeteren.

---

### Les 2.1 — Wat is een Chrome extensie en waarom is het waardevol?
**Duur:** ~10 minuten | **Type:** Conceptles + voorbeelden

**Wat je leert:**
- Hoe Chrome extensies technisch werken (simpele uitleg)
- Waarom bedrijven betalen voor custom extensies
- De drie soorten extensies die je na deze module kunt bouwen

**Lesinhoud:**

Een Chrome extensie is een mini-programma dat in je browser leeft. Je kent ze: AdBlock, Grammarly, LastPass. Maar de meeste bedrijven willen geen publieke extensies — ze willen iets voor henzelf. Een knop die hun CRM opent. Een timer die bijhoudt hoelang ze op een pagina zijn. Een tool die automatisch formulieren invult.

**Waarom dit waardevol is:**

Chrome extensies zijn relatief eenvoudig te bouwen, maar de meeste bedrijven weten niet hoe. Ze zien het als "software" en denken dat het duur is. Dat is jouw kans.

Extensies die bedrijven wensen:
- **Productiviteitstools**: Timer, takenlijst, focus-modus
- **Data-extractie**: Kopieer automatisch informatie van websites
- **Integraties**: Koppel twee websites aan elkaar met één klik
- **Branding**: Aangepaste nieuwe-tab-pagina met bedrijfslogo en links

**Hoe een extensie technisch werkt (simpel):**

Een Chrome extensie bestaat uit drie bestanden:
1. `manifest.json` — het "paspoort" van de extensie (naam, rechten, etc.)
2. `popup.html` — wat de gebruiker ziet als hij op het icoontje klikt
3. `popup.js` — wat er gebeurt als de gebruiker interacteert

Dat is het. Drie bestanden. De rest is details.

**Checklist:**
- [ ] Ik begrijp wat een Chrome extensie is
- [ ] Ik kan drie praktijkvoorbeelden noemen
- [ ] Ik begrijp de basisstructuur (3 bestanden)

---

### Les 2.2 — De structuur van een extensie begrijpen
**Duur:** ~12 minuten | **Type:** Code walkthrough

**Wat je leert:**
- Wat er in elk van de drie bestanden staat
- Hoe manifest.json werkt en wat je erin kunt aanpassen
- Hoe HTML en JavaScript samenwerken in een extensie

**Lesinhoud:**

Laten we elk bestand bekijken. Je hoeft dit niet uit je hoofd te leren — Claude helpt je altijd — maar het helpt als je begrijpt wat je naar kijkt.

**manifest.json — Het paspoort:**

```json
{
  "manifest_version": 3,
  "name": "Mijn Eerste Extensie",
  "version": "1.0",
  "description": "Een eenvoudige Chrome extensie",
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  }
}
```

Wat betekent dit:
- `manifest_version: 3` — gebruik altijd versie 3 (de nieuwste)
- `name` — de naam die Chrome toont
- `action` → `default_popup` — welk HTML bestand te openen bij klik

**popup.html — Wat de gebruiker ziet:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { width: 300px; padding: 20px; font-family: Arial; }
    button { background: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Mijn Tool</h2>
  <button id="mijnKnop">Klik hier</button>
  <p id="resultaat"></p>
  <script src="popup.js"></script>
</body>
</html>
```

**popup.js — Wat er gebeurt:**

```javascript
document.getElementById('mijnKnop').addEventListener('click', function() {
  document.getElementById('resultaat').textContent = 'Het werkt!';
});
```

Dit is de basis van élke Chrome extensie. Alles wat je verder bouwt, is een uitbreiding hierop.

**Checklist:**
- [ ] Ik begrijp wat manifest.json doet
- [ ] Ik weet waarvoor popup.html en popup.js zijn
- [ ] Ik heb de voorbeeldcode doorgelezen

---

### Les 2.3 — Je eerste extensie bouwen: de Screenshot Tool
**Duur:** ~25 minuten | **Type:** Praktijkproject

**Wat je leert:**
- Een complete Chrome extensie bouwen vanuit nul
- De extensie laden in Chrome
- Screenshots direct naar je clipboard kopiëren en gebruiken met Claude

**Lesinhoud:**

We bouwen een screenshot tool. Met één klik maak je een screenshot van de pagina die je bekijkt — die staat direct in je clipboard, klaar om te plakken. Geen account, geen betaalde app, gewoon jouw eigen extensie.

Dit is ook direct handig als leermiddel: je kunt screenshots van je scherm in Claude plakken en vragen wat er goed of fout is.

**Stap 1: Projectmap aanmaken**

```
cd clavify-projecten
mkdir screenshot-extensie
cd screenshot-extensie
```

**Stap 2: Vraag Claude om de complete extensie**

Ga naar claude.ai en stuur:

> "Bouw een complete Chrome extensie (Manifest V3) die een screenshot maakt van de huidige webpagina en die direct naar het clipboard kopieert. Gebruik html2canvas via een CDN (geen npm). Als de screenshot klaar is, toont de popup een groen vinkje met de tekst 'Gekopieerd naar clipboard!'. Voeg ook een knop toe om de screenshot te downloaden als PNG. Maak het ontwerp minimalistisch en professioneel. Geef me alle bestanden: manifest.json, popup.html, popup.js, en een content.js als dat nodig is."

**Stap 3: Bestanden opslaan**

Maak in VS Code de bestanden aan in de `screenshot-extensie` map. Zorg dat `manifest.json` direct in de map staat, niet in een submap.

**Stap 4: Extensie laden in Chrome**

1. Open Chrome
2. Ga naar `chrome://extensions/`
3. Zet "Ontwikkelaarsmodus" aan (rechts bovenin)
4. Klik "Uitgepakte extensie laden"
5. Selecteer je `screenshot-extensie` map

Je extensie verschijnt nu in Chrome. Klik op het puzzelstukje rechtsboven om hem vast te zetten.

**Stap 5: Testen met Claude**

Ga naar een willekeurige website. Klik op je extensie-icoontje. Open claude.ai en druk Ctrl+V (Windows) / Cmd+V (Mac) in het chatvenster. Het screenshot staat er direct in. Typ erbij: "Wat zie je op dit screenshot?"

**Checklist:**
- [ ] De extensie is geladen in Chrome
- [ ] De screenshot knop werkt en kopieert naar clipboard
- [ ] Ik heb het screenshot in Claude geplakt en een vraag gesteld
- [ ] De download-als-PNG knop werkt

---

### Les 2.4 — Je extensie mooier maken
**Duur:** ~18 minuten | **Type:** Design + CSS les

**Wat je leert:**
- CSS gebruiken om je extensie er professioneel uit te laten zien
- Kleuren, lettertypen en layout aanpassen
- Hoe je een icoontje toevoegt aan je extensie

**Lesinhoud:**

Een werkende extensie is stap één. Een extensie die er professioneel uitziet, is stap twee. Klanten betalen meer voor tools die er goed uitzien. Dit is een investering van 30 minuten die je prijs kan verdubbelen.

**CSS basics voor extensies:**

Extensie-popups zijn kleine HTML pagina's. Alles wat je in gewone websites doet met CSS, werkt hier ook. Maar er zijn een paar regels:

- Breedte: maximaal 800px (Chrome knipt af), standaard 300-400px
- Hoogte: wordt automatisch bepaald door de inhoud
- Gebruik geen `position: fixed` — dat werkt raar in popups

**Claude vragen om een redesign:**

> "Mijn Chrome extensie screenshot-tool ziet er basic uit. Redesign de popup.html en CSS zodat het er professioneel uitziet. Gebruik een donker kleurenschema met paarse accenten. Voeg een laad-animatie toe terwijl de screenshot wordt gemaakt. Maak het modern en clean, vergelijkbaar met een SaaS product. Behoud alle bestaande functionaliteit."

**Een icoontje toevoegen:**

Ga naar emojipng.com of gebruik een gratis icon site zoals flaticon.com. Download een 128x128px PNG en sla op als `icon.png` in je extensie map.

Voeg toe aan manifest.json:
```json
"icons": {
  "16": "icon.png",
  "48": "icon.png",
  "128": "icon.png"
}
```

**Checklist:**
- [ ] Mijn extensie heeft een professioneel ontwerp
- [ ] Er is een icoontje toegevoegd
- [ ] Ik kan uitleggen hoe ik CSS gebruik in een extensie

---

### Les 2.5 — Andere extensies die je nu kunt bouwen
**Duur:** ~15 minuten | **Type:** Inspiratieles + mini-projecten

**Wat je leert:**
- Vier extensies die je direct kunt bouwen na deze module
- Hoe je de screenshot-structuur hergebruikt voor nieuwe tools
- Welke extensies het best verkopen aan klanten

**Lesinhoud:**

Je hebt nu de basis. Hier zijn vier extensies die je vandaag kunt bouwen met exact dezelfde aanpak als de screenshot tool:

**1. Pomodoro Timer**
Een timer die 25 minuten werkt, 5 minuten pauze, en bijhoudt hoeveel sessies je hebt gedaan. Populair bij zelfstandigen en studenten.

Prompt voor Claude:
> "Bouw een Chrome extensie Pomodoro timer. 25 minuten werk, 5 minuten pauze. Visuele countdown. Geluidssignaal bij einde. Score bijhouden."

**2. Kleurenkopieerder**
Gebruiker klikt op een kleur op een website, extensie kopieert de hex-code naar klembord. Ideaal voor designers.

**3. Linkopslager**
Gebruiker klikt op een knop, huidige pagina-URL wordt opgeslagen in een lijstje. Met exporteer-naar-CSV optie. Geweldig voor researchers.

**4. Tekst-naar-HOOFDLETTERS**
Gebruiker plakt tekst, kiest HOOFDLETTERS / kleine letters / Eerste Letter Groot. Klinkt triviaal — maar mensen willen het.

**5. Aangepaste Nieuwe Tab**
Vervangt de standaard nieuwe tab met bedrijfslogo, links naar interne tools, en motiverende quote van de dag. Populair bij kleine bedrijven.

**Voor elk van deze geldt:**
- Gebruik de screenshot-extensie map als startpunt
- Vraag Claude om de aanpassingen
- Laad opnieuw in Chrome

**Welke extensies verkopen het best?**

In volgorde van populariteit bij MKB-klanten:
1. Aangepaste nieuwe tab (persoonlijk, zichtbaar, goedkoop te bouwen)
2. Data-extractietools (bespaart hen tijd)
3. Integraties met hun bestaande software

**Checklist:**
- [ ] Ik heb een tweede extensie gebouwd (naar keuze)
- [ ] Ik weet welke extensies commercieel interessant zijn
- [ ] Ik kan de basisstructuur reproduceren zonder de les te raadplegen

---

# MODULE 3 — Gevorderde Tools (PREMIUM)
## "Van hobby naar professioneel product"

> **Doel:** De student bouwt tools met externe data, API-koppelingen, en een echte gebruikersinterface — producten die er als professionele software uitzien.

---

### Les 3.1 — Werken met API's: data ophalen van het internet
**Duur:** ~20 minuten | **Type:** Conceptles + praktijk

**Wat je leert:**
- Wat een API is en hoe je er data uit haalt
- Je eerste API-koppeling bouwen (gratis weer-API)
- JSON begrijpen en verwerken

**Lesinhoud:**

Tot nu toe waren je tools zelfstandig — ze werkten alleen met wat de gebruiker invoerde. Nu gaan we verder: tools die verbinding maken met het internet en echte data ophalen.

Een API (Application Programming Interface) is een "deur" die websites openzetten zodat andere software hun data kan ophalen. Het weerbericht op je telefoon komt van een API. De koers van bitcoin op een dashboard komt van een API. De meeste nuttige tools werken met API's.

**Je eerste API-koppeling: OpenWeatherMap**

OpenWeatherMap biedt een gratis API die weerdata geeft voor elke stad.

Stap 1: Ga naar openweathermap.org en maak een gratis account aan. Je krijgt een API-sleutel — een lange code die werkt als je wachtwoord voor de API.

Stap 2: Vraag Claude om een weertool te bouwen:

> "Bouw een Python script dat de OpenWeatherMap API gebruikt. De gebruiker voert een stadsnaam in. Het script haalt de huidige temperatuur, luchtvochtigheid, en weerbeschrijving op en toont dit netjes in de terminal. Gebruik de gratis API (api.openweathermap.org/data/2.5/weather). Ik heb al een API-sleutel. Leg elke stap uit."

Stap 3: Voeg je API-sleutel toe aan het script op de plek die Claude aangeeft.

**Wat je hebt geleerd:**

- API-keys zijn privé — deel ze nooit publiek
- JSON is de taal die API's spreken — het ziet eruit als een woordenboek
- Claude kan elke API koppelen als jij hem de documentatie geeft

**Checklist:**
- [ ] Ik heb een OpenWeatherMap account en API-sleutel
- [ ] De weertool werkt in de terminal
- [ ] Ik begrijp wat JSON is

---

### Les 3.2 — Een webinterface bouwen met HTML/CSS/JavaScript
**Duur:** ~30 minuten | **Type:** Praktijkproject

**Wat je leert:**
- De weertool omzetten naar een echte webpagina
- Basisprincipes van een professionele UI
- Bestanden openen in de browser

**Lesinhoud:**

Een terminal-tool is goed voor jezelf. Maar als je iets aan een klant wilt laten zien, wil je een webpagina. In deze les bouwen we een HTML-versie van de weertool die er als een echte app uitziet.

Vraag Claude:

> "Bouw een complete HTML/CSS/JavaScript webpagina die werkt als een weerapp. Gebruik de OpenWeatherMap API. De pagina moet: een zoekbalk hebben voor een stadsnaam, een zoekknop, en de resultaten netjes tonen met iconen voor de weerconditie. Gebruik een modern, gradient-achtergrond ontwerp met witte kaarten voor de data. Alles in één HTML bestand. Voeg ook foutafhandeling toe als de stad niet bestaat."

Sla op als `weer-app.html` en open in je browser (dubbelklik op het bestand).

**Checklist:**
- [ ] De weerapp werkt als HTML pagina in de browser
- [ ] Het ontwerp ziet er professioneel uit
- [ ] Foutmeldingen worden netjes getoond

---

### Les 3.3 — Data opslaan: werken met bestanden en lokale opslag
**Duur:** ~22 minuten | **Type:** Technische les + praktijk

**Wat je leert:**
- Data opslaan in een bestand (JSON/CSV)
- LocalStorage gebruiken in browser-tools
- Een eenvoudige "database" bouwen zonder echte database

**Lesinhoud:**

Tools worden pas echt nuttig als ze dingen onthouden. In deze les leren we twee manieren om data op te slaan: bestanden (voor Python tools) en LocalStorage (voor browser tools).

**Methode 1: Bestanden opslaan met Python**

Vraag Claude:

> "Breid de factuurcalculator uit module 1 uit. Voeg een optie toe om alle facturen op te slaan in een JSON bestand (facturen.json). Voeg ook een optie toe om alle opgeslagen facturen te tonen, gesorteerd op datum. Leg uit hoe het JSON formaat werkt."

**Methode 2: LocalStorage in browser tools**

LocalStorage is een mini-opslagruimte in de browser. Het blijft bewaard ook na het sluiten van de browser.

Vraag Claude:

> "Voeg aan mijn screenshot Chrome extensie een geschiedenis toe. Bewaar de laatste 10 gemaakte screenshots als miniatuur in LocalStorage met timestamp. Toon een tabblad 'Geschiedenis' in de extensie. Leg uit hoe LocalStorage werkt."

**Checklist:**
- [ ] Factuurcalculator slaat data op in JSON
- [ ] Screenshot extensie heeft een geschiedenis via LocalStorage
- [ ] Ik begrijp het verschil tussen de twee methoden

---

### Les 3.4 — Automatisering: taken uitvoeren zonder tussenkomst
**Duur:** ~25 minuten | **Type:** Gevorderd project

**Wat je leert:**
- Geplande taken bouwen (scripts die automatisch draaien)
- Een dagelijkse e-mailrapportage bouwen
- Automatiseringsscripts inplannen op Windows en Mac

**Lesinhoud:**

De meest waardevolle tools zijn tools die werken terwijl jij slaapt. Automatisering is waar het echte geld zit — bedrijven betalen goed voor scripts die hen tijd besparen.

**Project: Dagelijkse weersrapportage per e-mail**

We bouwen een Python script dat elke ochtend automatisch het weerbericht naar een e-mailadres stuurt.

Vraag Claude:

> "Bouw een Python script dat automatisch een dagelijkse weersrapportage stuurt via e-mail. Gebruik de OpenWeatherMap API voor het weer van een ingestelde stad. Gebruik smtplib om een e-mail te sturen via Gmail (met App Password). De e-mail moet HTML zijn met een nette opmaak: stad, temperatuur, weerbeschrijving, en een advies (jas nodig? paraplu mee?). Leg ook uit hoe ik dit automatisch dagelijks kan laten draaien."

**Het script inplannen:**

Windows (Taakplanner):
- Zoek op "Taakplanner" in het startmenu
- Nieuwe eenvoudige taak aanmaken
- Stel de tijd in en wijs je Python script aan

Mac (cron):
Vraag Claude:
> "Hoe stel ik een cron job in op Mac om mijn Python script elke ochtend om 8:00 te draaien?"

**Checklist:**
- [ ] Het e-mailscript werkt handmatig
- [ ] Het script is ingepland voor automatische uitvoering
- [ ] Ik kan dit concept uitleggen aan een potentiële klant

---

### Les 3.5 — Je toolkit: de 10 meest verkochte tools
**Duur:** ~20 minuten | **Type:** Strategieles + templates

**Wat je leert:**
- De 10 tools die het meest worden gevraagd door kleine bedrijven
- Hoe je een tool snel kunt bouwen op basis van een template
- Wat je voor elke tool kunt vragen

**Lesinhoud:**

Op basis van wat kleine bedrijven het meest nodig hebben, zijn dit de 10 tools die je kunt bouwen en verkopen:

**Tier 1 — Eenvoudig (€150-€500):**

1. **Factuurcalculator** — al gebouwd! Aanpassen voor elke klant
2. **Adressenextractor** — kopieert contactinfo van websites naar Excel
3. **Wachtwoordgenerator** — veilige wachtwoorden voor intern gebruik
4. **Kleurenpalette-tool** — huisstijlkleuren snel kopiëren

**Tier 2 — Gemiddeld (€500-€1.500):**

5. **Voorraad-tracker** — bijhouden van producten in een simpel systeem
6. **Offertetool** — klant vult in, tool genereert PDF offerte
7. **URL-checker** — controleert of links op een website nog werken
8. **Tijdregistratie-dashboard** — overzicht van uren per project per klant

**Tier 3 — Gevorderd (€1.500-€4.000):**

9. **Lead scraper** — haalt contactgegevens op van websites in een niche
10. **Rapportage-automatisering** — trekt data uit meerdere bronnen en maakt wekelijks rapport

**Hoe je elke tool snel bouwt:**

1. Kies een tool uit de lijst
2. Vraag Claude: "Bouw [tool naam] als Python script / Chrome extensie / HTML webpagina voor een klein bedrijf in [branche]. Maak het simpel en professioneel."
3. Pas aan op basis van wat de klant specifiek wil
4. Lever op

**Checklist:**
- [ ] Ik ken de 10 meest verkochte tools
- [ ] Ik heb een van de Tier 1 tools gebouwd
- [ ] Ik weet wat ik voor elke tier kunt vragen

---

# MODULE 4 — Verkopen aan Klanten (PREMIUM)
## "Van tool naar inkomen"

> **Doel:** De student vindt zijn eerste betalende klant, levert professioneel op, en heeft een systeem om herhaaldelijk nieuwe klanten te vinden.

---

### Les 4.1 — Positionering: wat jij aanbiedt en aan wie
**Duur:** ~18 minuten | **Type:** Strategieles

**Wat je leert:**
- Hoe je jezelf positioneert als "AI tools specialist"
- Welke doelgroep het meest winstgevend is om te benaderen
- Hoe je je dienst uitlegt in taal die klanten begrijpen

**Lesinhoud:**

Je kunt nu tools bouwen. Maar als je potentiële klanten zegt "ik bouw Python scripts en Chrome extensies", kijken ze je glazig aan. Je moet het vertalen naar wat zij begrijpen: resultaat.

**Hoe je het niet zegt:**
> "Ik bouw tools met Python en VS Code, geautomatiseerde scripts, API-koppelingen, en Chrome extensies met JavaScript."

**Hoe je het wel zegt:**
> "Ik bouw kleine software-tools die repetitieve taken automatiseren. Denk aan: je medewerker hoeft niet meer elke dag handmatig data te kopiëren — een tool doet dat in één klik. Ik bouw dat soort dingen voor kleine bedrijven."

**Je doelgroep:**

De beste klanten voor jou zijn kleine bedrijven (5-50 medewerkers) die:
- Veel handmatig werk doen in Excel of e-mail
- Geen eigen IT-afdeling hebben
- Budget hebben (geen zzp'ers zonder personeel)
- In een niche zitten: makelaars, kappers, installateurs, accountants, restaurants

**Je aanbod:**

Houd het simpel. Bied drie dingen aan:
1. **Standaard tool** (€200-€500): een bestaande tool aanpassen voor hun situatie
2. **Custom tool** (€500-€1.500): een tool op maat bouwen voor hun specifieke probleem
3. **Onderhoud** (€50-€100/maand): de tool up-to-date houden en kleine aanpassingen

**Checklist:**
- [ ] Ik kan mijn dienst uitleggen in twee zinnen
- [ ] Ik weet welke doelgroep ik ga benaderen
- [ ] Ik heb mijn drie aanbiedingen bepaald

---

### Les 4.2 — Je eerste klant vinden
**Duur:** ~22 minuten | **Type:** Acquisitie-strategie

**Wat je leert:**
- De drie snelste manieren om je eerste klant te vinden
- Hoe je een outreach bericht schrijft dat antwoord krijgt
- Hoe je een gratis "pilot" aanbiedt zonder jezelf tekort te doen

**Lesinhoud:**

Je eerste klant is het moeilijkst. Daarna wordt het makkelijker — elke tevreden klant levert referrals op. Maar die eerste moet je actief zoeken.

**Methode 1: Jouw netwerk**

De snelste manier. Stuur dit bericht naar 10 mensen in je netwerk:

> "Hé [naam], ik ben bezig met iets nieuws. Ik bouw kleine software-tools voor bedrijven die helpen met automatisering en tijdsbesparing. Denk aan een tool die automatisch facturen aanmaakt, of een knop die data kopieert van website A naar systeem B. Ken jij iemand die zoiets zou willen — of loop je zelf ergens tegenaan? Geen verplichtingen, ik verken gewoon wat er leeft."

Dit is geen salesgesprek. Je vraagt om een gesprek. Gesprekken worden betalende klanten.

**Methode 2: LinkedIn directbenadering**

Zoek op LinkedIn naar eigenaren van kleine bedrijven in een specifieke niche. Stuur een verbindingsverzoek met notitie:

> "Ik zie dat je [bedrijf type] hebt. Ik bouw tools die [specifiek resultaat voor die branche] automatiseren. Zou je open staan voor een kort gesprek?"

Target: 5 berichten per dag. Verwacht 10-20% respons.

**Methode 3: Gratis pilot**

Ga naar een lokaal bedrijf (kapper, restaurant, winkel) en stel voor:

> "Ik bouw gratis een kleine tool voor jullie als ik het mag gebruiken als portfolio-project. Als jullie er blij mee zijn, betalen jullie niets. Als jullie willen dat ik het onderhoud of uitbrei, spreken we een bedrag af."

Dit kost jou 2-4 uur. Het levert je een referentie, portfolio, en vaak een betaalde opdracht op.

**Checklist:**
- [ ] Ik heb het netwerk-bericht verstuurd naar minimaal 5 mensen
- [ ] Ik heb mijn LinkedIn profiel bijgewerkt met mijn dienst
- [ ] Ik weet hoe ik een gratis pilot aanbied

---

### Les 4.3 — Het kennismakingsgesprek
**Duur:** ~20 minuten | **Type:** Verkoop + communicatie

**Wat je leert:**
- Hoe je een kennismakingsgesprek structureert
- De vijf vragen die je altijd stelt
- Hoe je ter plekke een prijs bepaalt

**Lesinhoud:**

Een klant wil met je praten. Goed. Dit is geen verkooppitch — dit is een gesprek. Jij luistert, stelt vragen, en kijkt of je kunt helpen.

**De structuur van een goed kennismakingsgesprek (30-45 min):**

**Deel 1 — Kennismaken (5 min):**
Vertel kort wie je bent en wat je doet. Eén minuut. Dan: "Maar vertel eens over jullie bedrijf."

**Deel 2 — Probleem begrijpen (15 min):**

Stel deze vijf vragen:
1. "Welke taken doen jullie elke dag/week die veel tijd kosten maar eigenlijk repetitief zijn?"
2. "Hoe doen jullie dat nu? Excel, e-mail, handmatig?"
3. "Als dat geautomatiseerd zou zijn, hoeveel tijd bespaar je dan per week?"
4. "Heb je eerder geprobeerd dit op te lossen? Wat is er mis gegaan?"
5. "Wat is voor jullie het ideale resultaat?"

**Deel 3 — Terugkoppeling (10 min):**

Vat samen wat je hebt gehoord:
> "Wat ik hoor is dat jullie elke maandag 3 uur besteden aan [taak] — jullie halen data uit [systeem A], zetten het over naar [systeem B], en sturen het op naar [persoon]. Klopt dat?"

Dan: "Ik denk dat ik hiervoor een tool kan bouwen die dat terugbrengt naar minder dan 10 minuten. Mag ik een dag nadenken en een voorstel sturen?"

**Deel 4 — Prijs bepalen:**

Je prijs is gebaseerd op de waarde die je levert, niet op je uren. Als een tool iemand 3 uur per week bespaart, is dat per jaar 150 uur. Tegen €25/uur is dat €3.750. Een tool van €600 is dan een no-brainer.

Vuistregel: vraag 20-30% van de jaarlijkse besparing.

**Checklist:**
- [ ] Ik ken de vijf vragen uit mijn hoofd
- [ ] Ik weet hoe ik een prijs berekent op basis van waarde
- [ ] Ik heb een gesprek gepland of gevoerd

---

### Les 4.4 — Levering en afronding
**Duur:** ~18 minuten | **Type:** Praktisch proces

**Wat je leert:**
- Hoe je een opdracht professioneel oplevert
- Wat je afspreekt voor onderhoud
- Hoe je een factuur stuurt en betaald krijgt

**Lesinhoud:**

Je hebt een klant, je hebt de tool gebouwd. Nu: professioneel opleveren.

**Stap 1: De tool documenteren**

Vraag Claude om een gebruikersinstructie te schrijven:
> "Schrijf een korte gebruikersinstructie (1 A4) voor een niet-technische gebruiker die [tool naam] gaat gebruiken. Leg stap voor stap uit hoe het werkt. Gebruik simpele taal, geen technisch jargon."

**Stap 2: Installatiegesprek plannen**

Plan 30 minuten met de klant om de tool samen te installeren en uit te leggen. Dit is niet optioneel — dit is waar klanten het vertrouwen krijgen dat ze de tool ook echt gaan gebruiken.

**Stap 3: Proefperiode afspreken**

> "Ik stel voor dat jullie de tool twee weken gebruiken. Als er iets niet werkt of als jullie iets missen, geef het door en ik pas het aan. Na twee weken doen we een korte check-in."

Dit kost jou weinig tijd en maakt klanten veel tevredener.

**Stap 4: Factuur sturen**

Gebruik een simpele factuurtemplate of dienst als Moneybird (NL). Vermeld:
- Je naam / bedrijfsnaam
- KVK nummer
- BTW nummer (als van toepassing)
- Beschrijving van de geleverde tool
- Bedrag
- Betalingstermijn (14 dagen is standaard)

**Stap 5: Referentie vragen**

Na de proefperiode:
> "Ik ben blij dat de tool goed werkt voor jullie. Zou je bereid zijn om een korte referentie te schrijven die ik op mijn website mag zetten? En ken je andere ondernemers die hier ook baat bij zouden hebben?"

**Checklist:**
- [ ] Ik heb een gebruikersinstructie gemaakt
- [ ] De installatieafspraak is gepland
- [ ] Ik weet hoe ik een professionele factuur stuur

---

### Les 4.5 — Schalen: van één klant naar tien
**Duur:** ~25 minuten | **Type:** Groeistrategie

**Wat je leert:**
- Hoe je van één project naar een doorlopend inkomen gaat
- Hoe je een simpele portfolio en website bouwt
- Hoe je je eerste €1.000/maand haalt

**Lesinhoud:**

Je hebt je eerste klant. Nu bouw je een systeem dat nieuwe klanten aantrekt zonder dat je elke keer vanaf nul begint.

**De drie pijlers van een duurzaam inkomen:**

**Pijler 1: Portfolio**

Na elke opdracht: maak een korte casestudy.
- Wat was het probleem?
- Wat heb je gebouwd?
- Wat is het resultaat? (uren bespaard, fouten verminderd, etc.)

Zelfs zonder getallen werkt dit:
> "Restaurant X had een handmatig reserveringssysteem. Ik bouwde een eenvoudige tool die reserveringen bijhoudt en automatisch bevestigingsmails stuurt. De eigenaar besteedt er nu 30 minuten per week minder aan."

**Pijler 2: Online aanwezigheid**

Bouw een simpele portfolio-pagina. Vraag Claude:
> "Bouw een professionele HTML portfolio pagina voor een freelance AI tools developer. Sectie: over mij (kort), diensten (3 aanbiedingen met prijs), portfolio (3 casestudies als kaarten), contact formulier. Modern ontwerp, donkerblauw kleurenschema."

Host gratis op GitHub Pages of Vercel.

**Pijler 3: Herhalende inkomsten**

De heilige graal: klanten die elke maand betalen.

Maak van elke tool een abonnement:
- **Basis**: tool werkt as-is (eenmalig betaald)
- **Onderhoud**: €50/maand — updates, bugs fixen, kleine aanpassingen
- **Premium**: €150/maand — onderhoud + maandelijks een nieuwe functie + prioriteit support

Met 7 klanten op het onderhoudspakket heb je €350/maand passief inkomen naast je projecten.

**Je eerste €1.000/maand plan:**

Maand 1: 1 gratis pilotproject → referentie
Maand 2: 2 betaalde projecten (€300 + €500) + 1 onderhoud (€75) = €875
Maand 3: 1 project (€500) + 3 onderhoud (€225) = €725 + nieuw project inkomen
Maand 4+: groeiende onderhoud-inkomsten + nieuwe projecten

**Checklist:**
- [ ] Ik heb mijn eerste casestudy geschreven
- [ ] Mijn portfolio pagina is online
- [ ] Ik heb een onderhoudspakket aangeboden aan mijn eerste klant

---

# BONUSMATERIAAL

## Bonus 1 — Prompt Bibliotheek: 20 Kant-en-Klare Prompts

Gebruik deze prompts direct met Claude voor veelvoorkomende tools:

**1. Contactformulier verwerker**
> "Bouw een HTML contactformulier dat e-mails stuurt via EmailJS. Velden: naam, e-mail, onderwerp, bericht. Stijl: professioneel wit/blauw. Validatie: alle velden verplicht, e-mail formaat check."

**2. Prijscalculator**
> "Bouw een HTML prijscalculator voor een [branche] bedrijf. Gebruiker selecteert diensten uit een dropdown, vult hoeveelheid in, en ziet live het totaalbedrag. Voeg BTW-optie toe (21%). Exporteer als PDF knop."

**3. Kilometerregistratie**
> "Bouw een Python script voor kilometerregistratie voor een zzp'er. Invoer: datum, van, naar, zakelijk/privé, kilometers. Opslaan in CSV. Maandoverzicht genereren. Exporteren naar Excel-formaat."

**4. Social media post planner (CSV)**
> "Bouw een Python script dat een CSV met geplande social media posts leest (datum, platform, tekst, link) en per dag een overzicht toont van wat er geplaatst moet worden."

**5. Wachtwoord generator**
> "Bouw een Chrome extensie wachtwoordgenerator. Gebruiker stelt in: lengte (8-32), hoofdletters, kleine letters, cijfers, symbolen. Genereer knop. Kopieer naar klembord knop. Toon sterkte-indicator."

*(Zie volledige prompt bibliotheek in het platform voor alle 20 prompts)*

---

## Bonus 2 — Foutmeldingen Woordenboek

De meest voorkomende foutmeldingen en hoe je ze oplost:

**"ModuleNotFoundError: No module named 'X'"**
Oplossing: `pip install X` in de terminal

**"SyntaxError: unexpected indent"**
Oplossing: Python is gevoelig voor tabs vs spaties. Vraag Claude: "Fix the indentation in this Python code: [plak code]"

**"CORS error" (bij web tools)**
Oplossing: Je probeert data op te halen van een andere website. Vraag Claude: "Hoe los ik een CORS error op bij het ophalen van [API naam] in JavaScript?"

**"Uncaught ReferenceError: X is not defined"**
Oplossing: Je gebruikt een variabele die nog niet bestaat. Kopieer de volledige foutmelding naar Claude.

**"KeyError: 'X'" (Python)**
Oplossing: Je probeert een sleutel op te halen uit een dictionary die er niet in zit. Stuur de foutmelding + je code naar Claude.

---

## Bonus 3 — Checklists voor Klantgesprekken

**Voor het gesprek:**
- [ ] Ik weet wat het bedrijf doet
- [ ] Ik heb drie voorbeeldvragen voorbereid
- [ ] Ik weet globaal wat ik kan bouwen en voor hoeveel

**Tijdens het gesprek:**
- [ ] Ik heb de vijf vragen gesteld
- [ ] Ik heb het probleem samengevat en bevestigd gekregen
- [ ] Ik heb beloofd een voorstel te sturen (niet direct prijs)

**Na het gesprek:**
- [ ] Voorstel gestuurd binnen 24 uur
- [ ] Prijs gebaseerd op waarde (niet uren)
- [ ] Betaling 50% vooraf afgesproken

---

*Dit cursusmateriaal is eigendom van Clavify. Niet voor verdere verspreiding.*
