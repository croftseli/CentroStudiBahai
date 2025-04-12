"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/view1.jpg"
          alt="Centro Studi Bahá’í"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-dark-brown/70" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          {/* Logo and Hotel Short Message */}
          <div className="mb-6">
            <Image
              src="/hotelLaPanoramicaLogo.jpg"
              alt="Hotel La Panoramica Logo"
              width={120}
              height={60}
              className="mx-auto mb-4 rounded"
            />
            <p className="text-xl text-gray-300 mb-4">
              A peaceful retreat nestled in the heart of Tuscany, where luxury
              meets nature.
            </p>
          </div>

          {/* "Welcome to Hotel la Panoramica" Text with Background */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg bg-accent-red py-4 px-8 inline-block rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-white">Hotel La Panoramica</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
