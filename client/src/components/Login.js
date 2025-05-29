import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling, FaBan, FaHandsHelping, FaReceipt } from 'react-icons/fa';

export default function Login() {
  return (
    <motion.div
      className="auth-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="auth-container">
        {/* Left - Login Form */}
        <div className="auth-form">
          <h1 className="auth-brand">
            Urban <span>Harvest</span> <span className="leaf-icon"></span>
          </h1>
          <hr />
          <h2 className="auth-title">Login</h2>
          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <div className="auth-check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="auth-footer">
            <Link to="#">Forgot password?</Link>
            <Link to="/signup">SignUp</Link>
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
