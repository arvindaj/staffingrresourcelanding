import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import indlag from "../assets/img/ind.png";
import mail from "../assets/img/Mail.png";
import aus from "../assets/img/aus.png";
import uk from "../assets/img/uk.png";
import us from "../assets/img/us.png";
import "../assets/css/footer.css";
 
const Footer = () => {
  const socialLinks = [
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/pavalsoftware/",
    label: "Visit our Instagram",
  },
  {
    Icon: FaFacebookSquare,
    url: "https://www.facebook.com/pavalsoftware",
    label: "Visit our Facebook",
  },
  {
    Icon: FaXTwitter,
    url: "https://x.com/paval_soft",
    label: "Visit our Twitter",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/company/paval-software/posts/?feedView=all",
    label: "Visit our LinkedIn",
  },
];
  return (
    <footer className="ftr-bg text-light pt-3 mt-5 z-0 container-fluid p-md-5 pb-md-4 overflow-hidden">
      <div className="ftr-sec">
        {/* <div className="pe-md-3 px-md-2 mb-5">
          <div className="bg-green text-dark p-4 rounded d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 ">
            <div className="text-center text-md-start w-100 w-md-50">
              <h5 className="fw-bold">Newsletter</h5>
              <p className="mb-0">
               Be the first one to know  about discounts, offers and events
              </p>
            </div>
            <div className="w-100 w-md-50">
              <div className="input-group bg-dark rounded-pill border-none p-2">
                <span className="input-group-text border border-dark bg-dark text-white">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control border border-dark bg-dark text-white"
                  placeholder="Enter your email"
                />
                <button className="btn btn-light rounded-pill z-0 button-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> */}
 
 
       <div className="pe-0 pe-md-4 px-md-3 px-0 mb-5 pt-5 pt-lg-0 border-bottom border-secondary">
          <div className="row d-flex justify-content-center gap-lg-5">
 
              <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column flex-md-row gap-2">
              <span role="img" aria-label="India">
                <img src={indlag} alt="india.flag" />
              </span>
              <span>
                <p className="mb-1 fw-bold">Main Office</p>
               
                    <p className=" fs-p">
 
                S.A, H.S. Post, 1274, Mettupalayam Rd, near Sai Baba Temple, Kuppakonam Pudur, Coimbatore, Tamil Nadu 641043
                </p>
             
               
                <a href="tel:+916380750902" className="text-green">
                  +91 6380750902
                </a>
              </span>
            </div>
 
              <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column flex-md-row gap-2">
              <span role="img" aria-label="India">
                <img src={indlag} alt="india.flag" />
              </span>
              <span>
                  <p className="mb-1 fw-bold">Corporate office</p>
               
                    <p className=" fs-p">
                53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy, Coimbatore–641012,
                </p>
               
               
                <a href="tel:+916380750902" className="text-green">
                  +91 6380750902
                </a>
              </span>
            </div>
 
            <div className="col-12 col-md-6 col-lg-2  mb-3 d-flex flex-column flex-md-row gap-2">
              <span role="img" aria-label="UK">
                <img
                  src={uk}
                  alt="india.flag"
                />
              </span>
              <span>
 
                   <p className="mb-1 fw-bold">Branch office</p>
                <p className=" fs-p">
                 47, Shaughnessy Way, Houlton, Rugby, CV23 1AU, United Kingdom
                </p>
                <a href="tel:+447402702107" className="text-green">
                  +44 7402702107
                </a>
              </span>
            </div>
 
            <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column flex-md-row gap-2">
              <span role="img" aria-label="Australia">
                <img
                  src={aus}
                  alt="india.flag"
                />
              </span>
              <span>
                  <p className="mb-1 fw-bold">Branch office</p>
                <p className=" fs-p">
                 5/23, Langhorne St, Dandenong, VIC - 3175, Australia.
 
                </p>
                <a href="tel:+61449840901" className="text-green">
                  +61 449840901
                </a>
              </span>
            </div>
 
             <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column flex-md-row gap-2">
              <span role="img" aria-label="Australia">
                <img
                  src={us}
                  alt="india.flag"
                />
              </span>
              <span>
                  <p className="mb-1 fw-bold">Branch office</p>
                <p className=" fs-p">
               5782 na Reflections Way, Mason, Ohio - 45040
                </p>
                <a href="tel:+1 5134104560" className="text-green">
                  +1 5134104560
                </a>
              </span>
            </div>
          </div>
        </div>
 
        <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center mb-5">
            <div className="text-green ps-md-3">
                <h2 className="fs-4">Our Wordpress Service industries</h2>
            </div>
            <div className="linear-line "></div>
        </div>
 
        <div className="pe-0 pe-md-3 px-md-3  px-0 text-start mb-5">
          <div className="row link-row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ms-lg-3">
              <h6 className="text-green">Our Services</h6>
               <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/website-development" className="text-white text-decoration-none list-ftr">Website Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/game-development"className="text-white text-decoration-none list-ftr">Game Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/php-development"className="text-white text-decoration-none list-ftr">PHP Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/ios-development"className="text-white text-decoration-none list-ftr">iOS Development</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/devops"className="text-white text-decoration-none list-ftr">DevOps</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/mobile-application"className="text-white text-decoration-none list-ftr">Mobile Application</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/e-commerce"className="text-white text-decoration-none list-ftr">E-Commerce</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/cloud-computing"className="text-white text-decoration-none list-ftr">Cloud Computing</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ms-lg-3">
              <h6 className="" style={{color:"#1E1E1E"}}>Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/artificial-intelligence-ai"className="text-white text-decoration-none list-ftr">Artificial Intelligence</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/internet-of-things-iot"className="text-white text-decoration-none list-ftr">Internet Of Things</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/machine-learning"className="text-white text-decoration-none list-ftr">Machine Learning</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/generative-ai"className="text-white text-decoration-none list-ftr">Generative AI</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/block-chain"className="text-white text-decoration-none list-ftr">Blockchain</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/aws-cloud"className="text-white text-decoration-none list-ftr">AWS Cloud</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/wordpress"className="text-white text-decoration-none list-ftr">WordPress</a></li>
                    <li><a target="_blank" href="https://www.pavalsoftware.com/services/cyber-security"className="text-white text-decoration-none list-ftr">Cyber Security</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <h6 className="" style={{color:"#1E1E1E"}}>Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
               <li><a target="_blank" href="https://www.pavalsoftware.com/services/search-engine-optimization-seo"className="text-white text-decoration-none list-ftr">Search Engine Optimization</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/crm"className="text-white text-decoration-none list-ftr">CRM Technologies</a></li>
                 <li><a target="_blank" href="https://www.pavalsoftware.com/services/digital-marketing"className="text-white text-decoration-none list-ftr">Digital Marketing</a></li>
              <li><a target="_blank" href="https://www.pavalsoftware.com/services/content-writing"className="text-white text-decoration-none list-ftr">Content Writing</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/ui-ux-development"className="text-white text-decoration-none list-ftr">UI & UX Design</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/services/android"className="text-white text-decoration-none list-ftr">Android Development</a></li>
                  <li><a target="_blank" href="https://www.pavalsoftware.com/services/app-development"className="text-white text-decoration-none list-ftr">App Development</a></li>
             
              </ul>
            </div>
 
           <div className="col-12 col-sm-6 col-md-4 col-lg-4  ms-lg-3 col-xl-2 mt-md-2">
              <h6 className="text-green">Hire</h6>
              <ul className="list-unstyled small pt-3 pe-3">
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-fullstack-developers"className="text-white text-decoration-none list-ftr">Hire Full-Stack Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-mobile-developers"className="text-white text-decoration-none list-ftr">Hire Mobile Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-ui-ux-developers"className="text-white text-decoration-none list-ftr">Hire UI/UX Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-digital-marketing"className="text-white text-decoration-none list-ftr">Hire Digital Marketing</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-quality-analyst"className="text-white text-decoration-none list-ftr">Hire Quality Analyst</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-android-ios"className="text-white text-decoration-none list-ftr">Hire Android & iOS Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-devops"className="text-white text-decoration-none list-ftr">Hire DevOps</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ms-lg-1 col-xl-3 ps-lg-4 mt-md-2">
                <h6 className="" style={{color:"#1E1E1E"}}>Support</h6>
              <ul className="list-unstyled small pt-3 pe-2">
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-python-developer"className="text-white text-decoration-none list-ftr">Hire Python Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-flutter-developers"className="text-white text-decoration-none list-ftr">Hire Flutter Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-java-developers"className="text-white text-decoration-none list-ftr">Hire Java Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-ai-developers"className="text-white text-decoration-none list-ftr">Hire AI Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-data-scientist"className="text-white text-decoration-none list-ftr">Hire Data Scientist</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-native-php"className="text-white text-decoration-none list-ftr">Hire Native PHP Developers</a></li>
                 <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-react-angular"className="text-white text-decoration-none list-ftr">Hire React & Angular Developers</a></li>
                <li><a target="_blank" href="https://www.pavalsoftware.com/hire/hire-cyber-security"className="text-white text-decoration-none list-ftr">Hire Cyber Security</a></li>
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-between gap-4 gap-md-0 mt-4">
               
         
              <div className="d-flex col-12 col-md-6 col-lg-6">
                <div>
                  <img
                    src={mail}
                    className="me-2 mt-1"
                  />
                </div>
 
                <div>
                  <strong>Mail</strong>
                  <br />
                  <a
                    href="mailto:info@pavalsoftware.com"
                    className="text-green"
                  >
                    info@pavalsoftware.com
                  </a>
                </div>
              </div>
             <div className="d-flex gap-2 align-items-center col-12 col-md-6 col-lg-6 justify-content-md-end gap-3 mt-md-4">
   
    {socialLinks.map(({ Icon, url, label }, idx) => (
      <span
        key={idx}
        className="border-green rounded-circle p-2 d-flex align-items-center justify-content-center"
        style={{ width: "30px", height: "30px" }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light social-icon"
          aria-label={label}
        >
          <Icon />
        </a>
      </span>
    ))}
 
            </div>
          </div>
        </div>
 
        <div className=" border-top border-secondary pt-3 text-center small pb-3">
          <div className="row text-center text-md-start gy-2 px-md-4 pe-md-4 align-items-end">
            <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
            <span><a target="_blank" href="https://www.pavalsoftware.com/terms-conditions" className="text-white text-decoration-none list-ftr">Terms and Conditions</a></span>
            <span><a target="_blank" href="https://www.pavalsoftware.com/privacy-policy" className="text-white text-decoration-none list-ftr">Privacy policy</a></span>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
              &copy; Copyright 2025, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;