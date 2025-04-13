"use client";

export default function calendar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-soft-cream text-dark-brown px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We're Working On It!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        This page is currently under construction. Please check back soon.
      </p>
      <div className="text-sm text-gray-600">
        In the meantime, feel free to{" "}
        <a
          href="/"
          className="text-accent-blue hover:text-accent-red transition-colors underline"
        >
          return to the homepage
        </a>
        .
      </div>
    </div>
  );
}
