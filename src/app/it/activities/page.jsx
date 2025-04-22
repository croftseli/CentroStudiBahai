import Image from "next/image";

export default function ActivitiesPage() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-dark-brown mb-10 text-center">
        Attività al Centro Studi Bahá'í
      </h1>

      {/* Conferenze e Formazioni */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Conferenze e Formazioni
        </h2>
        <p className="text-lg mb-4">
          Un'atmosfera professionale e accogliente — lontana dal caos della vita
          cittadina — è essenziale per un lavoro concentrato ed efficace. Il
          nostro centro è dotato sia di una grande sala conferenze che di sale
          riunioni più piccole, adattabili alle vostre esigenze e ideali per
          seminari, conferenze e discussioni di gruppo.
        </p>
        <Image
          src="/images/conference-room.jpg"
          alt="Sala Conferenze"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Team Building e Ritiri */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Team Building e Ritiri
        </h2>
        <p className="text-lg mb-4">
          Ideale per piccoli gruppi in cerca di connessione e rinnovamento, la
          nostra location offre varie attività di team building.
          Dall'equitazione e rafting alle escursioni e visite culturali — o
          semplicemente rilassandosi nella natura — troverete il giusto
          equilibrio tra attività e tranquillità per rafforzare il morale del
          gruppo.
        </p>
        <Image
          src="/images/team-retreat.jpg"
          alt="Team Building nella Natura"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Riunioni di Famiglia e Matrimoni */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Riunioni di Famiglia e Matrimoni
        </h2>
        <p className="text-lg mb-2">
          Che si tratti di riunire i propri cari o di pianificare il matrimonio
          dei sogni, il nostro centro offre un'ambientazione indimenticabile. Le
          sale conferenze e gli spazi verdi possono ospitare gruppi sia intimi
          che numerosi.
        </p>
        <p className="text-lg mb-2">
          I bambini possono divertirsi nel campo da basket e negli spazi gioco
          all'aperto, mentre gli adulti possono gustare un caffè italiano o un
          tè persiano sotto il glicine o sulla nostra terrazza panoramica.
        </p>
        <p className="text-lg mb-4">
          Per i matrimoni, lasciate che le colline della Ciociaria facciano da
          sfondo romantico — con personale esperto che vi assiste dalla
          cerimonia al ricevimento, e un ristorante pronto a deliziare con
          piatti raffinati.
        </p>
        <Image
          src="/images/wedding-view.jpg"
          alt="Matrimonio con Vista"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Ritiri di Yoga e Arti Marziali */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Ritiri di Yoga e Arti Marziali
        </h2>
        <p className="text-lg mb-4">
          Da oltre 20 anni, gruppi che praticano yoga, tai chi, taekwondo e
          altre discipline usano le nostre strutture per ritiri rigeneranti e
          tranquilli. Ampie sale interne e spazi esterni silenziosi offrono le
          condizioni ideali per meditazione e movimento.
        </p>
        <Image
          src="/images/yoga-retreat.jpg"
          alt="Ritiro Yoga"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Turismo Lento e Ciclismo */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Turismo Lento e Ciclismo
        </h2>
        <p className="text-lg mb-4">
          Abbraccia il viaggio sostenibile con e-bike e percorsi ciclabili
          classici che attraversano la bellezza naturale della regione Lazio.
          Scopri tesori nascosti al tuo ritmo, contribuendo al benessere
          ambientale.
        </p>
        <Image
          src="/images/bike-tour.jpg"
          alt="Ciclismo in Ciociaria"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      <section className="text-center mt-12">
        <a
          href="/surroundings"
          className="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-red/80 transition"
        >
          Scopri i Dintorni
        </a>
      </section>
    </main>
  );
}
