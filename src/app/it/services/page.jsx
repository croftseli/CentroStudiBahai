"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const conferenceImages = [
    { src: "/conferenceRoom1.jpg", alt: "Sala Conferenze 1" },
    { src: "/conferenceRoom2.jpg", alt: "Sala Conferenze 2" },
    { src: "/conferenceRoom3.jpg", alt: "Sala Conferenze 3" },
    { src: "/conferenceRoom4.jpg", alt: "Sala Conferenze 4" },
    { src: "/conferenceRoom5.JPG", alt: "Sala Conferenze 5" },
    { src: "/conferenceRoom6.jpg", alt: "Sala Conferenze 6" },
    { src: "/conferenceRoom7.jpg", alt: "Sala Conferenze 7" },
  ];

  const teamBuildingImages = [
    { src: "/teamBuilding1.png", alt: "Team Building nella Natura 1" },
    { src: "/teamBuilding2.jpg", alt: "Team Building nella Natura 2" },
    { src: "/teamBuilding3.jpg", alt: "Team Building nella Natura 3" },
    { src: "/teamBuilding4.jpg", alt: "Team Building nella Natura 4" },
  ];

  const weddingImages = [
    { src: "/wedding1.jpg", alt: "Matrimonio con Vista 1" },
  ];

  const yogaRetreatImages = [
    { src: "/yogaRetreat1.png", alt: "Ritiro Yoga 1" },
  ];

  const bikingImages = [
    { src: "/tourism1.jpg", alt: "Turismo 1" },
    { src: "/teamBuilding1.png", alt: "Turismo 2" },
    { src: "/tourism3.JPG", alt: "Turismo 3" },
    { src: "/tourism4.jpg", alt: "Turismo 4" },
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
        Servizi offerti presso il Centro Studi Bahá'í
      </h1>
      {/* Conferences & Trainings */}
      <Section
        title="Conferenze e Formazioni"
        imageSrc={conferenceImages[conferenceIndex].src}
        imageAlt={conferenceImages[conferenceIndex].alt}
        text={
          <>
            <p>
              Un'atmosfera professionale e accogliente — lontana dal caos della
              vita cittadina — è essenziale per un lavoro concentrato ed
              efficace. Il nostro centro è dotato sia di una grande sala
              conferenze che di sale riunioni più piccole, adattabili alle
              vostre esigenze e ideali per seminari, conferenze e discussioni di
              gruppo.
            </p>
          </>
        }
      />

      {/* Team Building & Retreats */}
      <Section
        title="Team Building e Ritiri"
        imageSrc={teamBuildingImages[teamBuildingIndex].src}
        imageAlt={teamBuildingImages[teamBuildingIndex].alt}
        reverse
        text={
          <>
            <p>
              Ideale per piccoli gruppi in cerca di connessione e rinnovamento,
              la nostra location offre varie attività di team building.
              Dall'equitazione e rafting alle escursioni e visite culturali — o
              semplicemente rilassandosi nella natura — troverete il giusto
              equilibrio tra attività e tranquillità per rafforzare il morale
              del gruppo.
            </p>
          </>
        }
      />

      {/* Family Reunions & Weddings */}
      <Section
        title="Riunioni di Famiglia e Matrimoni"
        imageSrc={weddingImages[weddingIndex].src}
        imageAlt={weddingImages[weddingIndex].alt}
        text={
          <>
            <p>
              Che si tratti di riunire i propri cari o di pianificare il
              matrimonio dei sogni, il nostro centro offre un'ambientazione
              indimenticabile. Le sale conferenze e gli spazi verdi possono
              ospitare gruppi sia intimi che numerosi.
            </p>
            <p>
              I bambini possono divertirsi nel campo da basket e negli spazi
              gioco all'aperto, mentre gli adulti possono gustare un caffè
              italiano o un tè persiano sotto il glicine o sulla nostra terrazza
              panoramica.
            </p>
            <p>
              Per i matrimoni, lasciate che le colline della Ciociaria facciano
              da sfondo romantico — con personale esperto che vi assiste dalla
              cerimonia al ricevimento, e un ristorante pronto a deliziare con
              piatti raffinati.
            </p>
          </>
        }
      />

      {/* Yoga & Martial Arts Retreats */}
      <Section
        title="Ritiri di Yoga e Arti Marziali"
        imageSrc={yogaRetreatImages[yogaRetreatIndex].src}
        imageAlt={yogaRetreatImages[yogaRetreatIndex].alt}
        reverse
        text={
          <>
            <p>
              Da oltre 20 anni, gruppi che praticano yoga, tai chi, taekwondo e
              altre discipline usano le nostre strutture per ritiri rigeneranti
              e tranquilli. Ampie sale interne e spazi esterni silenziosi
              offrono le condizioni ideali per meditazione e movimento.
            </p>
          </>
        }
      />

      {/* Slow Tourism & Biking */}
      <Section
        title="Turismo Lento e Ciclismo"
        imageSrc={bikingImages[bikingIndex].src}
        imageAlt={bikingImages[bikingIndex].alt}
        text={
          <>
            <p>
              Abbraccia il viaggio sostenibile con e-bike e percorsi ciclabili
              classici che attraversano la bellezza naturale della regione
              Lazio. Scopri tesori nascosti al tuo ritmo, contribuendo al
              benessere ambientale.
            </p>
          </>
        }
      />

      {/* Button */}
      <section className="text-center mt-12">
        <a
          href="/it/surroundings"
          className="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-red/80 transition"
        >
          Scopri i Dintorni
        </a>
      </section>
    </main>
  );
}
