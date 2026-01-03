import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import AuthLayout from "./components/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg,#ff7a18,#ff3d81)",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message); // e.g., "Reset link sent to your email"
      } else {
        alert(data.message); // show backend error (e.g., email not found)
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send reset link. Please try again.");
    }
  };

  return (
    <AuthLayout
      formTitle={<><FaUnlockAlt /> <span>Forgot Password</span></>}
      sideTitle="Forgot Password?"
      sideSubtitle="Enter your email address below and we'll send you a link to reset your password."
      sideButtonLabel="Learn More"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <FaEnvelope style={{ marginRight: 8 }} />Email
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Send Reset Link
        </button>
      </form>

      <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.06)", margin: "18px 0" }} />

      <div style={{ textAlign: "center" }}>
        <Link to="/login" style={{ color: "#ffd6ea", textDecoration: "none" }}>
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
