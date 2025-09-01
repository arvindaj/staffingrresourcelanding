import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/iotsoftwareservices.css";

// Import your custom icons/images
import IconConsulting from "../assets/img3/Group 187.svg";
import IconResearch from "../assets/img3/Group 188.svg";
import IconCustomDev from "../assets/img3/Group 189.svg";
import IconImplementation from "../assets/img3/Group 190.svg";
import IconCloud from "../assets/img3/Group 191.svg";
import IconIntegration from "../assets/img3/Group 192.svg";
import IconReplatform from "../assets/img3/Group 193.svg";
import IconTroubleshoot from "../assets/img3/Group 194.svg";
import IconSupport from "../assets/img3/Group 195.svg";

const IotSoftwareServices = () => {
    const services = [
        {
            icon: IconConsulting,
            title: "IoT consulting and architecture assessment",
            desc: "Our experienced consultants and architects conduct in-depth evaluations of IoT architectures and deliver actionable recommendations for improvements."
        },
        {
            icon: IconResearch,
            title: "Research and prototyping (PoC, MVP)",
            desc: "SaM Solutions’ specialists enable safe and rapid launch of Internet of Things projects by developing proof of concepts or minimum viable products."
        },
        {
            icon: IconCustomDev,
            title: "Custom IoT development",
            desc: "We create unique Internet of Things solutions to meet specific business and industrial demands."
        },
        {
            icon: IconImplementation,
            title: "End-to-end IoT implementation",
            desc: "SaM Solutions’ team offers full-cycle IoT development, from concept creation to final product launch."
        },
        {
            icon: IconCloud,
            title: "IoT cloud development",
            desc: "Our experts build reliable cloud-based networks to ensure seamless performance and connectivity for IoT applications and devices."
        },
        {
            icon: IconIntegration,
            title: "Integration services",
            desc: "SaM Solutions’ team offers full-cycle IoT development, from concept creation to final product launch."
        },
        {
            icon: IconReplatform,
            title: "Replatforming and optimization",
            desc: "Our experts build reliable cloud-based networks to ensure seamless performance and connectivity for IoT applications and devices."
        },
        {
            icon: IconTroubleshoot,
            title: "IoT device troubleshooting",
            desc: "SaM Solutions’ team offers full-cycle IoT development, from concept creation to final product launch."
        },
        {
            icon: IconSupport,
            title: "Maintenance and support",
            desc: "Our experts build reliable cloud-based networks to ensure seamless performance and connectivity for IoT applications and devices."
        }
    ];

    return (
        <section className="py-5 ">
            <div className="container text-center">
                {/* Section Heading */}
                <h2 className="section-heading mb-3">
                    Our IoT software development services
                </h2>
                <p className="section-subtext mb-5">
                    We comprehend your business needs with our ERP solutions team to help you tap in available
                    data and resources, putting them to best use for creative and scalable ERP products.
                </p>

                {/* Grid Layout */}
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card h-100  border-0 p-lg-4 service-card">
                                {/* Flex row for img + title */}
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="me-3"
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                    <h5 className="service-title mb-0">{service.title}</h5>

                                </div>
                                <p className="service-desc text-muted">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IotSoftwareServices;
