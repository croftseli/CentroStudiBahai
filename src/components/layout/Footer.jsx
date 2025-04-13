"use client";

import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

/**
 * A more robust footer that includes:
 * - A language selector
 * - Additional info/links
 * - Social icons
 */
export default function Footer() {
  return (
    <footer className="bg-[#faf8f4] text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="w-32">
              <Image
                src="/hotelLaPanoramicaLogo.jpg"
                alt="Hotel La Panoramica Logo"
                width={120}
                height={60}
                className="rounded"
              />
            </Link>
            <p className="text-sm">
              Discover peace, purpose, and connection at our nature-immersed sanctuary.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/calendar" className="hover:text-accent transition-colors">
              Calendar
            </Link>
            <Link href="/ourStory" className="hover:text-accent transition-colors">
              Our Story
            </Link>
            <Link href="/surroundings" className="hover:text-accent transition-colors">
              Surroundings
            </Link>
            <Link href="/activities" className="hover:text-accent transition-colors">
              Activities
            </Link>
            <Link href="/contactUs" className="hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Connect / Social */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <p className="text-sm">
              Follow us for updates, stories, and more:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/"
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
            <h3 className="text-lg font-semibold text-gray-800">Language</h3>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-accent font-medium">
                EN
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-accent font-medium">
                IT
              </Link>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 pt-4">Contact</h3>
            <p className="text-sm">
              <span className="font-medium">Email: </span>
              <a
                href="mailto:support@unitywall.co"
                className="hover:underline hover:text-accent transition-colors"
              >
                support@unitywall.co
              </a>
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone: </span>
              +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#f0ebe4] py-3 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Hotel La Panoramica. All rights reserved.</p>
          <p>
            Developed by&nbsp;
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
