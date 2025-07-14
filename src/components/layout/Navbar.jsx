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
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] =
    useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const { language, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links with translations
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

  // Get current language navigation links
  const navLinks = navLinksTranslations[language];

  // Toggle language function
  const handleLanguageToggle = (langCode) => {
    switchLanguage(langCode);
  };

  // Language Toggle Slider component
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className="relative z-10"
          >
            <rect
              x="1"
              y="4"
              width="30"
              height="24"
              rx="4"
              ry="4"
              fill="#071b65"
            />
            <path
              d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
              fill="#fff"
            />
            <path
              d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
              fill="#b92932"
            />
            <path
              d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
              fill="#b92932"
            />
            <path
              d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
              fill="#fff"
            />
            <rect x="13" y="4" width="6" height="24" fill="#fff" />
            <rect x="1" y="13" width="30" height="6" fill="#fff" />
            <rect x="14" y="4" width="4" height="24" fill="#b92932" />
            <rect
              x="14"
              y="1"
              width="4"
              height="30"
              transform="translate(32) rotate(90)"
              fill="#b92932"
            />
            <path
              d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
              fill="#b92932"
            />
            <path
              d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
              fill="#b92932"
            />
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
            />
            <path
              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff"
              opacity=".2"
            />
          </svg>
          <span className="relative z-10 ml-1">English</span>
        </button>
        <button
          className={`cursor-pointer ${TOGGLE_CLASSES} ${
            language === "it" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => handleLanguageToggle("it")}
          aria-label="Switch to Italian"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className="relative z-10"
          >
            <path fill="#fff" d="M10 4H22V28H10z" />
            <path
              d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              fill="#41914d"
            />
            <path
              d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              transform="rotate(180 26 16)"
              fill="#bf393b"
            />
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
            />
            <path
              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff"
              opacity=".2"
            />
          </svg>
          <span className="relative z-10 ml-1">Italiano</span>
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
        {/* Three-section layout: Logo | Navigation | Language/Social */}
        <div className="flex items-center justify-between">
          {/* Logo - Left section */}
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

          {/* Desktop Navigation - Center section */}
          <nav className="hidden md:flex items-center justify-center w-2/4">
            <div className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
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
                    className={`font-medium text-gray-700 transition-colors hover:text-accent ${
                      pathname === link.href ||
                      pathname.replace(/^\/it/, "") ===
                        link.href.replace(/^\/it/, "")
                        ? "text-accent underline"
                        : ""
                    }`}
                    aria-label={
                      link.label === "Activities" || link.label === "Attività"
                        ? "Activities menu"
                        : link.label
                    }
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
                          className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="activities-menu"
                          >
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
              ))}
            </div>
          </nav>

          {/* Language and Social - Right section */}
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

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
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
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium text-lg transition-colors ${
                      pathname === link.href ||
                      pathname.replace(/^\/it/, "") ===
                        link.href.replace(/^\/it/, "")
                        ? "text-accent underline"
                        : "text-gray-700 hover:text-accent"
                    }`}
                    aria-label={
                      link.label === "Activities" || link.label === "Attività"
                        ? "Activities menu"
                        : link.label
                    }
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-accent"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
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
