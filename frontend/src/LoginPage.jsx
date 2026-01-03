import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import AuthLayout from "./components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); // store JWT
        alert("Login successful!");
        navigate("/dashboard"); // redirect to protected page
      } else {
        alert(data.message); // show backend error (wrong credentials)
      }
    } catch (err) {
      console.error(err);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <AuthLayout
      formTitle={<><FaSignInAlt /> <span>Sign in</span></>}
      sideTitle="Welcome!"
      sideSubtitle="Sign in to access your dashboard and manage your account."
      sideButtonLabel="Learn More"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <FaUser style={{ marginRight: 8 }} />Email
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

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.06)", margin: "18px 0" }} />

      <div style={{ textAlign: "center" }}>
        <Link to="/register" style={{ color: "#ffd6ea", textDecoration: "none" }}>
          Don't have an account? Register
        </Link>
      </div>

      <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.06)", margin: "18px 0" }} />

      <div style={{ textAlign: "center" }}>
        <Link to="/forgot-password" style={{ color: "#ffd6ea", textDecoration: "none" }}>
          Forgot Password?
        </Link>
      </div>
    </AuthLayout>
  );
}
