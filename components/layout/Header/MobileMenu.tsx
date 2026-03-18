"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-bg-secondary/95 backdrop-blur-xl shadow-2xl border-l border-white/10"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              <nav className="flex-1 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-4 text-lg font-semibold text-text-primary hover:text-bright transition-colors border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/blog"
                    onClick={onClose}
                    className="block py-4 text-lg font-semibold text-text-primary hover:text-bright transition-colors border-b border-white/5"
                  >
                    Blog
                  </Link>
                </motion.div>
              </nav>

              <div className="pt-6">
                <Button
                  className="w-full"
                  onClick={onClose}
                  asChild
                >
                  <Link href="/#contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
