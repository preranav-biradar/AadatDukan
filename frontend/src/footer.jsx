import React, { useState } from "react";

export default function ContactSection() {
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (!contactName || !contactMessage) {
      alert("Please fill out both fields before submitting.");
      return;
    }

    alert(`Thank you, ${contactName}! Your message has been received.`);
    setContactName("");
    setContactMessage("");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "48px 18px",
        background: "#0f1724",
        color: "#e6eef6",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Form */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12 }}>
            Get In Touch
          </h3>
          <form onSubmit={handleContactSubmit}>
            <input
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: 10,
                borderRadius: 6,
                border: "1px solid #334155",
                background: "#1e293b",
                color: "#e2e8f0",
              }}
            />
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="Your Message"
              rows={5}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: 10,
                borderRadius: 6,
                border: "1px solid #334155",
                background: "#1e293b",
                color: "#e2e8f0",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                padding: "10px 20px",
                border: "none",
                borderRadius: 6,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#fbbf24")}
              onMouseOut={(e) => (e.target.style.background = "#f59e0b")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
