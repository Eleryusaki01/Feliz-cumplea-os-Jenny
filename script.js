/* ═══════════════════════════════════════════════════════════
   script.js — Para Jenny 🌸
   Sistema autónomo · pétalos SVG · mariposas · música
═══════════════════════════════════════════════════════════ */

/* ── CONFIGURACIÓN ── */
const BDAY_MONTH = 8;     // Agosto
const BDAY_DAY   = 7;     // Día 7
const BIRTH_YEAR = 2006;  // Nació 07/08/2006

/* ── CONTENIDO POR AÑO ── */
const CONTENT = {
  2026: {
    letter: `Jenny hermosa,<br><br>
      Hoy que cumples <em>20 años</em>, quiero que sepas que eres de esas personas
      que dejan huella sin intentarlo. Tu sonrisa, tu manera de cantar, tu forma
      de ver el mundo a través de un lente — todo en ti es extraordinario.<br><br>
      Que este año te traiga girasoles en cada camino, gatos ronroneando a tu lado,
      y toda la paz que mereces. <strong>Feliz cumpleaños, Jenny.</strong>`,
    reasons: [
      { icon:'🌻', text:'Eres como los girasoles: siempre buscas la luz, y se la das a todos los que están cerca.' },
      { icon:'🐱', text:'Tienes la ternura de los gatos — tranquila por fuera, con un mundo enorme por dentro.' },
      { icon:'📷', text:'Tu mirada detrás de la cámara captura cosas que otros se pierden. Ves el mundo de manera única.' },
      { icon:'🎤', text:'Cuando cantas, el tiempo se detiene. Tu voz tiene algo que no se puede explicar, solo sentir.' },
      { icon:'💙', text:'El azul te queda porque eres profunda como el océano y serena como el cielo más despejado.' },
      { icon:'🖤', text:'El negro que vistes no es oscuridad — es elegancia, misterio, y seguridad en ti misma.' }
    ],
    finale: 'Eres la canción que no puedo sacarme de la cabeza.'
  },
  2027: {
    letter: `Mi Jenny preciosa,<br><br>
      <em>21 años</em> — qué manera de llegar a esta edad siendo ya tan increíble.
      Cada año que pasa te vuelves más tú: más segura, más brillante.
      Tu fe mueve cosas que los demás ni ven, y tu corazón cabe el mundo entero.<br><br>
      Que este año venga con girasoles en cada camino y toda la paz que mereces.
      <strong>Eres increíble, y hoy el mundo lo celebra.</strong>`,
    reasons: [
      { icon:'🌻', text:'A los 21 sigues siendo la misma luz de siempre, pero más intensa, más real, más tú.' },
      { icon:'🐱', text:'Los gatos te eligen porque saben reconocer a las personas con buen corazón.' },
      { icon:'🎤', text:'Tu voz este año sonó más bonita que nunca. Cada nota que cantas lleva algo tuyo.' },
      { icon:'📷', text:'Cada foto que tomas es un mundo que salvaste del olvido. Eso es un regalo enorme.' },
      { icon:'💙', text:'Tienes la profundidad del azul más oscuro y la claridad del cielo más abierto.' },
      { icon:'🖤', text:'El negro que llevas es tu firma — elegante, intencional, completamente tuya.' }
    ],
    finale: 'Cada año que cumples, el universo gana algo mejor.'
  }
};

function getContent(year) {
  if (CONTENT[year]) return CONTENT[year];
  const age = year - BIRTH_YEAR;
  return {
    letter: `Jenny,<br><br>
      <em>${age} años</em> de existencia extraordinaria.
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

/* ── INICIALIZACIÓN DOM ── */
const NOW  = new Date();
const YEAR = NOW.getFullYear();
const hasBdayPassed = (NOW.getMonth()+1 > BDAY_MONTH) ||
                      (NOW.getMonth()+1 === BDAY_MONTH && NOW.getDate() >= BDAY_DAY);
const AGE  = YEAR - BIRTH_YEAR - (hasBdayPassed ? 0 : 1);
const DATA = getContent(YEAR);
let musicOn = false;

document.getElementById('heroYear').textContent    = YEAR;
document.getElementById('ageOrb').textContent      = `${AGE} años de pura magia 🌸`;
document.getElementById('finaleYear').textContent  = YEAR;
document.getElementById('footerYear').textContent  = YEAR;
document.getElementById('letterText').innerHTML    = DATA.letter;
document.getElementById('finaleQuote').textContent = DATA.finale;

const grid = document.getElementById('reasonsGrid');
DATA.reasons.forEach((r, i) => {
  const card = document.createElement('div');
  card.className = 'reason-card';
  card.innerHTML = `<span class="reason-icon">${r.icon}</span>
                    <div class="reason-num">0${i+1}</div>
                    <p class="reason-text">${r.text}</p>`;
  grid.appendChild(card);
});

/* ══════════════════════════════════════════════════════════
   PÉTALOS SVG EN CANVAS
══════════════════════════════════════════════════════════ */
const canvas = document.getElementById('petalCanvas');
const ctx    = canvas.getContext('2d');
let W, H;
function resizeCanvas() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PETAL_COLORS = [
  '#ff6b9d','#ff3d7f','#ff8fb1','#ffb3d1',
  '#ff6b4a','#ffb347','#ff80aa','#e040fb',
  '#ff4081','#ff80ab','#f48fb1','#f06292'
];

class Petal {
  constructor() { this.reset(true); }
  reset(initial=false) {
    this.x = Math.random()*W;
    this.y = initial ? Math.random()*H : -40;
    this.size = Math.random()*13+7;
    this.speedY = Math.random()*1.4+0.5;
    this.speedX = (Math.random()-.5)*1.1;
    this.angle = Math.random()*Math.PI*2;
    this.spin  = (Math.random()-.5)*0.055;
    this.sway  = Math.random()*0.04+0.01;
    this.swayO = Math.random()*Math.PI*2;
    this.opacity = Math.random()*0.5+0.4;
    this.color = PETAL_COLORS[Math.floor(Math.random()*PETAL_COLORS.length)];
    this.t = 0;
    this.shape = Math.floor(Math.random()*3);
  }
  update() {
    this.t += 0.02;
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.t*this.sway+this.swayO)*0.75;
    this.angle += this.spin;
    if (this.y>H+40 || this.x<-80 || this.x>W+80) this.reset();
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalAlpha = this.opacity;
    ctx.shadowColor = this.color; ctx.shadowBlur = 5;
    ctx.beginPath(); ctx.fillStyle = this.color;
    const s = this.size;
    if (this.shape===0) {
      ctx.moveTo(0,-s); ctx.bezierCurveTo(s*.7,-s*.5,s*.8,s*.3,0,s); ctx.bezierCurveTo(-s*.8,s*.3,-s*.7,-s*.5,0,-s);
    } else if (this.shape===1) {
      ctx.ellipse(0,0,s*.6,s,0,0,Math.PI*2);
    } else {
      ctx.moveTo(0,-s*1.1); ctx.bezierCurveTo(s*.5,-s*.4,s*.4,s*.5,0,s*1.1); ctx.bezierCurveTo(-s*.4,s*.5,-s*.5,-s*.4,0,-s*1.1);
    }
    ctx.fill();
    ctx.globalAlpha = this.opacity*0.35; ctx.fillStyle='#fff';
    ctx.beginPath(); ctx.ellipse(-s*.15,-s*.25,s*.17,s*.33,-0.4,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }
}

const petals = Array.from({length:55},()=>new Petal());
function animPetals() { ctx.clearRect(0,0,W,H); petals.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animPetals); }
animPetals();

/* ══════════════════════════════════════════════════════════
   BOKEH
══════════════════════════════════════════════════════════ */
const bokehColors = [
  'rgba(255,107,157,.55)','rgba(255,184,0,.45)',
  'rgba(199,125,255,.45)','rgba(72,202,228,.4)',
  'rgba(255,107,74,.45)', 'rgba(255,128,170,.5)'
];
const bokehLayer = document.getElementById('bokehLayer');
for (let i=0;i<16;i++) {
  const el = document.createElement('div');
  el.className = 'bokeh-circle';
  const size = 50 + Math.random()*110;
  Object.assign(el.style, {
    width: size+'px', height: size+'px',
    left: (Math.random()*90)+'%',
    top:  (Math.random()*90)+'%',
    background: bokehColors[i%bokehColors.length],
    animationDuration: (14+Math.random()*14)+'s',
    animationDelay: (Math.random()*8)+'s'
  });
  bokehLayer.appendChild(el);
}

/* ══════════════════════════════════════════════════════════
   MARIPOSAS — CSS animation (sin insertRule, sin bugs)
══════════════════════════════════════════════════════════ */
const bflyColors = [
  ['#ff6b9d','#ffb347'],['#a855f7','#ec4899'],
  ['#06b6d4','#6366f1'],['#f43f5e','#f97316'],
  ['#8b5cf6','#ec4899'],['#fbbf24','#ef4444']
];

function createButterfly() {
  const container = document.getElementById('butterflies');
  const [c1,c2] = bflyColors[Math.floor(Math.random()*bflyColors.length)];
  const size = 30 + Math.random()*28;
  const top  = 8 + Math.random()*75; // % de la ventana
  const dur  = 13 + Math.random()*12;

  const el = document.createElement('div');
  el.className = 'butterfly';
  el.style.cssText = `top:${top}vh; left:-120px; width:${size*2.2}px; height:${size}px; animation-duration:${dur}s;`;

  // SVG con ID únicos para evitar conflictos
  const uid = Date.now()+'_'+Math.random().toString(36).slice(2,7);
  el.innerHTML = `<svg viewBox="0 0 100 60" width="${size*2.2}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="gL${uid}" cx="60%" cy="40%">
        <stop offset="0%" stop-color="${c2}" stop-opacity=".95"/>
        <stop offset="100%" stop-color="${c1}" stop-opacity=".7"/>
      </radialGradient>
      <radialGradient id="gR${uid}" cx="40%" cy="40%">
        <stop offset="0%" stop-color="${c2}" stop-opacity=".95"/>
        <stop offset="100%" stop-color="${c1}" stop-opacity=".7"/>
      </radialGradient>
    </defs>
    <ellipse cx="30" cy="22" rx="27" ry="17" fill="url(#gL${uid})" opacity=".9">
      <animateTransform attributeName="transform" type="rotate" values="-20,30,22;-4,30,22;-20,30,22" dur=".38s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="28" cy="40" rx="19" ry="12" fill="${c1}" opacity=".72">
      <animateTransform attributeName="transform" type="rotate" values="15,28,40;28,28,40;15,28,40" dur=".38s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="70" cy="22" rx="27" ry="17" fill="url(#gR${uid})" opacity=".9">
      <animateTransform attributeName="transform" type="rotate" values="20,70,22;4,70,22;20,70,22" dur=".38s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="72" cy="40" rx="19" ry="12" fill="${c1}" opacity=".72">
      <animateTransform attributeName="transform" type="rotate" values="-15,72,40;-28,72,40;-15,72,40" dur=".38s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="50" cy="32" rx="3.5" ry="13" fill="#3d1c2e" opacity=".75"/>
    <line x1="50" y1="18" x2="38" y2="6" stroke="#3d1c2e" stroke-width="1.2" opacity=".65"/>
    <circle cx="38" cy="6" r="2.4" fill="${c2}" opacity=".9"/>
    <line x1="50" y1="18" x2="62" y2="6" stroke="#3d1c2e" stroke-width="1.2" opacity=".65"/>
    <circle cx="62" cy="6" r="2.4" fill="${c2}" opacity=".9"/>
  </svg>`;

  container.appendChild(el);
  setTimeout(()=>el.remove(), (dur+1)*1000);
}

createButterfly();
setInterval(createButterfly, 3800);

/* ══════════════════════════════════════════════════════════
   SPARKLES FOTO
══════════════════════════════════════════════════════════ */
const sparkCont = document.getElementById('photoSparkles');
for (let i=0;i<10;i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  const angle = (i/10)*360;
  const r = 50 + Math.random()*18;
  const x = 50 + r*Math.cos(angle*Math.PI/180);
  const y = 50 + r*Math.sin(angle*Math.PI/180);
  const color = PETAL_COLORS[i%PETAL_COLORS.length];
  s.style.cssText = `left:${x}%;top:${y}%;width:${6+Math.random()*5}px;height:${6+Math.random()*5}px;
    background:${color};box-shadow:0 0 7px ${color};
    animation-duration:${1.4+Math.random()}s;animation-delay:${Math.random()*.8}s;`;
  sparkCont.appendChild(s);
}

/* ══════════════════════════════════════════════════════════
   COUNTDOWN
══════════════════════════════════════════════════════════ */
function isBday() { const n=new Date(); return n.getMonth()+1===BDAY_MONTH && n.getDate()===BDAY_DAY; }
function nextBday() {
  const n=new Date();
  let t=new Date(n.getFullYear(), BDAY_MONTH-1, BDAY_DAY, 0,0,0);
  if (n>=t) t.setFullYear(t.getFullYear()+1);
  return t;
}
function pad(n){return String(n).padStart(2,'0');}

if (isBday()) {
  document.getElementById('cdGrid').style.display = 'none';
  document.getElementById('bdayMsg').style.display = 'block';
  launchFW();
} else {
  function tick() {
    const diff = nextBday()-new Date();
    if (diff<=0){location.reload();return;}
    document.getElementById('cdD').textContent=pad(Math.floor(diff/86400000));
    document.getElementById('cdH').textContent=pad(Math.floor((diff%86400000)/3600000));
    document.getElementById('cdM').textContent=pad(Math.floor((diff%3600000)/60000));
    document.getElementById('cdS').textContent=pad(Math.floor((diff%60000)/1000));
  }
  tick(); setInterval(tick,1000);
}

/* ══════════════════════════════════════════════════════════
   FUEGOS (solo cumpleaños, SIN bloquear página)
══════════════════════════════════════════════════════════ */
function launchFW() {
  const fw = document.createElement('canvas');
  fw.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2;';
  fw.width=window.innerWidth; fw.height=window.innerHeight;
  window.addEventListener('resize',()=>{fw.width=window.innerWidth;fw.height=window.innerHeight;});
  document.body.insertBefore(fw,document.getElementById('loader'));
  const fc=fw.getContext('2d');
  let ps=[];
  const cols=['#ff6b9d','#ffb347','#c77dff','#48cae4','#ff6b4a','#ff80aa'];
  function shoot(){
    const x=Math.random()*fw.width, y=80+Math.random()*fw.height*.4;
    for(let i=0;i<45;i++){const a=(i/45)*Math.PI*2,sp=2+Math.random()*3.5;ps.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,color:cols[Math.floor(Math.random()*cols.length)]});}
  }
  function anim(){
    fc.fillStyle='rgba(255,240,245,.12)'; fc.fillRect(0,0,fw.width,fw.height);
    ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.032;p.life-=.011;fc.globalAlpha=Math.max(0,p.life);fc.fillStyle=p.color;fc.beginPath();fc.arc(p.x,p.y,2.5,0,Math.PI*2);fc.fill();});
    fc.globalAlpha=1; ps=ps.filter(p=>p.life>0); requestAnimationFrame(anim);
  }
  for(let i=0;i<4;i++) setTimeout(shoot,i*700);
  setInterval(()=>{if(Math.random()>.5)shoot();},2200);
  anim();
}

/* ══════════════════════════════════════════════════════════
   MÚSICA — reproducir al primer gesto real del usuario
══════════════════════════════════════════════════════════ */
const audio    = document.getElementById('bgAudio');
const musicBtn = document.getElementById('musicBtn');
const musicIcon= musicBtn.querySelector('.music-icon');
audio.volume   = 0.8;
audio.preload  = 'auto';
musicBtn.classList.add('waiting');

function setPlaying(){musicOn=true;musicIcon.textContent='♫';musicBtn.classList.remove('waiting');musicBtn.classList.add('on');}
function setStopped(){musicOn=false;musicIcon.textContent='♪';musicBtn.classList.remove('on');musicBtn.classList.add('waiting');}

// Capturar primer gesto — dentro del mismo event tick el navegador permite play()
function firstGesture(){
  audio.play().then(setPlaying).catch(()=>{});
  document.removeEventListener('mousedown', firstGesture);
  document.removeEventListener('touchstart',firstGesture);
}
document.addEventListener('mousedown', firstGesture);
document.addEventListener('touchstart',firstGesture,{passive:true});

// Intento de autoplay puro (funciona si el usuario ya visitó el sitio)
setTimeout(()=>{ if(!musicOn) audio.play().then(setPlaying).catch(()=>{}); },600);

musicBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  if(musicOn){audio.pause();setStopped();}
  else{audio.play().then(setPlaying).catch(()=>{});}
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* ══════════════════════════════════════════════════════════
   LOADER
══════════════════════════════════════════════════════════ */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
    document.getElementById('app').classList.add('show');
  },1800);
});
