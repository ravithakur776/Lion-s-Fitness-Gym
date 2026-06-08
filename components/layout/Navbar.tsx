"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-darker py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="Lion's Fitness Home"
            >
              <Image
                src="/real-assets/Lion's Fitness Logo.jpg"
                alt="Lion's Fitness Logo"
                width={36}
                height={36}
                className="object-contain rounded-full border border-yellow-400/30"
              />
              <div className="flex items-center">
                <span
                  className="text-white font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  LION&apos;S
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    letterSpacing: "0.12em",
                    color: "#F5C518",
                    marginLeft: "0.4rem",
                  }}
                >
                  FITNESS
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-8"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded ${
                      isActive ? "text-yellow-400" : "text-white/80 hover:text-white"
                    }`}
                    style={{ color: isActive ? "#F5C518" : undefined }}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{ backgroundColor: "#F5C518" }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                id="nav-join-now-btn"
                className="hidden sm:inline-flex"
                aria-label="Join Lion's Fitness now"
              >
                Join Now
              </Button>
              <button
                className="lg:hidden p-2 rounded-lg text-white hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                style={{ color: mobileOpen ? "#F5C518" : undefined }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-dark lg:hidden flex flex-col pt-24 pb-8 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-5 right-5 p-2 rounded-lg text-white hover:text-yellow-400 transition-colors"
                style={{ color: "#F5C518" }}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-bold py-3 px-4 rounded-lg text-white hover:text-black hover:bg-yellow-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="w-full"
                  id="mobile-join-now-btn"
                  aria-label="Join Lion's Fitness"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Now 🦁
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
