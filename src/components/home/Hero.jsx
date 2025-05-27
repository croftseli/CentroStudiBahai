"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
// TODO: bigger, centered card titles. Hover animation and click function
// Background image animation variants
const bgVariants = {
  initial: { scale: 1.01 },
  animate: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay,
    },
  }),
};
// Underline animation variants
const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1.25,
    transition: { duration: 2, ease: "easeOut", delay: 1 },
  },
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

// Content for different languages
const content = {
  en: {
    welcome: "Welcome Home!",
    tagline:
      "Experience the tranquillity of nature and the energy of encounter in one place.",
    bookButton: "Contact us to book!",
    mission: "Our Mission",
    missionText:
      "Our mission is to provide a serene environment and a comfortable refuge, where guests can reconnect with themselves and forge new partnerships with the world around them, develop new skills, discover other realities and plan together.",
    activities: "WE HOST",
    activity1Title: "MEETINGS",
    activity1Text:
      "Organise conferences, retreats, community gatherings, workshops, artistic expressions, and cultural celebrations that embody unity and collective reflection.",
    activity2Title: "GUIDED TOURS AND EXCURSIONS",
    activity2Text:
      "Explore the historic alleys of Acuto, the fountains of Fiuggi, the Cathedral of Anagni, the cyclopean walls of Alatri, and the jewels of Lazio villages. Challenge yourself on the breathtaking cycling routes and mountain trails of the Ernici and Simbruini hills. Discover ancient churches, medieval towers, and serene natural panoramas, also with guided tours.",
    activity3Title: "SEASONAL FESTIVALS",
    activity3Text:
      "Enjoy regional festivities such as jazz concerts, art and traditional fairs, culinary and social events that celebrate the rich heritage of Ciociaria. ",
    surroundings: "OUR SURROUNDINGS OFFER:",
    surroundings1Title: "HISTORIC ACUTO",
    surroundings1Text:
      "Immerse yourself in Acuto's past by walking through narrow cobbled alleys, ancient arches, and historic churches dating back to the V century AC.",
    surroundings2Title: "NATURAL LANDSCAPES",
    surroundings2Text:
      "Enjoy chestnut forests, olive groves, and vineyards undulating beneath the majestic mountains of the Apennines, and reach the serene Lake Canterno.",
    surroundings3Title: "Local Culture",
    surroundings3Text:
      "Savour the typical flavours such as the extra virgin olive oil and artisanal cheeses as you explore the traditional crafts and customs of the Ciociaria territory.",
  },
  it: {
    welcome: "Benvenuto a Casa!",
    tagline:
      "Vivi la tranquillità della natura e l'energia dell'incontro in un unico luogo.",
    bookButton: "Contattaci per prenotare!",
    mission: "La Nostra Missione",
    missionText:
      "La nostra missione è fornire un ambiente sereno, un rifugio confortevole, dove gli ospiti possono riconnettersi con sé stessi e con il mondo che li circonda, sviluppare nuove capacità, scoprire altre realtà e progettare insieme.",
    activities: "OSPITIAMO",
    activity1Title: "INCONTRI",
    activity1Text:
      "Organizza conferenze, ritiri, incontri comunitari, di studio e di espressioni artistiche, celebrazioni culturali che incarnano l'unità e la riflessione collettiva.",
    activity2Title: "TOUR GUIDATI ED ESCURSIONI",
    activity2Text:
      "Esplora i vicoli storici di Acuto, le meraviglie dell’antica Roma, la suggestiva Napoli, le fonti di Fiuggi, la Cattedrale di Anagni, le mura ciclopiche di Alatri, i gioielli di borghi laziali. Sfida te stesso sui percorsi ciclistici ed i sentieri montuosi mozzafiato dei colli Ernici e Simbruini. Scopri antiche chiese, torri medievali e sereni panorami naturali anche con tour guidati.",
    activity3Title: "FESTIVAL STAGIONALI",
    activity3Text:
      "Goditi gli eventi regionali come concerti jazz, fiere d'arte e tradizione, eventi culinari e sociali che celebrano il ricco patrimonio della Ciociaria. ",
    surroundings: "I NOSTRI DINTORNI OFFRONO:",
    surroundings1Title: "ACUTO STORICO",
    surroundings1Text:
      "Immergiti nel passato di Acuto passeggiando per stretti vicoli acciottolati, antichi archi e chiese storiche risalenti al V secolo DC.",
    surroundings2Title: "PAESAGGI NATURALI",
    surroundings2Text:
      "Goditi boschi di castagni, uliveti e vigneti ondulati sotto le maestose montagne degli Appennini, raggiungete il sereno lago di Canterno.",
    surroundings3Title: "CULTURA LOCALE",
    surroundings3Text:
      "Assapora le eccellenze del territorio come l’olio extravergine di oliva e i formaggi artigianali mentre esplori l'artigianato tradizionale e i costumi della Ciociaria.",
  },
};

export default function Hero() {
  const heroImages = [
    "/view1.jpg",
    "/view2.jpg",
    "/view3.jpg",
    "/view4.jpg",
    "/view5.jpg",
    "/view6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const text = content[language];

  // Rotate images automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="relative w-full text-lg md:text-xl">
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
          <div className="max-w-3xl">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0} //delay
              className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
              style={{
                color: "white",
                textShadow: "0 4px 12px rgba(0,0,0,0.9)",
              }}
            >
              {text.welcome}
            </motion.h1>

            <motion.div
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
              className="h-1 bg-white w-1/2 mx-auto mt-2"
            />

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="mt-4 mb-6 font-serif font-bold"
              style={{
                color: "white",
                fontSize: "1.125rem",
                textShadow: "0 5px 15px rgba(0,0,0,1)",
              }}
            >
              {text.tagline}
            </motion.p>

            <motion.a
              href="/contactUs"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.75}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md shadow-lg active:scale-95">
                {text.bookButton}
              </Button>
            </motion.a>
          </div>
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
          <h2 className="text-4xl font-bold mb-4">{text.mission}</h2>

          <motion.div
            variants={fancySectionVariants}
            custom={0.5}
            className="text-gray-700 max-w-3xl mx-auto"
          >
            {text.missionText}
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0.3}
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            {text.activities}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0} // delay
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity1.jpg"
                  alt={text.activity1Title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.activity1Title}
              </h3>
              <p className="text-gray-600">{text.activity1Text}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0.5}
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity2.jpg"
                  alt={text.activity2Title}
                  fill
                  className="object-cover [object-position:50%_20%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.activity2Title}
              </h3>
              <p className="text-gray-600">{text.activity2Text}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0.75}
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/activity3.jpg"
                  alt={text.activity3Title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.activity3Title}
              </h3>
              <p className="text-gray-600">
                {text.activity3Text}
                <a
                  href={
                    language === "en"
                      ? "http://www.visitacuto.it/?lang=en"
                      : "http://www.visitacuto.it"
                  }
                  className="underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visitacuto.it
                </a>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={fancySectionVariants}
            custom={0}
            className="w-full flex justify-center"
          >
            <svg
              width="100%"
              height="20"
              viewBox="-200 0 500 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-200 10 H40 C45 0, 55 0, 60 10 H300"
                stroke="#cb956f"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </motion.div>
        </motion.section>

        {/* Surroundings Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0.3}
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            {text.surroundings}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings1.jpg"
                  alt={text.surroundings1Title}
                  fill
                  className="object-cover [object-position:50%_100%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.surroundings1Title}
              </h3>
              <p className="text-gray-600">{text.surroundings1Text}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings2.jpg"
                  alt={text.surroundings2Title}
                  fill
                  className="object-cover [object-position:30%_100%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.surroundings2Title}
              </h3>
              <p className="text-gray-600">{text.surroundings2Text}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fancySectionVariants}
              custom={0.75}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-xl shadow-lg p-6 bg-gray-50 overflow-hidden rounded-md"
            >
              <div className="relative h-60 mb-4">
                <Image
                  src="/surroundings3.jpg"
                  alt={text.surroundings3Title}
                  fill
                  className="object-cover [object-position:50%_65%]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {text.surroundings3Title}
              </h3>
              <p className="text-gray-600">{text.surroundings3Text}</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
