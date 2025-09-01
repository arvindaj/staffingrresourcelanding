import "bootstrap/dist/css/bootstrap.min.css";
import overlayImg from "../assets/img2/tradingeasy.svg"; 
import laptopBg from "../assets/img2/tradingimg.svg"; 
import Criclebg from "../assets/img2/cricle.svg"; 
import Greentike from "../assets/img2/greenacircle.svg";
import '../assets/css/wordpresssection.css';
import '../assets/css/tradingsection.css';

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TradingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <section className="py-2 mt-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Images */}
          <div className="col-lg-6 col-md-12 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center">
            <div 
              className="position-relative w-100 d-flex justify-content-center"
              data-aos="fade-right" data-aos-delay="200"
            >
              {/* Background Image */}
              <img
                src={laptopBg}
                alt="Laptop Background"
                className="img-fluid rounded-4"
              />

              {/* Overlay Image */}
              <div className="tradingesay" >
                <img
                  src={overlayImg}
                  alt="Overlay"
                  className="img-fluid rounded-4 "
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 col-md-12 col-12 text-center text-md-start px-lg-5 p-md-4">

            <h1 
              className="mb-3 display-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Automate, Increase Confidence With Blockchains
            </h1>

            <p
              className="text-muted mb-3"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 200,
                fontSize: "15px",
              }}
            >
              Blockchain alters the way organizations perform operations – it cuts
              down the levels of intermediation, automates the work process and
              records that are tamper-resistant. Decentralized Ledger makes every node
              a copy of a verified record – which means single points of failure.
            </p>

            <div 
              className="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between"
              style={{ backgroundColor: '#F9F9F9' }}
              data-aos="fade-left"
              data-aos-delay="700"
            >
              {/* Left Side - Features */}
              <div className="mt-2">
                <p className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="800">
                  <img src={Greentike} alt="check" className="me-2" style={{ width: "30px", height: "20px" }}/>
                  Decentralized Ledger
                </p>
                <p className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="900">
                  <img src={Greentike} alt="check" className="me-2" style={{ width: "30px", height: "20px" }}/>
                  Incorruptible Records
                </p>
                <p className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="1000">
                  <img src={Greentike} alt="check" className="me-2" style={{ width: "30px", height: "20px" }}/>
                  Cryptographic Security
                </p>
              </div>

              {/* Right Side - Circle */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "130px", width: '50%' }}
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <img src={Criclebg} alt="Circle" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
