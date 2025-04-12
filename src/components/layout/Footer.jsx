"use client";

import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/hotelLaPanoramicaLogo.jpg"
                alt="Hotel La Panoramica Logo"
                width={120}
                height={60}
                className="rounded"
              />
            </Link>
            <p className="text-sm text-foreground text-center md:text-left">
              Explore meaningful stories and inspiring projects with a modern
              twist.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-accent-red mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent-red transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent-red transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent-red transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-accent-red transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-red transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-accent-red mb-3">
              Connect
            </h3>
            <p className="text-sm text-foreground mb-2">
              Stay in touch via our socials:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent-red transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com/company/example"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent-red transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-accent-red mb-3">
              Reach Out
            </h3>
            <p className="text-sm text-foreground">
              <span className="font-medium text-foreground">Email: </span>
              <a
                href="mailto:hello@example.com"
                className="text-accent-red hover:underline"
              >
                hello@example.com
              </a>
            </p>
            <p className="text-sm text-foreground mt-2">
              <span className="font-medium text-foreground">Phone: </span>+1
              (234) 567-8900
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dark-brown py-4">
        <div className="container mx-auto px-4 text-center text-sm text-foreground">
          <p className="mt-1">
            Website Developed and Managed by{" "}
            <a
              href="https://unitywall.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-red hover:underline"
            >
              UnityWall
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
