import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Blockchainimg from "../assets/img2/Group 148.svg";
import bgBlockchain from "../assets/img2/Groupbg.svg";
import "../assets/css/blockchain.css";

// Import your custom icons
import iconExplore from "../assets/img2/Group.svg";
import iconApi from "../assets/img2/Groupone.svg";
import iconCharts from "../assets/img2/Grouptwo.svg";
import iconCrypto from "../assets/img2/Groupthree.svg";

const BlockchainSection = () => {
  const [activeFeature, setActiveFeature] = useState("Explore the top blockchains");

  const features = [
    {
      title: "Distributed Consensus",
      description:
        "Ensures all network participants agree on a single version of the ledger without a central authority.",
      icon: iconExplore,
    },
    {
      title: "Real-Time Transparency",
      description:
        "The level of transparency of all transactions in the network is immediate.",
      icon: iconApi,
    },
    {
      title: "Tamperproof Data Storage",
      description:
        "The level of transparency of all transactions in the network is immediate.",
      icon: iconCharts,
    },
    {
      title: "Smart Contract Trust",
      description:
        "Allow reliable automation of code-based processes without intermediaries.",
      icon: iconCrypto,
    },
  ];

  return (
    <div className="container py-5 p-4 mt-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="fs-1">
            Safe, More Efficient, more transparent Data Storage
          </h2>
          <p className="text-muted " style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
            fontSize: "15px",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}>
           Blockchain has an innovative data solution- distributed, encrypted, trust-based. Compared to a centralized system, which lacks security due to the storage of the data on a single vulnerable point, the blockchain allows storing the information on numerous servers, providing it with immunity to manipulation and extremely high levels of resilience. All transactions or records are encrypted and only entitled parties will have access or validation right to the records

          </p>

          {/* Features List */}
          <ul className="list-unstyled text-start">
            {features.map((feature) => (
              <li
                key={feature.title}
                role="button"
                className={`p-3 d-flex flex-column mb-3 rounded-3 ${activeFeature === feature.title
                  ? "bg-light shadow-sm border"
                  : ""
                  }`}
                onClick={() => setActiveFeature(feature.title)}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="me-3"
                    style={{ width: "32px", height: "32px", }}
                  />
                  <strong style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "100%",
                  }}>{feature.title}</strong>
                </div>

                {/* Show description only if active */}
                {activeFeature === feature.title && (
                  <p className="text-muted mt-2 mb-0" style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "15px",
                    // lineHeight: "100%",
                  }}>{feature.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="col-lg-6 col-md-12 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center p-md-0 mb-md-4">
          <div className="position-relative w-100 d-flex justify-content-center p-md-0">
            {/* Base image */}
            <img
              src={Blockchainimg}
              alt="Laptop"
              className="rounded-4  laptop-bg-animation"
            />
            {/* Overlay images */}
            <div className="blockchain-overlay-card">
              <img src={bgBlockchain} alt="Overlay" className="bgBlockchaintwo" />
              <img src={bgBlockchain} alt="Overlay" className="bgBlockchainone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
