import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";
import logo from "../assets/logo-sticky.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    lastname: "",
    firstname: "",
    gender: "",
    mobile: "",
    email: "",
    terms: false,
    newsl: false,
    passwd: "",
    confirmPassword: "",
    ipadd: "",
    smssub: "",
    emailOTPVerified: 1,
  });

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await axios.get("https://api.ipify.org?format=json");
        setFormData((prev) => ({ ...prev, ipadd: res.data.ip }));
      } catch (err) {
        console.error("Error fetching IP:", err);
      }
    };
    fetchIP();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.passwd !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        title: formData.title,
        firstname: formData.firstname,
        lastname: formData.lastname,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        terms: formData.terms ? "1" : "0",
        newsl: formData.newsl ? "1" : "0",
        passwd: formData.passwd,
        ipadd: formData.ipadd,
        smssub: formData.smssub,
        emailOTPVerified: formData.emailOTPVerified,
      };

      await axios.post("/api/api.php/customersignup", payload);

      toast.success("Successfully submitted!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      console.error("Signup error:", error.response || error.message);
      toast.error("Signup failed! Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer />
      <div className="form-section">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <label>Salutation</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>

          <label>First Name</label>
          <input
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. muster@domain.de"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Mobile</label>
          <input
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <label>Gender</label>
          <input
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="passwd"
            placeholder="Password"
            value={formData.passwd}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <label>IP Address</label>
          <input name="ipadd" value={formData.ipadd} readOnly />

          <label>OTP Verification</label>
          <input
            name="emailOTPVerified"
            value={formData.emailOTPVerified}
            readOnly
          />

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label>Accept terms and conditions</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="newsl"
              checked={formData.newsl}
              onChange={handleChange}
            />
            <label>Subscribe to our newsletter</label>
          </div>

          <button type="submit">Create an account</button>

          <p className="signin-link">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>

      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          alt="Laptop"
        />
      </div>
    </div>
  );
};

export default SignupPage;
