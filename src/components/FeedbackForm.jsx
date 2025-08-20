'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <section className="feedback-section text-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Customer Feedback</h2>

      <form
        action="https://formsubmit.co/don462671@gmail.com"
        method="POST"
        className="flex flex-col items-center space-y-4"
      >
        {/* Redirect after submission (optional) */}
        <input
          type="hidden"
          name="_next"
          value="https://suroorscents.vercel.app/thank-you"
        />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_subject"
          value="New Feedback from Website"
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="Stars"
                value={star}
                className="hidden"
                onClick={() => setSelectedStars(star)}
              />
              <FaStar
                size={30}
                className={`cursor-pointer transition-colors duration-200 ${
                  selectedStars >= star
                    ? 'text-yellow-500'
                    : 'text-gray-400'
                }`}
              />
            </label>
          ))}
        </div>

        {/* Feedback Text (optional) */}
        <textarea
          name="Feedback"
          placeholder="Write your feedback here (optional)..."
          className="border border-gray-300 rounded-lg p-3 w-4/5 max-w-lg h-28 mb-4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600  hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
