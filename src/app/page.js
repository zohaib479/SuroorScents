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
import Image from "next/image"; 



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
  {
    name: 'Hamza Ahmed',
    stars: 4,
    feedback:
      'Great fragrance for daily wear. Not too strong, not too light — just perfect balance.',
  },
  {
    name: 'Ayesha Malik',
    stars: 5,
    feedback:
      'I feel so confident when I wear this perfume. Everyone keeps asking me what I’m wearing!',
  },
  {
    name: 'Bilal Hussain',
    stars: 4.5,
    feedback:
      'Smells premium and lasts the whole day. I used it for a wedding and got so many compliments.',
  },
  {
    name: 'Noor Fatima',
    stars: 5,
    feedback:
      'My absolute favorite! Sweet yet classy, it has become part of my everyday routine.',
  },
  {
    name: 'Usman Siddiqui',
    stars: 4,
    feedback:
      'Good projection and long-lasting, though a little strong in the first spray. Settles beautifully.',
  },
  {
    name: 'Hira Shah',
    stars: 5,
    feedback:
      'This scent makes me feel elegant. It’s soft but leaves a mark wherever I go.',
  },
  {
    name: 'Omar Farooq',
    stars: 4.5,
    feedback:
      'Perfect for office wear. Subtle yet noticeable — people at work love it!',
  },
  {
    name: 'Mariam Javed',
    stars: 5,
    feedback:
      'One word: WOW! It feels like luxury in a bottle. The floral notes are divine.',
  },
  {
    name: 'Tariq Mehmood',
    stars: 4,
    feedback:
      'Nice perfume overall. Stays on clothes even the next day. Very impressed.',
  },
  {
    name: 'Anaya Khan',
    stars: 5,
    feedback:
      'Feminine, elegant, and powerful. I’ve tried many brands, but this is the one!',
  },
  {
    name: 'Saad Qureshi',
    stars: 4.5,
    feedback:
      'A warm and rich fragrance. Perfect for evenings and special occasions.',
  },
  {
    name: 'Iqra Naveed',
    stars: 5,
    feedback:
      'The perfect signature scent. I feel complete with just one spray.',
  },
  {
    name: 'Hassan Ali',
    stars: 4,
    feedback:
      'Strong opening but dries down into something really smooth and classy.',
  },
  {
    name: 'Mehwish Raza',
    stars: 5,
    feedback:
      'This perfume makes me feel glamorous. It’s definitely worth every rupee.',
  },
  {
    name: 'Farhan Saeed',
    stars: 4.5,
    feedback:
      'Lasts much longer than most designer fragrances. Really impressed by the quality.',
  },
  {
    name: 'Khadija Noor',
    stars: 5,
    feedback:
      'Beautiful scent! Not too overpowering but always gets noticed. My go-to choice.',
  },
  {
    name: 'Danish Butt',
    stars: 4,
    feedback:
      'Good value for money. Smells better than a lot of expensive perfumes.',
  },
  {
    name: 'Areeba Sheikh',
    stars: 5,
    feedback:
      'Such a classy fragrance! It instantly uplifts my mood whenever I wear it.',
  },
  {
    name: 'Moiz Hassan',
    stars: 4.5,
    feedback:
      'Balanced, smooth, and long-lasting. My wife loves it when I wear this.',
  },
  {
    name: 'Samina Iqbal',
    stars: 5,
    feedback:
      'Perfect for parties! It stands out without being too much. I just love it!',
  },
  {
    name: 'Junaid Akram',
    stars: 4,
    feedback:
      'A reliable fragrance. I’ve been using it daily and still enjoy every spray.',
  },
  {
    name: 'Hafsa Baloch',
    stars: 5,
    feedback:
      'This perfume feels like pure luxury. I get compliments every single time.',
  },
  {
    name: 'Noman Asif',
    stars: 4.5,
    feedback:
      'Manly, bold, and smooth. Works perfectly for dinners or casual outings.',
  },
  {
    name: 'Sadia Tariq',
    stars: 5,
    feedback:
      'So feminine and soft. I love the blend of floral and musky notes.',
  },
  {
    name: 'Imran Khan',
    stars: 4,
    feedback:
      'Great smell, but I wish the bottle was a bit bigger. Still worth it!',
  },
  {
    name: 'Laiba Yousaf',
    stars: 5,
    feedback:
      'This perfume is addictive. I can’t stop smelling my wrist after spraying!',
  },
];

const productm = [
  {
    title: 'Oud-e-Hayaan',
    description: 'Long-lasting fragrance with Oudi notes.',
    price: 1999,
    originalPrice: 2899,
    image: '/Images/png/white oud.png',
    hoverImage: '/Images/Oud-bg.png',
  },


  {
    title:'Unwanted Code',
    description: 'Long-lasting fragrance with Bright & Fruity notes.',
    price: 1599,
    originalPrice: 2299,
    image: '/Images/png/azzaro.png',
    hoverImage: '/Images/azzaor-bg.png',
  },
     {
    title: 'Suroor Spirit',
    description: 'Long-lasting fragrance with Floral notes.',
    price: 2099,
    originalPrice: 2999,
    image: '/Images/png/janan.png',
    hoverImage: '/Images/janan-bg.png',
  },
   
 {
    title: 'Velvet Eors',
    description: 'Long-lasting fragrance with Mint notes.',
    price: 2199,
    originalPrice: 2999,
    image: '/Images/png/office.png',
    hoverImage: '/Images/OFFICE-BG.png',
  },
 
];
const productw = [

  {
title: 'Lovely Oud',
    description: 'Long-lasting fragrance with Oud notes.',
    price: 1499,
    originalPrice: 2199,
    image: '/Images/png/lovely.png',
    hoverImage: '/Images/lovely-bg.png',
  },

  {
    title: 'Gucci Bloom',
    description: 'A floral fragrance with a blend of jasmine and tuberose.',
    price: 1699,
    originalPrice: 2499,
    image: '/Images/png/gucci.png',
    hoverImage: '/Images/gucci-bg.png',
  },


];
const productsU = [
  {
    title: 'Oud-e-Hayaan',
    description: 'Long-lasting fragrance with Oudi notes.',
    price: 1799,
    originalPrice: 2599,
    image: '/Images/png/savage.png',
    hoverImage: '/Images/savage-bg.png',
  },
  {
    title: 'Unwanted Code',
    description: 'Long-lasting fragrance with Bright & Fruity notes.',
    price: 1599,
    originalPrice: 2299,
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
      
        <div className="circle"></div>
        <div className="container">
          <Navbar toggleMode={toggleMode} lightMode={!isDark} />
          <HeroSection />
        </div>
      <main>
       <section className="section py-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
    
    {/* Image Section */}
    <div className="product_container flex-1 flex justify-center">
      <Image
        src="/Images/png/janan.png"
        alt="Best Seller Perfume"
        width={600}
        height={400}
        className="rounded-xl object-contain shadow-md"
      />
    </div>

   {/* Content Section */}
<div className="content flex-1 text-center md:text-left space-y-3 md:space-y-4 md:-mt-10">
  <h2 className="Demand text-2xl md:text-3xl font-extrabold text-gray-800">
    Our Most Demanding Product
  </h2>
  <p className="para text-gray-600 text-base leading-relaxed">
    <b>Suroor Spirit</b> blends timeless elegance with a modern touch. 
    Soft florals, warm woods, and subtle musk create a fragrance that’s graceful yet unforgettable.
  </p>
  <a
    href="#"
    className="inline-block text-yellow-600 font-semibold hover:underline transition"
  >
    Read More
  </a>
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
