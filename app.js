const projects = [
  {slug:'orbit',coverTitle:'Tiffany',cover:'assets/cover-tiffany-product.webp',client:'ORBIT',category:'Product design · 2025',title:'Making space for better everyday work',description:'A calmer, more connected workspace for the way modern teams think and create.',image:'assets/line-orbit.png',role:'Product design, Strategy',year:'2025',body:'A thoughtful digital workspace can make room for the work that matters. This demo project explores how a clear system, a little flexibility, and a human touch can bring a team closer together.'},
  {slug:'form',coverTitle:'Chanel',cover:'assets/cover-chanel-product.webp',client:'FORM STUDIO',category:'Brand experience · 2024',title:'A fresh perspective on the everyday',description:'Building a distinct digital home for a new generation of creative tools.',image:'assets/line-form.png',role:'Art direction, Digital design',year:'2024',body:'A new identity needs more than a fresh coat of paint. This demo brings the story, visual language, and digital experience together into a single, memorable system.'},
  {slug:'field',coverTitle:'Salomon',cover:'assets/cover-salomon-product.webp',client:'FIELD NOTES',category:'Digital product · 2023',title:'Finding clarity in a world of possibility',description:'Turning a complex journey into an experience that feels beautifully simple.',image:'assets/line-field.png',role:'Research, Product design',year:'2023',body:'The best experiences make complicated things feel natural. This demo takes an open-ended challenge and turns it into a clear, welcoming journey.'},
  {slug:'space',client:'COMMON SPACE',category:'Experience design · 2022',title:'A more considered way to connect',description:'Designing a welcoming experience that brings people and ideas together.',image:'assets/line-space.png',role:'Experience design, Strategy',year:'2022',body:'Connection starts with a sense of belonging. This demo explores a flexible experience designed to help people discover, participate, and feel at home.'}
];
const main=document.querySelector('#main');
const featured=(p)=>`<a class="featured-card" href="#/work/${p.slug}"><div class="project-image line-art" data-art="${p.slug}"><img src="${p.image}" alt="${p.client} project visual"><canvas class="art-canvas" aria-hidden="true"></canvas></div><div class="featured-copy"><div class="project-meta">${p.client} <i></i> ${p.category}</div><h3>${p.title}</h3><p>${p.description}</p><span class="text-link">Read the case study <span>→</span></span></div></a>`;
const projectTile = (project, index) => `
  <a class="project-card${index === 0 ? ' project-card-featured' : ''}" href="#/work/${project.slug}">
    <img class="project-card-cover" src="${project.cover}" alt="" loading="lazy" decoding="async">
    <div class="project-card-copy">
      <h3>${project.coverTitle}</h3>
      <span class="project-card-link">View project <span class="project-card-arrow" aria-hidden="true">↗</span></span>
    </div>
  </a>`;
const home=()=>`<div class="page"><section class="hero"><div class="hero-topline"><span>Independent designer<br>Selected works © 2026</span><span>Available worldwide<br>Based on Earth</span></div><h1><span>Designing and</span><span>building</span><span>what’s next.</span></h1><img class="hero-art" src="assets/hero.png" alt="A sculptural silver bird in motion"><div class="hero-bottom"><span>FRAN / DESIGNER</span><a href="#selected-work" data-scroll-work>SCROLL TO EXPLORE ↓</a></div></section><section class="intro"><p class="eyebrow">/ 01. OVERVIEW</p><div><h2>Hi, I’m Fran. I design thoughtful digital experiences for a more human world.</h2><p>I believe great design begins with curiosity. I work across strategy, product, and visual design to turn complex ideas into clear, meaningful experiences.</p><a class="text-link" href="#/about">A little more about me <span>↗</span></a></div></section></div>
<section class="section" id="selected-work" aria-labelledby="selected-work-heading">
  <h2 class="visually-hidden" id="selected-work-heading">Selected work</h2>
  <div class="card-grid">${projects.slice(0, 3).map(projectTile).join('')}</div>
</section>`;
const work=()=>`<div class="page inner-page"><h1 class="page-title">Case studies</h1><p class="page-lead">A selection of projects exploring how thoughtful design can make things work better for people.</p><section class="work-list section">${projects.map(featured).join('')}</section></div>`;
const about=()=>`<div class="page inner-page"><h1 class="page-title">A little about me.</h1><div class="about-layout"><h2>I’m interested in the space between a good idea and a meaningful experience.</h2><div><p>I’m Fran, a designer who loves making the complex feel simple. My work brings together curiosity, collaboration, and a belief that the details really do matter.</p><p>From the first sketch to the final interaction, I enjoy partnering with people who care about creating thoughtful things that make everyday life a little better.</p><a class="text-link" href="#/contact">Let’s work together <span>↗</span></a></div></div><div class="timeline"><div><span>2023 — PRESENT</span><strong>Independent designer</strong><p>Product & digital experiences</p></div><div><span>2020 — 2023</span><strong>Design studio</strong><p>Senior product designer</p></div><div><span>2017 — 2020</span><strong>Creative practice</strong><p>Digital designer</p></div></div></div>`;
const contact=()=>`<div class="page inner-page"><h1 class="page-title">Let’s build something</h1><p class="page-lead">Have a project, an idea, or just want to say hello? I’d love to hear from you.</p><div class="contact-grid"><div class="contact-panel"><span class="eyebrow">EMAIL</span><div class="email-box"><strong>hello@example.com</strong><button class="button primary" id="copy-email">Copy <span>▢</span></button></div><p class="page-lead" style="font-size:13px;margin:20px 0">A little note can be the start of something good.</p><a class="button" href="mailto:hello@example.com">Email me ↗</a></div><div class="contact-panel"><span class="eyebrow">OR SEND A MESSAGE</span><form id="contact-form"><label for="name">Name</label><input id="name" name="name" placeholder="Your name" required><label for="email">Email</label><input id="email" name="email" type="email" placeholder="you@company.com" required><label for="message">Message</label><textarea id="message" name="message" placeholder="Tell me a little about your idea" required></textarea><button class="button primary" type="submit">Write email <span>↗</span></button><p class="form-status" aria-live="polite"></p></form></div></div></div>`;
const chapters = [
  {id:'challenge',group:'THE PROBLEM',title:'The challenge',label:'THE CONTEXT',lead:'A good idea needs a clear problem to solve.',paragraphs:['The starting point was a familiar tension: people had more tools and more choices than ever, but finding a clear path through them still took too much effort. The experience needed to feel easier without hiding the complexity behind it.','We began by listening to the people who would use it, mapping their everyday routines, and identifying the moments where uncertainty slowed them down. The goal was to create a useful foundation rather than add another layer of noise.']},
  {id:'people',group:'THE PROBLEM',title:'Understanding the people',label:'RESEARCH',lead:'Start with the people, not the interface.',paragraphs:['We spoke with a small group of representative users and watched how they worked. Their individual needs were different, but a pattern emerged: everyone wanted to understand what mattered now and what to do next.','We turned those observations into a set of opportunity areas. They helped the team agree on priorities before moving into screens, components, or visual polish.']},
  {id:'direction',group:'KEY DECISIONS',title:'Finding a direction',label:'THE APPROACH',lead:'Make the important things feel obvious.',paragraphs:['The direction was built around three principles: give people a clear starting point, keep decisions understandable, and make the experience flexible enough to grow with them.','Instead of designing a collection of separate screens, we treated the product as a connected system. Every interaction had a role in helping people move forward with confidence.']},
  {id:'structure',group:'KEY DECISIONS',title:'01  Shape the structure',label:'DECISION 01 OF 04',lead:'A simple structure creates room for everything else.',paragraphs:['We organized the experience around the things people were trying to accomplish. Navigation, content and actions followed the same logic, making the product feel consistent from the first visit onward.','Early sketches let us test the structure quickly. We kept the parts that helped people orient themselves and removed anything that made the journey harder to explain.']},
  {id:'system',group:'KEY DECISIONS',title:'02  Build a visual system',label:'DECISION 02 OF 04',lead:'One visual language, many thoughtful details.',paragraphs:['A small set of type, spacing, color and interaction rules gave the work a shared rhythm. The system was intentionally practical: expressive enough to feel distinct, and simple enough for a team to use every day.','Components were designed together with their states, so empty screens, loading moments and small transitions felt like part of the same experience.']},
  {id:'prototype',group:'KEY DECISIONS',title:'03  Make it tangible',label:'DECISION 03 OF 04',lead:'A prototype is a better conversation than a promise.',paragraphs:['We made an interactive prototype early and put it in front of people. Seeing the work in motion exposed questions that static layouts had left unanswered.','Each round brought the experience closer to the way people actually think and work. Small improvements to hierarchy, timing and feedback added up to a much calmer whole.']},
  {id:'refine',group:'KEY DECISIONS',title:'04  Refine the details',label:'DECISION 04 OF 04',lead:'The details are where the idea becomes real.',paragraphs:['We worked through the less visible moments: what happens when a person changes their mind, encounters an empty state, or returns after time away. Those moments shaped the experience as much as the main flow.','The result is a foundation designed to evolve. It gives the team a common language while leaving space for new needs and unexpected ideas.']},
  {id:'outcome',group:'RESULTS',title:'The outcome',label:'RESULTS',lead:'A clearer experience, and a stronger foundation for what comes next.',paragraphs:['The final concept brings strategy, interaction and visual design together in one coherent experience. It is designed to make the next step clearer for the people using it and the people building it.','This is an illustrative demo case study. Replace these sections with your own research, decisions, process images and verified outcomes when your project is ready.']},
  {id:'reflection',group:'RESULTS',title:'What I learned',label:'REFLECTION',lead:'Good design makes space for better questions.',paragraphs:['The most useful work happened when we made our assumptions visible and invited people into the process early. That approach created shared understanding and helped the team focus on what would matter most.','If we continued, we would test the concept with a wider range of people, measure the experience over time, and use what we learned to guide the next iteration.']}
];
const sectionHTML=(c,i,p)=>`<section class="case-chapter" id="case-${c.id}" data-case-section="${c.id}"><p class="eyebrow">${c.label}</p><h2>${c.title}</h2><p class="chapter-lead">${c.lead}</p>${c.paragraphs.map(t=>`<p>${t}</p>`).join('')}${i===0?`<div class="case-insight"><span>THE OPPORTUNITY</span><strong>Make a complex journey feel clear, useful, and human.</strong><p>Align people around the problem before deciding what to build.</p></div>`:''}${i===3||i===6?`<figure class="case-figure"><img src="${i===3?'assets/line-form.png':'assets/line-field.png'}" alt="Original line illustration for the ${p.client} demo case study"><figcaption>Exploring the system, one idea at a time · Demo illustration</figcaption></figure>`:''}${i===5?`<div class="case-comparison"><div><span>BEFORE</span><strong>A collection of disconnected ideas.</strong><p>Different paths, different rules, and no clear shared direction.</p></div><div><span>THE APPROACH</span><strong>One connected experience.</strong><p>A flexible system that helps people understand where to go next.</p></div></div>`:''}</section>`;
const detail=(p)=>`<div class="page inner-page case-page"><a class="back-link" href="#/work">← &nbsp; All work</a><div class="case-top"><div><h1>${p.title}</h1><p>${p.description}</p></div><div class="case-details"><div><span>PROJECT</span>${p.client}</div><div><span>ROLE</span>${p.role}</div><div><span>YEAR</span>${p.year}</div><div><span>READ</span>8 min · Demo case study</div></div></div><div class="case-cover line-art" data-art="${p.slug}"><img src="${p.image}" alt="${p.client} project line illustration"><canvas class="art-canvas" aria-hidden="true"></canvas></div><div class="case-summary"><div><p class="eyebrow">THE SHORT VERSION</p><h2>A little context before we begin.</h2></div><div><p><strong>THE CHALLENGE</strong> Turning a complex journey into a clear, useful experience.</p><p><strong>THE APPROACH</strong> Listening first, designing a connected system, and testing it with people.</p><p><strong>THE OUTCOME</strong> A thoughtful demo concept and a foundation for future work.</p></div></div><div class="case-layout"><aside class="case-sidebar" aria-label="Case study contents"><div class="case-sidebar-inner">${['THE PROBLEM','KEY DECISIONS','RESULTS'].map(group=>`<div class="case-nav-group"><p>${group}</p>${chapters.filter(c=>c.group===group).map(c=>`<button type="button" data-case-target="${c.id}">${c.title}</button>`).join('')}</div>`).join('')}</div></aside><article class="case-article">${chapters.map((c,i)=>sectionHTML(c,i,p)).join('')}<a class="text-link case-back" href="#/work">← &nbsp; Back to all work</a></article></div></div>`;
function render(){let path=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);let page=path[0]||'home';let project=projects.find(p=>p.slug===path[1]);main.innerHTML=page==='work'?(project?detail(project):work()):page==='about'?about():page==='contact'?contact():home();document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===page));document.title=(project?project.title:page==='home'?'Fran — Selected Works':`${page[0].toUpperCase()+page.slice(1)} — Fran`);updateNavIndicator();document.body.classList.toggle('is-case',Boolean(project));window.scrollTo({top:0,behavior:'instant'});document.querySelector('#header').classList.remove('compact');openingArtwork = main.querySelector('.hero-art');queueBirdParallax();wire();updateReading();}
function wire(){initArtwork();document.querySelectorAll('[data-case-target]').forEach(button=>button.addEventListener('click',()=>document.getElementById('case-'+button.dataset.caseTarget)?.scrollIntoView({block:'start'})));document.querySelectorAll('.line-art').forEach(card=>{card.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=card.getBoundingClientRect();card.style.setProperty('--move-x',((e.clientX-r.left)/r.width-.5)*12+'px');card.style.setProperty('--move-y',((e.clientY-r.top)/r.height-.5)*10+'px')});card.addEventListener('pointerleave',()=>{card.style.setProperty('--move-x','0px');card.style.setProperty('--move-y','0px')})});let scrollWork=document.querySelector('[data-scroll-work]');if(scrollWork)scrollWork.addEventListener('click',e=>{e.preventDefault();document.querySelector('#selected-work').scrollIntoView({behavior:'smooth'})});let copy=document.querySelector('#copy-email');if(copy)copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('hello@example.com');copy.innerHTML='Copied ✓';setTimeout(()=>copy.innerHTML='Copy <span>▢</span>',2000)}catch{copy.textContent='hello@example.com'}});let form=document.querySelector('#contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(`Portfolio inquiry from ${d.get('name')}`);const body=encodeURIComponent(`${d.get('message')}\n\nFrom: ${d.get('name')} (${d.get('email')})`);location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`;form.querySelector('.form-status').textContent='Your email app will open with your message ready to send.'})}
const toggle=document.querySelector('.theme-toggle');function setTheme(dark){document.body.classList.toggle('dark',dark);toggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');localStorage.setItem('fran-theme',dark?'dark':'light');window.dispatchEvent(new Event('portfolio-theme-change'))}setTheme(localStorage.getItem('fran-theme')==='dark');toggle.addEventListener('click',()=>setTheme(!document.body.classList.contains('dark')));window.addEventListener('scroll',()=>{document.querySelector('#header').classList.toggle('compact',scrollY>150);updateReading()},{passive:true});window.addEventListener('hashchange',render);document.querySelector('#back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

function keepChapterTabVisible(button) {
  const rail = button.closest('.case-sidebar');
  if (rail.scrollWidth <= rail.clientWidth) return;

  const railBounds = rail.getBoundingClientRect();
  const tabBounds = button.getBoundingClientRect();
  const padding = parseFloat(getComputedStyle(rail).paddingInlineStart);
  if (tabBounds.left < railBounds.left + padding || tabBounds.right > railBounds.right - padding) {
    // Move just the horizontal rail, keeping the page at its current reading position.
    rail.scrollLeft += (tabBounds.left + tabBounds.width / 2) - (railBounds.left + rail.clientWidth / 2);
  }
}

function updateReading() {
  const bar = document.querySelector('.reading-progress span');
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? Math.min(100, Math.max(0, scrollY / max * 100)) : 0) + '%';

  const sections = document.querySelectorAll('[data-case-section]');
  if (!sections.length) return;

  const chapterOffset = parseFloat(getComputedStyle(sections[0]).scrollMarginTop);
  const readingLine = Math.max(innerHeight * 0.32, chapterOffset + 1);
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top > readingLine) break;
    current = section;
  }

  const previous = main.querySelector('[data-case-target].active');
  const active = main.querySelector(`[data-case-target="${current.dataset.caseSection}"]`);
  if (active === previous) return;

  previous?.classList.remove('active');
  previous?.removeAttribute('aria-current');
  active.classList.add('active');
  active.setAttribute('aria-current', 'location');
  keepChapterTabVisible(active);
}

window.addEventListener('resize', () => {
  updateReading();
  const active = main.querySelector('[data-case-target].active');
  if (active) keepChapterTabVisible(active);
});

const avatar = document.querySelector('.avatar');
const avatarTrigger = document.querySelector('.brand');
const portrait = avatar.querySelector('img');
const particleCanvas = avatar.querySelector('canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let openingArtwork = null;
let birdFrame = 0;

function queueBirdParallax() {
  if (!openingArtwork || birdFrame || reducedMotion.matches) return;

  birdFrame = requestAnimationFrame(() => {
    birdFrame = 0;
    if (!openingArtwork) return;
    const shift = `${Math.min(Math.max(0, window.scrollY) * 0.12, 40)}px`;
    if (openingArtwork.style.getPropertyValue('--bird-shift') !== shift) {
      openingArtwork.style.setProperty('--bird-shift', shift);
    }
  });
}

window.addEventListener('scroll', queueBirdParallax, { passive: true });
reducedMotion.addEventListener('change', queueBirdParallax);

let particleFrame = 0;
let particleProgress = 0;
let particleTarget = 0;
let portraitParticles = [];
let particleStart = 0;
let avatarPointer = { x: 96, y: 48 };

function makePortraitParticles() {
  if (!portrait.complete || !portrait.naturalWidth) return false;
  const sample = document.createElement('canvas');
  sample.width = sample.height = 44;
  const sampleContext = sample.getContext('2d', { willReadFrequently: true });
  sampleContext.drawImage(portrait, 0, 0, 44, 44);
  const pixels = sampleContext.getImageData(0, 0, 44, 44).data;
  const gaussian = () => (Math.random() + Math.random() + Math.random() + Math.random() - 2);
  portraitParticles = [];
  // The source photo supplies the color of every fine particle.
  for (let n = 0; n < 1500; n++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * 21;
    const x = 22 + Math.cos(angle) * radius;
    const y = 22 + Math.sin(angle) * radius;
    const i = (Math.floor(y) * 44 + Math.floor(x)) * 4;
    const spreadX = gaussian() * 18;
    const spreadY = gaussian() * 8;
    portraitParticles.push({
      x: 74 + x, y: 26 + y,
      dx: 24 + spreadX + (x - 22) * .35,
      dy: spreadY + (y - 22) * .12,
      size: .32 + Math.random() * .55,
      phase: Math.random() * Math.PI * 2,
      color: `rgb(${pixels[i]},${pixels[i + 1]},${pixels[i + 2]})`
    });
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  particleCanvas.width = 288 * dpr;
  particleCanvas.height = 96 * dpr;
  particleCanvas.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
  return true;
}

function drawPortraitParticles(time) {
  if (!particleStart) particleStart = time;
  particleProgress += (particleTarget - particleProgress) * (particleTarget ? .105 : .14);
  if (Math.abs(particleTarget - particleProgress) < .002) particleProgress = particleTarget;
  const context = particleCanvas.getContext('2d');
  context.clearRect(0, 0, 288, 96);
  const drift = (time - particleStart) * .001;
  for (const p of portraitParticles) {
    const shimmerX = Math.sin(drift * 1.2 + p.phase) * 1.1 * particleProgress;
    const shimmerY = Math.cos(drift * 1.4 + p.phase) * .8 * particleProgress;
    context.fillStyle = p.color;
    context.globalAlpha = Math.min(1, particleProgress * 2.5) * .86;
    const x = p.x + p.dx * particleProgress + shimmerX;
    const y = p.y + p.dy * particleProgress + shimmerY;
    const vx = x - avatarPointer.x, vy = y - avatarPointer.y;
    const distance = Math.max(1, Math.hypot(vx, vy));
    const push = Math.max(0, 1 - distance / 36) * 11 * particleProgress;
    context.beginPath();
    context.arc(x + vx / distance * push, y + vy / distance * push, p.size, 0, Math.PI * 2);
    context.fill();
  }
  context.globalAlpha = 1;
  if (particleTarget || particleProgress > 0) particleFrame = requestAnimationFrame(drawPortraitParticles);
  else {
    particleFrame = 0;
    particleStart = 0;
    avatar.classList.remove('particle-active');
    context.clearRect(0, 0, 288, 96);
  }
}

avatarTrigger.addEventListener('pointerenter', event => {
  if (!finePointer.matches || reducedMotion.matches || event.pointerType === 'touch' || (!portraitParticles.length && !makePortraitParticles())) return;
  particleTarget = 1;
  avatar.classList.add('particle-active');
  if (!particleFrame) particleFrame = requestAnimationFrame(drawPortraitParticles);
});
avatarTrigger.addEventListener('pointermove', event => {
  const bounds = avatar.getBoundingClientRect();
  avatarPointer = { x: event.clientX - bounds.left + 74, y: event.clientY - bounds.top + 26 };
});
avatarTrigger.addEventListener('pointerleave', () => {
  particleTarget = 0;
  avatar.classList.remove('particle-active');
  if (!particleFrame && particleProgress) particleFrame = requestAnimationFrame(drawPortraitParticles);
});
avatar.addEventListener('click', () => {
  if (location.hash && location.hash !== '#/') location.hash = '#/';
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navLinks = document.querySelector('.nav-links');
const navIndicator = navLinks.querySelector('.nav-indicator');
function updateNavIndicator() {
  const active = navLinks.querySelector('[data-route].active');
  if (!active) {
    navIndicator.style.opacity = '0';
    return;
  }
  navIndicator.style.width = `${active.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${active.offsetLeft}px) translateY(-50%)`;
  navIndicator.style.opacity = '1';
}
const navResizeObserver = new ResizeObserver(updateNavIndicator);
navResizeObserver.observe(navLinks);
navLinks.querySelectorAll('[data-route]').forEach(link => navResizeObserver.observe(link));

let artCleanups=[];
function initArtwork(){
  artCleanups.forEach(clean=>clean());artCleanups=[];
  document.querySelectorAll('.line-art[data-art]').forEach(box=>{
    const canvas=box.querySelector('canvas');if(!canvas)return;
    const ctx=canvas.getContext('2d');const type=box.dataset.art;
    let active=-1,frame=0,hover={x:-999,y:-999},lifts=Array(9).fill(0),dimensions={w:0,h:0};
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function resize(){const r=box.getBoundingClientRect();if(!r.width||!r.height)return;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);dimensions={w:r.width,h:r.height};ctx.setTransform(dpr*r.width/1000,0,0,dpr*r.height/600,0,0);draw()}
    const point=(x,y,z=0)=>({x:500+(x-y)*92,y:300+(x+y)*50-z*85});
    function line(a,b){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    function rounded(points,r=.16){ctx.beginPath();for(let i=0;i<points.length;i++){const a=points[(i+points.length-1)%points.length],b=points[i],c=points[(i+1)%points.length];const p={x:b.x+(a.x-b.x)*r,y:b.y+(a.y-b.y)*r},q={x:b.x+(c.x-b.x)*r,y:b.y+(c.y-b.y)*r};if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);ctx.quadraticCurveTo(b.x,b.y,q.x,q.y)}ctx.closePath()}
    function tile(x,y,z,size=0.64){const corners=[[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]];const top=corners.map(([a,b])=>point(a,b,z));const lower=corners.map(([a,b])=>point(a,b,z-.13));ctx.globalAlpha=.6;rounded(lower);ctx.stroke();for(let i=0;i<4;i++)line(top[i],lower[i]);ctx.globalAlpha=.92;rounded(top);ctx.fillStyle=document.body.classList.contains('dark')?'#242424':'#eef1f5';ctx.fill();ctx.stroke();ctx.globalAlpha=1}
    function grid(){ctx.save();ctx.globalAlpha=.12;ctx.lineWidth=1;for(let n=-2;n<=2;n++){line(point(n,-2.3,-.35),point(n,2.3,-.35));line(point(-2.3,n,-.35),point(2.3,n,-.35))}ctx.restore()}
    let anchors=[];
    function draw(){if(!dimensions.w)return;ctx.clearRect(0,0,1000,600);ctx.lineWidth=1.55;ctx.lineJoin='round';ctx.lineCap='round';ctx.strokeStyle=document.body.classList.contains('dark')?'#aeb6bf':'#718092';anchors=[];
      if(type==='orbit'){
        grid();const nodes=[[-1.35,-1.35],[0,-1.35],[1.35,-1.35],[-1.35,0],[0,0],[1.35,0],[-1.35,1.35],[0,1.35],[1.35,1.35]];
        ctx.save();ctx.globalAlpha=.26;ctx.setLineDash([5,7]);nodes.forEach(([x,y],i)=>{if(i!==4)line(point(0,0,-.05),point(x,y,-.05))});ctx.restore();
        nodes.forEach(([x,y],i)=>{const z=.08+lifts[i]*.58;tile(x,y,z,i===4?.52:.38);anchors.push(point(x,y,.08));if(i===4){const a=point(x,y,z);ctx.beginPath();ctx.ellipse(a.x,a.y,23,12,0,0,Math.PI*2);ctx.stroke()}});
      }else if(type==='form'){
        grid();const layers=[[-.28,-.2,-.12],[0,0,.3],[.28,.2,.72],[.56,.4,1.14]];
        layers.forEach(([x,y,z],i)=>{tile(x,y,z+lifts[i]*.45,1.0);const a=point(x,y,z+lifts[i]*.45);ctx.save();ctx.globalAlpha=.35;ctx.beginPath();ctx.ellipse(a.x,a.y,42,23,0,0,Math.PI*2);ctx.stroke();ctx.restore();anchors.push(point(x,y,z))});
      }else if(type==='field'){
        const cx=500,cy=295;ctx.save();ctx.globalAlpha=.7;[145,118,95].forEach((r,i)=>{ctx.beginPath();ctx.ellipse(cx,cy-lifts[i]*25,r,r*.52,0,0,Math.PI*2);ctx.stroke()});ctx.restore();
        ctx.beginPath();ctx.moveTo(cx-53,cy+28-lifts[0]*25);ctx.lineTo(cx+53,cy-28-lifts[0]*25);ctx.lineTo(cx+17,cy+6-lifts[0]*25);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.ellipse(cx,cy-lifts[0]*25,14,7,0,0,Math.PI*2);ctx.stroke();
        [[-1.7,-1.7],[1.7,-1.7],[-1.7,1.7],[1.7,1.7]].forEach(([x,y],i)=>{tile(x,y,.12+lifts[i+1]*.5,.22);anchors.push(point(x,y,.12))});anchors.push({x:cx,y:cy});
      }else{
        grid();ctx.beginPath();ctx.ellipse(500,340,133,68,0,0,Math.PI*2);ctx.stroke();
        const posts=[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]];posts.forEach(([x,y],i)=>{let base=point(x,y,0),top=point(x,y,1.35+lifts[i]*.4);line(base,top);anchors.push(point(x,y,.7));const next=posts[[1,3,0,2][i]];const end=point(next[0],next[1],1.35+lifts[i]*.4);ctx.beginPath();ctx.moveTo(top.x,top.y);ctx.quadraticCurveTo((top.x+end.x)/2,(top.y+end.y)/2-105,end.x,end.y);ctx.stroke();ctx.save();ctx.globalAlpha=.4;line({x:base.x+8,y:base.y+4},{x:top.x+8,y:top.y+4});ctx.restore()});
      }
    }
    function animate(){let unsettled=false;lifts=lifts.map((v,i)=>{const target=i===active?1:0;const next=reduced?target:v+(target-v)*.15;if(Math.abs(target-next)>.005)unsettled=true;return next});draw();if(unsettled)frame=requestAnimationFrame(animate);else frame=0}
    function move(e){const r=box.getBoundingClientRect();hover={x:(e.clientX-r.left)/r.width*1000,y:(e.clientY-r.top)/r.height*600};let nearest=-1,distance=150;anchors.forEach((a,i)=>{const d=Math.hypot(a.x-hover.x,a.y-hover.y);if(d<distance){distance=d;nearest=i}});if(nearest!==active){active=nearest;if(!frame)frame=requestAnimationFrame(animate)}}
    function leave(){active=-1;if(!frame)frame=requestAnimationFrame(animate)}
    const observer=new ResizeObserver(resize);observer.observe(box);box.addEventListener('pointermove',move);box.addEventListener('pointerleave',leave);const refresh=()=>draw();window.addEventListener('portfolio-theme-change',refresh);box.classList.add('art-ready');resize();artCleanups.push(()=>{observer.disconnect();box.removeEventListener('pointermove',move);box.removeEventListener('pointerleave',leave);window.removeEventListener('portfolio-theme-change',refresh);cancelAnimationFrame(frame)});
  });
}

navIndicator.style.transition = "none";
render();
requestAnimationFrame(() => { navIndicator.style.transition = ""; });
