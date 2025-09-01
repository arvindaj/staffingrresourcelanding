import "bootstrap/dist/css/bootstrap.min.css";
import Minebanner from "../assets/img3/herobot2.svg"; // 👉 Right side hand + hexagons
import leftbanner from "../assets/img3/herobot1.svg"; // 👉 Left side robot
import "../assets/css/herosection.css";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // initialize animations
    }, []);

    return (
        <section
            className="container-fluid text-dark position-relative p-0"
            style={{ overflow: "hidden" }}
        >
            <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>

                {/* ✅ Left Section */}
                <div
                    className="col-12 col-md-5 px-lg-0  p-0 text-start position-relative mb-5 mb-md-0"
                    data-aos="fade-right"
                >
                    <div className="d-flex flex-column flex-md-row align-items-center">

                        {/* Robot Image - hidden on mobile, visible on md and above */}
                        <div
                            className="me-md-4 mb-4 mb-md-0 text-center d-none d-md-block"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <img
                                src={leftbanner}
                                alt="robot-left"
                                className="img-fluid"
                                style={{ width: "300px", maxWidth: "130%" }}
                            />
                        </div>

                        {/* Green Lines + Text */}
                        <div className="mx-lg-5 text-center text-md-start mx-md-3 p-4">
                            <h1
                                className="fw-bold mb-3"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(20px, 3vw, 44px)", // auto scales on mobile
                                    lineHeight: "120%",
                                }}
                            >
                                INTERNET OF THINGS
                            </h1>

                            <p
                                className="text-muted mb-4 mx-auto mx-md-0"
                                style={{
                                    fontFamily: "Libre Franklin, sans-serif",
                                    fontSize: "clamp(14px, 1.5vw, 18px)", // responsive font size
                                    lineHeight: "150%",
                                    maxWidth: "420px",
                                }}
                            >
                                Discover our growing range of WordPress web development services
                                that aim to empower businesses with a custom-built and unique
                                website.
                            </p>

                            <button
                                className="quote-btn px-4 py-2 rounded-pill text-white"
                                style={{
                                    fontSize: "clamp(13px, 1vw, 16px)"
                                }}
                            >
                                Get A Quote
                            </button>

                        </div>
                    </div>
                </div>

                {/* ✅ Right Section */}
                <div className="col-12 col-md-7 text-center  p-0" data-aos="fade-left">
                    <img src={Minebanner} alt="blockchain" className="img-fluid" style={{ maxwidth: "120%", marginTop: "-100px" }} data-aos="zoom-in-up" data-aos-delay="400" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
