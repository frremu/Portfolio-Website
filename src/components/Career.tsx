import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Strategic Consultant</h4>
                <h5>IBM</h5>
              </div>
              <h3>Jun 2025–NOW</h3>
            </div>
            <p>
              Working on a COE integration project for a leading investment bank in Dubai, incorporating Azure Cloud (Logic Apps, Service Bus, AKS). Automated End-of-Day (EOD) batch operations for a major Tier-1 bank in Pakistan via a Java orchestration layer. Additionally, developed scalable microservices for the Travel and Tourism hub of a leading multi-national lifestyle app operating across 7 countries in the Middle East.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>4DMagic Software</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Developed a Media Booking Online Tool (MBOT). Implemented REST/SOAP APIs and 4DCast for real-time media synchronization. Contributed to microservices-based system architecture using .NET and Angular.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>4DMagic Software</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Learned and applied .NET and Angular in real-world business projects. Assisted in microservices development, client-side maintenance, and Azure deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Civil Aviation Authority</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on Bay Allocation Automation project. Implemented features using PHP Laravel and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
