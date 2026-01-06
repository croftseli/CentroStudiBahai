"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileActivitiesOpen, setIsMobileActivitiesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const pathnameRaw = usePathname();
  const pathname = (pathnameRaw || "").split("?")[0].replace(/\/$/, "") || "/";
  const { language, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 14);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileActivitiesOpen(false);
    setOpenDropdown(null);
  }, [language, pathname]);

  const navLinksTranslations = {
    en: [
      { href: "/", label: "Home" },
      { href: "/calendar", label: "Calendar" },
      { href: "/surroundings", label: "Surroundings" },
      {
        href: "/activities",
        label: "Activities",
        subLinks: [
          { href: "/activities#conferences", label: "Conferences" },
          { href: "/activities#team-building", label: "Team Building" },
          { href: "/activities#weddings", label: "Weddings" },
          { href: "/activities#yoga-retreats", label: "Yoga Retreats" },
          { href: "/activities#biking", label: "Biking" },
        ],
      },
      { href: "/booking", label: "Booking" },
    ],
    it: [
      { href: "/it", label: "Home" },
      { href: "/it/calendario", label: "Calendario" },
      { href: "/it/dintorni", label: "Dintorni" },
      {
        href: "/it/attivita",
        label: "Attività",
        subLinks: [
          { href: "/it/attivita#conferenze", label: "Conferenze" },
          { href: "/it/attivita#team-building", label: "Team Building" },
          { href: "/it/attivita#matrimoni", label: "Matrimoni" },
          { href: "/it/attivita#ritiri-yoga", label: "Ritiri Yoga" },
          { href: "/it/attivita#ciclismo", label: "Ciclismo" },
        ],
      },
      { href: "/it/prenota", label: "Prenota" },
    ],
  };

  const navLinks = navLinksTranslations[language];

  const isLinkActive = (href) => {
    const cleanHref = (href || "").split("#")[0].replace(/\/$/, "") || "/";
    if (cleanHref === "/" || cleanHref === "/it") return pathname === cleanHref;
    return pathname === cleanHref || pathname.startsWith(cleanHref + "/");
  };

  const handleLanguageToggle = (langCode) => {
    switchLanguage(langCode);
  };

  const LanguageToggle = () => {
    const base =
      "relative z-10 px-3 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors";

    return (
      <div className="relative flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)] overflow-hidden">
        <button
          type="button"
          className={`${base} ${language === "en" ? "text-white" : "text-[#1f2937]"}`}
          onClick={() => handleLanguageToggle("en")}
          aria-label="Switch to English"
        >
          <span className="hidden md:inline">English</span>
          <span className="md:hidden">EN</span>
        </button>

        <button
          type="button"
          className={`${base} ${language === "it" ? "text-white" : "text-[#1f2937]"}`}
          onClick={() => handleLanguageToggle("it")}
          aria-label="Switch to Italian"
        >
          <span className="hidden md:inline">Italiano</span>
          <span className="md:hidden">IT</span>
        </button>

        <div
          className={`absolute inset-0 z-0 flex ${
            language === "it" ? "justify-end" : "justify-start"
          }`}
          aria-hidden="true"
        >
          <span
            className={`h-full w-1/2 rounded-full ${
              language === "it"
                ? "bg-gradient-to-r from-green-700 via-green-600 to-red-700"
                : "bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#b91c1c]"
            }`}
          />
        </div>
      </div>
    );
  };

  const linkBase =
    "relative px-3 py-2 text-[13px] md:text-sm font-semibold tracking-[0.02em] text-[#111827]/80 hover:text-[#111827] transition-colors";

  const linkActive =
    "relative px-3 py-2 text-[13px] md:text-sm font-semibold tracking-[0.02em] text-[#111827] transition-colors";

  const underline = (active) =>
    `pointer-events-none absolute left-3 right-3 -bottom-[3px] h-[2px] rounded-full transition-all ${
      active ? "opacity-100 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d]" : "opacity-0"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "bg-white/70 backdrop-blur-lg"
      } border-b border-black/10`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="h-16 md:h-[76px] flex items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-3 min-w-[190px]">
            <Link href={language === "en" ? "/" : "/it"} className="group">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5 p-1">
                  <Image
                    src="/CSBLogo.webp"
                    alt="Centro Studi Bahá'í Logo"
                    width={46}
                    height={46}
                    className="rounded-lg"
                    priority
                  />
                </div>

                <div className="hidden md:block leading-tight">
                  <div className="text-[16px] font-extrabold tracking-[0.02em] text-[#111827]">
                    Centro Studi Bahá'í
                  </div>
                  <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#6b7280]">
                    {language === "en" ? "All are welcome" : "Aperto a tutti"}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1.5">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                const isOpen = openDropdown === link.href;

                if (!link.subLinks) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={active ? linkActive : linkBase}
                      aria-label={link.label}
                    >
                      {link.label}
                      <span className={underline(active)} aria-hidden="true" />
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={active ? linkActive : linkBase}
                      aria-label={link.label}
                      aria-expanded={isOpen}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {link.label}
                        <KeyboardArrowDownIcon
                          style={{ fontSize: 18 }}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </span>
                      <span className={underline(active)} aria-hidden="true" />
                    </Link>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 overflow-hidden"
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                        >
                          <div className="px-2 py-2" role="menu">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="block rounded-xl px-3 py-2.5 text-[13px] font-semibold tracking-[0.02em] text-[#111827]/80 hover:text-[#111827] hover:bg-[#0f172a]/[0.04] transition-colors"
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="inline-flex items-center justify-between w-full">
                                  {subLink.label}
                                  <span className="text-[#9ca3af]">↗</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="hidden md:flex items-center justify-end gap-3 min-w-[270px]">
            <LanguageToggle />
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/centrostudibahai9/"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#111827]/70 hover:text-[#b91c1c] hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                aria-label="Instagram"
              >
                <InstagramIcon style={{ fontSize: 20 }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550518948072"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#111827]/70 hover:text-[#b91c1c] hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                aria-label="Facebook"
              >
                <FacebookIcon style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111827]/80 hover:text-[#b91c1c] hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.06)]"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/92 backdrop-blur-xl border-t border-black/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col px-5 py-4 space-y-2"
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.22, delay: 0.05 }}
            >
              {navLinks.map((link, index) => {
                const active = isLinkActive(link.href);

                if (!link.subLinks) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, delay: 0.04 + index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-extrabold tracking-[0.02em] transition-colors ${
                          active
                            ? "bg-[#0f172a]/[0.05] text-[#111827]"
                            : "text-[#111827]/80 hover:bg-[#0f172a]/[0.05] hover:text-[#111827]"
                        }`}
                        aria-label={link.label}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, delay: 0.04 + index * 0.03 }}
                    className="rounded-2xl border border-black/10 bg-white/70 overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-center justify-between px-4 py-3.5">
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-[15px] font-extrabold tracking-[0.02em] transition-colors ${
                          active ? "text-[#111827]" : "text-[#111827]/80"
                        }`}
                        aria-label={link.label}
                      >
                        {link.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => setIsMobileActivitiesOpen((prev) => !prev)}
                        aria-label={
                          isMobileActivitiesOpen
                            ? "Collapse Activities menu"
                            : "Expand Activities menu"
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#0f172a]/[0.05] text-[#111827]/80 hover:text-[#b91c1c] transition-colors"
                      >
                        {isMobileActivitiesOpen ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {isMobileActivitiesOpen && (
                        <motion.div
                          className="px-4 pb-4 space-y-1"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileActivitiesOpen(false);
                              }}
                              className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold tracking-[0.02em] text-[#111827]/75 hover:text-[#111827] hover:bg-[#0f172a]/[0.05] transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <motion.div
                className="flex gap-3 pt-3 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.18 }}
              >
                <a
                  href="https://www.instagram.com/centrostudibahai9/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111827]/80 hover:text-[#b91c1c] hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                  aria-label="Instagram"
                >
                  <InstagramIcon style={{ fontSize: 20 }} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550518948072"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111827]/80 hover:text-[#b91c1c] hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                  aria-label="Facebook"
                >
                  <FacebookIcon style={{ fontSize: 20 }} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
