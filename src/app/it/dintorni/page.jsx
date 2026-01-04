"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

function SurroundingsBlock({
  kicker = "Dintorni",
  title,
  body,
  imgSrc,
  imgAlt,
  reverse = false,
  tall = false,
  children,
}) {
  return (
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
              {kicker}
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
              {title}
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

        <div
          className={`mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* TEXT CARD */}
          <div className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
              <div className="p-8">
                <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                  Panoramica
                </div>

                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-gray-800">
                  {body}
                  {children}
                </div>
              </div>

              <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                  Centro Studi Bahá&apos;í
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE CARD */}
          <div className={`lg:col-span-7 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <motion.div variants={cardHover} whileHover="hover" className="relative h-full">
              <div
                className={`group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 ${
                  tall ? "h-[520px] md:h-[670px]" : "h-[420px] md:h-[520px]"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  className="object-cover grayscale-[12%] contrast-[1.03] saturate-[0.96]
                             group-hover:grayscale-0 group-hover:saturate-100
                             transition duration-500"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Explore() {
  return (
    <main className="relative bg-[#f0e8e4] overflow-hidden">
      {/* optional soft glow (keep if you want) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[90px]" />
        <div className="absolute top-[420px] -left-48 h-[520px] w-[520px] rounded-full bg-[#cb956f]/14 blur-[110px]" />
        <div className="absolute bottom-[-240px] right-[-200px] h-[560px] w-[560px] rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-6 py-16 space-y-12">
        {/* HERO */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative text-center rounded-[2.75rem] border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_22px_80px_rgba(0,0,0,0.10)] overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.90),rgba(255,255,255,0.35),transparent_70%)]" />
          <div className="relative px-8 py-14 md:py-16">
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-6xl font-semibold text-dark-brown tracking-tight"
            >
              Esplora i Dintorni
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={0.12}
              className="mx-auto mt-6 flex justify-center"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={lineGrow}
                className="h-px w-64 origin-left bg-black/25"
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={0.2} className="mt-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-900 font-medium tracking-wide">
                Dove andiamo? Cosa facciamo? Cosa mangiamo?
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                Lasciatevi guidare alla scoperta degli affascinanti dintorni della nostra regione.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.3} className="mt-10">
              <button
                onClick={() => window.open("https://comune.acuto.fr.it/", "_blank")}
                className="inline-flex items-center justify-center px-11 py-4 rounded-full text-lg font-semibold
                           bg-orange-600 text-white hover:bg-orange-700
                           border border-black/10
                           shadow-[0_10px_26px_rgba(0,0,0,0.18)]
                           transition-all"
              >
                Visualizza Eventi Locali
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Nearby Attractions */}
        <SurroundingsBlock
          title="Attrazioni nelle Vicinanze"
          imgSrc="/images/bahai-study-center-beach-relaxation-nearby.webp"
          imgAlt="Spiaggia sabbiosa vicino al Centro Studi Bahá’í ideale per il relax dopo incontri di lavoro"
          body={
            <ul className="space-y-3">
              {[
                "Terme di Fiuggi – 10 minuti (20 minuti dal Lago di Canterno)",
                "Roma – 76 km (55 minuti)",
                "Napoli – 180 km (1 ora e mezza)",
                "Outlet di Valmontone – 30 km",
                "Comprensorio Sciistico di Campocatino – 40 km",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-orange-600/80 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          }
        />

        {/* Nature & Gastronomy */}
        <SurroundingsBlock
          title="Natura e Gastronomia"
          reverse
          imgSrc="/images/bahai-study-center-homemade-pasta-local-cuisine.webp"
          imgAlt="Pasta fatta in casa e cucina tradizionale locale vicino al Centro Studi Bahá’í"
          body={
            <p>
              Sentieri, laghi, castagneti e uliveti circondano la struttura.
              La regione è rinomata per il suo olio extravergine di oliva e per i formaggi
              di pecora e di capra, tra i prodotti più ricercati del territorio.
            </p>
          }
        />

        {/* Discover Ciociaria */}
        <SurroundingsBlock
          kicker="Ciociaria"
          title="Scopri la Ciociaria"
          tall
          imgSrc="/images/bahai-study-center-waterfall-natural-attraction-nearby.webp"
          imgAlt="Suggestiva cascata vicino al Centro Studi Bahá’í per escursioni nella natura e relax"
          body={
            <>
              <p>
                La Ciociaria offre un ricco intreccio di bellezze culturali,
                storiche e naturali, dai borghi antichi ai luoghi di spiritualità.
              </p>

              <div className="text-xs tracking-[0.28em] uppercase text-gray-500 pt-2">
                Da vivere!
              </div>

              <ul className="space-y-2">
                {[
                  "Anagni – La Città dei Papi, celebre per la sua storia medievale e il suo valore religioso",
                  "Alatri – Famosa per le antiche mura poligonali e l’Acropoli ben conservata",
                  "Ferentino – Città leggendaria fondata da Saturno, con imponenti mura in pietra",
                  "Fiuggi – Una delle principali località termali d’Europa, nota per le sue acque curative",
                  "Fumone – Borgo medievale con fortezza, un tempo prigione di Papa Celestino V",
                  "Vico nel Lazio – Borgo medievale perfettamente conservato",
                  "Guarcino – Conosciuto per il prosciutto e i suggestivi paesaggi montani",
                  "Certosa di Trisulti – Monastero di montagna con antica farmacia e biblioteca",
                  "Filettino – Il comune più alto del Lazio, meta per sci ed escursionismo",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-[#cb956f] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          }
        />

        {/* Hiking and Biking Trails */}
        <SurroundingsBlock
          title="Percorsi per Trekking e Bicicletta"
          reverse
          imgSrc="/images/bahai-study-center-lakeside-picnic-area-business-retreats.webp"
          imgAlt="Area picnic sul lago vicino al Centro Studi Bahá’í per pause durante ritiri aziendali"
          body={
            <p>
              Chiedete delle nostre guide professionali!
            </p>
          }
        />
      </div>
    </main>
  );
}
