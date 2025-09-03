import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png';
import '../assets/css/header.css';
import { useState } from "react";
import Popup from "../component/popup";
const Headersection = () => {
const [showModal, setShowModal] = useState(false);

     const loadTawk = () => {
  if (!window.Tawk_API) {
    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/68ad8db7429f5919255f216c/1j3iv35pr"; 
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  } else {
    window.Tawk_API.maximize();
  }
};
    return (
        <>
        <header className="header py-3 border-mobile-hide mb-md-0 animated-border">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Section - Logo & Growth */}
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center">
                            <img
                                src={defaultLogo}
                                alt="Paval Soft Logo"
                                className="logo-img"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/50";
                                }}
                            />
                            <div className="vr bg-dark mx-3 d-none d-lg-block" style={{ height: "40px", opacity: 1.5 }}></div>
                            <a target="_blank" href="#" className="growth-btn d-none d-xl-block mt-4">
                                <span className="dot me-2"> </span>
                                Growth
                            </a>
                        </div>
                    </div>

                    <div className="col-6 d-none d-lg-block col-lg-4">
                        <div className="contact-numbers">
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/in.svg"
                                    alt="India"
                                    className="flag-icon me-1 mb-1"
                                />
                                <span
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                >
                                    +91 6307050902
                                </span>
                            </div>
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/au.svg"
                                    alt="Australia"
                                    className="flag-icon me-1 mb-1"
                                />
                                <span
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                >
                                    +74 402720107
                                </span>
                            </div>
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/gb.svg"
                                    alt="UK"
                                    className="flag-icon me-1 mb-1"
                                />
                                <span
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                >
                                    +61 449840901
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* Right Section - Let's Talk Button */}
                    <div className="col-6 col-lg-4 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-3">
                            <div className="vr bg-dark me-2 d-none d-lg-block" style={{ height: "40px", opacity: 0.8 }}></div>
                            <button className="btn rounded-pill px-3 px-lg-4 py-2 quote-btn"
                             onClick={() => setShowModal(true)}
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>

                    {/* Mobile View - Auto Sliding Contact Numbers */}
                    <div className="col-12 d-block d-lg-none my-2">
                        <div className="mobile-slider-wrapper">
                            <div className="contact-slider animate-scroll">
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-1" />
                                    +91 6307050902
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-1" />
                                    +74 402720107
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-1" />
                                    +61 449840901
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
            `}</style>
        </header>
       {showModal && <Popup onClose={() => setShowModal(false)}/>}
        </>
    );
};

export default Headersection;
