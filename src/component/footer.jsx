import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5 p-3">
      <div className="container">
        {/* Contact Info */}
        <div className="row text-center text-md-start mb-4">


          <div className="row address-section">
            {/* India */}
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <p className="mb-1">📧 Mail</p>
              <a
                href="mailto:info@pavalsoftware.com"
                className="text-decoration-none"
                style={{ color: "#8EC440", wordBreak: "break-word" }}
              >
                info@pavalsoftware.com
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy, Coimbatore-641012
                </p>
                <span className="phone-number">+91 6380750902</span>
              </div>
            </div>

            {/* UK */}
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="UK Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  47, Shaughnessy Way, Houlton, Rugby, CV23 1AU, United Kingdom
                </p>
                <span className="phone-number">+44 7402702107</span>
              </div>
            </div>

            {/* Australia */}
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/au.png"
                alt="Australia Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  5/23, Langhorne St, Dandenong, VIC - 3175, Australia
                </p>
                <span className="phone-number">+61 449840901</span>
              </div>
            </div>
          </div>


        </div>

        {/* Heading with flex-grow-1 line */}
        <div className="d-flex align-items-center mb-3 flex-wrap">
          <h5
            className="fw-bold mb-2 mb-md-0 me-3 fs-6 fs-lg-0"
            style={{ color: "#8EC440", whiteSpace: "nowrap" }}
          >
           Our IoT Service industries <br className="d-none d-md-block" />
           
          </h5>

          <div
            className="flex-grow-1"
            style={{
              height: "18px",
              borderRadius: "4px",
              background:
                "linear-gradient(90deg, #A7E252 0%, rgba(92, 124, 45, 0.29) 100%)",
            }}
          ></div>
        </div>

        {/* Industry Columns */}
        <div className="pe-0 pe-md-3 px-md-3  px-0 text-start mb-5 mt-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ms-lg-3">
              <h6 className="" style={{ color: '#8ec440' }}>Our Services</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/website-development" className="text-white text-decoration-none list-ftree">Website Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/game-development" className="text-white text-decoration-none list-ftr">Game Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/php-development" className="text-white text-decoration-none list-ftr">PHP Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/ios-development" className="text-white text-decoration-none list-ftr">iOS Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/devops" className="text-white text-decoration-none list-ftr">DevOps</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/mobile-application" className="text-white text-decoration-none list-ftr">Mobile Application</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/e-commerce" className="text-white text-decoration-none list-ftr">E-Commerce</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/cloud-computing" className="text-white text-decoration-none list-ftr">Cloud Computing</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ms-lg-3">
              <h6 className="text-dark" >Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/artificial-intelligence-ai" className="text-white text-decoration-none list-ftr">Artificial Intelligence</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/internet-of-things-iot" className="text-white text-decoration-none list-ftr">Internet Of Things</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/machine-learning" className="text-white text-decoration-none list-ftr">Machine Learning</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/generative-ai" className="text-white text-decoration-none list-ftr">Generative AI</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/block-chain" className="text-white text-decoration-none list-ftr">Blockchain</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/aws-cloud" className="text-white text-decoration-none list-ftr">AWS Cloud</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/wordpress" className="text-white text-decoration-none list-ftr">WordPress</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/cyber-security" className="text-white text-decoration-none list-ftr">Cyber Security</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <h6 className="text-dark" >Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/search-engine-optimization-seo" className="text-white text-decoration-none list-ftr">Search Engine Optimization</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/crm" className="text-white text-decoration-none list-ftr">CRM Technologies</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/digital-marketing" className="text-white text-decoration-none list-ftr">Digital Marketing</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/content-writing" className="text-white text-decoration-none list-ftr">Content Writing</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/ui-ux-development" className="text-white text-decoration-none list-ftr">UI & UX Design</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/android" className="text-white text-decoration-none list-ftr">Android Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/app-development" className="text-white text-decoration-none list-ftr">App Development</a></li>

              </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4  ms-lg-3 col-xl-2 mt-md-2">
              <h6 className="text-green" style={{ color: '#8ec440' }}>Hire</h6>
              <ul className="list-unstyled small pt-3 pe-3">
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-fullstack-developers" className="text-white text-decoration-none list-ftr">Hire Full-Stack Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-mobile-developers" className="text-white text-decoration-none list-ftr">Hire Mobile Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-ui-ux-developers" className="text-white text-decoration-none list-ftr">Hire UI/UX Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-digital-marketing" className="text-white text-decoration-none list-ftr">Hire Digital Marketing</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-quality-analyst" className="text-white text-decoration-none list-ftr">Hire Quality Analyst</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-android-ios" className="text-white text-decoration-none list-ftr">Hire Android & iOS Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-devops" className="text-white text-decoration-none list-ftr">Hire DevOps</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ms-lg-1 col-xl-3 ps-lg-4 mt-md-2">
              <h6 className="text-dark" >Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-python-developer" className="text-white text-decoration-none list-ftr">Hire Python Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-flutter-developers" className="text-white text-decoration-none list-ftr">Hire Flutter Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-java-developers" className="text-white text-decoration-none list-ftr">Hire Java Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-ai-developers" className="text-white text-decoration-none list-ftr">Hire AI Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-data-scientist" className="text-white text-decoration-none list-ftr">Hire Data Scientist</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-native-php" className="text-white text-decoration-none list-ftr">Hire Native PHP Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-react-angular" className="text-white text-decoration-none list-ftr">Hire React & Angular Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-cyber-security" className="text-white text-decoration-none list-ftr">Hire Cyber Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary pt-3 text-muted mt-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0 d-flex gap-3">
              <span>
                <a
                  href="https://www.pavalsoftware.com/terms-conditions"
                  className="text-white text-decoration-none list-ftr"
                >
                  Terms and Conditions
                </a>
              </span>
              <span>
                <a
                  href="https://www.pavalsoftware.com/privacy-policy"
                  className="text-white text-decoration-none list-ftr"
                >
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end text-light">
              © 2025, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
