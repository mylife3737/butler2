/* ============================================================
   site.js — Cynthia Butler for FL House District 75
   Dark/light mode toggle + English/Spanish language toggle
   ============================================================ */

/* ── 1. DARK / LIGHT MODE ────────────────────────────────── */
(function () {
  var html = document.documentElement;
  var THEME_KEY = 'cb-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    if (theme === 'dark') {
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  /* Apply immediately to avoid flash of wrong theme */
  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferredTheme());
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  });
})();


/* ── 2. ENGLISH / SPANISH TOGGLE ────────────────────────── */
(function () {
  var html = document.documentElement;
  var LANG_KEY = 'cb-lang';

  /* ── TRANSLATION DICTIONARY ── */
  var t = {

    /* ─── NAVBAR (all pages) ─── */
    'nav.about':        { en: 'About',        es: 'Nosotros' },
    'nav.issues':       { en: 'Issues',       es: 'Propuestas' },
    'nav.get-involved': { en: 'Get Involved', es: 'Participa' },
    'nav.contact':      { en: 'Contact',      es: 'Contacto' },
    'nav.donate':       { en: 'Donate',       es: 'Donar' },
    'nav.voting':       { en: 'Voting Info',  es: 'Cómo Votar' },

    /* ─── FOOTER (all pages) ─── */
    'footer.paid-for':     { en: 'Paid for by Cynthia Butler for Florida House District 75',
                             es: 'Pagado por Cynthia Butler para el Distrito 75 de la C\u00e1mara de Florida' },
    'footer.contact':      { en: 'Contact',      es: 'Contacto' },
    'footer.get-involved': { en: 'Get Involved', es: 'Participa' },

    /* ─── INDEX.HTML ─── */
    'index.eyebrow':         { en: 'Florida House District 75 \u2014 November 3, 2026',
                               es: 'Distrito 75 de la C\u00e1mara de Florida \u2014 3 de noviembre de 2026' },
    'index.hero-h1-a':       { en: 'A Voice for',   es: 'Una Voz para el' },
    'index.hero-h1-span':    { en: 'District 75',   es: 'Distrito 75' },
    'index.hero-cta-1':      { en: 'Get Involved',  es: 'Participa' },
    'index.hero-cta-2':      { en: 'Meet Cynthia',  es: 'Conoce a Cynthia' },
    'index.issues-title-a':  { en: 'What',          es: 'Lo Que' },
    'index.issues-title-b':  { en: 'Matters',       es: 'Importa' },
    'index.issue1-title':    { en: 'Housing &amp; Affordability',      es: 'Vivienda y Asequibilidad' },
    'index.issue2-title':    { en: 'Healthcare Access',                es: 'Acceso a la Salud' },
    'index.issue3-title':    { en: 'Infrastructure &amp; Flooding',    es: 'Infraestructura e Inundaciones' },
    'index.see-all':         { en: 'See All Issues',  es: 'Ver Todas las Propuestas' },
    'index.quote-cite':      { en: '\u2014 Cynthia Butler, Democrat, Florida House District 75',
                               es: '\u2014 Cynthia Butler, Dem\u00f3crata, Distrito 75 de la C\u00e1mara de Florida' },
    'index.cta-h2':          { en: 'This Race Is Winnable',
                               es: 'Esta Contienda Se Puede Ganar' },
    'index.cta-p':           { en: 'With your help, we can flip District 75 and bring real representation to Sarasota and Charlotte Counties.',
                               es: 'Con tu ayuda, podemos cambiar el Distrito 75 y llevar representaci\u00f3n real a los condados de Sarasota y Charlotte.' },
    'index.cta-volunteer':   { en: 'Volunteer', es: 'Ser Voluntario' },
    'index.cta-donate':      { en: 'Donate',    es: 'Donar' },

    /* ─── ABOUT.HTML ─── */
    'about.page-h1':            { en: 'Meet Cynthia',  es: 'Conoce a Cynthia' },
    'about.page-p':             { en: 'Democrat \u2014 Florida House District 75',
                                  es: 'Dem\u00f3crata \u2014 Distrito 75 de la C\u00e1mara de Florida' },
    'about.stat-district-label':{ en: 'District',              es: 'Distrito' },
    'about.stat-district-value':{ en: 'FL House District 75',  es: 'Distrito 75, C\u00e1mara de FL' },
    'about.stat-party-label':   { en: 'Party',     es: 'Partido' },
    'about.stat-party-value':   { en: 'Democrat',  es: 'Dem\u00f3crata' },
    'about.stat-city-label':    { en: 'City / Neighborhood', es: 'Ciudad / Vecindario' },
    'about.stat-years-label':   { en: 'Years in District',   es: 'A\u00f1os en el Distrito' },
    'about.stat-prof-label':    { en: 'Profession',          es: 'Profesi\u00f3n' },
    'about.label-story':        { en: 'Her Story',           es: 'Su Historia' },
    'about.heading-why':        { en: 'Why Cynthia Is Running',       es: 'Por Qu\u00e9 Cynthia Se Postula' },
    'about.label-personal':     { en: 'Personal Connection',          es: 'Conexi\u00f3n Personal' },
    'about.heading-rooted':     { en: 'Rooted in District 75',        es: 'Ra\u00edces en el Distrito 75' },
    'about.label-about':        { en: 'About Cynthia',                es: 'Sobre Cynthia' },
    'about.heading-person':     { en: 'The Person Behind the Candidate', es: 'La Persona Detr\u00e1s de la Candidata' },
    'about.label-background':   { en: 'Background',              es: 'Trayectoria' },
    'about.heading-experience': { en: 'Professional Experience', es: 'Experiencia Profesional' },
    'about.btn-platform':       { en: 'See Her Platform', es: 'Ver su Plataforma' },
    'about.btn-involved':       { en: 'Get Involved',     es: 'Participa' },
    'about.label-civic':        { en: 'Civic Leadership',       es: 'Liderazgo C\u00edvico' },
    'about.heading-community':  { en: 'Community Before Politics', es: 'La Comunidad Primero' },

    /* ─── ISSUES.HTML ─── */
    'issues.page-h1':           { en: 'Issues &amp; Platform',  es: 'Propuestas y Plataforma' },
    'issues.page-p':            { en: 'Where Cynthia stands \u2014 and what she will fight for in Tallahassee.',
                                  es: 'D\u00f3nde est\u00e1 Cynthia \u2014 y por qu\u00e9 luchar\u00e1 en Tallahassee.' },
    'issues.label-platform':    { en: 'Platform',                 es: 'Plataforma' },
    'issues.heading-priorities':{ en: "Cynthia's Top Priorities", es: 'Las Prioridades de Cynthia' },
    'issues.badge-priority':    { en: 'Priority Issue', es: 'Prioridad' },
    'issues.badge-issue':       { en: 'Issue',          es: 'Propuesta' },
    'issues.issue1-title':      { en: 'Housing &amp; Affordability',   es: 'Vivienda y Asequibilidad' },
    'issues.issue2-title':      { en: 'Healthcare Access',             es: 'Acceso a la Salud' },
    'issues.issue3-title':      { en: 'Infrastructure &amp; Flooding', es: 'Infraestructura e Inundaciones' },
    'issues.also-fighting':     { en: 'Also Fighting For', es: 'Tambi\u00e9n Lucha Por' },
    'issues.issue4-title':      { en: 'Public Education',                      es: 'Educaci\u00f3n P\u00fablica' },
    'issues.issue5-title':      { en: 'Disaster Recovery &amp; Rebuilding',    es: 'Recuperaci\u00f3n y Reconstrucci\u00f3n' },
    'issues.issue6-title':      { en: 'Insurance Costs',                       es: 'Costos de Seguro' },
    'issues.issue7-title':      { en: 'Environment',                           es: 'Medio Ambiente' },
    'issues.issue8-title':      { en: 'Underrepresented Communities',          es: 'Comunidades Subrepresentadas' },
    'issues.issue9-title':      { en: 'Florida &amp; Foreign Policy',          es: 'Florida y Pol\u00edtica Exterior' },
    'issues.label-community':   { en: 'Community Voice',      es: 'Voz de la Comunidad' },
    'issues.heading-voters':    { en: 'What Constituents Care Most About',
                                  es: 'Lo Que M\u00e1s Importa a los Electores' },
    'issues.label-ignored':     { en: 'Ignored by Leadership', es: 'Ignorado por el Liderazgo' },
    'issues.heading-ignored':   { en: 'What No One Else Is Talking About',
                                  es: 'Lo Que Nadie M\u00e1s Est\u00e1 Diciendo' },
    'issues.ethics-h2':         { en: 'Transparency &amp; Ethics', es: 'Transparencia y \u00c9tica' },
    'issues.ethics-p':          { en: 'Cynthia believes voters deserve to know exactly who is funding her campaign \u2014 and who isn\u2019t.',
                                  es: 'Cynthia cree que los votantes merecen saber exactamente qui\u00e9n financia su campa\u00f1a \u2014 y qui\u00e9n no.' },
    'issues.pac-title':         { en: 'PAC Money',              es: 'Dinero de PAC' },
    'issues.corporate-title':   { en: 'Corporate Donations',    es: 'Donaciones Corporativas' },
    'issues.finance-title':     { en: 'Campaign Finance Reform', es: 'Reforma del Financiamiento Electoral' },

    /* ─── GET-INVOLVED.HTML ─── */
    'gi.page-h1':       { en: 'Get Involved',  es: 'Participa' },
    'gi.page-p':        { en: 'This campaign runs on people power. Here\u2019s how you can help win District 75.',
                          es: 'Esta campa\u00f1a funciona gracias al poder de la gente. As\u00ed puedes ayudar a ganar el Distrito 75.' },
    'gi.card1-h3':      { en: 'Knock Doors',   es: 'Toca Puertas' },
    'gi.card1-p':       { en: 'The most powerful way to win votes. Join Cynthia\u2019s canvassing team and meet neighbors face to face.',
                          es: 'La manera m\u00e1s poderosa de ganar votos. \u00danete al equipo de Cynthia y conoce a los vecinos cara a cara.' },
    'gi.card1-btn':     { en: 'Sign Up to Canvass',    es: 'Inscr\u00edbete para Hacer Campa\u00f1a' },
    'gi.card2-h3':      { en: 'Spread the Word',       es: 'Corre la Voz' },
    'gi.card2-p':       { en: 'Share Cynthia\u2019s posts, host a yard sign, or invite your neighbors to a local meet-and-greet.',
                          es: 'Comparte las publicaciones de Cynthia, pon un letrero, o invita a tus vecinos a un evento comunitario.' },
    'gi.card2-btn':     { en: 'Join the Team', es: '\u00danete al Equipo' },
    'gi.card3-h3':      { en: 'Donate',        es: 'Donar' },
    'gi.card3-p':       { en: 'Small-dollar donations from local supporters power everything \u2014 mailers, events, yard signs, and more.',
                          es: 'Las donaciones peque\u00f1as de simpatizantes locales lo financian todo: correos, eventos, letreros y m\u00e1s.' },
    'gi.card3-btn':     { en: 'Donate Now',    es: 'Donar Ahora' },
    'gi.card3-legal':   { en: 'Paid for by Cynthia Butler for FL House District 75',
                          es: 'Pagado por Cynthia Butler para el Distrito 75 de FL' },
    'gi.label-vol':     { en: 'Volunteer',     es: 'Voluntariado' },
    'gi.heading-join':  { en: 'Join the Team', es: '\u00danete al Equipo' },
    'gi.form-intro':    { en: 'Fill out the form below and a member of the campaign team will be in touch within 48 hours.',
                          es: 'Completa el formulario y un miembro del equipo se comunicar\u00e1 contigo en 48 horas.' },
    'gi.lbl-first':     { en: 'First Name *', es: 'Nombre *' },
    'gi.lbl-last':      { en: 'Last Name *',  es: 'Apellido *' },
    'gi.lbl-email':     { en: 'Email *',      es: 'Correo electr\u00f3nico *' },
    'gi.lbl-phone':     { en: 'Phone',        es: 'Tel\u00e9fono' },
    'gi.lbl-zip':       { en: 'Zip Code *',   es: 'C\u00f3digo Postal *' },
    'gi.lbl-help':      { en: 'I want to help with: (check all that apply)',
                          es: 'Quiero ayudar con: (marca todo lo que aplique)' },
    'gi.help-doors':    { en: 'Door knocking / canvassing',   es: 'Tocar puertas / hacer campa\u00f1a' },
    'gi.help-phone':    { en: 'Phone banking',                es: 'Llamadas telef\u00f3nicas' },
    'gi.help-events':   { en: 'Events &amp; meet-and-greets', es: 'Eventos y reuniones comunitarias' },
    'gi.help-social':   { en: 'Social media sharing',         es: 'Compartir en redes sociales' },
    'gi.help-yard':     { en: 'Yard sign in my yard',         es: 'Letrero en mi jard\u00edn' },
    'gi.help-fund':     { en: 'Help with fundraising',        es: 'Ayudar con recaudaci\u00f3n de fondos' },
    'gi.lbl-msg':       { en: "Anything else you'd like us to know?",
                          es: '\u00bfHay algo m\u00e1s que quieras que sepamos?' },
    'gi.btn-signup':    { en: 'Sign Me Up', es: 'Inscr\u00edbeme' },

    /* ─── CONTACT.HTML ─── */
    'contact.page-h1':      { en: 'Contact',  es: 'Contacto' },
    'contact.page-p':       { en: 'Reach out to the campaign \u2014 we\u2019d love to hear from you.',
                              es: 'Comun\u00edcate con la campa\u00f1a \u2014 nos encantar\u00e1 saber de ti.' },
    'contact.lbl-send':     { en: 'Send a Message', es: 'Enviar un Mensaje' },
    'contact.heading-touch':{ en: 'Get in Touch',   es: 'Ponte en Contacto' },
    'contact.form-intro':   { en: 'Have a question, media inquiry, or want to connect? We\u2019ll get back to you as soon as possible.',
                              es: '\u00bfTienes una pregunta, consulta de prensa o quieres comunicarte? Te responderemos lo antes posible.' },
    'contact.lbl-first':    { en: 'First Name *', es: 'Nombre *' },
    'contact.lbl-last':     { en: 'Last Name *',  es: 'Apellido *' },
    'contact.lbl-email':    { en: 'Email *',      es: 'Correo electr\u00f3nico *' },
    'contact.lbl-phone':    { en: 'Phone',        es: 'Tel\u00e9fono' },
    'contact.lbl-subject':  { en: 'Subject',      es: 'Asunto' },
    'contact.opt-select':   { en: 'Select a topic\u2026',  es: 'Selecciona un tema\u2026' },
    'contact.opt-general':  { en: 'General question',      es: 'Pregunta general' },
    'contact.opt-media':    { en: 'Media / press inquiry',  es: 'Consulta de medios / prensa' },
    'contact.opt-endorse':  { en: 'Endorsement',            es: 'Respaldo' },
    'contact.opt-event':    { en: 'Event invitation',       es: 'Invitaci\u00f3n a evento' },
    'contact.opt-volunteer':{ en: 'Volunteer coordination', es: 'Coordinaci\u00f3n de voluntarios' },
    'contact.opt-other':    { en: 'Other',                  es: 'Otro' },
    'contact.lbl-msg':      { en: 'Message *',  es: 'Mensaje *' },
    'contact.btn-send':     { en: 'Send Message', es: 'Enviar Mensaje' },
    'contact.info-h3':      { en: 'Campaign Info',   es: 'Info de la Campa\u00f1a' },
    'contact.info-hq':      { en: 'Headquarters',    es: 'Sede Central' },
    'contact.info-email':   { en: 'Email',            es: 'Correo' },
    'contact.info-phone':   { en: 'Phone',            es: 'Tel\u00e9fono' },
    'contact.info-election':{ en: 'Election Day',     es: 'D\u00eda de Elecci\u00f3n' },
    'contact.election-date':{ en: 'November 3, 2026', es: '3 de noviembre de 2026' },
    'contact.district':     { en: 'Florida House District 75',
                              es: 'Distrito 75 de la C\u00e1mara de Florida' },
    'contact.media-note':   { en: '<strong>Media inquiries:</strong> Contact us via the form and select \u201cMedia / press inquiry\u201d \u2014 we respond within 24 hours.',
                              es: '<strong>Consultas de medios:</strong> Cont\u00e1ctenos por el formulario y seleccione \u201cConsulta de medios / prensa\u201d \u2014 respondemos en 24 horas.' },
  };

  /* ── APPLY TRANSLATIONS ── */
  function applyLang(lang) {
    html.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!t[key]) return;
      var val = t[key][lang];
      if (val !== undefined) el.innerHTML = val;
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
    localStorage.setItem(LANG_KEY, lang);
  }

  function getPreferredLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored) return stored;
    return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getPreferredLang());
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      applyLang(html.getAttribute('lang') === 'es' ? 'en' : 'es');
    });
  });
})();
