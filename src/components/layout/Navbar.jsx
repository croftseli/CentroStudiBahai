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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-dark-brown shadow-lg py-3" : "bg-dark-brown py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/hotelLaPanoramicaLogo.jpg"
              alt="Hotel La Panoramica Logo"
              width={80}
              height={80}
              className="cursor-pointer rounded"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-lg py-3 px-6 transition-colors hover:scale-105 transform duration-200 ${
                pathname === link.href
                  ? "text-accent-red border-b-3 border-accent-red"
                  : "text-white hover:text-accent-red"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-red text-3xl"
          >
            <InstagramIcon fontSize="inherit" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-red text-3xl"
          >
            <FacebookIcon fontSize="inherit" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-accent-red text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <CloseIcon fontSize="inherit" />
          ) : (
            <MenuIcon fontSize="inherit" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-brown shadow-lg animate-slide-down">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-bold text-xl py-4 transition-colors ${
                  pathname === link.href
                    ? "text-accent-red"
                    : "text-white hover:text-accent-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-red text-3xl"
              >
                <InstagramIcon fontSize="inherit" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-red text-3xl"
              >
                <FacebookIcon fontSize="inherit" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
