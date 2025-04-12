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
    { href: "/contactUs", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        hasScrolled
          ? "bg-dark-brown/80 shadow-lg py-2"
          : "bg-dark-brown/60 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Centered on Desktop */}
        <div className="flex flex-1 md:justify-start">
          <Link href="/">
            <Image
              src="/hotelLaPanoramicaLogo.jpg"
              alt="Hotel La Panoramica Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold text-sm transition-colors ${
                pathname === link.href
                  ? "text-accent-red"
                  : "text-foreground hover:text-accent-red"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent-red"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent-red"
          >
            <FacebookIcon />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-accent-red"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-brown/95 shadow-lg animate-slide-down">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium text-base transition-colors ${
                  pathname === link.href
                    ? "text-accent-red"
                    : "text-foreground hover:text-accent-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent-red"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent-red"
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
