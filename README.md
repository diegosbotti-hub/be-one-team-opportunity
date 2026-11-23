# BE ONE TEAM Opportunity

Web app commerciale del team: **stesso sistema di pubblicazione di Supporto 3.0 (GitHub Pages)**, con repository completamente separato.

## Indirizzi ufficiali

- Diegos: https://diegosbotti-hub.github.io/be-one-team-opportunity/
- Luca Cirlini: https://diegosbotti-hub.github.io/be-one-team-opportunity/luca/

Ogni membro ha una pagina personale, ma la landing e il materiale sono gestiti centralmente nel medesimo sito.

## Gestione

- `site/index.html`: homepage Diegos (biografia e video solo per lui)
- `site/luca/index.html`: pagina Luca (nome e contatti Luca, senza video e biografia di Diegos)
- `site/members.js`: elenco referenti, numeri e ruoli
- `site/app.js`: gestione degli indirizzi e dei collegamenti WhatsApp/telefono
- `site/assets/`: materiali grafici
- `scripts/validate.cjs`: verifiche prima della pubblicazione
- `.github/workflows/publish.yml`: distribuzione **GitHub Pages** automatica a ogni push sul branch `main`

## Aggiornamenti

Ogni modifica al ramo `main` esegue prima i controlli automatici, poi aggiorna lo stesso sito GitHub Pages. Non servono token Cloudflare o caricamenti ZIP.

Per un nuovo membro, aggiungere i dati confermati in `members.js` e creare una cartella `site/<slug>/index.html` con i riferimenti relativi corretti. Verificare sempre identità, recapito, WhatsApp, testi visibili e la risoluzione degli asset.

## Backup

https://drive.google.com/drive/folders/1mz0pE7tSjG0xMiJJRVw_Km50gf2CaWMn

## Legacy

Il vecchio indirizzo `beoneteamopportunity.pages.dev` era ospitato su Cloudflare. Da ora la pubblicazione e manutenzione operativa avvengono **solo** su GitHub Pages. Non condividere il vecchio link come aggiornato.

**Il repository `supporto-3-0` non deve essere modificato da questo progetto.**
