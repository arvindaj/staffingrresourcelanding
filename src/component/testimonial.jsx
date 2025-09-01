import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test1 from '../assets/img/testimonials1.png';
import test2 from '../assets/img/testmonial2.jpg';
import test3 from '../assets/img/testmonial3.jpg';
import '../assets/css/testimonial.css'; // for responsive tweaks

const testimonials = [
  {
    name: "James R",
    role: "Owner, Bloom & Co.",
    text: "The use of blockchain enhanced our speed of transaction and transparency- changed the level of trust in our customer experience-altogether.",
    image: test1,
  },
  {
    name: "Anna L",
    role: "Marketing Lead, Nova",
    text: "Smart contracts saved on our expenses and sidelined intermediaries and increased automation.",
    image: test2,
  },
  {
    name: "John M",
    role: "CEO, Startup Hub",
    text: "Immutable ledger made us certain of the integrity of data- audits are now smooth and reliable.",
    image: test3,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // ✅ Only show 2 thumbnails: current + next
  const visibleThumbs = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <div className="container py-2">
      <div
        className="row align-items-center bg-white p-4 rounded testimonial-card"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
          <div className="row g-3">
            {/* Text & Buttons */}
            <div className="col-12 col-md-5 d-flex flex-column justify-content-between">
              <div data-aos="fade-down" data-aos-delay="100">
                <p className="mb-2 fs-6 fs-md-5">
                  <span
                    className="d-inline-block rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#B6ED55",
                    }}
                  ></span>
                  <strong>Testimonials</strong>
                </p>
                <h2 className="fw-bold mb-4 mt-3 fs-3 fs-md-2">
                  Listen To What They Say.
                </h2>
              </div>

              <div
                className="d-flex align-items-center flex-wrap gap-2 mt-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button className="btn btn-outline-dark rounded-circle" onClick={prevSlide}>
                  ❮
                </button>
                <button className="btn btn-outline-dark rounded-circle" onClick={nextSlide}>
                  ❯
                </button>

                {/* ✅ Only two thumbnails */}
                {visibleThumbs.map((t, i) => {
                  const actualIndex = (index + i) % testimonials.length;
                  return (
                    <img
                      key={actualIndex}
                      src={t.image}
                      alt={`thumb-${actualIndex}`}
                      onClick={() => setIndex(actualIndex)}
                      className={`rounded-4 border-2 mx-0 ${actualIndex === index ? "border-dark" : "border-secondary"
                        }`}
                      style={{
                        width: "75px",
                        height: "95px",
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Main Image */}
            <div
              className="col-12 col-md-6 text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="img-fluid rounded testimonial-img"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="col-lg-5 col-md-12 text-center text-lg-start"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <p className="mb-4 fs-5 fs-md-5">
            ❝ {testimonials[index].text} ❞
          </p>
          <h6 className="fw-bold mb-0 fs-5 fs-md-5">{testimonials[index].name}</h6>
          <p className="text-muted fs-5 fs-md-5">{testimonials[index].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
