import React from 'react';
import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { img: '/assets/Oud-bg.png', name: 'Oud Al Ameer', price: 'Rs. 2,999' },
            { img: '/assets/product2.jpg', name: 'Suroor Classic', price: 'Rs. 2,499' },
            { img: '/assets/product3.jpg', name: 'Midnight Musk', price: 'Rs. 2,299' },
            { img: '/assets/product4.jpg', name: 'Amber Essence', price: 'Rs. 3,199' },
          ].map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
