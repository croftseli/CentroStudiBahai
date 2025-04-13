"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/calendar", label: "Calendar" },
    { href: "/ourStory", label: "Our Story" },
    { href: "/surroundings", label: "Surroundings" },
    { href: "/activities", label: "Activities" },
    { href: "/contactUs", label: "Contact Us" },
  ];

  // Language links for the app directory; these are the routes that correspond to your languages.
  const languages = [
    { code: "en", label: "EN", href: "/" },
    { code: "it", label: "IT", href: "/it" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white/90 backdrop-blur shadow-sm py-3" : "bg-white/70 py-4"
      }`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
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
                pathname === link.href ? "text-accent underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center space-x-3 ml-4 border-l border-gray-300 pl-4">
            {languages.map((lang, idx) => (
              <div key={lang.code} className="flex items-center">
                <Link href={lang.href}>
                  <span
                    className={`font-medium transition-colors hover:text-accent ${
                      pathname.startsWith(lang.href) ? "text-accent" : "text-gray-700"
                    }`}
                  >
                    {lang.label}
                  </span>
                </Link>
                {idx < languages.length - 1 && <span className="mx-1">|</span>}
              </div>
            ))}
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
        <button
          className="md:hidden text-gray-700 hover:text-accent transition-colors text-3xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

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
                  pathname === link.href ? "text-accent underline" : "text-gray-700 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center space-x-3 border-t border-gray-300 pt-4">
              {languages.map((lang, idx) => (
                <div key={lang.code} className="flex items-center">
                  <Link href={lang.href} onClick={() => setIsMenuOpen(false)}>
                    <span
                      className={`font-medium transition-colors hover:text-accent ${
                        pathname.startsWith(lang.href) ? "text-accent" : "text-gray-700"
                      }`}
                    >
                      {lang.label}
                    </span>
                  </Link>
                  {idx < languages.length - 1 && <span className="mx-1">|</span>}
                </div>
              ))}
            </div>
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
