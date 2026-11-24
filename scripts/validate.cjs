const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = path.join(__dirname, '..', 'site');
const load = p => fs.readFileSync(path.join(base,p),'utf8');
const index = load('index.html');
const luca = load('luca.html');
const lucaFolder = load('luca/index.html');
const saraFolder = load('sara/index.html');
const renatoFolder = load('renato/index.html');
const francescoFolder = load('francesco/index.html');
const marielaFolder = load('mariela/index.html');
const members = load('members.js');
const app = load('app.js');
const cssVersion = index.match(/href="styles\.css\?v=([0-9.]+)"/)?.[1];
assert(cssVersion, 'Versione CSS homepage mancante');
assert(index.includes('id="leaderProfile"'), 'La homepage deve mostrare il profilo di Diegos');
assert(index.includes('fyN9wLT_xPg'), 'Il video di Diegos deve restare nella homepage');
assert(luca.includes('id="teamMemberName">Luca Cirlini'), 'La pagina Luca deve mostrare Luca');
assert(luca.includes('wa.me/393494762908'), 'WhatsApp Luca errato');
assert(luca.includes('tel:+393494762908'), 'Telefono Luca errato');
assert(!luca.includes('17 anni di esperienza'), 'La biografia di Diegos non deve apparire in /luca');
assert(!luca.includes('fyN9wLT_xPg'), 'Il video di Diegos non deve apparire in /luca');
assert(members.includes("slug: 'luca'"), 'Slug Luca mancante');
assert(app.includes('memberByPath'), 'La selezione per percorso non e presente');
assert(app.includes("path === 'be-one-team-opportunity'"), 'Homepage GitHub Pages non riconosciuta');
assert(lucaFolder.includes('Luca Cirlini'), 'Pagina /luca/ assente');
assert(lucaFolder.includes('wa.me/393494762908'), 'WhatsApp /luca/ errato');
assert(lucaFolder.includes('tel:+393494762908'), 'Telefono /luca/ errato');
assert(lucaFolder.includes('src="../app.js"'), 'Percorso JS di /luca/ errato');
assert(lucaFolder.includes(`href="../styles.css?v=${cssVersion}"`), 'Percorso CSS di /luca/ errato');
assert(index.includes('organization__feature'), 'Griglia sezione 06 mancante nella homepage');
assert(lucaFolder.includes('organization__feature'), 'Griglia sezione 06 mancante nella pagina Luca');
for (const f of ['index.html', 'luca.html', 'luca/index.html', 'sara/index.html', 'renato/index.html', 'francesco/index.html', 'mariela/index.html']) {
  const html = load(f);
  assert(html.includes('organization__stat-offices'), 'Riquadro uffici mancante: ' + f);
  for (const address of ['Via Gramsci 5', 'Via Fratelli Manfredi 6', "Via Massimo D'Azeglio 9/B", 'Piazza del Mercato 11']) {
    assert(html.includes(address), 'Indirizzo ufficio mancante: ' + f + ' -> ' + address);
  }
  assert(!html.includes('I CENTRI DI RIFERIMENTO'), 'Vecchio blocco uffici duplicato: ' + f);
  assert(!html.includes('IL TUO REFERENTE BE ONE TEAM'), 'Etichetta referente da rimuovere: ' + f);
  assert(html.includes('organization__phone-large'), 'Numero grande accanto al nome mancante: ' + f);
  assert(html.includes(`styles.css?v=${cssVersion}`), 'Stile aggiornato non collegato: ' + f);
}
assert(lucaFolder.includes('id="teamMemberNumber" href="tel:+393494762908"'), 'Telefono Luca grande non collegato correttamente');
assert(index.includes('href="tel:+393476262757"'), 'Telefono Diegos mancante accanto al nome');

assert(members.includes("slug: 'sara'"), 'Slug Sara non registrato');
assert(members.includes("name: 'Dott.ssa Sara Dacci'"), 'Nome Sara non registrato');
assert(saraFolder.includes('id="teamMemberName">Dott.ssa Sara Dacci'), 'Nome Sara mancante in /sara/');
assert(saraFolder.includes('id="teamMemberNumber" href="tel:+393283720702"'), 'Numero Sara non corretto vicino al nome');
assert(saraFolder.includes('href="https://wa.me/393283720702"'), 'WhatsApp Sara non corretto');
assert(saraFolder.includes('href="tel:+393283720702"'), 'Telefono Sara non corretto');
assert(saraFolder.includes(`href="../styles.css?v=${cssVersion}"`), 'CSS Sara non collegato');
assert(saraFolder.includes('src="../app.js"'), 'JS Sara non collegato');
assert(!saraFolder.includes('Luca Cirlini'), 'Dati di Luca presenti in Sara');
assert(!saraFolder.includes('fyN9wLT_xPg'), 'Video Diegos presente in Sara');
assert(!saraFolder.includes('17 anni di esperienza'), 'Biografia Diegos presente in Sara');


assert(!lucaFolder.includes('17 anni di esperienza'), 'Biografia Diegos presente in /luca/');
assert(!lucaFolder.includes('fyN9wLT_xPg'), 'Video Diegos presente in /luca/');
for (const f of ['index.html', 'luca.html', 'luca/index.html']) {
  const html = load(f);
  const refs = [...html.matchAll(/(?:src|href)="((?:\.\.\/)?assets\/[^"?#]+|(?:\.\.\/)?(?:styles|app|members)\.(?:css|js))"/g)].map(x=>x[1]);
  for(const ref of refs) assert(fs.existsSync(path.resolve(base, path.dirname(f), ref)), `File mancante: ${f} -> ${ref}`);
}
for (const [slug, name, digits, shown, html] of [
  ['renato', 'Renato Bellicini', '393427408005', '342 740 8005', renatoFolder],
  ['francesco', 'Francesco Favaretto', '393478665605', '347 866 5605', francescoFolder],
  ['mariela', 'Mariela Quartararo', '393403617981', '340 361 7981', marielaFolder]
]) {
  assert(members.includes(`slug: '${slug}'`), 'Slug assente ' + slug);
  assert(members.includes(`name: '${name}'`), 'Nome assente ' + name);
  assert(html.includes(`id="teamMemberName">${name}`), 'Nome membro assente ' + slug);
  assert(html.includes(`id="teamMemberNumber" href="tel:+${digits}"`), 'Telefono principale errato ' + slug);
  assert(html.includes(`https://wa.me/${digits}`), 'WhatsApp errato ' + slug);
  assert(html.includes(`id="contactName">${name}`), 'Contatto finale errato ' + slug);
  assert(html.includes(shown), 'Numero visibile assente ' + slug);
  assert(html.includes(`../styles.css?v=${cssVersion}`), 'CSS errato ' + slug);
  assert(html.includes('src="../app.js"'), 'JS errato ' + slug);
  assert(!html.includes('Luca Cirlini'), 'Dati Luca nel nuovo profilo ' + slug);
  assert(!html.includes('fyN9wLT_xPg'), 'Video Diegos nel nuovo profilo ' + slug);
}

const candidati = load('candidati/index.html');
const candidatiCss = load('candidati/candidati.css');
assert(candidati.includes('<title>Wellness Coach | Il tuo percorso con Be One Team</title>'), 'Titolo candidati mancante');
assert(candidati.includes('ABBIAMO PARLATO.'), 'Candidati: welcome mancante');
assert(candidati.includes('Herbalife'), 'Candidati: trasparenza brand mancante');
assert(candidati.includes('non prevede stipendio fisso'), 'Candidati: trasparenza lavoro mancante');
assert(candidati.includes('59,92 €'), 'Candidati: disclosure costo mancante');
assert(candidati.includes('Non si riceve alcun compenso per il semplice reclutamento'), 'Candidati: disclosure remunerazione mancante');
assert(candidati.includes('pd-statement-typical-distributor-earnings-it-it.pdf'), 'Candidati: documentazione guadagni non presente');
assert(candidati.includes('href="https://wa.me/393476262757?text='), 'Candidati: WhatsApp numero errato');
assert((candidati.match(/class="wc-final__cta"/g)||[]).length === 1, 'Candidati: una sola CTA');
assert(!candidati.includes('<iframe') && !candidati.includes('id="hom"'), 'Candidati: HOM non deve essere nella landing, invio separato');
assert(!candidati.includes('≈ 880.000') && !candidati.includes('700.000'), 'Candidati: fatturato non verificato');
assert(candidati.includes('<meta name="robots" content="noindex,follow"'), 'Candidati: noindex mancante');
assert(!candidati.includes('UN FLUSSO. SEI FASI.'), 'Candidati: fasi incongruenti');
assert(candidatiCss.includes('@media(max-width:760px)'), 'Candidati: layout mobile mancante');
const wcFlow = candidati.match(/<ol class="wc-flow"[^>]*>([\s\S]*?)<\/ol>/);
assert(wcFlow && (wcFlow[1].match(/<li>/g)||[]).length === 5, 'Candidati: cinque fasi non corrispondono');
for (const ref of ['../assets/be-one-team.jpg', '../assets/hgo-dashboard-nuovo.webp', '../styles.css?v=5.12', './candidati.css?v=1.0']) {
 const filePath = ref.split('?')[0];
 assert(fs.existsSync(path.resolve(base, 'candidati', filePath)), 'Candidati: asset non trovato ' + ref);
}
console.log('OK: homepage Diegos, varianti team e nuova landing /candidati/ verificati.');

