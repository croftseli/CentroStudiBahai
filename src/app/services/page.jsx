import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-dark-brown mb-10 text-center">
        Activities at Centro Studi Bahá'í
      </h1>

      {/* Conferences & Trainings */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Conferences & Trainings
        </h2>
        <p className="text-lg mb-4">
          A professional and welcoming atmosphere — far from the chaos of city
          life — is essential for focused and efficient work. Our centre is
          equipped with both a large conference room and smaller meeting rooms,
          adaptable to your needs and ideal for seminars, conferences, and group
          discussions.
        </p>
        <Image
          src="/images/conference-room.jpg"
          alt="Conference Room"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Team Building & Retreats */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Team Building & Retreats
        </h2>
        <p className="text-lg mb-4">
          Ideal for small groups seeking deeper connection and renewal, our
          location offers various team-building activities. From horse-riding
          and rafting to hiking and cultural excursions — or simply unwinding in
          nature — you'll find the right balance of activity and calm to boost
          group morale.
        </p>
        <Image
          src="/images/team-retreat.jpg"
          alt="Team Building in Nature"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Family Reunions & Weddings */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Family Reunions & Weddings
        </h2>
        <p className="text-lg mb-2">
          Whether you're gathering loved ones or planning your dream wedding,
          our centre offers an unforgettable setting. The conference rooms and
          garden spaces can host both intimate and larger groups.
        </p>
        <p className="text-lg mb-2">
          Children can enjoy the basketball court and outdoor play spaces, while
          adults savour Italian coffee or Persian tea under the wisteria or on
          our panoramic terrace.
        </p>
        <p className="text-lg mb-4">
          For weddings, let the backdrop of the Ciociarian hills be your
          romantic setting — with experienced staff assisting from ceremony to
          reception, and a restaurant ready to delight with refined dishes.
        </p>
        <Image
          src="/images/wedding-view.jpg"
          alt="Wedding with a view"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Yoga & Martial Arts Retreats */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Yoga & Martial Arts Retreats
        </h2>
        <p className="text-lg mb-4">
          For over 20 years, groups practising yoga, tai chi, taekwondo and more
          have used our facilities for peaceful, regenerating retreats. Spacious
          indoor halls and tranquil outdoor areas provide the right conditions
          for both meditation and movement.
        </p>
        <Image
          src="/images/yoga-retreat.jpg"
          alt="Yoga Retreat"
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Slow Tourism & Biking */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">
          Slow Tourism & Biking
        </h2>
        <p className="text-lg mb-4">
          Embrace sustainable travel with e-bikes and classic cycling routes
          that weave through the natural beauty of the Lazio region. Discover
          hidden gems at your own pace while contributing to environmental
          wellbeing.
        </p>
        <Image
          src="/images/bike-tour.jpg"
          alt="Cycling in Ciociaria"
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
          Discover the Surroundings
        </a>
      </section>
    </main>
  );
}
