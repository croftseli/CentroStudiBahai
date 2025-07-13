"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  // Footer text content translations
  const content = {
    en: {
      rights:
        "© " +
        new Date().getFullYear() +
        " Centro Studi Bahá’í. CIN: IT060002A1FCR22N8J",
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
      rights:
        "© " +
        new Date().getFullYear() +
        " Centro Studi Bahá’í. CIN: IT060002A1FCR22N8J",
      developedBy: "Sviluppato da",
      links: [
        { href: "/it", label: "Home" },
        { href: "/it/calendario", label: "Calendario" },
        { href: "/it/dintorni", label: "Dintorni" },
        { href: "/it/attivita", label: "Attività" },
        { href: "/it/prenota", label: "Prenota" },
      ],
    },
  };

  const text = content[language];

  return (
    <footer className="bg-[#faf8f4] text-gray-700">
      {/* Bottom bar */}
      <div className="bg-[#f0ebe4] py-3">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>{text.rights}</p>
          <p>
            {text.developedBy}
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
