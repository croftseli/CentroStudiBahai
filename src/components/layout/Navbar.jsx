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
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] =
    useState(false);
  const [isMobileActivitiesOpen, setIsMobileActivitiesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const pathnameRaw = usePathname();
  const pathname = (pathnameRaw || "").split("?")[0].replace(/\/$/, "") || "/";
  const { language, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (cleanHref === "/" || cleanHref === "/it") {
      return pathname === cleanHref;
    }
    return pathname === cleanHref || pathname.startsWith(cleanHref + "/");
  };

  const handleLanguageToggle = (langCode) => {
    switchLanguage(langCode);
  };

  const LanguageToggleSlider = () => {
    const TOGGLE_CLASSES =
      "text-sm font-medium flex items-center px-3 md:pl-3 md:pr-3.5 py-2 md:py-1.5 transition-colors relative z-10";

    return (
      <div className="relative flex w-fit items-center rounded-full border border-gray-200">
        <button
          className={`cursor-pointer ${TOGGLE_CLASSES} ${
            language === "en" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => handleLanguageToggle("en")}
          aria-label="Switch to English"
        >
          <span className="relative z-10 md:inline hidden">English</span>
          <span className="relative z-10 md:hidden">EN</span>
        </button>

        <button
          className={`cursor-pointer ${TOGGLE_CLASSES} ${
            language === "it" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => handleLanguageToggle("it")}
          aria-label="Switch to Italian"
        >
          <span className="relative z-10 md:inline hidden">Italiano</span>
          <span className="relative z-10 md:hidden">IT</span>
        </button>

        <div
          className={`absolute inset-0 z-0 flex ${
            language === "it" ? "justify-end" : "justify-start"
          }`}
        >
          {language === "it" ? (
            <span className="h-full w-1/2 rounded-full bg-gradient-to-r from-green-600 to-red-600" />
          ) : (
            <span className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
          )}
        </div>
      </div>
    );
  };

  const linkBase =
    "px-4 py-2 rounded-full transition-colors font-medium text-gray-700 hover:text-accent";

  const linkActive =
    "px-4 py-2 rounded-full transition-colors font-medium text-accent border border-accent";

  return (
    <header
      className={`fixed w-full z-80 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/90 backdrop-blur shadow-sm py-3"
          : "bg-white/70 py-4"
      }`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <Link href={language === "en" ? "/" : "/it"}>
              <div className="flex items-center space-x-3">
                <Image
                  src="/CSBLogo.webp"
                  alt="Centro Studi Bahá'í Logo"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="hidden md:block">
                  <span className="text-xl font-bold tracking-wide">
                    Centro Studi Bahá'í
                  </span>
                  <div className="text-sm text-gray-500 text-left">
                    {language === "en" ? "All are welcome!" : "Aperto a tutti!"}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center w-2/4">
            <div className="flex items-center justify-center space-x-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() =>
                      link.subLinks && setIsActivitiesDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      link.subLinks && setIsActivitiesDropdownOpen(false)
                    }
                  >
                    <Link
                      href={link.href}
                      className={active ? linkActive : linkBase}
                      aria-label={link.label}
                      aria-expanded={
                        link.subLinks ? isActivitiesDropdownOpen : undefined
                      }
                    >
                      {link.label}
                    </Link>

                    {link.subLinks && (
                      <AnimatePresence>
                        {isActivitiesDropdownOpen && (
                          <motion.div
                            className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-1" role="menu">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent"
                                  role="menuitem"
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="hidden md:flex items-center justify-end w-1/4">
            <div className="mr-4">
              <LanguageToggleSlider />
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/centrostudibahai9/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 hover:text-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550518948072"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 hover:text-accent transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <div className="mr-2">
              <LanguageToggleSlider />
            </div>
            <button
              className="text-gray-700 hover:text-accent transition-colors text-3xl"
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
            className="md:hidden bg-white/90 backdrop-blur w-full shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col px-6 py-4 space-y-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navLinks.map((link, index) => {
                const active = isLinkActive(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={active ? linkActive : linkBase}
                        aria-label={link.label}
                      >
                        {link.label}
                      </Link>

                      {link.subLinks && (
                        <button
                          onClick={() =>
                            setIsMobileActivitiesOpen((prev) => !prev)
                          }
                          aria-label={
                            isMobileActivitiesOpen
                              ? "Collapse Activities menu"
                              : "Expand Activities menu"
                          }
                          className="text-gray-700 hover:text-accent"
                        >
                          {isMobileActivitiesOpen ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </button>
                      )}
                    </div>

                    {link.subLinks && (
                      <AnimatePresence>
                        {isMobileActivitiesOpen && (
                          <motion.div
                            className="ml-4 mt-2 space-y-2"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileActivitiesOpen(false);
                                }}
                                className="block text-sm text-gray-600 hover:text-accent"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                className="flex space-x-4 pt-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="https://www.instagram.com/centrostudibahai9/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 hover:text-accent transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550518948072"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 hover:text-accent transition-colors"
                >
                  <FacebookIcon />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
