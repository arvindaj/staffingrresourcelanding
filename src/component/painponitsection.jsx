import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/painpointssection.css"; // custom CSS
import AOS from "aos";
import "aos/dist/aos.css";
import Frame4 from "../assets/img/Mask group1.svg"; // Left big image
import Frame5 from "../assets/img/Mask group2.svg"; // Bottom-right
import Frame6 from "../assets/img/Mask group3.svg"; // Top-right

export default function PainPointsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // 👈 animate every time on scroll
      easing: "ease-in-out",
      offset: 100,    // start animating a bit inside viewport
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <h2
            className="mb-3"
            data-aos="fade-right"
            style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
          >
            Designed to Solve Your Pain Points
          </h2>
          <p
            className="text-muted cardleftpara"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ fontSize: "clamp(16px, 4vw, 18px)" }}
          >
            Our core competence lies in providing tailored CRM development
            services that revolutionize the sphere of customer relations. We
            provide consulting, development, deployment, and product support for
            CRM solutions more efficiently according to the needs.
          </p>
          <button
            className="btn btn-dark rounded-pill px-4 py-2 shadow-sm right-btn"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Get A Quote
          </button>
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center gap-3">
            
            {/* Left big card */}
            <div
              className="position-relative w-100 w-md-60"
              style={{ flex: "0 0 60%" }}
              data-aos="zoom-in"
            >
              <img
                src={Frame4}
                alt="Costs of Recruitment"
                className="img-fluid rounded-3"
              />
              <div className="position-absolute bottom-0 start-0 w-100 card-text-style">
                Costs of Recruitment
              </div>
            </div>

            {/* Right side stacked */}
            <div
              className="d-flex flex-row flex-md-column gap-3 w-100 w-md-35 justify-content-center"
              style={{ flex: "0 0 35%" }}
            >
              {/* Top small card */}
              <div
                className="position-relative flex-fill frame6-shift"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={Frame6}
                  alt="Time Consuming"
                  className="img-fluid rounded-3"
                />
                <div className="position-absolute bottom-0 start-0 w-100 card-text-styles">
                  Time Consuming
                </div>
              </div>

              {/* Bottom small card */}
              <div
                className="position-relative flex-fill"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src={Frame5}
                  alt="Mismatched Skills"
                  className="img-fluid rounded-3"
                />
                <div className="position-absolute bottom-0 start-0 w-100 card-text-style">
                  Mismatched Skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
