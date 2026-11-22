# Be One Team Opportunity — pubblicazione automatica

Progetto **indipendente da Supporto 3.0**.

## Hosting

Cloudflare Pages, progetto esistente: **beoneteamopportunity**. Indirizzo: https://beoneteamopportunity.pages.dev/

- `/` — Diegos Botti, con video personale.
- `/luca` — Luca Cirlini, numero +39 349 476 2908, senza la biografia o il video di Diegos.
- Tutti i dati dei referenti si trovano in `site/members.js`.
- Nessun modulo: WhatsApp e chiamata diretti.

## Pubblicazione automatica (mantenere l'indirizzo attuale)

Questo sito è già ospitato come progetto **Direct Upload**. Cloudflare non permette la conversione in Git integration nello stesso progetto. Si usa quindi **GitHub Actions + Wrangler** per pubblicare in automatico sul progetto esistente, senza cancellarlo.

1. Creare un repository GitHub nuovo e separato, per esempio `diegosbotti-hub/be-one-team-opportunity`, e caricarvi **tutto il contenuto di questa directory**.
2. Su Cloudflare creare un token con permesso **Account → Cloudflare Pages → Edit** limitato all'account pertinente, se possibile.
3. Impostare in GitHub → repository → Settings → Secrets and variables → Actions i segreti:
   - `CLOUDFLARE_API_TOKEN`: token (non salvarlo nel codice né inviarlo in chat).
   - `CLOUDFLARE_ACCOUNT_ID`: ID dell'account Cloudflare.
4. Dal successivo push su `main`, GitHub Actions verifica i riferimenti e pubblica `site/` nel progetto **beoneteamopportunity**. Se non sono presenti i segreti, la verifica funziona ma la pubblicazione è sospesa.

Non caricare questo archivio nella directory di Supporto 3.0. Prima di distribuire nuovi contatti verificare i dati e il consenso alla pubblicazione.

## Controlli

`node scripts/validate.cjs`

Fonti: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/

## Backup

Cartella Google Drive dedicata: https://drive.google.com/drive/folders/1mz0pE7tSjG0xMiJJRVw_Km50gf2CaWMn
