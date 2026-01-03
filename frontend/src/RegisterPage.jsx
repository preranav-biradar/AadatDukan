import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaUserPlus } from "react-icons/fa";
import AuthLayout from "./components/AuthLayout";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = { name, email, password };
    console.log("Sending payload:", payload); // <-- check what is being sent

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Log status and full response body for debugging
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { raw: text };
      }
      console.log("Response status:", res.status);
      console.log("Response body:", data);

      if (res.ok) {
        alert(data.message || "Registered");
        navigate("/login");
      } else {
        alert(data.message || JSON.stringify(data));
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed! Please try again.");
    }
  };

  return (
    <AuthLayout
      formTitle={<><FaUserPlus /> <span>Register</span></>}
      sideTitle="Create Account"
      sideSubtitle="Join now to enjoy all member benefits and manage your profile easily."
      sideButtonLabel="Learn More"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <FaUser style={{ marginRight: 8 }} />Full Name
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
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
        <div>
          <FaLock style={{ marginRight: 8 }} />Password
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <FaLock style={{ marginRight: 8 }} />Confirm Password
          <input
            type="password"
            placeholder="Re-Enter Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <Link to="/login" style={{ color: "#ffd6ea", textDecoration: "none" }}>
          Already have an account? Login
        </Link>
      </div>
    </AuthLayout>
  );
}
