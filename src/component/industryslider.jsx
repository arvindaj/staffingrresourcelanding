import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/industryslider.css";
import Frame1 from "../assets/img/Frame1.svg";
import Frame2 from "../assets/img/Frame2.svg";
import Frame3 from "../assets/img/Frame3.svg";
import Frame4 from "../assets/img/Frame4.svg";
import Frame5 from "../assets/img/Frame5.svg";

export default function IndustrySlider() {
  const industries = [
    { img: Frame1, title: "Retails and E-Commerce" },
    { img: Frame2, title: "IT Sectors" },
    { img: Frame3, title: "Telecommunication" },
    { img: Frame4, title: "Manufacturer and Engineering" },
    { img: Frame5, title: "Finance and Banking" },
    { img: Frame1, title: "Education" },
  ];

  return (
    <div className="position-relative container mt-0 text-center">
      <div className="overflow-hidden mb-4">
        {/* Sliding Row */}
        <div className="d-flex marquee flex-nowrap align-items-center">
          {[...industries, ...industries].map((item, idx) => (
            <div
              key={idx}
              className="mx-3 text-center p-4 bg-white"
              style={{ minWidth: "200px" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid mb-3"
                style={{ maxHeight: "80px" }}
              />
              <h6 className="fw-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
