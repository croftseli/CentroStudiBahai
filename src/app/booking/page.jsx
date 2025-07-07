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
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("There was an error sending your message.");
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Rooms</h2>
            <p className="text-gray-600 text-lg">
              Enjoy comfort and tranquility in our cozy, clean rooms, complete
              with a private bathroom, free WiFi, TV, and a beautiful view of
              the valley or hillside. We have 35 rooms, including singles,
              doubles, triples, quadruples, and a quintuple, some of which offer
              the option of an extra bed or crib for infants up to 3 years old.
              Relaxation awaits you.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Contact us to book your stay or for any inquiries. We are here to
              assist you with your accommodation needs.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/bahai-study-center-guest-room-business-meeting-accommodation.webp"
              alt="Comfortable guest room at the Bahá’í Study Center for business meeting participants"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <Image
              src="/images/bahai-study-center-guest-room-workspace-business-stays.webp"
              alt="Guest room workspace with natural light at the Bahá’í Study Center for business guests"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <Image
              src="/images/bahai-study-center-family-guest-room-business-travel.webp"
              alt="Family guest room with double bed and workspace at the Bahá’í Study Center for business travel"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmitForm} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg text-dark-brown mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-3 border border-[#5C4033]  rounded-md"
                placeholder="Your name"
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
                className="w-full p-3 border border-[#5C4033]  rounded-md"
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-lg text-dark-brown mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              rows="5"
              className="w-full p-3 border border-[#5C4033]  rounded-md"
              placeholder="Please let us know what we can help you with or you can leave your feedback here as well (If you want to leave an anonymous review, please fill in your name and email as anonymous@email.com)"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent-red hover:bg-accent-red/80 text-dark-brown px-6 py-3 rounded-lg font-medium transition-colors border border-[#5C4033] cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="transition-colors">
            <p className="font-medium text-lg">How can I book a room?</p>
            <p className="text-gray-500">
              You can book a room directly through our website or by contacting
              us via the contact form.
            </p>
          </div>
          <div className="transition-colors">
            <p className="font-medium text-lg">
              What are the check-in/check-out times?
            </p>
            <p className="text-gray-500">
              Our check-in time is from 2:00 PM, and check-out is by 11:00 AM.
              If you need flexibility, please let us know.
            </p>
          </div>
          <div className="transition-colors">
            <p className="font-medium text-lg">Is breakfast included?</p>
            <p className="text-gray-500">
              Yes, breakfast is included with your stay. We offer a variety of
              options, including vegetarian and vegan choices.
            </p>
          </div>
        </div>
      </section>

      {/* Phone Numbers and Emails Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Contact Details
        </h2>
        <div className="grid gap-4 md:grid-cols-2 text-lg text-gray-700">
          <div>
            <h3 className="font-medium text-dark-brown mb-2">Phone Numbers</h3>
            <ul className="space-y-1">
              <li>Reception: +39 0775 56061</li>
              <li>Customer Support: +39 351 912 0094</li>
              <li>WhatsApp: +39 351 483 4549</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-dark-brown mb-2">
              Email Addresses
            </h3>
            <ul className="space-y-1">
              <li>General Inquiries: info@centrostudibahai.it</li>
              <li>Bookings: centrostudibahai@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-12 px-4">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6 text-center">
          How to Find Us
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-700 mb-8">
          <p>
            You can find us at the following address:
            <br />
            <strong>Via Giovanni Falcone 7, 03010 Acuto (FR), Italia</strong>.
          </p>
          <p>
            Please note that our location on Google Maps may not be accurate. To
            avoid any confusion, we recommend using the coordinates below for
            precise navigation.
          </p>
        </div>

        <div className="relative w-full pt-[40%] rounded-md overflow-hidden mb-8 max-w-5xl mx-auto shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1487.293037716727!2d13.174292071231392!3d41.79413348649131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ3JzM4LjkiTiAxM8KwMTAnMzAuMiJF!5e0!3m2!1sen!2sie!4v1748545000670!5m2!1sen!2sie"
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-700 mb-8">
          <p>
            We have free parking for guests arriving by car (from the A1
            highway, take the exit Anagni-Fiuggi).
          </p>
          <p>
            To request a taxi transfer from the airports of Fiumicino or
            Ciampino, or a pick-up from Rome or Fiuggi, please contact us at:
            <br />
            <a
              href="mailto:centrostudibahai@gmail.com"
              className="text-blue-600 underline"
            >
              centrostudibahai@gmail.com
            </a>
          </p>
          <p>
            To arrive by bus from Rome, check the schedule at:
            <br />
            <a
              href="https://servizi.cotralspa.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              servizi.cotralspa.it
            </a>{" "}
            — destination: <strong>Bivio di Acuto</strong> or{" "}
            <strong>Fiuggi</strong>.
          </p>
          <p>
            To arrive by train, check:
            <br />
            <a
              href="https://www.trenitalia.com/it.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Trenitalia
            </a>{" "}
            or{" "}
            <a
              href="https://www.italotreno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              ItaloTreno
            </a>{" "}
            — station: <strong>Anagni-Fiuggi</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
