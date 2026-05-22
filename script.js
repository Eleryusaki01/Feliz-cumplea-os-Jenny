/* ═══════════════════════════════════════════════════════════
   script.js — Para Jenny 🌸
   Sistema autónomo: pétalos SVG, mariposas, contenido por año
═══════════════════════════════════════════════════════════ */

/* ── CONFIGURACIÓN ── */
const BDAY_MONTH = 5;
const BDAY_DAY   = 21;
const BIRTH_YEAR = 2002;

/* ── CONTENIDO POR AÑO ── */
const CONTENT = {
  2025: {
    letter: `Jenny,<br><br>
      Hoy que cumples <em>23 años</em>, pienso en todo lo que haces sin darte cuenta:
      iluminas cada cuarto con tu presencia, cantas con el alma y fotografías el mundo
      con unos ojos que ven belleza donde otros no ven nada.<br><br>
      Eres como un girasol — siempre buscas la luz, y se la das a todos los que están
      cerca de ti. Que este año sea tan especial como tú.
      <strong>Feliz cumpleaños, Jenny.</strong>`,
    reasons: [
      { icon:'🌻', text:'Eres como los girasoles que amas: siempre orientada hacia la luz, sin importar qué tan oscuro esté el cielo.' },
      { icon:'🐱', text:'Tienes la ternura de los gatos — tranquila por fuera, con un mundo enorme y hermoso por dentro.' },
      { icon:'📷', text:'Tu mirada detrás de la cámara captura cosas que otros se pierden. Ves el mundo de una manera única.' },
      { icon:'🎤', text:'Cuando cantas, el tiempo se detiene. Tu voz tiene algo que no se puede explicar, solo sentir.' },
      { icon:'💙', text:'El azul te queda porque eres profunda como el océano y serena como el cielo más despejado.' },
      { icon:'🖤', text:'El negro que vistes no es oscuridad — es elegancia, misterio y una seguridad en ti misma que admiro.' }
    ],
    finale: 'Eres el girasol más bonito en el jardín de mi vida.'
  },
  2026: {
    letter: `Mi Jenny hermosa,<br><br>
      <em>24 años</em> de ser exactamente quien eres — y eso es extraordinario.
      Cada año que pasa te vuelves más tú: más segura, más brillante, más Jenny.
      Tu fe mueve cosas que los demás ni ven, y tu corazón cabe el mundo entero.<br><br>
      Que este año venga con girasoles en cada camino, con los mejores gatos del
      universo a tu lado, y con toda la paz que mereces.
      <strong>Eres increíble, y hoy el mundo lo celebra.</strong>`,
    reasons: [
      { icon:'🌻', text:'A los 24 sigues siendo la misma luz de siempre, pero más intensa, más real, más tú.' },
      { icon:'🐱', text:'Los gatos te eligen a ti porque saben reconocer a las personas con buen corazón.' },
      { icon:'🎤', text:'Tu voz este año sonó más bonita que nunca. Cada nota que cantas lleva algo tuyo.' },
      { icon:'📷', text:'Cada foto que tomas es un mundo que salvaste del olvido. Eso es un regalo enorme.' },
      { icon:'💙', text:'Tienes la profundidad del azul más oscuro y la claridad del cielo más abierto.' },
      { icon:'🖤', text:'El negro que llevas es tu firma — elegante, intencional, completamente tuya.' }
    ],
    finale: 'Eres la canción que no puedo sacarme de la cabeza.'
  },
  2027: {
    letter: `Jenny,<br><br>
      <em>25 años</em> — un cuarto de siglo siendo de las personas más especiales que existen.
      Verte crecer es como ver florecer un girasol en tiempo real: despacio, con gracia,
      sin apuro, pero inevitable y hermoso.<br><br>
      Que este año te traiga todo lo que buscas: momentos de paz junto a un gato
      ronroneando, luz perfecta para fotografiar, y canciones que solo tú sabes cantar.
      <strong>Feliz cumpleaños. El mundo es mejor contigo en él.</strong>`,
    reasons: [
      { icon:'🌻', text:'25 años de dar luz a todo lo que tocas — eso no es poca cosa.' },
      { icon:'🐱', text:'Tu calma y tu calidez son exactamente lo que el mundo necesita más.' },
      { icon:'📷', text:'Tienes un ojo para la belleza que muy poca gente desarrolla en toda su vida.' },
      { icon:'🎤', text:'Cantas con una honestidad que llega directo al corazón. Eso no se finge.' },
      { icon:'💙', text:'Eres tranquila como el azul profundo y luminosa como el azul del mediodía.' },
      { icon:'🖤', text:'Tu estilo de negro es tuyo — no lo copias de nadie, simplemente lo eres.' }
    ],
    finale: 'Cada año que cumples, el universo gana algo mejor.'
  }
  // ← Agrega 2028, 2029... con el mismo formato
};

function getContent(year) {
  if (CONTENT[year]) return CONTENT[year];
  const age = year - BIRTH_YEAR;
  return {
    letter: `Jenny,<br><br>
      <em>${age} años</em> de existencia pura y extraordinaria.
      Cada cumpleaños tuyo es una prueba de que las personas que dan luz
      al mundo merecen ser celebradas en grande.<br><br>
      Que este <strong>${year}</strong> te traiga girasoles en cada esquina,
      gatos ronroneando a tu lado, y toda la alegría que mereces.`,
    reasons: [
      { icon:'🌻', text:`${age} años siendo la persona más especial que conozco.` },
      { icon:'🐱', text:'Los gatos siguen eligiéndote — saben lo que hacen.' },
      { icon:'📷', text:'Tu manera de ver el mundo a través del lente sigue siendo única.' },
      { icon:'🎤', text:'Tu voz sigue siendo de las cosas más bonitas que existen.' },
      { icon:'💙', text:'Profunda como el azul, luminosa como siempre.' },
      { icon:'🖤', text:'Elegante, real y completamente tú.' }
    ],
    finale: `Año ${year}: el mejor, porque lo vives tú.`
  };
}

/* ── INICIALIZACIÓN ── */
const NOW  = new Date();
const YEAR = NOW.getFullYear();
const AGE  = YEAR - BIRTH_YEAR;
const DATA = getContent(YEAR);
let musicOn = false;

// Rellenar DOM
document.getElementById('heroYear').textContent    = YEAR;
document.getElementById('ageOrb').textContent      = `${AGE} años de pura magia 🌸`;
document.getElementById('finaleYear').textContent  = YEAR;
document.getElementById('footerYear').textContent  = YEAR;
document.getElementById('letterText').innerHTML    = DATA.letter;
document.getElementById('finaleQuote').textContent = DATA.finale;

// Tarjetas de razones
const grid = document.getElementById('reasonsGrid');
DATA.reasons.forEach((r, i) => {
  const card = document.createElement('div');
  card.className = 'reason-card';
  card.innerHTML = `
    <span class="reason-icon">${r.icon}</span>
    <div class="reason-num">0${i + 1}</div>
    <p class="reason-text">${r.text}</p>`;
  grid.appendChild(card);
});

/* ══════════════════════════════════════════════════════════
   PÉTALOS SVG CAYENDO — hermosos y reales
══════════════════════════════════════════════════════════ */
const canvas = document.getElementById('petalCanvas');
const ctx    = canvas.getContext('2d');
let W, H;

function resizeCanvas() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Colores de pétalos vivos
const PETAL_COLORS = [
  '#ff6b9d', '#ff3d7f', '#ff8fb1', '#ffb3d1',
  '#ff6b4a', '#ffb347', '#ff80aa', '#e040fb',
  '#ff4081', '#ff80ab', '#f48fb1', '#f06292'
];

class Petal {
  constructor() { this.reset(true); }

  reset(initial = false) {
    this.x    = Math.random() * W;
    this.y    = initial ? Math.random() * H : -40;
    this.size = Math.random() * 14 + 8;
    this.speedY = Math.random() * 1.5 + 0.6;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.angle  = Math.random() * Math.PI * 2;
    this.spin   = (Math.random() - 0.5) * 0.06;
    this.sway   = Math.random() * 0.04 + 0.01;
    this.swayOffset = Math.random() * Math.PI * 2;
    this.opacity = Math.random() * 0.5 + 0.45;
    this.color  = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
    this.t      = 0;
    // Forma del pétalo: 0=oval, 1=redondo, 2=alargado
    this.shape  = Math.floor(Math.random() * 3);
  }

  update() {
    this.t += 0.02;
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.t * this.sway + this.swayOffset) * 0.8;
    this.angle += this.spin;
    if (this.y > H + 40 || this.x < -80 || this.x > W + 80) this.reset();
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalAlpha = this.opacity;

    // Sombra suave
    ctx.shadowColor = this.color;
    ctx.shadowBlur  = 6;

    ctx.beginPath();
    ctx.fillStyle = this.color;

    if (this.shape === 0) {
      // Pétalo de rosa: forma elíptica con curva bezier
      const s = this.size;
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo( s * 0.7, -s * 0.5,  s * 0.8, s * 0.3,  0, s);
      ctx.bezierCurveTo(-s * 0.8,  s * 0.3, -s * 0.7, -s * 0.5,  0, -s);
    } else if (this.shape === 1) {
      // Pétalo redondo
      ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
    } else {
      // Pétalo delgado
      const s = this.size;
      ctx.moveTo(0, -s * 1.1);
      ctx.bezierCurveTo(s * 0.5, -s * 0.4,  s * 0.4, s * 0.5,  0, s * 1.1);
      ctx.bezierCurveTo(-s * 0.4, s * 0.5, -s * 0.5, -s * 0.4,  0, -s * 1.1);
    }

    ctx.fill();

    // Brillo interior del pétalo
    ctx.globalAlpha = this.opacity * 0.4;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(-this.size * 0.15, -this.size * 0.25,
                this.size * 0.18, this.size * 0.35, -0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const petals = Array.from({ length: 55 }, () => new Petal());

function animatePetals() {
  ctx.clearRect(0, 0, W, H);
  petals.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animatePetals);
}
animatePetals();

/* ══════════════════════════════════════════════════════════
   BOKEH CIRCLES
══════════════════════════════════════════════════════════ */
const bokehColors = [
  'rgba(255,107,157,0.6)', 'rgba(255,184,0,0.5)',
  'rgba(199,125,255,0.5)', 'rgba(72,202,228,0.45)',
  'rgba(255,107,74,0.5)',  'rgba(255,128,170,0.55)'
];
const bokehLayer = document.getElementById('bokehLayer');
for (let i = 0; i < 18; i++) {
  const el = document.createElement('div');
  el.className = 'bokeh-circle';
  const size = 40 + Math.random() * 120;
  el.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    top:${Math.random() * 100}%;
    background:${bokehColors[i % bokehColors.length]};
    animation-duration:${12 + Math.random() * 16}s;
    animation-delay:${Math.random() * 10}s;
  `;
  bokehLayer.appendChild(el);
}

/* ══════════════════════════════════════════════════════════
   MARIPOSAS ANIMADAS SVG
══════════════════════════════════════════════════════════ */
const butterflyColors = [
  ['#ff6b9d','#ffb347'], ['#a855f7','#ec4899'],
  ['#06b6d4','#6366f1'], ['#f43f5e','#f97316'],
  ['#8b5cf6','#ec4899'], ['#fbbf24','#ef4444']
];

function createButterfly() {
  const container = document.getElementById('butterflies');
  const [c1, c2]  = butterflyColors[Math.floor(Math.random() * butterflyColors.length)];
  const size       = 28 + Math.random() * 28;
  const startX     = -80;
  const startY     = 60 + Math.random() * (window.innerHeight * 0.65);
  const duration   = 12 + Math.random() * 14;
  const waveAmp    = 40 + Math.random() * 60;

  const el = document.createElement('div');
  el.style.cssText = `
    position: absolute;
    left: ${startX}px; top: ${startY}px;
    width: ${size * 2.2}px; height: ${size}px;
    pointer-events: none;
    animation: bflyTravel ${duration}s linear forwards;
    z-index: 2;
  `;

  // SVG mariposa con 2 alas y cuerpo
  el.innerHTML = `
  <svg viewBox="0 0 100 60" width="${size * 2.2}" height="${size}"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wL${Date.now()}" cx="60%" cy="40%">
        <stop offset="0%" stop-color="${c2}" stop-opacity=".95"/>
        <stop offset="100%" stop-color="${c1}" stop-opacity=".75"/>
      </radialGradient>
      <radialGradient id="wR${Date.now()}" cx="40%" cy="40%">
        <stop offset="0%" stop-color="${c2}" stop-opacity=".95"/>
        <stop offset="100%" stop-color="${c1}" stop-opacity=".75"/>
      </radialGradient>
    </defs>
    <!-- Ala izquierda superior -->
    <ellipse cx="30" cy="22" rx="28" ry="18"
             fill="url(#wL${Date.now()})" opacity=".9"
             transform="rotate(-20,30,22)">
      <animateTransform attributeName="transform" type="rotate"
        values="-20,30,22;-5,30,22;-20,30,22" dur=".35s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Ala izquierda inferior -->
    <ellipse cx="28" cy="40" rx="20" ry="13"
             fill="${c1}" opacity=".75"
             transform="rotate(15,28,40)">
      <animateTransform attributeName="transform" type="rotate"
        values="15,28,40;28,28,40;15,28,40" dur=".35s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Ala derecha superior -->
    <ellipse cx="70" cy="22" rx="28" ry="18"
             fill="url(#wR${Date.now()})" opacity=".9"
             transform="rotate(20,70,22)">
      <animateTransform attributeName="transform" type="rotate"
        values="20,70,22;5,70,22;20,70,22" dur=".35s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Ala derecha inferior -->
    <ellipse cx="72" cy="40" rx="20" ry="13"
             fill="${c1}" opacity=".75"
             transform="rotate(-15,72,40)">
      <animateTransform attributeName="transform" type="rotate"
        values="-15,72,40;-28,72,40;-15,72,40" dur=".35s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Cuerpo -->
    <ellipse cx="50" cy="32" rx="3.5" ry="14" fill="#3d1c2e" opacity=".8"/>
    <!-- Antenas -->
    <line x1="50" y1="18" x2="38" y2="6" stroke="#3d1c2e" stroke-width="1.2" opacity=".7"/>
    <circle cx="38" cy="6" r="2.5" fill="${c2}" opacity=".9"/>
    <line x1="50" y1="18" x2="62" y2="6" stroke="#3d1c2e" stroke-width="1.2" opacity=".7"/>
    <circle cx="62" cy="6" r="2.5" fill="${c2}" opacity=".9"/>
  </svg>`;

  // Keyframes dinámicos para el vuelo ondulante
  const keyframeName = `bflyTravel_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const sheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;
  const endX  = window.innerWidth + 120;
  try {
    sheet.insertRule(`
      @keyframes ${keyframeName} {
        0%   { transform: translate(0px, 0px); opacity:0; }
        5%   { opacity:1; }
        25%  { transform: translate(${endX*.25}px, ${-waveAmp}px); }
        50%  { transform: translate(${endX*.5}px, ${waveAmp*.5}px); }
        75%  { transform: translate(${endX*.75}px, ${-waveAmp*.7}px); }
        95%  { opacity:.8; }
        100% { transform: translate(${endX}px, 0px); opacity:0; }
      }`, sheet.cssRules.length);
    el.style.animation = `${keyframeName} ${duration}s ease-in-out forwards`;
  } catch(e) {
    el.style.animation = `bflyTravel ${duration}s linear forwards`;
  }

  container.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000 + 500);
}

// Lanza mariposas periódicamente
createButterfly();
setInterval(createButterfly, 4000);

/* ══════════════════════════════════════════════════════════
   SPARKLES alrededor de la foto
══════════════════════════════════════════════════════════ */
const sparkleContainer = document.getElementById('photoSparkles');
for (let i = 0; i < 10; i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  const angle = (i / 10) * 360;
  const radius = 48 + Math.random() * 20;
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
  s.style.cssText = `
    left:${x}%; top:${y}%;
    width:${6 + Math.random() * 6}px;
    height:${6 + Math.random() * 6}px;
    background: ${PETAL_COLORS[i % PETAL_COLORS.length]};
    box-shadow: 0 0 8px ${PETAL_COLORS[i % PETAL_COLORS.length]};
    animation: sparklePop ${1.5 + Math.random()}s ease-in-out ${Math.random()}s infinite;
  `;
  sparkleContainer.appendChild(s);
}

// Agregar keyframe sparklePop
const style = document.createElement('style');
style.textContent = `
  @keyframes sparklePop {
    0%,100%{ transform:scale(1) rotate(0deg); opacity:.6; }
    50%    { transform:scale(1.8) rotate(180deg); opacity:1; }
  }
  @keyframes bflyTravel {
    from { transform:translateX(0); opacity:0; }
    5%   { opacity:1; }
    95%  { opacity:.8; }
    to   { transform:translateX(120vw); opacity:0; }
  }
`;
document.head.appendChild(style);

/* ══════════════════════════════════════════════════════════
   COUNTDOWN — corregido: NO bloquea la página
══════════════════════════════════════════════════════════ */
function isBday() {
  const n = new Date();
  return n.getMonth() + 1 === BDAY_MONTH && n.getDate() === BDAY_DAY;
}
function nextBday() {
  const n = new Date();
  let t = new Date(n.getFullYear(), BDAY_MONTH - 1, BDAY_DAY, 0, 0, 0);
  if (n >= t) t.setFullYear(t.getFullYear() + 1);
  return t;
}
function pad(n) { return String(n).padStart(2, '0'); }

if (isBday()) {
  // Muestra mensaje y agrega fuegos como decoración de fondo
  document.getElementById('cdGrid').style.display  = 'none';
  document.getElementById('bdayMsg').style.display = 'block';
  launchFWDecoration();
} else {
  function tick() {
    const diff = nextBday() - new Date();
    if (diff <= 0) { location.reload(); return; }
    document.getElementById('cdD').textContent = pad(Math.floor(diff / 86400000));
    document.getElementById('cdH').textContent = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('cdM').textContent = pad(Math.floor((diff % 3600000) / 60000));
    document.getElementById('cdS').textContent = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════════════════
   FUEGOS — solo decorativos, SIN bloquear nada
══════════════════════════════════════════════════════════ */
function launchFWDecoration() {
  const fw = document.createElement('canvas');
  fw.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2;';
  fw.width = window.innerWidth; fw.height = window.innerHeight;
  window.addEventListener('resize', () => {
    fw.width = window.innerWidth; fw.height = window.innerHeight;
  });
  document.body.insertBefore(fw, document.body.firstChild);
  const fc = fw.getContext('2d');
  let ps = [];
  const cols = ['#ff6b9d','#ffb347','#c77dff','#48cae4','#ff6b4a','#ff80aa'];

  function shoot() {
    const x = Math.random() * fw.width;
    const y = 80 + Math.random() * fw.height * 0.4;
    for (let i = 0; i < 45; i++) {
      const a = (i / 45) * Math.PI * 2, sp = 2 + Math.random() * 3.5;
      ps.push({ x, y, vx: Math.cos(a)*sp, vy: Math.sin(a)*sp,
                life: 1, color: cols[Math.floor(Math.random()*cols.length)] });
    }
  }
  function anim() {
    fc.fillStyle = 'rgba(255,240,245,0.12)';
    fc.fillRect(0, 0, fw.width, fw.height);
    ps.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.vy+=.035; p.life-=.012;
      fc.globalAlpha = Math.max(0, p.life);
      fc.fillStyle   = p.color;
      fc.beginPath(); fc.arc(p.x, p.y, 2.5, 0, Math.PI*2); fc.fill();
    });
    fc.globalAlpha = 1;
    ps = ps.filter(p => p.life > 0);
    requestAnimationFrame(anim);
  }
  for (let i = 0; i < 4; i++) setTimeout(shoot, i * 700);
  setInterval(() => { if (Math.random() > .5) shoot(); }, 2200);
  anim();
}

/* ══════════════════════════════════════════════════════════
   MÚSICA
══════════════════════════════════════════════════════════ */
const audio    = document.getElementById('bgAudio');
const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', () => {
  if (musicOn) {
    audio.pause();
    musicBtn.querySelector('.music-icon').textContent = '♪';
    musicBtn.classList.remove('on');
  } else {
    audio.play().catch(() => {});
    musicBtn.querySelector('.music-icon').textContent = '♫';
    musicBtn.classList.add('on');
  }
  musicOn = !musicOn;
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ══════════════════════════════════════════════════════════
   LOADER
══════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    document.getElementById('app').classList.add('show');
  }, 2000);
});
