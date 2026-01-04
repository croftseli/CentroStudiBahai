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
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: "easeOut", delay: 0.12 } },
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
  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;

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
      custom={0}
      className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)] overflow-hidden"
    >
      <div className="p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
              Activities
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

        <div className={`mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch ${reverse ? "lg:[direction:rtl]" : ""}`}>
          {/* TEXT CARD */}
          <div className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
              <div className="p-8">
                <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                  Overview
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

          {/* IMAGE CARD */}
          <div className={`lg:col-span-7 ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <motion.div variants={cardHover} whileHover="hover" className="relative h-full">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[420px] md:h-[520px]">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  className="object-cover
                             grayscale-[12%] contrast-[1.03] saturate-[0.96]
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
        {/* PAGE HERO */}
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
              Activities at Centro Studi Bahá&apos;í
            </motion.h1>

            <motion.div variants={fadeUp} custom={0.12} className="mx-auto mt-6 flex justify-center">
              <motion.div variants={lineGrow} className="h-px w-64 origin-left bg-black/25" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Discover spaces designed for focus, community, celebration, and renewal.
            </motion.p>
          </div>
        </motion.section>

        {/* Conferences & Trainings */}
        <ActivityBlock
          id="conferences"
          title="Conferences & Trainings"
          imgSrc="/images/bahai-study-center-meeting-room-relaxation-space.webp"
          imgAlt="Comfortable meeting and relaxation room at the Bahá’í Study Center for corporate groups"
          body={
            <>
              <p>
                A professional and welcoming environment-away from city chaos-is
                essential for concentrated and effective work. Our center has both a
                large conference room and smaller meeting rooms that can be adapted
                to your needs and are ideal for seminars, conferences and group
                workshops.
              </p>
            </>
          }
        />

        {/* Team Building & Retreats */}
        <ActivityBlock
          id="team-building"
          title="Team Building & Retreats"
          imgSrc="/images/bahai-study-center-team-retreat.webp"
          imgAlt="Team Building at the Bahá’í Study Center"
          reverse
          body={
            <>
              <p>
                Ideal for small groups seeking connection and renewal, our
                surroundings offer a variety of team building activities. From
                horseback riding to rafting on the Aniene river, from paragliding on
                Mount Scalambra to free climbing at Pilarocca, from trekking to
                cultural excursions-or simply relaxing and meditating in contact
                with nature-you&apos;ll find the right balance of activity and
                tranquility to strengthen your group spirit.
              </p>
            </>
          }
        />

        {/* Family Reunions & Weddings */}
        <ActivityBlock
          id="weddings"
          title="Family Reunions & Weddings"
          imgSrc="/images/bahai-study-center-wedding-venue-corporate-events.webp"
          imgAlt="Wedding ceremony at the Bahá’í Study Center, also suitable for corporate events"
          body={
            <>
              <p>
                Whether you are reuniting with loved ones or planning the wedding of
                your dreams, our center offers an unforgettable setting. Conference
                rooms and outdoor spaces can accommodate intimate or large groups.
              </p>
              <p>
                You can enjoy an Italian coffee or Persian tea under the wisteria or
                on our rooftop terrace.
              </p>
              <p>
                For weddings, let the backdrop of the Ciocian hills be your romantic
                setting -- with experienced staff to assist you from ceremony to
                reception, and a restaurant ready to delight you with fine dining.
              </p>
            </>
          }
        />

        {/* Yoga & Martial Arts Retreats */}
        <ActivityBlock
          id="yoga-retreats"
          title="Yoga & Martial Arts Retreats"
          imgSrc="/images/bahai-study-center-yoga-meditation-business-retreats.webp"
          imgAlt="Yoga and meditation session at the Bahá’í Study Center for business retreats"
          reverse
          body={
            <>
              <p>
                For more than 20 years, groups practicing yoga, tai chi and
                taekwondo have used our facilities for rejuvenating retreats.
                Spacious indoor rooms and quiet outdoor areas provide ideal
                conditions for meditation and movement.
              </p>
            </>
          }
        />

        {/* Slow Tourism & Biking */}
        <ActivityBlock
          id="biking"
          title="Slow Tourism & Biking"
          imgSrc="/images/bahai-study-center-bike-path-nature-corporate-retreats.webp"
          imgAlt="Bike path surrounded by nature near the Bahá’í Study Center for corporate retreats"
          body={
            <>
              <p>
                Embrace sustainable travel with e-bikes and classic bike routes
                through Lazio&apos;s natural beauty. Discover hidden gems by following
                your personal pace and contributing to environmental well-being.
              </p>
            </>
          }
        />
      </div>
    </main>
  );
}
