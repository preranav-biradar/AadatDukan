import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import { FaUnlockAlt } from "react-icons/fa";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(""); // <-- new
  const [errorMsg, setErrorMsg] = useState("");     // <-- new

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
      setErrorMsg("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(data.message); // show success in the same tab
        setErrorMsg("");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setErrorMsg(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to reset password. Try again.");
    }
  };

  return (
    <AuthLayout
      formTitle={<><FaUnlockAlt /> <span>Reset Password</span></>}
      sideTitle="Reset Your Password"
      sideSubtitle="Enter your new password below to reset your account password."
      sideButtonLabel="Learn More"
    >
      <form onSubmit={handleSubmit}>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: "limegreen" }}>{successMsg}</p>}

        <div>
          New Password
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Reset Password
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <Link to="/login" style={{ color: "#ffd6ea", textDecoration: "none" }}>
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
