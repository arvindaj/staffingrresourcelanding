import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Blockchainimg from "../assets/img3/benefits.svg";
import "../assets/css/blockchain.css";

const BenefiltsSection = () => {
  const [activeFeature, setActiveFeature] = useState("Explore the top blockchains");

  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">

        {/* ✅ Left Content */}
        <div className="col-lg-6 col-md-12 mb-0 p-5 py-0 pb-0 p-lg-0 p-md-0">
          <h2
            className="mb-4 fw-bold text-start"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(24px, 4vw, 42px)", // responsive heading
              lineHeight: "120%",
            }}
          >
            The benefits of the Internet of Things
          </h2>

          <div className="mb-4">
            <h5 className="fw-semibold">Operational efficiency</h5>
            <p
              className="text-muted text-start"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px, 2.5vw, 18px)", // responsive text
                lineHeight: "150%",
              }}
            >
              IoT solutions enable real-time monitoring and automation of
              business and production processes, leading to increased productivity
              and optimized resource consumption.
            </p>
          </div>

          <div className="mb-4 ">
            <h5 className="fw-semibold">Enhanced customer experiences</h5>
            <p
              className="text-muted text-start"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px, 2.5vw, 18px)",
                lineHeight: "150%",
              }}
            >
              With IoT devices, businesses gather valuable insights into
              customer behavior and preferences, leveraging them for proactive
              problem-solving, personalized services, and improved engagement.
            </p>
          </div>

          <div className="mb-0">
            <h5 className="fw-semibold">Cost savings</h5>
            <p
              className="text-muted text-start"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px, 2.5vw, 18px)",
                lineHeight: "150%",
              }}
            >
              IoT-powered predictive analytics help identify potential issues
              before they escalate into costly problems. By monitoring equipment
              and systems in real-time, organizations minimize downtime, extend
              asset lifespans, and reduce repair costs.
            </p>
          </div>

          {/* Button */}
          <button
            className="quote-btn btn-dark px-4 py-2 rounded-pill shadow-sm"
            style={{
              fontSize: "clamp(13px, 2vw, 16px)", // responsive button text
            }}
          >
            Explore Now
          </button>
        </div>

        {/* ✅ Right Image */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-5 mt-lg-0">
          <img
            src={Blockchainimg}
            alt="Laptop"
            className="rounded-4 laptop-bg-animation"
            style={{ maxHeight: "700px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefiltsSection;
