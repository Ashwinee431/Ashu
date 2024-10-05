import jobImage from "../assets/oli.png"; // Replace with the correct image path
import "./JobListing.css";
const jobs = [
  {
    title: "Development Associate",
    location: "Washington, DC",
    deadline: "11/3/2024",
  },
  {
    title: "Manager - Real Estate Development",
    location: "Washington, DC",
    deadline: "11/3/2024",
  },
  {
    title: "Senior Field Administrator",
    location: "Phoenix",
    deadline: "11/3/2024",
  },
  {
    title: "Accounts Payable Administrator",
    location: "Queens",
    deadline: "11/2/2024",
  },
  {
    title: "Scheduler - New Grad",
    location: "Blue Bell",
    deadline: "11/1/2024",
  },
];

const JobListing = () => {
  return (
    <section className="job-section">
      {/* Left Side (Image and Text) */}
      <div className="job-left">
        <img src={jobImage} alt="Job Image" className="job-image" />
        <div className="job-description">
          <h3>Careers at Skanska</h3>
          <p>
            Our employees are what make Skanska strong. We are one of the
            largest construction and development companies in the world, and we
            want to improve society and the future through our efforts and
            expertise. Do you want to join our team and be part of that vision?
          </p>
        </div>
      </div>

      {/* Right Side (Job Listings) */}
      <div className="job-right">
        <h3 className="job-title">Some of our latest job vacancies</h3>
        <ul className="job-list">
          {jobs.map((job, index) => (
            <li key={index} className="job-item">
              <h4 className="job-item-title">{job.title}</h4>
              <p>{job.location}</p>
              <p>Application deadline: {job.deadline}</p>
            </li>
          ))}
        </ul>
        <button className="search-button">Search all jobs</button>
      </div>
    </section>
  );
};

export default JobListing;
