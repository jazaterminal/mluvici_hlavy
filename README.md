# Hlášky – GitHub Pages soundboard

Statický responzivní web pro GitHub Pages. Nepotřebuje backend, databázi ani build.

## Jak přidat audio

1. Vlož MP3 do složky `audio/`.
2. Do `sounds.js` přidej přesný název souboru, například:

```js
"novahlaska.mp3",
```

Text dlaždice se vytvoří automaticky z názvu souboru bez `.mp3`.

## Aktuální seznam

Projekt je připraven pro 27 MP3 souborů uvedených v `sounds.js`.

Důležité: GitHub rozlišuje velká a malá písmena. Název v `sounds.js` proto musí přesně odpovídat názvu nahraného souboru.

U souborů s mezerami a diakritikou je vhodné po nahrání na GitHub zkontrolovat, že se název nezměnil. macOS může některé znaky s diakritikou interně ukládat v jiné Unicode normalizaci.

## GitHub Pages

1. Vytvoř veřejný repository.
2. Nahraj celý obsah této složky do kořene repository.
3. `Settings` → `Pages`.
4. `Build and deployment` → `Deploy from a branch`.
5. Branch `main`, složka `/ (root)`.
6. Ulož.

## Lokální test

Nestačí vždy otevřít `index.html` dvojklikem. Nejjednodušší test přes lokální HTTP server:

```bash
python3 -m http.server 8000
```

Potom otevři `http://localhost:8000`.
