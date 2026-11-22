const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = path.join(__dirname, '..', 'site');
const load = p => fs.readFileSync(path.join(base,p),'utf8');
const index = load('index.html');
const luca = load('luca.html');
const members = load('members.js');
const app = load('app.js');
assert(index.includes('id="leaderProfile"'), 'La homepage deve mostrare il profilo di Diegos');
assert(index.includes('fyN9wLT_xPg'), 'Il video di Diegos deve restare nella homepage');
assert(luca.includes('id="teamMemberName">Luca Cirlini'), 'La pagina Luca deve mostrare Luca');
assert(luca.includes('wa.me/393494762908'), 'WhatsApp Luca errato');
assert(luca.includes('tel:+393494762908'), 'Telefono Luca errato');
assert(!luca.includes('17 anni di esperienza'), 'La biografia di Diegos non deve apparire in /luca');
assert(!luca.includes('fyN9wLT_xPg'), 'Il video di Diegos non deve apparire in /luca');
assert(members.includes("slug: 'luca'"), 'Slug Luca mancante');
assert(app.includes('memberByPath'), 'La selezione per percorso non e presente');
for (const f of ['index.html', 'luca.html']) {
  const html = load(f);
  const refs = [...html.matchAll(/(?:src|href)="(assets\/[^"?#]+|(?:styles|app|members)\.(?:css|js))"/g)].map(x=>x[1]);
  for(const ref of refs) assert(fs.existsSync(path.join(base,ref)), `File mancante: ${f} -> ${ref}`);
}
console.log('OK: Homepage Diegos, /luca, contatti, assets, sicurezza percorsi.');
