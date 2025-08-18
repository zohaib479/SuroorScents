"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = searchParams.get("image");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          perfumeName: title,
          price,
        }),
      });

      if (res.ok) {
        // alert("✅ Order placed! Check your email for confirmation.");
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        //redirect to thanku page
        window.location.href = "/thank-you";
      } else {
        alert("❌ Failed to place order. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen bg-black text-white py-8 px-4 font-sans">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  bg-gradient-to-br from-gray-900 to-black rounded-3xl 
                  shadow-2xl overflow-hidden grid lg:grid-cols-2 gap-0 
                  border border-gray-800">
        {/* Product Side */}
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/pattern.svg')] pointer-events-none"></div>

          <img
            src={image}
            alt={title}
            className="w-full h-60 max-w-sm object-contain rounded-xl shadow-lg  p-6  "
          />

          <h1 className="mt-6 text-3xl font-extrabold tracking-wide text-red-500 text-center">
            {title}
          </h1>
          <p className="text-gray-400 mt-3 text-center text-lg px-4 leading-relaxed">
            {description}
          </p>
          <p className="text-red-400 font-bold mt-6 text-2xl tracking-wide">
            PKR {price}
          </p>
        </div>

        {/* Checkout Form */}
        <div className="p-8 md:p-12 bg-gray-950   ">
          <h2 className=" font-semibold border-b text-center border-gray-800 pb-3  text-red-500">
            Shipping & Contact Information
          </h2>

          <form onSubmit={handleOrderSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
                className="w-full border h-10 border-gray-800 bg-gray-900 rounded-lg px-4 p-5 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium text-gray-300 mb-1">Shipping Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="House #, Street, City, Postal Code"
                className="w-full border border-gray-800 bg-gray-900 rounded-lg px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-gray-500 transition-all duration-200"
              ></textarea>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="03XX-XXXXXXX"
                className="w-full h-10 border border-gray-800 bg-gray-900 rounded-lg px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full h-10 p-10 mb-10 border border-gray-800 bg-gray-900 rounded-lg px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 pt-10 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg text-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-900/30 disabled:opacity-50"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
