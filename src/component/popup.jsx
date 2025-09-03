import { useState } from "react";
import "../assets/css/popup.css";
import { toastError, toastSuccess } from "../utils/toast";
import Select from "react-select";

// ✅ Flag images
import india from "../assets/img/flag1.png";
import aus from "../assets/img/flag2.png";
import sg from "../assets/img/flag3.png";
import uk from "../assets/img/flag4.png";

const Popup = ({ onClose }) => {
  const flagOptions = [
    { value: "+91", label: "India", icon: india },
    { value: "+61", label: "Australia", icon: aus },
    { value: "+65", label: "Singapore", icon: sg },
    { value: "+44", label: "UK", icon: uk },
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
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0 6px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "40px",
    }),
  };

  // ✅ Flag with value display
  const formatOptionLabel = ({ label, icon, value }) => (
    <div className="d-flex align-items-center gap-2">
      <img src={icon} alt={label} style={{ width: 20, height: 14 }} />
      <span>{value}</span>
    </div>
  );

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    countryCode: "+91",
    contact_number: "",
    user_location: "",
    content: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const phoneRegex = {
    "+91": /^[6-9]\d{9}$/, // India
    "+61": /^4\d{8}$/, // Australia
    "+65": /^[89]\d{7}$/, // Singapore
    "+44": /^(7\d{9}|1\d{9}|2\d{9})$/, // UK
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.first_name.trim()) {
      newErrors.first_name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.first_name)) {
      newErrors.first_name = "Name should contain only letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|co|edu|gov)$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.contact_number.trim()) {
      newErrors.contact_number = "Phone number is required";
    } else {
      const regex = phoneRegex[formData.countryCode];
      if (regex && !regex.test(formData.contact_number)) {
        newErrors.contact_number = "Enter a valid phone number";
      }
    }

    if (!formData.user_location.trim()) {
      newErrors.user_location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const payload = {
        name: formData.first_name,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.contact_number,
        location: formData.user_location,
        message: formData.content,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        toastError("Something went wrong");
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      toastSuccess("Form submitted successfully!");
      setFormData({
        first_name: "",
        email: "",
        countryCode: "+91",
        contact_number: "",
        user_location: "",
        content: "",
      });
      setErrors({});
      onClose(); // ✅ close modal after success
    } catch (err) {
      console.error("Error submitting form:", err);
      toastError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>

        <h3 className="form-heading py-2 pb-4 m-0">Quick Proposal</h3>

        <form className="reach-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="mb-1"
          />
          {errors.first_name && (
            <p className="error-text">{errors.first_name}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-1"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <div className="border border-2 rounded-3 merged-phone-input d-flex">
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
              placeholder="Phone Number"
              name="contact_number"
              value={formData.contact_number}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // digits only

                if (formData.countryCode === "+91" && value.length > 10) return;
                if (formData.countryCode === "+61" && value.length > 9) return;
                if (formData.countryCode === "+65" && value.length > 8) return;
                if (formData.countryCode === "+44" && value.length > 10) return;

                setFormData({ ...formData, contact_number: value });
              }}
              className="border-0 flex-grow-1"
            />
          </div>
          {errors.contact_number && (
            <p className="error-text">{errors.contact_number}</p>
          )}

          <input
            type="text"
            placeholder="Location"
            name="user_location"
            value={formData.user_location}
            onChange={handleChange}
            className="mb-1"
          />
          {errors.user_location && (
            <p className="error-text">{errors.user_location}</p>
          )}

          <textarea
            rows={3}
            placeholder="Message (optional)"
            name="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="btn btn-dark rounded-2 px-5 mb-1"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
