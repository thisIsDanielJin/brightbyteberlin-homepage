"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { locale, setLocale, t } = useLocale();

  const navItems = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.about, href: "/#about" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div
            style={{ background: "rgba(20,19,15,0.4)", backdropFilter: "blur(4px)" }}
            className="absolute inset-0"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: "var(--color-surface)",
              borderLeft: "1px solid var(--color-hair)",
            }}
            className="absolute right-0 top-0 h-full w-full max-w-sm shadow-2xl"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              <nav className="flex-1 space-y-1">
                {navItems.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      style={{
                        display: "block",
                        padding: "16px 0",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--color-ink)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--color-hair)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div style={{ paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  <button
                    onClick={() => setLocale("en")}
                    className="mono"
                    style={{
                      padding: "6px 12px", fontSize: 12, fontWeight: locale === "en" ? 600 : 400,
                      color: locale === "en" ? "var(--color-ink)" : "var(--color-sub-light)",
                      background: locale === "en" ? "rgba(20,19,15,0.06)" : "transparent",
                      border: "1px solid var(--color-hair)", borderRadius: 6, cursor: "pointer", letterSpacing: "0.04em",
                    }}
                  >EN</button>
                  <button
                    onClick={() => setLocale("de")}
                    className="mono"
                    style={{
                      padding: "6px 12px", fontSize: 12, fontWeight: locale === "de" ? 600 : 400,
                      color: locale === "de" ? "var(--color-ink)" : "var(--color-sub-light)",
                      background: locale === "de" ? "rgba(20,19,15,0.06)" : "transparent",
                      border: "1px solid var(--color-hair)", borderRadius: 6, cursor: "pointer", letterSpacing: "0.04em",
                    }}
                  >DE</button>
                </div>
                <Link
                  href="/#contact"
                  onClick={onClose}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 24px",
                    background: "var(--color-ink)",
                    color: "var(--color-surface)",
                    borderRadius: 99,
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  {t.nav.cta} <span style={{ color: "var(--color-accent)" }}>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
