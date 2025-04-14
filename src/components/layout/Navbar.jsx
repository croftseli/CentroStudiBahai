"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, switchLanguage, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangMenuOpen(false);
    };
    
    if (isLangMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLangMenuOpen]);

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

  const handleLanguageToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const handleLanguageSelect = (langCode) => {
    switchLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white/90 backdrop-blur shadow-sm py-3" : "bg-white/70 py-4"
      }`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
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

          {/* Language Switcher - Improved UI */}
          <div className="relative ml-4">
            <button 
              onClick={handleLanguageToggle}
              className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Change Language"
            >
              <TranslateIcon className="h-5 w-5" />
              <span className="font-medium uppercase">{language}</span>
            </button>
            
            {isLangMenuOpen && (
              <div 
                className="absolute top-full mt-1 right-0 bg-white shadow-lg rounded-md py-2 w-36 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                      language === lang.code ? "font-bold text-accent bg-gray-50" : "text-gray-700"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-3 ml-4">
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
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Switcher */}
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center p-2 rounded-md text-gray-700 hover:text-accent transition-colors"
            aria-label="Change Language"
          >
            <TranslateIcon className="h-6 w-6" />
          </button>
          
          <button
            className="text-gray-700 hover:text-accent transition-colors text-3xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Language Menu */}
      {isLangMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur shadow-lg z-40">
          <div className="px-6 py-3 space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                  language === lang.code ? "font-bold text-accent bg-gray-50" : "text-gray-700"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur w-full shadow-inner">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
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
            ))}
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4 justify-center">
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}