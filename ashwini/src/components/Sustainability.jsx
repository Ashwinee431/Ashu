import sustainabilityImage from "../assets/oli.png"; // Replace with your actual image
import inclusionImage from "../assets/oli.png"; // Replace with your actual image
import "./sustainability.css";
const Sustainability = () => {
  return (
    <section className="sustainability-section">
      <h2 className="section-title">
        We believe sustainability is vitally important.
      </h2>
      <div className="content-wrapper">
        {/* Left Image and Text */}
        <div className="left-column">
          <img
            src={sustainabilityImage}
            alt="Sustainability"
            className="main-image"
          />
          <div className="description">
            <h3>Our approach to sustainability</h3>
            <p>
              We focus on five areas where we can make the most significant
              positive contribution: health and safety, ethics, green, community
              investment, and diversity and inclusion.
            </p>
          </div>
        </div>

        {/* Right Image and Text */}
        <div className="right-column">
          <img
            src={inclusionImage}
            alt="Diversity and Inclusion"
            className="side-image"
          />
          <div className="inclusion-description">
            <h3>Diversity and Inclusion</h3>
            <p>
              Creating a culture of inclusion is at the heart of Skanska USA’s
              business approach. Because diversity is one of our core values, we
              have adopted a Diversity Mission Statement for all U.S.
              operations.
            </p>
            <a href="#diversity" className="inclusion-link">
              Diversity and Inclusion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
