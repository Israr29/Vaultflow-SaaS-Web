import { motion } from "framer-motion";

import React from "react";
import "./HeroSection.css";
import heroBg from "../../assets/hero-section-bg.png";
import DashboardPreview from '../DashboardPreview/DashboardPreview'



function HeroSection() {
  return (
    <motion.div 
    initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    className="hero-section">
      <img src={heroBg} alt="hero background" className="hero-bg" />

      <div className="hero-content">
        <div className="title-section">
          <div className="small-cont">
            <p>
              We just raised $20M In Series B. <a href="#learn">Learn More</a>
            </p>
          </div>
          <div className="title">
            <p className="heading">
              Modern analytics <span className="faded-text"><br /> for the modern world</span>
            </p>
          </div>
          <p className="title-description">
            Unlock powerful insights with real-time analytics built for today’s
            fast-moving world. Make smarter decisions with intuitive,
            data-driven tools at your fingertips.
          </p>
          <div className="nav-buttons">
          <button className="btn">Download the app</button>
          <button className="btn-outline">Talk to an expert</button>
        </div>
        </div>

      </div>
       <DashboardPreview/>
    </motion.div>
  );
}

export default HeroSection;
