'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ title, description, price, originalPrice, image, hoverImage }) => {
  const [showHover, setShowHover] = useState(false);

  return (
    <div 
      className="card group cursor-pointer"
      onClick={() => setShowHover(!showHover)} // mobile tap toggle
    >
      {/* Image wrapper */}
      <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-md">
        {/* Default Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-contain transition-opacity duration-500 ease-in-out ${
            showHover ? "opacity-0" : "opacity-100 group-hover:opacity-0"
          }`}
        />

        {/* Hover Image */}
        <Image
          src={hoverImage}
          alt={`${title} Hover`}
          fill
          className={`object-contain absolute inset-0 transition-opacity duration-500 ease-in-out ${
            showHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </div>

      {/* Product Details */}
      <h3 className="mt-3 font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>

      <div className="mt-2">
        <span className="line-through text-gray-400">PKR {originalPrice}</span>
        <span className="ml-2 font-bold text-red-500">PKR {price}</span>
      </div>

      {/* Order Button */}
      <Link
        href={{
          pathname: '/order',
          query: { title, price, description, image },
        }}
      >
        <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-3 hover:bg-yellow-600 transition">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
