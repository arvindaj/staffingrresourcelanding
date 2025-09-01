import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

// ✅ Flag images
import india from "../assets/img/flag1.png";
import us from "../assets/img/flag2.png";
import aus from "../assets/img/flag3.png";
import uk from "../assets/img/flag4.png";

import "react-toastify/dist/ReactToastify.css";

// const countryPhoneRegex = {
//   "+91": /^[6-9]\d{9}$/,
//   "+1": /^\d{10}$/,
//   "+44": /^\d{10,11}$/,
//   "+61": /^\d{9}$/
// };

const countryPhoneRegex = {
  "+91": /^[6-9]\d{9}$/, // India
  "+61": /^4\d{8}$/, // Australia
  "+65": /^[89]\d{7}$/, // Singapore
  "+44": /^(7\d{9}|1\d{9}|2\d{9})$/, // UK
};

const phoneLengths = {
  "+91": 10, // India
  "+61": 9, // Australia
  "+65": 8, // Singapore
  "+44": 10, // UK
};

const flagOptions = [
  { value: "+91", label: "India", icon: india },
  { value: "+61", label: "Australia", icon: us },
  { value: "+65", label: "SG", icon: uk },
  { value: "+44", label: "UK", icon: aus },
];

// ✅ Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    minHeight: "40px",
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 6px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
};

// ✅ Show flag + label
const formatOptionLabel = ({ label, icon, value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={icon} alt={label} width="20" height="15" />
    <span>{value}</span>
  </div>
);

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]{2,100}$/.test(formData.name))
      newErrors.name = "Name must contain only letters and spaces";

    // Email
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w.-]+@[\w.-]+\.(com|in|co|net|org)$/i.test(formData.email))
      newErrors.email = "Email must be valid (.com, .in, etc.)";

    // Phone
    const phoneRegex = countryPhoneRegex[formData.countryCode];
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = `Invalid phone number for ${formData.countryCode}`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/blockchain`, {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        message: formData.message,
      });

      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 p-lg-0 py-0 pb-0 p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className="row g-4 rounded-4 p-4 overflow-hidden align-items-center"
        style={{
          background:
            "linear-gradient(102.81deg, #1E1E1E 50.12%, rgba(142, 196, 64, 0.9) 161.15%)",
        }}
      >
        <div className="col-12 col-lg-7 text-white" data-aos="fade-right">
          <button className="bg-white rounded-pill mb-4 px-4 py-2 d-flex align-items-center gap-2">
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: "#B6ED55",
                borderRadius: "50%",
              }}
            ></span>
            <span className="fw-bold text-dark">Call to Action</span>
          </button>
          <h1 className="fw-bold display-5 display-md-4 display-lg-3">
            listen to what they say.
          </h1>
          <p
            className="text-white-50 mt-3"
            style={{
              fontFamily: "Libre Franklin, sans-serif",
              fontWeight: 200,
              fontSize: "16px",
              width: "90%",
            }}
          >
            We can upgrade your business to transparent, secure, and efficient
            solutions using a blockchain.
          </p>
        </div>

        <div className="col-12 col-lg-5" data-aos="fade-left">
          <div
            className="bg-white p-4 rounded-4 shadow contact-form"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <h5 className="fw-semibold mb-4 text-center">Quick Proposal</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control mb-2"
                style={errors.name ? { borderColor: "red" } : {}}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-control mb-2"
                style={errors.email ? { borderColor: "red" } : {}}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}

              {/* ✅ Flag + Phone Row */}
              <div className="d-flex align-items-center border rounded-3 mb-2">
                <Select
                  options={flagOptions}
                  value={flagOptions.find(
                    (opt) => opt.value === formData.countryCode
                  )}
                  onChange={(selected) =>
                    setFormData((prev) => ({
                      ...prev,
                      countryCode: selected.value,
                    }))
                  }
                  styles={customStyles}
                  formatOptionLabel={formatOptionLabel}
                  isSearchable={false}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  // onChange={handleChange}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, ""); // keep only digits
                    const maxLength = phoneLengths[formData.countryCode] || 15; // default fallback
                    if (onlyDigits.length <= maxLength) {
                      setFormData((prev) => ({ ...prev, phone: onlyDigits }));
                      setErrors((prev) => ({ ...prev, phone: "" }));
                    }
                  }}
                  maxLength={phoneLengths[formData.countryCode] || 15}
                  placeholder="Phone Number"
                  className="form-control border-0 ms-2"
                  style={errors.phone ? { borderColor: "red" } : {}}
                />
              </div>
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="form-control mb-3"
                style={errors.message ? { borderColor: "red" } : {}}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}

              <div className="d-grid">
                <button
                  className="btn btn-dark rounded-pill right-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
