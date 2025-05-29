// src/components/HomeComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHandshake, FaMoneyBillAlt, FaMapMarkerAlt, FaSearchLocation, FaPhoneAlt, FaShoppingBasket } from 'react-icons/fa';
import heroImage from '../assets/hero.jpeg'; // Adjust path if needed

export default function HomeComponent() {
  const gardens = [
    { name: "Gardener A", veggies: "Tomatoes, Spinach" },
    { name: "Gardener B", veggies: "Carrots, Kale" },
    { name: "Gardener C", veggies: "Peppers, Lettuce" },
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">Urban <strong>Harvest</strong></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Availability</Link>
          <Link to="/">Guides</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Fresh Rooftop Produce,<br />Directly to you.</h1>
        <p className="hero-subtitle">Connect with local gardeners within 2Km</p>
        <div className="hero-image-container">
          <img src={heroImage} alt="Rooftop garden" className="hero-image" />
          <button className="hero-button">Explore Gardens</button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="reasons">
          <div>
            <FaLeaf size={25} />
            <p>Fresh Produce</p>
          </div>
          <div>
            <FaHandshake size={25} />
            <p>No Middlemen</p>
          </div>
          <div>
            <FaMoneyBillAlt size={25} />
            <p>Affordable Price</p>
          </div>
          <div>
            <FaMapMarkerAlt size={25} />
            <p>Support Local</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div>
            <FaSearchLocation size={30} />
            <p>Find Gardens</p>
          </div>
          <div>
            <FaPhoneAlt size={30} />
            <p>Contact Gardener</p>
          </div>
          <div>
            <FaShoppingBasket size={30} />
            <p>Pick Fresh Produce</p>
          </div>
        </div>
      </section>

      {/* Nearby Gardens Section */}
      <section className="gardens">
        <h2>Nearby Gardens</h2>
        <div className="garden-list">
          {gardens.map((g, i) => (
            <div className="garden-card" key={i}>
              <h4>{g.name}</h4>
              <p>{g.veggies}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Urban Harvest. All rights reserved.</p>
      </footer>
    </>
  );
}
