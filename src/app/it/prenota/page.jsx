"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const lineGrow = {
  hidden: { scaleX: 0, opacity: 0.6 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.85, ease: "easeOut", delay: 0.12 },
  },
};

const cardHover = {
  hover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

function SectionShell({ title, subtitle, rightLine = true, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={0}
      className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
    >
      <div className="p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-dark-brown">{title}</h2>
            {subtitle ? (
              <p className="text-gray-600 mt-2 leading-relaxed">{subtitle}</p>
            ) : null}
          </div>

          {rightLine ? (
            <div className="hidden md:block">
              <div className="h-px w-48 bg-black/20" />
            </div>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </motion.section>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((a) => ({ ...a, [name]: value }));
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
          console.error("FAILED...", err);
          alert("Si è verificato un errore durante l'invio del messaggio.");
        }
      );
  };

  return (
    <main className="relative bg-[#f0e8e4] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 py-16 space-y-16">
        {/* ROOMS */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
        >
          <div className="p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-semibold text-dark-brown tracking-tight">
                  Le Nostre Camere
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Comfort, silenzio e una vista sulla valle o sul versante.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="h-px w-72 bg-black/20" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* LEFT: text card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                  <div className="p-8">
                    <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                      Panoramica delle Camere
                    </div>

                    <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-gray-800">
                      <p>
                        Godetevi comfort e tranquillità nelle nostre camere
                        accoglienti e pulite, complete di bagno privato, WiFi
                        gratuito, TV e una splendida vista sulla valle o sul
                        versante. Disponiamo di 35 camere, tra singole, doppie,
                        triple, quadruple e una quintuple, alcune delle quali
                        offrono la possibilità di un letto aggiuntivo o di una
                        culla per bambini fino a 3 anni. Il relax vi aspetta.
                      </p>

                      <div className="h-px w-20 bg-black/15" />

                      <p>
                        Contattateci per prenotare il vostro soggiorno o per
                        qualsiasi richiesta. Siamo qui per assistervi per le
                        vostre esigenze di alloggio.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                    <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                      Pulito, tranquillo e confortevole
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: gallery card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                  <div className="p-8">
                    <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                      Galleria
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6">
                      <motion.div
                        variants={cardHover}
                        whileHover="hover"
                        className="relative"
                      >
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[260px]">
                          <Image
                            src="/images/bahai-study-center-guest-room-business-meeting-accommodation.webp"
                            alt="Camera confortevole per gli ospiti presso il Centro Studi Bahá’í per partecipanti a incontri di lavoro"
                            fill
                            className="object-cover
                               grayscale-[12%] contrast-[1.03] saturate-[0.96]
                               group-hover:grayscale-0 group-hover:saturate-100
                               transition duration-500"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={cardHover}
                        whileHover="hover"
                        className="relative"
                      >
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[260px]">
                          <Image
                            src="/images/bahai-study-center-guest-room-workspace-business-stays.webp"
                            alt="Postazione di lavoro in camera con luce naturale presso il Centro Studi Bahá’í per ospiti in viaggio di lavoro"
                            fill
                            className="object-cover
                               grayscale-[12%] contrast-[1.03] saturate-[0.96]
                               group-hover:grayscale-0 group-hover:saturate-100
                               transition duration-500"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={cardHover}
                        whileHover="hover"
                        className="relative col-span-2"
                      >
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[300px]">
                          <Image
                            src="/images/bahai-study-center-family-guest-room-business-travel.webp"
                            alt="Camera familiare con letto matrimoniale e postazione di lavoro presso il Centro Studi Bahá’í per viaggi di lavoro"
                            fill
                            className="object-cover
                               grayscale-[12%] contrast-[1.03] saturate-[0.96]
                               group-hover:grayscale-0 group-hover:saturate-100
                               transition duration-500"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                    <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                      Vista sulla valle o sul versante
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT US */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
        >
          <div className="p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-semibold text-dark-brown tracking-tight">
                  Contattaci
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Inviate un messaggio e vi risponderemo al più presto.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="h-px w-72 bg-black/20" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* LEFT: form card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="p-8">
                    <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                      Modulo di Contatto
                    </div>

                    <form
                      onSubmit={handleSubmitForm}
                      className="mt-6 space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs tracking-[0.22em] uppercase text-gray-500 mb-2">
                            Nome
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Il tuo nome"
                            required
                            className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-[16px]
                               text-gray-800 placeholder:text-gray-400
                               focus:outline-none focus:ring-2 focus:ring-[#cb956f]/45"
                          />
                        </div>

                        <div>
                          <label className="block text-xs tracking-[0.22em] uppercase text-gray-500 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Il tuo indirizzo email"
                            required
                            className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-[16px]
                               text-gray-800 placeholder:text-gray-400
                               focus:outline-none focus:ring-2 focus:ring-[#cb956f]/45"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.22em] uppercase text-gray-500 mb-2">
                          Messaggio
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          rows={6}
                          placeholder="Fateci sapere in cosa possiamo aiutarvi. Potete lasciare qui anche i vostri feedback."
                          required
                          className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-[16px]
                             text-gray-800 placeholder:text-gray-400
                             focus:outline-none focus:ring-2 focus:ring-[#cb956f]/45"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full px-10 py-4 text-[16px] font-semibold
                           bg-orange-600 text-white hover:bg-orange-700
                           border border-black/10
                           shadow-[0_10px_26px_rgba(0,0,0,0.18)]
                           transition-all"
                      >
                        Invia Messaggio
                      </button>
                    </form>
                  </div>

                  <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                    <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                      Per recensioni anonime, usa anonymous@email.com
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: guidance card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden h-full">
                  <div className="p-8">
                    <div className="text-xs tracking-[0.28em] uppercase text-gray-500">
                      Note Utili
                    </div>

                    <div className="mt-6 divide-y divide-black/10">
                      <div className="py-5 flex items-start justify-between gap-6">
                        <div className="text-gray-800 font-medium">
                          Prenotazioni
                        </div>
                        <div className="text-gray-600 text-right">
                          Usa il modulo oppure invia un'email direttamente per
                          le prenotazioni.
                        </div>
                      </div>

                      <div className="py-5 flex items-start justify-between gap-6">
                        <div className="text-gray-800 font-medium">Gruppi</div>
                        <div className="text-gray-600 text-right">
                          Indica le date, il numero di ospiti e la tipologia di
                          camera.
                        </div>
                      </div>

                      <div className="py-5 flex items-start justify-between gap-6">
                        <div className="text-gray-800 font-medium">
                          Tempi di Risposta
                        </div>
                        <div className="text-gray-600 text-right">
                          Di solito WhatsApp è il più rapido.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 bg-white/60 px-8 py-4">
                    <div className="text-xs tracking-[0.26em] uppercase text-gray-500">
                      Siamo qui per aiutarti
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <SectionShell title="Domande Frequenti" subtitle={null}>
          <div className="space-y-7">
            <div className="border-b border-black/10 pb-7">
              <p className="font-semibold text-lg text-gray-900">
                Come posso prenotare una camera?
              </p>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Puoi prenotare una camera direttamente tramite il modulo qui
                sopra, via email o tramite WhatsApp.
              </p>
            </div>

            <div className="border-b border-black/10 pb-7">
              <p className="font-semibold text-lg text-gray-900">
                Quali sono gli orari di check-in/check-out?
              </p>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Il check-in è a partire dalle 14:00 e il check-out entro le
                11:00. Se hai bisogno di flessibilità, faccelo sapere.
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg text-gray-900">
                La colazione è inclusa?
              </p>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Sì, la colazione è inclusa nel soggiorno. Offriamo una varietà
                di opzioni, incluse scelte vegetariane e vegane.
              </p>
            </div>
          </div>
        </SectionShell>

        {/* CONTACT DETAILS */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
        >
          <div className="p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-dark-brown">
                  Contatti
                </h2>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Contattaci per telefono, WhatsApp o email.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="h-px w-56 bg-black/20" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone card */}
              <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                    Numeri di Telefono
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-gray-700">Reception</span>
                      <a
                        href="tel:+39077556061"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        +39 0775 56061
                      </a>
                    </div>
                    <div className="h-px bg-black/10" />
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-gray-700">Assistenza Clienti</span>
                      <a
                        href="tel:+393519120094"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        +39 351 912 0094
                      </a>
                    </div>
                    <div className="h-px bg-black/10" />
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-gray-700">WhatsApp</span>
                      <a
                        href="https://wa.me/393514834549"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        +39 351 483 4549
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-black/[0.02] border-t border-black/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    Risposta più rapida: WhatsApp
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="rounded-2xl border border-black/10 bg-white/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                    Indirizzi Email
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-gray-700">Informazioni Generali</p>
                      <a
                        href="mailto:info@centrostudibahai.it"
                        className="mt-1 inline-block font-medium text-gray-900 hover:underline break-all"
                      >
                        info@centrostudibahai.it
                      </a>
                    </div>

                    <div className="h-px bg-black/10" />

                    <div>
                      <p className="text-gray-700">Prenotazioni</p>
                      <a
                        href="mailto:centrostudibahai@gmail.com"
                        className="mt-1 inline-block font-medium text-gray-900 hover:underline break-all"
                      >
                        centrostudibahai@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-black/[0.02] border-t border-black/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    Per le prenotazioni, invia un'email a Prenotazioni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FIND US */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
        >
          <div className="p-10">
            {/* header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-dark-brown">
                  Come Raggiungerci
                </h2>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Puoi trovarci al seguente indirizzo:
                </p>
              </div>

              <div className="hidden md:block">
                <div className="h-px w-56 bg-black/20" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* LEFT */}
              <div className="lg:col-span-5 flex flex-col min-h-[620px]">
                {/* address block */}
                <div className="rounded-2xl border border-black/10 bg-white/70 px-6 py-6 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                    Indirizzo
                  </p>
                  <p className="mt-3 text-lg font-semibold text-gray-900 leading-snug">
                    Via Giovanni Falcone 7, 03010 Acuto (FR), Italia.
                  </p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Si prega di notare che la nostra posizione su Google Maps
                    potrebbe non essere accurata. Per evitare qualsiasi
                    confusione, consigliamo di utilizzare le coordinate qui
                    sotto per una navigazione precisa.
                  </p>

                  <div className="mt-5 h-px w-24 bg-[#cb956f]/70" />

                  <p className="mt-5 text-sm text-gray-600">
                    Parcheggio gratuito disponibile per gli ospiti che arrivano
                    in auto (dall'autostrada A1 prendere l'uscita
                    Anagni-Fiuggi).
                  </p>
                </div>

                {/* travel cards */}
                <div className="mt-8 space-y-4 flex-1">
                  <div className="rounded-2xl border border-black/10 bg-white/60 px-6 py-5">
                    <p className="text-sm font-semibold text-dark-brown">
                      Trasferimento Taxi
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Per richiedere un trasferimento taxi dagli aeroporti di
                      Fiumicino o Ciampino, o un pick-up da Roma o Fiuggi,
                      contattaci a:
                    </p>
                    <a
                      href="mailto:centrostudibahai@gmail.com"
                      className="mt-2 inline-block text-blue-600 underline"
                    >
                      centrostudibahai@gmail.com
                    </a>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white/60 px-6 py-5">
                    <p className="text-sm font-semibold text-dark-brown">
                      In Autobus
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Per arrivare in autobus da Roma, consulta gli orari su:
                    </p>
                    <a
                      href="https://servizi.cotralspa.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-600 underline"
                    >
                      servizi.cotralspa.it
                    </a>
                    <p className="mt-2 text-gray-700">
                      Destinazione: <strong>Bivio di Acuto</strong> o{" "}
                      <strong>Fiuggi</strong>.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white/60 px-6 py-5">
                    <p className="text-sm font-semibold text-dark-brown">
                      In Treno
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Per arrivare in treno, consulta:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-gray-700">
                      <a
                        href="https://www.trenitalia.com/it.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Trenitalia
                      </a>
                      <span>o</span>
                      <a
                        href="https://www.italotreno.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        ItaloTreno
                      </a>
                      <span>— Stazione:</span>
                      <strong>Anagni-Fiuggi</strong>.
                    </div>
                  </div>
                </div>

                {/* footer line */}
                <div className="pt-6">
                  <div className="h-px w-32 bg-black/15" />
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-7">
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 h-[920px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1487.293037716727!2d13.174292071231392!3d41.79413348649131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ3JzM4LjkiTiAxM8KwMTAnMzAuMiJF!5e0!3m2!1sen!2sie!4v1748545000670!5m2!1sen!2sie"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                  </div>

                  {/* caption */}
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="h-px flex-1 bg-black/15" />
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      Usa le coordinate per una navigazione precisa
                    </p>
                    <div className="h-px flex-1 bg-black/15" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
