"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { navLinks } from "@/data/navigation";
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "14px 56px" : "22px 56px",
          borderBottom: `1px solid ${scrolled ? "var(--color-hair)" : "transparent"}`,
          background: scrolled ? "rgba(245,241,232,0.85)" : "var(--color-bg)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Logo + Wordmark */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrightByteLogo size={scrolled ? 22 : 28} />
          <div
            style={{
              fontSize: scrolled ? 14 : 15,
              letterSpacing: "-0.01em",
              transition: "font-size 0.35s ease",
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
            display: "flex",
            gap: 32,
            fontSize: 14,
            color: "var(--color-ink-soft)",
          }}
          className="hidden lg:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
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
          <Link
            href="/#contact"
            className="btn-hover"
            style={{
              padding: scrolled ? "7px 16px" : "9px 18px",
              background: "var(--color-ink)",
              color: "var(--color-surface)",
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              transition: "padding 0.35s ease",
              textDecoration: "none",
            }}
          >
            Start a project <span style={{ color: "var(--color-accent)" }}>→</span>
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
