import React from "react";

export default function AuthLayout({
  sideTitle = "Welcome!",
  sideSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  sideButtonLabel = "Learn More",
  formTitle,
  children,
}) {
  const styles = {
    page: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg,#2b0934 0%, #5b0f6b 50%, #2f0b3a 100%)",
      color: "white",
      overflow: "hidden",
    },
    inner: {
      width: "95%",
      maxWidth: "1100px",
      height: "75%",
      display: "flex",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      overflow: "hidden",
    },
    left: {
      flex: 1.2,
      padding: "60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "20px",
      background:
        "radial-gradient(600px 200px at 10% 10%, rgba(255,255,255,0.04), transparent), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
    },
    sideTitle: {
      fontSize: "56px",
      fontWeight: 800,
      lineHeight: 1,
      margin: 0,
    },
    sideSubtitle: {
      maxWidth: "520px",
      opacity: 0.9,
      fontSize: "16px",
      marginTop: "10px",
    },
    sideButton: {
      marginTop: "20px",
      padding: "10px 20px",
      width: "140px",
      borderRadius: "20px",
      border: "none",
      background: "linear-gradient(90deg,#ff7a18,#ff3d81)",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },
    right: {
      flex: 0.9,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.06)",
      backdropFilter: "blur(8px)",
      padding: "40px 30px",
    },
    formWrapper: {
      width: "100%",
      maxWidth: "360px",
      color: "#fff",
    },
    formTitle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    hr: {
      border: "none",
      height: "1px",
      background: "rgba(255,255,255,0.07)",
      margin: "14px 0",
    },
    // responsive
    '@media (max-width: 900px)': {},
  };

  // Inline styles can't use media queries easily — add a simple responsive fallback
  const isNarrow = typeof window !== "undefined" && window.innerWidth < 900;

  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <div style={{ ...styles.left, display: isNarrow ? "none" : styles.left.display }}>
          <h1 style={styles.sideTitle}>{sideTitle}</h1>
          <p style={styles.sideSubtitle}>{sideSubtitle}</p>
          <button style={styles.sideButton}>{sideButtonLabel}</button>
        </div>

        <div style={{ ...styles.right, padding: isNarrow ? "30px 18px" : styles.right.padding }}>
          <div style={styles.formWrapper}>
            <div style={styles.formTitle}>{formTitle}</div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
