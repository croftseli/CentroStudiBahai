"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

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
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Dove Siamo
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-md mb-4">
          {/* Sostituire con mappa reale */}
          <p className="text-center pt-24 text-gray-500">Segnaposto Mappa</p>
        </div>
        <p className="text-lg text-gray-700">
          Via Giovanni Falcone, 7, ex Capodimonte, 49, Acuto, Lazio, Italia,
          03010
        </p>
      </section>
    </div>
  );
}
