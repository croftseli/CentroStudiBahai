"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ActivitiesPage() {
  const router = useRouter();

  // Handle scrolling when the page loads or hash changes
  useEffect(() => {
    const hash = window.location.hash; // e.g., #weddings
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100;
        const elementPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, [router.asPath]); // Re-run when URL (including hash) changes

  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-dark-brown mb-10 text-center">
        Activities at Centro Studi Bahá'í
      </h1>

      {/* Conferences & Trainings */}
      <section
        id="conferences"
        aria-label="Conferences and Trainings"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Conferences & Trainings
          </h2>
          <p className="text-lg mb-4">
            A professional and welcoming environment-away from city chaos-is
            essential for concentrated and effective work. Our center has both a
            large conference room and smaller meeting rooms that can be adapted
            to your needs and are ideal for seminars, conferences and group
            workshops.
          </p>
        </div>
        <Image
          src="/images/bahai-study-center-meeting-room-relaxation-space.webp"
          alt="Comfortable meeting and relaxation room at the Bahá’í Study Center for corporate groups"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Team Building & Retreats */}
      <section
        id="team-building"
        aria-label="Team Building and Retreats"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <Image
          src="/images/bahai-study-center-team-retreat.webp"
          alt="Team Building at the Bahá’í Study Center"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Team Building & Retreats
          </h2>
          <p className="text-lg mb-4">
            Ideal for small groups seeking connection and renewal, our
            surroundings offer a variety of team building activities. From
            horseback riding to rafting on the Aniene river, from paragliding on
            Mount Scalambra to free climbing at Pilarocca, from trekking to
            cultural excursions-or simply relaxing and meditating in contact
            with nature-you'll find the right balance of activity and
            tranquility to strengthen your group spirit.
          </p>
        </div>
      </section>

      {/* Family Reunions & Weddings */}
      <section
        id="weddings"
        aria-label="Family Reunions and Weddings"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Family Reunions & Weddings
          </h2>
          <p className="text-lg mb-2">
            Whether you are reuniting with loved ones or planning the wedding of
            your dreams, our center offers an unforgettable setting. Conference
            rooms and outdoor spaces can accommodate intimate or large groups.
          </p>
          <p className="text-lg mb-2">
            You can enjoy an Italian coffee or Persian tea under the wisteria or
            on our rooftop terrace.
          </p>
          <p className="text-lg mb-4">
            For weddings, let the backdrop of the Ciocian hills be your romantic
            setting -- with experienced staff to assist you from ceremony to
            reception, and a restaurant ready to delight you with fine dining.
          </p>
        </div>
        <Image
          src="/images/bahai-study-center-wedding-venue-corporate-events.webp"
          alt="Wedding ceremony at the Bahá’í Study Center, also suitable for corporate events"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Yoga & Martial Arts Retreats */}
      <section
        id="yoga-retreats"
        aria-label="Yoga and Martial Arts Retreats"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <Image
          src="/images/bahai-study-center-yoga-meditation-business-retreats.webp"
          alt="Yoga and meditation session at the Bahá’í Study Center for business retreats"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Yoga & Martial Arts Retreats
          </h2>
          <p className="text-lg mb-4">
            For more than 20 years, groups practicing yoga, tai chi and
            taekwondo have used our facilities for rejuvenating retreats.
            Spacious indoor rooms and quiet outdoor areas provide ideal
            conditions for meditation and movement.
          </p>
        </div>
      </section>

      {/* Slow Tourism & Biking */}
      <section
        id="biking"
        aria-label="Slow Tourism and Biking"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Slow Tourism & Biking
          </h2>
          <p className="text-lg mb-4">
            Embrace sustainable travel with e-bikes and classic bike routes
            through Lazio's natural beauty. Discover hidden gems by following
            your personal pace and contributing to environmental well-being.
          </p>
        </div>
        <Image
          src="/images/bahai-study-center-bike-path-nature-corporate-retreats.webp"
          alt="Bike path surrounded by nature near the Bahá’í Study Center for corporate retreats"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>
    </main>
  );
}
