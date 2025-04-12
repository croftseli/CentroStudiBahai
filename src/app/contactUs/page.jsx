"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    console.log("Form submitted: ", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission (e.g., save to database)
    console.log("Review submitted: ", reviewData);
    setReviewData({ name: "", email: "", review: "" }); // Reset review form
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Contact Form */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmitForm} className="space-y-6">
          <div>
            <label className="block text-lg text-dark-brown mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-dark-brown mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
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
          <div className="transition-colors">
            <p className="font-medium text-lg">
              Are you at any point going to shut up about how great the ruhi
              book institute is?
            </p>
            <p className="text-gray-500">No.</p>
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section>
        <h2 className="text-3xl font-semibold text-dark-brown mb-6">
          Leave a Review
        </h2>
        <form onSubmit={handleSubmitReview} className="space-y-6">
          <div>
            <label className="block text-lg text-dark-brown mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={reviewData.name}
              onChange={handleReviewChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-dark-brown mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={reviewData.email}
              onChange={handleReviewChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-dark-brown mb-2">Review</label>
            <textarea
              name="review"
              value={reviewData.review}
              onChange={handleReviewChange}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
}
