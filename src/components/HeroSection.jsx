'use client';
import React from 'react';
import Image from "next/image"; // ✅ import Next.js Image

const HeroSection = () => (
  <div className="hero_Section">
    <div className="left_container">
      <h1 className="font-semibold">Smells You Deserve</h1>
    </div>
    <div className="center_container">
      <Image
        src="/Images/png/office.png" // ✅ public folder ka path
        alt="Perfume Bottle"
        width={400}  // ✅ required
        height={400} // ✅ required
        className="object-contain"
        priority
      />
    </div>
    <div className="right_container m">
      <p className="para">
        <strong>
          Indulge in a scent that tells your story. Our fragrance is more than a perfume —
          it’s an expression of elegance, confidence, and timeless charm. With every note, it awakens your
          senses, leaving a lasting impression wherever you go. One spray, and you’re unforgettable.
        </strong>
      </p>
    </div>
  </div>
);

export default HeroSection;
