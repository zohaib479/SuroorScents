import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-600">We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

        <form className="grid grid-cols-1 gap-6 text-left">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full border border-gray-300 rounded-lg p-2"></textarea>
          </div>
          <div>
            <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;