(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(window.location.search);
  const members = window.BE_ONE_MEMBERS || {};
  // Le pagine /luca e /luca.html vengono gestite dal medesimo sito.
  // Un percorso personale prevale sempre su ?ref= per evitare di contattare il referente sbagliato.
  const segments = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const path = (segments[segments.length - 1] || '').replace(/\.html$/i, '').toLowerCase();
  const memberByPath = Object.keys(members).find(key => members[key].slug === path);
  // La home GitHub Pages e' /be-one-team-opportunity/, mentre su Cloudflare era /.
  const isHome = path === '' || path === 'index' || (segments.length === 1 && path === 'be-one-team-opportunity');
  const ref = memberByPath || (isHome ? (params.get('ref') || 'diegos').trim().toLowerCase() : null);
  const member = ref && Object.prototype.hasOwnProperty.call(members, ref) ? members[ref] : null;
  // La biografia e il video personali di Diegos restano SOLO nella sua homepage.
  // Le versioni degli altri membri presentano invece i propri contatti anche qui,
  // ripetuti nella call-to-action finale.
  const isDiegos = Boolean(member && ref === 'diegos');
  const leaderProfile = $('leaderProfile');
  if (leaderProfile) leaderProfile.hidden = !isDiegos;
  const memberProfile = $('memberProfile');
  if (memberProfile) memberProfile.hidden = isDiegos || !member;
  const diegoVideo = $('diegoVideo');
  if (diegoVideo) diegoVideo.hidden = !isDiegos;
  $('year').textContent = new Date().getFullYear().toString();
  if (!member) {
    $('contactName').textContent = 'Referente non disponibile';
    $('contactRole').textContent = 'Il collegamento non è riconosciuto';
    $('contactInitials').textContent = '—';
    $('contactNumber').hidden = true;
    $('contactWhatsapp').hidden = true;
    $('contactPhone').hidden = true;
    $('contactError').hidden = false;
    return;
  }
  const initials = member.name.split(/\s+/).filter(Boolean).slice(0,2).map(s => s[0].toUpperCase()).join('');
  const cleanPhone = member.phone.replace(/[^\d+]/g, '');
  const msg = `Ciao ${member.name.split(' ')[0]}, ho visto la presentazione Be One Team Opportunity e vorrei approfondire il progetto.`;
  $('contactName').textContent = member.name;
  $('contactRole').textContent = member.role;
  $('contactInitials').textContent = initials;
  $('contactNumber').textContent = member.display;
  const whatsappHref = `https://wa.me/${cleanPhone.replace(/^\+/, '')}?text=${encodeURIComponent(msg)}`;
  const telephoneHref = `tel:${cleanPhone}`;
  $('contactWhatsapp').href = whatsappHref;
  $('contactPhone').href = telephoneHref;
  if (!isDiegos) {
    $('teamMemberName').textContent = member.name;
    $('teamMemberRole').textContent = member.role;
    $('teamMemberNumber').textContent = member.display;
    $('teamMemberNumber').href = telephoneHref;
    $('teamMemberNumber').setAttribute('aria-label', `Chiama ${member.name} al ${member.display}`);
    $('teamMemberWhatsapp').href = whatsappHref;
    $('teamMemberPhone').href = telephoneHref;
  }
})();
