"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "@/context/LanguageContext";

/**
 * A more robust footer that includes:
 * - A language selector
 * - Additional info/links
 * - Social icons
 */
export default function Footer() {
  const { language, switchLanguage, languages } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Footer text content translations
  const content = {
    en: {
      tagline: "Where meetings and nature nurture your body, mind and soul.",
      exploreHeading: "Explore",
      connectHeading: "Connect",
      followUs: "Follow us for updates, stories, and more:",
      languageHeading: "Language",
      contactHeading: "Contact",
      email: "Email:",
      phone: "Phone:",
      rights:
        "© " +
        new Date().getFullYear() +
        " Hotel La Panoramica. All rights reserved.",
      developedBy: "Developed by",
      links: [
        { href: "/", label: "Home" },
        { href: "/calendar", label: "Calendar" },
        { href: "/surroundings", label: "Surroundings" },
        { href: "/activities", label: "Activities" },
        { href: "/booking", label: "Booking" },
      ],
    },
    it: {
      tagline:
        "Dove gli incontri e la natura nutriscono la mente, il corpo e l'anima.",
      exploreHeading: "Esplora",
      connectHeading: "Connettiti",
      followUs: "Seguici per aggiornamenti, storie e altro:",
      languageHeading: "Lingua",
      contactHeading: "Contatto",
      email: "Email:",
      phone: "Telefono:",
      rights:
        "© " +
        new Date().getFullYear() +
        " Albergo La Panoramica. Tutti i diritti riservati.",
      developedBy: "Sviluppato da",
      links: [
        { href: "/it", label: "Home" },
        { href: "/it/calendar", label: "Calendario" },
        { href: "/it/surroundings", label: "Dintorni" },
        { href: "/it/activities", label: "Attività" },
        { href: "/it/booking", label: "Prenota" },
      ],
    },
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangMenuOpen(false);
    };

    if (isLangMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const handleLanguageToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const handleLanguageSelect = (langCode) => {
    switchLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const text = content[language];

  return (
    <footer className="bg-[#faf8f4] text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href={language === "en" ? "/" : "/it"} className="w-32">
              <Image
                src="/CSBLogo.jpg"
                alt={
                  language === "en"
                    ? "Hotel La Panoramica Logo"
                    : "Logo Albergo La Panoramica"
                }
                width={120}
                height={60}
                className="rounded"
              />
            </Link>
            <p className="text-sm">{text.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {text.exploreHeading}
            </h3>
            {text.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect / Social */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {text.connectHeading}
            </h3>
            <p className="text-sm">{text.followUs}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/centrostudibahai9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550518948072"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-accent transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Language & Contact Info */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {text.languageHeading}
            </h3>

            {/* Updated Language Dropdown */}
            <div className="relative">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Change Language"
              >
                <TranslateIcon className="h-5 w-5" />
                <span className="font-medium">
                  {languages.find((lang) => lang.code === language)?.label}
                </span>
              </button>

              {isLangMenuOpen && (
                <div
                  className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md py-2 w-36 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        language === lang.code
                          ? "font-bold text-accent bg-gray-50"
                          : "text-gray-700"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 pt-4">
              {text.contactHeading}
            </h3>
            <p className="text-sm">
              <span className="font-medium">{text.email} </span>
              <a
                href="mailto:info@centrostudibahai.it"
                className="hover:underline hover:text-accent transition-colors"
              >
                info@centrostudibahai.it
              </a>
            </p>
            <p className="text-sm">
              <span className="font-medium">{text.phone} </span>
              +39 351 483 4549
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#f0ebe4] py-3 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>{text.rights}</p>
          <p>
            {text.developedBy}&nbsp;
            <a
              href="https://unitywall.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              UnityWall
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
