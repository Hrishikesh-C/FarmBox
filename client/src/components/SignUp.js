import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling, FaBan, FaHandsHelping, FaReceipt } from 'react-icons/fa';

export default function Signup() {
  return (
    <motion.div
      className="auth-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="auth-container">
        {/* Left - Signup Form */}
        <div className="auth-form">
          <h1 className="auth-brand">
            Urban <span>Harvest</span> <span className="leaf-icon"></span>
          </h1>
          <hr />
          <h2 className="auth-title">Signup</h2>
          <form>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="text" placeholder="Number" required />
            <button type="submit">Submit</button>
          </form>
          <div className="auth-footer">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>

        {/* Right - Why Choose Us */}
        <div className="auth-info">
          <h3>Why Choose US</h3>
          <ul>
            <li><FaSeedling /> Fresh Produce</li>
            <li><FaBan /> No Middlemen</li>
            <li><FaHandsHelping /> Support Local Gardeners</li>
            <li><FaReceipt /> Affordable Pricing</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
