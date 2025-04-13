"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants for smoother background transitions
const bgVariants = {
  initial: { scale: 1.01 },
  animate: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } },
};

export default function HeroIT() {
  const heroImages = [
    "/view1.jpg",
    "/view2.jpg",
    "/view3.jpg",
    "/view4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate images every 5 seconds
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
      {/* Hero Section with Background Images */}
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
                    alt={`Sfondo eroico ${index}`}
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
          aria-label="Immagine precedente"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute z-50 right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          aria-label="Immagine successiva"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Centered Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-40">
          <motion.div variants={textVariants} initial="hidden" animate="visible" className="max-w-3xl">
            <h1
              className="text-white text-4xl md:text-6xl font-bold drop-shadow-md"
              style={{ color: "white", textShadow: "0 3px 8px rgba(0,0,0,0.8)" }}
            >
              Benvenuti nel Nostro Sacro Rifugio
            </h1>
            <motion.div
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
              className="h-1 bg-white w-1/2 mx-auto mt-2"
            />
            <p
              className="mt-4 mb-6 drop-shadow"
              style={{
                color: "#cb956f",
                fontSize: "1.125rem",
                textShadow: "0 4px 12px rgba(0,0,0,0.9)",
              }}
            >
              Sperimenta la tranquillità della natura, della tradizione e del comfort moderno in un unico luogo.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md shadow-lg active:scale-95">
                Prenota il Tuo Soggiorno
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bouncing Down Arrow */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <ArrowDown className="text-white animate-bounce w-6 h-6" />
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="bg-white px-6 py-12 space-y-20">
        {/* La Nostra Missione */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">La Nostra Missione</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Da Spirit Grove crediamo nel potere trasformativo della natura, della consapevolezza e della comunità. La nostra missione è fornire un ambiente sereno e di supporto in cui gli ospiti possano riconnettersi con se stessi e con il mondo che li circonda.
          </p>
        </motion.section>

        {/* Attività */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Attività</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Riunioni di Comunità</h3>
              <p className="text-gray-600">
                Partecipa a eventi e incontri locali con musica, poesia e celebrazioni culturali che incarnano l'unità e la riflessione collettiva.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Visite Guidate ed Escursioni</h3>
              <p className="text-gray-600">
                Esplora i vicoli storici di Acuto e i sentieri montani mozzafiato. Scopri antiche chiese, torri medievali e viste naturali serene durante le nostre visite guidate.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Festival Stagionali</h3>
              <p className="text-gray-600">
                Goditi le festività regionali, come concerti jazz, fiere d'arte e eventi culinari tradizionali che celebrano il ricco patrimonio della Ciociaria.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Dintorni */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Dintorni</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Acuto Storico</h3>
              <p className="text-gray-600">
                Immergiti nella storia di Acuto passeggiando per i suoi vicoli acciottolati, ammirando archi antichi e chiese che risalgono ai tempi preromani.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Paesaggi Naturali</h3>
              <p className="text-gray-600">
                Goditi i boschi di castagni, gli uliveti e le vigne che si estendono sotto le maestose montagne degli Appennini, completati da un lago tranquillo.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Cultura Locale</h3>
              <p className="text-gray-600">
                Assapora i sapori tipici della regione, tra cui il vino Cesanese e formaggi artigianali, mentre scopri l'artigianato e le tradizioni della Ciociaria.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
