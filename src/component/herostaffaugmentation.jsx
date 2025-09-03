import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/staffaugmentation.css"; // custom styles
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../component/popup";
import laptopImg from "../assets/img/herostaffaugmentation.svg"; // laptop with screen
import teamImg2 from "../assets/img/2staffaugmentation.svg"; // man on right

const 
StaffAugmentation = () => {

  const [showModal, setShowModal] = useState(false);
 useEffect(() => {
        AOS.init({
            duration: 1000,  // animation speed
            once: false,     // 👈 animate every time on scroll (not just once)
            easing: "ease-in-out",
            offset: 100,     // trigger when 100px inside viewport
        });

        AOS.refresh(); // 👈 ensure animations recalc on scroll
    }, []);


    return (
        <>
        <section className="py-lg-5 bg-white">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Side - Laptop with text inside */}
                    <div className="col-lg-6 text-center mb-4 mb-lg-0 position-relative p-0">
                        <div className="laptop-wrapper">
                            <img
                                src={laptopImg}
                                alt="Laptop"
                                data-aos="zoom-in"
                                className="img-fluid laptop-img"
                            />
                            <div className="laptop-content" >
                                <h2 className="fw-bold">
                                    IT <span className=""
                                    style={{ color: "#8FDC24" }}>
                                        Staff
                                        </span> 
                                        <br />
                                    Augmentation <br />
                                    <span className="" style={{ color: "#8FDC24" }}>Services</span>
                                </h2>
                                <p className="mt-lg-3"
                                data-aos="fade-left">
                                    Our IT staff augmentation services, <br />
                                    you can hire from a pool of <strong>350+</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Man and Network Illustration */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="d-flex align-items-center flex-column flex-lg-col">
                            {/* Man image */}
                            <div className="man-img me-lg-3 mb-3 mb-lg-0">
                                <img
                                    src={teamImg2}
                                    alt="Businessman"
                                    data-aos="fade-left"
                                    className="img-fluid"
                                />
                            </div>
                            {/* Text + Button */}
                            <div>
                                <p className="right-text" data-aos="fade-left">
                                    Unlock Your Business’s Potential with Tailored Staffing
                                    Solutions
                                </p>
                                <button className=" right-btn px-4 py-2 shadow" data-aos="flip-up"
                                  onClick={() => setShowModal(true)}>
                                    Get Started
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {showModal && <Popup onClose={() => setShowModal(false)} />}</>
    );
};

export default StaffAugmentation;
