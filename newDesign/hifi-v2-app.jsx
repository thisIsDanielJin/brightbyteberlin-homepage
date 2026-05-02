/* ═══════════════════════════════════════════════════════════════════════
   BRIGHTBYTE BERLIN — HI-FI v2 (rev B)
   Direction 1 — "Bone" — with plum accent, refined hero, full page.
   ═══════════════════════════════════════════════════════════════════════ */

const C = {
  bg:          '#F5F1E8',
  surface:     '#FBF8F1',
  surfaceAlt:  '#FFFFFF',
  ink:         '#14130F',
  inkSoft:     '#3A3833',
  sub:         '#6B665C',
  subLight:    '#9A958A',
  accent:      '#6B3977',   // plum
  accentSoft:  '#C4ADCF',
  accentBg:    '#EDE5F0',
  green:       '#16A34A',
  hair:        'rgba(20,19,15,0.08)',
  hairStrong:  'rgba(20,19,15,0.14)',
};

const { motion } = window.Motion || {};

/* ═══ CONTENT ═══════════════════════════════════════════════════════════ */
const PERF = [
  {label:'Performance', value:98},
  {label:'Accessibility', value:96},
  {label:'Best Practices', value:100},
  {label:'SEO', value:100},
];

const SERVICES = [
  {tag:'01', title:'Landing pages', desc:'High-performing single pages built to convert. Conversion-focused copy, Lighthouse 95+, ships in 1–2 weeks.', meta:'1–2 weeks', img:'lp'},
  {tag:'02', title:'Web apps & MVPs', desc:'Full-stack Next.js apps with auth, database, admin panels. Built to grow with your business.', meta:'3–8 weeks', img:'app'},
  {tag:'03', title:'AI integrations', desc:'Chatbots, semantic search, automated workflows wired into your product. Production-grade, not demos.', meta:'Scope-based', img:'ai'},
  {tag:'04', title:'Ongoing support', desc:'Priority fixes, monitoring, SEO health, and new features. You\'re never on your own.', meta:'Monthly retainer', img:'sup'},
];

const PROCESS = [
  {n:'01', t:'Kickoff',  d:'30-min call to understand your goals. Fixed-price proposal back to you within 48 hours.'},
  {n:'02', t:'Design',   d:'Wireframes first, then visual design in Figma. Tight feedback loop before any code.'},
  {n:'03', t:'Build',    d:'Weekly sprints, weekly demos. You see everything as it ships — no black boxes.'},
  {n:'04', t:'Launch',   d:'Deploy, test, hand off — and I stay around for support, fixes, and iteration.'},
];

const SERVICES_DETAIL = [
  {title:'Landing pages', img:'lp', value:'Convert visitors into customers with a single, fast, focused page.',
    features:['Custom responsive design','Conversion-optimized layout & copy','Lighthouse 95+ guaranteed','Basic SEO + analytics setup','2 rounds of feedback included'],
    timeline:'1–2 weeks', ideal:'Launches, campaigns, and MVPs.'},
  {title:'Web apps & MVPs', img:'app', value:'Full-stack applications that grow with your business.',
    features:['Next.js + database + auth','Admin panel or CMS','Forms, integrations, payments','Performance baseline + monitoring','30 days post-launch support'],
    timeline:'3–8 weeks', ideal:'SaaS products, portals, and internal tools.'},
  {title:'AI integrations', img:'ai', value:'Production-grade AI wired into your product. Not demos.',
    features:['Chatbots + semantic search','Automated workflows','RAG pipelines + embeddings','Production monitoring + fallbacks','Integration with existing stack'],
    timeline:'Scope-based', ideal:'Teams ready to ship AI features.'},
];

const WORK = [
  {client:'Lindner Bäckerei', kind:'Local business · landing + booking', metric:'+34% bookings', tag:'lindner', stars:5, quote:'"Daniel delivered in 10 days. Our bookings went up immediately."'},
  {client:'Atlas Studio', kind:'Web app · client portal', metric:'10× faster than legacy', tag:'atlas', stars:5, quote:'"Finally a developer who speaks plain German and ships on time."'},
  {client:'Verdant Yoga', kind:'Multi-page · class scheduling', metric:'Lighthouse 100', tag:'verdant', stars:5, quote:'"The site loads instantly. Students notice. We notice."'},
];

const PROJECTS = [
  {
    slug: 'architecture-studio',
    title: 'Studio Meier',
    subtitle: 'Architecture portfolio with project CMS',
    client: 'Studio Meier Architekten',
    year: '2025',
    type: 'Multi-page · portfolio',
    tech: ['Next.js', 'Framer Motion', 'Sanity CMS'],
    accentColor: '#4A6741',
    brief: 'A Berlin-based architecture firm needed a portfolio site that showcased large-format photography of their built projects while letting the team update content independently. No developer needed for new project uploads.',
    solution: 'Built a fast, image-first portfolio on Next.js with a headless Sanity CMS. The team manages projects, press mentions, and team bios from a simple dashboard.',
    solutionBullets: ['Responsive masonry gallery with lightbox', 'CMS dashboard for self-managed content', 'Optimized image pipeline (WebP, lazy loading, blur placeholders)', 'Bilingual DE/EN with automatic routing'],
    metrics: [
      {value:'98', label:'Lighthouse score', delta:'+34'},
      {value:'3×', label:'More inquiries', delta:'+200%'},
      {value:'12', label:'Days to launch', delta:'on time'},
    ],
    quote: '"The site finally looks as good as our buildings. And we can update it ourselves — that was the game changer."',
    quoteAuthor: 'Julia Meier, Founder',
    nextSlug: 'baumpflege',
  },
  {
    slug: 'baumpflege',
    title: 'Baumpflege Schmidt',
    subtitle: 'Local service business · leads & booking',
    client: 'Baumpflege Schmidt GmbH',
    year: '2025',
    type: 'Landing page · lead generation',
    tech: ['Next.js', 'Tailwind CSS', 'Cal.com'],
    accentColor: '#5B7B3A',
    brief: 'A tree care company in Brandenburg relied on word-of-mouth. They needed a professional web presence to attract new residential and commercial clients, with an easy way to request quotes.',
    solution: 'Designed and built a conversion-focused landing page with clear service descriptions, trust signals (certifications, insurance), and an integrated booking calendar for free estimates.',
    solutionBullets: ['Conversion-optimized single page with clear CTAs', 'Integrated booking calendar for on-site estimates', 'Before/after gallery showcasing completed work', 'Local SEO setup (Google Business, schema markup)'],
    metrics: [
      {value:'+47%', label:'More leads', delta:'vs. old site'},
      {value:'100', label:'PageSpeed', delta:'mobile'},
      {value:'8', label:'Days to launch', delta:'from start'},
    ],
    quote: '"Seit der neuen Seite rufen doppelt so viele Kunden an. Und die Buchung läuft automatisch."',
    quoteAuthor: 'Thomas Schmidt, Geschäftsführer',
    nextSlug: 'psychologin',
  },
  {
    slug: 'psychologin',
    title: 'Praxis Kern',
    subtitle: 'Workshop booking & professional presence',
    client: 'Dipl.-Psych. Susanne Kern',
    year: '2024',
    type: 'Multi-page · booking system',
    tech: ['Next.js', 'Stripe', 'Notion API'],
    accentColor: '#7B5E8A',
    brief: 'A self-employed psychologist offering group workshops needed a professional site that conveyed warmth and competence — with an integrated booking and payment system for her workshop series.',
    solution: 'Created a calm, trust-building multi-page site with workshop listings synced from Notion, online payment via Stripe, and automated confirmation emails.',
    solutionBullets: ['Workshop listings synced from Notion database', 'Stripe checkout for online workshop payments', 'Automated confirmation & reminder emails', 'Warm, accessible design meeting WCAG AA standards'],
    metrics: [
      {value:'92%', label:'Bookings online', delta:'vs. 20% before'},
      {value:'€0', label:'Admin overhead', delta:'automated'},
      {value:'14', label:'Days to launch', delta:'on schedule'},
    ],
    quote: '"Endlich kann ich mich auf meine Arbeit konzentrieren statt auf Verwaltung. Die Buchungen laufen von allein."',
    quoteAuthor: 'Susanne Kern, Dipl.-Psychologin',
    nextSlug: 'architecture-studio',
  },
];

const SCOPE_OPTIONS = [
  {
    id:'landing', title:'Landing page', tagline:'One focused page that converts', timeline:'1–2 weeks',
    includes:['Custom responsive design','Conversion-optimized layout','SEO + analytics setup','Lighthouse 95+ guaranteed','2 feedback rounds included'],
    advantages:['€0–5/mo hosting (Vercel free tier)','No monthly platform fees','You own the code — forever','Loads 3× faster than Webflow'],
    ideal:'Launches, campaigns, MVPs',
  },
  {
    id:'multipage', title:'Multi-page site', tagline:'Grow without platform limits', timeline:'3–4 weeks',
    includes:['5–10 pages, fully custom','CMS for self-managed content','Forms + integrations','Performance baseline + monitoring','30 days post-launch support'],
    advantages:['No Webflow/Squarespace subscription','Custom code = no template constraints','Full ownership — take it anywhere','SEO that actually ranks (not template bloat)'],
    ideal:'Established businesses, portfolios, service companies',
  },
  {
    id:'webapp', title:'Web app / MVP', tagline:'Full-stack, built to scale', timeline:'4–8 weeks',
    includes:['Next.js + database + auth','Admin panel or dashboard','Payments, automations, APIs','Weekly progress demos','Ongoing support available'],
    advantages:['No per-seat SaaS costs','Own your data and infrastructure','Ship 2–3× faster than hiring in-house','Enterprise quality without enterprise overhead'],
    ideal:'SaaS products, portals, internal tools',
  },
];

const FAQS = [
  {q:'How long does a typical project take?', a:'Landing pages ship in 1–2 weeks. Multi-page sites in 3–4. Web apps run 4–8 weeks depending on scope. You\'ll get a fixed timeline in the proposal — and weekly progress, so nothing surprises you.', main:true},
  {q:'Do you work with non-tech founders?', a:'Yes — most of my clients are non-technical. I translate the technical bits into plain language and you\'ll always know what we\'re building and why.'},
  {q:'What does "ongoing support" actually mean?', a:'A monthly retainer covering priority fixes, content updates, performance monitoring, security patches, and small new features. Faster than agency turnaround, predictable cost.'},
  {q:'Will I own the code and content?', a:'Yes, fully. Code goes into your GitHub. Domain and hosting in your name. You\'re free to take it anywhere if we ever part ways.'},
  {q:'Where are you based, and do you work remotely?', a:'I\'m based in Berlin (CET). I work with clients across Germany and Europe — happy on Zoom, happy in person if you\'re in town.'},
  {q:'Can you redesign my existing site?', a:'Absolutely. I audit what you have, keep what works, and rebuild the rest on a modern stack. Most redesigns ship in 3–4 weeks with zero downtime during the switch.'},
  {q:'Do you offer SEO optimization?', a:'Every site I build ships with technical SEO baked in — fast load times, proper meta tags, structured data, mobile-first design. For ongoing SEO (content strategy, link building), I partner with a specialist and coordinate the work.'},
];

/* ═══ HELPERS ═══════════════════════════════════════════════════════════ */
const useInView = (threshold = 0.2) => {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, {threshold});
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const CountUp = ({end, duration=1500, prefix='', suffix=''}) => {
  const [val, setVal] = React.useState(0);
  const [ref, inView] = useInView(0.3);
  React.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const num = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
};

const Ring = ({value, size=64, track='#E8E3D6', color=C.green, stroke=4}) => {
  const r = (size-stroke)/2;
  const len = 2*Math.PI*r;
  const [v, setV] = React.useState(0);
  React.useEffect(()=>{const t=setTimeout(()=>setV(value),200); return ()=>clearTimeout(t);},[value]);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${len*(v/100)} ${len}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{transition:'stroke-dasharray 1.4s cubic-bezier(0.4,0,0.2,1)'}}/>
    </svg>
  );
};

const Bars = ({data, height=44, color=C.accent, bg='#E8E3D6', highlightLast=true, gradient=false}) => {
  const max = Math.max(...data);
  return (
    <div style={{display:'flex', alignItems:'flex-end', gap:3, height}}>
      {data.map((v,i) => {
        const progress = i / (data.length - 1);
        const barColor = gradient
          ? `rgba(107,57,119,${0.2 + progress * 0.8})`
          : (highlightLast && i===data.length-1 ? color : bg);
        return (
          <div key={i} style={{flex:1, height:`${(v/max)*100}%`, background: barColor, borderRadius:2, minHeight:2}}></div>
        );
      })}
    </div>
  );
};

const EChart = ({option, style}) => {
  const ref = React.useRef(null);
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.echarts) return;
    const chart = window.echarts.init(ref.current, null, { renderer: 'svg' });
    chartRef.current = chart;
    chart.setOption(option);
    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(ref.current);
    return () => { ro.disconnect(); chart.dispose(); };
  }, []);
  React.useEffect(() => {
    if (chartRef.current) chartRef.current.setOption(option, true);
  }, [option]);
  return <div ref={ref} style={style}/>;
};
/* ═══ LOGO ═════════════════════════════════════════════════════════════ */
const BrightByteLogo = ({size=28}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="12" y="12" width="8" height="8" rx="3" fill="#6B3977" opacity="0.85"/>
    <rect x="22" y="12" width="8" height="8" rx="4" fill="#6B3977" opacity="0.7"/>
    <circle cx="26" cy="6" r="4.5" fill="#6B3977" opacity="0.45"/>
  </svg>
);

/* ═══ NAV ═══════════════════════════════════════════════════════════════ */
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding: scrolled ? '14px 56px' : '22px 56px', borderBottom:`1px solid ${scrolled ? C.hair : 'transparent'}`, background: scrolled ? 'rgba(245,241,232,0.85)' : C.bg, position:'sticky', top:0, zIndex:50, backdropFilter: scrolled ? 'blur(16px) saturate(1.4)' : 'none', transition:'all 0.35s cubic-bezier(0.16,1,0.3,1)', position:'relative'}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <BrightByteLogo size={scrolled ? 22 : 28} />
        <div style={{fontSize: scrolled ? 14 : 15, letterSpacing:'-0.01em', transition:'font-size 0.35s ease'}}><span style={{fontWeight:600, color:C.ink}}>bright</span><span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accent}}>byte</span><span style={{color:C.sub, fontWeight:400}}>.berlin</span></div>
      </div>
      <div style={{position:'absolute', left:'50%', transform:'translateX(-50%)', display:'flex', gap:32, fontSize:14, color:C.inkSoft}}>
        {['Work','Services','Process','Pricing','About'].map(item => (
          <span key={item} className="nav-link" style={{cursor:'pointer'}}>{item}</span>
        ))}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:16}}>
        <div className="btn-hover nav-cta" style={{padding: scrolled ? '7px 16px' : '9px 18px', background:C.ink, color:C.surface, borderRadius:99, fontSize:13, fontWeight:500, display:'flex', alignItems:'center', gap:6, cursor:'pointer', transition:'padding 0.35s ease'}}>
          Start a project <span style={{color:C.accent}}>→</span>
        </div>
      </div>
    </div>
  );
};

/* ═══ HERO — Animated Build Sequence ═══════════════════════════════════ */
const Hero = ({onStart, onWork}) => {
  const [phase, setPhase] = React.useState(0);
  const [sessions, setSessions] = React.useState(12400);
  const [leads, setLeads] = React.useState(47);
  const [leadPulse, setLeadPulse] = React.useState(false);

  React.useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  React.useEffect(() => {
    if (phase < 3) return;
    const sessionInterval = setInterval(() => {
      setSessions(s => s + Math.floor(Math.random() * 3) + 1);
    }, 3500);
    const leadInterval = setInterval(() => {
      setLeads(l => l + 1);
      setLeadPulse(true);
      setTimeout(() => setLeadPulse(false), 1200);
    }, 8000);
    return () => { clearInterval(sessionInterval); clearInterval(leadInterval); };
  }, [phase]);

  const formatSessions = (n) => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;

  return (
    <div style={{padding:'140px 56px 80px', position:'relative', background:'linear-gradient(180deg, #F7F3EB 0%, #F5F1E8 35%, #FAF7F0 100%)', minHeight:'100vh', overflow:'hidden'}}>
      {/* Plum gradient spotlights — stronger */}
      <div style={{position:'absolute', bottom:0, left:0, width:'60%', height:'65%', background:'radial-gradient(ellipse at 15% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)', pointerEvents:'none'}}/>
      <div style={{position:'absolute', bottom:0, right:0, width:'60%', height:'65%', background:'radial-gradient(ellipse at 85% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)', pointerEvents:'none'}}/>
      {/* Grain texture */}
      <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', opacity:0.35}}>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/></filter>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04"/>
      </svg>
      {/* Headline + subtitle + CTAs — vertically centered in upper viewport */}
      <div style={{textAlign:'center', maxWidth:680, margin:'0 auto 64px', position:'relative'}}>
        <motion.h1 initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease:[0.16,1,0.3,1]}} style={{fontSize:80, lineHeight:0.96, letterSpacing:'-0.04em', fontWeight:600, color:C.ink, marginBottom:20}}>
          Ship in weeks,<br/>
          <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>not</span> <span style={{color:C.accent}}>months.</span>
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.15, ease:[0.16,1,0.3,1]}} style={{fontSize:18, lineHeight:1.55, color:C.sub, maxWidth:520, margin:'0 auto 28px'}}>
          Fast, reliable websites for businesses that don't want to wait. Fixed price, no surprises.
        </motion.p>
        <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3, ease:[0.16,1,0.3,1]}} style={{display:'flex', gap:12, alignItems:'center', justifyContent:'center'}}>
          <div className="btn-hover" onClick={onStart} style={{padding:'14px 28px', background:C.ink, color:C.surface, borderRadius:99, fontSize:14, fontWeight:500, display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
            Start your project <span style={{color:C.accent}}>→</span>
          </div>
          <div className="btn-hover outline-hover" onClick={onWork} style={{padding:'14px 24px', color:C.ink, borderRadius:99, fontSize:14, fontWeight:500, border:`1px solid ${C.hairStrong}`, display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
            <span style={{width:6, height:6, background:C.accent, borderRadius:'50%'}}></span>
            See recent work
          </div>
        </motion.div>
      </div>

      {/* Animated browser frame — wider, positioned to bleed below fold */}
      <motion.div initial={{opacity:0, y:60, scale:0.96}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1.1, delay:0.5, ease:[0.16,1,0.3,1]}} style={{maxWidth:960, width:'100%', margin:'0 auto', position:'relative'}}>

        {/* Floating badge — Traffic surge (top-left) */}
        <div style={{
          position:'absolute', top:-14, left:-16, zIndex:10,
          display:'flex', alignItems:'center', gap:6,
          padding:'8px 14px', borderRadius:99,
          background:'#16A34A', color:'#fff',
          boxShadow:'0 4px 16px rgba(22,163,74,0.3)',
          fontSize:12, fontWeight:600, letterSpacing:'-0.01em',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(8px)',
          transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s'
        }}>
          <span style={{fontSize:14}}>↑</span>
          <span className="mono" style={{fontSize:11, letterSpacing:'0.02em'}}>Traffic +42% this month</span>
        </div>

        {/* Floating badge — New lead (top-right) */}
        <div style={{
          position:'absolute', top:-14, right:-16, zIndex:10,
          display:'flex', alignItems:'center', gap:6,
          padding:'8px 14px', borderRadius:99,
          background:C.accent, color:'#fff',
          boxShadow: leadPulse ? '0 4px 20px rgba(107,57,119,0.5)' : '0 4px 16px rgba(107,57,119,0.3)',
          fontSize:12, fontWeight:600, letterSpacing:'-0.01em',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? (leadPulse ? 'scale(1.08)' : 'scale(1) translateY(0)') : 'scale(0.8) translateY(8px)',
          transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1) 0.6s'
        }}>
          <span style={{width:7, height:7, borderRadius:'50%', background:'#fff', opacity:0.9, animation:'pulse 2s ease-in-out infinite'}}></span>
          <span className="mono" style={{fontSize:11, letterSpacing:'0.02em'}}>New customer inquiry</span>
        </div>

        {/* Floating badge — Revenue (bottom-left) */}
        <div style={{
          position:'absolute', bottom:24, left:-20, zIndex:10,
          display:'flex', alignItems:'center', gap:6,
          padding:'8px 14px', borderRadius:99,
          background:'#fff', color:C.ink,
          border:`1px solid ${C.hair}`,
          boxShadow:'0 8px 24px rgba(20,19,15,0.12)',
          fontSize:12, fontWeight:600, letterSpacing:'-0.01em',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(8px)',
          transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1) 0.9s'
        }}>
          <span style={{fontSize:14, color:'#16A34A'}}>↑</span>
          <span className="mono" style={{fontSize:11, letterSpacing:'0.02em'}}>Revenue +€2.4k</span>
        </div>

        <div className="build-frame" style={{
          borderRadius:14, overflow:'hidden', border:`1px solid ${C.hair}`,
          boxShadow: phase >= 4 ? '0 32px 64px -24px rgba(20,19,15,0.18), 0 0 0 1px rgba(20,19,15,0.04)' : '0 16px 40px -16px rgba(20,19,15,0.12)',
          transform: phase >= 1 ? 'scale(1)' : 'scale(0.96)',
          opacity: phase >= 1 ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Chrome bar */}
          <div style={{background:'#2A2926', padding:'11px 18px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <div style={{display:'flex', gap:5}}>
                {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:8, height:8, borderRadius:'50%', background:c}}></div>)}
              </div>
              <div style={{marginLeft:12, padding:'4px 14px', background:'rgba(251,248,241,0.08)', borderRadius:6, display:'flex', alignItems:'center', gap:6}}>
                <span style={{width:8, height:8, borderRadius:'50%', border:'1.5px solid rgba(251,248,241,0.3)'}}></span>
                <span className="mono" style={{fontSize:10, color:'rgba(251,248,241,0.5)', letterSpacing:'0.04em'}}>client-site.de</span>
              </div>
            </div>
          </div>

          {/* Mock website content — rich dashboard */}
          <div style={{background:C.surface, padding:0, minHeight:380, position:'relative', overflow:'hidden', display:'flex', flexDirection:'column'}}>
            {/* Nav skeleton */}
            <div style={{
              padding:'12px 24px', borderBottom:`1px solid ${C.hair}`, display:'flex', justifyContent:'space-between', alignItems:'center',
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(-20px)',
              opacity: phase >= 1 ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}>
              <div style={{width:70, height:9, borderRadius:4, background: phase >= 2 ? C.ink : C.hair, transition:'background 0.6s'}}></div>
              <div style={{display:'flex', gap:14}}>
                {[40,32,36].map((w,i) => (
                  <div key={i} style={{width:w, height:7, borderRadius:3, background: phase >= 2 ? C.subLight : C.hair, transition:`background 0.6s ${i*0.1}s`}}></div>
                ))}
              </div>
            </div>

            {/* Dashboard content — 3-column equal */}
            <div style={{padding:'16px 20px 20px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:14, flex:1, opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'translateY(0)' : 'translateY(12px)', transition:'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s'}}>

              {/* Left — Mini site preview + KPIs */}
              <div style={{display:'flex', flexDirection:'column', gap:10, opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? 'scale(1)' : 'scale(0.95)', transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s'}}>
                {/* Mini site preview — 60% height */}
                <div style={{flex:'0 0 60%', background:C.bg, borderRadius:10, border:`1px solid ${C.hair}`, overflow:'hidden', display:'flex', flexDirection:'column'}}>
                  {/* Mini browser chrome */}
                  <div style={{padding:'6px 10px', background:'#F0ECE4', borderBottom:`1px solid ${C.hair}`, display:'flex', alignItems:'center', gap:5}}>
                    <div style={{display:'flex', gap:3}}>
                      {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:5, height:5, borderRadius:'50%', background:c}}></div>)}
                    </div>
                    <div style={{flex:1, marginLeft:6, height:8, background:'rgba(20,19,15,0.06)', borderRadius:4, display:'flex', alignItems:'center', paddingLeft:4}}>
                      <span className="mono" style={{fontSize:6, color:C.subLight, letterSpacing:'0.02em'}}>client-site.de</span>
                    </div>
                  </div>
                  {/* Mini page content */}
                  <div style={{padding:'10px 12px', flex:1}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
                      <div style={{width:32, height:5, borderRadius:2, background:C.ink}}></div>
                      <div style={{display:'flex', gap:6}}>
                        {[16,12,14].map((w,i)=><div key={i} style={{width:w, height:3, borderRadius:1, background:C.hair}}></div>)}
                      </div>
                    </div>
                    <div style={{marginBottom:8}}>
                      <div style={{width:'80%', height:7, borderRadius:2, background:C.ink, marginBottom:4, opacity:0.8}}></div>
                      <div style={{width:'55%', height:7, borderRadius:2, background:C.ink, marginBottom:8, opacity:0.6}}></div>
                      <div style={{width:'90%', height:4, borderRadius:1, background:C.hair, marginBottom:3}}></div>
                      <div style={{width:'75%', height:4, borderRadius:1, background:C.hair, marginBottom:8}}></div>
                      <div style={{width:48, height:14, borderRadius:99, background:C.accent, opacity:0.8}}></div>
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, marginTop:8}}>
                      <div style={{height:24, borderRadius:4, background:C.hair, opacity:0.5}}></div>
                      <div style={{height:24, borderRadius:4, background:C.hair, opacity:0.5}}></div>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div style={{padding:'5px 10px', borderTop:`1px solid ${C.hair}`, display:'flex', alignItems:'center', gap:5}}>
                    <span style={{width:5, height:5, borderRadius:'50%', background:'#28A745', animation:'pulse 2s ease-in-out infinite'}}></span>
                    <span className="mono" style={{fontSize:7, color:C.sub, letterSpacing:'0.04em'}}>LIVE · 12 visitors</span>
                  </div>
                </div>
                {/* KPI cards — horizontal row below site preview */}
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:5, flex:1}}>
                  {[['SESSIONS',formatSessions(sessions),'+18%'],['LEADS',String(leads),'+34%'],['SPEED','98','/100']].map(([label,val,delta]) => (
                    <div key={label} style={{background:C.bg, borderRadius:6, padding:'10px 6px', border:`1px solid ${C.hair}`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3}}>
                      <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.06em', fontWeight:500}}>{label}</div>
                      <span style={{fontSize:24, fontWeight:700, color:C.ink, letterSpacing:'-0.02em', transition:'transform 0.2s'}}>{val}</span>
                      <span style={{fontSize:11, fontWeight:600, color:'#16A34A', background:'rgba(22,163,74,0.1)', padding:'2px 7px', borderRadius:3}} className="mono">{delta}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle — Donut chart */}
              <div style={{background:C.bg, borderRadius:8, padding:'6px 8px 4px', border:`1px solid ${C.hair}`, display:'flex', flexDirection:'column', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)', transition:'all 0.7s cubic-bezier(0.16,1,0.3,1)'}}>
                <EChart style={{flex:1, width:'100%', minHeight:140}} option={{
                  animation: true,
                  animationDuration: 1000,
                  animationEasing: 'cubicOut',
                  title: {text:'TRAFFIC', left:0, top:0, textStyle:{fontSize:13, fontFamily:'Geist Mono', color:C.sub, fontWeight:500}},
                  legend: {orient:'horizontal', bottom:4, icon:'circle', itemWidth:8, itemHeight:8, itemGap:10, textStyle:{fontSize:11, fontFamily:'Geist Mono', color:C.sub}},
                  series:[{type:'pie', radius:['42%','74%'], center:['50%','46%'], avoidLabelOverlap:false, label:{show:false}, data:[
                    {value:62, name:'Organic', itemStyle:{color:'#6B3977'}},
                    {value:24, name:'Direct', itemStyle:{color:'rgba(107,57,119,0.55)'}},
                    {value:14, name:'Social', itemStyle:{color:'rgba(107,57,119,0.22)'}}
                  ]}],
                  tooltip:{show:false}
                }}/>
              </div>

              {/* Right — Bar chart */}
              <div style={{background:C.bg, borderRadius:8, padding:'6px 8px 4px', border:`1px solid ${C.hair}`, display:'flex', flexDirection:'column', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)', transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s'}}>
                <EChart style={{flex:1, width:'100%', minHeight:140}} option={{
                  animation: true,
                  animationDuration: 1200,
                  animationEasing: 'cubicOut',
                  grid: {top:28, right:6, bottom:22, left:24},
                  title: {text:'REVENUE', left:0, top:0, textStyle:{fontSize:13, fontFamily:'Geist Mono', color:C.sub, fontWeight:500}},
                  xAxis: {type:'category', data:['Nov','Dec','Jan','Feb','Mar','Apr'], axisLine:{show:false}, axisTick:{show:false}, axisLabel:{fontSize:11, fontFamily:'Geist Mono', color:C.subLight}},
                  yAxis: {type:'value', show:false},
                  series:[{type:'bar', data:[2800,3500,3200,4500,5200,6800], barWidth:'55%', itemStyle:{borderRadius:[2,2,0,0], color:function(params){return params.dataIndex===5 ? '#6B3977' : 'rgba(107,57,119,0.25)'}}}],
                  tooltip:{show:false}
                }}/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(107,57,119,0.3); }
          50% { box-shadow: 0 4px 24px rgba(107,57,119,0.5); }
        }
        @keyframes pulse {
          0%, 100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.75); }
        }
      `}}/>
    </div>
  );
};

/* ═══ TRUST BAR ═════════════════════════════════════════════════════════ */
/* ═══ TECH STRIP — with logos ═══════════════════════════════════════════ */
const TECH_ICONS = {
  'Next.js': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#3178C6'}}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0 .122-.49c0-.207-.06-.395-.18-.564a1.877 1.877 0 0 0-.556-.472 8.66 8.66 0 0 0-.923-.437 30.36 30.36 0 0 1-1.055-.45 5.64 5.64 0 0 1-1.178-.685 3.193 3.193 0 0 1-.832-1.002 3.032 3.032 0 0 1-.312-1.43c0-.614.116-1.137.348-1.568.232-.43.556-.787.97-1.068a4.24 4.24 0 0 1 1.443-.585 7.918 7.918 0 0 1 1.79-.195zm-5.422 2.203h-3.75V18h-2.25V11.953H3.75V9.75h9.316z"/>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#61DAFB'}}>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.097-.278zm-.005 1.09c.347 0 .574.116.698.186 1.207.694 1.429 3.242.695 6.134a23.455 23.455 0 0 0-3.574-.632 23.36 23.36 0 0 0-2.316-2.956c1.525-1.409 3.005-2.147 4.162-2.147zM9.08 6.533c1.158 0 2.64.756 4.163 2.149a23.43 23.43 0 0 0-2.316 2.954 23.415 23.415 0 0 0-3.576.633c-.722-2.894-.506-5.411.677-6.115.124-.072.35-.621.695-.621l.357.001zm7.357 2.674c.596.168 1.172.36 1.723.575.197.08.39.159.58.243a14.42 14.42 0 0 1-.72 1.225 15.07 15.07 0 0 0-1.06-1.988l-.523-.055zm-9.41.055a14.9 14.9 0 0 0-1.066 1.99 14.45 14.45 0 0 1-.718-1.225c.188-.083.38-.162.577-.242.55-.214 1.125-.406 1.72-.573l-.513.05zm4.72 1.944c.506-.01.99 0 1.46.022a14.42 14.42 0 0 1-.73 1.278 14.45 14.45 0 0 1-.73-1.278c.237-.013.478-.02.72-.022h.28zM12 10.08c.432.5.847 1.037 1.238 1.595a21.76 21.76 0 0 1-1.238.04 21.89 21.89 0 0 1-1.236-.04c.39-.558.806-1.095 1.236-1.595zm-4.08 1.594c-.43.64-.82 1.3-1.16 1.986a21.84 21.84 0 0 0-.986-1.965c.373-.108.755-.206 1.145-.3.335-.08.668-.15 1.002-.22l-.002.499zm8.16 0v-.5c.334.07.667.14 1.001.22.39.093.772.192 1.145.3a21.94 21.94 0 0 0-.986 1.965 21.6 21.6 0 0 0-1.16-1.985zm-4.08 2.02c.434.568.832 1.145 1.19 1.724a21.85 21.85 0 0 1-2.38 0c.358-.579.756-1.156 1.19-1.724zm5.22.83c.45.958.82 1.93 1.1 2.903a21.63 21.63 0 0 1-2.41.646 21.84 21.84 0 0 0 1.31-3.55zm-10.44 0a21.83 21.83 0 0 0 1.31 3.548 21.63 21.63 0 0 1-2.41-.645c.28-.974.65-1.946 1.1-2.903zm4.76 3.58a21.77 21.77 0 0 1-1.985-2.226 21.98 21.98 0 0 0 2.454.228c-.153.668-.305 1.322-.47 1.998zM12 17.57c-.296-.71-.57-1.432-.82-2.156a22.07 22.07 0 0 0 1.64 0c-.25.724-.524 1.446-.82 2.156zm2.24-.42c-.165-.676-.317-1.33-.47-1.998a21.98 21.98 0 0 0 2.453-.228 21.77 21.77 0 0 1-1.984 2.226zm1.42 3.547c-.124-.07-.35-.186-.698-.186-1.158 0-2.64-.757-4.162-2.15a23.43 23.43 0 0 0 2.316-2.954 23.41 23.41 0 0 0 3.576-.633c.722 2.894.506 5.41-.677 6.115-.124.072-.35.808-.354.808zm-9.79-2.48c-1.183-.694-1.429-3.242-.695-6.134a23.455 23.455 0 0 0 3.574.632 23.36 23.36 0 0 0 2.316 2.956c-1.525 1.409-3.005 2.147-4.162 2.147a.872.872 0 0 1-.346-.065c-.13-.07-.348-.186-.687-.536zm16.19-5.05c-1.158 0-2.64.756-4.163 2.149a23.43 23.43 0 0 0 2.316-2.954 23.415 23.415 0 0 0 3.576.633c.722-2.894.506-5.411-.677-6.115a.87.87 0 0 0-.35-.072c-.345 0-.574.116-.702.359z"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#339933'}}>
      <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.938-1.737c-.438-.245-.224-.332-.079-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.678c-.085.05-.139.144-.139.242v10.15c0 .097.054.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.924-1.609V6.921c0-.663.353-1.278.924-1.609l8.795-5.078c.557-.315 1.297-.315 1.848 0l8.794 5.078c.573.332.926.947.926 1.609v10.145c0 .664-.353 1.281-.926 1.613l-8.794 5.078a1.87 1.87 0 0 1-.925.243zm2.718-6.975c-3.855 0-4.662-1.77-4.662-3.254 0-.141.114-.253.256-.253h1.138c.127 0 .233.092.252.216.172 1.161.685 1.747 3.016 1.747 1.855 0 2.645-.42 2.645-1.406 0-.568-.224-.99-3.11-1.274-2.413-.239-3.903-.77-3.903-2.697 0-1.779 1.499-2.839 4.012-2.839 2.822 0 4.221.98 4.397 3.083.007.07-.019.139-.066.19-.047.05-.113.079-.181.079h-1.142c-.12 0-.226-.084-.251-.2-.276-1.25-1.026-1.653-2.757-1.653-2.031 0-2.268.707-2.268 1.238 0 .643.28.83 3.017 1.192 2.709.356 3.988.86 3.988 2.761 0 1.921-1.601 3.022-4.394 3.022l-.083.048z"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#336791'}}>
      <path d="M23.5 11.6c-.2-2.3-1.4-3.5-3.1-4.2-.4-.2-.9-.3-1.4-.4-.3-.6-.7-1.2-1.2-1.7-.3-.4-.7-.6-1.1-.9-.8-.5-1.6-.9-2.6-1.2-.9-.3-2-.4-3-.3-1.5.1-2.8.6-3.8 1.4-.2.2-.4.4-.5.6-.8.1-1.5.4-2.2.8-1.4.7-2.4 1.9-2.7 3.4-.4 1.7.1 3.5 1.2 4.8.1.2.3.3.4.5 0 .6 0 1.1.1 1.7.2 1.2.6 2.3 1.5 3.2 1 1 2.3 1.5 3.7 1.6.3 0 .6 0 .9-.1.3.2.7.4 1.1.5.5.1 1 .2 1.5.2.3 0 .6 0 .9-.1.1.1.3.1.4.1h.4c.4-.1.8-.3 1.1-.5.9.5 2 .7 3.1.6 1.1-.2 2-.7 2.7-1.5.6-.7 1-1.5 1.2-2.4.1-.5.2-1 .2-1.5v-.1c.5-.5.9-1.1 1.1-1.8.2-.9.1-1.9-.2-2.7zm-3.1 3.5c-.1.5-.2 1-.4 1.4.1-.3.1-.7.2-1l.2-1.5c.1-.4.1-.8.1-1.3.1.7.1 1.6-.1 2.4zm-1.3-7.6c.1.2.2.3.3.5.1.3.3.6.4.9-.2-.5-.5-.9-.7-1.4zm.9 2.2c.1.5.1.9.1 1.4-.1-.5-.2-1-.2-1.5-.1-.5-.3-1-.4-1.5.2.5.4 1 .5 1.6zm-1.8-3.4c.3.3.5.6.7.9-.5-.3-.9-.6-1.3-.9.2 0 .4 0 .6 0zm-1.5-.7c.3.2.6.4.9.6-.3-.1-.6-.2-.9-.3-.3-.1-.6-.2-.9-.2.3-.1.6-.1.9-.1zM7.2 6.4c.4-.6 1-.9 1.7-1 .4-.1.8 0 1.1.2-.2.1-.4.3-.6.4-.6.4-1.2.9-1.7 1.5-.1.1-.2.3-.3.4-.1-.5 0-1.1-.2-1.5zm-.7 2.8c.1-.5.3-1 .5-1.5l-.1.2c-.2.4-.4.8-.5 1.2-.1.5-.1 1-.1 1.5-.1-.4-.1-.9.2-1.4zm.6 3.9c0-.3 0-.5.1-.8.1.3.2.6.4.9 0 .1.1.2.1.3-.2-.1-.4-.2-.6-.4zm-.5-1.5c-.1-.7 0-1.4.2-2l.1-.3c-.1.7-.1 1.5 0 2.3 0 .4.1.8.2 1.2-.2-.4-.4-.8-.5-1.2zm-.9 1.3c.1.6.4 1.1.8 1.5-.4-.4-.7-.9-.8-1.5zm1.3 4.8c-.8-.3-1.4-.9-1.9-1.6-.4-.6-.7-1.4-.8-2.2.2.8.6 1.6 1.2 2.2.5.7 1.2 1.2 2 1.5-.2 0-.3.1-.5.1zm1.4.5c-.4-.1-.8-.3-1.2-.5.4.2.8.3 1.2.4.4.1.8.1 1.2.1-.4 0-.8 0-1.2 0zm3 .1c-.3.1-.6.1-.9.1-.4 0-.8 0-1.2-.1.4.1.8.1 1.2.1.3 0 .6 0 .9-.1zm1-.3c-.3.1-.6.1-.9.2.3-.1.6-.2.9-.3.3-.1.6-.3.9-.5-.2.2-.5.4-.9.6zm1.3-.8c-.3.2-.6.4-.9.5.2-.2.4-.3.6-.5.5-.4.9-.8 1.3-1.3-.3.5-.6.9-1 1.3zm2.6-3.4c-.2.8-.6 1.6-1.2 2.2.4-.8.7-1.6.9-2.5.1-.5.1-1 .1-1.5 0-.3 0-.6-.1-.9.2.8.4 1.7.3 2.7zM12 4.2c.6 0 1.2.1 1.7.2-.3.1-.6.2-.9.3-.5.2-1 .4-1.5.7-.4-.4-.8-.7-1.3-1 .6-.2 1.3-.2 2-.2zm-2.8.5c.4.3.8.7 1.2 1.1-.5.3-1 .7-1.5 1.1-.2-.4-.3-.9-.4-1.4.2-.3.4-.6.7-.8zm2.3 9.6c-.3-.3-.5-.7-.7-1.1.3.4.6.7 1 1 .4.3.8.5 1.2.7-.5-.2-1-.4-1.5-.6zm.3-3.7c-.2-.3-.3-.7-.4-1 .2.3.4.6.7.8.3.3.7.5 1 .7-.5-.1-.9-.3-1.3-.5zm4.5 4.8c-.6.6-1.3 1-2.1 1.2-.4.1-.8.1-1.2.1.4-.1.8-.2 1.2-.4.7-.3 1.4-.8 1.9-1.4.5-.5.9-1.2 1.1-1.9-.2.8-.5 1.6-.9 2.4zm2.1-7.2c-.1-.5-.2-.9-.4-1.4.3.5.5 1 .6 1.6.1.5.1 1.1 0 1.6.0-.6-.1-1.2-.2-1.8z"/>
    </svg>
  ),
  'Vercel': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  ),
  'Tailwind': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#06B6D4'}}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  'Docker': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#2496ED'}}>
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
    </svg>
  ),
  'Go': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#00ADD8'}}>
      <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.789.514-1.195 1.261-1.183 2.15.011.88.654 1.601 1.52 1.718.749.105 1.381-.117 1.881-.655.105-.117.199-.246.315-.397H11.22c-.246 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.795-.865-.655-1.356-1.52-1.484-2.58-.152-1.261.152-2.406.876-3.424.865-1.216 2.021-1.916 3.424-2.149 1.18-.187 2.29-.035 3.283.7.596.444 1.03 1.017 1.308 1.718.047.093.023.14-.082.164z"/>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#0055FF'}}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  'GraphQL': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#E10098'}}>
      <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542 3.378L5.058 12l6.944 3.691V8.31zm0 0"/>
    </svg>
  ),
  'Kubernetes': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#326CE5'}}>
      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm2.369 1.482a.44.44 0 0 0 .694.337l2.15 1.524a5.144 5.144 0 0 0-.735-3.255l-1.96 1.754-.002.009-.147-.369zm.287 1.67a.44.44 0 0 0-.486.606l.004.005 2.078.437a5.171 5.171 0 0 0-2.075-2.597l-.999 2.413.007.01-.529-.874zM12 6.82a5.2 5.2 0 0 0-5.2 5.2 5.2 5.2 0 0 0 5.2 5.2 5.2 5.2 0 0 0 5.2-5.2A5.2 5.2 0 0 0 12 6.82zm0-2.8c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8z"/>
    </svg>
  ),
  'Git': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#F05032'}}>
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.645-.222 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.72.719-1.886.719-2.605 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
};

const TechStrip = () => {
  const techs = ['Next.js','TypeScript','React','Tailwind','Framer Motion','Node.js','Go','PostgreSQL','GraphQL','Kubernetes','Git','Vercel','Docker'];
  const TechItem = ({t}) => (
    <div style={{display:'flex', alignItems:'center', gap:7, flexShrink:0, paddingRight:32}}>
      <span style={{color:C.sub, display:'flex', alignItems:'center'}}>{TECH_ICONS[t]}</span>
      <span className="mono" style={{fontSize:11, color:C.inkSoft, fontWeight:500}}>{t}</span>
    </div>
  );
  return (
    <div className="marquee-wrap" style={{padding:'24px 0', background:C.bg, overflow:'hidden'}}>
      <div className="marquee-inner" style={{display:'flex', width:'fit-content'}}>
        {techs.map(t => <TechItem key={t} t={t}/>)}
        {techs.map(t => <TechItem key={t+'-dup'} t={t}/>)}
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-inner { animation: marquee 35s linear infinite; }
        .marquee-wrap:hover .marquee-inner { animation-play-state: paused; }
      `}}/>
    </div>
  );
};

/* ═══ SERVICES ══════════════════════════════════════════════════════════ */
const ServiceImage = ({kind}) => {
  const items = {
    lp: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(160deg, #EDE5F0 0%, #C4ADCF 100%)`, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.12}}>
          {Array.from({length:8}).map((_,row) => Array.from({length:14}).map((_,col) => <circle key={`${row}-${col}`} cx={col*18+9} cy={row*18+9} r={1.2} fill={C.ink}/>))}
        </svg>
        <div style={{position:'absolute', width:210, height:96, background:'rgba(251,248,241,0.5)', borderRadius:7, transform:'translate(8px, -2px)', boxShadow:'0 4px 12px rgba(20,19,15,0.06)'}}></div>
        <div style={{width:220, height:102, background:C.surface, borderRadius:8, boxShadow:`0 8px 24px rgba(20,19,15,0.14)`, overflow:'hidden', position:'relative', zIndex:1}}>
          <div style={{height:22, background:C.bg, borderBottom:`1px solid ${C.hair}`, display:'flex', alignItems:'center', padding:'0 10px', gap:5}}>
            <div style={{width:6, height:6, borderRadius:'50%', background:'#FF5C5C'}}></div>
            <div style={{width:6, height:6, borderRadius:'50%', background:'#FFC83D'}}></div>
            <div style={{width:6, height:6, borderRadius:'50%', background:'#28C940'}}></div>
            <div style={{flex:1, marginLeft:8, height:10, background:C.hair, borderRadius:99}}></div>
          </div>
          <div style={{padding:'8px 12px', display:'grid', gridTemplateColumns:'1fr 0.6fr', gap:8}}>
            <div style={{display:'flex', flexDirection:'column', gap:4}}>
              <div style={{height:9, width:'85%', background:C.ink, borderRadius:2, opacity:0.8}}></div>
              <div style={{height:5, width:'95%', background:C.hair, borderRadius:2}}></div>
              <div style={{height:5, width:'80%', background:C.hair, borderRadius:2}}></div>
              <div style={{height:5, width:'60%', background:C.hair, borderRadius:2}}></div>
              <div style={{height:16, width:56, background:C.accent, borderRadius:99, marginTop:3, opacity:0.85}}></div>
            </div>
            <div style={{background:`linear-gradient(135deg, ${C.accentBg} 0%, rgba(196,173,207,0.3) 100%)`, borderRadius:6, border:`1px solid ${C.hair}`}}></div>
          </div>
        </div>
        <div style={{position:'absolute', top:10, right:12, width:32, height:32, borderRadius:'50%', background:'rgba(251,248,241,0.92)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(20,19,15,0.1)', zIndex:2}}>
          <svg width={26} height={26} viewBox="0 0 26 26">
            <circle cx={13} cy={13} r={10} fill="none" stroke="#E8E3D6" strokeWidth={2.5}/>
            <circle cx={13} cy={13} r={10} fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray={`${2*Math.PI*10*0.98} ${2*Math.PI*10}`} strokeLinecap="round" transform="rotate(-90 13 13)"/>
          </svg>
          <span className="mono" style={{position:'absolute', fontSize:7, fontWeight:700, color:C.ink}}>98</span>
        </div>
      </div>
    ),
    app: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(160deg, #1E1A2E 0%, #2C2040 100%)`, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(196,173,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,173,207,0.04) 1px, transparent 1px)', backgroundSize:'20px 20px'}}></div>
        <div style={{width:224, height:108, borderRadius:8, overflow:'hidden', border:`1px solid rgba(196,173,207,0.2)`, boxShadow:`0 8px 24px rgba(0,0,0,0.4)`, position:'relative', zIndex:1}}>
          <div style={{height:24, background:'rgba(255,255,255,0.05)', borderBottom:`1px solid rgba(196,173,207,0.15)`, display:'flex', alignItems:'center', padding:'0 10px', gap:8}}>
            <div style={{width:6, height:6, borderRadius:'50%', background:C.accent, opacity:0.7}}></div>
            <div className="mono" style={{fontSize:8, color:'rgba(196,173,207,0.6)', letterSpacing:'0.06em'}}>dashboard.app</div>
            <div style={{marginLeft:'auto', width:14, height:14, borderRadius:'50%', background:'rgba(107,57,119,0.8)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <span style={{fontSize:7, color:'white', fontWeight:700}}>3</span>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'36px 1fr', height:'calc(100% - 24px)'}}>
            <div style={{background:'rgba(255,255,255,0.03)', borderRight:`1px solid rgba(196,173,207,0.1)`, padding:'8px 6px', display:'flex', flexDirection:'column', gap:6, alignItems:'center'}}>
              {[C.accent,'rgba(196,173,207,0.3)','rgba(196,173,207,0.3)','rgba(196,173,207,0.2)'].map((bg,i)=>(
                <div key={i} style={{width:i===0?8:6, height:i===0?8:6, borderRadius:i===0?2:1, background:bg}}></div>
              ))}
            </div>
            <div style={{padding:'8px 10px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:5}}>
              <div style={{background:'rgba(196,173,207,0.08)', borderRadius:4, padding:'6px 7px'}}>
                <div className="mono" style={{fontSize:7, color:'rgba(196,173,207,0.5)', marginBottom:3}}>USERS</div>
                <div style={{fontSize:14, fontWeight:600, color:C.accentSoft}}>183</div>
              </div>
              <div style={{background:C.accent, borderRadius:4, padding:'6px 7px', opacity:0.85}}>
                <div className="mono" style={{fontSize:7, color:'rgba(255,255,255,0.7)', marginBottom:3}}>REV.</div>
                <div style={{fontSize:14, fontWeight:600, color:'white'}}>€24k</div>
              </div>
              <div style={{gridColumn:'1 / -1', background:'rgba(196,173,207,0.05)', borderRadius:4, padding:'5px 7px', display:'flex', alignItems:'flex-end', gap:2}}>
                {[35,55,40,65,50,72,60,80,68,90].map((h,i)=>(
                  <div key={i} style={{flex:1, height:`${h*0.28}px`, background: i>=7 ? C.accent : 'rgba(196,173,207,0.25)', borderRadius:1, opacity: i>=7 ? 0.8 : 0.6}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ai: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(160deg, #1A2430 0%, #0F1A22 100%)`, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.12}}>
          {[[30,20],[80,50],[140,25],[190,55],[60,80],[120,95],[170,80],[40,110],[100,60],[160,110]].map(([x,y],i)=>(
            <React.Fragment key={i}>
              <circle cx={x} cy={y} r={2} fill={C.accent}/>
              {i>0 && <line x1={x} y1={y} x2={[30,80,140,190,60,120,170,40,100,160][(i+3)%10]} y2={[20,50,25,55,80,95,80,110,60,110][(i+3)%10]} stroke={C.accent} strokeWidth={0.5} opacity={0.6}/>}
            </React.Fragment>
          ))}
        </svg>
        <div style={{width:220, height:108, borderRadius:8, overflow:'hidden', border:`1px solid rgba(107,57,119,0.4)`, background:'rgba(20,13,24,0.9)', boxShadow:`0 8px 24px rgba(0,0,0,0.5), 0 0 40px rgba(107,57,119,0.15)`, position:'relative', zIndex:1}}>
          <div style={{height:22, background:'rgba(107,57,119,0.2)', borderBottom:`1px solid rgba(107,57,119,0.3)`, display:'flex', alignItems:'center', padding:'0 10px', gap:6}}>
            <div style={{width:5, height:5, borderRadius:'50%', background:C.accent, boxShadow:`0 0 6px ${C.accent}`}}></div>
            <span className="mono" style={{fontSize:8, color:C.accentSoft, letterSpacing:'0.06em'}}>AI assistant · online</span>
          </div>
          <div style={{padding:'6px 10px', display:'flex', flexDirection:'column', gap:4}}>
            <div style={{display:'flex', gap:5, justifyContent:'flex-end'}}>
              <div style={{background:'rgba(107,57,119,0.5)', borderRadius:'7px 7px 2px 7px', padding:'4px 7px', maxWidth:'65%'}}>
                <div className="mono" style={{fontSize:8, color:C.accentSoft}}>How can I track leads?</div>
              </div>
            </div>
            <div style={{display:'flex', gap:5}}>
              <div style={{width:14, height:14, borderRadius:'50%', background:C.accent, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 8px rgba(107,57,119,0.4)`}}>
                <span style={{fontSize:7, color:'white'}}>AI</span>
              </div>
              <div style={{background:'rgba(255,255,255,0.05)', borderRadius:'2px 7px 7px 7px', padding:'4px 7px', maxWidth:'78%', boxShadow:'0 0 12px rgba(107,57,119,0.08)'}}>
                <div className="mono" style={{fontSize:8, color:'rgba(196,173,207,0.9)', lineHeight:1.4}}>Your dashboard shows 47 leads this month. Up 23%…</div>
              </div>
            </div>
            <div style={{display:'flex', gap:5, marginTop:1}}>
              <div style={{width:14, height:14, flexShrink:0}}></div>
              <div style={{display:'flex', gap:3, padding:'3px 8px', background:'rgba(255,255,255,0.03)', borderRadius:7}}>
                {[0,1,2].map(i=>(<div key={i} style={{width:4, height:4, borderRadius:'50%', background:C.accentSoft, opacity:0.6, animation:`pulse 1.2s ease-in-out ${i*0.2}s infinite`}}></div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    sup: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(160deg, #F4E0D5 0%, ${C.accentBg} 100%)`, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:224, height:108, borderRadius:8, overflow:'hidden', background:C.surface, border:`1px solid ${C.hair}`, boxShadow:`0 8px 24px rgba(20,19,15,0.1)`}}>
          <div style={{padding:'7px 12px 5px', borderBottom:`1px solid ${C.hair}`}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
              <div className="mono" style={{fontSize:8, color:C.sub, letterSpacing:'0.06em'}}>UPTIME · 90 DAYS</div>
              <div style={{display:'flex', alignItems:'center', gap:3}}>
                <div style={{width:5, height:5, borderRadius:'50%', background:C.green, boxShadow:`0 0 6px rgba(22,163,74,0.5)`}}></div>
                <span className="mono" style={{fontSize:8, color:C.green, fontWeight:600}}>99.98%</span>
              </div>
            </div>
            <div style={{display:'flex', gap:1, height:13}}>
              {Array.from({length:45}).map((_,i) => (
                <div key={i} style={{flex:1, background: i===14 ? '#FFC83D' : C.green, borderRadius:0.5, opacity: i===14 ? 0.9 : 0.35+Math.random()*0.45}}></div>
              ))}
            </div>
          </div>
          <div style={{padding:'5px 12px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:6}}>
            {[['FCP','0.6s','↓'],['LCP','1.1s','↓'],['CLS','0.01','—']].map(([k,v,trend])=>(
              <div key={k}>
                <div className="mono" style={{fontSize:7, color:C.sub, marginBottom:2, letterSpacing:'0.06em'}}>{k}</div>
                <div style={{display:'flex', alignItems:'baseline', gap:3}}>
                  <span style={{fontSize:11, fontWeight:600, color:C.ink}}>{v}</span>
                  <span style={{fontSize:7, color:C.green}}>{trend}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{padding:'3px 12px 5px'}}>
            <svg width="100%" height={14} viewBox="0 0 200 14" preserveAspectRatio="none">
              <path d="M0,11 L15,9 L30,10 L45,7 L60,8 L75,5 L90,6 L105,4 L120,5 L135,3 L150,4 L165,2.5 L180,3 L200,1.5" fill="none" stroke={C.accent} strokeWidth={1} opacity={0.4}/>
              <path d="M0,11 L15,9 L30,10 L45,7 L60,8 L75,5 L90,6 L105,4 L120,5 L135,3 L150,4 L165,2.5 L180,3 L200,1.5 L200,14 L0,14 Z" fill={C.accent} opacity={0.05}/>
            </svg>
          </div>
        </div>
      </div>
    ),
  };
  return items[kind] || null;
};

const Services = () => {
  const [ref, inView] = useInView(0.15);
  return (
  <div style={{padding:'112px 56px', background:`linear-gradient(180deg, ${C.bg} 0%, #F8F4EC 100%)`}}>
    {/* Section header — label left-aligned, heading centered */}
    <div style={{marginBottom:72, paddingBottom:20, borderBottom:`1px solid ${C.hair}`}}>
      <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:16}}>02 · Services</div>
      <h2 style={{fontSize:44, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.0, marginBottom:12, textAlign:'center'}}>
        What I <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>build.</span>
      </h2>
      <p style={{fontSize:14, color:C.sub, lineHeight:1.55, maxWidth:480, margin:'0 auto', textAlign:'center'}}>
        Every project ships with a fixed price, a clear timeline, and me on the other end of every call.
      </p>
    </div>
    <div ref={ref} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:32}}>
      {SERVICES.map((s, idx) => (
        <div key={s.tag} className="work-card" style={{background:C.surface, borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column', cursor:'pointer', border:`1px solid ${C.hair}`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition:`opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${idx*0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${idx*0.15}s, box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease`}}>
          <div style={{height:130, position:'relative'}}>
            <ServiceImage kind={s.img}/>
            <div style={{position:'absolute', top:14, left:14, padding:'4px 10px', background:'rgba(251,248,241,0.85)', borderRadius:99, backdropFilter:'blur(4px)', border:`1px solid rgba(20,19,15,0.08)`, zIndex:2, display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1}} className="mono">
              <span style={{fontSize:10, color:C.ink, letterSpacing:'0.06em', fontWeight:500}}>{s.tag}</span>
            </div>
          </div>
          <div style={{padding:'22px 24px 20px', display:'flex', flexDirection:'column', flex:1}}>
            <h3 style={{fontSize:20, fontWeight:600, color:C.ink, letterSpacing:'-0.02em', marginBottom:10}}>{s.title}</h3>
            <p style={{fontSize:14, color:C.sub, lineHeight:1.6, marginBottom:24, flex:1}}>{s.desc}</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:18, borderTop:`1px solid ${C.hair}`}}>
              <span className="mono" style={{fontSize:11, color:C.ink, letterSpacing:'0.04em'}}>{s.meta}</span>
              <div style={{display:'flex', alignItems:'center', gap:6, fontSize:13, color:C.accent, fontWeight:500}}>
                Learn more →
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

/* ═══ PROCESS ═══════════════════════════════════════════════════════════ */
const Process = () => {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a+1) % PROCESS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{padding:'112px 56px', background:`radial-gradient(ellipse at 50% 0%, rgba(237,229,240,0.3) 0%, ${C.surface} 70%)`, borderBottom:`1px solid ${C.hair}`}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, marginBottom:72, alignItems:'baseline'}}>
        <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase'}}>03 · Process</div>
        <div>
          <h2 style={{fontSize:56, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.02, marginBottom:18}}>
            Four steps,<br/>
            <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>no surprises.</span>
          </h2>
          <p style={{fontSize:17, color:C.sub, maxWidth:520, lineHeight:1.6}}>
            From kickoff to launch. Predictable, transparent, with weekly demos so you always know where things stand.
          </p>
        </div>
      </div>
      <div style={{position:'relative', paddingTop:8}}>
        <div style={{position:'absolute', left:'calc(12.5% - 1px)', right:'calc(12.5% - 1px)', top:37, height:2, background:`repeating-linear-gradient(to right, ${C.hairStrong} 0 4px, transparent 4px 8px)`}}></div>
        <div style={{position:'absolute', left:'calc(12.5% - 1px)', top:37, height:2, background:C.accent, width:`calc((100% - 25%) * ${active / (PROCESS.length - 1)})`, transition:'width 1.4s cubic-bezier(0.4,0,0.2,1)'}}></div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, position:'relative', zIndex:1}}>
          {PROCESS.map((p, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <div key={p.n} style={{padding:'0 16px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
                {/* Fixed-height circle container to prevent layout shift */}
                <div style={{height:58, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:24}}>
                  <div style={{
                    width: isActive ? 50 : 36, height: isActive ? 50 : 36, borderRadius:'50%',
                    background: isPast || isActive ? C.accent : C.surface,
                    border: (!isPast && !isActive) ? `1.5px solid ${C.hairStrong}` : 'none',
                    boxShadow: isActive ? `0 0 0 8px ${C.accentBg}, 0 8px 20px rgba(107,57,119,0.25)` : 'none',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <span className="mono" style={{fontSize: isActive ? 13 : 11, fontWeight:600, color: (isPast||isActive) ? C.surface : C.sub}}>
                      {isPast ? '✓' : p.n}
                    </span>
                  </div>
                </div>
                <div style={{fontSize:22, fontWeight:600, color:C.ink, letterSpacing:'-0.02em', marginBottom:10}}>
                  {p.t}
                  {isActive && <span className="mono" style={{display:'block', marginTop:6, fontSize:10, color:C.accent, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:600}}>● in progress</span>}
                </div>
                <p style={{fontSize:13.5, color:C.sub, lineHeight:1.65, maxWidth:240, minHeight:66}}>{p.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mono" style={{textAlign:'center', marginTop:64, fontSize:10, color:C.subLight, letterSpacing:'0.12em', textTransform:'uppercase'}}>
          ↳ progress fills as you scroll on the live site
        </div>
      </div>
    </div>
  );
};

/* ═══ CTA BANNER ════════════════════════════════════════════════════════ */
const CTABanner = ({onStart, onWork}) => (
  <div style={{padding:'48px 56px', background:C.ink, position:'relative', overflow:'hidden'}}>
    <div style={{position:'absolute', inset:0, backgroundImage:`radial-gradient(circle at 20% 50%, rgba(107,57,119,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(107,57,119,0.15) 0%, transparent 50%)`}}></div>
    <div style={{position:'relative', zIndex:1, display:'flex', justifyContent:'space-between', alignItems:'center', gap:48}}>
      <div style={{flex:1}}>
        <h2 style={{fontSize:36, fontWeight:600, color:C.surface, letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:8}}>
          Let's talk about <span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accentSoft}}>your site.</span>
        </h2>
        <p style={{fontSize:14, color:'rgba(251,248,241,0.55)', lineHeight:1.5}}>
          One call. Fixed price. No surprises.
        </p>
      </div>
      <div style={{display:'flex', flexDirection:'row', gap:12, flexShrink:0, alignItems:'center'}}>
        <div className="btn-hover" onClick={onStart} style={{padding:'14px 28px', background:C.accent, color:C.surface, borderRadius:99, fontSize:14, fontWeight:600, display:'flex', alignItems:'center', gap:8, whiteSpace:'nowrap', cursor:'pointer'}}>
          Start a project →
        </div>
        <div className="btn-hover" onClick={onWork} style={{padding:'14px 26px', color:C.surface, borderRadius:99, fontSize:14, fontWeight:500, border:`1px solid rgba(251,248,241,0.2)`, display:'flex', alignItems:'center', gap:8, whiteSpace:'nowrap', cursor:'pointer'}}>
          See recent work
        </div>
      </div>
    </div>
  </div>
);

/* ═══ WORK ══════════════════════════════════════════════════════════════ */
const WorkImage = ({tag}) => {
  const variants = {
    lindner: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(135deg, #E8C9BC 0%, #B85432 100%)`, position:'relative', overflow:'hidden'}}>
        {/* Wheat pattern SVG */}
        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.08}}>
          {[0,1,2,3,4].map(i=>(
            <g key={i} transform={`translate(${180+i*12}, ${40+i*30}) rotate(${15+i*8})`}>
              <ellipse cx={0} cy={0} rx={3} ry={12} fill={C.surface}/>
              <line x1={0} y1={12} x2={0} y2={28} stroke={C.surface} strokeWidth={1}/>
            </g>
          ))}
        </svg>
        <div style={{position:'absolute', top:28, left:28}}>
          <div className="serif" style={{fontSize:38, color:C.surface, fontWeight:500, letterSpacing:'-0.02em', lineHeight:1}}>Lindner</div>
          <div className="mono" style={{fontSize:10, color:C.surface, marginTop:8, letterSpacing:'0.12em', opacity:0.85}}>BÄCKEREI · BERLIN</div>
        </div>
        {/* Mini browser frame */}
        <div style={{position:'absolute', top:24, right:20, width:100, height:68, borderRadius:6, overflow:'hidden', boxShadow:'0 4px 16px rgba(20,19,15,0.2)', border:'1px solid rgba(251,248,241,0.3)'}}>
          <div style={{height:14, background:'rgba(251,248,241,0.95)', display:'flex', alignItems:'center', padding:'0 6px', gap:3}}>
            {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:4, height:4, borderRadius:'50%', background:c}}></div>)}
          </div>
          <div style={{background:'rgba(251,248,241,0.85)', padding:'6px', height:'calc(100% - 14px)'}}>
            <div style={{height:6, width:'70%', background:C.ink, borderRadius:2, opacity:0.6, marginBottom:4}}></div>
            <div style={{height:4, width:'90%', background:C.hair, borderRadius:1, marginBottom:3}}></div>
            <div style={{height:4, width:'60%', background:C.hair, borderRadius:1}}></div>
          </div>
        </div>
        {/* Bookings card with sparkline */}
        <div style={{position:'absolute', bottom:20, right:20, padding:'10px 14px', background:'rgba(251,248,241,0.92)', borderRadius:8, boxShadow:'0 4px 12px rgba(20,19,15,0.1)'}}>
          <div className="mono" style={{fontSize:9, color:C.sub, letterSpacing:'0.06em', marginBottom:4}}>BOOKINGS</div>
          <div style={{display:'flex', alignItems:'flex-end', gap:8}}>
            <div style={{fontSize:22, fontWeight:600, color:C.ink, letterSpacing:'-0.02em', lineHeight:1}}>+34%</div>
            <svg width={40} height={16} viewBox="0 0 40 16">
              <path d="M0,14 L6,12 L12,13 L18,9 L24,10 L30,6 L36,4 L40,2" fill="none" stroke={C.green} strokeWidth={1.5} strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    ),
    atlas: (
      <div style={{width:'100%', height:'100%', background:'#0F0D1A', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:`radial-gradient(circle at 60% 40%, rgba(107,57,119,0.3) 0%, transparent 60%)`}}></div>
        {/* Grid texture */}
        <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(196,173,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,173,207,0.03) 1px, transparent 1px)', backgroundSize:'24px 24px'}}></div>
        <div style={{position:'absolute', top:0, left:0, right:0, padding:'10px 16px', background:'rgba(255,255,255,0.04)', borderBottom:`1px solid rgba(255,255,255,0.07)`, display:'flex', gap:5, alignItems:'center'}}>
          {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:7, height:7, borderRadius:'50%', background:c}}></div>)}
          <div className="mono" style={{fontSize:9, color:'rgba(255,255,255,0.35)', marginLeft:10}}>app.atlasstudio.de</div>
        </div>
        <div style={{padding:'44px 16px 16px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
          <div style={{background:'rgba(255,255,255,0.05)', borderRadius:6, padding:'10px 12px', height:60}}>
            <div className="mono" style={{fontSize:8, color:'rgba(255,255,255,0.4)', marginBottom:4}}>REVENUE</div>
            <div style={{fontSize:20, fontWeight:600, color:'white', letterSpacing:'-0.02em'}}>€24.8K</div>
          </div>
          <div style={{background:C.accent, borderRadius:6, padding:'10px 12px', height:60, opacity:0.85}}>
            <div className="mono" style={{fontSize:8, color:'rgba(255,255,255,0.7)', marginBottom:4}}>ACTIVE</div>
            <div style={{fontSize:20, fontWeight:600, color:'white', letterSpacing:'-0.02em'}}>183</div>
          </div>
          {/* Chart row */}
          <div style={{gridColumn:'1 / -1', background:'rgba(255,255,255,0.03)', borderRadius:6, padding:'10px 12px', height:80}}>
            <div className="mono" style={{fontSize:8, color:'rgba(255,255,255,0.35)', marginBottom:8}}>GROWTH · 6 MONTHS</div>
            <svg width="100%" height={40} viewBox="0 0 200 40" preserveAspectRatio="none">
              <path d="M0,35 L25,30 L50,28 L75,22 L100,18 L125,14 L150,10 L175,7 L200,3" fill="none" stroke={C.accentSoft} strokeWidth={1.5} strokeLinecap="round"/>
              <path d="M0,35 L25,30 L50,28 L75,22 L100,18 L125,14 L150,10 L175,7 L200,3 L200,40 L0,40 Z" fill={C.accent} opacity={0.15}/>
              <circle cx={200} cy={3} r={3} fill={C.accent}/>
            </svg>
          </div>
        </div>
        <div style={{position:'absolute', bottom:14, left:16}} className="mono">
          <span style={{fontSize:10, color:'rgba(196,173,207,0.7)', letterSpacing:'0.06em'}}>10× faster than legacy</span>
        </div>
      </div>
    ),
    verdant: (
      <div style={{width:'100%', height:'100%', background:`linear-gradient(160deg, #E0EDD8 0%, #B5CF9F 100%)`, position:'relative', overflow:'hidden'}}>
        <svg viewBox="0 0 240 240" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
          <path d="M0 180 Q60 100, 120 120 T240 80 L240 240 L0 240 Z" fill="rgba(20,19,15,0.06)"/>
          {/* Leaf SVG */}
          <g transform="translate(180, 40) rotate(15)" opacity={0.15}>
            <path d="M0,0 C10,-20 30,-25 20,-5 C30,-25 50,-20 40,0 C50,20 30,25 20,5 C30,25 10,20 0,0 Z" fill={C.ink}/>
            <line x1={20} y1={5} x2={20} y2={35} stroke={C.ink} strokeWidth={1}/>
          </g>
        </svg>
        <div style={{position:'absolute', top:24, left:24}}>
          <div className="serif" style={{fontSize:32, color:C.ink, fontWeight:500, letterSpacing:'-0.02em', fontStyle:'italic'}}>Verdant</div>
          <div className="mono" style={{fontSize:10, color:C.inkSoft, marginTop:6, letterSpacing:'0.16em', opacity:0.8}}>YOGA · KREUZBERG</div>
        </div>
        {/* Schedule widget */}
        <div style={{position:'absolute', top:24, right:20, width:96, padding:'8px 10px', background:'rgba(251,248,241,0.88)', borderRadius:6, boxShadow:'0 2px 8px rgba(20,19,15,0.08)'}}>
          <div className="mono" style={{fontSize:7, color:C.sub, letterSpacing:'0.08em', marginBottom:5}}>TODAY</div>
          {[['9:00','Vinyasa'],['10:30','Yin'],['12:00','Hatha']].map(([t,n])=>(
            <div key={t} style={{display:'flex', gap:6, alignItems:'center', marginBottom:3}}>
              <span className="mono" style={{fontSize:7, color:C.sub, width:24}}>{t}</span>
              <span style={{fontSize:9, color:C.ink, fontWeight:500}}>{n}</span>
            </div>
          ))}
        </div>
        {/* Bottom metrics with ring indicators */}
        <div style={{position:'absolute', bottom:18, left:18, right:18, display:'flex', gap:8}}>
          {[['LIGHTHOUSE','100',C.green],['FCP','0.6s',C.accent]].map(([k,v,color])=>(
            <div key={k} style={{flex:1, padding:'8px 10px', background:'rgba(251,248,241,0.9)', borderRadius:6, display:'flex', alignItems:'center', gap:8}}>
              <svg width={22} height={22} viewBox="0 0 22 22">
                <circle cx={11} cy={11} r={8} fill="none" stroke="rgba(20,19,15,0.08)" strokeWidth={2}/>
                <circle cx={11} cy={11} r={8} fill="none" stroke={color} strokeWidth={2} strokeDasharray={`${2*Math.PI*8*0.98} ${2*Math.PI*8}`} strokeLinecap="round" transform="rotate(-90 11 11)"/>
              </svg>
              <div>
                <div className="mono" style={{fontSize:7, color:C.sub, marginBottom:1}}>{k}</div>
                <div style={{fontSize:13, color:C.ink, fontWeight:600}}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };
  return variants[tag] || null;
};

const Work = () => {
  const [ref, inView] = useInView(0.15);
  return (
  <div style={{padding:'112px 56px', background:`linear-gradient(180deg, ${C.bg} 0%, #F3EFE5 100%)`, borderBottom:`1px solid ${C.hair}`}}>
    <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, marginBottom:64, alignItems:'baseline'}}>
      <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase'}}>04 · Selected work</div>
      <div>
        <h2 style={{fontSize:56, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.02, marginBottom:18}}>
          Recent <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>projects</span>.
        </h2>
        <p style={{fontSize:17, color:C.sub, maxWidth:520, lineHeight:1.6}}>
          A selection of work shipped in the past 12 months. Real businesses, real outcomes.
        </p>
      </div>
    </div>
    <div ref={ref} style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24}}>
      {WORK.map((w, idx) => (
        <div key={w.tag} className="work-card" style={{background:C.surface, borderRadius:16, overflow:'hidden', cursor:'pointer', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transition:`opacity 1s cubic-bezier(0.16,1,0.3,1) ${idx*0.18}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${idx*0.18}s`, border:`1px solid ${C.hair}`}}>
          <div style={{height:240}}><WorkImage tag={w.tag}/></div>
          <div style={{padding:'24px'}}>
            <div style={{display:'flex', gap:3, alignItems:'center', marginBottom:10}}>
              {Array.from({length:w.stars}).map((_,i)=>(
                <span key={i} style={{color:C.accent, fontSize:16}}>★</span>
              ))}
              <span className="mono" style={{fontSize:11, color:C.ink, fontWeight:600, marginLeft:6}}>5.0</span>
            </div>
            <p style={{fontSize:13, color:C.sub, fontStyle:'italic', lineHeight:1.55, marginBottom:14}}>{w.quote}</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6}}>
              <h3 style={{fontSize:17, fontWeight:600, color:C.ink, letterSpacing:'-0.02em'}}>{w.client}</h3>
              <span className="work-arrow" style={{fontSize:13, color:C.accent, display:'inline-flex', transition:'transform 0.3s ease'}}>→</span>
            </div>
            <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:12}}>{w.kind}</div>
            <div style={{display:'inline-flex', alignItems:'center', gap:6, padding:'4px 10px', background:C.accentBg, borderRadius:99}}>
              <span style={{width:5, height:5, borderRadius:'50%', background:C.accent}}></span>
              <span className="mono" style={{fontSize:11, color:C.accent, fontWeight:600}}>
                {w.metric.startsWith('+') ? <CountUp end={parseInt(w.metric.replace(/[^0-9]/g,''))} prefix="+" suffix={w.metric.includes('%') ? '% ' + w.metric.split('%')[1] : w.metric.includes('×') ? '×' : ''}/> : w.metric}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{marginTop:48, display:'flex', justifyContent:'center'}}>
      <div className="outline-hover" style={{padding:'12px 24px', border:`1px solid ${C.hairStrong}`, borderRadius:99, fontSize:14, fontWeight:500, color:C.ink, display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
        See all 12 projects <span style={{color:C.accent}}>→</span>
      </div>
    </div>
  </div>
  );
};

/* ═══ ABOUT ═════════════════════════════════════════════════════════════ */
const About = () => (
  <div style={{padding:'112px 56px', background:C.surface, borderBottom:`1px solid ${C.hair}`}}>
    <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:48, alignItems:'flex-start'}}>
      <div>
        <div style={{aspectRatio:'1/1', borderRadius:16, overflow:'hidden', border:`1px solid ${C.hair}`}}>
          <img src="daniel-profile.jpg" alt="Daniel" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        </div>
      </div>
      <div>
        <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:20}}>05 · About</div>
        <h2 style={{fontSize:40, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:24}}>
          Hi, I'm <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>Daniel.</span>
        </h2>
        <div style={{fontSize:14, lineHeight:1.7, color:C.inkSoft, maxWidth:560}}>
          <p style={{marginBottom:12}}>I studied CS at TU Berlin and Seoul National University, then spent six years building for agencies and enterprise clients at SAP.</p>
          <p style={{marginBottom:12}}>In 2024 I started Brightbyte because <span style={{color:C.ink, fontWeight:500}}>small businesses deserve the same quality code the big companies get</span>, without the big company overhead.</p>
          <p>I work in German and English, take three to four clients a quarter, and reply within a day. If we work together, you talk to me, the person writing the code.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, marginTop:32, paddingTop:24, borderTop:`1px solid ${C.hair}`}}>
          {[['Based in','Berlin · CET'],['Languages','EN · DE'],['Background','6 yrs agencies + SAP'],['Founded','2024']].map(([k,v]) => (
            <div key={k}>
              <div className="mono" style={{fontSize:9, color:C.sub, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:5}}>{k}</div>
              <div style={{fontSize:14, color:C.ink, fontWeight:500}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ═══ PRICING ═══════════════════════════════════════════════════════════ */
const Pricing = ({onSelect}) => {
  const [active, setActive] = React.useState(0);
  const scope = SCOPE_OPTIONS[active];

  const pillars = [
    {icon:'◎', label:'€0–5/mo hosting', sub:'Vercel free tier'},
    {icon:'◇', label:'You own everything', sub:'Code + domain + data'},
    {icon:'▲', label:'95+ Lighthouse', sub:'Proven on every build'},
    {icon:'○', label:'No lock-in', sub:'Leave anytime, keep it all'},
  ];

  return (
  <div style={{padding:'112px 56px', background:`linear-gradient(180deg, #F8F4EC 0%, ${C.bg} 100%)`, borderBottom:`1px solid ${C.hair}`}}>
    {/* Section header */}
    <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, marginBottom:56, alignItems:'baseline'}}>
      <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase'}}>06 · Investment</div>
      <div>
        <h2 style={{fontSize:56, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.02, marginBottom:18}}>
          What you <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>get.</span>
        </h2>
        <p style={{fontSize:17, color:C.sub, maxWidth:520, lineHeight:1.6}}>
          No hourly billing. Fixed scope, fixed timeline, full ownership. Every project ships with a custom quote — here's what to expect.
        </p>
      </div>
    </div>

    {/* Why custom code? — value pillars */}
    <div style={{padding:'24px 32px', background:C.surface, border:`1px solid ${C.hair}`, borderRadius:14, marginBottom:40}}>
      <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:16}}>
        <div className="mono" style={{fontSize:10, color:C.accent, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600}}>Why custom code?</div>
        <div style={{flex:1, height:1, background:C.hair}}></div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:20}}>
        {pillars.map(p => (
          <div key={p.label} style={{display:'flex', gap:12, alignItems:'flex-start'}}>
            <span style={{fontSize:16, color:C.accent, lineHeight:1, marginTop:2}}>{p.icon}</span>
            <div>
              <div style={{fontSize:14, fontWeight:600, color:C.ink, letterSpacing:'-0.01em', marginBottom:2}}>{p.label}</div>
              <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.02em'}}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Scope selector pills */}
    <div style={{display:'flex', gap:10, marginBottom:32, justifyContent:'center'}}>
      {SCOPE_OPTIONS.map((opt, i) => (
        <div key={opt.id} onClick={() => setActive(i)} style={{
          padding:'10px 20px', borderRadius:99, fontSize:14, fontWeight:500, cursor:'pointer',
          background: i === active ? C.ink : C.bg,
          color: i === active ? C.surface : C.ink,
          border: `1px solid ${i === active ? C.ink : C.hair}`,
          transition:'all 0.25s ease',
        }}>{opt.title}</div>
      ))}
    </div>

    {/* Active scope card */}
    <div key={scope.id} style={{
      background:C.surface, border:`1px solid ${C.hair}`, borderRadius:18,
      padding:'44px 48px', display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:56,
      opacity:1, transition:'opacity 0.3s ease',
    }}>
      {/* Left — identity & meta */}
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div>
          <div className="mono" style={{fontSize:10, color:C.accent, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600, marginBottom:12}}>
            {scope.timeline}
          </div>
          <h3 style={{fontSize:28, fontWeight:600, color:C.ink, letterSpacing:'-0.02em', marginBottom:10}}>{scope.title}</h3>
          <p style={{fontSize:16, color:C.sub, lineHeight:1.6, marginBottom:24}}>{scope.tagline}</p>
          <div style={{padding:'12px 16px', background:C.accentBg, borderRadius:10, display:'inline-flex', alignItems:'center', gap:10}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:C.accent}}></span>
            <span style={{fontSize:13, color:C.accent, fontWeight:500}}>Ideal for: {scope.ideal}</span>
          </div>
        </div>
        <div style={{marginTop:32}}>
          <div className="btn-hover" onClick={() => onSelect && onSelect(active)} style={{
            padding:'14px 28px', background:C.ink, color:C.surface, borderRadius:99,
            fontSize:14, fontWeight:500, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer',
          }}>
            Get a free quote <span style={{color:C.accent}}>→</span>
          </div>
          <div className="mono" style={{fontSize:11, color:C.sub, marginTop:12, letterSpacing:'0.02em'}}>Reply within 24 hours. No obligation.</div>
        </div>
      </div>

      {/* Right — includes & advantages */}
      <div>
        <div style={{marginBottom:28}}>
          <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14}}>What's included</div>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {scope.includes.map(f => (
              <div key={f} style={{display:'flex', gap:10, alignItems:'flex-start', fontSize:14, lineHeight:1.5, color:C.inkSoft}}>
                <span style={{color:C.accent, marginTop:1, flexShrink:0}}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{paddingTop:20, borderTop:`1px solid ${C.hair}`}}>
          <div className="mono" style={{fontSize:10, color:C.accent, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14, fontWeight:600}}>vs. templates & platforms</div>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {scope.advantages.map(a => (
              <div key={a} style={{display:'flex', gap:10, alignItems:'flex-start', fontSize:14, lineHeight:1.5, color:C.inkSoft}}>
                <span style={{color:C.green, marginTop:1, flexShrink:0}}>▸</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Trust strip */}
    <div style={{marginTop:32, display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap'}}>
      {['Fixed price','Full ownership','Reply in 24h','No surprises'].map((t, i) => (
        <React.Fragment key={t}>
          {i > 0 && <span style={{color:C.subLight, fontSize:10}}>·</span>}
          <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>{t}</span>
        </React.Fragment>
      ))}
    </div>
  </div>
  );
};

/* ═══ FAQ ═══════════════════════════════════════════════════════════════ */
const FAQ = ({onAsk}) => {
  const main = FAQS.find(f => f.main);
  const rest = FAQS.filter(f => !f.main);
  const [open, setOpen] = React.useState({});

  const toggle = (i) => setOpen(prev => ({...prev, [i]: !prev[i]}));

  return (
    <div style={{padding:'112px 56px', background:C.surface, borderBottom:`1px solid ${C.hair}`}}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:40, marginBottom:56}}>
        <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', flexShrink:0}}>07 · Questions</div>
        <h2 style={{fontSize:48, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.02}}>
          Common <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>questions</span>.
        </h2>
        <div className="outline-hover" onClick={onAsk} style={{display:'inline-flex', alignItems:'center', gap:8, padding:'10px 18px', border:`1px solid ${C.hairStrong}`, borderRadius:99, fontSize:13, fontWeight:500, color:C.ink, flexShrink:0, cursor:'pointer'}}>
          Ask anything <span style={{color:C.accent}}>→</span>
        </div>
      </div>

      {/* Main question — full width featured card (always expanded) */}
      <div style={{background:C.bg, border:`1.5px solid ${C.accentSoft}`, borderRadius:16, padding:'36px 40px', marginBottom:24, position:'relative'}}>
        <div style={{position:'absolute', top:-11, left:32, padding:'3px 12px', background:C.accent, borderRadius:99}} className="mono">
          <span style={{fontSize:10, color:C.surface, letterSpacing:'0.1em', fontWeight:600}}>MOST ASKED</span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
          <h3 style={{fontSize:22, fontWeight:600, color:C.ink, letterSpacing:'-0.02em'}}>{main.q}</h3>
        </div>
        <p style={{fontSize:15, color:C.sub, lineHeight:1.7, maxWidth:700}}>{main.a}</p>
      </div>

      {/* Remaining questions — 2×2 grid, collapsible */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, alignItems:'start'}}>
        {rest.map((f, i) => (
          <div key={i} style={{background:C.bg, border:`1px solid ${C.hair}`, borderRadius:14, padding:'24px 30px', cursor:'pointer', transition:'border-color 0.25s ease', ...(open[i] ? {borderColor:C.accentSoft} : {})}} onClick={() => toggle(i)}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center', gap:10}}>
                <h3 style={{fontSize:16, fontWeight:600, color:C.ink, letterSpacing:'-0.01em'}}>{f.q}</h3>
              </div>
              <span style={{fontSize:18, color:C.sub, transition:'transform 0.2s', transform:open[i] ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink:0, marginLeft:12}}>+</span>
            </div>
            {open[i] && (
              <p style={{fontSize:14, color:C.sub, lineHeight:1.65, marginTop:14, paddingTop:14, borderTop:`1px solid ${C.hair}`}}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══ CONTACT ═══════════════════════════════════════════════════════════ */
const Contact = ({selectedType = 1, onTypeChange}) => (
  <div style={{padding:'112px 56px', background:`linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)`, borderBottom:`1px solid ${C.hair}`}}>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:64, alignItems:'flex-start'}}>

      {/* LEFT — context + what happens next (editorial) */}
      <div>
        <div className="mono section-num" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24}}>08 · Contact</div>
        <h2 style={{fontSize:64, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:0.98, marginBottom:32}}>
          Let's build<br/>
          <span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accent}}>something together.</span>
        </h2>
        <p style={{fontSize:17, color:C.sub, lineHeight:1.6, maxWidth:400, marginBottom:36}}>
          Send a brief. What you're trying to do, what's in the way, when you'd like to launch. I'll reply within 24 hours.
        </p>

        {/* What happens next — compact timeline */}
        <div>
          <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:20}}>What happens next</div>
          <div style={{position:'relative', paddingLeft:24}}>
            {/* Vertical connector line */}
            <div style={{position:'absolute', left:5, top:6, bottom:6, width:1.5, background:C.accentSoft, borderRadius:1}}></div>
            {[
              ['24h', 'I read your brief and reply with a few questions or a quick yes/no.'],
              ['Day 2', 'We have a 30-min call to align on scope and timeline.'],
              ['Day 3', 'You get a fixed-price proposal in your inbox — no obligation.'],
            ].map(([when, what], i, arr) => (
              <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start', marginBottom: i < arr.length-1 ? 16 : 0, position:'relative'}}>
                {/* Dot */}
                <div style={{position:'absolute', left:-24, top:5, width:12, height:12, borderRadius:'50%', background:C.surface, border:`2px solid ${C.accent}`, zIndex:1}}></div>
                <div style={{display:'flex', alignItems:'baseline', gap:10}}>
                  <span className="mono" style={{fontSize:11, fontWeight:600, color:C.accent, letterSpacing:'0.04em', flexShrink:0, minWidth:42}}>{when.toUpperCase()}</span>
                  <span style={{fontSize:14, color:C.inkSoft, lineHeight:1.5}}>{what}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div style={{background:C.surface, border:`1px solid ${C.hair}`, borderRadius:18, padding:'40px', boxShadow:`0 30px 60px -40px rgba(20,19,15,0.18)`}}>
        <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24}}>Project brief</div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:18}}>
          {[['Your name', 'Maria Becker'],['Email', 'maria@yourdomain.de']].map(([l,p]) => (
            <div key={l}>
              <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>{l}</div>
              <div style={{padding:'12px 14px', background:C.bg, border:`1px solid ${C.hair}`, borderRadius:8, fontSize:14, color:C.subLight}}>{p}</div>
            </div>
          ))}
        </div>

        <div style={{marginBottom:18}}>
          <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>Type of project</div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {['Landing page','Multi-page site','Web app / MVP','AI integration','Not sure yet'].map((opt, i) => (
              <div key={opt} onClick={() => onTypeChange && onTypeChange(i)} style={{padding:'8px 14px', background: i===selectedType ? C.ink : C.bg, color: i===selectedType ? C.surface : C.ink, border:`1px solid ${i===selectedType ? C.ink : C.hair}`, borderRadius:99, fontSize:13, fontWeight:500, cursor:'pointer', transition:'all 0.2s ease'}}>{opt}</div>
            ))}
          </div>
        </div>

        <div style={{marginBottom:24}}>
          <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>Tell me about it</div>
          <div style={{padding:'14px 16px', background:C.bg, border:`1px solid ${C.hair}`, borderRadius:8, fontSize:14, color:C.subLight, minHeight:120, lineHeight:1.6}}>
            We're a small clinic in Mitte and our current site is slow and looks dated. We want to attract new patients and offer online booking…
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:24, borderTop:`1px solid ${C.hair}`}}>
          <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>Reply within 24 hours, guaranteed.</span>
          <div className="btn-hover" style={{padding:'12px 24px', background:C.ink, color:C.surface, borderRadius:99, fontSize:14, fontWeight:500, display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
            Send brief <span style={{color:C.accent}}>→</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══ FOOTER ════════════════════════════════════════════════════════════ */
const Footer = () => (
  <div style={{padding:'72px 56px 36px', background:C.ink, color:C.surface}}>
    <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:64}}>
      <div>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
          <BrightByteLogo size={24}/>
          <div style={{fontWeight:600, fontSize:15, letterSpacing:'-0.01em'}}>brightbyte<span style={{color:'rgba(251,248,241,0.5)'}}>.berlin</span></div>
        </div>
        <p style={{fontSize:14, color:'rgba(251,248,241,0.6)', lineHeight:1.6, maxWidth:320}}>
          Enterprise-grade websites for small businesses. Built in Berlin, shipped fast, supported personally.
        </p>
        <div style={{display:'inline-flex', alignItems:'center', gap:0, marginTop:24, padding:'8px 14px 8px 12px', background:'rgba(251,248,241,0.06)', borderLeft:`3px solid ${C.accentSoft}`, borderRadius:2}}>
          <span className="mono" style={{fontSize:11, color:C.accentSoft, marginRight:8, fontWeight:500}}>▸</span>
          <span className="mono" style={{fontSize:11, letterSpacing:'0.04em'}}>Available · April 2026</span>
        </div>
      </div>
      {[['Product',['Services','Pricing','Process','FAQ']],['Company',['About','Work','Testimonials','Contact']],['Connect',['Email','LinkedIn','GitHub','RSS']]].map(([h, items]) => (
        <div key={h}>
          <div className="mono" style={{fontSize:10, color:'rgba(251,248,241,0.5)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:18}}>{h}</div>
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            {items.map(it => <div key={it} style={{fontSize:14, color:C.surface}}>{it}</div>)}
          </div>
        </div>
      ))}
    </div>

    {/* SEO programmatic pages */}
    <div style={{paddingTop:32, borderTop:'1px solid rgba(251,248,241,0.08)', marginBottom:48}}>
      <div className="mono" style={{fontSize:10, color:'rgba(251,248,241,0.35)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:20}}>Explore</div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:32}}>
        {[
          ['By Service', ['Webentwickler Berlin','Landing Page Agentur','Website Relaunch','WordPress Alternative','React Entwicklung','Webdesign für KMU']],
          ['By Industry', ['Website für Ärzte','Website für Restaurant','Website für Handwerker','Website für Anwälte','Website für Coaches','Website für Startups']],
          ['By Need', ['SEO Optimierung Berlin','Website Geschwindigkeit','Lead Generation','Online Booking Integration','Mehrsprachige Website','DSGVO-konforme Website']],
          ['By Location', ['Webdesign Mitte','Webdesign Kreuzberg','Webdesign Prenzlauer Berg','Webdesign Charlottenburg','Webdesign Friedrichshain','Webdesign Neukölln']]
        ].map(([title, links]) => (
          <div key={title}>
            <div style={{fontSize:12, fontWeight:500, color:'rgba(251,248,241,0.6)', marginBottom:12}}>{title}</div>
            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              {links.map(l => <span key={l} style={{fontSize:12, color:'rgba(251,248,241,0.4)', cursor:'pointer'}}>{l}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{paddingTop:24, borderTop:`1px solid rgba(251,248,241,0.1)`, display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, alignItems:'center'}}>
      <span className="mono" style={{fontSize:11, color:'rgba(251,248,241,0.5)', letterSpacing:'0.04em'}}>© 2026 Brightbyte · Berlin</span>
      {['Impressum','Privacy','Terms'].map(l=><span key={l} className="mono" style={{fontSize:11, color:'rgba(251,248,241,0.5)', letterSpacing:'0.04em'}}>{l}</span>)}
    </div>
  </div>
);

/* ═══ PROJECT DETAIL PAGE ═══════════════════════════════════════════════ */
const ProjectDetail = ({project}) => {
  const p = project || PROJECTS[0];
  const next = PROJECTS.find(pr => pr.slug === p.nextSlug) || PROJECTS[0];

  return (
    <div style={{background:C.bg, color:C.ink, fontFamily:'Geist'}}>
      {/* Nav */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'22px 56px', borderBottom:`1px solid ${C.hair}`, position:'relative'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <BrightByteLogo size={28} />
          <div style={{fontSize:15, letterSpacing:'-0.01em'}}><span style={{fontWeight:600, color:C.ink}}>bright</span><span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accent}}>byte</span><span style={{color:C.sub, fontWeight:400}}>.berlin</span></div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>← Back to work</span>
        </div>
      </div>

      {/* Hero — full-width browser mockup */}
      <div style={{padding:'64px 56px 48px', background:`linear-gradient(180deg, ${C.bg} 0%, ${C.surface} 100%)`, position:'relative'}}>
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:`radial-gradient(ellipse at 50% 80%, ${p.accentColor}15 0%, transparent 60%)`, pointerEvents:'none'}}/>
        {/* Browser mockup */}
        <div style={{maxWidth:1000, margin:'0 auto', borderRadius:12, overflow:'hidden', boxShadow:'0 24px 80px -12px rgba(20,19,15,0.18), 0 0 0 1px rgba(20,19,15,0.06)', position:'relative'}}>
          {/* Chrome bar */}
          <div style={{padding:'10px 16px', background:'#2A2926', display:'flex', alignItems:'center', gap:8}}>
            <div style={{display:'flex', gap:6}}>
              {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:10, height:10, borderRadius:'50%', background:c}}></div>)}
            </div>
            <div style={{flex:1, marginLeft:12, height:24, background:'rgba(255,255,255,0.08)', borderRadius:6, display:'flex', alignItems:'center', paddingLeft:12}}>
              <span className="mono" style={{fontSize:11, color:'rgba(255,255,255,0.5)'}}>www.{p.slug.replace('-','')}.de</span>
            </div>
          </div>
          {/* Mock site content — project-specific layouts */}
          <div style={{background:C.surface, padding:'40px 48px', minHeight:400}}>
            {/* Mock nav */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:40}}>
              <div style={{width:80, height:12, borderRadius:4, background:p.accentColor, opacity:0.7}}></div>
              <div style={{display:'flex', gap:20}}>
                {[48,36,42,36].map((w,i)=><div key={i} style={{width:w, height:8, borderRadius:3, background:C.hair}}></div>)}
              </div>
            </div>
            {/* Project-specific hero layout */}
            {p.slug === 'architecture-studio' ? (
              <div>
                <div style={{display:'flex', gap:12, marginBottom:20}}>
                  <div style={{width:'65%', height:180, borderRadius:8, background:`linear-gradient(135deg, ${p.accentColor}33 0%, ${p.accentColor}55 100%)`, border:`1px solid ${C.hair}`}}></div>
                  <div style={{width:'35%', display:'flex', flexDirection:'column', gap:12}}>
                    <div style={{flex:1, borderRadius:8, background:`linear-gradient(180deg, ${p.accentColor}22 0%, ${p.accentColor}44 100%)`, border:`1px solid ${C.hair}`}}></div>
                    <div style={{flex:1, borderRadius:8, background:`linear-gradient(180deg, ${p.accentColor}15 0%, ${p.accentColor}30 100%)`, border:`1px solid ${C.hair}`}}></div>
                  </div>
                </div>
                {/* Masonry-style grid hint */}
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
                  {[120,90,110,95,115,100].map((h,i)=>(
                    <div key={i} style={{height:h, borderRadius:6, background:`${p.accentColor}${15+i*5}`, border:`1px solid ${C.hair}`}}></div>
                  ))}
                </div>
              </div>
            ) : p.slug === 'baumpflege' ? (
              <div>
                <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:40, alignItems:'center', marginBottom:32}}>
                  <div>
                    <div style={{width:'95%', height:18, borderRadius:4, background:C.ink, marginBottom:10, opacity:0.85}}></div>
                    <div style={{width:'75%', height:14, borderRadius:4, background:C.ink, marginBottom:20, opacity:0.5}}></div>
                    <div style={{width:'100%', height:8, borderRadius:3, background:C.hair, marginBottom:6}}></div>
                    <div style={{width:'85%', height:8, borderRadius:3, background:C.hair, marginBottom:24}}></div>
                    {/* Strong CTA area */}
                    <div style={{display:'flex', gap:12}}>
                      <div style={{width:140, height:40, borderRadius:99, background:p.accentColor, opacity:0.85}}></div>
                      <div style={{width:120, height:40, borderRadius:99, border:`2px solid ${C.hair}`}}></div>
                    </div>
                  </div>
                  <div style={{height:200, borderRadius:10, background:`linear-gradient(160deg, ${p.accentColor}22 0%, ${p.accentColor}44 100%)`, border:`1px solid ${C.hair}`, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <svg width={60} height={60} viewBox="0 0 60 60" opacity={0.2}>
                      <path d="M30,5 L30,55 M20,15 Q30,5 40,15 M15,25 Q30,10 45,25" stroke={C.ink} fill="none" strokeWidth={2}/>
                    </svg>
                  </div>
                </div>
                {/* Trust badges row */}
                <div style={{display:'flex', gap:16}}>
                  {[0,1,2,3].map(i=>(
                    <div key={i} style={{flex:1, height:48, borderRadius:8, background:C.hair, opacity:0.3, display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <div style={{width:20, height:20, borderRadius:'50%', background:p.accentColor, opacity:0.4}}></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div style={{textAlign:'center', marginBottom:32}}>
                  <div style={{width:'50%', height:16, borderRadius:4, background:C.ink, margin:'0 auto 10px', opacity:0.8}}></div>
                  <div style={{width:'35%', height:10, borderRadius:3, background:C.hair, margin:'0 auto'}}></div>
                </div>
                {/* Warm cards layout for psychologist */}
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:16}}>
                  {[0,1,2].map(i=>(
                    <div key={i} style={{borderRadius:12, border:`1px solid ${C.hair}`, padding:16, background:`${p.accentColor}08`}}>
                      <div style={{width:32, height:32, borderRadius:8, background:`${p.accentColor}33`, marginBottom:12}}></div>
                      <div style={{height:8, width:'80%', background:C.ink, borderRadius:3, opacity:0.6, marginBottom:8}}></div>
                      <div style={{height:6, width:'100%', background:C.hair, borderRadius:2, marginBottom:4}}></div>
                      <div style={{height:6, width:'70%', background:C.hair, borderRadius:2}}></div>
                    </div>
                  ))}
                </div>
                {/* Booking section hint */}
                <div style={{marginTop:24, padding:'20px 24px', borderRadius:12, background:`${p.accentColor}10`, border:`1px solid ${p.accentColor}30`, display:'flex', alignItems:'center', gap:16}}>
                  <div style={{width:100, height:36, borderRadius:99, background:p.accentColor, opacity:0.7}}></div>
                  <div style={{flex:1, height:8, borderRadius:3, background:C.hair}}></div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Title below mockup */}
        <div style={{textAlign:'center', marginTop:48}}>
          <h1 style={{fontSize:48, fontWeight:600, color:C.ink, letterSpacing:'-0.03em', marginBottom:10}}>{p.title}</h1>
          <p style={{fontSize:17, color:C.sub, maxWidth:480, margin:'0 auto'}}>{p.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div style={{padding:'20px 56px', borderTop:`1px solid ${C.hair}`, borderBottom:`1px solid ${C.hair}`, display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
        <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>{p.client}</span>
        <span style={{width:3, height:3, borderRadius:'50%', background:C.subLight}}></span>
        <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>{p.year}</span>
        <span style={{width:3, height:3, borderRadius:'50%', background:C.subLight}}></span>
        <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>{p.type}</span>
        <div style={{marginLeft:'auto', display:'flex', gap:8}}>
          {p.tech.map(t => (
            <span key={t} className="mono" style={{fontSize:10, color:C.accent, background:C.accentBg, padding:'4px 10px', borderRadius:99, letterSpacing:'0.02em'}}>{t}</span>
          ))}
        </div>
      </div>

      {/* Challenge / Brief */}
      <div style={{padding:'112px 56px', borderBottom:`1px solid ${C.hair}`}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48}}>
          <div>
            <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:16}}>01 · Challenge</div>
            <h2 style={{fontSize:36, fontWeight:500, color:C.ink, letterSpacing:'-0.02em', lineHeight:1.1}}>The <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>brief.</span></h2>
          </div>
          <div style={{paddingTop:8}}>
            <p style={{fontSize:17, color:C.inkSoft, lineHeight:1.7, maxWidth:580}}>{p.brief}</p>
          </div>
        </div>
      </div>

      {/* Solution / Approach */}
      <div style={{padding:'112px 56px', borderBottom:`1px solid ${C.hair}`}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48}}>
          <div>
            <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:16}}>02 · Solution</div>
            <h2 style={{fontSize:36, fontWeight:500, color:C.ink, letterSpacing:'-0.02em', lineHeight:1.1}}>The <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>approach.</span></h2>
          </div>
          <div style={{paddingTop:8}}>
            <p style={{fontSize:17, color:C.inkSoft, lineHeight:1.7, maxWidth:580, marginBottom:24}}>{p.solution}</p>
            <ul style={{listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:12}}>
              {p.solutionBullets.map((b,i) => (
                <li key={i} style={{display:'flex', alignItems:'flex-start', gap:12}}>
                  <span style={{width:6, height:6, borderRadius:'50%', background:C.accent, marginTop:8, flexShrink:0}}></span>
                  <span style={{fontSize:15, color:C.inkSoft, lineHeight:1.6}}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{padding:'112px 56px', borderBottom:`1px solid ${C.hair}`}}>
        <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:48}}>03 · Gallery</div>
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:16}}>
          {/* Large desktop mockup */}
          <div style={{borderRadius:12, overflow:'hidden', boxShadow:'0 8px 32px rgba(20,19,15,0.08)', border:`1px solid ${C.hair}`}}>
            <div style={{padding:'8px 14px', background:'#F0ECE4', borderBottom:`1px solid ${C.hair}`, display:'flex', alignItems:'center', gap:6}}>
              <div style={{display:'flex', gap:4}}>
                {['#FF5C5C','#FFC83D','#28C940'].map(c=><div key={c} style={{width:7, height:7, borderRadius:'50%', background:c}}></div>)}
              </div>
              <div style={{flex:1, height:16, marginLeft:8, background:'rgba(20,19,15,0.04)', borderRadius:4, display:'flex', alignItems:'center', paddingLeft:10}}>
                <span className="mono" style={{fontSize:9, color:C.subLight}}>www.{p.slug.replace('-','')}.de</span>
              </div>
            </div>
            <div style={{height:320, background:`linear-gradient(180deg, ${C.surface} 0%, ${p.accentColor}08 100%)`, padding:'24px 32px'}}>
              {p.slug === 'architecture-studio' ? (
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, height:'100%'}}>
                  <div style={{borderRadius:8, background:`linear-gradient(135deg, ${p.accentColor}20 0%, ${p.accentColor}40 100%)`, border:`1px solid ${C.hair}`}}></div>
                  <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:12}}>
                    <div style={{borderRadius:8, background:`${p.accentColor}18`, border:`1px solid ${C.hair}`}}></div>
                    <div style={{borderRadius:8, background:`${p.accentColor}12`, border:`1px solid ${C.hair}`}}></div>
                  </div>
                </div>
              ) : p.slug === 'baumpflege' ? (
                <div style={{display:'flex', flexDirection:'column', gap:16, height:'100%'}}>
                  <div style={{flex:2, borderRadius:8, background:`linear-gradient(180deg, ${p.accentColor}20 0%, ${p.accentColor}35 100%)`, border:`1px solid ${C.hair}`, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{width:160, height:44, borderRadius:99, background:p.accentColor, opacity:0.5}}></div>
                  </div>
                  <div style={{flex:1, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
                    {[0,1,2].map(i=><div key={i} style={{borderRadius:6, background:C.hair, opacity:0.3}}></div>)}
                  </div>
                </div>
              ) : (
                <div style={{display:'flex', flexDirection:'column', gap:14, height:'100%'}}>
                  <div style={{flex:1, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                    {[0,1].map(i=>(
                      <div key={i} style={{borderRadius:10, background:`${p.accentColor}${12+i*8}`, border:`1px solid ${C.hair}`, padding:16}}>
                        <div style={{width:24, height:24, borderRadius:6, background:`${p.accentColor}40`, marginBottom:10}}></div>
                        <div style={{height:6, width:'70%', borderRadius:3, background:C.hair, marginBottom:6}}></div>
                        <div style={{height:6, width:'50%', borderRadius:3, background:C.hair}}></div>
                      </div>
                    ))}
                  </div>
                  <div style={{height:56, borderRadius:8, background:`${p.accentColor}10`, border:`1px solid ${p.accentColor}25`, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{width:120, height:28, borderRadius:99, background:p.accentColor, opacity:0.4}}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Smaller views stacked */}
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            {/* Mobile mockup */}
            <div style={{flex:1, borderRadius:12, overflow:'hidden', boxShadow:'0 8px 32px rgba(20,19,15,0.08)', border:`1px solid ${C.hair}`, display:'flex', flexDirection:'column'}}>
              <div style={{padding:'6px 10px', background:'#F0ECE4', borderBottom:`1px solid ${C.hair}`, display:'flex', justifyContent:'center'}}>
                <div style={{width:40, height:4, borderRadius:2, background:'rgba(20,19,15,0.15)'}}></div>
              </div>
              <div style={{flex:1, background:`linear-gradient(180deg, ${C.surface} 0%, ${p.accentColor}08 100%)`, padding:'12px 16px', display:'flex', flexDirection:'column', gap:8}}>
                <div style={{height:8, width:'70%', borderRadius:3, background:C.ink, opacity:0.6}}></div>
                <div style={{flex:1, borderRadius:6, background:`${p.accentColor}15`, border:`1px solid ${C.hair}`}}></div>
                <div style={{height:24, width:80, borderRadius:99, background:p.accentColor, opacity:0.5}}></div>
              </div>
            </div>
            {/* Detail crop */}
            <div style={{flex:1, borderRadius:12, background:`linear-gradient(135deg, ${p.accentColor}12 0%, ${p.accentColor}25 100%)`, border:`1px solid ${C.hair}`, padding:16, display:'flex', flexDirection:'column', justifyContent:'center', gap:8}}>
              <div className="mono" style={{fontSize:9, color:C.sub, letterSpacing:'0.08em', marginBottom:4}}>COMPONENT DETAIL</div>
              <div style={{height:6, width:'80%', borderRadius:3, background:C.hair}}></div>
              <div style={{height:6, width:'60%', borderRadius:3, background:C.hair}}></div>
              <div style={{height:20, width:60, borderRadius:99, background:p.accentColor, opacity:0.4, marginTop:4}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{padding:'112px 56px', borderBottom:`1px solid ${C.hair}`}}>
        <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:48}}>04 · Results</div>
        {/* Metric cards */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20, marginBottom:64}}>
          {p.metrics.map((m,i) => (
            <div key={i} style={{background:C.surface, borderRadius:12, padding:'28px 24px', border:`1px solid ${C.hair}`, borderTop:`2px solid rgba(107,57,119,0.15)`, textAlign:'center'}}>
              <div style={{fontSize:40, fontWeight:700, color:C.ink, letterSpacing:'-0.03em', marginBottom:6}}>{m.value}</div>
              <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.06em', marginBottom:8}}>{m.label}</div>
              <span className="mono" style={{fontSize:11, fontWeight:600, color:'#16A34A', background:'rgba(22,163,74,0.1)', padding:'3px 10px', borderRadius:99}}>{m.delta}</span>
            </div>
          ))}
        </div>
        {/* Client quote */}
        <div style={{maxWidth:640, margin:'0 auto', textAlign:'center'}}>
          <p className="serif" style={{fontSize:22, fontStyle:'italic', color:C.ink, lineHeight:1.6, marginBottom:16}}>{p.quote}</p>
          <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>— {p.quoteAuthor}</span>
        </div>
      </div>

      {/* Next project */}
      <div style={{padding:'80px 56px', background:C.ink}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div>
            <div className="mono" style={{fontSize:11, color:'rgba(251,248,241,0.5)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:12}}>Next project</div>
            <div style={{fontSize:32, fontWeight:600, color:C.surface, letterSpacing:'-0.02em'}}>{next.title}</div>
            <div style={{fontSize:14, color:'rgba(251,248,241,0.6)', marginTop:6}}>{next.subtitle}</div>
          </div>
          <div style={{width:180, height:100, borderRadius:10, background:`linear-gradient(135deg, ${next.accentColor}33 0%, ${next.accentColor}55 100%)`, border:'1px solid rgba(251,248,241,0.1)', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <span style={{fontSize:28, color:C.surface, fontWeight:300}}>→</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{padding:'48px 56px 32px', background:C.ink, borderTop:'1px solid rgba(251,248,241,0.06)'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <svg width={24} height={24} viewBox="0 0 32 32" fill="none">
              <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
              <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
              <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
              <rect x="12" y="12" width="8" height="8" rx="3" fill="#C4ADCF" opacity="0.85"/>
              <rect x="22" y="12" width="8" height="8" rx="4" fill="#C4ADCF" opacity="0.7"/>
              <circle cx="26" cy="6" r="4.5" fill="#C4ADCF" opacity="0.45"/>
            </svg>
            <span style={{fontSize:13, color:'rgba(251,248,241,0.7)'}}><span style={{fontWeight:600, color:C.surface}}>bright</span><span className="serif" style={{fontStyle:'italic', color:C.accentSoft}}>byte</span><span style={{color:'rgba(251,248,241,0.5)'}}>.berlin</span></span>
          </div>
          <span className="mono" style={{fontSize:11, color:'rgba(251,248,241,0.5)', letterSpacing:'0.04em'}}>© 2026 Brightbyte · Berlin</span>
        </div>
      </div>
    </div>
  );
};

/* ═══ FULL PAGE ═════════════════════════════════════════════════════════ */
const GradientDivider = () => (
  <div style={{height:1, background:'linear-gradient(90deg, transparent 0%, rgba(107,57,119,0.15) 30%, rgba(107,57,119,0.15) 70%, transparent 100%)'}}></div>
);

const FullPage = () => {
  const [selectedType, setSelectedType] = React.useState(1);
  const contactRef = React.useRef(null);
  const workRef = React.useRef(null);
  const faqRef = React.useRef(null);

  const scrollToContact = (typeIdx) => {
    if (typeIdx !== undefined) setSelectedType(typeIdx);
    setTimeout(() => contactRef.current?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
  };
  const scrollToWork = () => workRef.current?.scrollIntoView({behavior:'smooth', block:'start'});
  const scrollToFaq = () => faqRef.current?.scrollIntoView({behavior:'smooth', block:'start'});

  return (
  <div style={{background:C.bg, color:C.ink, fontFamily:'Geist'}}>
    <style dangerouslySetInnerHTML={{__html:`
      .btn-hover { transition: box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), outline-offset 0.3s ease, outline-color 0.3s ease; outline: 2px solid transparent; outline-offset: 4px; }
      .btn-hover:hover { box-shadow: 0 0 20px rgba(107,57,119,0.25), 0 4px 12px rgba(20,19,15,0.08); outline: 2px solid rgba(107,57,119,0.4); outline-offset: 2px; }
      .card-hover { transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease, border-color 0.25s ease; border: 1px solid transparent; background: linear-gradient(#FBF8F1, #FBF8F1) padding-box, linear-gradient(135deg, rgba(107,57,119,0.15), rgba(232,165,130,0.2), rgba(212,180,100,0.15), rgba(107,57,119,0.15)) border-box; background-size: 300% 300%; animation: shimmer 8s ease infinite; }
      .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 32px -8px rgba(20,19,15,0.12); }
      @keyframes shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      .nav-link { position: relative; transition: color 0.2s ease; }
      .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1.5px; background:#6B3977; transition: width 0.25s ease; }
      .nav-link:hover::after { width: 100%; }
      .nav-link:hover { color: #6B3977; }
      .outline-hover { transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease; }
      .outline-hover:hover { border-color: #6B3977 !important; box-shadow: 0 0 16px rgba(107,57,119,0.2); color: #6B3977; }
      @keyframes fadeSlideIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
      .section-num { animation: fadeSlideIn 0.6s ease forwards; }
      @keyframes navGlow { 0%, 100% { box-shadow: 0 0 12px rgba(107,57,119,0.15); } 50% { box-shadow: 0 0 20px rgba(107,57,119,0.3); } }
      .nav-cta { animation: navGlow 3s ease-in-out infinite; }
      .work-card { transition: box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease; }
      .work-card:hover { box-shadow: 0 16px 40px -12px rgba(20,19,15,0.12), 0 0 0 1px rgba(107,57,119,0.12); border-color: rgba(107,57,119,0.2) !important; }
      .work-card:hover .work-arrow { transform: translateX(4px); }
    `}}/>
    <Nav/>
    <Hero onStart={() => scrollToContact()} onWork={scrollToWork}/>
    <GradientDivider/>
    <TechStrip/>
    <GradientDivider/>
    <Services/>
    <GradientDivider/>
    <Process/>
    <CTABanner onStart={() => scrollToContact()} onWork={scrollToWork}/>
    <div ref={workRef}><Work/></div>
    <About/>
    <Pricing onSelect={scrollToContact}/>
    <div ref={faqRef}><FAQ onAsk={() => scrollToContact()}/></div>
    <div ref={contactRef}><Contact selectedType={selectedType} onTypeChange={setSelectedType}/></div>
    <Footer/>
  </div>
  );
};

/* ═══ SERVICES PAGE ════════════════════════════════════════════════════ */
const ServicesPage = () => (
  <div style={{background:C.bg, color:C.ink, fontFamily:'Geist'}}>
    {/* Nav */}
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 56px', borderBottom:`1px solid ${C.hair}`}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <BrightByteLogo size={22}/>
        <span style={{fontWeight:600, fontSize:15, letterSpacing:'-0.01em'}}>bright<span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accent}}>byte</span><span style={{color:C.sub, fontWeight:400}}>.berlin</span></span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:28, fontSize:14, color:C.sub}}>
        <span>Work</span><span style={{color:C.ink, fontWeight:500}}>Services</span><span>Process</span><span>Contact</span>
      </div>
    </div>

    {/* Hero — compact */}
    <div style={{padding:'80px 56px 56px', textAlign:'center'}}>
      <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:20}}>Services</div>
      <h1 style={{fontSize:44, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:16}}>
        Websites that work as hard<br/>as <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>you do.</span>
      </h1>
      <p style={{fontSize:17, color:C.sub, lineHeight:1.6, maxWidth:520, margin:'0 auto'}}>
        Fixed-price, fixed-timeline builds. I handle the tech. You stay focused on your business.
      </p>
    </div>

    {/* Service Blocks */}
    <div style={{padding:'0 56px 80px', display:'flex', flexDirection:'column', gap:24}}>
      {SERVICES_DETAIL.map((s, i) => (
        <div key={i} style={{display:'grid', gridTemplateColumns:'240px 1fr', background:C.surface, border:`1px solid ${C.hair}`, borderRadius:16, overflow:'hidden'}}>
          <div style={{height:'100%', minHeight:220}}>
            <ServiceImage kind={s.img}/>
          </div>
          <div style={{padding:'28px 32px', display:'flex', flexDirection:'column'}}>
            <h3 style={{fontSize:20, fontWeight:600, color:C.ink, letterSpacing:'-0.02em', marginBottom:6}}>{s.title}</h3>
            <p style={{fontSize:14, color:C.sub, lineHeight:1.5, marginBottom:20}}>{s.value}</p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 24px', marginBottom:20, flex:1}}>
              {s.features.map((f, fi) => (
                <div key={fi} style={{display:'flex', alignItems:'baseline', gap:8, fontSize:13, color:C.ink, lineHeight:1.5}}>
                  <span style={{color:C.accent, fontWeight:600, flexShrink:0}}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{display:'flex', alignItems:'center', gap:16, paddingTop:16, borderTop:`1px solid ${C.hair}`}}>
              <span className="mono" style={{fontSize:11, color:C.ink, letterSpacing:'0.04em', padding:'4px 10px', border:`1px solid ${C.hair}`, borderRadius:99}}>⏱ {s.timeline}</span>
              <span style={{fontSize:13, color:C.sub, fontStyle:'italic'}}>Ideal for: {s.ideal}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Bar */}
    <div style={{padding:'32px 56px', background:C.surface, borderTop:`1px solid ${C.hair}`, borderBottom:`1px solid ${C.hair}`, display:'flex', alignItems:'center', justifyContent:'center', gap:40}}>
      {[['12+','projects shipped'],['97','avg. Lighthouse'],['< 24h','response time']].map(([val, label]) => (
        <div key={label} style={{display:'flex', alignItems:'baseline', gap:8}}>
          <span style={{fontSize:20, fontWeight:600, color:C.ink, letterSpacing:'-0.02em'}}>{val}</span>
          <span style={{fontSize:13, color:C.sub}}>{label}</span>
        </div>
      ))}
      <div style={{width:1, height:24, background:C.hair}}></div>
      <div style={{fontSize:13, color:C.sub, fontStyle:'italic'}}>
        <span className="serif" style={{fontStyle:'italic'}}>"Finally a developer who speaks plain German."</span>
        <span style={{marginLeft:8, fontStyle:'normal', fontWeight:500, color:C.ink}}>— Atlas Studio</span>
      </div>
    </div>

    {/* How It Works — compact process row */}
    <div style={{padding:'72px 56px'}}>
      <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:32, textAlign:'center'}}>How it works</div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:24, position:'relative'}}>
        {/* Dotted connector line */}
        <div style={{position:'absolute', top:16, left:'12.5%', right:'12.5%', height:2, background:`repeating-linear-gradient(to right, ${C.hairStrong} 0 4px, transparent 4px 8px)`, zIndex:0}}></div>
        {PROCESS.map((step, i) => (
          <div key={i} style={{textAlign:'center', position:'relative', zIndex:1}}>
            <div style={{width:32, height:32, borderRadius:'50%', background:C.surface, border:`2px solid ${C.accent}`, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px'}}>
              <span className="mono" style={{fontSize:10, fontWeight:600, color:C.accent}}>{step.n}</span>
            </div>
            <div style={{fontSize:14, fontWeight:600, color:C.ink, marginBottom:4}}>{step.t}</div>
            <div style={{fontSize:12, color:C.sub, lineHeight:1.4, maxWidth:180, margin:'0 auto'}}>{step.d}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Inquiry Form — reuse Contact pattern */}
    <div style={{padding:'80px 56px', background:`linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)`, borderTop:`1px solid ${C.hair}`}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:64, alignItems:'flex-start'}}>
        {/* Left */}
        <div>
          <div className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24}}>Start a project</div>
          <h2 style={{fontSize:48, fontWeight:500, color:C.ink, letterSpacing:'-0.03em', lineHeight:1.0, marginBottom:24}}>
            Tell me what<br/>you're <span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accent}}>building.</span>
          </h2>
          <p style={{fontSize:15, color:C.sub, lineHeight:1.6, maxWidth:380, marginBottom:32}}>
            Send a brief. What you need, when you need it, and anything else that helps. I reply within 24 hours.
          </p>
          {/* What happens next */}
          <div>
            <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:20}}>What happens next</div>
            <div style={{position:'relative', paddingLeft:24}}>
              <div style={{position:'absolute', left:5, top:6, bottom:6, width:1.5, background:C.accentSoft, borderRadius:1}}></div>
              {[['24h','I read your brief and reply with questions or a quick yes/no.'],['Day 2','30-min call to align on scope and timeline.'],['Day 3','Fixed-price proposal in your inbox — no obligation.']].map(([when, what], i, arr) => (
                <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start', marginBottom: i < arr.length-1 ? 16 : 0, position:'relative'}}>
                  <div style={{position:'absolute', left:-24, top:5, width:12, height:12, borderRadius:'50%', background:C.surface, border:`2px solid ${C.accent}`, zIndex:1}}></div>
                  <div style={{display:'flex', alignItems:'baseline', gap:10}}>
                    <span className="mono" style={{fontSize:11, fontWeight:600, color:C.accent, letterSpacing:'0.04em', flexShrink:0, minWidth:42}}>{when.toUpperCase()}</span>
                    <span style={{fontSize:13, color:C.inkSoft, lineHeight:1.5}}>{what}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right — form */}
        <div style={{background:C.surface, border:`1px solid ${C.hair}`, borderRadius:18, padding:40, boxShadow:'0 30px 60px -40px rgba(20,19,15,0.18)'}}>
          <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24}}>Project brief</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:18}}>
            {[['Your name','Maria Becker'],['Email','maria@yourdomain.de']].map(([l,p]) => (
              <div key={l}>
                <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>{l}</div>
                <div style={{padding:'12px 14px', background:C.bg, border:`1px solid ${C.hair}`, borderRadius:8, fontSize:14, color:C.subLight}}>{p}</div>
              </div>
            ))}
          </div>
          <div style={{marginBottom:18}}>
            <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>Type of project</div>
            <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
              {['Landing page','Multi-page site','Web app / MVP','AI integration','Not sure yet'].map((opt, i) => (
                <div key={opt} style={{padding:'8px 14px', background: i===0 ? C.ink : C.bg, color: i===0 ? C.surface : C.ink, border:`1px solid ${i===0 ? C.ink : C.hair}`, borderRadius:99, fontSize:13, fontWeight:500}}>{opt}</div>
              ))}
            </div>
          </div>
          <div style={{marginBottom:24}}>
            <div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>Tell me about it</div>
            <div style={{padding:'14px 16px', background:C.bg, border:`1px solid ${C.hair}`, borderRadius:8, fontSize:14, color:C.subLight, minHeight:100, lineHeight:1.6}}>
              We need a landing page for our new product launch next month. Mobile-first, fast, with a clear CTA…
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:20, borderTop:`1px solid ${C.hair}`}}>
            <span className="mono" style={{fontSize:11, color:C.sub, letterSpacing:'0.04em'}}>Reply within 24h, guaranteed.</span>
            <div className="btn-hover" style={{padding:'12px 24px', background:C.ink, color:C.surface, borderRadius:99, fontSize:14, fontWeight:500, display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
              Send brief <span style={{color:C.accent}}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer — compact */}
    <div style={{padding:'32px 56px', background:C.ink, color:C.surface, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <BrightByteLogo size={20} variant="dark"/>
        <span style={{fontWeight:600, fontSize:14, letterSpacing:'-0.01em'}}>bright<span className="serif" style={{fontStyle:'italic', fontWeight:400, color:C.accentSoft}}>byte</span><span style={{color:'rgba(251,248,241,0.5)', fontWeight:400}}>.berlin</span></span>
      </div>
      <span style={{fontSize:12, color:'rgba(251,248,241,0.5)'}}>© 2025 BrightByte · Berlin</span>
    </div>
  </div>
);

/* ═══ ROOT ══════════════════════════════════════════════════════════════ */
const App = () => (
  <DesignCanvas title="BrightByte — Hi-Fi v2" subtitle="Direction 1 · plum accent · full homepage">
    <DCSection id="full" title="Full homepage">
      <DCArtboard id="page" label="brightbyte.berlin — full page" width={1320} height={10000}>
        <FullPage/>
      </DCArtboard>
    </DCSection>
    <DCSection id="projects" title="Project detail pages">
      <DCArtboard id="project-detail" label="/projects/architecture-studio" width={1320} height={3600}>
        <ProjectDetail project={PROJECTS[0]} />
      </DCArtboard>
    </DCSection>
    <DCSection id="services-page" title="Services detail page">
      <DCArtboard id="services-detail" label="/services" width={1320} height={2600}>
        <ServicesPage />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
