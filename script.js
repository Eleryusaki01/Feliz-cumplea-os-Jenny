/* ═══════════════════════════════════════════════════════════
   script.js — Para Jenny 🌻
   Sistema autónomo: cambia contenido automáticamente cada año
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   CONFIGURACIÓN — ajusta estos valores
───────────────────────────────────────────────────────── */
const BDAY_MONTH = 5;    // Mayo = 5
const BDAY_DAY   = 21;   // Día 21
const BIRTH_YEAR = 2002; // Año de nacimiento de Jenny

/* ─────────────────────────────────────────────────────────
   CONTENIDO POR AÑO
   Agrega nuevos bloques cada cumpleaños.
   Si el año no está definido, se genera automáticamente.
───────────────────────────────────────────────────────── */
const CONTENT = {

  2025: {
    letter: `Jenny,<br><br>
      Hoy que cumples <em>23 años</em>, pienso en todo lo que haces sin darte cuenta:
      iluminas los cuartos con tu presencia, cantas con el alma y fotografías el mundo
      con unos ojos que ven la belleza donde otros no ven nada.<br><br>
      Eres como un girasol — siempre buscas la luz, y se la das a todos los que están
      cerca de ti. <strong>Feliz cumpleaños, Jenny.</strong>`,
    reasons: [
      { icon: '🌻', text: 'Eres como los girasoles que amas: siempre orientada hacia la luz, sin importar qué tan oscuro esté el cielo.' },
      { icon: '🐱', text: 'Tienes la ternura de los gatos — tranquila por fuera, con un mundo enorme por dentro.' },
      { icon: '📷', text: 'Tu mirada detrás de la cámara captura cosas que otros se pierden. Ves el mundo de una manera única.' },
      { icon: '🎤', text: 'Cuando cantas, el tiempo se detiene. Tu voz tiene algo que no se puede explicar, solo sentir.' },
      { icon: '💙', text: 'El azul te queda porque eres profunda como el océano y serena como el cielo despejado.' },
      { icon: '🖤', text: 'El negro que vistes no es oscuridad — es elegancia, misterio y una seguridad en ti misma que admiro.' }
    ],
    finale: 'Eres el girasol más bonito en el jardín de mi vida.'
  },

  2026: {
    letter: `Mi Jenny hermosa,<br><br>
      <em>24 años</em> de ser exactamente quien eres — y eso es extraordinario.
      Cada año que pasa te vuelves más tú: más segura, más brillante, más Jenny.
      Tu fe mueve cosas que los demás ni ven, y tu corazón cabe el mundo entero.<br><br>
      Que este año que empieza para ti venga con girasoles en cada camino,
      con los mejores gatos del universo a tu lado, y con toda la paz que mereces.
      <strong>Eres increíble, y hoy el mundo lo celebra.</strong>`,
    reasons: [
      { icon: '🌻', text: 'A los 24 sigues siendo la misma luz de siempre, pero más intensa, más real, más tú.' },
      { icon: '🐱', text: 'Los gatos te eligen a ti porque saben reconocer a las personas con buen corazón.' },
      { icon: '🎤', text: 'Tu voz este año sonó más bonita que nunca. Cada nota que cantas lleva algo tuyo.' },
      { icon: '📷', text: 'Cada foto que tomas es un mundo que salvaste del olvido. Eso es un regalo enorme.' },
      { icon: '💙', text: 'Tienes la profundidad del azul más oscuro y la claridad del cielo más abierto.' },
      { icon: '🖤', text: 'El negro que llevas es tu firma — elegante, intencional, completamente tuya.' }
    ],
    finale: 'Eres la canción que no puedo sacarme de la cabeza.'
  },

  2027: {
    letter: `Jenny,<br><br>
      <em>25 años</em> — un cuarto de siglo siendo de las personas más especiales que existen.
      Verte crecer es como ver florecer un girasol en tiempo real: despacio, con gracia,
      sin apuro, pero inevitable.<br><br>
      Que este año te traiga todo lo que buscas: momentos de paz junto a un gato
      ronroneando, luz natural perfecta para fotografiar, y canciones que solo tú
      sabes cantar. <strong>Feliz cumpleaños, Jenny. El mundo es mejor contigo en él.</strong>`,
    reasons: [
      { icon: '🌻', text: '25 años de dar luz a todo lo que tocas — eso no es poca cosa.' },
      { icon: '🐱', text: 'Tu calma y tu calidez son exactamente lo que el mundo necesita más.' },
      { icon: '📷', text: 'Tienes un ojo para la belleza que muy poca gente desarrolla en toda su vida.' },
      { icon: '🎤', text: 'Cantas con una honestidad que llega directo al corazón. Eso no se finge.' },
      { icon: '💙', text: 'Eres tranquila como el azul profundo y luminosa como el azul del mediodía.' },
      { icon: '🖤', text: 'Tu estilo de negro es tuyo — no lo copias de nadie, simplemente lo eres.' }
    ],
    finale: 'Cada año que cumples, el universo gana algo mejor.'
  }

  // ← Agrega 2028, 2029... con el mismo formato aquí

};

/* ─────────────────────────────────────────────────────────
   GENERADOR AUTOMÁTICO para años no definidos
───────────────────────────────────────────────────────── */
function getContent(year) {
  if (CONTENT[year]) return CONTENT[year];
  const age = year - BIRTH_YEAR;
  return {
    letter: `Jenny,<br><br>
      <em>${age} años</em> de existencia pura y extraordinaria.
      Cada cumpleaños tuyo es una prueba de que las personas que dan luz
      al mundo merecen ser celebradas en grande.<br><br>
      Que este <strong>${year}</strong> te traiga girasoles en cada esquina,
      gatos ronroneando a tu lado, y todo el azul que el cielo pueda darte.
      Con todo mi cariño, siempre.`,
    reasons: [
      { icon: '🌻', text: `${age} años siendo el girasol más bonito que conozco.` },
      { icon: '🐱', text: 'Los gatos siguen eligiéndote — saben lo que hacen.' },
      { icon: '📷', text: 'Tu manera de ver el mundo a través del lente sigue siendo única.' },
      { icon: '🎤', text: 'Tu voz sigue siendo de las cosas más bonitas que existen.' },
      { icon: '💙', text: 'Profunda como el azul, luminosa como siempre.' },
      { icon: '🖤', text: 'Elegante, real y completamente tú.' }
    ],
    finale: `Año ${year}: el mejor, porque lo vives tú.`
  };
}

/* ─────────────────────────────────────────────────────────
   INICIALIZACIÓN
───────────────────────────────────────────────────────── */
const NOW  = new Date();
const YEAR = NOW.getFullYear();
const AGE  = YEAR - BIRTH_YEAR;
const DATA = getContent(YEAR);
let musicOn = false;

// Rellenar DOM
document.getElementById('heroYear').textContent   = YEAR;
document.getElementById('heroAge').textContent    = `${AGE} años de pura magia 🌻`;
document.getElementById('letterYear').textContent = YEAR;
document.getElementById('finaleYear').textContent = YEAR;
document.getElementById('footerYear').textContent = YEAR;
document.getElementById('letterText').innerHTML   = DATA.letter;
document.getElementById('finaleQuote').textContent = DATA.finale;

// Tarjetas de razones
const grid = document.getElementById('reasonsGrid');
DATA.reasons.forEach((r, i) => {
  const card = document.createElement('div');
  card.className = 'reason-card';
  card.setAttribute('data-icon', r.icon);
  card.innerHTML = `<div class="reason-num">0${i + 1}</div>
                    <p class="reason-text">${r.text}</p>`;
  grid.appendChild(card);
});

/* ─────────────────────────────────────────────────────────
   CANVAS — partículas de fondo
───────────────────────────────────────────────────────── */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');
let W, H;

function resizeCanvas() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 130 }, () => ({
  x:     Math.random() * 1920,
  y:     Math.random() * 1080,
  r:     Math.random() * 1.5 + 0.3,
  a:     Math.random(),
  speed: Math.random() * 0.005 + 0.001,
  phase: Math.random() * Math.PI * 2,
  color: Math.random() > 0.5 ? [59, 158, 255] : [244, 196, 48]
}));

function drawBg(t) {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    const alpha = p.a * (0.4 + 0.6 * Math.sin(t * p.speed + p.phase));
    ctx.beginPath();
    ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawBg);
}
requestAnimationFrame(drawBg);

/* ─────────────────────────────────────────────────────────
   COUNTDOWN
───────────────────────────────────────────────────────── */
function nextBday() {
  const n = new Date();
  let t = new Date(n.getFullYear(), BDAY_MONTH - 1, BDAY_DAY, 0, 0, 0);
  if (n >= t) t.setFullYear(t.getFullYear() + 1);
  return t;
}
function isBday() {
  const n = new Date();
  return n.getMonth() + 1 === BDAY_MONTH && n.getDate() === BDAY_DAY;
}
function pad(n) { return String(n).padStart(2, '0'); }

function tickCountdown() {
  if (isBday()) {
    document.getElementById('cdGrid').style.display  = 'none';
    document.getElementById('bdayMode').style.display = 'block';
    launchFireworks();
    return;
  }
  const diff = nextBday() - new Date();
  document.getElementById('cdD').textContent = pad(Math.floor(diff / 86400000));
  document.getElementById('cdH').textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById('cdM').textContent = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById('cdS').textContent = pad(Math.floor((diff % 60000) / 1000));
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* ─────────────────────────────────────────────────────────
   FUEGOS ARTIFICIALES (solo el día del cumpleaños)
───────────────────────────────────────────────────────── */
function launchFireworks() {
  const fwCanvas = document.createElement('canvas');
  fwCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:60;';
  fwCanvas.width = W; fwCanvas.height = H;
  document.body.appendChild(fwCanvas);
  const fc = fwCanvas.getContext('2d');
  let ps = [];
  const colors = ['#3b9eff', '#f4c430', '#ffffff', '#1a6fc4', '#e8a500'];

  function shoot() {
    const x = Math.random() * W;
    const y = Math.random() * H * 0.6;
    for (let i = 0; i < 55; i++) {
      const angle = (i / 55) * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      ps.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function animFW() {
    fc.fillStyle = 'rgba(8,12,15,.18)';
    fc.fillRect(0, 0, W, H);
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.04; p.life -= 0.015;
      fc.globalAlpha = Math.max(0, p.life);
      fc.fillStyle   = p.color;
      fc.beginPath();
      fc.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      fc.fill();
    });
    fc.globalAlpha = 1;
    ps = ps.filter(p => p.life > 0);
    requestAnimationFrame(animFW);
  }

  for (let i = 0; i < 6; i++) setTimeout(shoot, i * 500);
  setInterval(() => { if (Math.random() > 0.5) shoot(); }, 1400);
  animFW();
}

if (isBday()) launchFireworks();

/* ─────────────────────────────────────────────────────────
   ELEMENTOS FLOTANTES (girasoles y gatos)
───────────────────────────────────────────────────────── */
const FLOATERS = ['🌻', '🐱', '💙', '🌻', '🐾', '🌻', '🐱', '💛'];

function spawnFloat() {
  const el = document.createElement('div');
  el.className  = 'float-el';
  el.textContent = FLOATERS[Math.floor(Math.random() * FLOATERS.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top  = 'calc(100vh + 10px)';
  el.style.fontSize = (0.9 + Math.random() * 1) + 'rem';
  const dur = 10 + Math.random() * 12;
  el.style.animationDuration = dur + 's';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), dur * 1000);
}
setInterval(spawnFloat, 1200);

/* ─────────────────────────────────────────────────────────
   CURSOR PERSONALIZADO
───────────────────────────────────────────────────────── */
let mx = 0, my = 0, tx = 0, ty = 0;
const cur  = document.getElementById('cur');
const ring = document.getElementById('curRing');

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function moveCursor() {
  tx += (mx - tx) * 0.14;
  ty += (my - ty) * 0.14;
  cur.style.transform  = `translate(${mx - 5}px, ${my - 5}px)`;
  ring.style.transform = `translate(${tx - 18}px, ${ty - 18}px)`;
  requestAnimationFrame(moveCursor);
})();

/* ─────────────────────────────────────────────────────────
   MÚSICA
───────────────────────────────────────────────────────── */
const audio    = document.getElementById('bgAudio');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (musicOn) {
    audio.pause();
    musicBtn.textContent = '♪';
    musicBtn.classList.remove('on');
  } else {
    audio.play().catch(() => {});
    musicBtn.textContent = '♫';
    musicBtn.classList.add('on');
  }
  musicOn = !musicOn;
});

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─────────────────────────────────────────────────────────
   LOADER
───────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('out');
    document.getElementById('app').classList.add('show');
  }, 2200);
});
