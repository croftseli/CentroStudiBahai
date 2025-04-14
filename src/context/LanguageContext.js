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

  // Handle language switching
  const switchLanguage = (newLang) => {
    if (newLang === language) return; // Don't switch if already on the same language
    
    const currentLang = language;
    let currentPath = pathname;
    
    // Special handling for home page
    if (currentPath === '/' || currentPath === '/it') {
      if (newLang === 'en') {
        router.push('/');
        return;
      } else if (newLang === 'it') {
        router.push('/it');
        return;
      }
    }
    
    // For other pages:
    // Remove current language prefix if exists
    let newPath = currentPath;
    if (currentLang === 'it' && currentPath.startsWith('/it')) {
      newPath = currentPath.replace(/^\/it/, '');
    }
    
    // Add new language prefix if not default
    if (newLang === 'it') {
      newPath = `/it${newPath}`;
    }
    
    // Make sure path starts with /
    if (!newPath.startsWith('/')) newPath = '/' + newPath;
    
    router.push(newPath);
  };

  const value = {
    language,
    switchLanguage,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};