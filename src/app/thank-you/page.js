"use client";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full text-center p-10 border border-gray-700">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-600/20 border-2 border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Thank You Text */}
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-300 mb-8">
          We truly appreciate your trust in <span className="text-yellow-400">Suroor Scents</span>.  
          Your order is being processed with love and care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl shadow-md transition-all">
              Continue Shopping
            </button>
          </Link>
          <Link href="/#feedback">
            <button className="px-6 py-3 bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-400 font-semibold rounded-xl shadow-md transition-all">
              Give Feedback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
