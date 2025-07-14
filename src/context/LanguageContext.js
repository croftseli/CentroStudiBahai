"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageContext = createContext();

export const languages = [
  { code: 'en', label: 'English', path: '' },
  { code: 'it', label: 'Italiano', path: '/it' }
];

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Detect language from URL
  const getLanguageFromPath = () => {
    if (pathname.startsWith('/it')) return 'it';
    return 'en'; // Default language
  };

  const [language, setLanguage] = useState(getLanguageFromPath());

  // Update language when pathname changes
  useEffect(() => {
    setLanguage(getLanguageFromPath());
  }, [pathname]);

  // Path and hash translations between languages
  const pathTranslations = {
    en: {
      "/": "/",
      "/calendar": "/calendar",
      "/surroundings": "/surroundings",
      "/activities": "/activities",
      "/booking": "/booking",
      hashes: {
        conferences: "conferences",
        "team-building": "team-building",
        weddings: "weddings",
        "yoga-retreats": "yoga-retreats",
        biking: "biking",
      },
    },
    it: {
      "/": "/it",
      "/calendar": "/it/calendario",
      "/surroundings": "/it/dintorni",
      "/activities": "/it/attivita",
      "/booking": "/it/prenota",
      hashes: {
        conferences: "conferenze",
        "team-building": "team-building",
        weddings: "matrimoni",
        "yoga-retreats": "ritiri-yoga",
        biking: "ciclismo",
      },
    },
  };

  // Handle language switching
  const switchLanguage = (newLang) => {
    if (newLang === language) return; // Don't switch if already on the same language

    const currentPath = pathname;
    const currentHash = window.location.hash; // e.g., #matrimoni
    const currentLangPaths = pathTranslations[language];
    const newLangPaths = pathTranslations[newLang];

    // Find the equivalent path in the new language
    let newPath = "/";
    for (const [enPath, itPath] of Object.entries(currentLangPaths)) {
      if (language === "en" && currentPath === enPath) {
        newPath = newLangPaths[enPath];
        break;
      } else if (language === "it" && currentPath === itPath) {
        newPath = enPath; // Use the English path as the key for the new language
        break;
      }
    }

    // Handle hash translation
    let newHash = "";
    if (currentHash) {
      const hashKey = Object.keys(currentLangPaths.hashes).find(
        (key) => currentLangPaths.hashes[key] === currentHash.replace("#", "")
      );
      if (hashKey) {
        newHash = `#${newLangPaths.hashes[hashKey]}`;
      }
    }

    // Navigate to the new path with hash
    router.push(`${newPath}${newHash}`);
    setLanguage(newLang);
  };

  const value = {
    language,
    switchLanguage,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};