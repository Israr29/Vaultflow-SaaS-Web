import React from "react";
import "./hero-section.css";
import heroBg from "../../assets/hero-section-bg.png";

function HeroSection() {
  return (
    <section className="hero-section">
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
    </section>
  );
}

export default HeroSection;
