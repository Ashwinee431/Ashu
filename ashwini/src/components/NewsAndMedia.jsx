import "./NewsAndMedia.css"
const NewsAndMedia = () => {
  const pressReleases = [
    { date: '10/4/2024', title: 'Skanska-led JV awarded $625M contract for the design-build of the I-95 project in Rhode Island' },
    { date: '10/2/2024', title: 'Skanska to lead construction of Plant City Technical College in Hillsborough County' },
    { date: '9/30/2024', title: 'Skanska appoints new Supplier Diversity Manager' },
    { date: '9/23/2024', title: 'Skanska signs lease with Hicks Johnson PLLC at recently completed 1550 on the Green office tower in Houston' },
    { date: '9/23/2024', title: 'Skanska celebrates completion of UNC Health’s North Carolina Surgical Hospital in Chapel Hill' },
  ];

  const tweets = [
    { user: '@SkanskaUSA', date: '10/3/2024', text: 'In partnership with @DukeEngineering\'s Christensen Family Center for Innovation, we challenged students to tackle a real-world...' },
    { user: '@SkanskaUSA', date: '10/3/2024', text: 'Our FL team broke ground at a new technical college in Plant City, Florida. The 52,000-SF, two-building project will be the first of its kind for...' },
    { user: '@SkanskaUSA', date: '10/2/2024', text: 'We’re spotlighting five Skanska employees who are giving back to their alma maters through exciting university construction projects. From ne...' }
  ];

  return (
    <section className="news-section">
      <h2 className="section-title">News and social media</h2>
      <div className="news-content">
        
        {/* Left column: Press releases */}
        <div className="left-column">
          <h3 className="sub-title">Latest press releases</h3>
          <ul className="press-list">
            {pressReleases.map((release, index) => (
              <li key={index} className="press-item">
                <p>{release.date} 4:00 AM EST</p>
                <a href="#" className="press-link">{release.title}</a>
              </li>
            ))}
          </ul>
          <button className="press-button">Read latest press releases</button>
        </div>
        
        {/* Right column: Twitter feed */}
        <div className="right-column">
          <h3 className="sub-title">Twitter</h3>
          <ul className="twitter-list">
            {tweets.map((tweet, index) => (
              <li key={index} className="tweet-item">
                <p><strong>{tweet.user}</strong> - {tweet.date}</p>
                <p>{tweet.text}</p>
                <a href="#" className="tweet-link">Show more</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;
