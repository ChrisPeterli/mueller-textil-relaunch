# Johann Müller AG — Website Relaunch

Modernisierte, statische One-Page-Website als Ersatz-Vorschlag für [mueller-textil.ch](https://www.mueller-textil.ch/de/). Reines HTML/CSS/JS, kein Build-Schritt nötig — läuft direkt auf GitHub Pages.

## Struktur

```
index.html              Gesamte Seite (Hero, Über uns, Produkte, Zertifikate, Kontakt)
css/style.css           Styles inkl. Corporate-Design-Variablen (:root)
js/script.js            Mobile-Navigation, aktuelles Jahr im Footer
assets/images/          Logo, Hero-Hintergrundbild
assets/certificates/    OEKO-TEX®, GOTS, bluesign® — je als PDF + Vorschaubild
```

## Corporate-Farben

Editorial-technische Palette, dokumentiert als CSS-Variablen in `css/style.css`:

| Variable | Wert | Verwendung |
|---|---|---|
| `--gold` | `#ffe701` | Akzentfarbe (Buttons, Marker, Icons) |
| `--gold-light` | `#fff066` | Hover-Zustand auf Gold |
| `--gold-dark` | `#a68a00` | Text auf hellem Grund (Eyebrows, Zertifikatsdaten) |
| `--ink` | `#14151a` | dunkle Sektionen, Fliesstext |
| `--ink-700` / `--ink-800` | `#2a2d38` / `#1e2028` | Hover- bzw. Kartenhintergrund auf Dunkel |
| `--paper` | `#faf8f4` | heller Grundhintergrund |
| `--paper-dim` | `#f2efe8` | neutraler Hintergrund für alternierende Sektionen |

## Inhalte

Texte, Firmengeschichte, Produkt-/Dienstleistungsbeschreibungen, Kontaktdaten und Zertifikate wurden von der Originalseite (deutsche Version) übernommen und redaktionell für ein modernes One-Page-Layout aufbereitet.

## Lokal testen

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```
