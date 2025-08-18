'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <section className="feedback-section text-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Customer Feedback</h2>

      {/* Star Rating */}
      <div id="feedback" className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            onClick={() => setSelectedStars(star)}
            className={`cursor-pointer transition-colors duration-200 ${
              selectedStars >= star ? 'text-yellow-500' : 'text-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Feedback Text */}
      <textarea
        placeholder="Write your feedback here..."
        className="border border-gray-300 rounded-lg p-3 w-4/5 max-w-lg h-28 mb-4"
      />

      <br />

      {/* Submit Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
        Submit Feedback
      </button>
    </section>
  );
};

export default FeedbackForm;
