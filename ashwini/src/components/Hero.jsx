import heroImage from '../assets/oli.jpg';
import { FaArrowRight } from 'react-icons/fa';
import "./hero.css" 

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Hero Image */}
      <img src={heroImage} alt="Hero" className="hero-image" />
      
      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="hero-text-container">
          <h2 className="hero-title">Now Hiring</h2>
          <p className="hero-subtitle">
            If you’re interested in shaping the way the world lives, moves, and connects, you’re in the right place.
          </p>
          <a href="#apply" className="apply-button">
            Apply to one of our open positions <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
