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
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const { language, switchLanguage, languages } = useLanguage();

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
      { href: "/ourStory", label: "Our Story" },
      { href: "/surroundings", label: "Surroundings" },
      { href: "/activities", label: "Activities" },
      { href: "/contactUs", label: "Contact Us" },
    ],
    it: [
      { href: "/it", label: "Home" },
      { href: "/it/calendar", label: "Calendario" },
      { href: "/it/ourStory", label: "La Nostra Storia" },
      { href: "/it/surroundings", label: "Dintorni" },
      { href: "/it/activities", label: "Attività" },
      { href: "/it/contactUs", label: "Contattaci" },
    ]
  };
  
  // Get current language navigation links
  const navLinks = navLinksTranslations[language];

  // Toggle language function
  const handleLanguageToggle = (langCode) => {
    switchLanguage(langCode);
  };

  // Language Toggle Slider component
  const LanguageToggleSlider = () => {
    const TOGGLE_CLASSES = "text-sm font-medium flex items-center px-3 md:pl-3 md:pr-3.5 py-2 md:py-1.5 transition-colors relative z-10";
    
    return (
      <div className="relative flex w-fit items-center rounded-full border border-gray-200">
        <button
          className={`cursor-pointer ${TOGGLE_CLASSES} ${
            language === "en" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => handleLanguageToggle("en")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="relative z-10">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
            <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
            <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
            <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
            <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
            <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
            <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
            <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect>
            <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
            <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
          </svg>
          <span className="relative z-10 ml-1">English</span>
        </button>
        <button
          className={`cursor-pointer ${TOGGLE_CLASSES} ${
            language === "it" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => handleLanguageToggle("it")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="relative z-10">
            <path fill="#fff" d="M10 4H22V28H10z"></path>
            <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#41914d"></path>
            <path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#bf393b"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
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
        hasScrolled ? "bg-white/90 backdrop-blur shadow-sm py-3" : "bg-white/70 py-4"
      }`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-8xl mx-auto px-6">
        {/* Three-section layout: Logo | Navigation | Language/Social */}
        <div className="flex items-center justify-between">
          {/* Logo - Left section */}
          <div className="w-1/4">
            <Link href={language === 'en' ? '/' : '/it'}>
              <div className="flex items-center space-x-3">
                <Image
                  src="/hotelLaPanoramicaLogo.jpg"
                  alt="Hotel La Panoramica Logo"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <span className="hidden md:block text-xl font-bold tracking-wide">
                  Hotel La Panoramica
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center section */}
          <nav className="hidden md:flex items-center justify-center w-2/4">
            <div className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-gray-700 transition-colors hover:text-accent ${
                    (pathname === link.href || 
                     (pathname.replace(/^\/it/, '') === link.href.replace(/^\/it/, ''))) 
                     ? "text-accent underline" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Language and Social - Right section */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            {/* Desktop Language Toggle */}
            <div className="mr-4">
              <LanguageToggleSlider />
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 hover:text-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
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
            {/* Mobile Language Toggle */}
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
                      (pathname === link.href || 
                      (pathname.replace(/^\/it/, '') === link.href.replace(/^\/it/, ''))) 
                      ? "text-accent underline" : "text-gray-700 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social Icons */}
              <motion.div 
                className="flex space-x-4 pt-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 hover:text-accent transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
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