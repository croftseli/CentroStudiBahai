import Image from "next/image";

export default function AttivitaPage() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-dark-brown mb-10 text-center">
        Attività al Centro Studi Bahá'í
      </h1>

      {/* Conferenze e Formazione */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Conferenze e Formazione
        </h2>
        <p className="text-lg mb-4">
          Un ambiente professionale e accogliente — lontano dal caos cittadino —
          è essenziale per un lavoro concentrato ed efficace. Il nostro centro è
          dotato sia di una grande sala conferenze che di sale riunioni più
          piccole, adattabili alle vostre esigenze e ideali per seminari,
          conferenze e discussioni di gruppo.
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
          Ideale per piccoli gruppi che cercano connessione e rinnovamento, la
          nostra location offre diverse attività di team building.
          Dall'equitazione al rafting, dal trekking alle escursioni culturali —
          o semplicemente rilassarsi nella natura — troverete il giusto
          equilibrio tra attività e tranquillità per rafforzare lo spirito di
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
          Che si tratti di riunire i propri cari o organizzare il matrimonio dei
          vostri sogni, il nostro centro offre un ambiente indimenticabile. Le
          sale conferenze e gli spazi esterni possono ospitare gruppi intimi o
          numerosi.
        </p>
        <p className="text-lg mb-2">
          I bambini possono divertirsi nel campo da basket e nelle aree gioco
          all'aperto, mentre gli adulti possono gustare un caffè italiano o un
          tè persiano sotto il glicine o sulla nostra terrazza panoramica.
        </p>
        <p className="text-lg mb-4">
          Per i matrimoni, lasciate che lo sfondo delle colline ciociare sia la
          vostra cornice romantica — con personale esperto che vi assiste dalla
          cerimonia al ricevimento, e un ristorante pronto a deliziarvi con
          piatti raffinati.
        </p>
        <Image
          src="/images/wedding-view.jpg"
          alt="Matrimonio con vista"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Ritiri Yoga e Arti Marziali */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Ritiri di Yoga e Arti Marziali
        </h2>
        <p className="text-lg mb-4">
          Da oltre 20 anni, gruppi che praticano yoga, tai chi, taekwondo e
          altro utilizzano le nostre strutture per ritiri rigeneranti e
          pacifici. Ampie sale interne e aree esterne tranquille offrono le
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

      {/* Turismo Lento e Bici */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Turismo Lento e Bici
        </h2>
        <p className="text-lg mb-4">
          Abbraccia il viaggio sostenibile con e-bike e percorsi ciclistici
          classici che attraversano la bellezza naturale del Lazio. Scopri gemme
          nascoste al tuo ritmo, contribuendo al benessere ambientale.
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
