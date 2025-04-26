"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const conferenceImages = [
    { src: "/conferenceRoom1.jpg", alt: "Conference Room 1" },
    { src: "/conferenceRoom2.jpg", alt: "Conference Room 2" },
    { src: "/conferenceRoom3.jpg", alt: "Conference Room 3" },
    { src: "/conferenceRoom4.jpg", alt: "Conference Room 4" },
    { src: "/conferenceRoom5.JPG", alt: "Conference Room 5" },
    { src: "/conferenceRoom6.jpg", alt: "Conference Room 6" },
    { src: "/conferenceRoom7.jpg", alt: "Conference Room 7" },
  ];

  const teamBuildingImages = [
    { src: "/teamBuilding1.png", alt: "Team Building Activity 1" },
    { src: "/teamBuilding2.jpg", alt: "Team Building Activity 2" },
    { src: "/teamBuilding3.jpg", alt: "Team Building Activity 3" },
    { src: "/teamBuilding4.jpg", alt: "Team Building Activity 4" },
  ];

  const weddingImages = [{ src: "/wedding1.jpg", alt: "Wedding Ceremony 1" }];

  const yogaRetreatImages = [
    { src: "/yogaRetreat1.png", alt: "Yoga Retreat 1" },
  ];

  const bikingImages = [
    { src: "/tourism1.jpg", alt: "Tourism 1" },
    { src: "/teamBuilding1.png", alt: "Tourism 2" },
    { src: "/tourism3.JPG", alt: "Tourism 3" },
    { src: "/tourism4.jpg", alt: "Tourism 4" },
  ];

  const [conferenceIndex, setConferenceIndex] = useState(0);
  const [teamBuildingIndex, setTeamBuildingIndex] = useState(0);
  const [weddingIndex, setWeddingIndex] = useState(0);
  const [yogaRetreatIndex, setYogaRetreatIndex] = useState(0);
  const [bikingIndex, setBikingIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setConferenceIndex((prev) => (prev + 1) % conferenceImages.length);
      setTeamBuildingIndex((prev) => (prev + 1) % teamBuildingImages.length);
      setWeddingIndex((prev) => (prev + 1) % weddingImages.length);
      setYogaRetreatIndex((prev) => (prev + 1) % yogaRetreatImages.length);
      setBikingIndex((prev) => (prev + 1) % bikingImages.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // --- Manual controls for navigating images ---
  const handlePrev = (setIndex, imagesLength) => {
    setIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  const handleNext = (setIndex, imagesLength) => {
    setIndex((prev) => (prev + 1) % imagesLength);
  };

  // --- Helper Section component ---
  function Section({
    title,
    text,
    imageSrc,
    imageAlt,
    reverse = false,
    imageLength,
    setImageIndex,
  }) {
    const [currentSrc, setCurrentSrc] = useState(imageSrc);

    const handleImageLoad = () => {
      setLoaded(true); // Image is fully loaded, now transition
    };

    return (
      <section className="mb-16">
        <div
          className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
        >
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
            <Image
              src={currentSrc}
              alt={imageAlt}
              fill
              onLoadingComplete={handleImageLoad} // Wait until the image is loaded
              className={`object-cover rounded-xl shadow-md transition-opacity duration-700 ease-in-out ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-dark-brown mb-4">
              {title}
            </h2>
            <div className="text-lg space-y-4">{text}</div>
          </div>
        </div>
      </section>
    );
  }

  // --- Return the page content ---
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-dark-brown mb-10 text-center">
        Activities at Centro Studi Bahá'í
      </h1>
      {/* Conferences & Trainings */}
      <Section
        title="Conferences & Trainings"
        imageSrc={conferenceImages[conferenceIndex].src}
        imageAlt={conferenceImages[conferenceIndex].alt}
        text={
          <>
            <p>
              A professional and welcoming atmosphere — far from the chaos of
              city life — is essential for focused and efficient work. Our
              centre is equipped with both a large conference room and smaller
              meeting rooms, adaptable to your needs and ideal for seminars,
              conferences, and group discussions.
            </p>
          </>
        }
      />

      {/* Team Building & Retreats */}
      <Section
        title="Team Building & Retreats"
        imageSrc={teamBuildingImages[teamBuildingIndex].src}
        imageAlt={teamBuildingImages[teamBuildingIndex].alt}
        reverse
        text={
          <>
            <p>
              Ideal for small groups seeking deeper connection and renewal, our
              location offers various team-building services. From horse-riding
              and rafting to hiking and cultural excursions — or simply
              unwinding in nature — you'll find the right balance of activity
              and calm to boost group morale.
            </p>
          </>
        }
      />

      {/* Family Reunions & Weddings */}
      <Section
        title="Family Reunions & Weddings"
        imageSrc={weddingImages[weddingIndex].src}
        imageAlt={weddingImages[weddingIndex].alt}
        text={
          <>
            <p>
              Whether you're gathering loved ones or planning your dream
              wedding, our centre offers an unforgettable setting. The
              conference rooms and garden spaces can host both intimate and
              larger groups.
            </p>
            <p>
              Children can enjoy the basketball court and outdoor play spaces,
              while adults savour Italian coffee or Persian tea under the
              wisteria or on our panoramic terrace.
            </p>
            <p>
              For weddings, let the backdrop of the Ciociarian hills be your
              romantic setting — with experienced staff assisting from ceremony
              to reception, and a restaurant ready to delight with refined
              dishes.
            </p>
          </>
        }
      />

      {/* Yoga & Martial Arts Retreats */}
      <Section
        title="Yoga & Martial Arts Retreats"
        imageSrc={yogaRetreatImages[yogaRetreatIndex].src}
        imageAlt={yogaRetreatImages[yogaRetreatIndex].alt}
        reverse
        text={
          <>
            <p>
              For over 20 years, groups practising yoga, tai chi, taekwondo and
              more have used our facilities for peaceful, regenerating retreats.
              Spacious indoor halls and tranquil outdoor areas provide the right
              conditions for both meditation and movement.
            </p>
          </>
        }
      />

      {/* Slow Tourism & Biking */}
      <Section
        title="Hiking and Biking Trails"
        imageSrc={bikingImages[bikingIndex].src}
        imageAlt={bikingImages[bikingIndex].alt}
        text={
          <>
            <p>
              Embrace sustainable travel with e-bikes and classic cycling routes
              that weave through the natural beauty of the Lazio region.
              Discover hidden gems at your own pace while contributing to
              environmental wellbeing.
            </p>
          </>
        }
      />

      {/* Button */}
      <section className="text-center mt-12">
        <a
          href="/surroundings"
          className="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-red/80 transition"
        >
          Discover the Surroundings
        </a>
      </section>
    </main>
  );
}
