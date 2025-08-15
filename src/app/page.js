"use client";

import './globals.css';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ReviewSlider from '@/components/ReviewSlider';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';
import ScrollBanner from '@/components/ScrollBanner';
import AboutSection from '@/components/AboutSection';

const reviews = [
  {
    name: 'Sarah Khan',
    stars: 5,
    feedback:
      'Absolutely love this scent! It stays with me all day and I always get compliments. Will definitely repurchase!',
  },
  {
    name: 'Ali Raza',
    stars: 4.5,
    feedback:
      'Very fresh and luxurious. The bottle design is classy and the fragrance is long-lasting. Great value!',
  },
  {
    name: 'Zainab Sheikh',
    stars: 5,
    feedback:
      'Toxic Scents has become my favorite brand. Elegant and strong fragrance with a soft finish. Love it!',
  },
];

const productm = [
  {
    title: 'Oud-e-Hayaan',
    description: 'Long-lasting fragrance with Oudi notes.',
    price: 2450,
    originalPrice: 3500,
    image: '/Images/png/white oud.png',
    hoverImage: '/Images/Oud-bg.png',
  },


  {
    title:'Unwanted Code',
    description: 'Long-lasting fragrance with Bright & Fruity notes.',
    price: 2499,
    originalPrice: 3300,
    image: '/Images/png/azzaro.png',
    hoverImage: '/Images/azzaor-bg.png',
  },
     {
    title: 'Suroor Spirit',
    description: 'Long-lasting fragrance with Floral notes.',
    price: 2099,
    originalPrice: 5000,
    image: '/Images/png/janan.png',
    hoverImage: '/Images/janan-bg.png',
  },
   
 {
    title: 'Velvet Eors',
    description: 'Long-lasting fragrance with Mint notes.',
    price: 3500,
    originalPrice: 5000,
    image: '/Images/png/office.png',
    hoverImage: '/Images/OFFICE-BG.png',
  },
 
];
const productw = [

  {
title: 'Lovely Oud',
    description: 'Long-lasting fragrance with Oud notes.',
    price: 2450,
    originalPrice: 3500,
    image: '/Images/png/lovely.png',
    hoverImage: '/Images/lovely-bg.png',
  },

  {
    title: 'Gucci Bloom',
    description: 'A floral fragrance with a blend of jasmine and tuberose.',
    price: 2499,
    originalPrice: 3300,
    image: '/Images/png/gucci.png',
    hoverImage: '/Images/gucci-bg.png',
  },


];
const productsU = [
  {
    title: 'Oud-e-Hayaan',
    description: 'Long-lasting fragrance with Oudi notes.',
    price: 2450,
    originalPrice: 3500,
    image: '/Images/png/savage.png',
    hoverImage: '/Images/savage-bg.png',
  },
  {
    title: 'Unwanted Code',
    description: 'Long-lasting fragrance with Bright & Fruity notes.',
    price: 2499,
    originalPrice: 3300,
    image: '/Images/png/eros.png',
    hoverImage: '/Images/eros-bg.png',
  }
];


export default function HomePage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    document.body.classList.toggle('dark', useDark);
    document.body.classList.toggle('light', !useDark);
    setIsDark(useDark);
  }, []);

  const toggleMode = () => {
    const newTheme = !isDark;
    document.body.classList.toggle('dark', newTheme);
    document.body.classList.toggle('light', !newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setIsDark(newTheme);
  };

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
       
      </div>

      <ScrollBanner />
      <div className="main_container">
        <div className="circle"></div>
        <div className="container">
          <Navbar toggleMode={toggleMode} lightMode={!isDark} />
          <HeroSection />
        </div>
      </div>

      <main>
        <section className="section">
          <div className="container row">
            <div className="product_container">
              <img
                style={{ height: 300, width: 1350 }}
                src="/Images/png/janan.png"
                alt="Best Seller Perfume"
              />
            </div>
            <div className="content">
              <h2 className="Demand">Our Most Demanding Product</h2>
              <p className="para">
                <b>Suroor Spirit</b> is an elegant fusion of timeless sophistication and modern charm,
                inspired by the beloved Janan Spot fragrance. Its enchanting blend of soft florals, woody warmth,
                and subtle musk leaves a graceful and lasting impression.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </section>

        <h2 className="gender">For Him</h2>
        <div className="cards-section">
          {productm.map((productm, idx) => (
            <ProductCard key={idx} {...productm} />
          ))}
        </div>

        <h2 className="gender">For Her</h2>
        <div className="cards-section">
          {productw.map((productw, idx) => (
            <ProductCard key={idx + 'her'} {...productw} />
          ))}
        </div>

       <h2 className="gender">Unisex</h2>
<div className="cards-section">
  {productsU.map((product, idx) => (
    <ProductCard key={idx + 'uni'} {...product} />
  ))}
</div>

      </main>

      <ReviewSlider reviews={reviews} />
      <FeedbackForm />
      <AboutSection />
      <Footer />
    </div>
  );
}
