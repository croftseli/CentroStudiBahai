"use client";

export default function CalendarClient() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden border border-gray-300">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=centrostudibahai%40gmail.com&ctz=Europe%2FRome"
          className="w-full h-[600px]"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
