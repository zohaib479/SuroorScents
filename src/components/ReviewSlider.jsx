'use client';
import React, { useEffect, useState } from 'react';

const ReviewSlider = ({ reviews }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="review-section">
      <h2>What Our Customers Say</h2>
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${current * 100}%)`,
            display: 'flex',
            transition: 'transform 0.8s ease-in-out',
          }}
        >
          {reviews.map((review, idx) => (
            <div className="slide" key={idx}>
              <div className="customer-name">{review.name}</div>
              <div className="stars">
                {[...Array(Math.floor(review.stars))].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {review.stars % 1 ? <i className="fas fa-star-half-alt"></i> : null}
              </div>
              <div className="feedback">{review.feedback}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
