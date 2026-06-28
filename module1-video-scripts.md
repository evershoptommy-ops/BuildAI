# Module 1 — Video Scripts
Geoptimaliseerd voor schermopname + AI stem (ElevenLabs).
Spreektempo: rustig, ~130 woorden per minuut. Totale lengte per les: 2–4 minuten.

---

## Les 1-1 — Welkom bij Clavify
**Schermopname:** Landing page / dashboard van Clavify

---

Welkom. Fijn dat je er bent.

Wat je vandaag gaat leren, is iets wat de meeste mensen niet doen. Ze gebruiken AI om een e-mail te schrijven, of een vraag te stellen. Jij gaat het anders doen.

Jij gaat AI gebruiken om software te maken. Echte software. Tools die bedrijven willen hebben — en waarvoor ze betalen.

En het mooie? Je hoeft geen programmeur te zijn. Je hebt geen technische achtergrond nodig. Wat je wel nodig hebt: nieuwsgierigheid, en de bereidheid om dingen uit te proberen.

De cursus bestaat uit vijf modules. De eerste twee zijn gratis — daar installeer je alles en bouw je je eerste echte tool. In de premium modules ga je verder met geavanceerde agents en leer je hoe je ze verkoopt aan klanten.

Elke les heeft een korte uitleg, een oefening, en een checklist. Doe de oefeningen. Dat is waar het echte leren gebeurt.

Klik op "Les voltooid" als je klaar bent, en we gaan naar de eerste stap.

---

## Les 1-2 — VS Code installeren
**Schermopname:** browser → code.visualstudio.com → download → installatie → VS Code openen → terminal openen

---

VS Code is je werkplaats. Het is een gratis programma van Microsoft waar je al je projecten in beheert. Het ziet er misschien ingewikkeld uit — maar je hebt maar een klein deel nodig.

Laten we beginnen.

Ga naar code.visualstudio.com. Je ziet een grote downloadknop. Klik op de versie voor jouw systeem — Windows, Mac, of Linux.

[scherm: downloadpagina]

Download het bestand en open het.

Op Windows: volg de installatiestappen en let op één ding — vink "Add to PATH" aan. Dat is belangrijk voor later.

Op Mac: sleep VS Code naar je Applications map.

[scherm: VS Code opent]

VS Code is open. Je ziet een welkomstscherm — sluit dat voor nu.

Kijk links: dat map-icoontje is je Explorer. Daar zie je straks je bestanden.

Bovenin de menubalk klik je op Terminal, dan New Terminal. Een zwart venster opent onderaan — dit is je terminal. Hier geef je opdrachten aan je computer.

Typ dit in je terminal:

mkdir clavify-projecten

En dan:

cd clavify-projecten

Je hebt nu een werkmap aangemaakt. Hier komen al je projecten te staan.

VS Code staat klaar. Vink de checklist af en ga naar de volgende les.

---

## Les 1-3 — Claude instellen
**Schermopname:** browser → claude.ai → account aanmaken → eerste prompt typen

---

Claude is je AI-partner. Maar de meeste mensen gebruiken het verkeerd.

Ze stellen vage vragen — en krijgen vage antwoorden.

Kijk naar dit voorbeeld.

Slechte vraag: "Maak een tool voor een restaurant."

Claude weet niet wat voor restaurant. Hij weet niet wat de tool moet doen. Hij weet niet voor wie het is. Het antwoord zal vaag zijn.

Goede vraag: "Ik bouw een Python script voor een restaurant in Amsterdam. Medewerkers voeren hun naam in aan het begin van de dag. Het script houdt bij hoeveel uur ze werken. Aan het einde van de week komt er een overzicht. Begin met de basisstructuur en leg elke stap uit."

Zie je het verschil? Context. Specificiteit. Richting.

Dat is de gouden regel van deze cursus.

[scherm: claude.ai]

Ga naar claude.ai en maak een gratis account aan. De gratis versie is genoeg om te starten.

Als je account klaar is, probeer dan deze oefenprompt:

"Ik ben een beginner die leert programmeren. Leg me in vijf stappen uit wat een Python script is en hoe het verschilt van een website."

Lees het antwoord. Claude legt het rustig uit. Dat is hoe jullie samenwerking gaat werken — jij vraagt, hij bouwt en uitlegt.

Checklist afvinken en door naar de volgende les.

---

## Les 1-4 — Node.js en Python installeren
**Schermopname:** nodejs.org → download → terminal → node --version → python.org → download → python --version

---

We gaan twee dingen installeren: Node.js en Python. Dit zijn de motoren achter de tools die je gaat bouwen. Je hoeft niet te weten hoe ze werken — alleen dat ze geïnstalleerd zijn.

Laten we beginnen met Node.js.

[scherm: nodejs.org]

Ga naar nodejs.org. Download de LTS versie — dat staat voor Long Term Support. Dit is de stabiele versie.

Installeer het zoals een normaal programma.

Als het klaar is, open je de terminal in VS Code en typ je:

node --version

Je ziet een versienummer — zoiets als v22.0.0. Dat betekent dat het werkt.

[scherm: python.org]

Nu Python. Ga naar python.org/downloads en download de nieuwste versie.

Let op als je Windows gebruikt: tijdens de installatie zie je onderaan een vinkje — "Add Python to PATH". Zet dat aan. Zonder dit werkt Python niet vanuit de terminal.

Na de installatie typ je in je terminal:

python --version

Weer een versienummer — Python staat klaar.

Als je een foutmelding krijgt, geen paniek. Kopieer de foutmelding precies zoals hij staat, ga naar Claude, en vraag:

"Ik probeer Python te installeren op Windows en krijg deze foutmelding: [plak de fout]. Wat moet ik doen?"

Claude lost het op.

Twee vinkjes op de checklist — en we gaan naar het beste deel.

---

## Les 1-5 — Je eerste tool bouwen
**Schermopname:** VS Code terminal → claude.ai → code kopiëren → nieuw bestand → plakken → python factuur.py uitvoeren

---

Nu gaan we iets échts bouwen.

We maken een factuurcalculator. Je vult je naam in, je uurtarief, en het aantal uren. Het script berekent het totaal inclusief BTW en slaat het op als een tekstbestand.

Simpel — maar echt. En je kunt het vandaag nog aan iemand laten zien.

[scherm: VS Code terminal]

Open de terminal in VS Code en typ:

mkdir factuur-tool
cd factuur-tool

Je hebt een nieuwe projectmap.

[scherm: claude.ai]

Ga nu naar Claude en stuur dit bericht — je kunt het kopiëren vanuit de les:

"Maak een Python script dat werkt als een eenvoudige factuurcalculator. De gebruiker voert via de terminal in: hun naam, het uurtarief in euro, en het aantal gewerkte uren. Het script berekent het subtotaal, voegt 21% BTW toe, en toont een nette factuuroverzicht. Voeg ook een optie toe om dit op te slaan als een .txt bestand. Geef me de complete code met commentaar bij elke stap."

[scherm: Claude antwoord]

Claude geeft je de volledige code. Kopieer alles.

[scherm: VS Code]

In VS Code: File → New File. Sla het op als factuur.py in je factuur-tool map.

Plak de code. Sla op met Control S.

Nu terug naar de terminal:

python factuur.py

[scherm: script draait]

Het script vraagt om je naam. Typ iets in. Uurtarief — zeg vijftig. Aantal uren — acht. Enter.

Je ziet een factuuroverzicht. Subtotaal, BTW, totaal. En de vraag: wil je het opslaan?

Je hebt zojuist je eerste werkende tool gebouwd — zonder één regel code zelf te schrijven.

Dat is wat Claude doet. Jij geeft de opdracht, hij bouwt het.

Vink de checklist af. Module één zit erop.
