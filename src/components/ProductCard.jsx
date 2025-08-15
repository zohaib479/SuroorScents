'use client';
import React from 'react';
import Link from "next/link";

const ProductCard = ({ title, description, price, originalPrice, image, hoverImage }) => (
  <div className="card">
    <div className="image-wrapper">
      <img src={image} alt={title} className="default-img" />
      <img src={hoverImage} alt={`${title} Hover`} className="hover-img" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <span style={{ textDecoration: 'line-through' }}>PKR {originalPrice}</span>
    <span style={{ color: '#ff4d4d', fontWeight: 'bold', marginLeft: 10 }}>PKR {price}</span><br />
     <Link
        href={{
          pathname: "/order",
          query: { title, price, description, image },
        }}
      >
        <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-3 hover:bg-yellow-600">
          Add to Cart
        </button>
      </Link>
  </div>
);

export default ProductCard;
