import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import styles from "./HeroSection.module.scss";

// Heavy client components — lazy loaded, not blocking LCP
const Grainient = dynamic(
  () => import("@/components/reactbits/Grainient/Grainient")
);

const DesktopBrowserMockup = dynamic(
  () => import("./DesktopBrowserMockup")
);

function HeroWords({ words, className }: { words: string[]; className: string }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className={styles.heroWord}>
          {word}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      {/* Grainient Background — desktop only (WebGL too heavy for mobile) */}
      <div className="hidden md:block absolute inset-0 opacity-45">
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

      {/* Lightweight CSS fallback for mobile */}
      <div
        className="md:hidden absolute inset-0 opacity-45"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 30% 0%, rgba(251, 191, 36, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
            #0a0a0a
          `
        }}
      />

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
          {/* Left side - Content (server-rendered, CSS animations for LCP) */}
          <div className="text-center lg:text-left">
            {/* Main Headline — ALWAYS VISIBLE for LCP, only blur+transform animates */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8"
            >
              <span className={`block text-text-primary ${styles.heroLine1}`}>
                <HeroWords words={["Stand", "out."]} className={styles.heroLine1} />
              </span>
              <span className={`block text-glow ${styles.heroLine2}`}>
                <HeroWords words={["Get", "found."]} className={styles.heroLine2} />
              </span>
              <span className={`block text-text-primary ${styles.heroLine3}`}>
                <HeroWords words={["Grow."]} className={styles.heroLine3} />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`${styles.heroSubheadline} text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed`}
            >
              Your customers are searching online. Are they finding you?
              I build websites that put your business in the <span className="text-bright font-medium">spotlight</span>.
            </p>

            {/* CTAs */}
            <div className={`${styles.heroCTAs} flex flex-wrap gap-4 justify-center lg:justify-start`}>
              <Button size="lg" className="btn-glow" asChild>
                <Link href="#contact">
                  Start Your Project
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-text-primary hover:bg-white/10" asChild>
                <Link href="#projects">See My Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`${styles.heroStats} mt-16 flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start`}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "<1s", label: "Load Times" },
                { value: "100%", label: "Client Satisfaction" },
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
            </div>
          </div>

          {/* Right side - Browser Mockup (desktop only, viewport-gated) */}
          <div className="hidden lg:block">
            <DesktopBrowserMockup />
          </div>
        </div>
      </Container>

      {/* Scroll indicator — CSS animated */}
      <div className={`${styles.scrollIndicator} absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2`}>
        <div className={`${styles.scrollBob} flex flex-col items-center text-text-muted`}>
          <span className="text-xs font-medium mb-3 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <div className={`${styles.scrollDot} w-1 h-1 rounded-full bg-bright`} />
          </div>
        </div>
      </div>
    </section>
  );
}
