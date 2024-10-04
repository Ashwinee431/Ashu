import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Skanska USA</h4>
          <p>
            At Skanska, we build for a better society. From hospitals to stadiums, airports to corporate headquarters, and power plants to tunnels and bridges, the important buildings and infrastructure we create help heal, transport, entertain and energize communities.
          </p>
        </div>

        <div className="footer-section">
          <h4>Shortcuts</h4>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#code-conduct">Our Code of Conduct</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#investor-relations">Investor Relations</a></li>
            <li><a href="#projects">Search our Projects</a></li>
            <li><a href="#partner">Partner with Skanska</a></li>
            <li><a href="#diversity">Supplier Diversity Portal</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <p>
            Skanska USA<br />
            Empire State Building<br />
            350 Fifth Avenue<br />
            32nd Floor<br />
            New York, NY 10118<br />
            Telephone: +1 917 438 4500
          </p>
          <a href="#regional-offices">Contact Our Regional Offices</a><br />
          <a href="#view-map">View map</a>
        </div>

        <div className="footer-section">
          <h4>Latest share price</h4>
          <p>
            10/4/2024 5:30 PM CET<br />
            <strong>SKA B: SEK 220.3 +2.5%</strong>
          </p>
          <p>
            Skanska AB is listed on the NASDAQ OMX Stockholm and traded under the SKA B symbol.
          </p>
          <a href="#share-graph">View the share graph on Skanska Group website</a>
        </div>
      </div>

      <div className="footer-lower-content">
        <div className="footer-section">
          <h4>About Skanska Group</h4>
          <p>Skanska is one of the world’s leading project development and construction groups.</p>
          <a href="#our-projects">Our projects</a><br />
          <a href="#in-brief">Skanska in brief</a>
        </div>

        <div className="footer-section">
          <h4>Change country</h4>
          <a href="#change-country">Change country: United States</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Skanska</p>
        <p><a href="#terms">Terms of use</a> | <a href="#privacy">Privacy policy</a> | <a href="#sitemap">Sitemap</a> | <a href="#cookie">cookie preferences</a></p>
        <p>Skanska USA Inc., 350 Fifth Avenue 32nd Floor New York, NY 10118. +1 917 438 4500</p>
      </div>
    </footer>
  );
};

export default Footer;
