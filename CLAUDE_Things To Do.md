# Things To Do

> Verknüpft mit: [[CLAUDE]] · [[GOALS]] · [[03 Projects/Instagram Transkription/CLAUDE_Instagram Transkription|Instagram Transkription]]

## Worum geht's

Installierbare Web-App (PWA) für Checklisten aus Instagram-Reels mit konkreten Handlungsempfehlungen (Habits, Challenges, To-dos). Zweisprachig (DE/EN, umschaltbar), Haken bleiben gespeichert.

Startseite zeigt alle Listen als Karten mit Fortschritt. Jede Liste ist eine eigene Unterseite (`#/list/<id>`) mit Checkbox-Items.

## Tech-Stack

- Reines HTML/CSS/JS, kein Build-Schritt (wie bei Uptrail/Webentwicklung-Projekt gewünscht)
- `data.js` — alle Listen bilingual, hier werden neue Listen ergänzt
- `app.js` — Rendering, Hash-Routing, localStorage für Sprache + Haken
- PWA: `manifest.json` + `sw.js` + `icon.svg` → installierbar auf Handy/Desktop, wie Polymath
- Hosting: GitHub Pages, Repo **öffentlich** (privat läuft auf Free-Plan nicht mit Pages)

## Repo & Live-URL

- GitHub: `felixsf27/things-to-do` (öffentlich)
- Live: https://felixsf27.github.io/things-to-do/

## Was Claude hier tun soll

- Neue Checklisten aus `Instagram Transkription` hier als Einträge in `data.js` ergänzen (bilingual, gleiche Struktur wie bestehende Einträge)
- Nach jeder Änderung: committen + pushen (wie bei Uptrail — nicht vorher fragen)
- GitHub Pages braucht nach Push meist 1-2 Minuten zum Neu-Deployen

## Sicherheit

- Kein Login, kein Backend, keine Tokens — bewusst so gewollt (Felix' Vorgabe)
- Service Worker: Network-First (Updates kommen automatisch an, kein Neuinstallieren nötig)
- Haken hängen am Item-Text (Hash), nicht an der Position — robust gegen Umsortierung in `data.js`
- Alle dynamischen Texte werden vor dem Einfügen ins HTML escaped (`esc()` in `app.js`), Links nur wenn http/https (`safeUrl()`) — Schutz gegen XSS, falls `data.js` mal Sonderzeichen enthält

## Status

08.07.2026: Erste Version live. 4 Listen aus den ersten 4 transkribierten Reels (Genius Habits, Cool Bets, Uncomfortable Hobbies, Confidence Habits). Repo musste öffentlich gestellt werden (GitHub Free unterstützt kein Pages auf privaten Repos). Danach zwei Härtungs-Updates: Service Worker auf Network-First (Auto-Update) und XSS-Escaping nach einem Instagram-Reel über Login-Sicherheitslücken (Reel selbst nicht als Checkliste übernommen, nur als Anlass für den Sicherheits-Check genutzt).
