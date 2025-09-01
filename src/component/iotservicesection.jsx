import "bootstrap/dist/css/bootstrap.min.css";
import laptopBg from "../assets/img3/seviceiot.svg";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const IotServicesSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-0">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Images */}
                    <div className="col-lg-6 col-md-6 col-12 position-relative mb-0 mb-md-0 d-flex justify-content-center">
                        <div
                            className="position-relative w-100 d-flex justify-content-center d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            {/* Background Image */}
                            <img
                                src={laptopBg}
                                alt="Laptop Background"
                                className="img-fluid rounded-4"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-lg-5 p-md-4">

                        <h1
                            className="mb-3 fw-bold"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(20px, 3vw, 44px)", // responsive heading
                                lineHeight: "120%",
                            }}
                        >
                            Internet of Things (IoT) development services
                        </h1>

                        <p
                            className="text-muted mb-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(14px, 2.5vw, 16px)", // responsive body text
                                lineHeight: "150%",
                            }}
                        >
                            Blockchain alters the way organizations perform operations – it cuts
                            down the levels of intermediation, automates the work process and
                            records that are tamper-resistant. Decentralized Ledger makes every node
                            a copy of a verified record – which means single points of failure.
                        </p>

                        <p
                            className="text-muted mb-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(14px, 2.5vw, 16px)", // responsive body text
                                lineHeight: "150%",
                            }}
                        >
                            Blockchain alters the way organizations perform operations – it cuts
                            down the levels of intermediation, automates the work process and
                            records that are tamper-resistant. Decentralized Ledger makes every node
                            a copy of a verified record – which means single points of failure.
                        </p>

                        <button
                            className="quote-btn px-4 py-2 mt-5 rounded-pill text-white"
                            style={{
                                fontSize: "clamp(13px, 2vw, 16px)",
                            }}
                        >
                            Explore Now
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default IotServicesSection;
