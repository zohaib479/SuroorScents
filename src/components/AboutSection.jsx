'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AboutSection = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-red-900 via-black to-black text-white px-6 sm:px-10 md:px-20 py-16"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-playfair">
        About Us
      </h2>

      <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
        Suroor Scents is not just a brand — it's an experience. Our fragrances are crafted with precision and passion, blending confidence and allure in every spray. Made for the unforgettable.
      </p>

      <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 sm:mb-12">
        Our story began with a dream to create scents that evoke emotions and leave a lasting impression. Today, we’re proud to be one of the leading perfume brands in the industry.
      </p>

      {/* Social Section */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Follow Us On</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="bg-gray-800 p-4 sm:p-5 rounded-full hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-4 sm:p-5 rounded-full hover:bg-pink-500 transition-colors duration-300 flex items-center justify-center"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-4 sm:p-5 rounded-full hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://wa.me/923113141428"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 sm:p-5 rounded-full hover:bg-green-500 transition-colors duration-300 flex items-center justify-center"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
