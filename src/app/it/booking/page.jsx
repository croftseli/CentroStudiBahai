"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bremis8",
        "template_6vkoxic",
        formData,
        "el3REInqe6tNtlj9N"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Messaggio inviato con successo!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FALLITO...", err);
          alert("Si è verificato un errore durante l'invio del messaggio.");
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Rooms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Le Nostre Camere
            </h2>
            <p className="text-gray-600 text-lg">
              Goditi il comfort e la tranquillità nelle nostre camere
              accoglienti e pulite, complete di bagno doccia, WiFi gratuito, TV
              e una splendida vista sulla vallata o sulla collina. Disponiamo di
              35 camere: singole, doppie, triple, quadruple e una quintupla,
              alcune con possibilità di letto extra o culla per neonati fino a 3
              anni. Il relax ti aspetta.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Contattaci per prenotare il tuo soggiorno o per qualsiasi
              richiesta. Siamo qui per aiutarti con le tue esigenze di alloggio.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/room1.jpg"
              alt="Double room"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <Image
              src="/images/room2.jpg"
              alt="Room interior"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <Image
              src="/images/room3.jpg"
              alt="Quadruple room"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Modulo di Contatto */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Contattaci
        </h2>
        <form onSubmit={handleSubmitForm} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg text-dark-brown mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-3 border border-[#5C4033] rounded-md"
                placeholder="Il tuo nome"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-lg text-dark-brown mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full p-3 border border-[#5C4033] rounded-md"
                placeholder="Il tuo indirizzo email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-lg text-dark-brown mb-2">
              Messaggio
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              rows="5"
              className="w-full p-3 border border-[#5C4033] rounded-md"
              placeholder="Facci sapere come possiamo aiutarti oppure lascia un tuo commento. (Se desideri lasciare un feedback anonimo, inserisci nome ed email come anonymous@email.com)"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent-red hover:bg-accent-red/80 text-dark-brown px-6 py-3 rounded-lg font-medium transition-colors border border-[#5C4033] cursor-pointer"
          >
            Invia Messaggio
          </button>
        </form>
      </section>

      {/* Sezione FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Domande Frequenti
        </h2>
        <div className="space-y-4">
          <div className="transition-colors">
            <p className="font-medium text-lg">
              Come posso prenotare una stanza?
            </p>
            <p className="text-gray-500">
              Puoi prenotare una stanza direttamente dal nostro sito o
              contattandoci tramite il modulo di contatto.
            </p>
          </div>
          <div className="transition-colors">
            <p className="font-medium text-lg">
              Quali sono gli orari di check-in e check-out?
            </p>
            <p className="text-gray-500">
              Il check-in è disponibile dalle 14:00, mentre il check-out è entro
              le 11:00. Se hai bisogno di flessibilità, faccelo sapere.
            </p>
          </div>
          <div className="transition-colors">
            <p className="font-medium text-lg">La colazione è inclusa?</p>
            <p className="text-gray-500">
              Sì, la colazione è inclusa nel soggiorno. Offriamo diverse
              opzioni, incluse quelle vegetariane e vegane.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione Contatti */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Dettagli di Contatto
        </h2>
        <div className="grid gap-4 md:grid-cols-2 text-lg text-gray-700">
          <div>
            <h3 className="font-medium text-dark-brown mb-2">
              Numeri di Telefono
            </h3>
            <ul className="space-y-1">
              <li>Reception: +39 0775 56061</li>
              <li>Assistenza Clienti: +39 351 912 0094</li>
              <li>WhatsApp: +39 351 483 4549</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-dark-brown mb-2">
              Indirizzi Email
            </h3>
            <ul className="space-y-1">
              <li>Informazioni generali: info@centrostudibahai.it</li>
              <li>Prenotazioni: centrostudibahai@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="mb-12 px-4">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6 text-center">
          Come Raggiungerci
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-700 mb-8">
          <p>
            Ci trovi al seguente indirizzo:
            <br />
            <strong>Via Giovanni Falcone 7, 03010 Acuto (FR), Italia</strong>.
          </p>
          <p>
            Nota: la nostra posizione su Google Maps potrebbe non essere
            accurata. Per evitare confusione, consigliamo di utilizzare le
            coordinate qui sotto per una navigazione precisa.
          </p>
        </div>

        <div className="relative w-full pt-[40%] rounded-md overflow-hidden mb-8 max-w-5xl mx-auto shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d743.6465210446331!2d13.174413869636869!3d41.79413329805627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ3JzM4LjkiTiAxM8KwMTAnMzAuMiJF!5e0!3m2!1sit!2sie!4v1748544950562!5m2!1sit!2sie"
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-700 mb-8">
          <p>
            Disponiamo di un parcheggio gratuito per gli ospiti che arrivano in
            auto (dall'autostrada A1, uscita Anagni-Fiuggi).
          </p>
          <p>
            Per richiedere un trasferimento in taxi dagli aeroporti di Fiumicino
            o Ciampino, oppure un passaggio da Roma o Fiuggi, contattaci a:
            <br />
            <a
              href="mailto:centrostudibahai@gmail.com"
              className="text-blue-600 underline"
            >
              centrostudibahai@gmail.com
            </a>
          </p>
          <p>
            Per arrivare in autobus da Roma, consulta gli orari su:
            <br />
            <a
              href="https://servizi.cotralspa.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              servizi.cotralspa.it
            </a>{" "}
            — destinazione: <strong>Bivio di Acuto</strong> oppure{" "}
            <strong>Fiuggi</strong>.
          </p>
          <p>
            Per arrivare in treno, consulta:
            <br />
            <a
              href="https://www.trenitalia.com/it.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Trenitalia
            </a>{" "}
            oppure{" "}
            <a
              href="https://www.italotreno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              ItaloTreno
            </a>{" "}
            — stazione: <strong>Anagni-Fiuggi</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
