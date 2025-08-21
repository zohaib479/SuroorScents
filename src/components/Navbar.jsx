'use client';
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/Images/Suroor-Scents.png" alt="Suroor-Scents Logo" />
        </div>

        {/* Menu */}
        <ul className="navlinks-container">
          <li><a href="#" className="navlinks active">HOME</a></li>
          <li><a href="#about" className="navlinks">ABOUT</a></li>
          <li><a href="#product-card" className="navlinks">SHOP</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          position: relative;
          z-index: 50;
          color: white;
          background: transparent;
        }

        .logo img {
          height: 50px;
        }

        .navlinks-container {
          display: flex;
          gap: 25px;
          list-style: none;
        }

        .navlinks-container li a {
          text-decoration: none;
          font-weight: 500;
          color: white;
          position: relative;
          transition: color 0.2s;
        }

        /* Hover/Active underline animation */
        .navlinks-container li a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -3px;
          left: 0;
          background-color: #fbbf23; /* yellow underline */
          transition: width 0.3s ease-in-out;
        }

        .navlinks-container li a:hover::after,
        .navlinks-container li a.active::after {
          width: 100%;
        }

        .navlinks-container li a:hover,
        .navlinks-container li a.active {
          color: #fbbf23;
        }

        /* Mobile: horizontal, smaller, right-aligned, touch-friendly underline */
        @media (max-width: 768px) {
          .navlinks-container {
            gap: 15px;
            font-size: 14px;
            justify-content: flex-end;
          }

          /* Make active underline visible on mobile */
          .navlinks-container li a.active::after {
            width: 100%;
          }

          /* Optional: underline on tap (simulated hover) */
          .navlinks-container li a:active::after {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
