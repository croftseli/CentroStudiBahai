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
  visible: { scaleX: 1.25, transition: { duration: 2, ease: "easeOut", delay: 1 } },
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
    welcome: "Welcome to Our Sacred Retreat",
    tagline:
      "Experience the tranquility of nature, tradition, and modern comfort in one place.",
    bookButton: "Inquire about your stay",
    mission: "Our Mission",
    missionText: "At Spirit Grove we believe in the transformative power of nature, mindfulness, and community. Our mission is to provide a serene and supportive environment where guests can reconnect with themselves and the world around them.",
    activities: "Services",
    activity1Title: "Community Gatherings",
    activity1Text: "Participate in local events and gatherings featuring music, poetry, and cultural celebrations that embody unity and collective reflection.",
    activity2Title: "Guided Tours & Hikes",
    activity2Text: "Explore Acuto's historic alleys and breathtaking mountain trails. Discover ancient churches, medieval towers, and serene natural vistas on our guided tours.",
    activity3Title: "Seasonal Festivals",
    activity3Text: "Enjoy regional festivities such as jazz concerts, art fairs, and traditional culinary events that celebrate the rich heritage of Ciociaria.",
    surroundings: "Surroundings",
    surroundings1Title: "Historic Acuto",
    surroundings1Text: "Immerse yourself in Acuto's storied past by wandering narrow, cobbled alleys, ancient arches, and historic churches dating from pre-Roman times.",
    surroundings2Title: "Natural Landscapes",
    surroundings2Text: "Enjoy chestnut woods, olive groves, and rolling vineyards under the majestic Apennine Mountains, accompanied by a serene lake.",
    surroundings3Title: "Local Culture",
    surroundings3Text: "Savor local flavors like Cesanese wine and artisanal cheeses while exploring traditional crafts and customs of the Ciociaria region."
  },
  it: {
    welcome: "Benvenuti nel Nostro Rifugio Sacro",
    tagline: "Vivi la tranquillità della natura, la tradizione e il comfort moderno in un unico posto.",
    bookButton: "Richiedi informazioni sul tuo soggiorno",
    mission: "La Nostra Missione",
    missionText: "A Spirit Grove crediamo nel potere trasformativo della natura, della consapevolezza e della comunità. La nostra missione è fornire un ambiente sereno e di supporto dove gli ospiti possono riconnettersi con se stessi e con il mondo che li circonda.",
    activities: "Servizi",
    activity1Title: "Incontri Comunitari",
    activity1Text: "Partecipa a eventi locali e incontri con musica, poesia e celebrazioni culturali che incarnano l'unità e la riflessione collettiva.",
    activity2Title: "Tour Guidati ed Escursioni",
    activity2Text: "Esplora i vicoli storici di Acuto e i sentieri montuosi mozzafiato. Scopri antiche chiese, torri medievali e sereni panorami naturali nei nostri tour guidati.",
    activity3Title: "Festival Stagionali",
    activity3Text: "Goditi le festività regionali come concerti jazz, fiere d'arte ed eventi culinari tradizionali che celebrano il ricco patrimonio della Ciociaria.",
    surroundings: "Dintorni",
    surroundings1Title: "Acuto Storico",
    surroundings1Text: "Immergiti nel passato di Acuto passeggiando per stretti vicoli acciottolati, antichi archi e chiese storiche risalenti all'epoca pre-romana.",
    surroundings2Title: "Paesaggi Naturali",
    surroundings2Text: "Goditi boschi di castagni, uliveti e vigneti ondulati sotto le maestose montagne degli Appennini, accompagnati da un sereno lago.",
    surroundings3Title: "Cultura Locale",
    surroundings3Text: "Assapora i sapori locali come il vino Cesanese e i formaggi artigianali mentre esplori l'artigianato tradizionale e i costumi della regione Ciociaria."
  }
};

export default function Hero() {
  const heroImages = [
    "/view1.jpg",
    "/view2.jpg",
    "/view3.jpg",
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
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
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
            style={{ color: "white", textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}
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
              textShadow: "0 5px 15px rgba(0,0,0,1)"
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
            className="text-gray-700 max-w-3xl mx-auto">
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
          <h2 className="text-4xl font-bold text-center mb-8">{text.activities}</h2>
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
              <h3 className="text-xl font-semibold mb-2">{text.activity1Title}</h3>
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
              <h3 className="text-xl font-semibold mb-2">{text.activity2Title}</h3>
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
              <h3 className="text-xl font-semibold mb-2">{text.activity3Title}</h3>
              <p className="text-gray-600">{text.activity3Text}</p>
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
            <svg width="100%" height="20" viewBox="-200 0 500 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-200 10 H40 C45 0, 55 0, 60 10 H300" stroke="#cb956f" strokeWidth="4" fill="transparent" />
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
          <h2 className="text-4xl font-bold text-center mb-8">{text.surroundings}</h2>
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
              <h3 className="text-xl font-semibold mb-2">{text.surroundings1Title}</h3>
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
              <h3 className="text-xl font-semibold mb-2">{text.surroundings2Title}</h3>
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
              <h3 className="text-xl font-semibold mb-2">{text.surroundings3Title}</h3>
              <p className="text-gray-600">{text.surroundings3Text}</p>
            </motion.div>
          </div>
        </motion.section>
        </div>
    </div>
  );
}