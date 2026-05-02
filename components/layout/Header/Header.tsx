"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

const MobileMenu = dynamic(
  () => import("./MobileMenu").then((mod) => mod.MobileMenu),
  { ssr: false }
);

function BrightByteLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#6B3977" />
      <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#6B3977" />
      <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#6B3977" />
      <rect x="12" y="12" width="8" height="8" rx="3" fill="#6B3977" opacity="0.85" />
      <rect x="22" y="12" width="8" height="8" rx="4" fill="#6B3977" opacity="0.7" />
      <circle cx="26" cy="6" r="4.5" fill="#6B3977" opacity="0.45" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const navItems = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.about, href: "/#about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="flex items-center justify-between px-5 sm:px-8 lg:px-14 h-[72px] sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          borderBottom: `1px solid ${scrolled ? "var(--color-hair)" : "transparent"}`,
          background: scrolled ? "rgba(245,241,232,0.85)" : "var(--color-bg)",
          backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        }}
      >
        {/* Logo + Wordmark */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrightByteLogo size={24} />
          <div
            style={{
              fontSize: 15,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--color-ink)" }}>bright</span>
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: "var(--color-accent)" }}>byte</span>
            <span style={{ color: "var(--color-sub)", fontWeight: 400 }}>.berlin</span>
          </div>
        </Link>

        {/* Desktop Center Nav */}
        <nav
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            gap: 32,
            fontSize: 14,
            color: "var(--color-ink-soft)",
          }}
          className="hidden lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <button
              onClick={() => setLocale("en")}
              className="mono"
              style={{
                padding: "4px 8px", fontSize: 11, fontWeight: locale === "en" ? 600 : 400,
                color: locale === "en" ? "var(--color-ink)" : "var(--color-sub-light)",
                background: locale === "en" ? "rgba(20,19,15,0.06)" : "transparent",
                border: "none", borderRadius: 4, cursor: "pointer", letterSpacing: "0.04em",
              }}
            >EN</button>
            <span style={{ fontSize: 11, color: "var(--color-sub-light)" }}>|</span>
            <button
              onClick={() => setLocale("de")}
              className="mono"
              style={{
                padding: "4px 8px", fontSize: 11, fontWeight: locale === "de" ? 600 : 400,
                color: locale === "de" ? "var(--color-ink)" : "var(--color-sub-light)",
                background: locale === "de" ? "rgba(20,19,15,0.06)" : "transparent",
                border: "none", borderRadius: 4, cursor: "pointer", letterSpacing: "0.04em",
              }}
            >DE</button>
          </div>
          <Link
            href="/#contact"
            className="btn-hover nav-cta"
            style={{
              padding: "9px 18px",
              background: "var(--color-ink)",
              color: "var(--color-surface)",
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {t.nav.cta} <span style={{ color: "var(--color-accent)" }}>→</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
          style={{
            padding: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-ink)",
          }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
