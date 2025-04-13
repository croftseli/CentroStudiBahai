"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src="/view1.jpg"
            alt="Forest view from retreat"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold drop-shadow-md"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            Reconnect With Your Spirit
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl mt-4 max-w-2xl drop-shadow"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.3 }}
          >
            Discover peace and purpose at our nature-immersed retreat center.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="mt-6 px-10 py-5 text-lg">Book Your Retreat</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <ArrowDown className="text-white animate-bounce w-6 h-6" />
        </motion.div>
      </div>

      <div className="bg-white px-6 py-12 space-y-20">
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Spirit Grove we believe in the transformative power of nature, mindfulness,
            and community. Our mission is to provide a serene and supportive environment
            where guests can reconnect with themselves and the world around them.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Sacred Accommodations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Forest Cabins</h3>
              <p className="text-gray-600">
                Cozy and private spaces nestled among the trees, perfect for introspection
                and rest.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Mountain Lodges</h3>
              <p className="text-gray-600">
                Spacious lodges with breathtaking views and room for group or solo retreats.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Eco Yurts</h3>
              <p className="text-gray-600">
                Sustainable and serene, our yurts offer a unique way to experience nature.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Spiritual Amenities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Meditation Halls</h3>
              <p className="text-gray-600">
                Quiet, sacred spaces for guided and personal meditation practices.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Healing Gardens</h3>
              <p className="text-gray-600">
                Reconnect with the Earth through our curated herbal and flower gardens.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Sacred Fire Circles</h3>
              <p className="text-gray-600">
                Evening circles for reflection, storytelling, and spiritual connection.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
