"use client";

import Image from "next/image";
import { useEffect } from "react";
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

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const sectionId = hash.replace("#", "");
  const section = document.getElementById(sectionId);
  if (!section) return;

  const headerOffset = 100;
  const elementPosition =
    section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition - headerOffset,
    behavior: "smooth",
  });
}

function ActivityBlock({ id, title, body, imgSrc, imgAlt, reverse = false }) {
  return (
    <motion.section
      id={id}
      aria-label={title}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
    >
      <div className="p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
              Attività
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown tracking-tight mt-2">
              {title}
            </h2>
          </div>

          <div className="hidden md:block">
            <motion.div
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
          {/* TEXT */}
          <div className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] h-full overflow-hidden">
              <div className="p-8">
                <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                  Panoramica
                </div>

                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-gray-800">
                  {body}
                </div>
              </div>

              <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                  Centro Studi Bahá&apos;í
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className={`lg:col-span-7 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <motion.div variants={cardHover} whileHover="hover" className="relative h-full">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[420px] md:h-[520px]">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  className="object-cover grayscale-[12%] contrast-[1.03] saturate-[0.96]
                             group-hover:grayscale-0 group-hover:saturate-100
                             transition duration-500"
                  sizes="(min-width: 1024px) 60vw, 100vw"
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

export default function ActivitiesPage() {
  useEffect(() => {
    scrollToHash();
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <main className="relative bg-[#f0e8e4] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 py-16 space-y-12">
        {/* HERO */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative text-center rounded-[2.75rem] border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_22px_80px_rgba(0,0,0,0.10)] overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0.35),transparent_70%)]" />
          <div className="relative px-8 py-14 md:py-16">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold text-dark-brown tracking-tight"
            >
              Attività al Centro Studi Bahá&apos;í
            </motion.h1>

            <motion.div className="mx-auto mt-6 flex justify-center">
              <motion.div variants={lineGrow} className="h-px w-64 bg-black/25" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Spazi pensati per concentrazione, comunità, celebrazione e rigenerazione.
            </motion.p>
          </div>
        </motion.section>

        <ActivityBlock
          id="conferences"
          title="Conferenze e Formazione"
          imgSrc="/images/bahai-study-center-meeting-room-relaxation-space.webp"
          imgAlt="Sala riunioni al Centro Studi Bahá’í"
          body={
            <p>
              Un ambiente professionale e accogliente, lontano dal caos urbano,
              è essenziale per un lavoro efficace. Il Centro dispone di una grande
              sala conferenze e di sale più piccole, adattabili a seminari,
              incontri e laboratori di gruppo.
            </p>
          }
        />

        <ActivityBlock
          id="team-building"
          title="Team Building e Ritiri"
          reverse
          imgSrc="/images/bahai-study-center-team-retreat.webp"
          imgAlt="Team building al Centro Studi Bahá’í"
          body={
            <p>
              Ideale per piccoli gruppi in cerca di connessione e rinnovamento,
              il territorio offre numerose attività: equitazione, rafting sul
              fiume Aniene, parapendio, arrampicata, trekking, escursioni culturali
              o semplicemente relax nella natura.
            </p>
          }
        />

        <ActivityBlock
          id="weddings"
          title="Riunioni Familiari e Matrimoni"
          imgSrc="/images/bahai-study-center-wedding-venue-corporate-events.webp"
          imgAlt="Matrimonio al Centro Studi Bahá’í"
          body={
            <>
              <p>
                Che si tratti di una riunione di famiglia o del matrimonio dei
                vostri sogni, il Centro offre una cornice indimenticabile.
              </p>
              <p>
                Spazi interni ed esterni accolgono gruppi piccoli o numerosi,
                con personale esperto pronto ad accompagnarvi dalla cerimonia
                al ricevimento.
              </p>
            </>
          }
        />

        <ActivityBlock
          id="yoga-retreats"
          title="Ritiri di Yoga e Arti Marziali"
          reverse
          imgSrc="/images/bahai-study-center-yoga-meditation-business-retreats.webp"
          imgAlt="Yoga e meditazione al Centro Studi Bahá’í"
          body={
            <p>
              Da oltre 20 anni ospitiamo gruppi di yoga, tai chi e taekwondo.
              Sale spaziose e aree esterne silenziose offrono condizioni ideali
              per meditazione e movimento.
            </p>
          }
        />

        <ActivityBlock
          id="biking"
          title="Turismo Lento e Cicloturismo"
          imgSrc="/images/bahai-study-center-bike-path-nature-corporate-retreats.webp"
          imgAlt="Percorsi ciclabili nei dintorni del Centro Studi Bahá’í"
          body={
            <p>
              Scoprite il Lazio in modo sostenibile, seguendo percorsi ciclabili
              ed e-bike immersi nella natura, rispettando l’ambiente e il vostro
              ritmo.
            </p>
          }
        />
      </div>
    </main>
  );
}
