# BE ONE TEAM Opportunity

Piattaforma web del team. La pagina madre è quella personale di Diegos; i membri hanno varianti personalizzate. I contenuti e lo stile condivisi vanno mantenuti coerenti, senza sovrascrivere nome e contatti dei membri.

## Sito ufficiale — Cloudflare Pages

- Diegos (pagina madre): https://be-one-team-opportunity.pages.dev/
- Luca Cirlini: https://be-one-team-opportunity.pages.dev/luca/
- Sara Dacci: https://be-one-team-opportunity.pages.dev/sara/
- Moira Laudato: https://be-one-team-opportunity.pages.dev/moira/
- Renato Bellicini: https://be-one-team-opportunity.pages.dev/renato/
- Francesco Favaretto: https://be-one-team-opportunity.pages.dev/francesco/

**Non utilizzare il vecchio indirizzo GitHub Pages**: la sua pubblicazione è stata disattivata e il workflow `.github/workflows/publish.yml` non va riattivato. Conservare il repository, che contiene il codice e lo storico, senza confonderlo con il servizio di hosting.

## Struttura dei file

- `site/index.html`: pagina madre Diegos (biografia e video personali, non trasferibili alle varianti).
- `site/<slug>/index.html`: variante di ciascun membro, con nome e contatti personalizzati.
- `site/luca.html`: compatibilità con vecchio percorso Luca.
- `site/members.js`: elenco dei referenti autorizzati; dati e recapiti.
- `site/app.js`: impostazione dinamica del referente dalle varianti URL.
- `site/styles.css`: stile comune, versione V5.12.
- `site/assets/`: immagini e altri materiali.
- `scripts/validate.cjs`: controlli statici di coerenza di tutte le pagine.

## Procedura di aggiornamento

Verificare la versione più recente del ramo `main`, apportare modifiche mirate e aggiornare la pagina madre e le varianti interessate. Per un nuovo membro, registrare il nome, il numero e uno slug univoco in `members.js`, poi creare `site/<slug>/index.html` a partire da un'altra variante, non dalla homepage Diegos.

Verificare i recapiti nei pulsanti WhatsApp e chiamata, il funzionamento della pagina e la disponibilità della versione pubblicata su Cloudflare dopo ogni commit. Non dichiarare conclusa la pubblicazione senza controllo dell'URL reale.

## Backup

https://drive.google.com/drive/folders/1mz0pE7tSjG0xMiJJRVw_Km50gf2CaWMn

Il repository `supporto-3-0` è indipendente e non va modificato nell'ambito di questo progetto.
