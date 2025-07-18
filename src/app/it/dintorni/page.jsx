"use client";

import Image from "next/image";

export default function ExploreSurroundingsItalian() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-dark-brown mb-4 text-center">
          Esplora i Dintorni
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Dove andiamo? Cosa facciamo? Cosa mangiamo? Lasciati guidare
          attraverso gli affascinanti dintorni della nostra regione.
        </p>
        <a
          href="https://comune.acuto.fr.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-red/80 transition"
        >
          Visualizza Eventi Locali
        </a>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-dark-brown mb-4">
            Attrazioni Nelle Vicinanze
          </h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>
              Centro Termale di Fiuggi – 10 minuti (20 minuti dal Lago Canterno)
            </li>
            <li>Roma – 76 km (55 minuti)</li>
            <li>Napoli – 180 km (1 ora e mezza)</li>
            <li>Outlet di Valmontone – 30 km</li>
            <li>Stazione sciistica di Campocatino – 40 km</li>
          </ul>
        </div>
        <Image
          src="/images/centro-studi-bahai-spiaggia-relax-vicino.webp"
          alt="Spiaggia sabbiosa vicino al Centro Studi Bahá’í ideale per momenti di relax dopo i meeting"
          width={600}
          height={400}
          className="rounded-xl shadow mx-auto"
        />
      </section>

      <section className="grid md:grid-cols-1 gap-8 items-center">
        <Image
          src="/images/centro-studi-bahai-cucina-tipica-pasta-fresca.webp"
          alt="Pasta fresca fatta a mano e cucina tradizionale vicino al Centro Studi Bahá’í"
          width={600}
          height={400}
          className="rounded-xl shadow mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-dark-brown text-center mb-4">
            Natura e Gastronomia
          </h2>
          <p className="text-gray-700 text-center">
            Sentieri, laghi, boschi di castagni e ulivi circondano la struttura.
            La regione è nota per il suo olio extravergine d'oliva e formaggi di
            pecora e capra—alcuni dei prodotti più ricercati della zona.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-dark-brown">
          Scopri la Ciociaria
        </h2>
        <p className="text-gray-700">
          Il territorio della Ciociaria offre un ricco mix di bellezze
          culturali, storiche e naturali—dalle antiche città ai ritiri
          spirituali.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-dark-brown">
              Da vivere!
            </h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>
                Anagni – La Città dei Papi, nota per la sua storia medievale e
                il suo significato religioso.
              </li>
              <li>
                Alatri – Famosa per le sue antiche mura poligonali e l'Acropoli
                ben conservata.
              </li>
              <li>
                Ferentino – Una città leggendaria fondata da Saturno, con
                possenti mura di pietra.
              </li>
              <li>
                Fiuggi – Una delle principali destinazioni termali d'Europa con
                acque curative.
              </li>
              <li>
                Fumone – Città fortezza medievale, un tempo prigione di Papa
                Celestino V.
              </li>
              <li>
                Vico nel Lazio – Un villaggio medievale perfettamente
                conservato.
              </li>
              <li>
                Guarcino – Noto per il suo prosciutto e i bellissimi paesaggi
                montani.
              </li>
              <li>
                Certosa di Trisulti – Un monastero di montagna con un'antica
                farmacia e biblioteca.
              </li>
              <li>
                Filettino – La città più alta del Lazio, meta per sci ed
                escursioni.
              </li>
            </ul>
          </div>
          <Image
            src="/images/centro-studi-bahai-cascata-attrazione-naturale.webp"
            alt="Splendida cascata vicino al Centro Studi Bahá’í per escursioni nella natura e relax"
            width={600}
            height={400}
            className="rounded-xl shadow mx-auto"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-brown text-center">
          Sentieri per escursioni a piedi e in bicicletta
        </h2>
        <p className="text-gray-700 text-center">
          Chiedete delle nostre guide professionali!
        </p>
        <Image
          src="/images/centro-studi-bahai-area-picnic-lago-ritiri-aziendali.webp"
          alt="Area picnic sul lago vicino al Centro Studi Bahá’í per pause durante ritiri aziendali"
          width={800}
          height={500}
          className="rounded-xl shadow mx-auto"
        />
      </section>
    </main>
  );
}
