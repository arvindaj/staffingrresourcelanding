import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Staff1 from "../assets/img/staff1.svg";
import Staff2 from "../assets/img/staff2.svg";
import Staff3 from "../assets/img/staff3.svg";

const services = [
  {
    title: "Contract Staffing Services",
    image: Staff1,
    features: [
      "Recruitment with Reference Checks",
      "Complete Position Assessment",
      "Seamless Transition to Regular Payroll Position",
    ],
  },
  {
    title: "Executive Search Services",
    image: Staff2,
    features: [
      "Recruitment with Reference Checks",
      "Complete Position Assessment",
      "Seamless Transition to Regular Payroll Position",
    ],
  },
  {
    title: "Temporary-Permanent Services",
    image: Staff3,
    features: [
      "Recruitment with Reference Checks",
      "Complete Position Assessment",
      "Seamless Transition to Regular Payroll Position",
    ],
  },
];

const StaffingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
            <div
              className="card h-100 shadow-sm border-0 rounded-4"
              style={{
                background:
                  "linear-gradient(160.36deg, #E6F8E1 9.25%, #F7F7F7 24.18%, #FFFFFF 95.53%)",
              }}
            >
              <div className="card-body text-center">
                {/* Title */}
                <h5
                  className="card-title mb-5 mt-4 text-center"
                  style={{
                    fontFamily: "Libre Franklin, sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "100%",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {service.title}
                </h5>

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid mb-4"
                  style={{ maxHeight: "150px" }}
                  data-aos="fade-down"
                  data-aos-delay="400"
                />

                {/* Features */}
                <ul className="list-unstyled">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="py-2 border-top mb-2"
                      style={{
                        fontFamily: "Libre Franklin, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "100%",
                      }}
                      data-aos="fade-up"
                      data-aos-delay={500 + i * 100}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffingServices;
