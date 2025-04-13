"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    console.log("Form submitted: ", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto px-6 py-12">
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
                className="w-full p-3 border border-gray-300 rounded-md"
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
                className="w-full p-3 border border-gray-300 rounded-md"
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
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Please let us know what we can help you with or you can leave your feedback here as well (If you want to leave an anonymous review, please fill in your name and email as anonymous@email.com)"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded-full font-medium transition-colors"
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
              <li>General Inquiries: lapanoramicahotel@bahai.it</li>
              <li>Bookings: lapanoramicahotel@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Find Us Here
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-md mb-4">
          {/* Replace with actual map component or iframe */}
          <p className="text-center pt-24 text-gray-500">Map Placeholder</p>
        </div>
        <p className="text-lg text-gray-700">
          Via Giovanni Falcone, 7, ex Capodimonte, 49, Acuto, Lazio, Italy,
          03010
        </p>
      </section>
    </div>
  );
}
