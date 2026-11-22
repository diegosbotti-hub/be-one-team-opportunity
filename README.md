# BE ONE TEAM Opportunity

Landing page commerciale del team. Repository separato da `supporto-3-0`.

## URL

- Sito Cloudflare Pages esistente: https://beoneteamopportunity.pages.dev/
- Versione personale Luca: https://beoneteamopportunity.pages.dev/luca
- I percorsi diventano disponibili dopo un deployment Cloudflare riuscito.

## Struttura

- `site/index.html`: homepage Diegos.
- `site/luca.html`: versione Luca Cirlini.
- `site/members.js`: numeri, nomi e ruoli dei referenti.
- `site/app.js`: personalizzazione e link WhatsApp/telefono.
- `site/assets/`: immagini.
- `scripts/validate.cjs`: controlli.
- `.github/workflows/publish.yml`: test e distribuzione Cloudflare su ogni push a main.

## Stato della pubblicazione

Il repository GitHub e il workflow sono configurati. Per autorizzare il deployment sul progetto Cloudflare Pages Direct Upload già esistente è necessario **un solo segreto GitHub Actions**, `CLOUDFLARE_API_TOKEN`, con permessi Cloudflare Pages Edit sull'account che ospita `beoneteamopportunity`.

Creare il token in Cloudflare → My Profile → API Tokens (token ristretto all'account e al permesso Cloudflare Pages Edit). Inserirlo nel repository GitHub → Settings → Secrets and variables → Actions → New repository secret, con nome `CLOUDFLARE_API_TOKEN`. Non inserire mai il token nei file del repository, nei messaggi o in uno screenshot.

L'ID account Cloudflare è già configurato nel workflow. Quando il segreto sarà presente, il successivo push su `main` distribuirà `site/` con Wrangler nel progetto `beoneteamopportunity`, mantenendo lo stesso indirizzo.

**Attenzione:** un controllo GitHub Actions riuscito non equivale alla pubblicazione Cloudflare se manca il token. Verificare sempre il dominio e i contatti al termine.

## Controlli locali

```bash
node scripts/validate.cjs
```

## Backup

https://drive.google.com/drive/folders/1mz0pE7tSjG0xMiJJRVw_Km50gf2CaWMn

## Sviluppo

- Modificare soltanto questo repository per Be One Team; non toccare `supporto-3-0`.
- Verificare contatti, approvazioni e materiali prima della pubblicazione.
