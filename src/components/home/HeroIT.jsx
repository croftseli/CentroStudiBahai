"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Background image animation variants
const bgVariants = {
  initial: { scale: 1.01 },
  animate: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Underline animation variants
const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } },
};

// Text animation variants for activities and surroundings
const fancySectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: customDelay,
    },
  }),
};

export default function HeroItalian() {
  const heroImages = [
    "/view1.jpg",
    "/view2.jpg",
    "/view3.jpg",
    "/view4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {heroImages.map((src, index) => (
          <AnimatePresence key={src}>
            {index === currentIndex && (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                style={{ zIndex: 1 }}
              >
                <motion.div
                  className="absolute inset-0"
                  variants={bgVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image
                    src={src}
                    alt={`Hero background ${index}`}
                    fill
                    priority={index === currentIndex}
                    className="object-cover object-center"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute z-50 left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute z-50 right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Centered Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-40">
          <motion.div variants={textVariants} initial="hidden" animate="visible" className="max-w-3xl">
            <h1
              className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
              style={{ color: "white", textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}
            >
              Benvenuti nel Nostro Rifugio Sacro
            </h1>
            <motion.div
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
              className="h-1 bg-white w-1/2 mx-auto mt-2"
            />
            <p
              className="mt-4 mb-6 font-serif font-bold"
              style={{
                color: "white",
                fontSize: "1.125rem",
                textShadow: "0 5px 15px rgba(0,0,0,1)"
              }}
            >
              Vivi la tranquillità della natura, la tradizione e il comfort moderno in un unico posto.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md shadow-lg active:scale-95">
                Prenota il Tuo Soggiorno
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="bg-white px-6 py-12 space-y-20">
        {/* Our Mission */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0}
        >
          <h2 className="text-3xl font-bold mb-4">La Nostra Missione</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A Spirit Grove crediamo nel potere trasformativo della natura, della consapevolezza e della comunità. La nostra missione è fornire un ambiente sereno e di supporto dove gli ospiti possono riconnettersi con se stessi e con il mondo che li circonda.
          </p>
        </motion.section>

        {/* picture layout */}
        <div className="h-screen py-20 w-full">
          
        </div>

        {/* Activities*/}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0.3}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Attività</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity1.jpg"
                  alt="Incontri Comunitari"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Incontri Comunitari</h3>
              <p className="text-gray-600">
                Partecipa a eventi locali e incontri con musica, poesia e celebrazioni culturali che incarnano l'unità e la riflessione collettiva.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity2.jpg"
                  alt="Tour Guidati ed Escursioni"
                  fill
                  className="object-cover [object-position:50%_20%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tour Guidati ed Escursioni</h3>
              <p className="text-gray-600">
                Esplora i vicoli storici di Acuto e i sentieri montuosi mozzafiato. Scopri antiche chiese, torri medievali e sereni panorami naturali nei nostri tour guidati.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity3.jpg"
                  alt="Festival Stagionali"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Festival Stagionali</h3>
              <p className="text-gray-600">
                Goditi le festività regionali come concerti jazz, fiere d'arte ed eventi culinari tradizionali che celebrano il ricco patrimonio della Ciociaria.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <div className="w-full flex justify-center">
          <svg width="80" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 H40 C45 0, 55 0, 60 10 H100" stroke="#cb956f" strokeWidth="3" fill="transparent" />
          </svg>
        </div>

        {/* Surroundings*/}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0.8}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Dintorni</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings1.jpg"
                  alt="Acuto Storico"
                  fill
                  className="object-cover [object-position:50%_100%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acuto Storico</h3>
              <p className="text-gray-600">
                Immergiti nel passato di Acuto passeggiando per stretti vicoli acciottolati, antichi archi e chiese storiche risalenti all'epoca pre-romana.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings2.jpg"
                  alt="Paesaggi Naturali"
                  fill
                  className="object-cover [object-position:30%_100%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paesaggi Naturali</h3>
              <p className="text-gray-600">
                Goditi boschi di castagni, uliveti e vigneti ondulati sotto le maestose montagne degli Appennini, accompagnati da un sereno lago.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md">
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings3.jpg"
                  alt="Cultura Locale"
                  fill
                  className="object-cover [object-position:50%_65%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultura Locale</h3>
              <p className="text-gray-600">
                Assapora i sapori locali come il vino Cesanese e i formaggi artigianali mentre esplori l'artigianato tradizionale e i costumi della regione Ciociaria.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}