"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ShaderBoundary } from "@/components/redesign/ShaderBoundary";
import { Reveal } from "@/components/redesign/Reveal";
import { VisibleOnScreen } from "@/components/redesign/VisibleOnScreen";
import {
  NAV,
  HERO,
  MANIFESTO,
  SERVICES,
  PROCESS,
  WORK,
  SCOPE,
  FAQS,
  ABOUT,
  FOOTER_LINKS,
} from "@/data/content";

const Prism = dynamic(() => import("@/components/reactbits/Prism"), {
  ssr: false,
});

const WORK_ACCENTS = ["#4A6741", "#7B5E8A", "#5B7B3A"];
const WORK_PALETTES = [
  "radial-gradient(120% 100% at 30% 35%, #4A6741 0%, #2a3829 50%, #07070a 100%)",
  "radial-gradient(120% 100% at 70% 30%, #7B5E8A 0%, #3b2c4d 45%, #07070a 100%)",
  "radial-gradient(140% 100% at 50% 35%, #5B7B3A 0%, #2c3d20 50%, #07070a 100%)",
];

export default function Page() {
  return (
    <>
      <JsonLd />
      <Header />
      <Hero />
      <Manifesto />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/55 backdrop-blur-xl">
      <div className="padding-global container-large flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center bg-acid">
            <span className="size-2 bg-black" />
          </span>
          <span className="mono text-[12px] uppercase tracking-[0.18em]">
            BrightByte / Berlin
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="acid-link mono text-[11px] uppercase tracking-[0.18em]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-acid">
          Start a project <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const lines = [
    { text: "WEBSITES", delay: 100 },
    { text: "THAT GET", delay: 380 },
    { text: "YOU FOUND.", delay: 740 },
  ];
  const renderLine = (text: string, base: number) =>
    text.split("").map((ch, i) => (
      <span
        key={`${base}-${i}`}
        className="rise-letter"
        style={{
          animationDelay: `${base + i * 30}ms`,
          ...(ch === " " ? { width: "0.35em" } : {}),
        }}
      >
        {ch === " " ? " " : ch}
      </span>
    ));

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <VisibleOnScreen
          rootMargin="100px"
          fallback={
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(220,255,30,0.18),transparent_55%),conic-gradient(from_90deg_at_50%_50%,#0a0a0a,#220033,#003355,#220011,#0a0a0a)]" />
          }
        >
          <ShaderBoundary
            fallback={
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(220,255,30,0.18),transparent_55%),conic-gradient(from_90deg_at_50%_50%,#0a0a0a,#220033,#003355,#220011,#0a0a0a)]" />
            }
          >
            <Prism
              height={3.5}
              scale={3.6}
              hueShift={0.6}
              colorFrequency={1}
              baseWidth={5.5}
              animationType="rotate"
              glow={1.2}
              noise={0.6}
              timeScale={0.4}
            />
          </ShaderBoundary>
        </VisibleOnScreen>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_25%,rgba(10,10,10,0.55)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      <div className="padding-global container-large">
        <div className="mb-10 flex flex-wrap items-center gap-4 mono text-[11px] uppercase tracking-[0.2em] text-white/55">
          <span className="inline-flex items-center gap-2 border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-80" />
              <span className="relative inline-flex size-full rounded-full bg-acid" />
            </span>
            Booking projects · Q3 2026
          </span>
          <span className="text-white/40">Berlin · CET</span>
        </div>

        <h1 className="display text-[clamp(3.5rem,12vw,11rem)] uppercase">
          {lines.map((l) => (
            <span key={l.text} className="block overflow-hidden">
              {renderLine(l.text, l.delay)}
            </span>
          ))}
        </h1>

        <Reveal delay={1300} className="mt-12 grid items-end gap-10 md:grid-cols-12">
          <p className="md:col-span-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            {HERO.sub}
          </p>
          <div className="md:col-span-6 md:col-start-7 flex flex-wrap items-end justify-start gap-3 md:justify-end">
            <a href={HERO.primary.href} className="btn-acid">
              {HERO.primary.label}
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
            <a href={HERO.secondary.href} className="btn-ghost">
              {HERO.secondary.label}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1600} className="padding-global container-large mt-16">
        <div className="grid grid-cols-2 divide-y divide-x divide-white/10 border border-white/10 bg-black/40 backdrop-blur-md md:grid-cols-4 md:divide-y-0">
          {HERO.pillars.map((p) => (
            <div key={p.k} className="p-5 md:p-6">
              <p className="display text-3xl text-acid md:text-5xl">{p.k}</p>
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.18em] text-white/55">
                {p.v}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal>
          <p className="eyebrow">Manifesto / 04</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] uppercase">
            How we ship.
            <br />
            <span className="text-acid">Plain rules.</span>
          </h2>
        </Reveal>
        <ol className="mt-20 grid grid-cols-1 border border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {MANIFESTO.map((m, i) => (
            <Reveal key={m.n} delay={i * 120}>
              <li className="card-hover relative flex h-full min-h-[300px] flex-col justify-between gap-8 border-b border-white/10 bg-black p-7 last:border-b-0 md:p-9 lg:border-b-0 lg:border-r lg:[&:last-child]:border-r-0 lg:border-r-white/10">
                <div className="flex items-start justify-between">
                  <span className="mono text-[12px] tracking-[0.2em] text-acid">{m.n}</span>
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/35">/ principle</span>
                </div>
                <div>
                  <h3 className="display text-3xl uppercase">{m.t}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/65">{m.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">Services / 04</p></Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid items-end gap-10 md:grid-cols-12">
            <h2 className="display md:col-span-7 text-[clamp(2.5rem,7vw,6rem)] uppercase">
              Four shapes
              <br />
              <span className="text-acid">of work.</span>
            </h2>
            <p className="md:col-span-5 md:col-start-8 text-[15px] leading-relaxed text-white/65">
              Every project starts with a 30-minute call and a fixed-price proposal. No surprise invoices, no scope creep, no agency layers.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 border border-white/10 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={i * 120}>
              <Link
                href={`/services/${s.slug}`}
                className={`card-hover group relative flex h-full min-h-[360px] flex-col justify-between gap-8 border-b border-white/10 bg-black p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r md:border-r-white/10" : ""
                } ${i >= SERVICES.length - 2 ? "md:border-b-0" : ""}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="mono text-[12px] tracking-[0.2em] text-acid">{s.tag}</span>
                  <span className="mono text-[11px] uppercase tracking-[0.18em] text-white/45">{s.meta}</span>
                </div>
                <div>
                  <h3 className="display text-4xl uppercase">{s.title}</h3>
                  <p className="mt-5 text-[14px] leading-relaxed text-white/65">{s.desc}</p>
                </div>
                <div className="acid-link mono inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
                  Learn more
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">Process / 04 steps</p></Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6rem)] uppercase">
            Same rhythm,
            <br />
            <span className="text-acid">every project.</span>
          </h2>
        </Reveal>
        <ol className="mt-20 grid grid-cols-1 border border-white/10 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <li className={`card-hover relative flex h-full min-h-[260px] flex-col gap-8 border-b border-white/10 bg-black p-7 md:p-9 ${i < PROCESS.length - 1 ? "md:border-b-0 md:border-r md:border-r-white/10" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="mono text-[12px] tracking-[0.2em] text-acid">{p.n}</span>
                  <span className="h-px w-10 bg-white/15" />
                </div>
                <div>
                  <h3 className="display text-2xl uppercase">{p.t}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/65">{p.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">Selected work / 03</p></Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid items-end gap-10 md:grid-cols-12">
            <h2 className="display md:col-span-7 text-[clamp(2.5rem,7vw,6rem)] uppercase">
              Real businesses.
              <br />
              <span className="text-acid">Real numbers.</span>
            </h2>
            <p className="md:col-span-5 md:col-start-8 text-[15px] leading-relaxed text-white/65">
              Every site I build ships with measurable outcomes. Below — three most recent. Quote, metric, and stack are all from the client side.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 border border-white/10">
          {WORK.map((w, i) => (
            <Reveal key={w.client} delay={i * 100}>
              <WorkRow
                client={w.client}
                kind={w.kind}
                metric={w.metric}
                quote={w.quote.replace(/^"|"$/g, "")}
                accent={WORK_ACCENTS[i % WORK_ACCENTS.length]}
                slug={w.slug}
                idx={i}
                last={i === WORK.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ client, kind, metric, quote, accent, slug, idx, last }: { client: string; kind: string; metric: string; quote: string; accent: string; slug: string; idx: number; last: boolean }) {
  return (
    <Link href={`/projects/${slug}`} className={`card-hover group relative grid bg-black md:grid-cols-12 ${last ? "" : "border-b border-white/10"}`}>
      <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden">
        <div className="absolute inset-0" style={{ background: WORK_PALETTES[idx % WORK_PALETTES.length] }} />
        <div className="absolute inset-0 mix-blend-overlay opacity-25" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}55 0%, transparent 65%)` }} />
        <div className="absolute bottom-5 left-5">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-white/75">{kind}</p>
        </div>
      </div>
      <div className="relative md:col-span-7 flex flex-col justify-between gap-6 p-8 md:border-l md:border-l-white/10 md:p-12 min-h-[280px]">
        <div className="flex items-start justify-between gap-6">
          <h3 className="display text-3xl uppercase md:text-5xl">{client}</h3>
          <span className="display text-3xl text-acid md:text-5xl">{metric}</span>
        </div>
        <p className="text-xl leading-snug text-white/85 md:text-2xl">“{quote}”</p>
        <div className="acid-link mono inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
          Read case study
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">Pricing / 03 tiers</p></Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid items-end gap-10 md:grid-cols-12">
            <h2 className="display md:col-span-7 text-[clamp(2.5rem,7vw,6rem)] uppercase">
              Fair, fixed,
              <br />
              <span className="text-acid">priced before we start.</span>
            </h2>
            <p className="md:col-span-5 md:col-start-8 text-[15px] leading-relaxed text-white/65">
              Three scopes that cover most projects. Anything outside this gets a tailored quote within 48 hours of our kickoff call.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-px border border-white/10 md:grid-cols-3">
          {SCOPE.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}>
              <ScopeCard {...s} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mono mt-10 text-center text-[11px] uppercase tracking-[0.2em] text-white/40">
            €0–5/mo hosting · You own everything · 95+ Lighthouse · No lock-in
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ScopeCard({ title, priceFrom, tagline, timeline, includes, ideal, highlight }: { title: string; priceFrom: string; tagline: string; timeline: string; includes: string[]; ideal: string; highlight?: boolean }) {
  return (
    <div className={`card-hover relative flex h-full flex-col gap-7 p-8 md:p-10 ${highlight ? "bg-acid text-black" : "bg-black"}`}>
      {highlight && (
        <span className="mono absolute right-6 top-6 border border-black/30 bg-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em]">
          Most popular
        </span>
      )}
      <div>
        <p className={`mono text-[12px] uppercase tracking-[0.2em] ${highlight ? "text-black/60" : "text-acid"}`}>{title}</p>
        <p className={`mt-3 text-sm ${highlight ? "text-black/65" : "text-white/55"}`}>{tagline}</p>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="display text-5xl md:text-6xl">{priceFrom}</span>
        {priceFrom.startsWith("€") && (
          <span className={`mono text-sm ${highlight ? "text-black/55" : "text-white/45"}`}>+ from</span>
        )}
      </div>
      <p className={`mono text-[12px] uppercase tracking-[0.2em] ${highlight ? "text-black/55" : "text-white/55"}`}>{timeline}</p>
      <ul className={`space-y-3 border-t pt-6 text-[14px] ${highlight ? "border-black/15 text-black/85" : "border-white/10 text-white/85"}`}>
        {includes.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={`mt-2 size-1 ${highlight ? "bg-black" : "bg-acid"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-auto border p-4 ${highlight ? "border-black/15" : "border-white/10"}`}>
        <span className={`mono block text-[10px] uppercase tracking-[0.25em] ${highlight ? "text-black/45" : "text-white/40"}`}>Best for</span>
        <span className={`mt-1 block text-[13px] ${highlight ? "text-black/75" : "text-white/70"}`}>{ideal}</span>
      </div>
      <a href="#contact" className={`mono inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-[12px] uppercase tracking-[0.18em] transition-colors ${highlight ? "bg-black text-acid hover:bg-black/85" : "border border-white/15 text-white hover:border-acid hover:text-acid"}`}>
        Start with {title}
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </a>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">About / one engineer</p></Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7 space-y-8">
              <h2 className="display text-[clamp(2.5rem,7vw,6rem)] uppercase">
                One engineer.
                <br />
                <span className="text-acid">Real ownership.</span>
              </h2>
              <div className="space-y-5 text-[16px] leading-relaxed text-white/75 max-w-xl">
                {ABOUT.bio.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </div>
            <aside className="md:col-span-5 md:col-start-8 self-start">
              <div className="border border-white/10 bg-black p-8">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center bg-acid">
                    <span className="mono text-base font-bold text-black">DJ</span>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium">{ABOUT.name}</p>
                    <p className="mono text-[11px] uppercase tracking-[0.18em] text-white/55">{ABOUT.role}</p>
                  </div>
                </div>
                <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-white/45">{ABOUT.location}</p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[13px] text-white/75">
                  {ABOUT.signals.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-2 size-1 bg-acid" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-white/[0.06] padding-section-large padding-global">
      <div className="container-large">
        <Reveal><p className="eyebrow">FAQ / 06</p></Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6rem)] uppercase">
            Common questions.
            <br />
            <span className="text-acid">Honest answers.</span>
          </h2>
        </Reveal>
        <div className="mt-20 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <button key={i} onClick={() => setOpen(isOpen ? null : i)} className={`group block w-full border-b border-white/10 text-left last:border-b-0 ${isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"}`}>
                <div className="padding-global flex items-start gap-6 py-7 md:gap-10 md:py-8">
                  <span className="mono pt-1 w-8 text-[11px] uppercase tracking-[0.2em] text-acid">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-6">
                      <span className="display text-2xl uppercase md:text-3xl">{item.q}</span>
                      <Plus size={22} strokeWidth={2.4} className={`shrink-0 text-white/55 transition-transform group-hover:text-acid ${isOpen ? "rotate-45" : ""}`} />
                    </div>
                    <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="text-[15px] leading-relaxed text-white/70 max-w-2xl">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-white/[0.06] padding-section-large padding-global">
      <div className="pointer-events-none absolute inset-0 -z-10 cta-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#0a0a0a_85%)]" />
      </div>
      <div className="container-large text-center">
        <Reveal>
          <p className="eyebrow" style={{ display: "inline-flex" }}>Let&apos;s build / 01</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mx-auto mt-8 max-w-5xl text-[clamp(3rem,11vw,10rem)] uppercase">
            Send a brief.
            <br />
            <span className="text-acid">Get a fixed</span>
            <br />
            proposal in 48h.
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-white/70">
            A 30-minute call to scope the work. Plain language, fixed price, no obligation.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@brightbyte-berlin.com" className="btn-acid text-[13px]">
              hello@brightbyte-berlin.com
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a href="https://linkedin.com/in/danieljinwodke" className="btn-ghost">Book on LinkedIn</a>
          </div>
          <p className="mono mt-12 text-[11px] uppercase tracking-[0.2em] text-white/40">
            BrightByte Berlin · Karl-Marx-Allee 118 · 10243 Berlin
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070707] padding-global pb-10 pt-24">
      <div className="container-large">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center bg-acid">
                <span className="size-2.5 bg-black" />
              </span>
              <span className="mono text-[12px] uppercase tracking-[0.18em]">BrightByte / Berlin</span>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-white/65">
              Code-built. No templates. Custom websites and web apps for small businesses ready to grow.
            </p>
            <a href="mailto:hello@brightbyte-berlin.com" className="btn-ghost">
              hello@brightbyte-berlin.com
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-10 md:grid-cols-4">
            <FooterCol title="Services" links={FOOTER_LINKS.product} />
            <FooterCol title="Studio" links={FOOTER_LINKS.company} />
            <FooterCol title="Connect" links={FOOTER_LINKS.connect} />
            <FooterCol title="Legal" links={FOOTER_LINKS.legal} />
          </div>
        </div>
        <div className="hr-acid mt-20" />
        <div className="mt-6 flex flex-col gap-4 mono text-[11px] uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BrightByte Berlin · Daniel Jin Wodke</p>
          <p>St.-Nr. 14/596/01847 · § 19 UStG</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="space-y-4">
      <p className="mono text-[10px] uppercase tracking-[0.25em] text-white/40">{title}</p>
      <ul className="space-y-2.5 text-[14px] text-white/70">
        {links.map((l) => (
          <li key={l.label}><Link href={l.href} className="acid-link">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
