import "bootstrap/dist/css/bootstrap.min.css";
import bgPattern from "../assets/img/bgPattern.jpg";
import "../assets/css/explorecard.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExploreCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-0 mt-md-2 mt-lg-4">
      <div
        className="text-center text-white p-5 mx-auto"
        style={{
          maxWidth: "900px",
          borderRadius: "25px",
          background: `url(${bgPattern}) center/cover no-repeat, #000`,
        }}
        data-aos="fade-up" // Animation here
      >
        <h5 className="fw-bold mb-4" data-aos="fade-down" data-aos-delay="200">
          Ready to Launch a Lightning-Fast WordPress Site That Performs Everywhere and Build speed-driven WordPress solutions

        </h5>
        <button
          className="btn px-4 py-2 explore-btn"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
