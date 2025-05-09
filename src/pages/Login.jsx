import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignupRedirect = () => {
    onClose();
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/api.php/authcustomer",
        {
          usrid: email,
          passwd: password,
          deviceid: "testdevice",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;

      setLoading(false);

      const statusMessage = responseData?.[0]?.LoginStatus?.[0]?.Status;

      if (statusMessage === "Success") {
        toast.success("✅ Successfully logged in!", {
          position: "top-right",
          autoClose: 2500,
        });

        localStorage.setItem("user", JSON.stringify(responseData[0]));

        setTimeout(() => {
          onClose();
          navigate("/"); // Redirect to Home
        }, 2500);
      } else {
        toast.error("❌ Login failed: Invalid credentials", {
          position: "top-right",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("❌ Login failed: Server error", {
        position: "top-right",
      });
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="overlay1">
        <div className="modal">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <h2 className="modal-title">Log In</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>

            <p className="signup-text">
              Don’t have an account?{" "}
              <span
                onClick={handleSignupRedirect}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
