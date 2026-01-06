"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

/* ========= MOTION ========= */

const bgVariants = {
  initial: { scale: 1.01 },
  animate: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut", delay },
  }),
};

const lineGrow = {
  hidden: { scaleX: 0, opacity: 0.55 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.12 },
  },
};

const cardHover = {
  hover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

/* ========= CONTENT (unchanged) ========= */

const content = {
  en: {
    welcome: "Welcome Home!",
    tagline:
      "Experience the Tranquility of Nature and the Energy of Encounter in One Place.",
    bookButton: "Contact us to book!",
    bookButtonHref: "/booking",
    mission: "Nice to Meet You!",
    missionText: [
      "The Centro Studi Bahá’í – Hotel La Panoramica is immersed in a relaxing atmosphere, surrounded by lush nature, just 10 minutes from the spa resort of Fiuggi and less than an hour from Rome. Thanks to its unique panoramic position and large terrace overlooking the enchanting medieval village of Acuto (750 metres above sea level), the hotel offers a splendid view over the valleys of Ciociaria.",
      "Situated on a ridge of the Ernici Mountains and accessible from the Anagni-Fiuggi motorway exit and railway station, we offer functional and comfortable settings for conferences, seminars, business meetings, weddings, celebrations, and spiritual & wellness retreats. It is a starting point for excursions in the area on foot, by bicycle, and by car.",
      "Our 35 rooms include singles, doubles, triples, and quadruples. Book a conference room seating up to 140 members, featuring our audio and video systems. To dine, our restaurant hall seats 100 guests, offering traditional amd ethnic dishes, as well as vegetarian, vegan, lactose-free, and gluten-free options.",
      "We provide a serene environment and a comfortable refuge where guests can reconnect and forge new partnerships with the world around them, develop new skills, and discover other realities.",
    ],
    activities: "WE HOST",
    activity1Image: "/bahai-study-center-business-conference-meeting-room.webp",
    activity1Alt:
      "Business conference and seminar in the meeting room of the Bahá’í Study Center in Italy",
    activity1Title: "MEETINGS",
    activity1Text:
      "Organize conferences, retreats, community gatherings, workshops, artistic expressions, and cultural celebrations that foster a spirit of unity, encourage meaningful dialogue, and create spaces for collective reflection, learning, and inspiration across diverse groups.",
    activity2Image:
      "/bahai-study-center-outdoor-relaxation-area-business-meetings.webp",
    activity2Alt:
      "Outdoor relaxation area near the Bahá’í Study Center for business meeting participants",
    activity2Title: "GUIDED TOURS AND EXCURSIONS",
    activity2Text:
      "Explore the historic alleys of Acuto, the fountains of Fiuggi, the Cathedral of Anagni, the cyclopean walls of Alatri, and the jewels of Lazio villages. Challenge yourself on the breathtaking cycling routes and mountain trails of the Ernici and Simbruini hills. Discover ancient churches, medieval towers, and serene natural panoramas, including guided tours.",
    activity3Image: "/bahai-study-center-conference-room-corporate-events.webp",
    activity3Alt:
      "Conference room with seating and stage at the Bahá’í Study Center for corporate events",
    activity3Title: "CONFERENCE & STUDY FACILITIES",
    activity3Text:
      "The Conference Hall seats 150 and is equipped with free Wi-Fi, a projector, HD wall screen, video camera, sound system, microphones, and instruments for artistic performances. Two additional study halls, also with Wi-Fi and flexible seating, accommodate groups of up to 20.",
    surroundings: "OUR SURROUNDINGS OFFER:",
    surroundings1Image:
      "/bahai-study-center-team-building-nature-activities.webp",
    surroundings1Alt:
      "Team-building and group activities in nature near the Bahá’í Study Center",
    surroundings1Title: "HISTORIC ACUTO",
    surroundings1Text:
      "Immerse yourself in Acuto's past by walking through narrow cobbled alleys, ancient arches, and historic churches dating back to the 5th century AC.",
    surroundings2Image:
      "/bahai-study-center-natural-surroundings-business-retreats.webp",
    surroundings2Alt:
      "Natural surroundings and lake near the Bahá’í Study Center for business retreats",
    surroundings2Title: "NATURAL LANDSCAPES",
    surroundings2Text:
      "Enjoy chestnut forests, olive groves, and vineyards undulating beneath the majestic mountains of the Apennines, and reach serene Lake Canterno.",
    surroundings3Image: "/bahai-study-center-natural-landscape-olive-tree.webp",
    surroundings3Alt:
      "Olive tree branches in the natural landscape around the Bahá’í Study Center",
    surroundings3Title: "LOCAL CULTURE",
    surroundings3Text:
      "Savour the typical flavours such as extra virgin olive oil and artisanal cheeses as you explore the traditional crafts and customs of the Ciociaria territory.",
    videosTitle: "WHAT OUR GUESTS SAY",
  },

  it: {
    welcome: "Benvenuti a Casa!",
    tagline:
      "Vivi la tranquillità della natura e l'energia dell'incontro in un unico luogo.",
    bookButton: "Contattaci per prenotare!",
    bookButtonHref: "/it/booking",
    mission: "Conosciamoci!",
    missionText: [
      "Il Centro Studi Bahá’í - Hotel La Panoramica è immerso in un’atmosfera di relax a contatto con la natura, a soli 10 minuti dalla stazione termale di Fiuggi e a meno di un’ora da Roma. Grazie all’esclusiva posizione panoramica e alla grande terrazza affacciata sull’incantevole borgo medioevale di Acuto (750 metri s.l.m.), offre una splendida vista sulle vallate della Ciociaria.",
      "Situato su un costone dei Monti Ernici e raggiungibile dal casello autostradale e dalla stazione ferroviaria di Anagni-Fiuggi, offre ambienti funzionali e confortevoli per convegni, seminari, riunioni di lavoro e gruppi, matrimoni, celebrazioni, ritiri spirituali e di benessere. E' punto di partenza per escursioni sul territorio a piedi, in bici e macchina.",
      "Dotato di 35 camere, singole, doppie, triple, quadruple; una sala conferenza attrezzata di impianto audio e video, fino a 140 posti; una sala ristorante fino a 100 posti a sedere. Il Ristorante offre piatti tipici e tradizioni etniche, un menù personalizzato per vegetariani, vegani e per chi soffre d'intolleranze al glutine e lattosio",
      "Fornisce un ambiente sereno, un rifugio confortevole, dove gli ospiti possono riconnettersi con sé stessi e con il mondo che li circonda, sviluppare nuove capacità, scoprire altre realtà e progettare insieme.",
    ],
    activities: "OSPITIAMO",
    activity1Image: "/centro-studi-bahai-conferenza-meeting-aziendale.webp",
    activity1Alt:
      "Conferenza aziendale e seminario nella sala meeting del Centro Studi Bahá’í in Italia",
    activity1Title: "INCONTRI",
    activity1Text:
      "Organizza conferenze, ritiri, incontri comunitari, laboratori, espressioni artistiche e celebrazioni culturali che promuovono uno spirito di unità, incoraggiano un dialogo significativo e creano spazi per la riflessione collettiva, l’apprendimento e l’ispirazione tra gruppi diversi.",
    activity2Image: "/centro-studi-bahai-area-relax-esterna-meeting.webp",
    activity2Alt:
      "Area relax esterna vicino al Centro Studi Bahá’í per partecipanti a meeting aziendali",
    activity2Title: "TOUR GUIDATI ED ESCURSIONI",
    activity2Text:
      "Esplora i vicoli storici di Acuto, le meraviglie dell’antica Roma, la suggestiva Napoli, le fonti di Fiuggi, la Cattedrale di Anagni, le mura ciclopiche di Alatri, i gioielli di borghi laziali. Sfida te stesso sui percorsi ciclistici ed i sentieri montuosi mozzafiato dei colli Ernici e Simbruini. Scopri antiche chiese, torri medievali e sereni panorami naturali anche con tour guidati.",
    activity3Image: "/centro-studi-bahai-sala-conferenze-eventi-aziendali.webp",
    activity3Alt:
      "Sala conferenze con sedute e palco al Centro Studi Bahá’í per eventi aziendali",
    activity3Title: "SPAZI PER CONFERENZE E STUDIO",
    activity3Text:
      "La Sala Conferenze dispone di 150 posti a sedere ed è dotata di Wi-Fi gratuito, proiettore, schermo a parete in alta definizione, videocamera, impianto audio, microfoni e strumenti per performance artistiche. Due aule studio aggiuntive, anch’esse con Wi-Fi e sedute flessibili, possono accogliere gruppi fino a 20 persone.",
    surroundings: "I NOSTRI DINTORNI OFFRONO:",
    surroundings1Image:
      "/centro-studi-bahai-team-building-attivita-natura.webp",
    surroundings1Alt:
      "Attività di team-building e gruppo nella natura vicino al Centro Studi Bahá’í",
    surroundings1Title: "ACUTO STORICO",
    surroundings1Text:
      "Immergiti nel passato di Acuto passeggiando per stretti vicoli acciottolati, antichi archi e chiese storiche risalenti al V secolo DC.",
    surroundings2Image:
      "/centro-studi-bahai-paesaggio-naturale-ritiri-aziendali.webp",
    surroundings2Alt:
      "Paesaggio naturale con lago vicino al Centro Studi Bahá’í per ritiri aziendali",
    surroundings2Title: "PAESAGGI NATURALI",
    surroundings2Text:
      "Goditi boschi di castagni, uliveti e vigneti ondulati sotto le maestose montagne degli Appennini, raggiungete il sereno lago di Canterno.",
    surroundings3Image: "/centro-studi-bahai-uliveto-paesaggio-naturale.webp",
    surroundings3Alt:
      "Rami di ulivo nel paesaggio naturale intorno al Centro Studi Bahá’í",
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

/* ========= SMALL UI PIECES ========= */

function TrioCard({ label, title, text, imgSrc, imgAlt, href }) {
  return (
    <motion.a
      href={href || "#"}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={0}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      className="block rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      <div className="relative h-56">
        <Image
          src={imgSrc || "/blank-image.webp"}
          alt={imgAlt || ""}
          fill
          className="object-cover grayscale-[10%] contrast-[1.03] saturate-[0.96] hover:grayscale-0 hover:saturate-100 transition duration-500"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/10" />
      </div>

      <div className="p-7">
        <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
          {label}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-dark-brown tracking-tight">
          {title}
        </h3>
        <p className="mt-3 text-[15.5px] leading-relaxed text-gray-700">
          {text}
        </p>
      </div>

      <div className="border-t border-black/10 bg-white/60 px-7 py-4">
        <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
          Centro Studi Bahá&apos;í
        </div>
      </div>
    </motion.a>
  );
}

export default function Hero() {
  const heroImages = ["/bg1.webp", "/bg2.webp", "/bg3.webp", "/bg4.webp"];

  const [selectedVideo, setSelectedVideo] = useState("Marta");
  const [currentIndex, setCurrentIndex] = useState(0);

  const { language } = useLanguage();
  const text = content[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <main className="relative bg-[#f0e8e4] overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[95px]" />
        <div className="absolute top-[720px] -left-56 h-[560px] w-[560px] rounded-full bg-[#cb956f]/14 blur-[120px]" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[640px] w-[640px] rounded-full bg-orange-600/10 blur-[140px]" />
      </div>

      {/* HERO SLIDER */}
      <div className="relative h-[92vh] min-h-[680px] overflow-hidden">
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

                <div className="absolute inset-0 bg-black/55" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%)]" />
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* arrows */}
        <button
          onClick={handlePrev}
          className="absolute z-50 left-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-colors"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute z-50 right-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-colors"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* hero copy */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-6">
          <motion.section
            initial="hidden"
            animate="show"
            className="w-full max-w-5xl"
          >
            <div className="rounded-[2.75rem] border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="p-10 md:p-14 text-center">
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="text-xs tracking-[0.32em] uppercase text-white/80"
                >
                  Centro Studi Bahá&apos;í
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={0.08}
                  className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-white"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 6px 18px rgba(0,0,0,0.65)",
                  }}
                >
                  {text.welcome}
                </motion.h1>          

                <motion.div
                  variants={fadeUp}
                  custom={0.16}
                  className="mt-6 flex justify-center"
                >
                  <motion.div
                    variants={lineGrow}
                    className="h-px w-64 origin-left bg-white/55"
                  />
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  custom={0.22}
                  className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed"
                  style={{ textShadow: "0 6px 18px rgba(0,0,0,0.55)" }}
                >
                  {text.tagline}
                </motion.p>

                <motion.div variants={fadeUp} custom={0.3} className="mt-10">
                  <motion.a href={text.bookButtonHref || "#"} className="inline-block">
                    <Button className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md shadow-lg active:scale-95">
                      {text.bookButton}
                    </Button>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="relative">
        <div className="container mx-auto max-w-6xl px-6 py-16 space-y-12">
          {/* MISSION / INTRO */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <div className="p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                    Welcome
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
                    {text.mission}
                  </h2>
                </div>

                <div className="hidden md:block">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={lineGrow}
                    className="h-px w-72 origin-left bg-black/20"
                  />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* text card */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                    <div className="p-8">
                      <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                        Overview
                      </div>

                      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-gray-800">
                        {text.missionText.map((paragraph, index) => (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                      <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                        Ciociaria, Lazio
                      </div>
                    </div>
                  </div>
                </div>

                {/* image card */}
                <div className="lg:col-span-5">
                  <motion.div variants={cardHover} whileHover="hover" className="relative h-full">
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[420px] md:h-full min-h-[420px]">
                      <Image
                        src="/bg2.webp"
                        alt="Panoramic view near Centro Studi Bahá’í"
                        fill
                        className="object-cover grayscale-[10%] contrast-[1.03] saturate-[0.96]
                                   group-hover:grayscale-0 group-hover:saturate-100
                                   transition duration-500"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* WE HOST */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <div className="p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                    Programs
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
                    {text.activities}
                  </h2>
                </div>

                <div className="hidden md:block">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={lineGrow}
                    className="h-px w-72 origin-left bg-black/20"
                  />
                </div>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                <TrioCard
                  label="We host"
                  title={text.activity1Title}
                  text={text.activity1Text}
                  imgSrc={text.activity1Image}
                  imgAlt={text.activity1Alt}
                  href="/activities#conferences"
                />
                <TrioCard
                  label="We host"
                  title={text.activity2Title}
                  text={text.activity2Text}
                  imgSrc={text.activity2Image}
                  imgAlt={text.activity2Alt}
                  href="/activities#team-building"
                />
                <TrioCard
                  label="We host"
                  title={text.activity3Title}
                  text={text.activity3Text}
                  imgSrc={text.activity3Image}
                  imgAlt={text.activity3Alt}
                  href="/activities#conferences"
                />
              </div>
            </div>
          </motion.section>

          {/* SURROUNDINGS */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <div className="p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                    Explore
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
                    {text.surroundings}
                  </h2>
                </div>

                <div className="hidden md:block">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={lineGrow}
                    className="h-px w-72 origin-left bg-black/20"
                  />
                </div>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                <TrioCard
                  label="Surroundings"
                  title={text.surroundings1Title}
                  text={text.surroundings1Text}
                  imgSrc={text.surroundings1Image}
                  imgAlt={text.surroundings1Alt}
                  href="/surroundings"
                />
                <TrioCard
                  label="Surroundings"
                  title={text.surroundings2Title}
                  text={text.surroundings2Text}
                  imgSrc={text.surroundings2Image}
                  imgAlt={text.surroundings2Alt}
                  href="/surroundings"
                />
                <TrioCard
                  label="Surroundings"
                  title={text.surroundings3Title}
                  text={text.surroundings3Text}
                  imgSrc={text.surroundings3Image}
                  imgAlt={text.surroundings3Alt}
                  href="/surroundings"
                />
              </div>
            </div>
          </motion.section>

          {/* GUEST VIDEOS */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <div className="p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                    Testimonials
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
                    {text.videosTitle}
                  </h2>
                </div>

                <div className="hidden md:block">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={lineGrow}
                    className="h-px w-72 origin-left bg-black/20"
                  />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* controls */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                    <div className="p-8">
                      <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                        Select a guest
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {Object.keys(videos).map((key) => {
                          const active = selectedVideo === key;
                          return (
                            <button
                              key={key}
                              onClick={() => setSelectedVideo(key)}
                              className={`rounded-md px-4 py-3 text-sm font-semibold border border-black/10 transition
                                ${
                                  active
                                    ? "bg-orange-600 text-white shadow-[0_10px_22px_rgba(234,88,12,0.20)]"
                                    : "bg-white/70 text-gray-800 hover:bg-white"
                                }`}
                            >
                              {key}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-6 text-[15.5px] leading-relaxed text-gray-700">
                        Short stories from guests who found focus, rest, and connection at the Centro.
                      </div>
                    </div>

                    <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                      <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                        Centro Studi Bahá&apos;í
                      </div>
                    </div>
                  </div>
                </div>

                {/* video */}
                <div className="lg:col-span-7">
                  <motion.div variants={cardHover} whileHover="hover" className="relative h-full">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[420px] md:h-[520px]">
                      <iframe
                        key={selectedVideo}
                        src={videos[selectedVideo]}
                        title="Guest video"
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/8" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
