import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="contact"
      className="bg-white py-24 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-16 rounded-full bg-blue-500"></div>

          <h2 className="text-4xl font-bold text-gray-900">
            Contact
          </h2>

          <div className="h-1 w-16 rounded-full bg-blue-500"></div>
        </div>

        <p className="mb-10 text-lg text-gray-600">
          Interested in collaborating, discussing opportunities,
          or learning more about my work?
        </p>

        {/* Reveal Button */}
        {!showContact ? (
          <button
            onClick={() => setShowContact(true)}
            className="rounded-xl bg-blue-500 px-8 py-4 font-medium text-white transition hover:bg-blue-600"
          >
            Reveal Contact Information
          </button>
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center gap-3 text-gray-800">
              <FaEnvelope className="text-blue-500" />
              <span>lazaroaaronpaul@gmail.com</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-gray-800">
              <FaPhone className="text-blue-500" />
              <span>+63 0961 721 5331</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}