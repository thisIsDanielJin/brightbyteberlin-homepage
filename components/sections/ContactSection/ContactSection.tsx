"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { GradualBlurOnScroll } from "@/components/animations/GradualBlur/GradualBlur";

// Lazy-load form — it's below the fold and not needed for initial paint
const ContactForm = dynamic(
    () => import("@/components/sections/ContactSection/ContactForm").then((m) => m.ContactForm),
    { ssr: false }
);
import {
    HiEnvelope,
    HiClock,
    HiShieldCheck,
    HiGlobeAlt,
} from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

// Dynamically import LightRays to avoid SSR issues with WebGL
const LightRays = dynamic(() => import("@/components/reactbits/LightRays/LightRays"), {
    ssr: false,
});

const trustSignals = [
    { icon: HiClock, text: "Usually reply within 24 hours" },
    { icon: HiShieldCheck, text: "Your data stays private" },
    { icon: HiGlobeAlt, text: "Based in Berlin, available worldwide" },
];

export function ContactSection() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center relative overflow-hidden bg-bg-secondary"
        >
            {/* Gradient transition from previous section */}
            <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)'
                }}
            />

            {/* ReactBits LightRays Background — reduced intensity */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FFD54F"
                    raysSpeed={0.6}
                    lightSpread={1}
                    rayLength={9}
                    pulsating={false}
                    fadeDistance={10}
                    saturation={2.5}
                    followMouse={false}
                    mouseInfluence={0}
                />
            </div>

            {/* Warm gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 30% 20%, rgba(251, 191, 36, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 20%, rgba(217, 119, 6, 0.04) 0%, transparent 50%)
          `,
                }}
            />

            <div className="container-max relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* LEFT COLUMN: Emotional CTA + Trust Signals */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* Tagline */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-bright font-semibold text-lg mb-4"
                        >
                            Now it&apos;s your turn
                        </motion.p>

                        {/* Main headline with Gradual Blur */}
                        <motion.h2
                            variants={fadeInUp}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 text-text-primary"
                        >
                            <span className="block">
                                <GradualBlurOnScroll text="Time to" delay={0.1} />
                            </span>
                            <span className="block text-bright">
                                <GradualBlurOnScroll
                                    text="shine"
                                    delay={0.3}
                                    blur="lg"
                                />
                            </span>
                        </motion.h2>

                        {/* Subheadline */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-text-secondary mb-10 max-w-lg leading-relaxed"
                        >
                            Let&apos;s build a website that puts your business in
                            the spotlight and turns visitors into loyal customers.
                        </motion.p>

                        {/* Trust signals */}
                        <motion.div
                            variants={fadeInUp}
                            className="space-y-3 mb-10"
                        >
                            {trustSignals.map(({ icon: Icon, text }) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-3 text-text-secondary"
                                >
                                    <Icon className="w-5 h-5 text-bright/70 shrink-0" />
                                    <span className="text-sm">{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Availability badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{ animationDuration: '2s' }} />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-medium text-emerald-600">
                                Available for new projects
                            </span>
                        </motion.div>

                        {/* Alternative contact links */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center gap-6 text-sm text-text-muted"
                        >
                            <span>Or reach out directly:</span>
                            <a
                                href="mailto:contact@brightbyte.berlin"
                                className="inline-flex items-center gap-1.5 text-text-secondary hover:text-bright transition-colors"
                            >
                                <HiEnvelope className="w-4 h-4" />
                                Email
                            </a>
                            <a
                                href="https://linkedin.com/in/danieljinwodke"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-text-secondary hover:text-bright transition-colors"
                            >
                                <FaLinkedinIn className="w-3.5 h-3.5" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
