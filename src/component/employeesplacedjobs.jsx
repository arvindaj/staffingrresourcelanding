import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Architechure from "../assets/img/criclejob.svg";
import "../assets/css/employeesplacedjobs.css";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const EmployeesPlacedJobs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="iot-bg py-5 text-center p-2 p-lg-0 p-md-0">
      <div className="mt-lg-1 ">
        {/* Title */}
        <h2
          className="mb-lg-5 mb-4 text-white position-abo"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(24px, 4vw, 55px)",
            lineHeight: "120%",
            textAlign: "center",
            top: "20px",
            position: "relative",
          }}
          data-aos="fade-up"
        >
          What makes us Stand Out <br /> from the Competition?
        </h2>

        {/* Sub Title */}
        <h2
          className="mb-3 text-white"
          style={{
            fontFamily: "Libre Franklin, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(18px, 2.5vw, 30px)",
            lineHeight: "100%",
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          200,000 + Employees Placed in Jobs
        </h2>

        {/* Subtitle / Paragraph */}
        <p
          className="text-white-50 mb-lg-5 mt-lg-3"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: "Libre Franklin, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: "140%",
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Discover our growing range of WordPress web development services that
          aim to empower businesses with a custom-built and unique website.
        </p>
      </div>

      {/* Center Circle with Architecture */}
      <div className="row justify-content-center mt-lg-5 flex-nowrap overflow-auto">
        {/* Card 1 */}
        <div
          className="col-4 d-flex justify-content-center mb-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="position-relative d-inline-block text-center">
            <img
              src={Architechure}
              alt="Architecture"
              className="rounded-circle laptop-bg-animation"
              style={{ maxHeight: "clamp(120px, 22vw, 200px)" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2 className="fw-bold text-white mb-4" style={{ fontSize: "clamp(12px, 3vw, 32px)" }}>
                35+
              </h2>
            </div>
            <p className="text-white-50 mb-0" style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}>
              Industries Served
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="col-4 d-flex justify-content-center mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="position-relative d-inline-block text-center">
            <img
              src={Architechure}
              alt="Architecture"
              className="rounded-circle laptop-bg-animation"
              style={{ maxHeight: "clamp(120px, 22vw, 200px)" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2 className="fw-bold text-white mb-4" style={{ fontSize: "clamp(12px, 3vw, 32px)" }}>
                250+
              </h2>
            </div>
            <p className="text-white-50 mb-0" style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}>
              Global Clients
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="col-4 d-flex justify-content-center mb-4"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="position-relative d-inline-block text-center">
            <img
              src={Architechure}
              alt="Architecture"
              className="rounded-circle laptop-bg-animation"
              style={{ maxHeight: "clamp(120px, 22vw, 200px)" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2 className="fw-bold text-white mb-4" style={{ fontSize: "clamp(12px, 3vw, 32px)" }}>
                300+
              </h2>
            </div>
            <p className="text-white-50 mb-0" style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}>
              Successful Projects
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EmployeesPlacedJobs;
