'use client';
import React, { useState } from 'react';

const Navbar = ({ toggleMode, lightMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/Images/Suroor-Scents.png" alt="Suroor-Scents Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="navlinks-container desktop">
          <li><a href="#" className="navlinks active">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">LOGIN</a></li>
        </ul>

        {/* Right side */}
        <div className="right">
       
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => setIsOpen(false)}>HOME</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>SHOP</a></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          position: relative;
          z-index: 50;
        }

        .logo img {
          height: 50px;
        }

        .navlinks-container.desktop {
          display: flex;
          gap: 20px;
          list-style: none;
        }

        .navlinks-container li a {
          text-decoration: none;
          font-weight: 500;
        }

        .mode-toggle {
          margin-right: 10px;
          font-size: 18px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger {
          display: none;
          font-size: 22px;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Mobile menu drawer */
        .mobile-menu {
          position: fixed;
          top: 60;
          right: -220px; /* hidden by default */
          height: 90%;
          width: 120px;
          background: inherit; /* same theme */
          box-shadow: -2px 0 5px rgba(0,0,0,0.3);
          transition: right 0.3s ease-in-out;
          display: flex;
          align-items: center;
        }
        .mobile-menu.open {
          right: 0; /* slides in */
        }
        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-left: 20px;
        }
        .mobile-menu ul li a {
          text-decoration: none;
          font-weight: 800;
        }

        /* Hide desktop nav on mobile */
        @media (max-width: 768px) {
          .navlinks-container.desktop {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
