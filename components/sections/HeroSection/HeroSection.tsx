"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { GradualBlur } from "@/components/animations/GradualBlur/GradualBlur";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

// Dynamically import Grainient to avoid SSR issues with WebGL
const Grainient = dynamic(
  () => import("@/components/reactbits/Grainient/Grainient"),
  { ssr: false }
);

function BrowserMockup() {
  const d = 0.8; // base delay for stagger

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bright/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -4 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-md"
        style={{ perspective: "1200px" }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", transform: "rotateY(-8deg) rotateX(4deg)" }}
        >
          {/* Browser shadow */}
          <div className="absolute -inset-6 bg-bright/[0.07] rounded-3xl blur-3xl" />
          {/* Glow border ring */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-bright/20 via-transparent to-bright/[0.06] pointer-events-none" />

          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0C0C0E] shadow-2xl shadow-black/60">
            {/* Shine sweep — fires after notification appears as a final flourish */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.18, 0] }}
              transition={{ duration: 1.8, delay: d + 2.6, ease: "easeInOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
              }}
            />

            {/* Browser chrome */}
            <div className="flex items-center px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] max-w-[220px] mx-auto">
                  <svg className="w-2.5 h-2.5 text-green-400/70 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] text-text-muted/70 font-mono truncate">your-brand.com</span>
                </div>
              </div>
            </div>

            {/* Mini website content */}
            <div className="relative">
              {/* Mini site nav */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: d }}
                className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.03]"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-bright/40" />
                  <div className="h-2 w-14 rounded-full bg-white/15" />
                </div>
                <div className="flex gap-3">
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                </div>
                <div className="h-5 w-14 rounded-md bg-bright/50" />
              </motion.div>

              {/* Hero section of mock site */}
              <div className="px-5 pt-5 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: d + 0.15 }}
                  className="mb-4"
                >
                  <div className="h-1.5 w-20 rounded-full bg-bright/25 mb-3" />
                  <div className="space-y-1.5 mb-3">
                    <div className="h-4 w-52 rounded bg-white/20" />
                    <div className="h-4 w-36 rounded bg-white/12" />
                  </div>
                  <div className="h-1.5 w-44 rounded-full bg-white/[0.06]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: d + 0.35 }}
                  className="flex gap-2 mb-5"
                >
                  <div className="h-7 w-24 rounded-lg bg-gradient-to-r from-bright to-electric flex items-center justify-center">
                    <div className="h-1.5 w-14 rounded-full bg-black/30" />
                  </div>
                  <div className="h-7 w-20 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <div className="h-1.5 w-10 rounded-full bg-white/15" />
                  </div>
                </motion.div>

                {/* Image/visual area */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: d + 0.55 }}
                  className="h-24 rounded-xl bg-gradient-to-br from-bright/[0.06] via-white/[0.02] to-electric/[0.04] border border-white/[0.04] relative overflow-hidden px-4 py-3"
                >
                  {/* Mini chart header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-1.5 w-14 rounded-full bg-white/10" />
                    <div className="text-[8px] text-bright/60 font-mono">+27%</div>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-[3px] h-10">
                    {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: d + 0.7 + i * 0.04 }}
                        className="flex-1 rounded-sm origin-bottom"
                        style={{
                          height: `${h}%`,
                          background: h >= 85 ? "rgba(251, 191, 36, 0.5)" : "rgba(255, 255, 255, 0.08)",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: d + 0.75 }}
                className="px-5 pb-3 flex gap-4"
              >
                {["24%", "1.2k", "98%"].map((val, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="text-[11px] font-bold text-bright/70">{val}</div>
                    <div className="h-1 w-8 mx-auto rounded-full bg-white/6 mt-0.5" />
                  </div>
                ))}
              </motion.div>

              {/* Card grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: d + 0.9 }}
                className="px-5 pb-5 grid grid-cols-3 gap-2"
              >
                {[
                  { color: "bg-bright/12", border: "border-bright/10" },
                  { color: "bg-white/[0.03]", border: "border-white/[0.05]" },
                  { color: "bg-bright/8", border: "border-bright/[0.06]" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`h-[56px] rounded-lg border ${card.border} ${card.color} p-2.5 flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-white/[0.08]" />
                      <div className="h-1 w-8 rounded-full bg-white/[0.08]" />
                    </div>
                    <div className="flex gap-1">
                      <div className="h-1 flex-1 rounded-full bg-bright/20" />
                      <div className="h-1 flex-[0.6] rounded-full bg-white/[0.04]" />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Animated cursor — browses through the page */}
              <motion.div
                animate={{
                  // nav link → CTA button → chart area → card
                  x:       [280, 200, 200, 60,  60,  60, 200, 200, 200, 60,  60,  60,  280],
                  y:       [30,  38,  38,  100, 100, 100, 190, 190, 190, 275, 275, 275, 30],
                  opacity: [0,   1,   1,   1,   1,   1,  1,   1,   1,   1,   1,   0.5, 0],
                }}
                transition={{
                  duration: 8,
                  delay: d + 1.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  times: [0, 0.08, 0.12, 0.22, 0.26, 0.30, 0.45, 0.49, 0.53, 0.68, 0.72, 0.90, 1],
                }}
                className="absolute pointer-events-none z-10"
              >
                <svg width="18" height="22" viewBox="0 0 16 20" fill="none">
                  <path d="M1 1L1 14.5L4.5 11L8.5 18L11 17L7 10L12 10L1 1Z" fill="white" fillOpacity="0.9" stroke="#09090B" strokeWidth="1.2" />
                </svg>
                {/* Click ripple — fires at each stop */}
                {[
                  { delay: d + 1.2 + 8 * 0.12 },  // click nav
                  { delay: d + 1.2 + 8 * 0.26 },  // click CTA
                  { delay: d + 1.2 + 8 * 0.49 },  // click chart
                  { delay: d + 1.2 + 8 * 0.72 },  // click card
                ].map((click, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1.5, 2.5],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: click.delay,
                      repeat: Infinity,
                      repeatDelay: 9.5,
                    }}
                    className="absolute top-0 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bright/60"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Performance badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: d + 1.3, type: "spring", stiffness: 300 }}
            className="absolute -right-6 top-20 px-3 py-2.5 rounded-xl bg-[#111113] border border-white/[0.08] shadow-xl shadow-black/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-text-muted uppercase tracking-wider">Speed</div>
                <div className="text-base font-bold text-green-400 leading-none">98</div>
              </div>
            </div>
          </motion.div>

          {/* SEO badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: d + 1.6, type: "spring", stiffness: 300 }}
            className="absolute -left-6 bottom-24 px-3 py-2.5 rounded-xl bg-[#111113] border border-white/[0.08] shadow-xl shadow-black/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-bright/10 border border-bright/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-text-muted uppercase tracking-wider">SEO</div>
                <div className="text-base font-bold text-bright leading-none">100</div>
              </div>
            </div>
          </motion.div>

          {/* Live notification toast */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: d + 1.9, ease: "easeOut" }}
            className="absolute -right-6 bottom-8 rounded-2xl bg-[#111113] border border-bright/25 shadow-2xl shadow-bright/[0.08] overflow-hidden"
          >
            {/* Subtle glow behind toast */}
            <div className="absolute -inset-4 bg-bright/[0.04] rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative flex items-center gap-3 pl-3.5 pr-5 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-bright/15 border border-bright/25 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-text-primary leading-tight">New lead received</div>
                <div className="text-[10px] text-text-muted mt-0.5">via contact form — just now</div>
              </div>
            </div>
            {/* Bright accent bar at bottom */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 20, delay: d + 2.2, ease: "linear" }}
              className="h-0.5 bg-bright/60 origin-left"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      {/* Grainient Background */}
      <div className="absolute inset-0 opacity-45">
        <Grainient
          color1="#FBBF24"
          color2="#F59E0B"
          color3="#0a0a0a"
          colorBalance={-0.15}
          centerX={0.3}
          centerY={0.0}
          zoom={0.9}
          timeSpeed={0.12}
          grainAmount={0.06}
          contrast={1.2}
          saturation={0.85}
          warpStrength={1.0}
          warpAmplitude={50}
          warpFrequency={5.0}
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 50%, transparent 75%)'
        }}
      />

      {/* Background subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 70% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(251, 191, 36, 0.03) 0%, transparent 50%)
          `
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Main Headline with Gradual Blur */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8"
            >
              <span className="block text-text-primary">
                <GradualBlur text="Stand out." delay={0.2} />
              </span>
              <span className="block text-glow">
                <GradualBlur text="Get found." delay={0.4} />
              </span>
              <span className="block text-text-primary">
                <GradualBlur text="Grow." delay={0.6} />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Your customers are searching online. Are they finding you?
              I build websites that put your business in the <span className="text-bright font-medium">spotlight</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-glow" asChild>
                <Link href="#contact">
                  Start Your Project
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-text-primary hover:bg-white/10" asChild>
                <Link href="#projects">See My Work</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "100%", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-bright">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Laser Flow Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-text-muted"
        >
          <span className="text-xs font-medium mb-3 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-bright"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
