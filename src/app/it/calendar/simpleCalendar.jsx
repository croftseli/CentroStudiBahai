"use client";

export default function CalendarioClient() {
  const events = [
    {
      id: 1,
      title: "Incontro Devozionale",
      date: "2025-05-18T19:00:00",
      description:
        "Una serata di preghiera, musica e riflessione aperta a tutti. Unisciti a noi per creare uno spazio di pace e connessione comunitaria.",
    },
    {
      id: 2,
      title: "Cerchio di Studio: Libro 1 Ruhi",
      date: "2025-05-20T18:30:00",
      description:
        "Esplorazione di concetti spirituali in un gruppo accogliente. Tutti sono benvenuti, indipendentemente dall’esperienza.",
    },
    {
      id: 3,
      title: "Classe per Bambini",
      date: "2025-05-25T10:00:00",
      description:
        "Un programma divertente e basato sui valori per bambini dai 5 ai 10 anni. Include storie, musica, attività manuali e di gruppo.",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Testo Introduttivo */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">
          Calendario del Centro Studi Baháʼí
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Benvenuti! Qui sotto troverete i nostri eventi futuri e passati. Puoi
          visualizzarli direttamente nel calendario o scorrere per leggere le
          descrizioni dettagliate.
        </p>
      </div>

      {/* Calendario Incorporato */}
      <div className="mb-12 shadow-xl rounded-2xl overflow-hidden border border-gray-300 bg-white">
        <div
          className="w-full rounded-2xl overflow-hidden border border-gray-300 bg-white"
          style={{ minHeight: "600px" }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=centrostudibahai%40gmail.com&ctz=Europe%2FRome&hl=it"
            className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] border-0"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      {/* Schede Eventi Manuali */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-xl shadow p-5 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(event.date).toLocaleString("it-IT", {
                dateStyle: "full",
                timeStyle: "short",
              })}
            </p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
