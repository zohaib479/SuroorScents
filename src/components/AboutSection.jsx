'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AboutSection = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-red-900 to-black text-white min-h-screen flex items-center justify-center px-6 md:px-20"
  >
    <div className="max-w-4xl text-center">
      <h2 className="text-4xl font-extrabold mb-6 font-playfair">About Us</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        Toxic Scents is not just a brand — it's an experience.  
        Our fragrances are crafted with precision and passion,  
        blending confidence and allure in every spray. Made for the unforgettable.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-10">
        Our story began with a dream to create scents that evoke emotions  
        and leave a lasting impression. Today, we’re proud to be one of  
        the leading perfume brands in the industry.
      </p>

      {/* Social Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Follow Us On</h3>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 transition-colors duration-300"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-4 rounded-full hover:bg-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-4 rounded-full hover:bg-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-4 rounded-full hover:bg-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
