"use client";

import { footerLinks } from "@/data/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

function BrightByteLogo({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
            <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
            <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
            <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#C4ADCF" />
            <rect
                x="12"
                y="12"
                width="8"
                height="8"
                rx="3"
                fill="#C4ADCF"
                opacity="0.85"
            />
            <rect
                x="22"
                y="12"
                width="8"
                height="8"
                rx="4"
                fill="#C4ADCF"
                opacity="0.7"
            />
            <circle cx="26" cy="6" r="4.5" fill="#C4ADCF" opacity="0.45" />
        </svg>
    );
}

const seoLinks = [
    {
        title: "By Service",
        links: [
            { label: "Webentwickler Berlin", href: "/s/webentwickler-berlin" },
            { label: "Landing Page Agentur", href: "/s/landing-page-erstellen" },
            { label: "Website Relaunch", href: "/s/website-relaunch-berlin" },
            { label: "WordPress Alternative", href: "/s/wordpress-alternative" },
            { label: "React Entwicklung", href: "/s/react-entwicklung-berlin" },
            { label: "Webdesign für KMU", href: "/s/webdesign-fuer-kmu" },
        ],
    },
    {
        title: "By Industry",
        links: [
            { label: "Website für Ärzte", href: "/s/website-fuer-aerzte" },
            { label: "Website für Restaurant", href: "/s/website-fuer-restaurants" },
            { label: "Website für Handwerker", href: "/s/website-fuer-handwerker" },
            { label: "Website für Anwälte", href: "/s/website-fuer-anwaelte" },
            { label: "Website für Coaches", href: "/s/website-fuer-coaches" },
            { label: "Website für Startups", href: "/s/website-fuer-startups" },
        ],
    },
    {
        title: "By Need",
        links: [
            {
                label: "SEO Optimierung Berlin",
                href: "/s/seo-optimierung-berlin",
            },
            { label: "Website Geschwindigkeit", href: "/s/schnelle-website" },
            { label: "Lead Generation", href: "/s/lead-generation-berlin" },
            { label: "Online Booking Integration", href: "/s/online-booking-integration" },
            { label: "Mehrsprachige Website", href: "/s/mehrsprachige-website" },
            { label: "DSGVO-konforme Website", href: "/s/dsgvo-konforme-website" },
        ],
    },
    {
        title: "By Location",
        links: [
            { label: "Webdesign Mitte", href: "/s/webdesign-mitte" },
            { label: "Webdesign Kreuzberg", href: "/s/webdesign-kreuzberg" },
            { label: "Webdesign Prenzlauer Berg", href: "/s/webdesign-prenzlauer-berg" },
            { label: "Webdesign Charlottenburg", href: "/s/webdesign-charlottenburg" },
            { label: "Webdesign Friedrichshain", href: "/s/webdesign-friedrichshain" },
            { label: "Webdesign Neukölln", href: "/s/webdesign-neukoelln" },
        ],
    },
];

export function Footer() {
    const { t } = useLocale();

    return (
        <footer
            style={{
                padding: "72px 56px 36px",
                background: "var(--color-ink)",
                color: "var(--color-surface)",
            }}
        >
            {/* Main 4-column grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 48,
                    marginBottom: 64,
                }}
            >
                {/* Brand column */}
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 18,
                        }}
                    >
                        <BrightByteLogo size={24} />
                        <div
                            style={{
                                fontWeight: 600,
                                fontSize: 15,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            brightbyte
                            <span style={{ color: "rgba(251,248,241,0.5)" }}>
                                .berlin
                            </span>
                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: 14,
                            color: "rgba(251,248,241,0.6)",
                            lineHeight: 1.6,
                            maxWidth: 320,
                        }}
                    >
                        {t.footer.tagline}
                    </p>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0,
                            marginTop: 24,
                            padding: "8px 14px 8px 12px",
                            background: "rgba(251,248,241,0.06)",
                            borderLeft: "3px solid var(--color-accent-soft)",
                            borderRadius: 2,
                        }}
                    >
                        <span
                            className="mono"
                            style={{
                                fontSize: 11,
                                color: "var(--color-accent-soft)",
                                marginRight: 8,
                                fontWeight: 500,
                            }}
                        >
                            ▸
                        </span>
                        <span
                            className="mono"
                            style={{ fontSize: 11, letterSpacing: "0.04em" }}
                        >
                            {t.footer.available}
                        </span>
                    </div>
                </div>

                {/* Product column */}
                <div>
                    <div
                        className="mono"
                        style={{
                            fontSize: 10,
                            color: "rgba(251,248,241,0.5)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            marginBottom: 18,
                        }}
                    >
                        {t.footer.product}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        {footerLinks.product.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{
                                    fontSize: 14,
                                    color: "var(--color-surface)",
                                    textDecoration: "none",
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Company column */}
                <div>
                    <div
                        className="mono"
                        style={{
                            fontSize: 10,
                            color: "rgba(251,248,241,0.5)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            marginBottom: 18,
                        }}
                    >
                        {t.footer.company}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        {footerLinks.company.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{
                                    fontSize: 14,
                                    color: "var(--color-surface)",
                                    textDecoration: "none",
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Connect column */}
                <div>
                    <div
                        className="mono"
                        style={{
                            fontSize: 10,
                            color: "rgba(251,248,241,0.5)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            marginBottom: 18,
                        }}
                    >
                        {t.footer.connect}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        {footerLinks.connect.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{
                                    fontSize: 14,
                                    color: "var(--color-surface)",
                                    textDecoration: "none",
                                }}
                                target={
                                    item.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    item.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* SEO Explore section */}
            <div
                style={{
                    paddingTop: 32,
                    borderTop: "1px solid rgba(251,248,241,0.08)",
                    marginBottom: 48,
                }}
            >
                <div
                    className="mono"
                    style={{
                        fontSize: 10,
                        color: "rgba(251,248,241,0.35)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 20,
                    }}
                >
                    {t.footer.explore}
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 32,
                    }}
                >
                    {seoLinks.map((section) => (
                        <div key={section.title}>
                            <div
                                style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "rgba(251,248,241,0.6)",
                                    marginBottom: 12,
                                }}
                            >
                                {section.title}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8,
                                }}
                            >
                                {section.links.map((link) =>
                                    link.href ? (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            style={{
                                                fontSize: 12,
                                                color: "rgba(251,248,241,0.4)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <span
                                            key={link.label}
                                            style={{
                                                fontSize: 12,
                                                color: "rgba(251,248,241,0.4)",
                                            }}
                                        >
                                            {link.label}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    paddingTop: 24,
                    borderTop: "1px solid rgba(251,248,241,0.1)",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 48,
                    alignItems: "center",
                }}
            >
                <span
                    className="mono"
                    style={{
                        fontSize: 11,
                        color: "rgba(251,248,241,0.5)",
                        letterSpacing: "0.04em",
                    }}
                >
                    {t.footer.copyright}
                </span>
                {footerLinks.legal.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="mono"
                        style={{
                            fontSize: 11,
                            color: "rgba(251,248,241,0.5)",
                            letterSpacing: "0.04em",
                            textDecoration: "none",
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
