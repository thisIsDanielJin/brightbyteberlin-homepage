"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { SeoPage } from "@/data/seo-pages";
import { LangToggle } from "./LangToggle";

const C = {
    bg: "#F5F1E8",
    surface: "#FBF8F1",
    ink: "#14130F",
    inkSoft: "#3A3833",
    sub: "#6B665C",
    subLight: "#9A958A",
    accent: "#6B3977",
    accentSoft: "#C4ADCF",
    hair: "rgba(20,19,15,0.08)",
};

const categoryLabels: Record<SeoPage["category"], { de: string; en: string }> =
    {
        service: { de: "Service", en: "Service" },
        industry: { de: "Branche", en: "Industry" },
        need: { de: "Lösung", en: "Solution" },
        location: { de: "Standort", en: "Location" },
    };

export function SeoPageContent({ page }: { page: SeoPage }) {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") === "en" ? "en" : "de";
    const isEn = lang === "en";

    return (
        <div
            style={{
                background: C.bg,
                color: C.ink,
                fontFamily: "var(--font-geist)",
            }}
        >
            {/* Language toggle bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "12px 56px",
                    gap: 16,
                }}
            >
                <LangToggle />
            </div>

            {/* Hero */}
            <section style={{ padding: "80px 56px 64px", maxWidth: 800 }}>
                <div
                    className="mono"
                    style={{
                        fontSize: 11,
                        color: C.sub,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 24,
                    }}
                >
                    {categoryLabels[page.category][lang]}
                </div>
                <h1
                    style={{
                        fontSize: 44,
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        marginBottom: 32,
                        whiteSpace: "pre-line",
                    }}
                >
                    {isEn ? page.heroHeadlineEn : page.heroHeadline}
                </h1>
                <div
                    style={{ fontSize: 17, lineHeight: 1.7, color: C.inkSoft }}
                >
                    {(isEn ? page.heroSubtextEn : page.heroSubtext)
                        .split("\n\n")
                        .map((paragraph, i) => (
                            <p key={i} style={{ marginBottom: 20 }}>
                                {paragraph}
                            </p>
                        ))}
                </div>
            </section>

            {/* Divider */}
            <div
                style={{
                    margin: "0 56px",
                    height: 1,
                    background: `linear-gradient(90deg, transparent 0%, rgba(107,57,119,0.15) 30%, rgba(107,57,119,0.15) 70%, transparent 100%)`,
                }}
            />

            {/* FAQ */}
            <section style={{ padding: "64px 56px", maxWidth: 800 }}>
                <div
                    className="mono"
                    style={{
                        fontSize: 11,
                        color: C.sub,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 32,
                    }}
                >
                    {isEn ? "Frequently Asked" : "Häufige Fragen"}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                    }}
                >
                    {page.faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "24px 28px",
                                background: C.surface,
                                border: `1px solid ${C.hair}`,
                                borderRadius: 14,
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 12,
                                }}
                            >
                                {isEn ? faq.qEn : faq.q}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    lineHeight: 1.6,
                                    color: C.sub,
                                }}
                            >
                                {isEn ? faq.aEn : faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div
                style={{
                    margin: "0 56px",
                    height: 1,
                    background: `linear-gradient(90deg, transparent 0%, rgba(107,57,119,0.15) 30%, rgba(107,57,119,0.15) 70%, transparent 100%)`,
                }}
            />

            {/* CTA */}
            <section style={{ padding: "72px 56px 96px", textAlign: "center" }}>
                <h2
                    style={{
                        fontSize: 36,
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        marginBottom: 16,
                    }}
                >
                    {isEn ? "Ready to get started?" : "Bereit loszulegen?"}
                </h2>
                <p style={{ fontSize: 17, color: C.sub, marginBottom: 32 }}>
                    {isEn
                        ? "Let's talk about your project. No commitment, no cost."
                        : "Lassen Sie uns über Ihr Projekt sprechen. Unverbindlich und kostenlos."}
                </p>
                <Link
                    href="/#contact"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "14px 28px",
                        background: C.ink,
                        color: C.surface,
                        borderRadius: 99,
                        fontSize: 14,
                        fontWeight: 500,
                        textDecoration: "none",
                    }}
                >
                    {isEn ? page.ctaTextEn : page.ctaText}
                    <span style={{ color: C.accentSoft }}>→</span>
                </Link>
            </section>
        </div>
    );
}
