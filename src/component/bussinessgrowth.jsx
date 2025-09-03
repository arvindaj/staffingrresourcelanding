import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bussiness from "../assets/img/bussinesspic.svg";
import overlayImg from "../assets/img/bussinesspic2.svg";

import FlexibleScaling from "../assets/img/bussin1.svg";
import Rapiddeployment from "../assets/img/bussin2.svg";
import Reducedoverhead from "../assets/img/bussin3.svg";
import QualityAssurance from "../assets/img/bussin4.svg";
import "../assets/css/bussinessgrowth.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function BusinessGrowth() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // run every time on scroll
      easing: "ease-in-out",
      offset: 120,    // trigger a little inside viewport
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container p-4">
      <div className="row align-items-center flex-column flex-md-row">

        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <div className="position-relative rounded overflow-hidden">
            <img
              src={Bussiness}
              alt="Business Growth"
              className="img-fluid rounded"
              data-aos="zoom-in"
            />
            {/* Overlay Image */}
            <div className="tradingesay" >
              <img
                src={overlayImg}
                alt="Overlay"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-6" data-aos="fade-left">
          <h2
            className="fw-bold display-6 text-center text-md-start mb-lg-4"
            data-aos="fade-up"
          >
            End-to-end Blockchain Development Services
          </h2>
          <p
            className="text-muted col-lg-10 mx-auto mx-md-0 mb-lg-5"
            style={{
              fontFamily: "Libre Franklin, sans-serif",
              fontWeight: 200,
              fontSize: "15px",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Pavalsoft creates custom block chains as well as custom public chains
            adapted to business requirements and provide seamless integration and
            migration to existing enterprise systems, providing organizations with
            the security, efficiency, and trust. We provide blockchain solutions
            at every stage of the process; strategy to deployment.
          </p>

          {/* list Content */}
          <ul className="list-unstyled mt-4 fs-5">
            <li
              className="d-flex align-items-start mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={FlexibleScaling}
                alt="Mobile"
                className="me-3 mt-1 flex-shrink-0"
                width={28}
                height={44}
              />
              <span
                className="text-wrap flex-grow-1 mt-1"
                style={{
                  fontFamily: "Libre Franklin, sans-serif",
                  fontWeight: 200,
                  fontSize: "15px",
                }}
              >
                Custom Smart Contracts - Smart-contracts that are entirely
                automatic, and enforce themselves fully, your workflows.
              </span>
            </li>

            <li
              className="d-flex align-items-start mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={Rapiddeployment}
                alt="Target"
                className="me-3 mt-1 flex-shrink-0"
                width={28}
                height={44}
              />
              <span
                className="text-wrap flex-grow-1 mt-1"
                style={{
                  fontFamily: "Libre Franklin, sans-serif",
                  fontWeight: 200,
                  fontSize: "15px",
                }}
              >
                Private and Public Chains - Architectures dedicated to open and
                just permissioned networks.
              </span>
            </li>

            <li
              className="d-flex align-items-start mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src={Reducedoverhead}
                alt="Idea"
                className="me-3 mt-1 flex-shrink-0"
                width={28}
                height={44}
              />
              <span
                className="text-wrap flex-grow-1 mt-1"
                style={{
                  fontFamily: "Libre Franklin, sans-serif",
                  fontWeight: 200,
                  fontSize: "15px",
                }}
              >
                dApp Development Decentralized apps developed to be transparent,
                reliable and work.
              </span>
            </li>

            <li
              className="d-flex align-items-start mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src={QualityAssurance}
                alt="Check"
                className="me-3 mt-1 flex-shrink-0"
                width={28}
                height={44}
              />
              <span
                className="text-wrap flex-grow-1 mt-1"
                style={{
                  fontFamily: "Libre Franklin, sans-serif",
                  fontWeight: 200,
                  fontSize: "15px",
                }}
              >
                Integration & Migration - Blockchain integration refers to seamless
                integration of blockchain in your existing enterprise systems.
              </span>
            </li>
          </ul>
          <a
            href="https://www.pavalsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <button
              className="btn btn-dark rounded-pill px-4 py-2 shadow-sm mt-lg-3 right-btn"
              data-aos="flip-up"
              data-aos-delay="500"
            >
              Explore Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
