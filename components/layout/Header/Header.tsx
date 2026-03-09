"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";

// Lazy-load mobile menu (contains framer-motion AnimatePresence)
const MobileMenu = dynamic(
  () => import("./MobileMenu").then((mod) => mod.MobileMenu),
  { ssr: false }
);

// D1 Pixel Cluster Logo
function PixelClusterLogo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const color = inverted ? "#09090b" : "#FBBF24";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <rect x="4" y="4" width="6" height="6" rx="1" fill={color} opacity={0.3} />
      <rect x="12" y="4" width="6" height="6" rx="1" fill={color} opacity={0.5} />
      <rect x="4" y="12" width="6" height="6" rx="1" fill={color} opacity={0.6} />
      <rect x="12" y="12" width="6" height="6" rx="1" fill={color} />
      <rect x="20" y="12" width="6" height="6" rx="1" fill={color} opacity={0.7} />
      <rect x="12" y="20" width="6" height="6" rx="1" fill={color} opacity={0.4} />
      <rect x="20" y="20" width="6" height="6" rx="1" fill={color} opacity={0.8} />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out",
          isScrolled ? "py-3 px-2" : "py-5 px-0"
        )}
      >
        <div
          className={cn(
            "transition-all duration-500 ease-out mx-auto border",
            isScrolled
              ? "max-w-5xl rounded-2xl shadow-lg bg-bg-secondary/80 backdrop-blur-xl border-white/10 shadow-black/20"
              : "max-w-7xl bg-transparent border-transparent"
          )}
        >
          <Container className={cn(isScrolled && "px-3")}>
            <nav className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link
                href="/"
                onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}
                className="flex items-center gap-3 text-xl font-bold tracking-tight transition-all hover:opacity-80 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-gradient-to-br from-bright/10 to-electric/10 border border-bright/20">
                  <PixelClusterLogo />
                </div>
                <span className="transition-colors text-text-primary">
                  <span className="text-bright">Bright</span>
                  <span>Byte</span>
                  <span className="text-text-muted font-normal ml-1">Berlin</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      "text-text-muted hover:text-text-primary",
                      "hover:bg-white/[0.06]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Button
                  size="sm"
                  className="rounded-lg"
                  asChild
                >
                  <Link href="#contact">
                    Get Started
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 -mr-2 rounded-xl transition-colors text-text-primary hover:bg-white/10"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </nav>
          </Container>
        </div>
      </header>

      {/* Mobile Menu — lazy loaded, only imports framer-motion when needed */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
