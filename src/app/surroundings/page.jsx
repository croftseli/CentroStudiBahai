"use client";

import Image from "next/image";

export default function Explore() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-dark-brown mb-4 text-center">
          Explore the Surroundings
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Where do we go? What do we do? What do we eat? Let us guide you
          through the charming surroundings of our region.
        </p>
        <a
          href="https://comune.acuto.fr.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-red/80 transition"
        >
          View Local Events
        </a>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-dark-brown mb-4">
            Nearby Attractions
          </h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>
              Fiuggi Thermal Centre – 10 minutes (20 minutes from Lake Canterno)
            </li>
            <li>Rome – 76 km (55 minutes)</li>
            <li>Naples – 180 km (1½ hours)</li>
            <li>Valmontone Outlet – 30 km</li>
            <li>Campocatino Ski Resort – 40 km</li>
          </ul>
        </div>
        <Image
          src="/images/bahai-study-center-beach-relaxation-nearby.webp"
          alt="Sandy beach near the Bahá’í Study Center ideal for relaxation after business meetings"
          width={600}
          height={400}
          className="rounded-xl shadow mx-auto"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/bahai-study-center-homemade-pasta-local-cuisine.webp"
          alt="Homemade pasta and traditional local cuisine near the Bahá’í Study Center"
          width={600}
          height={400}
          className="rounded-xl shadow mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-dark-brown text-center mb-4">
            Nature & Gastronomy
          </h2>
          <p className="text-gray-700 text-center">
            Paths, lakes, chestnut woods and olive groves surround the facility.
            The region is known for its extra virgin olive oil and sheep and
            goat cheeses—some of the most sought-after products in the area.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-dark-brown">
          Discover Ciociaria
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              The Ciociaria region offers a rich mix of cultural, historical,
              and natural beauty—from ancient towns to spiritual retreats.
            </p>

            <h3 className="text-xl font-semibold text-dark-brown">
              To experience!
            </h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>
                Anagni – The City of Popes, known for its medieval history and
                religious significance
              </li>
              <li>
                Alatri – Famous for its ancient polygonal walls and
                well-preserved Acropolis
              </li>
              <li>
                Ferentino – A legendary city founded by Saturn, home to mighty
                stone walls
              </li>
              <li>
                Fiuggi – One of Europe’s top thermal destinations with healing
                waters
              </li>
              <li>
                Fumone – Medieval fortress town, once prison to Pope Celestine V
              </li>
              <li>Vico nel Lazio – A perfectly preserved medieval village</li>
              <li>
                Guarcino – Known for its ham and beautiful mountain surroundings
              </li>
              <li>
                Certosa di Trisulti – A mountain monastery with a historic
                pharmacy and library
              </li>
              <li>
                Filettino – Lazio’s highest town, a ski and hiking destination
              </li>
            </ul>
          </div>
          <Image
            src="/images/bahai-study-center-waterfall-natural-attraction-nearby.webp"
            alt="Beautiful waterfall near the Bahá’í Study Center for nature excursions and relaxation"
            width={600}
            height={400}
            className="rounded-xl shadow mx-auto"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-brown text-center">
          Hiking and Biking Trails
        </h2>
        <p className="text-gray-700 text-center">
          Ask for our professional guides!
        </p>
        <Image
          src="/images/bahai-study-center-lakeside-picnic-area-business-retreats.webp"
          alt="Lakeside picnic area near the Bahá’í Study Center for business retreat breaks"
          width={800}
          height={500}
          className="rounded-xl shadow mx-auto"
        />
      </section>
    </main>
  );
}
