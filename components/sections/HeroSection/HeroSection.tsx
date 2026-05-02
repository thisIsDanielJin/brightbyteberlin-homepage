"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { ParallaxTilt } from "@/components/hero/ParallaxTilt";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

const HeroMockup = dynamic(
    () => import("@/components/hero/HeroMockup").then((mod) => mod.HeroMockup),
    { ssr: false }
);

const C = {
    ink: "#14130F",
    surface: "#FBF8F1",
    sub: "#6B665C",
    accent: "#6B3977",
    hairStrong: "rgba(20,19,15,0.14)",
};

export function HeroSection() {
    const prefersReduced = useReducedMotion();
    const [phase, setPhase] = useState(prefersReduced ? 4 : 0);
    const { t } = useLocale();

    useEffect(() => {
        if (prefersReduced) return;
        const timers = [
            setTimeout(() => setPhase(1), 300),
            setTimeout(() => setPhase(2), 1200),
            setTimeout(() => setPhase(3), 2200),
            setTimeout(() => setPhase(4), 3000),
        ];
        return () => timers.forEach(clearTimeout);
    }, [prefersReduced]);

    return (
        <section
            className="px-5 pt-24 pb-10 sm:px-8 sm:pt-28 lg:px-14 lg:pt-36 lg:pb-32 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #F7F3EB 0%, #F5F1E8 35%, #FAF7F0 100%)",
            }}
        >
            {/* Plum gradient spotlights */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "75%",
                    height: "80%",
                    background:
                        "radial-gradient(ellipse at 15% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "75%",
                    height: "80%",
                    background:
                        "radial-gradient(ellipse at 85% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
            />
            {/* Grain texture — hidden on mobile for performance */}
            <svg
                className="hidden lg:block"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    opacity: 0.35,
                }}
            >
                <filter id="grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves={4}
                        stitchTiles="stitch"
                    />
                </filter>
                <rect
                    width="100%"
                    height="100%"
                    filter="url(#grain)"
                    opacity="0.04"
                />
            </svg>

            {/* Headline + subtitle + CTAs */}
            <div className="text-center max-w-[680px] mx-auto mb-10 lg:mb-16 relative">
                <h1
                    className="text-[40px] sm:text-[56px] lg:text-[80px] leading-[0.96] tracking-[-0.04em] font-semibold mb-5 animate-fade-up"
                    style={{ color: C.ink }}
                >
                    {t.hero.h1Line1}
                    <br />
                    <span
                        className="serif"
                        style={{ fontStyle: "italic", fontWeight: 400 }}
                    >
                        {t.hero.h1Not}
                    </span>{" "}
                    <span style={{ color: C.accent }}>{t.hero.h1Months}</span>
                </h1>
                <p
                    className="text-base lg:text-lg leading-relaxed max-w-[520px] mx-auto mb-7 animate-fade-up"
                    style={{ color: C.sub, animationDelay: "0.15s" }}
                >
                    {t.hero.subtitle}
                </p>
                <div
                    className="flex flex-col sm:flex-row gap-3 items-center justify-center animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    <Link
                        href="/#contact"
                        className="btn-hover"
                        style={{
                            padding: "14px 28px",
                            background: C.ink,
                            color: C.surface,
                            borderRadius: 99,
                            fontSize: 14,
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        {t.hero.cta} <span style={{ color: C.accent }}>→</span>
                    </Link>
                    <Link
                        href="/#work"
                        className="btn-hover outline-hover"
                        style={{
                            padding: "14px 24px",
                            color: C.ink,
                            borderRadius: 99,
                            fontSize: 14,
                            fontWeight: 500,
                            border: `1px solid ${C.hairStrong}`,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                background: C.accent,
                                borderRadius: "50%",
                                display: "inline-block",
                            }}
                        />
                        {t.hero.ctaSecondary}
                    </Link>
                </div>

                {/* Social proof */}
                <div
                    className="flex items-center justify-center gap-2 mt-6 animate-fade-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    <span style={{ fontSize: 11, color: "#D4A017", letterSpacing: "1px" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span style={{ fontSize: 12, color: C.sub, letterSpacing: "0.02em", fontFamily: "var(--font-mono), ui-monospace, monospace" }}>from multiple clients across Germany</span>
                </div>
            </div>

            {/* Browser mockup */}
            <ParallaxTilt className="hidden sm:block max-w-[1100px] w-full mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.1,
                        delay: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <HeroMockup phase={phase} />
                </motion.div>
            </ParallaxTilt>
        </section>
    );
}
