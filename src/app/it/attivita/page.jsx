"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ActivitiesPage() {
  const router = useRouter();

  // Handle scrolling when the page loads or hash changes
  useEffect(() => {
    const hash = window.location.hash; // e.g., #matrimoni
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100; // Matches English version
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
        Attività al Centro Studi Bahá'í
      </h1>

      {/* Conferences & Trainings */}
      <section
        id="conferenze"
        aria-label="Conferenze e Formazione"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Conferenze e Formazione
          </h2>
          <p className="text-lg mb-4">
            Un ambiente professionale e accogliente — lontano dal caos cittadino
            — è essenziale per un lavoro concentrato ed efficace. Il nostro
            centro è dotato sia di una grande sala conferenze che di sale
            riunioni più piccole, adattabili alle vostre esigenze e ideali per
            seminari, conferenze e workshops di gruppo.
          </p>
        </div>
        <Image
          src="/images/centro-studi-bahai-sala-incontri-area-relax.webp"
          alt="Sala riunioni confortevole e area relax al Centro Studi Bahá’í per gruppi aziendali"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Team Building & Retreats */}
      <section
        id="team-building"
        aria-label="Team Building e Ritiri"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <Image
          src="/images/centro-studi-bahai-ritrio-della-squadra.webp"
          alt="Team Building al Centro Studi Bahá’í"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Team Building e Ritiri
          </h2>
          <p className="text-lg mb-4">
            Ideale per piccoli gruppi che cercano connessione e rinnovamento, i
            nostri dintorni offrono diverse attività di team building.
            Dall'equitazione al rafting sul fiume Aniene, dal parapendio sul
            monte Scalambra all’arrampicata libera a Pilarocca, dal trekking
            alle escursioni culturali — o semplicemente rilassarsi e meditare a
            contatto con la natura — troverete il giusto equilibrio tra attività
            e tranquillità per rafforzare lo spirito di gruppo.
          </p>
        </div>
      </section>

      {/* Family Reunions & Weddings */}
      <section
        id="matrimoni"
        aria-label="Riunioni di Famiglia e Matrimoni"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Riunioni di Famiglia e Matrimoni
          </h2>
          <p className="text-lg mb-2">
            Che si tratti di riunire i propri cari o di organizzare il
            matrimonio dei vostri sogni, il nostro centro offre un ambiente
            indimenticabile. Le sale conferenze e gli spazi esterni possono
            ospitare gruppi intimi o numerosi.
          </p>
          <p className="text-lg mb-2">
            Potete gustare un caffè italiano o un tè persiano sotto il glicine o
            sulla nostra terrazza panoramica.
          </p>
          <p className="text-lg mb-4">
            Per i matrimoni, lasciate che lo sfondo delle colline ciociare sia
            la vostra cornice romantica — con personale esperto che vi assiste
            dalla cerimonia al ricevimento, e un ristorante pronto a deliziarvi
            con piatti raffinati.
          </p>
        </div>
        <Image
          src="/images/centro-studi-bahai-location-matrimoni-eventi-aziendali.webp"
          alt="Cerimonia di matrimonio al Centro Studi Bahá’í, location adatta anche per eventi aziendali"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Yoga & Martial Arts Retreats */}
      <section
        id="ritiri-yoga"
        aria-label="Ritiri di Yoga e Arti Marziali"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <Image
          src="/images/centro-studi-bahai-yoga-meditazione-ritiri-aziendali.webp"
          alt="Sessione di yoga e meditazione al Centro Studi Bahá’í per ritiri aziendali"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Ritiri di Yoga e Arti Marziali
          </h2>
          <p className="text-lg mb-4">
            Da oltre 20 anni, gruppi che praticano yoga, tai chi e taekwondo
            utilizzano le nostre strutture per ritiri rigeneranti. Ampie sale
            interne e aree esterne tranquille offrono le condizioni ideali per
            meditazione e movimento.
          </p>
        </div>
      </section>

      {/* Slow Tourism & Biking */}
      <section
        id="ciclismo"
        aria-label="Turismo Lento e Bici"
        className="mb-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-dark-brown mb-4">
            Turismo Lento e Bici
          </h2>
          <p className="text-lg mb-4">
            Abbraccia il viaggio sostenibile con e-bike e percorsi ciclistici
            classici che attraversano la bellezza naturale del Lazio. Scopri
            gemme nascoste seguendo il tuo ritmo personale e contribuendo al
            benessere ambientale.
          </p>
        </div>
        <Image
          src="/images/centro-studi-bahai-percorso-bici-natura-ritiri-aziendali.webp"
          alt="Percorso ciclabile immerso nella natura vicino al Centro Studi Bahá’í per ritiri aziendali"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>
    </main>
  );
}
