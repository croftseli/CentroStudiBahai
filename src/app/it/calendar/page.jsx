"use client";

export default function calendar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-soft-cream text-dark-brown px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ci Stiamo Lavorando!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Questa pagina è attualmente in costruzione. Torna a visitarci presto.
      </p>
      <div className="text-sm text-gray-600">
        Nel frattempo, sentiti libero di{" "}
        <a
          href="/"
          className="text-accent-blue hover:text-accent-red transition-colors underline"
        >
          tornare alla homepage
        </a>
        .
      </div>
    </div>
  );
}
