"use client";

export default function CalendarClient() {
  const events = [
    {
      id: 1,
      title: "Devotional Gathering",
      date: "2025-05-18T19:00:00",
      description:
        "An evening of prayer, music, and reflection open to all. Join us in creating a peaceful space for community connection.",
    },
    {
      id: 2,
      title: "Study Circle: Ruhi Book 1",
      date: "2025-05-20T18:30:00",
      description:
        "Exploring spiritual concepts together in a welcoming group. Everyone is welcome, regardless of experience.",
    },
    {
      id: 3,
      title: "Children’s Class",
      date: "2025-05-25T10:00:00",
      description:
        "A fun and values-based program for kids aged 5–10. Includes stories, music, crafts, and group activities.",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Intro Text */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">
          Centro Studio Baháʼí Calendar
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome! Below you’ll find our upcoming and past events. You can view
          them directly on the calendar, or scroll down for more detailed
          descriptions.
        </p>
      </div>

      {/* Embedded Calendar */}
      <div className="mb-12 shadow-xl rounded-2xl overflow-hidden border border-gray-300 bg-white">
        <div
          className="w-full rounded-2xl overflow-hidden border border-gray-300 bg-white"
          style={{ minHeight: "600px" }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=centrostudibahai%40gmail.com&ctz=Europe%2FRome&hl=en"
            className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] border-0"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      {/* Manual Event Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-xl shadow p-5 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(event.date).toLocaleString("en-GB", {
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
