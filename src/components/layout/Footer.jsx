"use client";

import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

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
                  href="/calendar"
                  className="hover:text-accent-red transition-colors"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/ourStory"
                  className="hover:text-accent-red transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/surroundings"
                  className="hover:text-accent-red transition-colors"
                >
                  Surroundings
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-accent-red transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/contactUs"
                  className="hover:text-accent-red transition-colors"
                >
                  Contact Us
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
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent-red transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent-red transition-colors"
              >
                <FacebookIcon />
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
                href="mailto:support@unitywall.co"
                className="text-accent-red hover:underline"
              >
                support@unitywall.co
              </a>
            </p>
            <p className="text-sm text-foreground mt-2">
              <span className="font-medium text-foreground">Phone: </span>
              +1 (123) 456-7890
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
