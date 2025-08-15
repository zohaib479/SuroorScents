'use client';
import React from 'react';

const ScrollBanner = () => (
  <div className="scroll_container">
    {[...Array(6)].map((_, i) => (
      <div className="scroll" key={i}>
        <h2>{i === 5 ? '50% OFF' : '30% OFF'}</h2>
        <h2>Order Now</h2>
        <div className="break"></div>
      </div>
    ))}
  </div>
);

export default ScrollBanner;