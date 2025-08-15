import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "Absolutely love these scents! They last long and smell amazing. Will definitely buy again."
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/testimonial1.jpg"
                alt="Customer 1"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-700">Ayesha Khan</p>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "Suroor Scents exceeded my expectations. The quality is top-notch and packaging is beautiful."
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/testimonial2.jpg"
                alt="Customer 2"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-700">Ali Raza</p>
                <p className="text-sm text-gray-500">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "Perfect for gifts and personal use. Highly recommended!"
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/testimonial3.jpg"
                alt="Customer 3"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-700">Fatima Noor</p>
                <p className="text-sm text-gray-500">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;