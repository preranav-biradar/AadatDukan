import React, { useState } from "react";

export default function FeedbackSection() {
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (!contactName.trim() || !contactMessage.trim()) {
      setShowModal(true);
      setError("Please fill in your name and message before submitting.");
      return;
    }

    const newReview = { name: contactName, message: contactMessage };
    setReviews([...reviews, newReview]);
    setContactName("");
    setContactMessage("");
  };

  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setShowModal(false);
    setError("");
  };

  return (
    <div style={{ flex: 1, minWidth: 300 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: "#fff" }}>
        Feedback
      </h3>

      {/* Feedback Form */}
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

      {/* Modal for empty fields */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 30,
              borderRadius: 10,
              width: 320,
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h4 style={{ marginBottom: 10, color: "#111827" }}>Incomplete Form</h4>
            <p style={{ color: "#374151", marginBottom: 20 }}>{error}</p>
            <button
              onClick={closeModal}
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                border: "none",
                padding: "8px 18px",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Reviews Display Section */}
      {reviews.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <h4 style={{ color: "#fff", marginBottom: 10 }}>Reviews</h4>
          {reviews.map((r, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                color: "#e2e8f0",
                borderRadius: 8,
                padding: 12,
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{r.name}</strong>
                <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>{r.message}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
