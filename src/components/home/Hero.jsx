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
    mission: "Nice to Meet You!",
    missionText: [
      "The Centro Studi Bahá’í - Hotel La Panoramica, is immersed in a relaxing atmosphere, surrounded by luscious nature, just 10 minutes from the spa resort of Fiuggi and less than an hour from Rome. Thanks to its unique panoramic position and large terrace overlooking the enchanting medieval village of Acuto (750 metres above sea level), it offers a splendid view over the valleys of Ciociaria.",
      "Situated on a ridge of the Ernici Mountains and accessible from the Anagni-Fiuggi motorway exit and railway station, it offers functional and comfortable settings for conferences, seminars, business meetings, weddings, celebrations, spiritual and wellness retreats. It is a starting point for excursions in the area on foot, by bicycle and by car.",
      "Equipped with 35 rooms,single, doubles, triple, quadruple; a conference room featuring audio and video systems, up to 140 seats; a restaurant hall that seats up to 100 people.",
      "We provide a serene environment and a comfortable refuge, where guests can reconnect and forge new partnerships with the world around them, develop new skills, discover other realities and plan together.",
      'Inspired by the Bahá’í faith.',
    ],
    activities: "WE HOST",
    activity1Title: "MEETINGS",
    activity1Text:
      "Organize conferences, retreats, community gatherings, workshops, artistic expressions, and cultural celebrations that foster a spirit of unity, encourage meaningful dialogue, and create spaces for collective reflection, learning, and inspiration across diverse groups.",
    activity2Title: "GUIDED TOURS AND EXCURSIONS",
    activity2Text:
      "Explore the historic alleys of Acuto, the fountains of Fiuggi, the Cathedral of Anagni, the cyclopean walls of Alatri, and the jewels of Lazio villages. Challenge yourself on the breathtaking cycling routes and mountain trails of the Ernici and Simbruini hills. Discover ancient churches, medieval towers, and serene natural panoramas, also with guided tours.",
    activity3Title: "CONFERENCE & STUDY FACILITIES",
    activity3Text:
      "The Conference Hall seats 150 and is equipped with free Wi-Fi, a projector, HD wall screen, video camera, sound system, microphones, and instruments for artistic performances. Two additional study halls, also with Wi-Fi and flexible seating, accommodate groups of up to 20.",
    surroundings: "OUR SURROUNDINGS OFFER:",
    surroundings1Title: "HISTORIC ACUTO",
    surroundings1Text:
      "Immerse yourself in Acuto's past by walking through narrow cobbled alleys, ancient arches, and historic churches dating back to the V century AC.",
    surroundings2Title: "NATURAL LANDSCAPES",
    surroundings2Text:
      "Enjoy chestnut forests, olive groves, and vineyards undulating beneath the majestic mountains of the Apennines, and reach the serene Lake Canterno.",
    surroundings3Title: "LOCAL CULTURE",
    surroundings3Text:
      "Savour the typical flavours such as the extra virgin olive oil and artisanal cheeses as you explore the traditional crafts and customs of the Ciociaria territory.",
    videosTitle: "WHAT OUR GUESTS SAY",
  },

  it: {
    welcome: "Benvenuto a Casa!",
    tagline:
      "Vivi la tranquillità della natura e l'energia dell'incontro in un unico luogo.",
    bookButton: "Contattaci per prenotare!",
    mission: "Conosciamoci!",
    missionText: [
      "Il Centro Studi Bahá’í - Hotel La Panoramica è immerso in un’atmosfera di relax a contatto con la natura, a soli 10 minuti dalla stazione termale di Fiuggi e a meno di un’ora da Roma. Grazie all’esclusiva posizione panoramica e alla grande terrazza affacciata sull’incantevole borgo medioevale di Acuto (750 metri s.l.m.), offre una splendida vista sulle vallate della Ciociaria.",
      "Situato su un costone dei Monti Ernici e raggiungibile dal casello autostradale e dalla stazione ferroviaria di Anagni-Fiuggi, offre ambienti funzionali e confortevoli per convegni, seminari, riunioni di lavoro e gruppi, matrimoni, celebrazioni, ritiri spirituali e di benessere. E' punto di partenza per escursioni sul territorio a piedi, in bici e macchina.",
      "Dotato di 35 camere, singole, doppie, triple, quadruple; una sala conferenza attrezzata di impianto audio e video, fino a 140 posti; una sala ristorante fino a 100 posti a sedere.",
      "Fornisce un ambiente sereno, un rifugio confortevole, dove gli ospiti possono riconnettersi con sé stessi e con il mondo che li circonda, sviluppare nuove capacità, scoprire altre realtà e progettare insieme.",
      'Ispirati dagli insegnamenti della Fede Bahá’í .',
    ],
    activities: "OSPITIAMO",
    activity1Title: "INCONTRI",
    activity1Text:
      "Organizza conferenze, ritiri, incontri comunitari, laboratori, espressioni artistiche e celebrazioni culturali che promuovono uno spirito di unità, incoraggiano un dialogo significativo e creano spazi per la riflessione collettiva, l’apprendimento e l’ispirazione tra gruppi diversi.",
    activity2Title: "TOUR GUIDATI ED ESCURSIONI",
    activity2Text:
      "Esplora i vicoli storici di Acuto, le meraviglie dell’antica Roma, la suggestiva Napoli, le fonti di Fiuggi, la Cattedrale di Anagni, le mura ciclopiche di Alatri, i gioielli di borghi laziali. Sfida te stesso sui percorsi ciclistici ed i sentieri montuosi mozzafiato dei colli Ernici e Simbruini. Scopri antiche chiese, torri medievali e sereni panorami naturali anche con tour guidati.",
    activity3Title: "SPAZI PER CONFERENZE E STUDIO",
    activity3Text:
      "La Sala Conferenze dispone di 150 posti a sedere ed è dotata di Wi-Fi gratuito, proiettore, schermo a parete in alta definizione, videocamera, impianto audio, microfoni e strumenti per performance artistiche. Due aule studio aggiuntive, anch’esse con Wi-Fi e sedute flessibili, possono accogliere gruppi fino a 20 persone.",
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
    videosTitle: "COSA DICONO I NOSTRI OSPITI",
  },
};

const videos = {
  Marta: "https://www.youtube.com/embed/83X-dRhhNUA",
  Celine: "https://www.youtube.com/embed/EFJWqQzpLSw",
  Rossella: "https://www.youtube.com/embed/vJnkkIHWfms",
  Fabrizio: "https://www.youtube.com/embed/-ZP_KY5jwuQ",
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

  const [selectedVideo, setSelectedVideo] = useState("Marta");

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
            className="text-gray-700 max-w-3xl mx-auto space-y-4"
          >
            {text.missionText.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
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
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: text.activity3Text }}
              ></p>
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

        {/* Video Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fancySectionVariants}
          custom={0.3}
          className="text-center"
        >
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {text.videosTitle}
              </h2>

              {/* Buttons to switch videos */}
              <div className="flex justify-center flex-wrap gap-4 mb-6">
                {Object.keys(videos).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedVideo(key)}
                    className={`px-4 py-2 rounded-md transition ${
                      selectedVideo === key
                        ? "bg-[var(--accent-red)] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              {/* Responsive video wrapper */}
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <iframe
                  key={selectedVideo}
                  src={videos[selectedVideo]}
                  title="Room video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </div>
            </div>
          </section>
        </motion.section>
      </div>
    </div>
  );
}
